import { readFile, writeFile } from "node:fs/promises";

const layoutPath = "app/layout.tsx";
let layout = await readFile(layoutPath, "utf8");

const cssImport = 'import "./enterprise-accessibility.css";';
if (!layout.includes(cssImport)) {
  const lastCssImport = [...layout.matchAll(/^import\s+["'][^"']+\.css["'];$/gm)].at(-1);

  if (lastCssImport) {
    const insertAt = lastCssImport.index + lastCssImport[0].length;
    layout =
      layout.slice(0, insertAt) +
      `\n${cssImport}` +
      layout.slice(insertAt);
  } else {
    layout = `${cssImport}\n${layout}`;
  }
}

const componentImport =
  'import { BackToTop } from "@/components/ui/BackToTop";';

if (!layout.includes(componentImport)) {
  const importMatches = [...layout.matchAll(/^import .+;$/gm)];
  const lastImport = importMatches.at(-1);

  if (lastImport) {
    const insertAt = lastImport.index + lastImport[0].length;
    layout =
      layout.slice(0, insertAt) +
      `\n${componentImport}` +
      layout.slice(insertAt);
  } else {
    layout = `${componentImport}\n${layout}`;
  }
}

if (!layout.includes("<BackToTop")) {
  layout = layout.replace(
    /(<SiteFooter\s*\/>)/,
    "$1\n        <BackToTop />",
  );
}

if (!layout.includes('id="main-content"')) {
  layout = layout.replace(
    /(\{children\})/,
    '<div id="main-content">$1</div>',
  );
}

await writeFile(layoutPath, layout, "utf8");

console.log("Bundle 91–95 layout integration complete.");
console.log("- enterprise-accessibility.css imported");
console.log("- BackToTop added");
console.log("- main-content target verified");
