// cleanup.mjs
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

async function getAllMarkdownFiles(dirPath, fileList = []) {
  const files = await fs.readdir(dirPath, { withFileTypes: true });

  for (const file of files) {
    const filePath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      await getAllMarkdownFiles(filePath, fileList);
    } else if (file.name.endsWith('.md') || file.name.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

async function parseFileDate(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const { data } = matter(content);

    if (data.date) {
      return {
        path: filePath,
        date: new Date(data.date),
        parentDir: path.dirname(filePath),
      };
    }

    // If no date found, return null or a placeholder date
    return {
      path: filePath,
      date: new Date(0), // Unix epoch as fallback
      parentDir: path.dirname(filePath),
    };
  } catch (error) {
    console.error(`Error parsing file ${filePath}:`, error.message);
    return {
      path: filePath,
      date: new Date(0),
      parentDir: path.dirname(filePath),
    };
  }
}

async function deleteDirectory(dirPath) {
  try {
    await fs.rm(dirPath, { recursive: true, force: true });
    console.log(`Deleted directory: ${dirPath}`);
  } catch (error) {
    console.error(`Error deleting directory ${dirPath}:`, error.message);
  }
}

async function main(startDir) {
  try {
    const allMarkdownFiles = await getAllMarkdownFiles(startDir);
    console.log(`Found ${allMarkdownFiles.length} markdown files`);

    const limit = 10;
    if (allMarkdownFiles.length <= limit) {
      console.log(
        `Only ${allMarkdownFiles.length} out of the allowed ${limit} files remaining. Nothing to delete!`
      );
      return;
    }

    const fileDataPromises = allMarkdownFiles.map(parseFileDate);
    const fileData = await Promise.all(fileDataPromises);

    fileData.sort((a, b) => b.date - a.date);

    const filesToKeep = fileData.slice(0, limit);
    const filesToDelete = fileData.slice(limit);

    console.log(`Keeping ${filesToKeep.length} latest files:`);
    filesToKeep.forEach((file) =>
      console.log(`- ${file.path} (${file.date.toISOString()})`)
    );

    console.log(
      `\nDeleting parent directories of ${filesToDelete.length} older files:`
    );

    const processedDirs = new Set();

    for (const file of filesToDelete) {
      if (!processedDirs.has(file.parentDir)) {
        processedDirs.add(file.parentDir);

        const keepingFilesInSameDir = filesToKeep.some(
          (keep) => keep.parentDir === file.parentDir
        );

        if (!keepingFilesInSameDir) {
          console.log(`Will delete: ${file.parentDir} (contains ${file.path})`);
          await deleteDirectory(file.parentDir);
        } else {
          console.log(
            `Skipping deletion of ${file.parentDir} as it contains files we want to keep`
          );
        }
      }
    }

    console.log('Clean-up completed!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main('./wydarzenia');
