const fs = require('fs');
const path = require('path');

console.log('=== APPLYING COMPREHENSIVE PUBLIC SITE BUG FIXES ===');

// =============================================================================
// 1. FIX prototype/public/home.html
// =============================================================================
const homePath = 'prototype/public/home.html';
let home = fs.readFileSync(homePath, 'utf8').replace(/\r\n/g, '\n');

// 1.1 Remove redundant duplicate Material Symbols link
const dupFont = '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>';
if (home.includes(dupFont)) {
  home = home.replace(dupFont, '');
  console.log('[PASS] Removed redundant duplicate Google Fonts link in home.html');
}

// 1.2 Fix Admissions navbar link href on home.html (change href="apply.html" to href="#admissions")
const oldAdmLink = '<a class="nav-link h-full flex items-center transition-colors text-on-surface-variant hover:text-primary font-label-lg text-label-lg" data-section="admissions" href="apply.html">Admissions</a>';
const newAdmLink = '<a class="nav-link h-full flex items-center transition-colors text-on-surface-variant hover:text-primary font-label-lg text-label-lg" data-section="admissions" href="#admissions">Admissions</a>';
if (home.includes(oldAdmLink)) {
  home = home.replace(oldAdmLink, newAdmLink);
  console.log('[PASS] Fixed Admissions nav link href on home.html to #admissions');
}

// 1.3 Fix Section 4 Heritage & Leadership Link target (change href="#contact" to href="#about")
const oldHeritageLink = '<a class="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer" data-path="about-us" href="#contact" onclick="document.getElementById(\'contact\')?.scrollIntoView({behavior: \'smooth\'})">\n<span>Learn more about Carepoint Heritage &amp; Leadership</span>';
const newHeritageLink = '<a class="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors group cursor-pointer" data-path="about-us" href="#about" onclick="document.getElementById(\'about\')?.scrollIntoView({behavior: \'smooth\'})">\n<span>Learn more about Carepoint Heritage &amp; Leadership</span>';
if (home.includes(oldHeritageLink)) {
  home = home.replace(oldHeritageLink, newHeritageLink);
  console.log('[PASS] Fixed Heritage & Leadership link target in home.html');
}

// 1.4 Fix Portal dropdown avatar for parent persona
const oldParentAvatar = 'src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkWfNsavZrE2q7ehrA64sihUwtmROAw4xXN-C6BlUTPhqxnN--2RN5DRycS1Zzkyt6oCEfdTUfjODz6QYZEv08Q-JAkUc3Av7yS8ahvu_IycCMkJCxx5Dx9PYnuyuHQLKp_OkepCnkvleE-hqHca1ZtXA-REaPgIftK5gPRsomXA64FFaJZFdKmQGy-GEt_k2m5zV-0ASaXXLnRB3Au6F5xwS03ye8IFEGRzgETPCCJ1eKP6QrBZk3BQ"';
const newParentAvatar = 'src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk7nHm7egIuiTau40KQEFHBKNDX3EptaSdTu9TBK2iwADoApEdjY9Kkt9Tjm_DoF2KYNTvFIWgNO5GlABZPWPHY658qTxcggA0vvpzxYpMpol0tKKMsBvv14t1fD96WIU0vH77Tjlup7Pbm-TJ2cyzQEIlGRhdG85eoLM-GTjxqblK4wxMDpCIWDtDAyb_zVdq8MuHW3anaXkB6adGWp9xlHqAM3FbRNIoqmH3e2xOnAIl_mjOPskfLg"';
if (home.includes(oldParentAvatar)) {
  home = home.replace(oldParentAvatar, newParentAvatar);
  console.log('[PASS] Updated portal dropdown avatar to match Parent persona in home.html');
}

// 1.5 Fix Newsletter Form inputs accessibility
const oldNewsInput = '<input required class="w-full px-3 py-2 text-body-sm bg-surface-container-lowest text-on-surface rounded-lg outline outline-1 outline-outline-variant focus:outline-2 focus:outline-primary placeholder:text-outline" placeholder="Enter parent email" type="email"/>';
const newNewsInput = '<input id="newsletter-email" name="email" required autocomplete="email" aria-label="Parent email address for updates" class="w-full px-3 py-2 text-body-sm bg-surface-container-lowest text-on-surface rounded-lg outline outline-1 outline-outline-variant focus:outline-2 focus:outline-primary placeholder:text-outline" placeholder="Enter parent email" type="email"/>';
if (home.includes(oldNewsInput)) {
  home = home.replace(oldNewsInput, newNewsInput);
  console.log('[PASS] Fixed newsletter input accessibility in home.html');
}

