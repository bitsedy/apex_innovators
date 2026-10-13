const fs = require('fs');
const path = require('path');

const portals = ['parent', 'staff', 'admin', 'gate', 'sysadmin'];

portals.forEach(portal => {
  const dir = path.join(__dirname, '..', 'prototype', portal);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'login.html');
  console.log(`\n==================== PORTAL: ${portal.toUpperCase()} ====================`);
  files.forEach(f => {
    const html = fs.readFileSync(path.join(dir, f), 'utf8');
    
    // Aside nav links
    const asideMatch = html.match(/<aside[\s\S]*?<\/aside>/i);
    const drawerLinks = [];
    if (asideMatch) {
      const aRegex = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
      let m;
      while ((m = aRegex.exec(asideMatch[0])) !== null) {
        const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        drawerLinks.push(`${text} (${m[1]})`);
      }
    }

    // Header nav links
    const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
    const headerLinks = [];
    if (headerMatch) {
      const aRegex = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
      let m;
      while ((m = aRegex.exec(headerMatch[0])) !== null) {
        const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        headerLinks.push(`${text} (${m[1]})`);
      }
    }

    // Bottom mobile nav if present
    const navMatch = html.match(/<nav class="fixed bottom-0[\s\S]*?<\/nav>/i);
    const mobileBottomLinks = [];
    if (navMatch) {
      const aRegex = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
      let m;
      while ((m = aRegex.exec(navMatch[0])) !== null) {
        const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
        mobileBottomLinks.push(`${text} (${m[1]})`);
      }
    }

    console.log(`\n--- ${f} ---`);
    if (drawerLinks.length) console.log(`  Drawer: ${drawerLinks.join(' | ')}`);
    if (headerLinks.length) console.log(`  Header: ${headerLinks.join(' | ')}`);
    if (mobileBottomLinks.length) console.log(`  Mobile Bottom: ${mobileBottomLinks.join(' | ')}`);
  });
});
