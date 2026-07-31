import {
  readFile,
  readdir,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";

const rootDirectories = ["app", "components"];
const companyUrl =
  "https://www.linkedin.com/company/vik-tech-solutions/";

const genericLinkedInPatterns = [
  /https:\/\/www\.linkedin\.com\/?(?!company\/vik-tech-solutions\/)/g,
  /https:\/\/linkedin\.com\/?(?!company\/vik-tech-solutions\/)/g,
];

const supportedExtensions = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".md",
]);

const changedFiles = [];

async function visit(target) {
  let targetStat;

  try {
    targetStat = await stat(target);
  } catch {
    return;
  }

  if (targetStat.isDirectory()) {
    const entries = await readdir(target);
    await Promise.all(entries.map((entry) => visit(path.join(target, entry))));
    return;
  }

  if (!supportedExtensions.has(path.extname(target))) return;

  const original = await readFile(target, "utf8");
  let updated = original;

  for (const pattern of genericLinkedInPatterns) {
    updated = updated.replace(pattern, companyUrl);
  }

  if (updated !== original) {
    await writeFile(target, updated, "utf8");
    changedFiles.push(target);
  }
}

for (const directory of rootDirectories) {
  await visit(directory);
}

if (changedFiles.length === 0) {
  console.log("LinkedIn links are already updated.");
} else {
  console.log("Updated LinkedIn links:");
  for (const file of changedFiles) {
    console.log(`- ${file}`);
  }
}
