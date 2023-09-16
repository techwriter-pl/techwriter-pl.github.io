import { allPostPaths } from './helpers.mjs';
import { readFileSync, writeFileSync } from 'fs';

function getSecondEmptyLineIndex(lines) {
  let foundFirstEmptyLine = false;
  for (const [i, line] of lines.entries()) {
    if (line.length === 0) {
      if (!foundFirstEmptyLine) {
        foundFirstEmptyLine = true;
      } else {
        return i;
      }
    }
  }

  return undefined;
}

for (const postPath of allPostPaths) {
  const postContents = readFileSync(postPath, 'utf-8');
  const lines = postContents.split('\r\n');
  const secondEmptyLineIndex = getSecondEmptyLineIndex(lines);

  if (secondEmptyLineIndex !== undefined) {
    lines.splice(secondEmptyLineIndex, 0, '\r\n<!--truncate-->');

    writeFileSync(postPath, lines.join('\r\n'), { encoding: 'utf-8' });
  }
}
