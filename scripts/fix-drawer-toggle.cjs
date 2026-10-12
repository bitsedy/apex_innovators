const fs = require('fs');

console.log('=== APPLYING COMPREHENSIVE TABS DRAWER TOGGLE FIX ===');

// =============================================================================
// 1. UPDATE prototype/carepoint-hud.css
// =============================================================================
const hudCssPath = 'prototype/carepoint-hud.css';
let hudCss = fs.readFileSync(hudCssPath, 'utf8').replace(/\r\n/g, '\n');

// Find the @media blocks from line 380 onwards
const oldResponsiveCss = `  /* Convert static left sidebar into an off-canvas drawer */
  aside.carepoint-drawer,
  aside.fixed.left-0.top-0,
  aside:not(main aside):not(#view-conversations aside) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    height: 100vh !important;
    height: 100dvh !important;
    width: 295px !important;
    max-width: 86vw !important;
    z-index: 100000 !important;
    transform: translateX(-100%) !important;
    box-shadow: none !important;
  }

  /* When drawer is open on mobile */
  aside.carepoint-drawer.carepoint-drawer-open,
  aside.fixed.left-0.top-0.carepoint-drawer-open,
  aside.carepoint-drawer-open {
    transform: translateX(0) !important;
    box-shadow: 12px 0 40px rgba(1, 21, 73, 0.42) !important;
  }

  /* Mobile header padding and item alignment */
  header.fixed {
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  /* Prevent table containers from stretching the entire viewport */
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
    max-width: 100% !important;
  }
}

/* ==========================================================================
   DESKTOP COLLAPSIBLE DRAWER RULES (> 1024px)
   Docked sidebar pushes/expands alongside page content.
   NEVER renders backdrop blur or overlay on desktop docked views.
   ========================================================================== */
@media (min-width: 1025px) {
  /* Smooth transitions for desktop expansion and collapse */
  .pl-72,
  div[class*="pl-72"] {
    transition: padding-left 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  header.left-72,
  header[class*="left-72"] {
    transition: left 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  /* When drawer tab is closed on desktop */
  body.carepoint-drawer-collapsed .pl-72,
  body.carepoint-drawer-collapsed div[class*="pl-72"] {
    padding-left: 0 !important;
  }

  body.carepoint-drawer-collapsed header.left-72,
  body.carepoint-drawer-collapsed header[class*="left-72"] {
    left: 0 !important;
  }

  body.carepoint-drawer-collapsed aside.carepoint-drawer,
  body.carepoint-drawer-collapsed aside.fixed.left-0.top-0 {
    transform: translateX(-100%) !important;
  }

  /* When drawer tab is open on desktop */
  body:not(.carepoint-drawer-collapsed) aside.carepoint-drawer,
  body:not(.carepoint-drawer-collapsed) aside.fixed.left-0.top-0 {
    transform: translateX(0) !important;
  }

  /* On desktop docked layouts, completely neutralize the backdrop and blur filter */
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop,
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop.active {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    visibility: hidden !important;
  }
}`;

