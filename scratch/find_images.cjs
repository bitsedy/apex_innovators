const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.html')) results.push(file);
  });
  return results;
}

const files = walk('prototype');
const imgMap = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/g);
  for (const m of matches) {
    const tag = m[0];
    const src = m[1];
    const altMatch = tag.match(/data-alt=["']([^"']+)["']|alt=["']([^"']+)["']/);
    const alt = altMatch ? (altMatch[1] || altMatch[2]) : '';
    if (!imgMap[src]) imgMap[src] = { alt, count: 0, files: [] };
    imgMap[src].count++;
    const rel = f.replace(/\\/g, '/');
    if (!imgMap[src].files.includes(rel)) imgMap[src].files.push(rel);
  }
});

const output = Object.entries(imgMap).map(([src, d]) => ({
  alt: d.alt,
  count: d.count,
  isAidaPublic: src.includes('aida-public'),
  isAidaPrivate: src.includes('/aida/'),
  src,
  files: d.files
}));

fs.writeFileSync('scratch/image_summary.json', JSON.stringify(output, null, 2));
console.log('Saved', output.length, 'images to scratch/image_summary.json');
