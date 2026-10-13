const fs = require('fs');
const path = require('path');

const portals = ['staff', 'admin', 'parent', 'gate', 'sysadmin'];

portals.forEach(portal => {
  const dir = path.join(__dirname, '..', 'prototype', portal);
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.startsWith('mobile-') && f !== 'login.html');
  
  console.log(`\n================== PORTAL: ${portal.toUpperCase()} ==================`);
  files.forEach(f => {
    const filePath = path.join(dir, f);
    const content = fs.readFileSync(filePath, 'utf8');

    // Find header duty pill or executive tags
    const hasDuty = content.includes('id="staff-duty-badge"') || content.includes('Campus: On-Duty');
    const hasExecutive = content.includes('Executive Oversight System');
    
    // Find eyebrow badges above H1/H2
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    let title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') : 'NO H1';

    // Look for eyebrow / badges immediately before title
    let eyebrow = 'none';
    if (h1Match) {
      const idx = content.indexOf(h1Match[0]);
      const before = content.substring(Math.max(0, idx - 400), idx);
      const badges = [];
      const spanRegex = /<span[^>]*class="[^"]*(?:rounded|tracking-wider|uppercase)[^"]*"[^>]*>([\s\S]*?)<\/span>/gi;
      let m;
      while ((m = spanRegex.exec(before)) !== null) {
        const text = m[1].replace(/<[^>]+>/g, '').trim();
        if (text && text.length < 50) badges.push(text);
      }
      if (badges.length > 0) eyebrow = badges.join(' | ');
    }

    console.log(`- ${f}: Title="${title}" | Badges=[${eyebrow}] | duty=${hasDuty} | exec=${hasExecutive}`);
  });
});
