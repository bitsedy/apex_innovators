const http = require('http');

console.log('Testing Vite HTTP server responses for public pages...');

const pages = [
  '/public/home.html',
  '/public/home-v2.html',
  '/public/apply.html',
  '/public/mobile-home.html',
  '/public/mobile-apply.html',
  '/carepoint-app.js',
  '/carepoint-hud.js',
  '/carepoint-hud.css',
  '/assets/carepoint-crest.png',
  '/assets/carepoint-school-profile.jpg'
];

let completed = 0;
pages.forEach(url => {
  http.get(`http://localhost:3000${url}`, (res) => {
    let size = 0;
    res.on('data', chunk => size += chunk.length);
    res.on('end', () => {
      console.log(`[HTTP ${res.statusCode}] ${url} (${size} bytes, type: ${res.headers['content-type'] || 'unknown'})`);
      completed++;
      if (completed === pages.length) {
        console.log('All public asset HTTP endpoints verified!');
      }
    });
  }).on('error', (err) => {
    console.error(`[ERROR] Failed to fetch ${url}:`, err.message);
  });
});
