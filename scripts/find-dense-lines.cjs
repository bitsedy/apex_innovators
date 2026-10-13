const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];
const results = [];

portals.forEach(portal => {
  const dir = path.join(root, 'prototype', portal);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('mobile-'));
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      // Check for dense text paragraphs
      const clean = line.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
      const words = clean.split(/\s+/).filter(Boolean);
      if (words.length >= 25 && !line.includes('<script') && !line.includes('{') && !line.includes('function') && !line.includes('d="M') && !line.includes('class=')) {
        results.push({
          file: `${portal}/${file}`,
          lineNum: idx + 1,
          wordCount: words.length,
          preview: clean.substring(0, 100),
          fullLine: line.trim()
        });
      }
    });
  });
});

console.log(`Found ${results.length} dense text lines:`);
results.forEach(r => {
  console.log(`\n--- [${r.file}:${r.lineNum}] (${r.wordCount} words) ---`);
  console.log(r.preview);
});

fs.writeFileSync(path.join(root, 'scripts', 'dense-lines.json'), JSON.stringify(results, null, 2), 'utf8');
