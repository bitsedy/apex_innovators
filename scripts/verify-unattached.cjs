const fs = require('fs');
const assert = require('assert');

console.log('=== VERIFYING UNATTACHED STATE & REAL WARD DETAILS ENTRY ===');

// 1. Check apply.html
const applyPath = 'prototype/public/apply.html';
const applyContent = fs.readFileSync(applyPath, 'utf8');

// Ensure no hardcoded attached files
assert(!applyContent.includes('kofi-mensah-passport.jpg'), 'apply.html must not contain kofi-mensah-passport.jpg');
assert(!applyContent.includes('ghana-birth-cert-mensah.pdf'), 'apply.html must not contain ghana-birth-cert-mensah.pdf');

// Ensure 0 of 4 initial count
assert(applyContent.includes('0 of 4 Documents Attached'), 'apply.html must display 0 of 4 Documents Attached');
assert(applyContent.includes('0 of 4 attached'), 'apply.html sidebar must display 0 of 4 attached');
assert(applyContent.includes('0 of 4 Attached'), 'apply.html stepper must display 0 of 4 Attached');

// Ensure unattached badges and file inputs
assert(applyContent.includes('id="file-badge-1"'), 'apply.html must have file-badge-1');
assert(applyContent.includes('id="file-badge-2"'), 'apply.html must have file-badge-2');
assert(applyContent.includes('handleFileSelected(this, \'file-label-1\', \'file-badge-1\')'), 'apply.html must wire file-label-1');
assert(applyContent.includes('handleFileSelected(this, \'file-label-2\', \'file-badge-2\')'), 'apply.html must wire file-label-2');

// Ensure clean placeholder inputs for ward details
assert(applyContent.includes('id="child-first-name" required="" type="text" placeholder="e.g. Kofi" value=""'), 'apply.html must have clean child-first-name');
assert(applyContent.includes('id="child-surname" required="" type="text" placeholder="e.g. Mensah" value=""'), 'apply.html must have clean child-surname');
assert(applyContent.includes('id="child-dob" required="" type="date" value=""'), 'apply.html must have clean child-dob');
assert(applyContent.includes('id="guardian-name-input" required="" type="text" placeholder="e.g. Dr. Nana Mensah" value=""'), 'apply.html must have clean guardian-name-input');
assert(applyContent.includes('id="guardian-phone-input" required="" type="tel" placeholder="e.g. +233 24 123 4567" value=""'), 'apply.html must have clean guardian-phone-input');

// Ensure dynamic sync functions
assert(applyContent.includes('function syncCandidatePreview()'), 'apply.html must define syncCandidatePreview()');
assert(applyContent.includes('function syncGuardianPreview()'), 'apply.html must define syncGuardianPreview()');
assert(applyContent.includes('id="tab1-subtitle">Applicant Name</span>'), 'apply.html tab 1 must default to Applicant Name');
assert(applyContent.includes('id="tab2-subtitle">Primary Guardian</span>'), 'apply.html tab 2 must default to Primary Guardian');

console.log('[PASS] apply.html unattached state and dynamic ward details verified.');

// 2. Check mobile-apply.html
const mobPath = 'prototype/public/mobile-apply.html';
const mobContent = fs.readFileSync(mobPath, 'utf8');

// Ensure no hardcoded photo image or attached GH-B920199
assert(!mobContent.includes('GH-B920199...'), 'mobile-apply.html must not contain GH-B920199...');
assert(!mobContent.includes('birth_cert_kofi.pdf'), 'mobile-apply.html must not contain birth_cert_kofi.pdf');
assert(!mobContent.includes('weigh_card_ghs.jpg'), 'mobile-apply.html must not contain weigh_card_ghs.jpg');

// Ensure unattached dropzones in Step 1
assert(mobContent.includes('id="mobile-quick-photo-input"'), 'mobile-apply.html must have mobile-quick-photo-input');
assert(mobContent.includes('id="mobile-quick-birth-input"'), 'mobile-apply.html must have mobile-quick-birth-input');
assert(mobContent.includes('handleMobileQuickPhoto(this)'), 'mobile-apply.html must wire handleMobileQuickPhoto');
assert(mobContent.includes('handleMobileQuickBirth(this)'), 'mobile-apply.html must wire handleMobileQuickBirth');

// Ensure unattached inputs in Step 1
assert(mobContent.includes('id="child-fullname" placeholder="e.g. Kofi Kwabena Asante" type="text" value=""'), 'mobile-apply.html must have clean child-fullname');
assert(mobContent.includes('id="child-dob" type="date" value=""'), 'mobile-apply.html must have clean child-dob');
assert(mobContent.includes('id="guardian-name" placeholder="e.g. Dr. Emmanuel Asante" type="text" value=""'), 'mobile-apply.html must have clean guardian-name');
assert(mobContent.includes('id="guardian-phone" placeholder="e.g. 024 123 4567" type="tel" value=""'), 'mobile-apply.html must have clean guardian-phone');

// Ensure unattached document slots in Step 3
assert(mobContent.includes('id="mob-label-photo"'), 'mobile-apply.html must have mob-label-photo');
assert(mobContent.includes('id="mob-label-birth"'), 'mobile-apply.html must have mob-label-birth');
assert(mobContent.includes('id="mob-label-health"'), 'mobile-apply.html must have mob-label-health');
assert(mobContent.includes('handleMobileDoc(this,'), 'mobile-apply.html must wire handleMobileDoc');

// Ensure functions in script
assert(mobContent.includes('function syncMobileReview()'), 'mobile-apply.html must define syncMobileReview');
assert(mobContent.includes('function handleMobileQuickPhoto('), 'mobile-apply.html must define handleMobileQuickPhoto');
assert(mobContent.includes('function handleMobileQuickBirth('), 'mobile-apply.html must define handleMobileQuickBirth');
assert(mobContent.includes('function handleMobileDoc('), 'mobile-apply.html must define handleMobileDoc');

console.log('[PASS] mobile-apply.html unattached state and dynamic ward details verified.');
console.log('=== ALL UNATTACHED VERIFICATION CHECKS PASSED WITH 100% SUCCESS! ===');
