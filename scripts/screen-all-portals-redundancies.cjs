const fs = require('fs');
const path = require('path');

const portals = ['parent', 'staff', 'admin', 'gate', 'sysadmin'];

let totalIssues = 0;

portals.forEach(portal => {
  const dir = path.join(__dirname, '..', 'prototype', portal);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

  files.forEach(f => {
    const html = fs.readFileSync(path.join(dir, f), 'utf8');

    // Check aside drawer nav
    const asideMatch = html.match(/<aside[\s\S]*?<\/aside>/i);
    if (asideMatch) {
      const links = [...asideMatch[0].matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
      const hrefs = links.map(l => l[1]);
      const texts = links.map(l => l[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));

      // check duplicate hrefs (base file or anchor)
      const seenHrefs = {};
      hrefs.forEach((h, idx) => {
        const base = h.split('#')[0];
        if (base && seenHrefs[base]) {
          console.log(`[${portal}/${f}] Duplicate base href in drawer: "${h}" matches earlier "${seenHrefs[base].href}" (labels: "${texts[idx]}" vs "${seenHrefs[base].text}")`);
          totalIssues++;
        } else if (base) {
          seenHrefs[base] = { href: h, text: texts[idx] };
        }
      });
    }

    // Check header nav
    const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
    if (headerMatch) {
      const headerNav = headerMatch[0].match(/<nav[\s\S]*?<\/nav>/i);
      if (headerNav) {
        const links = [...headerNav[0].matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
        const hrefs = links.map(l => l[1]);
        const texts = links.map(l => l[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));

        const seenHrefs = {};
        hrefs.forEach((h, idx) => {
          const base = h.split('#')[0];
          if (base && seenHrefs[base]) {
            console.log(`[${portal}/${f}] Duplicate base href in header nav: "${h}" matches earlier "${seenHrefs[base].href}" (labels: "${texts[idx]}" vs "${seenHrefs[base].text}")`);
            totalIssues++;
          } else if (base) {
            seenHrefs[base] = { href: h, text: texts[idx] };
          }
        });
      }
    }

    // Check mobile bottom nav
    const bottomNav = html.match(/<nav class="fixed bottom-0[\s\S]*?<\/nav>/i);
    if (bottomNav) {
      const links = [...bottomNav[0].matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
      const hrefs = links.map(l => l[1]);
      const texts = links.map(l => l[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));

      const seenHrefs = {};
      hrefs.forEach((h, idx) => {
        const base = h.split('#')[0];
        if (base && seenHrefs[base]) {
          console.log(`[${portal}/${f}] Duplicate base href in mobile bottom nav: "${h}" matches earlier "${seenHrefs[base].href}" (labels: "${texts[idx]}" vs "${seenHrefs[base].text}")`);
          totalIssues++;
        } else if (base) {
          seenHrefs[base] = { href: h, text: texts[idx] };
        }
      });
    }
  });
});

console.log(`\nTotal duplicate navigation targets detected: ${totalIssues}`);
