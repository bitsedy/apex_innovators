const fs = require('fs');
const path = require('path');

const gateDir = path.join(__dirname, '..', 'prototype', 'gate');
fs.readdirSync(gateDir).forEach(f => {
  if (f.endsWith('.html')) {
    const c = fs.readFileSync(path.join(gateDir, f), 'utf8');
    const matches = c.match(/backdrop-blur[^\s\"']*/g);
    if (matches) console.log(f, matches);
  }
});