const newResponsiveCss = `  /* All mobile drawers are off-canvas */
  aside.carepoint-drawer,
  aside.fixed.left-0.top-0,
  aside:not(main aside):not(#view-conversations aside) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    bottom: 0 !important;
    height: 100vh !important;
    height: 100dvh !important;
    width: 295px !important;
    max-width: 86vw !important;
    z-index: 100000 !important;
    transform: translateX(-100%) !important;
    box-shadow: none !important;
  }

  /* Open state on mobile/tablet */
  aside.carepoint-drawer.carepoint-drawer-open,
  aside.fixed.left-0.top-0.carepoint-drawer-open,
  aside.carepoint-drawer-open {
    transform: translateX(0) !important;
    box-shadow: 12px 0 40px rgba(1, 21, 73, 0.42) !important;
  }

  /* Mobile header padding and item alignment */
  header.fixed {
    padding-left: 14px !important;
    padding-right: 14px !important;
  }

  /* Prevent table containers from stretching the entire viewport */
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
    max-width: 100% !important;
  }
}

/* ==========================================================================
   OFF-CANVAS OVERLAY DRAWER RULES (Applies across all screen sizes)
   Used for Gate Security kiosk, mobile views, or any page without docked pl-72
   ========================================================================== */
body.carepoint-has-overlay-drawer aside.carepoint-drawer,
body.carepoint-has-overlay-drawer aside.fixed.left-0.top-0 {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  height: 100vh !important;
  height: 100dvh !important;
  width: 295px !important;
  max-width: 86vw !important;
  z-index: 100000 !important;
  transform: translateX(-100%) !important;
  box-shadow: none !important;
}

body.carepoint-has-overlay-drawer aside.carepoint-drawer.carepoint-drawer-open,
body.carepoint-has-overlay-drawer aside.fixed.left-0.top-0.carepoint-drawer-open {
  transform: translateX(0) !important;
  box-shadow: 12px 0 40px rgba(1, 21, 73, 0.42) !important;
}

/* ==========================================================================
   DESKTOP COLLAPSIBLE DRAWER RULES (> 1024px)
   Docked sidebar pushes/expands alongside page content.
   NEVER renders backdrop blur or overlay on desktop docked views.
   ========================================================================== */
@media (min-width: 1025px) {
  /* Smooth transitions for desktop expansion and collapse */
  .pl-72,
  div[class*="pl-72"] {
    transition: padding-left 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  header.left-72,
  header[class*="left-72"] {
    transition: left 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  /* Docked mode - COLLAPSED: */
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
  }

  /* Docked mode - EXPANDED (default open on desktop): */
  body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) aside.carepoint-drawer,
  body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) aside.fixed.left-0.top-0 {
    transform: translateX(0) !important;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04) !important;
  }

  /* Floating open button: hidden when desktop docked view is open */
  body:not(.carepoint-has-overlay-drawer):not(.carepoint-drawer-collapsed) .carepoint-drawer-open-btn {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  /* On desktop docked layouts, completely neutralize the backdrop and blur filter */
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop,
  body:not(.carepoint-has-overlay-drawer) .carepoint-drawer-backdrop.active {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    visibility: hidden !important;
  }
}`;

hudCss = hudCss.replace(oldResponsiveCss, newResponsiveCss);
fs.writeFileSync(hudCssPath, hudCss.replace(/\n/g, '\r\n'), 'utf8');
console.log('[PASS] carepoint-hud.css drawer responsive rules updated successfully.');

// =============================================================================
// 2. UPDATE prototype/carepoint-app.js
// =============================================================================
const appJsPath = 'prototype/carepoint-app.js';
let appJs = fs.readFileSync(appJsPath, 'utf8').replace(/\r\n/g, '\n');

// In createDynamicPortalDrawer: embed close button inside the header
const oldDynamicHeader = `      <div class="h-20 px-4 flex items-center justify-between bg-surface-container-lowest border-b border-outline-variant/20">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-outline-variant/30 p-1 shrink-0 overflow-hidden">
            <img src="\${rel}assets/carepoint-crest.png" alt="Carepoint Crest" class="w-full h-full object-contain rounded-lg"/>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm text-primary tracking-tight leading-tight">\${cfg.title}</span>
            <span class="text-[10px] text-secondary font-bold uppercase tracking-wider">\${cfg.sub}</span>
          </div>
        </div>
      </div>`;

const newDynamicHeader = `      <div class="h-20 px-4 flex items-center justify-between bg-surface-container-lowest border-b border-outline-variant/20">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-outline-variant/30 p-1 shrink-0 overflow-hidden">
            <img src="\${rel}assets/carepoint-crest.png" alt="Carepoint Crest" class="w-full h-full object-contain rounded-lg"/>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm text-primary tracking-tight leading-tight">\${cfg.title}</span>
            <span class="text-[10px] text-secondary font-bold uppercase tracking-wider">\${cfg.sub}</span>
          </div>
        </div>
        <button class="carepoint-drawer-close-btn" type="button" aria-label="Close Navigation Tabs Drawer" title="Close Navigation Drawer">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>`;

appJs = appJs.replace(oldDynamicHeader, newDynamicHeader);