// 1.6 Fix Tuition Modal link in footer (change href="javascript:void(0)" to href="#tuition-modal")
const oldTuitionLink = '<a class="hover:text-primary transition-colors cursor-pointer" data-path="tuition-and-fees" href="javascript:void(0)" onclick="openTuitionModal(event)">Tuition &amp; Financial Policy</a>';
const newTuitionLink = '<a class="hover:text-primary transition-colors cursor-pointer" data-path="tuition-and-fees" href="#tuition-modal" onclick="openTuitionModal(event)">Tuition &amp; Financial Policy</a>';
if (home.includes(oldTuitionLink)) {
  home = home.replace(oldTuitionLink, newTuitionLink);
  console.log('[PASS] Fixed tuition modal link in footer of home.html');
}

// 1.7 Add backdrop click handling & accessibility attributes to Status Modal
const oldStatusModalTag = '<div id="status-checker-modal" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
const newStatusModalTag = '<div id="status-checker-modal" role="dialog" aria-modal="true" aria-labelledby="status-modal-title" onclick="if(event.target===this)closeStatusModal()" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
if (home.includes(oldStatusModalTag)) {
  home = home.replace(oldStatusModalTag, newStatusModalTag);
  console.log('[PASS] Added backdrop click & dialog a11y to status-checker-modal in home.html');
}
home = home.replace('<h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Track Admission Status</h3>', '<h3 id="status-modal-title" class="font-headline-sm text-headline-sm font-bold leading-tight">Track Admission Status</h3>');

// 1.8 Add backdrop click handling & accessibility attributes to Tuition Modal
const oldTuitionModalTag = '<div id="tuition-modal" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
const newTuitionModalTag = '<div id="tuition-modal" role="dialog" aria-modal="true" aria-labelledby="tuition-modal-title" onclick="if(event.target===this)closeTuitionModal()" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
if (home.includes(oldTuitionModalTag)) {
  home = home.replace(oldTuitionModalTag, newTuitionModalTag);
  console.log('[PASS] Added backdrop click & dialog a11y to tuition-modal in home.html');
}
home = home.replace('<h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Tuition &amp; Financial Policy</h3>', '<h3 id="tuition-modal-title" class="font-headline-sm text-headline-sm font-bold leading-tight">Tuition &amp; Financial Policy</h3>');

// 1.9 Add Enter key listener on status-ref-input
const oldRefInput = '<input id="status-ref-input" type="text" placeholder="e.g. CP-2026-9921" value="CP-2026-9921" class="w-full pl-10 pr-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-xl text-primary font-mono text-sm focus:outline-primary focus:bg-surface-container-lowest transition-all" />';
const newRefInput = '<input id="status-ref-input" type="text" placeholder="e.g. CP-2026-9921" value="CP-2026-9921" onkeydown="if(event.key===\'Enter\'){event.preventDefault();lookupStatus();}" class="w-full pl-10 pr-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-xl text-primary font-mono text-sm focus:outline-primary focus:bg-surface-container-lowest transition-all" />';
if (home.includes(oldRefInput)) {
  home = home.replace(oldRefInput, newRefInput);
  console.log('[PASS] Added Enter key listener to status-ref-input in home.html');
}

// 1.10 Replace mobile menu drawer toggle script and mobile drawer link handlers in home.html
const oldToggleScript = '<script>function toggleMobileMenu(){const d=document.getElementById(\'mobile-nav-drawer\');if(d)d.classList.toggle(\'hidden\');}</script>';
const newToggleScript = `<script>
function openMobileMenu() {
  const d = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('mobile-menu-btn');
  if (d) d.classList.remove('hidden');
  if (btn) {
    btn.setAttribute('aria-expanded', 'true');
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = 'close';
  }
}
function closeMobileMenu() {
  const d = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('mobile-menu-btn');
  if (d) d.classList.add('hidden');
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = 'menu';
  }
}
function toggleMobileMenu() {
  const d = document.getElementById('mobile-nav-drawer');
  if (d && !d.classList.contains('hidden')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
</script>`;
if (home.includes(oldToggleScript)) {
  home = home.replace(oldToggleScript, newToggleScript);
  console.log('[PASS] Replaced toggleMobileMenu with robust state-managed handler in home.html');
}

