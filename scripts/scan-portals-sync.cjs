const fs = require('fs');
const path = require('path');

console.log('=== SCANNING PORTALS (ADMIN, PARENT, GATE, SYSADMIN) ===\n');

const dirs = ['admin', 'parent', 'gate', 'sysadmin'];
const results = {};

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, '..', 'prototype', dir);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html'));

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    // 1. Script syntax check
    const scripts = [...content.matchAll(/<script\b(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
    scripts.forEach((s, idx) => {
      try {
        new Function(s[1]);
      } catch (err) {
        issues.push(`Script #${idx} syntax error: ${err.message}`);
      }
    });

    // 2. Duplicate Google Font links
    const matSymbols = [...content.matchAll(/fonts\.googleapis\.com\/css2\?family=Material\+Symbols\+Outlined/g)];
    if (matSymbols.length > 1) {
      issues.push(`Duplicate Material Symbols font links: ${matSymbols.length} found`);
    }

    const jakartaSans = [...content.matchAll(/fonts\.googleapis\.com\/css2\?family=Plus\+Jakarta\+Sans/g)];
    if (jakartaSans.length > 1) {
      issues.push(`Duplicate Plus Jakarta Sans font links: ${jakartaSans.length} found`);
    }

    // 3. Currency symbol (GHS vs GH₵)
    if (/\bGHS\s*\d+/i.test(content)) {
      issues.push(`Uses currency "GHS" instead of standard "GH₵"`);
    }

    // 4. Legacy school names
    if (content.includes('St. Nicholas') || content.includes('@stnicholas') || content.includes('stnicholas.edu')) {
      issues.push(`Contains legacy school name leak: St. Nicholas / @stnicholas`);
    }

    // 5. Inconsistent principal name
    if (content.includes('Dr. Emmanuel Appiah (Principal') || content.includes('Dr. Emmanuel Appiah (Head')) {
      issues.push(`Contains old Principal name: Dr. Emmanuel Appiah`);
    }

    // 6. Nurse name check
    if (content.includes('Nurse Akua Baidoo') || content.includes('Nurse M. Quaye') || content.includes('Nurse Mary Asante')) {
      issues.push(`Contains non-standard nurse name`);
    }

    // 7. Missing carepoint-drawer-close-btn in desktop aside
    if (content.includes('<aside class="fixed') && !file.startsWith('mobile-') && file !== 'login.html') {
      if (!content.includes('carepoint-drawer-close-btn')) {
        issues.push(`Desktop <aside> missing standard carepoint-drawer-close-btn button`);
      }
      if (!content.includes('carepoint-brand-row')) {
        issues.push(`Desktop <aside> missing standard carepoint-brand-row container`);
      }
    }

    // 8. Missing header toggle button in desktop pages with aside
    if (content.includes('<aside class="fixed') && !file.startsWith('mobile-') && file !== 'login.html') {
      const headerMatch = content.match(/<header\b[^>]*>([\s\S]*?)<\/header>/i);
      if (headerMatch && !headerMatch[1].includes('data-drawer-toggle')) {
        issues.push(`Desktop <header> missing data-drawer-toggle button`);
      }
    }

    if (issues.length > 0) {
      results[`${dir}/${file}`] = issues;
    }
  });
});

console.log('--- SCAN RESULTS ---');
const issueFiles = Object.keys(results);
console.log(`Files with synchronization opportunities: ${issueFiles.length}\n`);

issueFiles.forEach(f => {
  console.log(`[${f}]`);
  results[f].forEach(iss => console.log(`   - ${iss}`));
});
