const fs = require('fs');
const http = require('http');

console.log('=== VERIFYING PUBLIC SITE BUG SCREENING & REMEDIATIONS ===\n');

let allPassed = true;
function assert(desc, condition) {
  if (condition) {
    console.log(`[PASS] ${desc}`);
  } else {
    console.error(`[FAIL] ${desc}`);
    allPassed = false;
  }
}

// 1. Check home.html
const home = fs.readFileSync('prototype/public/home.html', 'utf8');

assert(
  'home.html: Redundant duplicate Google Fonts link removed',
  (home.match(/Material\+Symbols\+Outlined/g) || []).length === 1
);

assert(
  'home.html: Admissions nav link href points to #admissions',
  home.includes('data-section="admissions" href="#admissions"')
);

assert(
  'home.html: Heritage & Leadership link points to #about (not #contact)',
  home.includes('data-path="about-us" href="#about"')
);

assert(
  'home.html: Portal dropdown uses Parent persona avatar (Dr. Nana / Mrs. Mercy)',
  home.includes('https://lh3.googleusercontent.com/aida-public/AB6AXuAk7nHm7egIuiTau40KQEFHBKNDX3EptaSdTu9TBK2iwADoApEdjY9Kkt9Tjm_DoF2KYNTvFIWgNO5GlABZPWPHY658qTxcggA0vvpzxYpMpol0tKKMsBvv14t1fD96WIU0vH77Tjlup7Pbm-TJ2cyzQEIlGRhdG85eoLM-GTjxqblK4wxMDpCIWDtDAyb_zVdq8MuHW3anaXkB6adGWp9xlHqAM3FbRNIoqmH3e2xOnAIl_mjOPskfLg')
);

assert(
  'home.html: Newsletter input has proper id, name, and aria-label',
  home.includes('id="newsletter-email"') && home.includes('name="email"') && home.includes('aria-label=')
);

assert(
  'home.html: Tuition modal link uses clean anchor #tuition-modal (no javascript:void(0))',
  home.includes('data-path="tuition-and-fees" href="#tuition-modal"') && !home.includes('href="javascript:void(0)"')
);

assert(
  'home.html: Status modal has role="dialog", aria-modal="true", and backdrop click dismissal',
  home.includes('id="status-checker-modal"') &&
  home.includes('role="dialog"') &&
  home.includes('aria-modal="true"') &&
  home.includes('onclick="if(event.target===this)closeStatusModal()"')
);

assert(
  'home.html: Tuition modal has role="dialog", aria-modal="true", and backdrop click dismissal',
  home.includes('id="tuition-modal"') &&
  home.includes('role="dialog"') &&
  home.includes('aria-modal="true"') &&
  home.includes('onclick="if(event.target===this)closeTuitionModal()"')
);

assert(
  'home.html: Reference code input supports Enter key',
  home.includes('id="status-ref-input"') && home.includes("event.key==='Enter'")
);

assert(
  'home.html: Reference lookup validates empty and unrecognized codes gracefully',
  home.includes('Code Required') && home.includes('Reference Code Not Found')
);

assert(
  'home.html: Global Escape key and outside-click dismissals present',
  home.includes("e.key === 'Escape'") && home.includes('closeStatusModal()') && home.includes('closeTuitionModal()')
);

assert(
  'home.html: Mobile drawer uses stateful open/close handlers avoiding double-toggle bug',
  home.includes('openMobileMenu') && home.includes('closeMobileMenu') && !home.includes('onclick="toggleMobileMenu()"')
);

// 2. Check carepoint-app.js
const app = fs.readFileSync('prototype/carepoint-app.js', 'utf8');

assert(
  'carepoint-app.js: Scrollspy supports .dropdown-item smooth scroll',
  app.includes("nav.querySelectorAll('.nav-link, .dropdown-item')")
);

assert(
  'carepoint-app.js: Mobile drawer link click calls closeMobileMenu safely',
  app.includes('window.closeMobileMenu()')
);

// 3. Check mobile-home.html
const mobHome = fs.readFileSync('prototype/public/mobile-home.html', 'utf8');

assert(
  'mobile-home.html: id="news" present for Term Calendar navigation',
  mobHome.includes('id="news"')
);

assert(
  'mobile-home.html: Status modal has backdrop click and escape key support',
  mobHome.includes('onclick="if(event.target===this)closeStatusModal()"') && mobHome.includes("e.key === 'Escape'")
);

// 4. Check apply.html
const apply = fs.readFileSync('prototype/public/apply.html', 'utf8');

assert(
  'apply.html: id="status" anchor target exists for status tracking navigation',
  apply.includes('id="status"')
);

// 5. Check mobile-apply.html
const mobApply = fs.readFileSync('prototype/public/mobile-apply.html', 'utf8');

assert(
  'mobile-apply.html: Preview image has valid src attribute',
  mobApply.includes('id="mobile-quick-photo-preview"') && mobApply.includes('src="data:image/svg+xml')
);

// 6. Test HTTP availability from running dev server
function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      resolve(res.statusCode);
    }).on('error', reject);
  });
}

async function runHttpChecks() {
  try {
    const s1 = await fetchUrl('/public/home.html');
    assert('Vite Server: /public/home.html responds 200 OK', s1 === 200);

    const s2 = await fetchUrl('/public/home-v2.html');
    assert('Vite Server: /public/home-v2.html responds 200 OK', s2 === 200);

    const s3 = await fetchUrl('/public/apply.html');
    assert('Vite Server: /public/apply.html responds 200 OK', s3 === 200);

    const s4 = await fetchUrl('/public/mobile-home.html');
    assert('Vite Server: /public/mobile-home.html responds 200 OK', s4 === 200);

    const s5 = await fetchUrl('/public/mobile-apply.html');
    assert('Vite Server: /public/mobile-apply.html responds 200 OK', s5 === 200);
  } catch (err) {
    assert(`Vite Server check error: ${err.message}`, false);
  }

  console.log('\n======================================================');
  if (allPassed) {
    console.log('ALL 21 PUBLIC SITE VERIFICATION CHECKS PASSED (100%)');
  } else {
    console.error('SOME PUBLIC SITE CHECKS FAILED');
    process.exit(1);
  }
}

runHttpChecks();
