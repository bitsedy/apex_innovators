const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const portals = ['admin', 'staff', 'parent', 'gate', 'sysadmin'];
const report = [];

portals.forEach(portal => {
  const dir = path.join(root, 'prototype', portal);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('mobile-') && f !== 'login.html');

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Find <header...>...</header>
    const headerMatch = content.match(/<header[\s\S]*?<\/header>/i);
    const mainMatch = content.match(/<main[^>]*class="([^"]*)"/i);

    if (headerMatch) {
      const h = headerMatch[0];
      const hasTopBar = h.includes('h-8') || h.includes('bg-primary text-on-primary');
      const hasFixedH20 = h.includes('h-20');
      const mainClass = mainMatch ? mainMatch[1] : '';
      const hasPt28 = mainClass.includes('pt-28');
      const hasPt20 = mainClass.includes('pt-20') || mainClass.includes('pt-24');

      report.push({
        file: `${portal}/${file}`,
        hasTopBar,
        hasFixedH20,
        mainClass,
        headerClasses: (h.match(/<header[^>]*class="([^"]*)"/i) || [])[1] || ''
      });
    }
  });
});

console.log(`Audited ${report.length} desktop portal files:`);
report.forEach(r => {
  console.log(`[${r.file}] topBar: ${r.hasTopBar}, h20: ${r.hasFixedH20}, main: ${r.mainClass}`);
});
