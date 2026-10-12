const fs = require('fs');

console.log('=== VERIFYING IDENTIFIED BUGS ON HOME.HTML ===');

const home = fs.readFileSync('prototype/public/home.html', 'utf8');

// Test 1: Status Modal Enter key support
console.log('1. Status Modal Enter key:');
const hasEnterKey = home.includes('status-ref-input') && (home.includes('onkeydown') || home.includes('addEventListener(\'keydown\''));
console.log('   Supports Enter key in search input:', hasEnterKey);

// Test 2: Status Modal empty/invalid code handling
console.log('2. Status Modal invalid code handling:');
const handlesNotFound = home.includes('not found') || home.includes('No matching application');
console.log('   Handles not found reference:', handlesNotFound);

// Test 3: Modal backdrop click dismissal
console.log('3. Modal Backdrop dismissal:');
const statusBackdropClick = /id=["']status-checker-modal["'][^>]*onclick/i.test(home) || home.includes('status-checker-modal') && home.includes('e.target === m');
console.log('   Status modal closes on backdrop click:', statusBackdropClick);

// Test 4: Modal Escape key dismissal
console.log('4. Escape key dismissal:');
const hasEscapeDismissal = home.includes('Escape') && (home.includes('closeStatusModal') || home.includes('closeTuitionModal'));
console.log('   Modals close on Escape key:', hasEscapeDismissal);

// Test 5: Mobile menu button aria-expanded & icon toggle
console.log('5. Mobile menu toggle state:');
const mobileMenuTogglesIcon = home.includes('toggleMobileMenu') && home.includes('menu') && home.includes('close');
console.log('   Mobile menu toggles icon (menu <-> close):', mobileMenuTogglesIcon);

// Test 6: Section 4 Heritage link target
console.log('6. Heritage link target:');
const heritageMatch = home.match(/href=["']([^"']+)["'][^>]*>[^<]*Carepoint Heritage/i);
console.log('   Heritage link href:', heritageMatch ? heritageMatch[1] : 'NOT FOUND');

// Test 7: Dropdown item click smooth scrolling
console.log('7. Dropdown item smooth scroll:');
const dropdownHasNavClass = home.includes('class="dropdown-item') && home.includes('class="dropdown-item nav-link');
console.log('   Dropdown items have nav-link class:', dropdownHasNavClass);

// Test 8: Portal dropdown avatar image persona
console.log('8. Portal dropdown avatar:');
const portalAvatarMatch = home.match(/id=["']portal-dropdown["'][\s\S]*?<img[^>]+src=["']([^"']+)["']/i);
console.log('   Avatar src:', portalAvatarMatch ? portalAvatarMatch[1].slice(0, 60) + '...' : 'NONE');
const isAdminAvatar = portalAvatarMatch && portalAvatarMatch[1].includes('AB6AXuBkWfNsavZr');
console.log('   Is using admin photo for parent user:', isAdminAvatar);

// Test 9: Image alt tags for main hero images
console.log('9. Image alt attributes:');
const missingAlt = [...home.matchAll(/<img\b([^>]*)>/gi)].filter(m => !m[1].includes('alt='));
console.log('   Images missing alt tag:', missingAlt.length);
