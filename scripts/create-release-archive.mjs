import { createWriteStream } from "node:fs";
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import archiver from "archiver";

const projectRoot = process.cwd();
const outputDirectory = path.join(projectRoot, "release");
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const outputPath = path.join(outputDirectory, `vikvar-website-${timestamp}.zip`);

const excluded = new Set([
  ".git",
  ".next",
  "node_modules",
  "release",
  "_vikvar_backups",
]);

await mkdir(outputDirectory, { recursive: true });

const output = createWriteStream(outputPath);
const archive = archiver("zip", { zlib: { level: 9 } });

archive.pipe(output);

async function addDirectory(current, relative = "") {
  const entries = await readdir(current);

  for (const entry of entries) {
    if (excluded.has(entry)) continue;

    const absolute = path.join(current, entry);
    const archivePath = path.join(relative, entry);
    const entryStat = await stat(absolute);

    if (entryStat.isDirectory()) {
      await addDirectory(absolute, archivePath);
    } else {
      archive.file(absolute, { name: archivePath });
    }
  }
}

await addDirectory(projectRoot);
await archive.finalize();

await new Promise((resolve, reject) => {
  output.on("close", resolve);
  output.on("error", reject);
});

console.log(`Release archive created:\n${outputPath}`);
