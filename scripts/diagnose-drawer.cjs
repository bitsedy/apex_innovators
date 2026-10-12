const fs = require('fs');

console.log('=== DIAGNOSING DRAWER CSS AND JS LOGIC ===');

const appJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');
const hudCss = fs.readFileSync('prototype/carepoint-hud.css', 'utf8');

// Check rule for desktop open
const matchesDesktopOpen = hudCss.includes('body:not(.carepoint-drawer-collapsed) aside.carepoint-drawer');
console.log('CSS has unconditional body:not(.carepoint-drawer-collapsed) aside.carepoint-drawer:', matchesDesktopOpen);

// Check closeDrawer condition in appJs
const closeHasCondition = appJs.includes('if (hasDockedLayout && window.innerWidth > 1024 && !isMobileLayoutPage)');
console.log('JS closeDrawer only adds carepoint-drawer-collapsed if hasDockedLayout:', closeHasCondition);

console.log('When hasDockedLayout is false (e.g. gate/scan.html) on desktop (> 1024px):');
console.log('- closeDrawer() does NOT add carepoint-drawer-collapsed to body.');
console.log('- CSS body:not(.carepoint-drawer-collapsed) aside.carepoint-drawer matches.');
console.log('- Drawer is FORCED to transform: translateX(0) !important.');
console.log('- RESULT: The drawer CANNOT collapse and remains stuck open on screen!');
