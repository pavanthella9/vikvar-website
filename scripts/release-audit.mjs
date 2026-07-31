import { access, readFile, readdir, stat } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import process from "node:process";

const requiredFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/not-found.tsx",
  "app/manifest.ts",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/opengraph-image.tsx",
  "app/twitter-image.tsx",
  "components/site-header.tsx",
  "components/site-footer.tsx",
  "next.config.ts",
  "package.json",
  "tsconfig.json",
];

const recommendedFiles = [
  "public/.well-known/security.txt",
  "public/brand/vikvar-logo-primary.png",
  "public/brand/vikvar-logo-mark.png",
  "public/brand/vikvar-app-icon.png",
  "LAUNCH-CHECKLIST.md",
  "MEDIA-LICENSES.md",
];

const textExtensions = new Set([
  ".js", ".jsx", ".ts", ".tsx", ".css", ".json", ".md", ".txt",
]);

const excludedDirectories = new Set([
  ".git", ".next", "node_modules", "_vikvar_backups",
]);

const errors = [];
const warnings = [];
const notes = [];

async function exists(target) {
  try {
    await access(target, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

for (const file of requiredFiles) {
  if (!(await exists(file))) errors.push(`Missing required file: ${file}`);
}

for (const file of recommendedFiles) {
  if (!(await exists(file))) warnings.push(`Recommended file not found: ${file}`);
}

async function walk(target, result = []) {
  let targetStat;
  try {
    targetStat = await stat(target);
  } catch {
    return result;
  }

  if (targetStat.isDirectory()) {
    if (excludedDirectories.has(path.basename(target))) return result;
    for (const entry of await readdir(target)) {
      await walk(path.join(target, entry), result);
    }
    return result;
  }

  if (textExtensions.has(path.extname(target))) result.push(target);
  return result;
}

const files = [
  ...(await walk("app")),
  ...(await walk("components")),
  ...(await walk("lib")),
  ...(await walk("public")),
];

const remoteAssets = [];
const placeholderSignals = [];
const localhostSignals = [];
const secretSignals = [];

const secretPatterns = [
  /AKIA[0-9A-Z]{16}/g,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g,
  /(?:api[_-]?key|secret|token)\s*[:=]\s*["'][^"']{12,}["']/gi,
];

for (const file of files) {
  let content;
  try {
    content = await readFile(file, "utf8");
  } catch {
    continue;
  }

  const remoteMatches = content.match(/https:\/\/images\.unsplash\.com\/[^"'`\s)]+/g) ?? [];
  for (const url of remoteMatches) remoteAssets.push(`${file}: ${url}`);

  if (/\b(?:TODO|FIXME|placeholder|coming soon)\b/i.test(content)) {
    placeholderSignals.push(file);
  }

  if (/https?:\/\/localhost(?::\d+)?/i.test(content)) {
    localhostSignals.push(file);
  }

  for (const pattern of secretPatterns) {
    if (pattern.test(content)) secretSignals.push(file);
    pattern.lastIndex = 0;
  }
}

if (remoteAssets.length) {
  warnings.push(
    `Remote Unsplash images remain (${remoteAssets.length}). Localise approved images before final production if practical.`,
  );
}

if (placeholderSignals.length) {
  warnings.push(
    `Possible placeholder/TODO wording found in ${new Set(placeholderSignals).size} file(s). Review before launch.`,
  );
}

if (localhostSignals.length) {
  warnings.push(
    `Localhost URL found in ${new Set(localhostSignals).size} file(s). Confirm it is documentation-only.`,
  );
}

if (secretSignals.length) {
  errors.push(
    `Potential secret material detected in ${new Set(secretSignals).size} file(s). Review immediately.`,
  );
}

try {
  const packageJson = JSON.parse(await readFile("package.json", "utf8"));

  if (!packageJson.scripts?.build) errors.push("package.json has no build script.");
  if (!packageJson.scripts?.dev) warnings.push("package.json has no dev script.");
  if (!packageJson.dependencies?.next) errors.push("Next.js dependency is missing.");
  if (!packageJson.dependencies?.react) errors.push("React dependency is missing.");

  notes.push(`Package: ${packageJson.name ?? "unknown"}`);
  notes.push(`Version: ${packageJson.version ?? "not set"}`);
  notes.push(`Next.js: ${packageJson.dependencies?.next ?? packageJson.devDependencies?.next ?? "unknown"}`);
} catch {
  errors.push("Could not read package.json.");
}

console.log("\nVikvar Release Audit\n");

for (const note of notes) console.log(`• ${note}`);

if (warnings.length) {
  console.log("\nWarnings:");
  for (const warning of warnings) console.warn(`⚠ ${warning}`);
}

if (errors.length) {
  console.log("\nErrors:");
  for (const error of errors) console.error(`✗ ${error}`);
} else {
  console.log("\n✓ No release-blocking file or secret issues detected.");
}

console.log("\nRequired next steps:");
console.log("1. npm run build");
console.log("2. npm run dev");
console.log("3. Test the launch checklist");
console.log("4. Deploy the exact successful commit\n");

if (errors.length) process.exitCode = 1;
