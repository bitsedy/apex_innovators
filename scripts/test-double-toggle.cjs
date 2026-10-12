console.log('Simulating DOM click on mobile drawer link with both onclick and addEventListener:');

let isHidden = true;
function toggleMobileMenu() {
  isHidden = !isHidden;
  console.log('toggleMobileMenu called! Drawer is now hidden =', isHidden);
}

// 1. Initial state: User opens menu
toggleMobileMenu(); // now isHidden = false (drawer is open)

// 2. User clicks on <a data-section="home" onclick="toggleMobileMenu()">
console.log('\n--- User clicks on link: ---');
// Step A: inline onclick fires
toggleMobileMenu(); // isHidden = true

// Step B: addEventListener in carepoint-app.js fires
console.log('addEventListener fires and calls window.toggleMobileMenu():');
toggleMobileMenu(); // isHidden = false! DRAWER IS OPENED AGAIN!

console.log('\nFinal drawer state:', isHidden ? 'CLOSED (correct)' : 'OPEN (BUG: Double toggle caused drawer to reopen!)');
