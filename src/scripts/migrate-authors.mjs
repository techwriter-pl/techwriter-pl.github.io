import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { XMLParser } from 'fast-xml-parser';
import { authorIds } from './authorIds.mjs';
import { __dirname, blogPath } from './helpers.mjs';

const exportFilePath = join(__dirname, '../../export.xml');
const exportFileContents = readFileSync(exportFilePath, 'utf-8');

const parser = new XMLParser();
const exportObject = parser.parse(exportFileContents);
const posts = exportObject.rss.channel.item;

const postsWithAuthors = [];
for (const post of posts) {
  const filePath = join(
    blogPath,
    post.link.replace('http://techwriter.pl/', '').slice(0, -1).split('/')[0] +
      '/index.md'
  );

  if (
    existsSync(filePath) &&
    !postsWithAuthors.some((p) => p.filePath === filePath)
  ) {
    postsWithAuthors.push({
      filePath,
      author: authorIds[post['dc:creator']],
    });
  }
}

console.log(`Found ${postsWithAuthors.length} posts with authors`);

for (const postsWithAuthor of postsWithAuthors) {
  const postContents = readFileSync(postsWithAuthor.filePath, 'utf-8');
  const updatedContents = postContents.replace(
    'date: ',
    `authors: ${postsWithAuthor.author}\ndate: `
  );

  writeFileSync(postsWithAuthor.filePath, updatedContents);
}

console.log('DONE!');
