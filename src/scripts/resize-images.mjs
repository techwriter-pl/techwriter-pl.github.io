import { __dirname, blogPath, getAllFilesRecursively } from './helpers.mjs';
import gm from 'gm';
import { resolve } from 'path';

const im = gm.subClass({ imageMagick: '7+' });

const allImagesInBlog = [];

getAllFilesRecursively(blogPath, allImagesInBlog, '.png');
getAllFilesRecursively(blogPath, allImagesInBlog, '.jpg');
getAllFilesRecursively(resolve(__dirname, '../../static/img/cover'), allImagesInBlog, '.png');
getAllFilesRecursively(resolve(__dirname, '../../static/img/cover'), allImagesInBlog, '.jpg');

console.log({ allImagesInBlog }, `Found ${allImagesInBlog.length}`);

let count = 0;
for (const imagePath of allImagesInBlog) {
  im(imagePath).size(function (err, size) {
    if (err) {
      throw err;
    }
    const width = size.width;
    console.log(width, imagePath);
    if (width > 500) {
      im(imagePath)
        .resize(500, 500)
        .write(imagePath, function (err) {
          if (!err) {
            count++;
            console.log(`Resized ${imagePath} from ${width} to 500`);
          }
        });
    }
  });
}

console.log(`Resized ${count} images`);
