import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import sharp from 'sharp';
import { __dirname, blogPath, getAllFilesRecursively } from './helpers.mjs';

const targetWidth = 740;
const coverPath = resolve(__dirname, '../../static/img/cover');

const allImagesInBlog = [];
for (const dir of [blogPath, coverPath]) {
  getAllFilesRecursively(dir, allImagesInBlog, '.png');
  getAllFilesRecursively(dir, allImagesInBlog, '.jpg');
}

console.log(`Found ${allImagesInBlog.length}`);

let count = 0;
for (const imagePath of allImagesInBlog) {
  try {
    // Read into a buffer so we can safely overwrite the same file
    const input = await readFile(imagePath);
    const { width } = await sharp(input).metadata();

    if (width > targetWidth) {
      const output = await sharp(input)
        .resize({ width: targetWidth })
        .toBuffer();
      await writeFile(imagePath, output);
      count++;
      console.log(`Resized ${imagePath} from ${width}px to ${targetWidth}px`);
    }
  } catch (err) {
    console.error(`Failed on ${imagePath}:`, err.message);
  }
}

console.log(`Resized ${count} images`);
