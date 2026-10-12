const fs = require('fs');

console.log('=== AUDITING PROTOTYPE/PUBLIC/APPLY.HTML ===\n');

const apply = fs.readFileSync('prototype/public/apply.html', 'utf8');

// 1. Script Syntax Check
const scripts = [...apply.matchAll(/<script\b(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)];
scripts.forEach((s, idx) => {
  try {
    new Function(s[1]);
    console.log(`Script #${idx}: VALID syntax`);
  } catch (err) {
    console.error(`Script #${idx}: [SYNTAX ERROR]`, err.message);
  }
});

// 2. Check all IDs referenced in onclick / JS functions
const idCalls = [...apply.matchAll(/document\.getElementById\(["']([^"']+)["']\)/g)].map(m => m[1]);
const uniqueIdCalls = [...new Set(idCalls)];
console.log('\nIDs called by getElementById:', uniqueIdCalls.length);
const missingIds = uniqueIdCalls.filter(id => !apply.includes(`id="${id}"`) && !apply.includes(`id='${id}'`));
if (missingIds.length > 0) {
  console.log('[!] IDs called in JS but NOT found in DOM:', missingIds);
} else {
  console.log('[OK] All IDs called in JS exist in DOM');
}

// 3. Check all step buttons and their targets
console.log('\nChecking step navigation buttons:');
const stepBtns = [...apply.matchAll(/showStep\(([0-9]+)\)/g)].map(m => m[1]);
console.log('showStep call counts:', stepBtns.reduce((acc, c) => (acc[c] = (acc[c]||0)+1, acc), {}));

// 4. Check form submission
console.log('\nForm submission handling:');
console.log('Form has onsubmit:', /<form[^>]+onsubmit=/i.test(apply));
console.log('Submit button present:', /<button[^>]+type=["']submit["']/i.test(apply));
console.log('handleFinalSubmit defined:', apply.includes('function handleFinalSubmit'));

// 5. Check Modals on apply.html
console.log('\nModal checks on apply.html:');
console.log('Status modal present:', apply.includes('id="status-checker-modal"'));
console.log('Tuition modal present:', apply.includes('id="tuition-modal"'));
console.log('Status modal backdrop click:', /id=["']status-checker-modal["'][^>]*onclick/i.test(apply));
console.log('Tuition modal backdrop click:', /id=["']tuition-modal["'][^>]*onclick/i.test(apply));
console.log('Escape key listener present:', /e\.key\s*===\s*['"]Escape['"]/i.test(apply));

// 6. Check images on apply.html
console.log('\nImages on apply.html:');
const imgs = [...apply.matchAll(/<img\b([^>]*)>/gi)];
imgs.forEach((img, idx) => {
  const attrs = img[1];
  const src = (attrs.match(/src=["']([^"']+)["']/i) || [])[1];
  const alt = (attrs.match(/alt=["']([^"']*)["']/i) || [])[1];
  if (!src) console.log(`[!] Image #${idx} missing src!`);
  if (alt === undefined) console.log(`[!] Image #${idx} missing alt! (src: ${src})`);
});

// 7. Check links (href) on apply.html
console.log('\nLinks on apply.html:');
const links = [...apply.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
const internalAnchors = links.filter(l => l.startsWith('#') && l !== '#');
const missingAnchors = internalAnchors.filter(a => !apply.includes(`id="${a.slice(1)}"`));
console.log('Internal anchors:', internalAnchors);
if (missingAnchors.length > 0) {
  console.log('[!] Broken anchor targets in apply.html:', missingAnchors);
} else {
  console.log('[OK] All internal anchors in apply.html have valid targets');
}