// In initNavigationDrawer: update close button placement and state handlers
const oldDrawerInitSection = `  // 3. Ensure 'x' Close Button exists inside the drawer header
  let closeBtn = aside.querySelector('.carepoint-drawer-close-btn');
  if (!closeBtn) {
    closeBtn = document.createElement('button');
    closeBtn.className = 'carepoint-drawer-close-btn';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close Navigation Tabs Drawer');
    closeBtn.setAttribute('title', 'Close Navigation Drawer');
    closeBtn.innerHTML = \`<span class="material-symbols-outlined text-[20px]">close</span>\`;

    // Place the close button in the drawer's top header
    const headerContainer = aside.querySelector('.h-20, .h-16, .p-space-lg, header, div:first-child');
    if (headerContainer) {
      // Find or create top row to align close button nicely to the right
      const topRow = headerContainer.querySelector('.flex') || headerContainer;
      topRow.classList.add('flex', 'items-center', 'justify-between');
      topRow.appendChild(closeBtn);
    } else {
      aside.prepend(closeBtn);
    }
  }

  // State Management
  const wasCollapsed = sessionStorage.getItem('carepoint_drawer_collapsed') === 'true';
  let isDrawerOpen = false;

  function openDrawer() {
    isDrawerOpen = true;
    aside.classList.add('carepoint-drawer-open');
    openBtn.classList.add('hidden');
    document.body.classList.remove('carepoint-drawer-collapsed');
    sessionStorage.setItem('carepoint_drawer_collapsed', 'false');

    // Backdrop should ONLY be activated if in mobile or off-canvas overlay mode:
    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
    if (isOverlayMode) {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      // Desktop docked mode: NEVER display backdrop or blur!
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function closeDrawer() {
    isDrawerOpen = false;
    aside.classList.remove('carepoint-drawer-open');
    backdrop.classList.remove('active');
    openBtn.classList.remove('hidden');

    if (hasDockedLayout && window.innerWidth > 1024 && !isMobileLayoutPage) {
      document.body.classList.add('carepoint-drawer-collapsed');
      sessionStorage.setItem('carepoint_drawer_collapsed', 'true');
    }

    document.body.style.overflow = '';
  }

  function toggleDrawer() {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  // Wire Click Handlers
  openBtn.onclick = (e) => {
    e.stopPropagation();
    openDrawer();
  };

  closeBtn.onclick = (e) => {
    e.stopPropagation();
    closeDrawer();
  };

  backdrop.onclick = () => {
    closeDrawer();
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDrawerOpen) {
      closeDrawer();
    }
  });

  // Close drawer on navigation click on mobile/overlay
  aside.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
      if (isOverlayMode) {
        closeDrawer();
      }
    });
  });

  // Initial Responsive State Sync
  function syncResponsiveState() {
    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;

    if (isOverlayMode) {
      // Mobile / Overlay mode: Drawer starts collapsed off-canvas so layout is clean and pristine
      closeDrawer();
      openBtn.classList.remove('hidden');
    } else {
      // Desktop docked mode:
      backdrop.classList.remove('active');
      document.body.style.overflow = '';

      if (wasCollapsed) {
        document.body.classList.add('carepoint-drawer-collapsed');
        openBtn.classList.remove('hidden');
        isDrawerOpen = false;
      } else {
        document.body.classList.remove('carepoint-drawer-collapsed');
        openBtn.classList.add('hidden');
        aside.classList.remove('carepoint-drawer-open');
        isDrawerOpen = true;
      }
    }
  }

  window.addEventListener('resize', () => {
    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;

    if (!isOverlayMode) {
      // Switched to desktop docked mode: backdrop and blur MUST NOT be active
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      if (document.body.classList.contains('carepoint-drawer-collapsed')) {
        openBtn.classList.remove('hidden');
      } else {
        openBtn.classList.add('hidden');
      }
    } else {
      // In mobile or overlay mode:
      if (!isDrawerOpen) {
        openBtn.classList.remove('hidden');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });`;

