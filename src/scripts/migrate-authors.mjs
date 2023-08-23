import { existsSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { XMLParser } from "fast-xml-parser";
import { authorIds } from "./authorIds.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const exportFilePath = join(__dirname, "../../export.xml");
const exportFileContents = readFileSync(exportFilePath, "utf-8");

const parser = new XMLParser();
const exportObject = parser.parse(exportFileContents);
const posts = exportObject.rss.channel.item;

const blogPath = join(__dirname, "../../blog");
const postsWithAuthors = [];
for (const post of posts) {
  const filePath = join(
    blogPath,
    post.link.replace("http://techwriter.pl/", "").slice(0, -1).split("/")[0] +
      "/index.md"
  );

  if (existsSync(filePath)) {
    postsWithAuthors.push({
      filePath,
      author: authorIds[post["dc:creator"]],
    });
  }
}

writeFileSync(
  "postToAuthorMappings.json",
  JSON.stringify(postsWithAuthors, null, 2)
);
console.log(`Found ${postsWithAuthors.length} posts with authors`);
