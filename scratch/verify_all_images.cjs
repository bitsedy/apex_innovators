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
let brokenFound = 0;
let personIconsFound = 0;

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('lh3.googleusercontent.com/aida/')) {
    console.log('BROKEN AIDA URL in:', f);
    brokenFound++;
  }
  // Check if header still has the blank person icon
  const headerMatch = c.match(/<header[\s\S]*?<\/header>/);
  if (headerMatch && headerMatch[0].includes('>person</span>') && headerMatch[0].includes('rounded-full bg-primary')) {
    console.log('BLANK PERSON ICON in header in:', f);
    personIconsFound++;
  }
});

console.log(`Verification Complete: ${brokenFound} broken AIDA URLs, ${personIconsFound} blank person icons in headers.`);