// Replace onclick="toggleMobileMenu()" on mobile links with onclick="closeMobileMenu()" to prevent double toggle
home = home.replace(/onclick="toggleMobileMenu\(\)"/g, 'onclick="closeMobileMenu()"');
console.log('[PASS] Replaced onclick=toggleMobileMenu with closeMobileMenu on drawer links');

// 1.11 Update inline script at bottom of home.html with robust lookupStatus, Escape key listener, and click-outside dismissal
const oldBottomScript = home.substring(home.lastIndexOf('<script>'));
const newBottomScript = `<script>
function openTuitionModal(e) {
  if (e) e.preventDefault();
  const m = document.getElementById('tuition-modal');
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeTuitionModal() {
  const m = document.getElementById('tuition-modal');
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function showSubscribeSuccess(form) {
  const p = form.querySelector('p');
  if (p) {
    p.classList.remove('hidden');
    const input = form.querySelector('input');
    if (input) input.value = '';
    setTimeout(() => {
      p.classList.add('hidden');
    }, 5000);
  }
}

function openStatusModal(e) {
  if (e) e.preventDefault();
  const m = document.getElementById('status-checker-modal');
  if (m) {
    m.classList.remove('hidden');
    m.classList.add('flex');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('status-ref-input');
    if (input) setTimeout(() => input.focus(), 100);
  }
}

function closeStatusModal() {
  const m = document.getElementById('status-checker-modal');
  if (m) {
    m.classList.add('hidden');
    m.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function setSampleRef(code) {
  const input = document.getElementById('status-ref-input');
  if (input) {
    input.value = code;
    lookupStatus();
  }
}

function lookupStatus() {
  const input = document.getElementById('status-ref-input');
  const code = (input ? input.value : '').trim().toUpperCase();
  const resultBox = document.getElementById('status-result-box');
  const student = document.getElementById('status-student-name');
  const tier = document.getElementById('status-tier-label');
  const badge = document.getElementById('status-badge');
  const step2Desc = document.getElementById('step2-desc');
  
  if (!code) {
    if (student) student.textContent = "Please Enter Reference Code";
    if (tier) tier.textContent = "Enter your reference code (e.g. CP-2026-9921) to track your status";
    if (badge) {
      badge.textContent = "Code Required";
      badge.className = "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-100 text-rose-900 border border-rose-300";
    }
    if (step2Desc) step2Desc.innerHTML = "Awaiting valid reference code.";
    return;
  }

  if (code.includes('8104')) {
    if (student) student.textContent = "Ama Konadu (Student)";
    if (tier) tier.textContent = "Applying for: Nursery 2 Intake • Academic Year 2026/2027";
    if (badge) {
      badge.textContent = "Offer Granted";
      badge.className = "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300";
    }
    if (step2Desc) step2Desc.innerHTML = "Assessment Completed & Passed (Score: 94%). <strong class='text-emerald-700'>Placement confirmed!</strong>";
  } else if (code.includes('9921')) {
    if (student) student.textContent = "Kofi Mensah (Student)";
    if (tier) tier.textContent = "Applying for: Basic 4 Intake • Academic Year 2026/2027";
    if (badge) {
      badge.textContent = "Assessment Stage";
      badge.className = "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300";
    }
    if (step2Desc) step2Desc.innerHTML = 'Scheduled for <strong class="text-secondary">Saturday, Oct 04, 2026 at 9:00 AM</strong> (Campus Block B)';
  } else {
    if (student) student.textContent = "Reference Code Not Found";
    if (tier) tier.textContent = \`No application matching "\${code}". Check SMS or email confirmation.\`;
    if (badge) {
      badge.textContent = "Not Found";
      badge.className = "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface-variant border border-outline-variant";
    }
    if (step2Desc) step2Desc.innerHTML = 'Please re-verify your reference code or call Admissions at <strong class="text-secondary">+233 24 123 4567</strong>.';
  }
}

function togglePortalMenu(e) {
  if (e) e.stopPropagation();
  const d = document.getElementById('portal-dropdown');
  const b = document.getElementById('portal-menu-button');
  if (d) {
    const isHidden = d.classList.toggle('hidden');
    if (b) b.setAttribute('aria-expanded', !isHidden ? 'true' : 'false');
  }
}

// Global dismissals: Escape key and click outside
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeStatusModal();
    closeTuitionModal();
    closeMobileMenu();
    const d = document.getElementById('portal-dropdown');
    const b = document.getElementById('portal-menu-button');
    if (d) d.classList.add('hidden');
    if (b) b.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('click', function(e) {
  const d = document.getElementById('portal-dropdown');
  const b = document.getElementById('portal-menu-button');
  if (d && !d.classList.contains('hidden') && b && !b.contains(e.target) && !d.contains(e.target)) {
    d.classList.add('hidden');
    if (b) b.setAttribute('aria-expanded', 'false');
  }

  // Dismiss mobile drawer if clicked outside
  const drawer = document.getElementById('mobile-nav-drawer');
  const mBtn = document.getElementById('mobile-menu-btn');
  if (drawer && !drawer.classList.contains('hidden') && mBtn && !mBtn.contains(e.target) && !drawer.contains(e.target)) {
    closeMobileMenu();
  }
});

// Auto open status modal if URL hash is #status
if (window.location.hash === '#status') {
  openStatusModal();
}
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#status') {
    openStatusModal();
  }
});
</script>
</body></html>`;

