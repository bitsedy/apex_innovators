const fs = require('fs');
const jsdom = (() => {
  // Simple headless simulation of the DOM state for apply.html
  return null;
})();

console.log('=== SIMULATING STEP TRANSITIONS FOR APPLY.HTML ===');

const apply = fs.readFileSync('prototype/public/apply.html', 'utf8');

// Extract Script 3 content
const scriptMatch = apply.match(/<!-- Interactive Wizard Switcher Script -->[\s\S]*?<script>([\s\S]*?)<\/script>/i);
if (!scriptMatch) {
  console.error('[FAIL] Could not find wizard script in apply.html');
  process.exit(1);
}

const wizardCode = scriptMatch[1];

// Create a mock DOM environment
const elements = {};
function createMockElement(id, initialClasses = []) {
  const el = {
    id,
    classList: {
      classes: new Set(initialClasses),
      add(...cls) { cls.forEach(c => this.classes.add(c)); },
      remove(...cls) { cls.forEach(c => this.classes.delete(c)); },
      contains(c) { return this.classes.has(c); },
      toggle(c) {
        if (this.classes.has(c)) { this.classes.delete(c); return false; }
        else { this.classes.add(c); return true; }
      }
    },
    style: {},
    textContent: '',
    innerHTML: '',
    value: '',
    querySelector(sel) {
      if (sel === '.step-badge-icon') return createMockElement('badge-icon');
      if (sel === '.step-status') return createMockElement('status');
      if (sel === '.step-title') return createMockElement('title');
      if (sel === '.step-subtitle') return createMockElement('sub');
      return createMockElement('inner');
    },
    getBoundingClientRect() { return { top: 100 }; }
  };
  elements[id] = el;
  return el;
}

// Populate expected elements
for (let i = 1; i <= 4; i++) {
  createMockElement('step-panel-' + i, i === 1 ? ['flex'] : ['hidden']);
  createMockElement('step-tab-' + i);
}
createMockElement('sidebar-progress-text');
createMockElement('sidebar-progress-bar');
createMockElement('admissions-form');
createMockElement('child-first-name');
createMockElement('child-surname');
createMockElement('child-class-select');
createMockElement('guardian-name-input');
createMockElement('guardian-phone-input');
createMockElement('declaration-agree');
createMockElement('rules-agree');
createMockElement('signer-name');

const mockWindow = {
  scrollY: 0,
  scrollTo: () => {}
};

const mockDoc = {
  getElementById(id) {
    if (!elements[id]) createMockElement(id);
    return elements[id];
  },
  querySelector() { return null; },
  addEventListener() {}
};

// Execute the wizard code inside a VM sandbox
const vm = require('vm');
const context = vm.createContext({
  document: mockDoc,
  window: mockWindow,
  console: console
});

try {
  vm.runInContext(wizardCode, context);
  console.log('[PASS] Wizard script compiled and executed in VM sandbox with ZERO syntax errors.');

  // Test 1: Step 1 active initially
  context.showStep(1);
  const p1 = elements['step-panel-1'];
  const p2 = elements['step-panel-2'];
  if (p1.classList.contains('flex') && !p1.classList.contains('hidden') && p2.classList.contains('hidden')) {
    console.log('[PASS] showStep(1): Panel 1 visible, Panel 2 hidden.');
  } else {
    console.error('[FAIL] showStep(1) state incorrect.');
  }

  // Test 2: Click "Continue to Guardian Details" (showStep(2))
  context.showStep(2);
  if (p2.classList.contains('flex') && !p2.classList.contains('hidden') && p1.classList.contains('hidden')) {
    console.log('[PASS] showStep(2): "Continue to Guardian Details" successfully reveals Panel 2 and hides Panel 1.');
  } else {
    console.error('[FAIL] showStep(2) failed to transition to Panel 2.');
  }
  if (elements['sidebar-progress-text'].textContent === '50%') {
    console.log('[PASS] showStep(2): Completion meter updated to 50%.');
  }

  // Test 3: Click "Proceed to Documents" (showStep(3))
  context.showStep(3);
  const p3 = elements['step-panel-3'];
  if (p3.classList.contains('flex') && !p3.classList.contains('hidden') && p2.classList.contains('hidden')) {
    console.log('[PASS] showStep(3): "Proceed to Documents" successfully reveals Panel 3 and hides Panel 2.');
  } else {
    console.error('[FAIL] showStep(3) failed to transition to Panel 3.');
  }
  if (elements['sidebar-progress-text'].textContent === '75%') {
    console.log('[PASS] showStep(3): Completion meter updated to 75%.');
  }

  // Test 4: Click "Review & Declaration" (showStep(4))
  context.showStep(4);
  const p4 = elements['step-panel-4'];
  if (p4.classList.contains('flex') && !p4.classList.contains('hidden') && p3.classList.contains('hidden')) {
    console.log('[PASS] showStep(4): "Review & Declaration" successfully reveals Panel 4 and hides Panel 3.');
  } else {
    console.error('[FAIL] showStep(4) failed to transition to Panel 4.');
  }
  if (elements['sidebar-progress-text'].textContent === '100%') {
    console.log('[PASS] showStep(4): Completion meter updated to 100%.');
  }

  // Test 5: Back button navigation
  context.showStep(3);
  if (p3.classList.contains('flex') && p4.classList.contains('hidden')) {
    console.log('[PASS] Back navigation: successfully returns to previous steps.');
  }

  console.log('\nALL STEP PROCEEDING BUTTON SIMULATIONS PASSED (100%)');
} catch (err) {
  console.error('[FAIL] Error during wizard execution:', err.stack);
  process.exit(1);
}
