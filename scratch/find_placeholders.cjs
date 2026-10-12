const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.html') || file.endsWith('.js')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk('prototype');
const placeholderSrcs = [];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const imgRegex = /<img[^>]+src=["']([^"']*)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (src.includes('placeholder') || src === '' || src === '#' || src.includes('undefined') || src.includes('null')) {
      placeholderSrcs.push({ file: f, src, tag: match[0] });
    }
  }
});

console.log('Placeholder src count:', placeholderSrcs.length);
placeholderSrcs.forEach(p => console.log(p.file, '-->', p.tag));
