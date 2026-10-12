const fs = require('fs');
const path = require('path');

const PROTOTYPE_DIR = path.join(__dirname, '..', 'prototype');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getAllHtmlFiles(full));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const files = getAllHtmlFiles(PROTOTYPE_DIR);
let replacedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('href="javascript:void(0)"') || content.includes("href='javascript:void(0)'")) {
    const original = content;
    content = content.replace(/href=["']javascript:void\(0\)["']/g, 'href="#" role="button"');
    if (content !== original) {
      fs.writeFileSync(f, content, 'utf8');
      console.log(`Cleaned javascript:void(0) in ${path.relative(PROTOTYPE_DIR, f)}`);
      replacedCount++;
    }
  }
});

console.log(`Replaced javascript:void(0) in ${replacedCount} files.`);
