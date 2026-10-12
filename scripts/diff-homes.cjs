const fs = require('fs');

const h1 = fs.readFileSync('prototype/public/home.html', 'utf8').split('\n');
const h2 = fs.readFileSync('prototype/public/home-v2.html', 'utf8').split('\n');

console.log('Comparing home.html and home-v2.html:');
let diffCount = 0;
const max = Math.max(h1.length, h2.length);
for (let i = 0; i < max; i++) {
  const l1 = h1[i] !== undefined ? h1[i].trim() : '<EOF>';
  const l2 = h2[i] !== undefined ? h2[i].trim() : '<EOF>';
  if (l1 !== l2) {
    diffCount++;
    if (diffCount <= 15) {
      console.log(`Line ${i+1}:`);
      console.log(`  home.html   : ${l1.slice(0, 100)}`);
      console.log(`  home-v2.html: ${l2.slice(0, 100)}`);
    }
  }
}
console.log(`Total differing lines: ${diffCount}`);
