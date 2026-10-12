const fs = require('fs');
const path = 'prototype/public/mobile-apply.html';

let content = fs.readFileSync(path, 'utf8');

// We will encapsulate the existing form elements into step-1-container
// and append step-2-container, step-3-container, and step-4-container.

const step2Html = `
<!-- STEP 2: GUARDIAN & EMERGENCY CONTACTS -->
<div id="step-panel-2" class="step-panel hidden flex-col gap-space-md">
  <section class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
    <div class="flex items-center gap-space-xs mb-space-xs">
      <span class="material-symbols-outlined text-primary text-[22px]">family_restroom</span>
      <h2 class="font-headline-sm text-headline-sm text-primary font-bold">Primary Guardian Information</h2>
    </div>
    <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Authorized parent or legal guardian details for statutory communication.</p>

    <div class="space-y-space-sm">
      <div>
        <label class="block font-label-md text-label-md text-on-surface mb-1">Guardian Full Name *</label>
        <input type="text" id="guardian-name" value="Dr. Nana Mensah" class="w-full p-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/40 focus:outline-primary" required />
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="block font-label-md text-label-md text-on-surface mb-1">Relationship *</label>
          <select class="w-full p-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/40">
            <option selected>Father</option>
            <option>Mother</option>
            <option>Legal Guardian</option>
          </select>
        </div>
        <div>
          <label class="block font-label-md text-label-md text-on-surface mb-1">Ghana Card PIN *</label>
          <input type="text" value="GHA-71289102-1" class="w-full p-space-sm rounded-lg bg-surface-container-low text-on-surface font-mono font-body-sm text-body-sm border border-outline-variant/40" />
        </div>
      </div>

      <div>
        <label class="block font-label-md text-label-md text-on-surface mb-1">Telephone (Mobile Money) *</label>
        <input type="tel" id="guardian-phone" value="+233 24 456 7890" class="w-full p-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/40" required />
      </div>

      <div>
        <label class="block font-label-md text-label-md text-on-surface mb-1">Email Address</label>
        <input type="email" value="nana.mensah@apexmail.gh" class="w-full p-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/40" />
      </div>

      <div>
        <label class="block font-label-md text-label-md text-on-surface mb-1">GhanaPost GPS Digital Address *</label>
        <input type="text" value="GA-183-9021, East Legon, Accra" class="w-full p-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm border border-outline-variant/40" />
      </div>
    </div>
  </section>
</div>

<!-- STEP 3: DOCUMENT UPLOADS & PRIOR SCHOOLING -->
<div id="step-panel-3" class="step-panel hidden flex-col gap-space-md">
  <section class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
    <div class="flex items-center gap-space-xs mb-space-xs">
      <span class="material-symbols-outlined text-primary text-[22px]">upload_file</span>
      <h2 class="font-headline-sm text-headline-sm text-primary font-bold">Mandatory Statutory Documents</h2>
    </div>
    <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Upload certified copies required under Ghana Education Service (GES) regulations.</p>

    <div class="space-y-3">
      <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-primary">description</span>
          <div>
            <span class="font-label-md text-on-surface block font-bold">Child Birth Certificate</span>
            <span class="text-[11px] text-tertiary-fixed-dim font-semibold flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[13px]">check_circle</span> birth_cert_kofi.pdf (1.2 MB)
            </span>
          </div>
        </div>
        <span class="text-xs px-2 py-0.5 rounded bg-tertiary-container text-tertiary-fixed font-bold">Uploaded</span>
      </div>

      <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-primary">vaccines</span>
          <div>
            <span class="font-label-md text-on-surface block font-bold">Immunization & Health Card</span>
            <span class="text-[11px] text-tertiary-fixed-dim font-semibold flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[13px]">check_circle</span> weigh_card_ghs.jpg (840 KB)
            </span>
          </div>
        </div>
        <span class="text-xs px-2 py-0.5 rounded bg-tertiary-container text-tertiary-fixed font-bold">Uploaded</span>
      </div>

      <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-primary">history_edu</span>
          <div>
            <span class="font-label-md text-on-surface block font-bold">Previous Term Report Card</span>
            <span class="text-[11px] text-on-surface-variant block">Optional for Nursery; required for Basic 1-9</span>
          </div>
        </div>
        <button type="button" class="text-xs px-2.5 py-1 rounded bg-surface-container-highest text-primary font-bold">Upload</button>
      </div>
    </div>
  </section>
</div>

<!-- STEP 4: DECLARATION & FINAL SUBMISSION -->
<div id="step-panel-4" class="step-panel hidden flex-col gap-space-md">
  <section class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
    <div class="flex items-center gap-space-xs mb-space-xs">
      <span class="material-symbols-outlined text-primary text-[22px]">fact_check</span>
      <h2 class="font-headline-sm text-headline-sm text-primary font-bold">Parental Declaration & Submission</h2>
    </div>
    <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Verify your admissions submission before final filing.</p>

    <!-- Summary Confirmation Card -->
    <div class="p-3 bg-surface-container-low rounded-xl flex flex-col gap-2 mb-3">
      <span class="font-label-md text-primary font-bold">Profile Summary</span>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div>
          <span class="text-on-surface-variant block">Pupil Name</span>
          <strong class="text-primary" id="review-child-name">Kofi Mensah</strong>
        </div>
        <div>
          <span class="text-on-surface-variant block">Target Cohort</span>
          <strong class="text-primary" id="review-cohort-name">Kindergarten 2 (KG2)</strong>
        </div>
        <div>
          <span class="text-on-surface-variant block">Guardian Contact</span>
          <strong class="text-primary">+233 24 456 7890</strong>
        </div>
        <div>
          <span class="text-on-surface-variant block">Application Fee</span>
          <strong class="text-secondary font-bold">GH₵ 150 (Waived)</strong>
        </div>
      </div>
    </div>

    <!-- Declarations -->
    <div class="space-y-3 pt-1">
      <label class="flex items-start gap-2.5 cursor-pointer">
        <input type="checkbox" id="mobile-decl-1" checked class="w-4 h-4 rounded text-primary mt-0.5" />
        <span class="text-xs text-on-surface leading-tight">I certify that all details and uploaded documents are authentic and compliant with GES admissions guidelines.</span>
      </label>
      <label class="flex items-start gap-2.5 cursor-pointer">
        <input type="checkbox" id="mobile-decl-2" checked class="w-4 h-4 rounded text-primary mt-0.5" />
        <span class="text-xs text-on-surface leading-tight">I agree to Carepoint Community School's code of conduct and Christian character formation standards.</span>
      </label>
    </div>
  </section>
</div>
`;