const newDrawerInitSection = `  // 3. Ensure 'x' Close Button exists inside the drawer header
  let closeBtn = aside.querySelector('.carepoint-drawer-close-btn');
  if (!closeBtn) {
    closeBtn = document.createElement('button');
    closeBtn.className = 'carepoint-drawer-close-btn';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close Navigation Tabs Drawer');
    closeBtn.setAttribute('title', 'Close Navigation Drawer');
    closeBtn.innerHTML = \`<span class="material-symbols-outlined text-[20px]">close</span>\`;

    // Place the close button in the drawer's top header
    const headerContainer = aside.querySelector('.h-20, .h-16, .p-space-lg, header, div:first-child');
    if (headerContainer) {
      headerContainer.classList.add('flex', 'items-center', 'justify-between');
      headerContainer.appendChild(closeBtn);
    } else {
      aside.prepend(closeBtn);
    }
  }

  // State Management
  const wasCollapsed = sessionStorage.getItem('carepoint_drawer_collapsed') === 'true';
  let isDrawerOpen = false;

  function openDrawer() {
    isDrawerOpen = true;
    aside.classList.add('carepoint-drawer-open');
    document.body.classList.remove('carepoint-drawer-collapsed');
    sessionStorage.setItem('carepoint_drawer_collapsed', 'false');
    openBtn.classList.add('hidden');

    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
    if (isOverlayMode) {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function closeDrawer() {
    isDrawerOpen = false;
    aside.classList.remove('carepoint-drawer-open');
    document.body.classList.add('carepoint-drawer-collapsed');
    sessionStorage.setItem('carepoint_drawer_collapsed', 'true');
    openBtn.classList.remove('hidden');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function toggleDrawer() {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  // Wire Click Handlers cleanly with multiple fallbacks
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openDrawer();
  });
  openBtn.onclick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    openDrawer();
  };

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeDrawer();
  });
  closeBtn.onclick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    closeDrawer();
  };

  backdrop.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeDrawer();
  });
  backdrop.onclick = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    closeDrawer();
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDrawerOpen) {
      closeDrawer();
    }
  });

  // Clicking outside drawer in overlay mode closes it
  document.addEventListener('click', (e) => {
    if (isDrawerOpen) {
      const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
      if (isOverlayMode && !aside.contains(e.target) && !openBtn.contains(e.target)) {
        closeDrawer();
      }
    }
  });

  // Close drawer on navigation link click on mobile/overlay
  aside.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;
      if (isOverlayMode) {
        closeDrawer();
      }
    });
  });

  // Wire any element with data-drawer-toggle or .carepoint-drawer-toggle
  document.querySelectorAll('[data-drawer-toggle], .portal-drawer-toggle, #portal-drawer-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleDrawer();
    });
  });

  // Initial Responsive State Sync
  function syncResponsiveState() {
    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;

    if (isOverlayMode) {
      // Mobile / Overlay mode: Drawer starts collapsed off-canvas so layout is clean and pristine
      closeDrawer();
      openBtn.classList.remove('hidden');
    } else {
      // Desktop docked mode:
      backdrop.classList.remove('active');
      document.body.style.overflow = '';

      if (wasCollapsed) {
        closeDrawer();
      } else {
        openDrawer();
      }
    }
  }

  window.addEventListener('resize', () => {
    const isOverlayMode = window.innerWidth <= 1024 || isMobileLayoutPage || !hasDockedLayout;

    if (!isOverlayMode) {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
      if (document.body.classList.contains('carepoint-drawer-collapsed')) {
        openBtn.classList.remove('hidden');
      } else {
        openBtn.classList.add('hidden');
      }
    } else {
      if (!isDrawerOpen) {
        openBtn.classList.remove('hidden');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });`;

appJs = appJs.replace(oldDrawerInitSection, newDrawerInitSection);
fs.writeFileSync(appJsPath, appJs.replace(/\n/g, '\r\n'), 'utf8');
console.log('[PASS] carepoint-app.js navigation drawer handlers updated successfully.');

// =============================================================================
// 3. ENHANCE prototype/gate/scan.html, verify.html, log.html, alert.html headers
// =============================================================================
const gateFiles = [
  'prototype/gate/scan.html',
  'prototype/gate/verify.html',
  'prototype/gate/log.html',
  'prototype/gate/alert.html'
];

gateFiles.forEach(gf => {
  if (fs.existsSync(gf)) {
    let content = fs.readFileSync(gf, 'utf8');
    // Ensure shield icon in header has data-drawer-toggle and cursor pointer
    const oldShield = '<div class="w-11 h-11 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm"><span class="material-symbols-outlined text-2xl">shield_person</span></div>';
    const newShield = '<button type="button" data-drawer-toggle="" class="w-11 h-11 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer" title="Toggle Navigation Tabs Drawer" aria-label="Toggle Navigation Tabs Drawer"><span class="material-symbols-outlined text-2xl">menu</span></button>';
    if (content.includes(oldShield)) {
      content = content.replace(oldShield, newShield);
      fs.writeFileSync(gf, content, 'utf8');
      console.log(`[PASS] Added header drawer toggle button to ${gf}`);
    }
  }
});

console.log('=== FIX COMPLETE ===');
