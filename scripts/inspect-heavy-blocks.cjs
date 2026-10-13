const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];
const heavyBlocks = [];

portals.forEach(portal => {
  const dir = path.join(root, 'prototype', portal);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('mobile-'));

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const pMatches = [...content.matchAll(/<(?:p|div|span|li|td)[^>]*>([\s\S]*?)<\/(?:p|div|span|li|td)>/gi)];
    pMatches.forEach(m => {
      const rawText = m[1].replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
      const wordCount = rawText.split(/\s+/).filter(Boolean).length;
      if (wordCount >= 26 && !rawText.includes('{') && !rawText.includes('function') && !rawText.includes('class=')) {
        heavyBlocks.push({
          file: `${portal}/${file}`,
          fullMatch: m[0],
          tagContent: m[1].trim(),
          wordCount,
          preview: rawText.substring(0, 100)
        });
      }
    });
  });
});

console.log(`Found ${heavyBlocks.length} total blocks with >= 26 words.`);
fs.writeFileSync(path.join(root, 'scripts', 'heavy-blocks-detail.json'), JSON.stringify(heavyBlocks, null, 2), 'utf8');
heavyBlocks.forEach((b, i) => {
  console.log(`[${i+1}] ${b.file} (${b.wordCount} words): ${b.preview}`);
});
