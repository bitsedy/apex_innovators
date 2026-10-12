const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else if (fullPath.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

let modifiedCount = 0;
walk('prototype', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Pattern: content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no..."
  // or user-scalable=0
  if (content.includes('user-scalable=no') || content.includes('user-scalable=0') || content.includes('maximum-scale=1.0')) {
    // Replace viewport meta tag with accessible viewport
    content = content.replace(
      /<meta\s+name=["']viewport["']\s+content=["'][^"']*user-scalable=[^"']*["']\s*\/?>/gi,
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">'
    );
    // Also catch when maximum-scale=1.0 is without user-scalable
    content = content.replace(
      /<meta\s+name=["']viewport["']\s+content=["']width=device-width,\s*initial-scale=1\.0,\s*maximum-scale=1\.0["']\s*\/?>/gi,
      '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">'
    );
    changed = true;
    modifiedCount++;
    console.log('Fixed viewport accessibility in:', filePath);
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`Total files updated for WCAG 1.4.4 viewport scalability: ${modifiedCount}`);
