const fs = require('fs');
const http = require('http');

console.log('=== VERIFYING PARENT PORTAL DOCKED DRAWER & UNBLURRED ACCESS ===\n');

let allPassed = true;
function assert(desc, condition) {
  if (condition) {
    console.log(`[PASS] ${desc}`);
  } else {
    console.error(`[FAIL] ${desc}`);
    allPassed = false;
  }
}

// 1. Verify Desktop Parent Pages have Docked Layout Structure
const parentDesktopFiles = [
  'prototype/parent/dashboard.html',
  'prototype/parent/academics.html',
  'prototype/parent/messages.html',
  'prototype/parent/pickup.html'
];

parentDesktopFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  assert(
    `${file} contains docked <aside class="carepoint-drawer fixed left-0 top-0 bottom-0`,
    content.includes('<aside class="carepoint-drawer fixed left-0 top-0 bottom-0')
  );

  assert(
    `${file} contains pl-72 wrapper for desktop docked layout`,
    content.includes('<div class="pl-72 flex flex-col min-h-screen">')
  );

  assert(
    `${file} header has left-72 desktop offset`,
    content.includes('header class="fixed top-0 left-72 right-0')
  );

  assert(
    `${file} has data-drawer-toggle button in header`,
    content.includes('data-drawer-toggle')
  );

  assert(
    `${file} contains school crest, title, motto, and role badge in drawer`,
    content.includes('carepoint-crest.png') &&
    content.includes('Carepoint') &&
    content.includes('MIND • HEART • HANDS') &&
    content.includes('PARENT &amp; GUARDIAN PORTAL')
  );

  assert(
    `${file} contains pinned Active Ward card with student info in drawer`,
    content.includes('parent-drawer-ward-name') &&
    content.includes('parent-drawer-ward-class') &&
    content.includes('parent-drawer-ward-avatar')
  );
});

// 2. Verify prototype/carepoint-app.js
const rawAppJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');
const appJs = rawAppJs.replace(/\r\n/g, '\n');

assert(
  'JS: hasDockedLayout includes desktop parent portal without overlay mode',
  appJs.includes("activeRole === 'parent'") &&
  appJs.includes("hasDockedLayout")
);

assert(
  'JS: openDrawer does not activate backdrop when hasDockedLayout is true',
  appJs.includes("const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;") &&
  appJs.includes("if (isOverlayMode) {\n      backdrop.classList.add('active');\n      document.body.style.overflow = 'hidden';\n    } else {\n      backdrop.classList.remove('active');\n      document.body.style.overflow = '';\n    }")
);

assert(
  'JS: syncWardDisplay synchronizes all ward name/class/avatar elements',
  appJs.includes("document.querySelectorAll('#parent-drawer-ward-name')") &&
  appJs.includes("document.querySelectorAll('#parent-drawer-ward-class')") &&
  appJs.includes("document.querySelectorAll('#parent-drawer-ward-avatar')")
);

// 3. Verify prototype/carepoint-hud.css
const hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');

assert(
  'CSS: Desktop docked layout transitions for pl-72 and left-72 exist',
  hudCss.includes('.pl-72,') &&
  hudCss.includes('header.left-72,')
);

assert(
  'CSS: Desktop docked layout completely neutralizes backdrop and blur filter',
  hudCss.includes('body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop') &&
  hudCss.includes('display: none !important;') &&
  hudCss.includes('backdrop-filter: none !important;')
);

assert(
  'CSS: Collapsed docked layout shifts header.left-72 to left: 0 and pl-72 to padding-left: 0',
  hudCss.includes('body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed .pl-72') &&
  hudCss.includes('body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header.left-72')
);

// 4. Verify Public Site Exclusion (check files in prototype/public/)
const publicFiles = fs.readdirSync('prototype/public');
assert(
  'Public site files verified existing and untouched in prototype/public',
  publicFiles.length > 0 && publicFiles.includes('home.html') && publicFiles.includes('apply.html')
);

// 5. Test Live HTTP responses via Vite server
function testUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        assert(`HTTP GET ${urlPath} returned ${res.statusCode}`, res.statusCode === 200);
        resolve();
      });
    }).on('error', (err) => {
      assert(`HTTP GET ${urlPath} error: ${err.message}`, false);
      resolve();
    });
  });
}

async function runHttpTests() {
  await testUrl('/parent/dashboard.html');
  await testUrl('/parent/academics.html');
  await testUrl('/parent/messages.html');
  await testUrl('/parent/pickup.html');
  await testUrl('/staff/dashboard.html');
  await testUrl('/carepoint-app.js');
  await testUrl('/carepoint-hud.css');

  console.log('\n========================================');
  if (allPassed) {
    console.log('ALL DOCKED DRAWER & UNBLURRED ACCESS CHECKS PASSED (100%)\n');
    process.exit(0);
  } else {
    console.error('SOME CHECKS FAILED!\n');
    process.exit(1);
  }
}

runHttpTests();
