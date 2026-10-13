const fs = require('fs');
const files = ['dashboard.html', 'inbox.html', 'decision.html', 'approvals.html', 'admissions.html', 'wards.html', 'users.html', 'reports.html', 'settings.html'];
files.forEach(f => {
  const c = fs.readFileSync('prototype/admin/' + f, 'utf8');
  const m = c.match(/<aside[\s\S]*?<\/aside>/i);
  if (m) {
    const links = [...m[0].matchAll(/href="([^"]*)"/g)].map(x => x[1]);
    console.log(f, ':', links.join(', '));
  }
});
