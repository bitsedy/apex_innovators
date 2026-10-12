const fs = require('fs');

console.log('=== APPLYING COMPREHENSIVE BUG FIXES TO APPLY.HTML ===');

const applyPath = 'prototype/public/apply.html';
let apply = fs.readFileSync(applyPath, 'utf8').replace(/\r\n/g, '\n');

// 1. Remove duplicate Google Fonts link in head
const dupFont = '<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>';
if (apply.includes(dupFont)) {
  apply = apply.replace(dupFont, '');
  console.log('[PASS] Removed duplicate Google Fonts link in apply.html');
}

// 2. Fix the syntax error: remove the duplicate let uploadedFilesState at the top of script 3
const oldScriptTop = `<script>
    let uploadedFilesState = {
      file3: false,
      file4: false
    };

    function showStep(stepNumber) {`;

const newScriptTop = `<script>
    let uploadedFilesState = {
      file1: false,
      file2: false,
      file3: false,
      file4: false
    };

    function showStep(stepNumber) {`;

if (apply.includes(oldScriptTop)) {
  apply = apply.replace(oldScriptTop, newScriptTop);
  // Also remove the second let uploadedFilesState on line 893
  const secondDeclaration = `    let uploadedFilesState = {
      file1: false,
      file2: false,
      file3: false,
      file4: false
    };`;
  // Replace only the second occurrence
  const firstIndex = apply.indexOf(secondDeclaration);
  if (firstIndex !== -1) {
    const secondIndex = apply.indexOf(secondDeclaration, firstIndex + secondDeclaration.length);
    if (secondIndex !== -1) {
      apply = apply.substring(0, secondIndex) + apply.substring(secondIndex + secondDeclaration.length);
      console.log('[PASS] Removed duplicate second declaration of uploadedFilesState');
    }
  }
  console.log('[PASS] Fixed uploadedFilesState SyntaxError in apply.html');
}

// 3. Update Portal Dropdown Avatar to match Parent Persona
const oldParentAvatar = 'src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkWfNsavZrE2q7ehrA64sihUwtmROAw4xXN-C6BlUTPhqxnN--2RN5DRycS1Zzkyt6oCEfdTUfjODz6QYZEv08Q-JAkUc3Av7yS8ahvu_IycCMkJCxx5Dx9PYnuyuHQLKp_OkepCnkvleE-hqHca1ZtXA-REaPgIftK5gPRsomXA64FFaJZFdKmQGy-GEt_k2m5zV-0ASaXXLnRB3Au6F5xwS03ye8IFEGRzgETPCCJ1eKP6QrBZk3BQ"';
const newParentAvatar = 'src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk7nHm7egIuiTau40KQEFHBKNDX3EptaSdTu9TBK2iwADoApEdjY9Kkt9Tjm_DoF2KYNTvFIWgNO5GlABZPWPHY658qTxcggA0vvpzxYpMpol0tKKMsBvv14t1fD96WIU0vH77Tjlup7Pbm-TJ2cyzQEIlGRhdG85eoLM-GTjxqblK4wxMDpCIWDtDAyb_zVdq8MuHW3anaXkB6adGWp9xlHqAM3FbRNIoqmH3e2xOnAIl_mjOPskfLg"';
if (apply.includes(oldParentAvatar)) {
  apply = apply.replace(oldParentAvatar, newParentAvatar);
  console.log('[PASS] Updated portal dropdown avatar to match Parent persona in apply.html');
}

// 4. Update Mobile menu toggle script and links in apply.html
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
if (apply.includes(oldToggleScript)) {
  apply = apply.replace(oldToggleScript, newToggleScript);
  console.log('[PASS] Updated mobile menu toggle handler in apply.html');
}
apply = apply.replace(/onclick="toggleMobileMenu\(\)"/g, 'onclick="closeMobileMenu()"');

