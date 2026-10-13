const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];

portals.forEach(portal => {
  const dir = path.join(root, 'prototype', portal);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('mobile-') && f !== 'login.html');
  files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
    if (!headerMatch) return;
    const h = headerMatch[0];

    // Let's see what querySelector('header .flex.items-center:last-child, header > div > .flex.items-center:last-child') would match
    // In raw HTML, check what is the first match
    const hasTopBar = h.includes('h-8') || h.includes('border-b border-white/10') || h.includes('bg-primary text-on-primary');
    console.log(`[${portal}/${file}] hasMultiRowHeader: ${hasTopBar}`);
  });
});