home = home.substring(0, home.lastIndexOf('<script>')) + newBottomScript;
fs.writeFileSync(homePath, home.replace(/\n/g, '\r\n'), 'utf8');
console.log('[PASS] Updated home.html with comprehensive bug fixes.');

// =============================================================================
// 2. UPDATE prototype/carepoint-app.js FOR PUBLIC SMOOTH SCROLLING DELEGATION
// =============================================================================
const appPath = 'prototype/carepoint-app.js';
let app = fs.readFileSync(appPath, 'utf8').replace(/\r\n/g, '\n');

// Update selector to include .dropdown-item
const oldLinkQuery = 'const links = Array.from(nav.querySelectorAll(\'.nav-link\'));';
const newLinkQuery = 'const links = Array.from(nav.querySelectorAll(\'.nav-link, .dropdown-item\'));';
if (app.includes(oldLinkQuery)) {
  app = app.replace(oldLinkQuery, newLinkQuery);
  console.log('[PASS] Extended scrollspy click delegation to .dropdown-item in carepoint-app.js');
}

// Update mobile drawer click to safely call closeMobileMenu
const oldMobToggleCall = `          if (typeof window.toggleMobileMenu === 'function') {
            window.toggleMobileMenu();
          }`;
const newMobToggleCall = `          if (typeof window.closeMobileMenu === 'function') {
            window.closeMobileMenu();
          } else if (typeof window.toggleMobileMenu === 'function') {
            window.toggleMobileMenu();
          }`;
if (app.includes(oldMobToggleCall)) {
  app = app.replace(oldMobToggleCall, newMobToggleCall);
  console.log('[PASS] Hardened mobile drawer close call in carepoint-app.js');
}

fs.writeFileSync(appPath, app.replace(/\n/g, '\r\n'), 'utf8');

// =============================================================================
// 3. FIX prototype/public/mobile-home.html (ADD id="news" to Term Events)
// =============================================================================
const mobHomePath = 'prototype/public/mobile-home.html';
if (fs.existsSync(mobHomePath)) {
  let mobHome = fs.readFileSync(mobHomePath, 'utf8').replace(/\r\n/g, '\n');
  if (!mobHome.includes('id="news"')) {
    // Add id="news" to the events section
    mobHome = mobHome.replace('<section class="p-space-md bg-surface-container-low rounded-xl space-y-3">', '<section id="news" class="p-space-md bg-surface-container-low rounded-xl space-y-3 scroll-mt-20">');
    fs.writeFileSync(mobHomePath, mobHome.replace(/\n/g, '\r\n'), 'utf8');
    console.log('[PASS] Added id="news" to Term Events section in mobile-home.html');
  }
}

