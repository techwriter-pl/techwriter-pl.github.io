import {
  readdirSync,
  readFileSync,
  existsSync,
  renameSync,
  writeFileSync,
  mkdirSync,
} from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const blogDir = resolve(__dirname, "../../blog");
const coverImagesDir = resolve(__dirname, "../../static/img/cover");

const blogFolders = readdirSync(blogDir);

for (const blogFolder of blogFolders) {
  const postPath = resolve(blogDir, blogFolder, "index.md");
  if (existsSync(postPath)) {
    const postContents = readFileSync(postPath, "utf-8");
    const coverImageMatch = postContents.match(/coverImage: ([^\r\n]+)/);
    if (coverImageMatch) {
      const coverImageFieldValue = coverImageMatch[1].replace(/"/g, "");

      const oldPath = resolve(
        dirname(postPath),
        "images",
        coverImageFieldValue
      );

      if (!existsSync(oldPath)) {
        throw new Error(`Cannot find ${oldPath}`);
      }

      if (!existsSync(coverImagesDir)) {
        mkdirSync(coverImagesDir, { recursive: true });
      }

      const newPath = resolve(coverImagesDir, coverImageFieldValue);

      renameSync(oldPath, newPath);
    }
  }
}
