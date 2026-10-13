const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function searchDir(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', '.gemini', 'dist'].includes(entry.name)) {
        searchDir(full, fileList);
      }
    } else if (/\.(html|js|cjs|json|css|md)$/i.test(entry.name)) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/headmistress/gi);
      if (matches) {
        fileList.push({ file: path.relative(root, full), count: matches.length });
      }
    }
  }
  return fileList;
}

const list = searchDir(root);
console.log('Files with headmistress (' + list.length + ' files):');
let total = 0;
list.forEach(item => {
  console.log(`${item.file}: ${item.count}`);
  total += item.count;
});
console.log('Total occurrences:', total);
