import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync, existsSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);

export const __dirname = dirname(__filename);

export const blogPath = resolve(__dirname, '../../blog');

function getBlogPostPaths() {
  const blogFolders = readdirSync(blogPath);

  return blogFolders
    .map((blogFolder) => {
      const postPath = resolve(blogPath, blogFolder, 'index.md');
      if (existsSync(postPath)) {
        return postPath;
      }
    })
    .filter(Boolean);
}

export const allPostPaths = getBlogPostPaths();

export function getAllFilesRecursively(rootDir, arrayOfFiles, extension) {
  const files = readdirSync(rootDir);

  files.forEach(function (file) {
    if (statSync(rootDir + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFilesRecursively(
        rootDir + '/' + file,
        arrayOfFiles,
        extension
      );
    } else {
      if (file.endsWith(extension)) {
        arrayOfFiles.push(join(rootDir, '/', file));
      }
    }
  });

  return arrayOfFiles;
}
