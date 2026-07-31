import { readFile, writeFile } from "node:fs/promises";

const target = "components/site-footer.tsx";
let content = await readFile(target, "utf8");

const official =
  "https://www.linkedin.com/company/vik-tech-solutions/";

content = content.replace(
  /href=["']#["'](\s+aria-label=["']LinkedIn["'])/g,
  `href="${official}"$1 target="_blank" rel="noopener noreferrer"`,
);

content = content.replace(
  /href=["']https:\/\/(?:www\.)?linkedin\.com\/?["']/g,
  `href="${official}"`,
);

await writeFile(target, content, "utf8");
console.log("Footer LinkedIn link updated.");