// 5. Update Newsletter Form accessibility
const oldNewsInput = '<input required class="w-full px-3 py-2 text-body-sm bg-surface-container-lowest text-on-surface rounded-lg outline outline-1 outline-outline-variant focus:outline-2 focus:outline-primary placeholder:text-outline" placeholder="Enter parent email" type="email"/>';
const newNewsInput = '<input id="newsletter-email" name="email" required autocomplete="email" aria-label="Parent email address for updates" class="w-full px-3 py-2 text-body-sm bg-surface-container-lowest text-on-surface rounded-lg outline outline-1 outline-outline-variant focus:outline-2 focus:outline-primary placeholder:text-outline" placeholder="Enter parent email" type="email"/>';
if (apply.includes(oldNewsInput)) {
  apply = apply.replace(oldNewsInput, newNewsInput);
  console.log('[PASS] Fixed newsletter input accessibility in apply.html');
}

// 6. Update Tuition modal link in footer
const oldTuitionLink = '<a class="hover:text-primary transition-colors cursor-pointer" data-path="tuition-and-fees" href="javascript:void(0)" onclick="openTuitionModal(event)">Tuition &amp; Financial Policy</a>';
const newTuitionLink = '<a class="hover:text-primary transition-colors cursor-pointer" data-path="tuition-and-fees" href="#tuition-modal" onclick="openTuitionModal(event)">Tuition &amp; Financial Policy</a>';
if (apply.includes(oldTuitionLink)) {
  apply = apply.replace(oldTuitionLink, newTuitionLink);
  console.log('[PASS] Fixed tuition modal link in footer of apply.html');
}

// 7. Update Status Modal attributes in apply.html
const oldStatusModalTag = '<div id="status-checker-modal" data-anchor="status" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
const newStatusModalTag = '<div id="status-checker-modal" data-anchor="status" role="dialog" aria-modal="true" aria-labelledby="status-modal-title" onclick="if(event.target===this)closeStatusModal()" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
if (apply.includes(oldStatusModalTag)) {
  apply = apply.replace(oldStatusModalTag, newStatusModalTag);
  apply = apply.replace('<h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Track Admission Status</h3>', '<h3 id="status-modal-title" class="font-headline-sm text-headline-sm font-bold leading-tight">Track Admission Status</h3>');
  console.log('[PASS] Added backdrop click and dialog a11y to status modal in apply.html');
}

// 8. Update Tuition Modal attributes in apply.html
const oldTuitionModalTag = '<div id="tuition-modal" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
const newTuitionModalTag = '<div id="tuition-modal" role="dialog" aria-modal="true" aria-labelledby="tuition-modal-title" onclick="if(event.target===this)closeTuitionModal()" class="hidden fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm items-center justify-center p-4">';
if (apply.includes(oldTuitionModalTag)) {
  apply = apply.replace(oldTuitionModalTag, newTuitionModalTag);
  apply = apply.replace('<h3 class="font-headline-sm text-headline-sm font-bold leading-tight">Tuition &amp; Financial Policy</h3>', '<h3 id="tuition-modal-title" class="font-headline-sm text-headline-sm font-bold leading-tight">Tuition &amp; Financial Policy</h3>');
  console.log('[PASS] Added backdrop click and dialog a11y to tuition modal in apply.html');
}

// 9. Update Status Ref Input with Enter key in apply.html
const oldRefInput = '<input id="status-ref-input" type="text" placeholder="e.g. CP-2026-9921" value="CP-2026-9921" class="w-full pl-10 pr-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-xl text-primary font-mono text-sm focus:outline-primary focus:bg-surface-container-lowest transition-all" />';
const newRefInput = '<input id="status-ref-input" type="text" placeholder="e.g. CP-2026-9921" value="CP-2026-9921" onkeydown="if(event.key===\'Enter\'){event.preventDefault();lookupStatus();}" class="w-full pl-10 pr-3 py-2.5 bg-surface-container-low border border-outline-variant/60 rounded-xl text-primary font-mono text-sm focus:outline-primary focus:bg-surface-container-lowest transition-all" />';
if (apply.includes(oldRefInput)) {
  apply = apply.replace(oldRefInput, newRefInput);
  console.log('[PASS] Added Enter key listener to status-ref-input in apply.html');
}

// 10. Update bottom script with modal controls, lookupStatus validation, and Escape key dismissal
const oldBottomScript = apply.substring(apply.lastIndexOf('<script>'));
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

apply = apply.substring(0, apply.lastIndexOf('<script>')) + newBottomScript;

fs.writeFileSync(applyPath, apply.replace(/\n/g, '\r\n'), 'utf8');
console.log('[PASS] Written all fixes to prototype/public/apply.html successfully.');
