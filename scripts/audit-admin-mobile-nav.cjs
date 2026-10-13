const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../prototype/admin');
const files = fs.readdirSync(dir).filter(f => f.startsWith('mobile-') && f.endsWith('.html') && f !== 'mobile-login.html');

files.forEach(f => {
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  const nav = html.match(/<nav class="fixed bottom-0[\s\S]*?<\/nav>/i);
  if (nav) {
    const links = [...nav[0].matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
    const summary = links.map(l => `${l[2].replace(/<[^>]+>/g, '').trim()} (${l[1]})`).join(' | ');
    console.log(`${f}: ${summary}`);
  } else {
    console.log(`${f}: NO BOTTOM NAV`);
  }
});
