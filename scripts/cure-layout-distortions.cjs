const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

// 1. Update prototype/carepoint-hud.css
const hudCssPath = path.join(root, 'prototype', 'carepoint-hud.css');
let hudCss = fs.readFileSync(hudCssPath, 'utf8');

// A. Insert transition stability and table alignment before responsive overrides
const noTransBlock = `/* ==========================================================================
   NAVIGATION & INITIAL LOAD TRANSITION STABILITY
   Completely prevents layout snapping, flashing, or FOUC when navigating
   between portal pages or synchronizing default collapse states.
   ========================================================================== */
html.carepoint-no-transition,
html.carepoint-no-transition *,
html.carepoint-no-transition *::before,
html.carepoint-no-transition *::after,
body.carepoint-no-transition,
body.carepoint-no-transition *,
body.carepoint-no-transition *::before,
body.carepoint-no-transition *::after {
  transition: none !important;
  -webkit-transition: none !important;
  animation-duration: 0s !important;
}

/* Table Layout Stability: Prevent vertical row shifting during disclosure collapse/expansion */
table th, table td {
  vertical-align: top;
}

/* ==========================================================================
   RESPONSIVE OVERRIDES FOR MOBILE & TABLET (<= 1024px)`;

if (!hudCss.includes('carepoint-no-transition')) {
  hudCss = hudCss.replace(
    /\/\* ==========================================================================\s+RESPONSIVE OVERRIDES FOR MOBILE & TABLET \(<= 1024px\)/,
    noTransBlock
  );
  console.log('[PASS] Added carepoint-no-transition & table stability to carepoint-hud.css');
}

// B. Update Desktop Collapsible Drawer Rules
const oldDesktopRules = `  /* Docked mode - COLLAPSED: */
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed .pl-72,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed div[class*="pl-72"] {
    padding-left: 0 !important;
  }

  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header.left-72,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header[class*="left-72"] {
    left: 0 !important;
  }

  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed aside.carepoint-drawer,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed aside.fixed.left-0.top-0 {
    transform: translateX(-100%) !important;
    box-shadow: none !important;
  }`;

const newDesktopRules = `  header [data-drawer-toggle],
  header .portal-drawer-toggle,
  header #portal-drawer-toggle {
    transition: width 0.32s cubic-bezier(0.16, 1, 0.3, 1),
                max-width 0.32s cubic-bezier(0.16, 1, 0.3, 1),
                margin 0.32s cubic-bezier(0.16, 1, 0.3, 1),
                padding 0.32s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.25s ease !important;
    overflow: hidden !important;
    white-space: nowrap !important;
  }

  /* Docked mode - COLLAPSED: */
  html.carepoint-drawer-collapsed .pl-72,
  html.carepoint-drawer-collapsed div[class*="pl-72"],
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed .pl-72,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed div[class*="pl-72"] {
    padding-left: 0 !important;
  }

  html.carepoint-drawer-collapsed header.left-72,
  html.carepoint-drawer-collapsed header[class*="left-72"],
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header.left-72,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed header[class*="left-72"] {
    left: 0 !important;
  }

  html.carepoint-drawer-collapsed aside.carepoint-drawer,
  html.carepoint-drawer-collapsed aside.fixed.left-0.top-0,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed aside.carepoint-drawer,
  body:not(.carepoint-has-overlay-drawer).carepoint-drawer-collapsed aside.fixed.left-0.top-0 {
    transform: translateX(-100%) !important;
    box-shadow: none !important;
  }`;

hudCss = hudCss.replace(/\r\n/g, '\n');
if (hudCss.includes(oldDesktopRules)) {
  hudCss = hudCss.replace(oldDesktopRules, newDesktopRules);
  console.log('[PASS] Updated desktop collapsible drawer rules in carepoint-hud.css');
}

fs.writeFileSync(hudCssPath, hudCss, 'utf8');

// 2. Update prototype/carepoint-app.js
const appJsPath = path.join(root, 'prototype', 'carepoint-app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

// A. Suppress transitions at the beginning of initNavigationDrawer
const oldInitDrawer = `export function initNavigationDrawer() {\n  if (typeof document === 'undefined') return;\n\n  const currentPath = window.location.pathname.toLowerCase();`;
const newInitDrawer = `export function initNavigationDrawer() {\n  if (typeof document === 'undefined') return;\n\n  // Suppress transition jumps during initial layout computation and navigation\n  document.documentElement.classList.add('carepoint-no-transition');\n  document.body.classList.add('carepoint-no-transition');\n\n  const currentPath = window.location.pathname.toLowerCase();`;

if (appJs.includes(oldInitDrawer)) {
  appJs = appJs.replace(oldInitDrawer, newInitDrawer);
  console.log('[PASS] Added no-transition lock in initNavigationDrawer');
}

// B. Release transition lock after syncResponsiveState
const oldSyncResp = `  syncResponsiveState();`;
const newSyncResp = `  syncResponsiveState();

  // Release transition suppression lock cleanly after initial layout has painted
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('carepoint-no-transition');
      document.body.classList.remove('carepoint-no-transition');
    });
  });`;

if (appJs.includes(oldSyncResp)) {
  appJs = appJs.replace(oldSyncResp, newSyncResp);
  console.log('[PASS] Added double requestAnimationFrame transition release');
}

// C. Update YouTube Skeleton Engine initial overlay creation
const oldSkeletonShimmer = `    // Initial progressive page load shimmer:
    // Display briefly so user sees YouTube-style shimmer without jarring flash, then fade out smoothly
    const initialDuration = 320;
    setTimeout(() => {
      hideSkeletonOverlay(overlay);
    }, initialDuration);`;

const newSkeletonShimmer = `    // Initial progressive page load shimmer:
    // Keep overlay hidden during standard navigations to eliminate layout flashing & distortions
    hideSkeletonOverlay(overlay);`;

if (appJs.includes(oldSkeletonShimmer)) {
  appJs = appJs.replace(oldSkeletonShimmer, newSkeletonShimmer);
  console.log('[PASS] Cured skeleton overlay navigation flashing in carepoint-app.js');
}

// D. Refine Micro-Shimmer on Tab Switching to target local container rather than whole page
const oldMicroShimmer = `    const mainArea = document.querySelector('main, #main-content, .portal-view-container, [role="main"]') || tabTrigger.closest('section, .carepoint-soft-card');
    if (mainArea && !mainArea.classList.contains('carepoint-view-loading')) {
      window.CarepointSkeleton.applyMicroShimmer(mainArea, 240);
    }`;

const newMicroShimmer = `    const localArea = tabTrigger.closest('section, .carepoint-soft-card, [role="region"], .portal-view-container') || (tabTrigger.parentElement && tabTrigger.parentElement.nextElementSibling);
    if (localArea && !localArea.classList.contains('carepoint-view-loading')) {
      window.CarepointSkeleton.applyMicroShimmer(localArea, 200);
    }`;

if (appJs.includes(oldMicroShimmer)) {
  appJs = appJs.replace(oldMicroShimmer, newMicroShimmer);
  console.log('[PASS] Scoped micro-shimmer to local tab containers');
}

fs.writeFileSync(appJsPath, appJs, 'utf8');

console.log('\n[SUCCESS] Layout distortion cures applied to carepoint-hud.css and carepoint-app.js');
