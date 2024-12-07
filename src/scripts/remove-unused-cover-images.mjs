import fs from 'fs/promises';
import path from 'path';

async function findUsedCoverImages() {
  const blogFolder = './blog';
  const coverImageFolder = './static/img/cover';

  async function findMarkdownFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const res = path.resolve(dir, entry.name);
      if (entry.isDirectory()) {
        // Recursively search subdirectories
        files.push(...(await findMarkdownFiles(res)));
      } else if (entry.isFile() && path.extname(res) === '.md') {
        files.push(res);
      }
    }

    return files;
  }

  try {
    // Recursively find all markdown files
    const mdFiles = await findMarkdownFiles(blogFolder);

    // Set to store used cover images
    const usedCoverImages = new Set();

    // Read each markdown file and extract cover images
    for (const filePath of mdFiles) {
      const content = await fs.readFile(filePath, 'utf8');

      // Use regex to find coverImage value
      const coverImageMatch = content.match(/coverImage:\s*['"](.+?)['"]/);

      if (coverImageMatch) {
        usedCoverImages.add(coverImageMatch[1]);
      }
    }

    // Read all images in the cover folder
    const coverImages = await fs.readdir(coverImageFolder);

    // Track deleted images
    const deletedImages = [];

    // Delete unused images
    for (const image of coverImages) {
      if (!usedCoverImages.has(image)) {
        const imagePath = path.join(coverImageFolder, image);
        await fs.unlink(imagePath);
        deletedImages.push(image);
      }
    }

    // Report results
    console.log('Used Cover Images:', [...usedCoverImages]);
    console.log(
      'Deleted Unused Images:',
      deletedImages.length,
      JSON.stringify(deletedImages, null, 2)
    );
  } catch (error) {
    console.error('Error processing files:', error);
  }
}

// Run the script
findUsedCoverImages();
