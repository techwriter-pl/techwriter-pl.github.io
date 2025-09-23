import { __dirname, blogPath, getAllFilesRecursively } from './helpers.mjs';
import gm from 'gm';
import { resolve } from 'path';

const targetWidth = 740;
const im = gm.subClass({ imageMagick: '7+' });

const allImagesInBlog = [];

getAllFilesRecursively(blogPath, allImagesInBlog, '.png');
getAllFilesRecursively(blogPath, allImagesInBlog, '.jpg');
getAllFilesRecursively(
  resolve(__dirname, '../../static/img/cover'),
  allImagesInBlog,
  '.png'
);
getAllFilesRecursively(
  resolve(__dirname, '../../static/img/cover'),
  allImagesInBlog,
  '.jpg'
);

console.log({ allImagesInBlog }, `Found ${allImagesInBlog.length}`);

let count = 0;
for (const imagePath of allImagesInBlog) {
  im(imagePath).size(function (err, size) {
    if (err) {
      throw err;
    }
    const width = size.width;
    console.log(width, imagePath);
    if (width > targetWidth) {
      im(imagePath)
        .resize(targetWidth)
        .write(imagePath, function (err) {
          if (!err) {
            count++;
            console.log(
              `Resized ${imagePath} from ${width}px to ${targetWidth}px`
            );
          }
        });
    }
  });
}

console.log(`Resized ${count} images`);
