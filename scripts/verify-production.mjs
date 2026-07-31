import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import process from "node:process";

const requiredFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/icon.tsx",
  "app/apple-icon.tsx",
  "app/opengraph-image.tsx",
  "app/twitter-image.tsx",
  "app/manifest.ts",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/not-found.tsx",
  "components/site-header.tsx",
  "components/site-footer.tsx",
  "public/brand/vikvar-logo-primary.png",
  "public/brand/vikvar-logo-mark.png",
  "public/brand/vikvar-app-icon.png",
  "next.config.ts",
  "package.json",
];

const missing = [];

for (const file of requiredFiles) {
  try {
    await access(file, constants.R_OK);
  } catch {
    missing.push(file);
  }
}

const filesToInspect = [
  "app/page.tsx",
  "app/homepage-reference.css",
  "components/media/media-library.ts",
];

const remoteAssets = [];

for (const file of filesToInspect) {
  try {
    const content = await readFile(file, "utf8");
    const urls = content.match(/https:\/\/[^"'`\s)]+/g) ?? [];
    for (const url of urls) {
      if (url.includes("images.unsplash.com")) {
        remoteAssets.push(`${file}: ${url}`);
      }
    }
  } catch {
    // Optional file: skip when absent.
  }
}

console.log("\nVikvar production verification\n");

if (missing.length) {
  console.error("Missing required files:");
  for (const file of missing) console.error(`- ${file}`);
} else {
  console.log("✓ Required production files are present.");
}

if (remoteAssets.length) {
  console.warn("\nRemote media still detected:");
  for (const asset of remoteAssets) console.warn(`- ${asset}`);
  console.warn(
    "\nThis is not a build failure. Replace these assets with approved local files before final launch when available.",
  );
} else {
  console.log("✓ No remote Unsplash image URLs detected in inspected files.");
}

console.log("\nRun next:");
console.log("1. npm run build");
console.log("2. npm run dev");
console.log("3. Test /icon, /apple-icon and /opengraph-image\n");

if (missing.length) process.exitCode = 1;
