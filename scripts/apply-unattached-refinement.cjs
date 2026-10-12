const fs = require('fs');

// ==========================================
// 1. REFINING prototype/public/apply.html
// ==========================================
const applyPath = 'prototype/public/apply.html';
if (fs.existsSync(applyPath)) {
  let content = fs.readFileSync(applyPath, 'utf8').replace(/\r\n/g, '\n');

  // Fix Stepper navigation tabs
  content = content.replace(
    '<span class="step-subtitle font-body-sm text-body-sm text-on-primary/80 line-clamp-1">Kofi Mensah</span>',
    '<span class="step-subtitle font-body-sm text-body-sm text-on-primary/80 line-clamp-1" id="tab1-subtitle">Applicant Name</span>'
  );
  content = content.replace(
    '<span class="step-subtitle font-body-sm text-body-sm text-on-surface-variant line-clamp-1">Dr. Nana Mensah</span>',
    '<span class="step-subtitle font-body-sm text-body-sm text-on-surface-variant line-clamp-1" id="tab2-subtitle">Primary Guardian</span>'
  );
  content = content.replace(
    '<span class="step-subtitle font-body-sm text-body-sm text-on-surface-variant line-clamp-1">0 of 4 Attached</span>',
    '<span class="step-subtitle font-body-sm text-body-sm text-on-surface-variant line-clamp-1" id="tab3-subtitle">0 of 4 Attached</span>'
  );

  // Fix Last Grade Completed value & duplicate placeholder in Step 1
  content = content.replace(
    'type="text" value="KG 1 Term 3"',
    'type="text" placeholder="e.g. KG 1 Term 3" value=""'
  );
  content = content.replace(
    'placeholder="Mention allergies (e.g. peanut, lactose), physical assistance needs, or dietary preferences..." rows="2" placeholder="Mention any allergies, medical conditions, or learning requirements..."',
    'rows="2" placeholder="Mention any allergies (e.g. peanut, lactose), physical assistance needs, or dietary preferences..."'
  );

  // Add id to class select
  content = content.replace(
    '<select class="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md font-semibold">',
    '<select id="child-class-select" class="px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md font-semibold" onchange="syncCandidatePreview()">'
  );

  // Add id to Step 4 target class
  content = content.replace(
    '<strong class="text-primary font-body-md">Kindergarten 2 (KG2)</strong>',
    '<strong class="text-primary font-body-md" id="review-target-class">Kindergarten 2 (KG2)</strong>'
  );

  // Add id to sidebar target class
  content = content.replace(
    '<span class="font-body-sm text-body-sm text-on-surface-variant">Target: Kindergarten 2</span>',
    '<span class="font-body-sm text-body-sm text-on-surface-variant" id="sidebar-target-class">Target: Kindergarten 2</span>'
  );

  // Step 3 Header Badge: unattached initial state (gray/neutral instead of green)
  const oldStep3Badge = `<div class="flex items-center gap-2 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full font-label-sm text-label-sm font-bold" id="step3-attached-badge">
<span class="material-symbols-outlined text-[16px]">verified</span>
<span id="step3-attached-count-text">0 of 4 Documents Attached</span>
</div>`;

  const newStep3Badge = `<div class="flex items-center gap-2 bg-surface-container text-on-surface-variant px-3 py-1.5 rounded-full font-label-sm text-label-sm font-bold" id="step3-attached-badge">
<span class="material-symbols-outlined text-[16px]" id="step3-attached-badge-icon">upload_file</span>
<span id="step3-attached-count-text">0 of 4 Documents Attached</span>
</div>`;

  content = content.replace(oldStep3Badge, newStep3Badge);

  // Success modal dynamic IDs
  content = content.replace(
    'Application for <strong>Kofi Mensah</strong> has been logged',
    'Application for <strong id="success-candidate-name">Applicant</strong> has been logged'
  );
  content = content.replace(
    'invitation date has been emailed to <strong>nana.mensah@gmail.com</strong>',
    'invitation date has been emailed to <strong id="success-guardian-email">parent@example.com</strong>'
  );

  // Replace script section around handleFileSelected with complete, verified implementation
  const scriptToFind = `    let uploadedFilesState = {
      file1: false,
      file2: false,
      file3: false,
      file4: false
    };

    function handleFileSelected(input, labelId, badgeId) {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const label = document.getElementById(labelId);
        const badge = document.getElementById(badgeId);
        if (label) {
          label.innerHTML = '<span class="text-primary font-bold">✓ ' + file.name + '</span> <span class="text-on-surface-variant font-normal">(' + (file.size / 1024).toFixed(0) + ' KB)</span>';
        }
        if (badge) {
          badge.innerHTML = '<span class="material-symbols-outlined text-[13px]">check_circle</span> Attached';
          badge.className = 'bg-tertiary text-tertiary-fixed font-label-sm text-label-sm px-2.5 py-0.5 rounded-full flex items-center gap-1 font-bold shadow-xs';
        }

        if (labelId === 'file-label-1') uploadedFilesState.file1 = true;
        if (labelId === 'file-label-2') uploadedFilesState.file2 = true;
        if (labelId === 'file-label-3') uploadedFilesState.file3 = true;
        if (labelId === 'file-label-4') uploadedFilesState.file4 = true;

        let totalDocs = 0;
        if (uploadedFilesState.file1) totalDocs++;
        if (uploadedFilesState.file2) totalDocs++;
        if (uploadedFilesState.file3) totalDocs++;
        if (uploadedFilesState.file4) totalDocs++;

        const step3Count = document.getElementById('step3-attached-count-text');
        const sidebarDocCount = document.getElementById('sidebar-doc-count');
        const tab3Sub = document.querySelector('#step-tab-3 .step-subtitle');

        if (step3Count) step3Count.textContent = totalDocs + ' of 4 Documents Attached';
        if (sidebarDocCount) sidebarDocCount.textContent = totalDocs + ' of 4 attached';
        if (tab3Sub) tab3Sub.textContent = totalDocs + ' of 4 Attached';
      }
    }

    function handleFinalSubmit() {
      const dec1 = document.getElementById('declaration-agree');
      const dec2 = document.getElementById('rules-agree');
      const signer = document.getElementById('signer-name');

      if (!dec1 || !dec2 || !dec1.checked || !dec2.checked) {
        alert('Please review and check the declaration agreements to submit.');
        return;
      }
      if (!signer || !signer.value.trim()) {
        alert('Please enter your full legal name as digital signature.');
        signer.focus();
        return;
      }

      // Hide all panels and show success modal
      for (let i = 1; i <= 4; i++) {
        const panel = document.getElementById('step-panel-' + i);
        if (panel) {
          panel.classList.add('hidden');
          panel.classList.remove('flex');
        }
      }

      const success = document.getElementById('submission-success-modal');
      if (success) {
        success.classList.remove('hidden');
        success.classList.add('flex');
        const topY = success.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: Math.max(0, topY), behavior: 'smooth' });
      }
    }`;

  const replacementScript = `    let uploadedFilesState = {
      file1: false,
      file2: false,
      file3: false,
      file4: false
    };

    function syncCandidatePreview() {
      const fn = (document.getElementById('child-first-name')?.value || '').trim();
      const sn = (document.getElementById('child-surname')?.value || '').trim();
      const fullName = (fn + ' ' + sn).trim() || 'New Applicant';
      const initials = ((fn[0] || '') + (sn[0] || '')).toUpperCase() || '--';

      const sideName = document.getElementById('sidebar-candidate-name');
      const sideInit = document.getElementById('sidebar-avatar-initials');
      const reviewName = document.getElementById('review-candidate-name');
      const tab1Sub = document.getElementById('tab1-subtitle');

      if (sideName) sideName.textContent = fullName;
      if (sideInit) sideInit.textContent = initials;
      if (reviewName) reviewName.textContent = fullName;
      if (tab1Sub) tab1Sub.textContent = (fullName === 'New Applicant') ? 'Applicant Name' : fullName;

      const classSelect = document.getElementById('child-class-select');
      if (classSelect) {
        const selClass = classSelect.value;
        const sideClass = document.getElementById('sidebar-target-class');
        const reviewClass = document.getElementById('review-target-class');
        if (sideClass) sideClass.textContent = 'Target: ' + selClass;
        if (reviewClass) reviewClass.textContent = selClass;
      }
    }

    function syncGuardianPreview() {
      const gName = (document.getElementById('guardian-name-input')?.value || '').trim() || 'Pending Entry';
      const gPhone = (document.getElementById('guardian-phone-input')?.value || '').trim() || 'Pending Entry';
      const reviewGName = document.getElementById('review-guardian-name');
      const reviewGPhone = document.getElementById('review-guardian-phone');
      const tab2Sub = document.getElementById('tab2-subtitle');

      if (reviewGName) reviewGName.textContent = gName;
      if (reviewGPhone) reviewGPhone.textContent = gPhone;
      if (tab2Sub) tab2Sub.textContent = (gName === 'Pending Entry') ? 'Primary Guardian' : gName;
    }

    function handleFileSelected(input, labelId, badgeId) {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const label = document.getElementById(labelId);
        const badge = document.getElementById(badgeId);
        if (label) {
          label.innerHTML = '<span class="text-primary font-bold">✓ ' + file.name + '</span> <span class="text-on-surface-variant font-normal">(' + (file.size / 1024).toFixed(0) + ' KB)</span>';
        }
        if (badge) {
          badge.innerHTML = '<span class="material-symbols-outlined text-[13px]">check_circle</span> Attached';
          badge.className = 'bg-tertiary text-tertiary-fixed font-label-sm text-label-sm px-2.5 py-0.5 rounded-full flex items-center gap-1 font-bold shadow-xs';
        }

        if (labelId === 'file-label-1') uploadedFilesState.file1 = true;
        if (labelId === 'file-label-2') uploadedFilesState.file2 = true;
        if (labelId === 'file-label-3') uploadedFilesState.file3 = true;
        if (labelId === 'file-label-4') uploadedFilesState.file4 = true;

        let totalDocs = 0;
        if (uploadedFilesState.file1) totalDocs++;
        if (uploadedFilesState.file2) totalDocs++;
        if (uploadedFilesState.file3) totalDocs++;
        if (uploadedFilesState.file4) totalDocs++;

        const step3Count = document.getElementById('step3-attached-count-text');
        const sidebarDocCount = document.getElementById('sidebar-doc-count');
        const tab3Sub = document.getElementById('tab3-subtitle') || document.querySelector('#step-tab-3 .step-subtitle');
        const step3Badge = document.getElementById('step3-attached-badge');
        const step3BadgeIcon = document.getElementById('step3-attached-badge-icon');

        if (step3Count) step3Count.textContent = totalDocs + ' of 4 Documents Attached';
        if (sidebarDocCount) sidebarDocCount.textContent = totalDocs + ' of 4 attached';
        if (tab3Sub) tab3Sub.textContent = totalDocs + ' of 4 Attached';

        if (step3Badge && totalDocs > 0) {
          step3Badge.className = 'flex items-center gap-2 bg-tertiary text-tertiary-fixed px-3 py-1.5 rounded-full font-label-sm text-label-sm font-bold';
          if (step3BadgeIcon) step3BadgeIcon.textContent = 'verified';
        }
      }
    }

    function handleFinalSubmit() {
      const dec1 = document.getElementById('declaration-agree');
      const dec2 = document.getElementById('rules-agree');
      const signer = document.getElementById('signer-name');

      if (!dec1 || !dec2 || !dec1.checked || !dec2.checked) {
        alert('Please review and check the declaration agreements to submit.');
        return;
      }
      if (!signer || !signer.value.trim()) {
        alert('Please enter your full legal name as digital signature.');
        signer.focus();
        return;
      }

      // Update success modal with actual user input
      const fn = (document.getElementById('child-first-name')?.value || '').trim();
      const sn = (document.getElementById('child-surname')?.value || '').trim();
      const candidateFullName = (fn + ' ' + sn).trim() || 'Applicant';
      const guardianEmail = (document.querySelector('input[type="email"]')?.value || '').trim() || 'parent@example.com';

      const succCand = document.getElementById('success-candidate-name');
      const succEmail = document.getElementById('success-guardian-email');
      if (succCand) succCand.textContent = candidateFullName;
      if (succEmail) succEmail.textContent = guardianEmail;

      // Hide all panels and show success modal
      for (let i = 1; i <= 4; i++) {
        const panel = document.getElementById('step-panel-' + i);
        if (panel) {
          panel.classList.add('hidden');
          panel.classList.remove('flex');
        }
      }

      const success = document.getElementById('submission-success-modal');
      if (success) {
        success.classList.remove('hidden');
        success.classList.add('flex');
        const topY = success.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: Math.max(0, topY), behavior: 'smooth' });
      }
    }`;

  content = content.replace(scriptToFind, replacementScript);
  fs.writeFileSync(applyPath, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Successfully polished apply.html');
}

// ==========================================
// 2. REFINING prototype/public/mobile-apply.html
// ==========================================
const mobApplyPath = 'prototype/public/mobile-apply.html';
if (fs.existsSync(mobApplyPath)) {
  let content = fs.readFileSync(mobApplyPath, 'utf8').replace(/\r\n/g, '\n');

  // Replace lines 182-205 (the auto-attached photo & birth certificate preview pair in Step 1)
  const oldPhotoBirthPair = `<!-- Photo & Birth Certificate Preview Pair -->
<div class="grid grid-cols-2 gap-space-sm mb-space-md">
<!-- Child Passport Photo -->
<div class="flex flex-col items-center bg-surface-container-low rounded-xl p-space-sm text-center relative group">
<div class="w-20 h-20 rounded-full overflow-hidden mb-2 bg-surface-container-highest relative shadow-sm">
<img class="w-full h-full object-cover" data-alt="A bright warm portrait of a smiling young African school child wearing a navy blue collared uniform, well lit studio setting with educational background elements, sharp focus on cheerful expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHgWMFC_jGuPI7AtuXVNGD3BRPG2hC1Ga-C3CjI2gSkn5TJ58rHcZi0S0Mzdrt7qjWQQLqz1RRp7pMbty9SSgwW2SKalbdzawarStdcutaREhyAOs00R-ZbdNXJbI2_opdFcJZyLzYQ6ABu2_QoWPX8dj-zdJ55GSQWvnqshWKo5Xa9PfPAUY3G8IAwDdgL-QhGgzhEkS3YXPkmDGIWuwN3gG-dZ8fG_8RzEaGgfP_qFkdA_0QpnpHQ"/>
<div class="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-on-primary text-[20px]">photo_camera</span>
</div>
</div>
<span class="font-label-sm text-label-sm text-primary font-bold">Passport Photo</span>
<button class="mt-1 font-label-sm text-label-sm text-primary-container bg-surface-container-lowest px-2 py-0.5 rounded-md shadow-sm flex items-center gap-1" type="button">
<span class="material-symbols-outlined text-[14px]">upload</span> Change
        </button>
</div>
<!-- Birth Cert Scan Document -->
<div class="flex flex-col items-center justify-center bg-surface-container-low rounded-xl p-space-sm text-center">
<div class="w-20 h-20 rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center mb-2 shadow-sm text-on-tertiary-container">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="font-label-sm text-label-sm text-[10px] text-on-surface-variant font-medium">B-CERT.PDF</span>
</div>
<span class="font-label-sm text-label-sm text-on-surface font-semibold truncate max-w-[120px]">GH-B920199...</span>
<span class="mt-1 font-label-sm text-label-sm text-tertiary-fixed-dim bg-tertiary-container px-2 py-0.5 rounded-full font-bold">Attached</span>
</div>
</div>`;

  const newPhotoBirthPair = `<!-- Photo & Birth Certificate Unattached Interactive Upload Pair -->
<div class="grid grid-cols-2 gap-space-sm mb-space-md">
  <!-- Child Passport Photo (Unattached dropzone) -->
  <div class="flex flex-col items-center bg-surface-container-low rounded-xl p-space-sm text-center relative group border border-outline-variant/40 hover:border-primary transition-colors cursor-pointer" onclick="document.getElementById('mobile-quick-photo-input').click()">
    <div class="w-20 h-20 rounded-full overflow-hidden mb-2 bg-surface-container-highest flex items-center justify-center relative shadow-sm">
      <span class="material-symbols-outlined text-[34px] text-on-surface-variant" id="mobile-quick-photo-icon">account_circle</span>
      <img id="mobile-quick-photo-preview" class="w-full h-full object-cover hidden" alt="Ward Preview" />
    </div>
    <span class="font-label-sm text-label-sm text-primary font-bold">Ward Photo</span>
    <span class="mt-1 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1" id="mobile-quick-photo-badge">
      <span class="material-symbols-outlined text-[13px]">add_a_photo</span> Browse
    </span>
    <input type="file" id="mobile-quick-photo-input" accept="image/*" class="hidden" onchange="handleMobileQuickPhoto(this)" />
  </div>

  <!-- Birth Cert Scan Document (Unattached dropzone) -->
  <div class="flex flex-col items-center justify-center bg-surface-container-low rounded-xl p-space-sm text-center border border-outline-variant/40 hover:border-primary transition-colors cursor-pointer" onclick="document.getElementById('mobile-quick-birth-input').click()">
    <div class="w-20 h-20 rounded-lg bg-surface-container-lowest flex flex-col items-center justify-center mb-2 shadow-sm text-primary">
      <span class="material-symbols-outlined text-[28px]" id="mobile-quick-birth-icon">upload_file</span>
      <span class="font-label-sm text-label-sm text-[10px] text-on-surface-variant font-medium mt-1 truncate max-w-[70px]" id="mobile-quick-birth-filename">Awaiting</span>
    </div>
    <span class="font-label-sm text-label-sm text-on-surface font-semibold truncate max-w-[120px]">Birth Cert</span>
    <span class="mt-1 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest px-2 py-0.5 rounded-full font-medium shadow-xs" id="mobile-quick-birth-badge">
      Upload
    </span>
    <input type="file" id="mobile-quick-birth-input" accept=".pdf,image/*" class="hidden" onchange="handleMobileQuickBirth(this)" />
  </div>
</div>`;

  content = content.replace(oldPhotoBirthPair, newPhotoBirthPair);

  // Clear hardcoded inputs in Step 1 of mobile-apply.html
  content = content.replace(
    'id="child-fullname" placeholder="First Name, Middle &amp; Surname" type="text" value="Kofi Kwabena Asante"',
    'id="child-fullname" placeholder="e.g. Kofi Kwabena Asante" type="text" value="" oninput="syncMobileReview()"'
  );
  content = content.replace(
    'id="child-dob" type="date" value="2019-08-14"',
    'id="child-dob" type="date" value=""'
  );
  content = content.replace(
    'id="guardian-name" type="text" value="Dr. Emmanuel Asante"',
    'id="guardian-name" placeholder="e.g. Dr. Emmanuel Asante" type="text" value="" oninput="syncMobileReview()"'
  );
  content = content.replace(
    'id="ghana-card-pin" maxlength="15" type="text" value="GHA-724910283-9"',
    'id="ghana-card-pin" maxlength="15" type="text" placeholder="e.g. GHA-724910283-9" value=""'
  );
  content = content.replace(
    'id="guardian-phone" type="tel" value="024 492 8821"',
    'id="guardian-phone" placeholder="e.g. 024 123 4567" type="tel" value="" oninput="syncMobileReview()"'
  );

  // Clear NIA verified badge hardcoded matching text
  content = content.replace(
    '<span>Matched to: Emmanuel Kwame Asante (NIA Database Verified)</span>',
    '<span>Instant NIA identification check enabled</span>'
  );

  // Clean duplicate placeholder in health-notes textarea
  content = content.replace(
    'id="health-notes" placeholder="List any prescribed medication or pediatrician contact in Accra/Kumasi..." rows="2" placeholder="List any prescribed medication, allergies, or emergency clinic contacts..."',
    'id="health-notes" rows="2" placeholder="List any prescribed medication, allergies, or emergency clinic contacts..."'
  );

  // Clear Step 4 Review summary hardcoded values
  content = content.replace(
    '<strong class="text-primary" id="review-child-name">Kofi Mensah</strong>',
    '<strong class="text-primary" id="review-child-name">New Applicant</strong>'
  );
  content = content.replace(
    '<strong class="text-primary">+233 24 456 7890</strong>',
    '<strong class="text-primary" id="review-guardian-phone">Pending Entry</strong>'
  );

  // Install JavaScript handlers into the script block
  const oldScriptBlockEnd = `  if (window.location.hash === '#status') {
    openStatusModal();
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#status') {
      openStatusModal();
    }
  });
</script>`;

  const newScriptBlockEnd = `  // Sync review summary card in Step 4
  function syncMobileReview() {
    const childName = (document.getElementById('child-fullname')?.value || '').trim() || 'New Applicant';
    const gPhone = (document.getElementById('guardian-phone')?.value || '').trim() || 'Pending Entry';
    const reviewChild = document.getElementById('review-child-name');
    const reviewPhone = document.getElementById('review-guardian-phone');
    if (reviewChild) reviewChild.textContent = childName;
    if (reviewPhone) reviewPhone.textContent = gPhone;
  }

  // Quick photo upload in Step 1
  function handleMobileQuickPhoto(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const preview = document.getElementById('mobile-quick-photo-preview');
      const icon = document.getElementById('mobile-quick-photo-icon');
      const badge = document.getElementById('mobile-quick-photo-badge');
      if (preview && icon) {
        const reader = new FileReader();
        reader.onload = function(e) {
          preview.src = e.target.result;
          preview.classList.remove('hidden');
          icon.classList.add('hidden');
        };
        reader.readAsDataURL(file);
      }
      if (badge) {
        badge.innerHTML = '<span class="material-symbols-outlined text-[13px] text-tertiary-fixed">check_circle</span> Attached';
        badge.className = 'mt-1 font-label-sm text-label-sm text-tertiary-fixed bg-tertiary-container px-2 py-0.5 rounded-md font-bold shadow-xs flex items-center gap-1';
      }
      // Also update Step 3 slot if present
      const step3Label = document.getElementById('mob-label-photo');
      const step3Badge = document.getElementById('mob-badge-photo');
      if (step3Label) step3Label.innerHTML = '<span class="text-primary font-bold">✓ ' + file.name + '</span>';
      if (step3Badge) {
        step3Badge.textContent = 'Attached';
        step3Badge.className = 'text-xs px-2 py-0.5 rounded bg-tertiary-container text-tertiary-fixed font-bold';
      }
      showToast('Passport photo attached');
    }
  }

  // Quick birth cert upload in Step 1
  function handleMobileQuickBirth(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const fname = document.getElementById('mobile-quick-birth-filename');
      const badge = document.getElementById('mobile-quick-birth-badge');
      const icon = document.getElementById('mobile-quick-birth-icon');
      if (fname) fname.textContent = file.name;
      if (icon) icon.className = 'material-symbols-outlined text-[28px] text-tertiary-fixed';
      if (badge) {
        badge.innerHTML = 'Attached';
        badge.className = 'mt-1 font-label-sm text-label-sm text-tertiary-fixed bg-tertiary-container px-2 py-0.5 rounded-full font-bold shadow-xs';
      }
      // Also update Step 3 slot if present
      const step3Label = document.getElementById('mob-label-birth');
      const step3Badge = document.getElementById('mob-badge-birth');
      if (step3Label) step3Label.innerHTML = '<span class="text-primary font-bold">✓ ' + file.name + '</span>';
      if (step3Badge) {
        step3Badge.textContent = 'Attached';
        step3Badge.className = 'text-xs px-2 py-0.5 rounded bg-tertiary-container text-tertiary-fixed font-bold';
      }
      showToast('Birth certificate attached');
    }
  }

  // Handle document file inputs in Step 3
  function handleMobileDoc(input, labelId, badgeId) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const lbl = document.getElementById(labelId);
      const bdg = document.getElementById(badgeId);
      if (lbl) lbl.innerHTML = '<span class="text-primary font-bold">✓ ' + file.name + '</span> (' + (file.size / 1024).toFixed(0) + ' KB)';
      if (bdg) {
        bdg.textContent = 'Attached';
        bdg.className = 'text-xs px-2 py-0.5 rounded bg-tertiary-container text-tertiary-fixed font-bold';
      }
      showToast('Document attached: ' + file.name);
    }
  }

  if (window.location.hash === '#status') {
    openStatusModal();
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#status') {
      openStatusModal();
    }
  });
</script>`;

  content = content.replace(oldScriptBlockEnd, newScriptBlockEnd);
  fs.writeFileSync(mobApplyPath, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Successfully polished mobile-apply.html');
}
