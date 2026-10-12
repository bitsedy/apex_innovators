const fs = require('fs');

// ==========================================
// 1. UPDATE prototype/public/apply.html
// ==========================================
const applyPath = 'prototype/public/apply.html';
if (fs.existsSync(applyPath)) {
  let content = fs.readFileSync(applyPath, 'utf8');

  // Change initial document counts to 0 of 4
  content = content.replace('2 of 4 Attached', '0 of 4 Attached');
  content = content.replace('2 of 4 Documents Attached', '0 of 4 Documents Attached');
  content = content.replace('2 of 4 attached', '0 of 4 attached');

  // Replace Item 1 (Passport Photo) and Item 2 (Birth Certificate) with unattached dropzones
  const oldDocsChunk = `<!-- Item 1: Passport Photo (Uploaded state) -->
<div class="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 relative">
<div class="flex items-start justify-between">
<div class="flex items-center gap-2">
<span class="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">account_box</span>
</span>
<div>
<div class="font-label-lg text-label-lg text-primary">Passport Photo of Ward</div>
<span class="font-label-sm text-label-sm text-secondary font-bold">Mandatory</span>
</div>
</div>
<span class="bg-tertiary text-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
<span class="material-symbols-outlined text-[13px]">check_circle</span> Attached
                  </span>
</div>
<div class="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<div class="w-12 h-14 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center text-on-surface-variant font-label-sm">
<span class="material-symbols-outlined text-[24px] text-primary">face</span>
</div>
<div class="flex flex-col min-w-0 flex-1">
<span class="font-label-sm text-label-sm text-primary font-bold truncate">kofi-mensah-passport.jpg</span>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[12px]">1.2 MB • Uploaded 10 mins ago</span>
</div>
<button class="p-1 hover:text-secondary text-on-surface-variant transition-colors" title="Remove &amp; re-upload" type="button" onclick="alert('Passport photo reset. You can attach a new photo file.');">
<span class="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</div>
<!-- Item 2: Birth Certificate (Uploaded state) -->
<div class="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 relative">
<div class="flex items-start justify-between">
<div class="flex items-center gap-2">
<span class="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">description</span>
</span>
<div>
<div class="font-label-lg text-label-lg text-primary">Birth Certificate</div>
<span class="font-label-sm text-label-sm text-secondary font-bold">Mandatory</span>
</div>
</div>
<span class="bg-tertiary text-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
<span class="material-symbols-outlined text-[13px]">check_circle</span> Attached
                  </span>
</div>
<div class="flex items-center gap-3 bg-surface-container-lowest p-2.5 rounded-lg shadow-sm">
<div class="w-12 h-14 rounded bg-surface-container overflow-hidden shrink-0 flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[24px]">picture_as_pdf</span>
</div>
<div class="flex flex-col min-w-0 flex-1">
<span class="font-label-sm text-label-sm text-primary font-bold truncate">ghana-birth-cert-mensah.pdf</span>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[12px]">2.8 MB • Verified format</span>
</div>
<button class="p-1 hover:text-secondary text-on-surface-variant transition-colors" title="Remove &amp; re-upload" type="button" onclick="alert('Birth certificate reset. You can attach a new PDF or scan.');">
<span class="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</div>`;

  const newDocsChunk = `<!-- Item 1: Passport Photo of Ward (Unattached interactive dropzone) -->
<div class="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 relative">
<div class="flex items-start justify-between">
<div class="flex items-center gap-2">
<span class="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">account_box</span>
</span>
<div>
<div class="font-label-lg text-label-lg text-primary">Passport Photo of Ward</div>
<span class="font-label-sm text-label-sm text-secondary font-bold">Mandatory</span>
</div>
</div>
<span class="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-medium" id="file-badge-1">
Awaiting Upload
</span>
</div>
<div class="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-lg border-2 border-dashed border-outline-variant hover:border-primary hover:bg-surface-container-high/40 transition-all cursor-pointer group text-center" onclick="this.querySelector('input').click()">
<span class="material-symbols-outlined text-[28px] text-primary group-hover:scale-110 transition-transform">add_a_photo</span>
<span class="font-label-sm text-label-sm text-primary font-bold mt-1" id="file-label-1">Click to browse or drop passport photograph</span>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[12px]">JPG or PNG up to 5MB (Clear front-facing photo)</span>
<input class="hidden" type="file" accept="image/*" onchange="handleFileSelected(this, 'file-label-1', 'file-badge-1')"/>
</div>
</div>
<!-- Item 2: Birth Certificate (Unattached interactive dropzone) -->
<div class="p-4 rounded-xl bg-surface-container-low flex flex-col gap-3 relative">
<div class="flex items-start justify-between">
<div class="flex items-center gap-2">
<span class="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">description</span>
</span>
<div>
<div class="font-label-lg text-label-lg text-primary">Birth Certificate</div>
<span class="font-label-sm text-label-sm text-secondary font-bold">Mandatory</span>
</div>
</div>
<span class="bg-surface-container text-on-surface-variant font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-medium" id="file-badge-2">
Awaiting Upload
</span>
</div>
<div class="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-lg border-2 border-dashed border-outline-variant hover:border-primary hover:bg-surface-container-high/40 transition-all cursor-pointer group text-center" onclick="this.querySelector('input').click()">
<span class="material-symbols-outlined text-[28px] text-primary group-hover:scale-110 transition-transform">upload_file</span>
<span class="font-label-sm text-label-sm text-primary font-bold mt-1" id="file-label-2">Click to browse or drop certified birth certificate</span>
<span class="font-body-sm text-body-sm text-on-surface-variant text-[12px]">PDF, JPG or PNG up to 5MB</span>
<input class="hidden" type="file" accept=".pdf,image/*" onchange="handleFileSelected(this, 'file-label-2', 'file-badge-2')"/>
</div>
</div>`;

  content = content.replace(/\r\n/g, '\n');
  content = content.replace(oldDocsChunk.replace(/\r\n/g, '\n'), newDocsChunk.replace(/\r\n/g, '\n'));

  // Update handleFileSelected implementation in apply.html
  const oldJsHandler = `    function handleFileSelected(input, labelId, badgeId) {
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const label = document.getElementById(labelId);
        const badge = document.getElementById(badgeId);
        if (label) {
          label.textContent = file.name + ' (' + (file.size / 1024).toFixed(0) + ' KB)';
        }
        if (badge) {
          badge.textContent = 'Uploaded';
          badge.className = 'bg-tertiary text-tertiary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full flex items-center gap-1 font-bold';
        }

        if (labelId === 'file-label-3') uploadedFilesState.file3 = true;
        if (labelId === 'file-label-4') uploadedFilesState.file4 = true;

        let totalDocs = 2;
        if (uploadedFilesState.file3) totalDocs++;
        if (uploadedFilesState.file4) totalDocs++;

        const step3Count = document.getElementById('step3-attached-count-text');
        const sidebarDocCount = document.getElementById('sidebar-doc-count');
        const tab3Sub = document.querySelector('#step-tab-3 .step-subtitle');

        if (step3Count) step3Count.textContent = totalDocs + ' of 4 Documents Attached';
        if (sidebarDocCount) sidebarDocCount.textContent = totalDocs + ' of 4 attached';
        if (tab3Sub) tab3Sub.textContent = totalDocs + ' of 4 Attached';
      }
    }`;

  const newJsHandler = `    let uploadedFilesState = {
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
    }`;

  content = content.replace(oldJsHandler.replace(/\r\n/g, '\n'), newJsHandler.replace(/\r\n/g, '\n'));

  // Clear hardcoded sample values in Step 1 and Step 2 so user can type real details
  content = content.replace('required="" type="text" value="Kofi"', 'id="child-first-name" required="" type="text" placeholder="e.g. Kofi" value="" oninput="syncCandidatePreview()"');
  content = content.replace('type="text" value="Kwame"', 'id="child-middle-name" type="text" placeholder="e.g. Kwame" value=""');
  content = content.replace('required="" type="text" value="Mensah"', 'id="child-surname" required="" type="text" placeholder="e.g. Mensah" value="" oninput="syncCandidatePreview()"');
  content = content.replace('required="" type="date" value="2020-04-18"', 'id="child-dob" required="" type="date" value=""');
  content = content.replace('type="text" value="Grace Valley Early Learning Centre"', 'type="text" placeholder="e.g. Grace Valley Early Learning Centre" value=""');
  content = content.replace('>Mild dust sensitivity; requires inhaler during harmattan sports activities.</textarea>', ' placeholder="Mention any allergies, medical conditions, or learning requirements..."></textarea>');

  content = content.replace('required="" type="text" value="Dr. Nana Kwame Mensah"', 'id="guardian-name-input" required="" type="text" placeholder="e.g. Dr. Nana Mensah" value="" oninput="syncGuardianPreview()"');
  content = content.replace('type="text" value="Medical Practitioner, Ridge Hospital"', 'type="text" placeholder="e.g. Civil Servant, Engineer, Banker..." value=""');
  content = content.replace('required="" type="tel" value="+233 24 456 7890"', 'id="guardian-phone-input" required="" type="tel" placeholder="e.g. +233 24 123 4567" value="" oninput="syncGuardianPreview()"');
  content = content.replace('required="" type="email" value="nana.mensah@gmail.com"', 'type="email" placeholder="e.g. parent@example.com" value=""');
  content = content.replace('type="text" value="Plot 14 Mango Tree Avenue, Community 18"', 'type="text" placeholder="e.g. Plot 14 Mango Tree Avenue" value=""');
  content = content.replace('type="text" value="GA-492-1082"', 'type="text" placeholder="e.g. GA-183-9021" value=""');
  content = content.replace('type="text" value="GHA-71289102-1"', 'type="text" placeholder="e.g. GHA-71289102-1" value=""');
  content = content.replace('type="text" value="Mrs. Grace Owusu"', 'type="text" placeholder="e.g. Mrs. Grace Owusu" value=""');
  content = content.replace('type="tel" value="+233 20 765 4321"', 'type="tel" placeholder="e.g. +233 20 765 4321" value=""');

  // Add live synchronization functions for sidebar preview & step 4 review
  const syncScript = `
    function syncCandidatePreview() {
      const fn = (document.getElementById('child-first-name')?.value || '').trim();
      const sn = (document.getElementById('child-surname')?.value || '').trim();
      const fullName = (fn + ' ' + sn).trim() || 'New Applicant';
      const initials = ((fn[0] || '') + (sn[0] || '')).toUpperCase() || '--';

      const sideName = document.getElementById('sidebar-candidate-name');
      const sideInit = document.getElementById('sidebar-avatar-initials');
      const reviewName = document.getElementById('review-candidate-name');

      if (sideName) sideName.textContent = fullName;
      if (sideInit) sideInit.textContent = initials;
      if (reviewName) reviewName.textContent = fullName;
    }

    function syncGuardianPreview() {
      const gName = (document.getElementById('guardian-name-input')?.value || '').trim() || 'Pending Entry';
      const gPhone = (document.getElementById('guardian-phone-input')?.value || '').trim() || 'Pending Entry';
      const reviewGName = document.getElementById('review-guardian-name');
      const reviewGPhone = document.getElementById('review-guardian-phone');

      if (reviewGName) reviewGName.textContent = gName;
      if (reviewGPhone) reviewGPhone.textContent = gPhone;
    }
  `;

  if (!content.includes('syncCandidatePreview')) {
    content = content.replace('</script>', `${syncScript}\n</script>`);
  }

  // Add IDs to sidebar candidate elements
  content = content.replace(
    '<span class="font-headline-sm text-headline-sm text-primary truncate leading-tight">Kofi Mensah</span>',
    '<span class="font-headline-sm text-headline-sm text-primary truncate leading-tight" id="sidebar-candidate-name">New Applicant</span>'
  );
  content = content.replace(
    '<div class="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-headline-sm font-bold shrink-0">\r\n              KM\r\n            </div>',
    '<div class="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-headline-sm font-bold shrink-0" id="sidebar-avatar-initials">--</div>'
  );
  content = content.replace(
    '<div class="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-headline-sm font-bold shrink-0">\n              KM\n            </div>',
    '<div class="w-12 h-12 rounded-full bg-primary text-secondary-fixed flex items-center justify-center font-headline-sm font-bold shrink-0" id="sidebar-avatar-initials">--</div>'
  );

  // Add IDs to Step 4 review strip elements
  content = content.replace(
    '<strong class="text-primary font-body-md">Kofi Mensah</strong>',
    '<strong class="text-primary font-body-md" id="review-candidate-name">New Applicant</strong>'
  );
  content = content.replace(
    '<strong class="text-primary font-body-md">Dr. Nana Mensah</strong>',
    '<strong class="text-primary font-body-md" id="review-guardian-name">Pending Entry</strong>'
  );
  content = content.replace(
    '<strong class="text-primary font-body-md">+233 24 456 7890</strong>',
    '<strong class="text-primary font-body-md" id="review-guardian-phone">Pending Entry</strong>'
  );

  fs.writeFileSync(applyPath, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Successfully converted apply.html document uploads to unattached state & cleared dummy pre-fills.');
}

// ==========================================
// 2. UPDATE prototype/public/mobile-apply.html
// ==========================================
const mobApplyPath = 'prototype/public/mobile-apply.html';
if (fs.existsSync(mobApplyPath)) {
  let content = fs.readFileSync(mobApplyPath, 'utf8');

  // In Step 2 (Guardian): make inputs clean placeholders instead of hardcoded
  content = content.replace('value="Dr. Nana Mensah"', 'placeholder="e.g. Dr. Nana Mensah" value=""');
  content = content.replace('value="GHA-71289102-1"', 'placeholder="e.g. GHA-71289102-1" value=""');
  content = content.replace('value="+233 24 456 7890"', 'placeholder="e.g. +233 24 123 4567" value=""');
  content = content.replace('value="nana.mensah@apexmail.gh"', 'placeholder="e.g. parent@example.com" value=""');
  content = content.replace('value="GA-183-9021, East Legon, Accra"', 'placeholder="e.g. GA-183-9021, East Legon, Accra" value=""');

  // In Step 1: clear pre-filled health notes
  content = content.replace('>Carries Ventolin inhaler. Pediatrician: Ridge Hospital Clinic.</textarea>', ' placeholder="List any prescribed medication, allergies, or emergency clinic contacts..."></textarea>');

  // In Step 3 (Documents): change hardcoded "Uploaded" state to interactive unattached file upload slots
  const oldMobStep3Docs = `<div class="space-y-3">
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
    </div>`;

  const newMobStep3Docs = `<div class="space-y-3">
      <!-- Doc 1: Passport Photograph -->
      <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5 min-w-0 flex-1">
          <span class="material-symbols-outlined text-primary">account_box</span>
          <div class="min-w-0">
            <span class="font-label-md text-on-surface block font-bold">Passport Photo of Ward</span>
            <span class="text-[11px] text-on-surface-variant block truncate" id="mob-label-photo">JPEG, PNG up to 5MB</span>
          </div>
        </div>
        <div class="shrink-0 flex items-center gap-2">
          <span class="text-xs px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium" id="mob-badge-photo">Awaiting</span>
          <button type="button" onclick="this.nextElementSibling.click()" class="text-xs px-2.5 py-1 rounded bg-primary text-on-primary font-bold shadow-xs">Select</button>
          <input type="file" accept="image/*" class="hidden" onchange="handleMobileDoc(this, 'mob-label-photo', 'mob-badge-photo')" />
        </div>
      </div>

      <!-- Doc 2: Birth Certificate -->
      <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5 min-w-0 flex-1">
          <span class="material-symbols-outlined text-primary">description</span>
          <div class="min-w-0">
            <span class="font-label-md text-on-surface block font-bold">Child Birth Certificate</span>
            <span class="text-[11px] text-on-surface-variant block truncate" id="mob-label-birth">PDF, JPG up to 5MB</span>
          </div>
        </div>
        <div class="shrink-0 flex items-center gap-2">
          <span class="text-xs px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium" id="mob-badge-birth">Awaiting</span>
          <button type="button" onclick="this.nextElementSibling.click()" class="text-xs px-2.5 py-1 rounded bg-primary text-on-primary font-bold shadow-xs">Select</button>
          <input type="file" accept=".pdf,image/*" class="hidden" onchange="handleMobileDoc(this, 'mob-label-birth', 'mob-badge-birth')" />
        </div>
      </div>

      <!-- Doc 3: Immunization & Health Card -->
      <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-between">
        <div class="flex items-center gap-2.5 min-w-0 flex-1">
          <span class="material-symbols-outlined text-primary">vaccines</span>
          <div class="min-w-0">
            <span class="font-label-md text-on-surface block font-bold">Child Health Record (Card)</span>
            <span class="text-[11px] text-on-surface-variant block truncate" id="mob-label-health">GHS Weighing / Yellow card</span>
          </div>
        </div>
        <div class="shrink-0 flex items-center gap-2">
          <span class="text-xs px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-medium" id="mob-badge-health">Awaiting</span>
          <button type="button" onclick="this.nextElementSibling.click()" class="text-xs px-2.5 py-1 rounded bg-primary text-on-primary font-bold shadow-xs">Select</button>
          <input type="file" accept=".pdf,image/*" class="hidden" onchange="handleMobileDoc(this, 'mob-label-health', 'mob-badge-health')" />
        </div>
      </div>
    </div>`;

  content = content.replace(/\r\n/g, '\n');
  content = content.replace(oldMobStep3Docs.replace(/\r\n/g, '\n'), newMobStep3Docs.replace(/\r\n/g, '\n'));

  // Add handleMobileDoc script
  const mobDocScript = `
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
  `;

  if (!content.includes('handleMobileDoc')) {
    content = content.replace('</script>', `${mobDocScript}\n</script>`);
  }

  fs.writeFileSync(mobApplyPath, content.replace(/\n/g, '\r\n'), 'utf8');
  console.log('Successfully converted mobile-apply.html document uploads to unattached state & cleared dummy pre-fills.');
}