// Wrap existing step 1 content
const step1StartTag = '<!-- Section 1: Child\'s Academic Division Selector -->';
const step1EndTag = '<!-- Section 5: Admissions WhatsApp Support Hotline Box -->';

if (content.includes(step1StartTag) && content.includes(step1EndTag)) {
  const s1Start = content.indexOf(step1StartTag);
  const s5Index = content.indexOf(step1EndTag);
  const s5End = content.indexOf('</section>', s5Index) + '</section>'.length;

  const existingStep1 = content.substring(s1Start, s5End);
  const wrappedStep1 = `<div id="step-panel-1" class="step-panel flex flex-col gap-space-md">\n${existingStep1}\n</div>\n${step2Html}`;

  content = content.substring(0, s1Start) + wrappedStep1 + content.substring(s5End);
  console.log('Successfully wrapped Step 1 and injected Steps 2, 3, 4');
} else {
  console.log('Step markers not found');
}

// Now replace proceedToStepTwo and wire step navigation logic
const oldScriptTarget = 'function proceedToStepTwo() {\r\n    showToast("Validating Step 1... Ready for Guardian info");\r\n  }';
const oldScriptTargetLF = 'function proceedToStepTwo() {\n    showToast("Validating Step 1... Ready for Guardian info");\n  }';