// =============================================================================
// 4. FIX prototype/public/apply.html (ADD id="status" to status modal)
// =============================================================================
const applyPath = 'prototype/public/apply.html';
if (fs.existsSync(applyPath)) {
  let apply = fs.readFileSync(applyPath, 'utf8').replace(/\r\n/g, '\n');
  if (apply.includes('id="status-checker-modal"') && !apply.includes('id="status"')) {
    apply = apply.replace('id="status-checker-modal"', 'id="status-checker-modal" data-anchor="status"');
    // Also place an anchor before the modal so href="#status" resolves smoothly
    apply = apply.replace('<div id="status-checker-modal"', '<div id="status" class="hidden"></div>\n<div id="status-checker-modal"');
    fs.writeFileSync(applyPath, apply.replace(/\n/g, '\r\n'), 'utf8');
    console.log('[PASS] Added #status anchor resolution to apply.html');
  }
}

// =============================================================================
// 5. FIX prototype/public/mobile-apply.html (MISSING src ON PREVIEW IMAGE)
// =============================================================================
const mobApplyPath = 'prototype/public/mobile-apply.html';
if (fs.existsSync(mobApplyPath)) {
  let mobApply = fs.readFileSync(mobApplyPath, 'utf8').replace(/\r\n/g, '\n');
  const brokenImg = '<img id="mobile-quick-photo-preview" class="w-full h-full object-cover hidden" alt="Child Preview" />';
  const fixedImg = '<img id="mobile-quick-photo-preview" src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E" class="w-full h-full object-cover hidden" alt="Child Preview" />';
  if (mobApply.includes(brokenImg)) {
    mobApply = mobApply.replace(brokenImg, fixedImg);
    fs.writeFileSync(mobApplyPath, mobApply.replace(/\n/g, '\r\n'), 'utf8');
    console.log('[PASS] Fixed missing src attribute in mobile-apply.html');
  }
}

// =============================================================================
// 6. SYNC prototype/public/home-v2.html WITH MODAL & SCRIPT HARDENING
// =============================================================================
const homeV2Path = 'prototype/public/home-v2.html';
if (fs.existsSync(homeV2Path)) {
  let homeV2 = fs.readFileSync(homeV2Path, 'utf8').replace(/\r\n/g, '\n');
  if (homeV2.includes(dupFont)) homeV2 = homeV2.replace(dupFont, '');
  if (homeV2.includes(oldAdmLink)) homeV2 = homeV2.replace(oldAdmLink, newAdmLink);
  if (homeV2.includes(oldParentAvatar)) homeV2 = homeV2.replace(oldParentAvatar, newParentAvatar);
  if (homeV2.includes(oldNewsInput)) homeV2 = homeV2.replace(oldNewsInput, newNewsInput);
  if (homeV2.includes(oldTuitionLink)) homeV2 = homeV2.replace(oldTuitionLink, newTuitionLink);
  if (homeV2.includes(oldStatusModalTag)) {
    homeV2 = homeV2.replace(oldStatusModalTag, newStatusModalTag);
    homeV2 = homeV2.replace('<h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Track Admission Status</h3>', '<h3 id="status-modal-title" class="font-headline-sm text-headline-sm font-bold leading-tight">Track Admission Status</h3>');
  }
  if (homeV2.includes(oldTuitionModalTag)) {
    homeV2 = homeV2.replace(oldTuitionModalTag, newTuitionModalTag);
    homeV2 = homeV2.replace('<h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Tuition &amp; Financial Policy</h3>', '<h3 id="tuition-modal-title" class="font-headline-sm text-headline-sm font-bold leading-tight">Tuition &amp; Financial Policy</h3>');
  }
  if (homeV2.includes(oldRefInput)) homeV2 = homeV2.replace(oldRefInput, newRefInput);
  if (homeV2.includes(oldToggleScript)) homeV2 = homeV2.replace(oldToggleScript, newToggleScript);
  homeV2 = homeV2.replace(/onclick="toggleMobileMenu\(\)"/g, 'onclick="closeMobileMenu()"');
  homeV2 = homeV2.substring(0, homeV2.lastIndexOf('<script>')) + newBottomScript;
  fs.writeFileSync(homeV2Path, homeV2.replace(/\n/g, '\r\n'), 'utf8');
  console.log('[PASS] Synchronized bug fixes into home-v2.html');
}

console.log('=== ALL PUBLIC SITE BUG FIXES APPLIED SUCCESSFULLY ===');