const newStepperScript = `  let currentStep = 1;

  function updateStepperUI(step) {
    currentStep = step;
    // Hide all step panels
    document.querySelectorAll('.step-panel').forEach(p => p.classList.add('hidden'));
    const activePanel = document.getElementById('step-panel-' + step);
    if (activePanel) activePanel.classList.remove('hidden');

    // Update Step Tracker text & percent
    const stepLabel = document.querySelector('section[aria-label="Application Progress"] .font-label-md');
    const percentBadge = document.querySelector('section[aria-label="Application Progress"] .font-label-md.bg-surface-container-low');
    const stepPercents = [25, 50, 75, 100];
    if (stepLabel) stepLabel.textContent = \`Step \${step} of 4\`;
    if (percentBadge) percentBadge.textContent = \`\${stepPercents[step - 1]}% Completed\`;

    // Update progress bars
    const bars = document.querySelectorAll('section[aria-label="Application Progress"] .grid-cols-4 div');
    bars.forEach((b, idx) => {
      if (idx < step) {
        b.className = 'h-2 rounded-full bg-primary';
      } else {
        b.className = 'h-2 rounded-full bg-surface-container-highest';
      }
    });

    // Update step circles
    const stepCircles = document.querySelectorAll('section[aria-label="Application Progress"] .rounded-full.w-7');
    stepCircles.forEach((c, idx) => {
      if (idx + 1 === step) {
        c.className = 'w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center shadow-sm';
      } else if (idx + 1 < step) {
        c.className = 'w-7 h-7 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm flex items-center justify-center shadow-sm font-bold';
        c.textContent = '✓';
      } else {
        c.className = 'w-7 h-7 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center';
        c.textContent = (idx + 1).toString();
      }
    });

    // Update action footer button labels
    const nextBtn = document.getElementById('mobile-next-btn');
    const backBtn = document.getElementById('mobile-back-btn');
    if (nextBtn) {
      if (step === 1) nextBtn.innerHTML = '<span>Continue to Parent Info</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span>';
      else if (step === 2) nextBtn.innerHTML = '<span>Continue to Documents</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span>';
      else if (step === 3) nextBtn.innerHTML = '<span>Review & Declaration</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span>';
      else if (step === 4) nextBtn.innerHTML = '<span>Submit Application</span><span class="material-symbols-outlined text-[18px]">send</span>';
    }
    if (backBtn) {
      if (step > 1) {
        backBtn.classList.remove('hidden');
      } else {
        backBtn.classList.add('hidden');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleNextStep() {
    if (currentStep < 4) {
      updateStepperUI(currentStep + 1);
    } else {
      // Step 4 final submission: Show confirmation modal
      openStatusModal();
      showToast('Application #CP-2026-9921 Submitted Successfully!');
    }
  }

  function handlePrevStep() {
    if (currentStep > 1) {
      updateStepperUI(currentStep - 1);
    }
  }

  function proceedToStepTwo() {
    handleNextStep();
  }`;

content = content.replace(/\r\n/g, '\n');
if (content.includes(oldScriptTargetLF)) {
  content = content.replace(oldScriptTargetLF, newStepperScript);
  console.log('Replaced proceedToStepTwo with full multi-step navigation logic');
}

// Update the bottom buttons with IDs
const oldFooterBtn = '<button class="flex-1 h-12 px-space-lg rounded-full bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:opacity-90 transition-transform active:scale-[0.99]" onclick="proceedToStepTwo()" type="button">\n<span>Continue to Parent Info</span>\n<span class="material-symbols-outlined text-[18px]">arrow_forward</span>\n</button>';

const newFooterBtn = `<button id="mobile-back-btn" class="hidden h-12 px-4 rounded-full bg-surface-container text-primary font-label-lg flex items-center justify-center gap-1 shadow-sm transition-all" onclick="handlePrevStep()" type="button">
<span class="material-symbols-outlined text-[18px]">arrow_back</span>
<span>Back</span>
</button>
<button id="mobile-next-btn" class="flex-1 h-12 px-space-lg rounded-full bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:opacity-90 transition-transform active:scale-[0.99]" onclick="handleNextStep()" type="button">
<span>Continue to Parent Info</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>`;

if (content.includes(oldFooterBtn)) {
  content = content.replace(oldFooterBtn, newFooterBtn);
  console.log('Updated mobile footer buttons');
}

fs.writeFileSync(path, content.replace(/\n/g, '\r\n'), 'utf8');
console.log('mobile-apply.html wizard completely overhauled.');
