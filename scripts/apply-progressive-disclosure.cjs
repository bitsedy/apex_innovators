const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const transformations = [
  // 1. admin/decision.html: Legal Assessment
  {
    file: 'prototype/admin/decision.html',
    target: `<p class="font-body-sm text-body-sm text-on-primary leading-relaxed">
            "Under Section 4.2 of the Ghana Education Act 778 and the active High Court decree #GAR/FCT/881, the school retains paramount statutory protective custody in loco parentis. Any physical surrender to Mr. Antwi constitutes direct contempt and civil liability. <strong>Recommend upholding gate lockdown with safe Ghana Police Service perimeter handover."</strong>
</p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary style="background: rgba(255,255,255,0.15); color: #ffffff; border-color: rgba(255,255,255,0.3);">
    <span class="material-symbols-outlined text-[14px]">balance</span>
    <span>View Statutory Order Opinion (Act 778 &amp; High Court #GAR/FCT/881)</span>
  </summary>
  <div class="carepoint-disclosure-content" style="background: rgba(255,255,255,0.1); color: #f1f5f9; border-color: rgba(255,255,255,0.2);">
    "Under Section 4.2 of the Ghana Education Act 778 and the active High Court decree #GAR/FCT/881, the school retains paramount statutory protective custody in loco parentis. Any physical surrender to Mr. Antwi constitutes direct contempt and civil liability. <strong>Recommend upholding gate lockdown with safe Ghana Police Service perimeter handover."</strong>
  </div>
</details>`
  },

  // 2. admin/decision.html: Protocol Alpha-4 isolation
  {
    file: 'prototype/admin/decision.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface">Form Tutor Mrs. Beatrice Abbey quietly isolated Student Kofi Mensah from common dismissal courtyard, escorting him via secure Corridor D directly into Safe Room B-04 under executive observation.</p>`,
    replacement: `<div class="carepoint-expandable-container">
  <p class="font-body-sm text-body-sm text-on-surface carepoint-expandable-text carepoint-clamped">Form Tutor Mrs. Beatrice Abbey quietly isolated Student Kofi Mensah from common dismissal courtyard, escorting him via secure Corridor D directly into Safe Room B-04 under executive observation.</p>
  <button type="button" class="carepoint-expand-trigger" aria-expanded="false">
    <span class="material-symbols-outlined text-[13px]">expand_more</span>
    <span>View isolation details</span>
  </button>
</div>`
  },

  // 3. admin/decision.html: Guardian direct contact
  {
    file: 'prototype/admin/decision.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface">Mother &amp; Sole Legal Custodian Dr. Abena Mensah reached via encrypted SMS emergency bridge. Confirmed zero authorization granted to Kwame Antwi or any third party for today's pickup.</p>`,
    replacement: `<div class="carepoint-expandable-container">
  <p class="font-body-sm text-body-sm text-on-surface carepoint-expandable-text carepoint-clamped">Mother &amp; Sole Legal Custodian Dr. Abena Mensah reached via encrypted SMS emergency bridge. Confirmed zero authorization granted to Kwame Antwi or any third party for today's pickup.</p>
  <button type="button" class="carepoint-expand-trigger" aria-expanded="false">
    <span class="material-symbols-outlined text-[13px]">expand_more</span>
    <span>View confirmation details</span>
  </button>
</div>`
  },

  // 4. gate/alert.html: Invalidation Rationale Code
  {
    file: 'prototype/gate/alert.html',
    target: `<p class="font-body-md text-body-md text-on-surface leading-relaxed">
              Collector identity card presented (Ghana Card GHA-718293019-2, "Kwame Antwi") has zero registered pickup delegation filings on school portal. The child's primary parent explicitly submitted a <em>"Strict Custody Restriction Notice"</em> on September 12, stating no unlisted relatives are permitted egress without SMS dual-confirmation token.
            </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">gavel</span>
    <span>View Invalidation Rationale (Code SEC-CUST-802)</span>
  </summary>
  <div class="carepoint-disclosure-content">
    Collector identity card presented (Ghana Card GHA-718293019-2, "Kwame Antwi") has zero registered pickup delegation filings on school portal. The child's primary parent explicitly submitted a <em>"Strict Custody Restriction Notice"</em> on September 12, stating no unlisted relatives are permitted egress without SMS dual-confirmation token.
  </div>
</details>`
  },

  // 5. gate/scan.html: NaSIA Campus Safety Notice
  {
    file: 'prototype/gate/scan.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface-variant">
            Under Carepoint Community School Child Protection Policy, no early learner (Creche to Basic 3) may exit perimeter gates without confirmed biometric or guardian token match.
          </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">verified_user</span>
    <span>View Egress Protection Rules</span>
  </summary>
  <div class="carepoint-disclosure-content">
    Under Carepoint Community School Child Protection Policy, no early learner (Creche to Basic 3) may exit perimeter gates without confirmed biometric or guardian token match.
  </div>
</details>`
  },

  // 6. sysadmin/tracker.html: NaSIA 30/30/40 SBA Algorithm Weighting Curve
  {
    file: 'prototype/sysadmin/tracker.html',
    target: `<p class="font-body-md text-body-md text-on-surface-variant">
            Adjustment of continuous assessment weighting formulas to comply with Ghana National Schools Inspectorate Authority (NaSIA) academic instructions for Term 1. Reconfigures Class Test (30%), Mid-Term (30%), and Final Examination (40%) aggregates across all primary and JHS divisions.
          </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">tune</span>
    <span>View NaSIA 30/30/40 Weighting Specification</span>
  </summary>
  <div class="carepoint-disclosure-content">
    Adjustment of continuous assessment weighting formulas to comply with Ghana National Schools Inspectorate Authority (NaSIA) academic instructions for Term 1. Reconfigures Class Test (30%), Mid-Term (30%), and Final Examination (40%) aggregates across all primary and JHS divisions.
  </div>
</details>`
  },

  // 7. sysadmin/integrations.html: CII Sector Compliance Notice Act 1038
  {
    file: 'prototype/sysadmin/integrations.html',
    target: `<p class="font-body-sm text-body-sm text-primary-fixed-dim mb-space-md leading-relaxed">
          Under Act 1038 of the Ghana Cybersecurity Act, all student biometric and parental mobile endpoints must operate TLS 1.3 with cryptographic forward secrecy. External API keys undergo automatic 90-day rotation prompts.
        </p>`,
    replacement: `<details class="carepoint-disclosure mb-space-md">
  <summary style="background: rgba(255,255,255,0.12); color: #ffffff; border-color: rgba(255,255,255,0.25);">
    <span class="material-symbols-outlined text-[14px]">security</span>
    <span>View Ghana Act 1038 TLS &amp; Cryptographic Mandate</span>
  </summary>
  <div class="carepoint-disclosure-content" style="background: rgba(255,255,255,0.08); color: #e2e8f0; border-color: rgba(255,255,255,0.15);">
    Under Act 1038 of the Ghana Cybersecurity Act, all student biometric and parental mobile endpoints must operate TLS 1.3 with cryptographic forward secrecy. External API keys undergo automatic 90-day rotation prompts.
  </div>
</details>`
  },

  // 8. sysadmin/dashboard.html: Governance Notice & System Operating Procedure
  {
    file: 'prototype/sysadmin/dashboard.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface-variant">
        Architectural parameter modification, database schema migrations, and role escalation require formal submission to the <strong class="text-on-surface">Change Requests queue</strong>. Technical Operations Lead holds execution authority; approval authority remains with the Head of School and Academic Principal.
      </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">shield</span>
    <span>View System Governance &amp; Operating Procedure</span>
  </summary>
  <div class="carepoint-disclosure-content">
    Architectural parameter modification, database schema migrations, and role escalation require formal submission to the <strong class="text-on-surface">Change Requests queue</strong>. Technical Operations Lead holds execution authority; approval authority remains with the Head of School and Academic Principal.
  </div>
</details>`
  },

  // 9. admin/dashboard.html: Fee structure & inclusions
  {
    file: 'prototype/admin/dashboard.html',
    target: `<div class="p-3 bg-surface-container-low rounded-xl border border-surface-container-high/60 flex items-start gap-2.5 text-xs text-on-surface-variant">
              <span class="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">verified_user</span>
              <p>
                Fees cover all academic tutoring, textbook usage, science and computing lab materials, daily hot lunches, and campus primary healthcare. No hidden supplementary charges without NaSIA and PTA approval.
              </p>
            </div>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">verified_user</span>
    <span>View Fee Coverage &amp; NaSIA Guidelines</span>
  </summary>
  <div class="carepoint-disclosure-content">
    Fees cover all academic tutoring, textbook usage, science and computing lab materials, daily hot lunches, and campus primary healthcare. No hidden supplementary charges without NaSIA and PTA approval.
  </div>
</details>`
  },

  // 10. admin/wards.html: Class Tutor Mid-Term Feedback
  {
    file: 'prototype/admin/wards.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface mt-1">
                  "Kofi continues to show remarkable inquisitiveness during science discovery labs and excels at peer reading groups. We are paying gentle attention to his fine-motor handwriting speed, which is steadily advancing. Outstanding citizenship and Aggrey House sportsmanship."
                </p>`,
    replacement: `<div class="carepoint-expandable-container mt-1">
  <p class="font-body-sm text-body-sm text-on-surface carepoint-expandable-text carepoint-clamped">
    "Kofi continues to show remarkable inquisitiveness during science discovery labs and excels at peer reading groups. We are paying gentle attention to his fine-motor handwriting speed, which is steadily advancing. Outstanding citizenship and Aggrey House sportsmanship."
  </p>
  <button type="button" class="carepoint-expand-trigger" aria-expanded="false">
    <span class="material-symbols-outlined text-[13px]">expand_more</span>
    <span>Read full feedback</span>
  </button>
</div>`
  },

  // 11. admin/wards.html: Most Recent Clinic Incident
  {
    file: 'prototype/admin/wards.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface-variant">
                  Mild wheezing recorded post-PE sprint relays. Two puffs of Salbutamol inhaler administered under Nurse Asante's supervision. Peak flow normalized within 12 minutes (measured 220 L/min). Parent notified via Carepoint Automated SMS.
                </p>`,
    replacement: `<div class="carepoint-expandable-container">
  <p class="font-body-sm text-body-sm text-on-surface-variant carepoint-expandable-text carepoint-clamped">
    Mild wheezing recorded post-PE sprint relays. Two puffs of Salbutamol inhaler administered under Nurse Asante's supervision. Peak flow normalized within 12 minutes (measured 220 L/min). Parent notified via Carepoint Automated SMS.
  </p>
  <button type="button" class="carepoint-expand-trigger" aria-expanded="false">
    <span class="material-symbols-outlined text-[13px]">expand_more</span>
    <span>Read clinical notes</span>
  </button>
</div>`
  },

  // 12. admin/inbox.html: Academic Registrar Submission
  {
    file: 'prototype/admin/inbox.html',
    target: `<p class="font-body-md text-body-md text-on-surface">
          Academic Registrar submission: Formal ratification of the 60/40 SBA continuous assessment to terminal examination weighting matrix across Creche, Basic 1–6, and JHS 1–3 divisions for official upload to NaSIA SIS portal.
        </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">description</span>
    <span>Academic Registrar Submission Details</span>
  </summary>
  <div class="carepoint-disclosure-content">
    Academic Registrar submission: Formal ratification of the 60/40 SBA continuous assessment to terminal examination weighting matrix across Creche, Basic 1–6, and JHS 1–3 divisions for official upload to NaSIA SIS portal.
  </div>
</details>`
  },

  // 13. admin/admissions.html: Intake Officer Field Notes
  {
    file: 'prototype/admin/admissions.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface bg-surface-container-low p-space-sm rounded-xl">
            "Candidate demonstrated exceptional listening comprehension and enthusiasm during the diagnostic interview. Parents expressed preference for Afternoon Chess &amp; Coding extracurricular clubs. All statutory GES admissions criteria fulfilled without reservations."
          </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">psychology</span>
    <span>View Intake Officer Diagnostic Field Notes</span>
  </summary>
  <div class="carepoint-disclosure-content">
    "Candidate demonstrated exceptional listening comprehension and enthusiasm during the diagnostic interview. Parents expressed preference for Afternoon Chess &amp; Coding extracurricular clubs. All statutory GES admissions criteria fulfilled without reservations."
  </div>
</details>`
  },

  // 14. staff/attendance.html: Attendance Rules
  {
    file: 'prototype/staff/attendance.html',
    target: `<p class="carepoint-hover-detail font-body-sm text-body-sm text-on-surface-variant mt-0.5">
        If a student is marked <strong>Absent</strong>, a text message is sent to parents at <strong>09:00 GMT</strong>. Once attendance is saved, changes require Headmaster or Headteacher approval.
      </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">gavel</span>
    <span>View Attendance Rules &amp; Approvals Policy</span>
  </summary>
  <div class="carepoint-disclosure-content">
    If a student is marked <strong>Absent</strong>, a text message is sent to parents at <strong>09:00 GMT</strong>. Once attendance is saved, changes require Headmaster or Headteacher approval.
  </div>
</details>`
  },

  // 15. staff/gradebook.html: Rules for Changing Saved Marks
  {
    file: 'prototype/staff/gradebook.html',
    target: `<p class="carepoint-hover-detail large font-body-sm text-body-sm text-amber-900">
        Once marks are saved, any changes must be approved by <strong>Headmaster or Headteacher Dr. Elizabeth Appiah</strong> before parents can see them on their portal or report cards.
      </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary style="background: rgba(245, 158, 11, 0.1); color: #78350f; border-color: rgba(245, 158, 11, 0.25);">
    <span class="material-symbols-outlined text-[14px]">lock</span>
    <span>View Rules for Changing Saved Marks</span>
  </summary>
  <div class="carepoint-disclosure-content" style="background: #fffbeb; color: #78350f; border-color: rgba(245, 158, 11, 0.2);">
    Once marks are saved, any changes must be approved by <strong>Headmaster or Headteacher Dr. Elizabeth Appiah</strong> before parents can see them on their portal or report cards.
  </div>
</details>`
  },

  // 16. staff/timetable.html: Notes from Headmaster or Headteacher
  {
    file: 'prototype/staff/timetable.html',
    target: `<p class="font-body-sm text-body-sm text-on-surface-variant italic">
            "Previous revision requested resolved: Shifted ICT Lab slot to Tuesday Period 3 to resolve contention with JHS 1 Computing. Ready for your final sign-off Beatrice."
          </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">chat</span>
    <span>View Note from Dr. Elizabeth Appiah</span>
  </summary>
  <div class="carepoint-disclosure-content">
    "Previous revision requested resolved: Shifted ICT Lab slot to Tuesday Period 3 to resolve contention with JHS 1 Computing. Ready for your final sign-off Beatrice."
  </div>
</details>`
  },

  // 17. parent/dashboard.html: Math Observation
  {
    file: 'prototype/parent/dashboard.html',
    target: `<p class="relative z-10 leading-relaxed text-xs">
                "Kofi showed exceptional problem-solving skills in today's group math exercise. He assisted his team with the fraction puzzles and remained very proactive and attentive. Keep encouraging his home reading."
              </p>`,
    replacement: `<div class="carepoint-expandable-container relative z-10">
                <p class="leading-relaxed text-xs carepoint-expandable-text carepoint-clamped">
                  "Kofi showed exceptional problem-solving skills in today's group math exercise. He assisted his team with the fraction puzzles and remained very proactive and attentive. Keep encouraging his home reading."
                </p>
                <button type="button" class="carepoint-expand-trigger" aria-expanded="false">
                  <span class="material-symbols-outlined text-[13px]">expand_more</span>
                  <span>Read full remark</span>
                </button>
              </div>`
  },

  // 18. parent/dashboard.html: Official Terminal Report Card
  {
    file: 'prototype/parent/dashboard.html',
    target: `<p class="font-body-sm text-xs text-primary-fixed mt-2 leading-relaxed">
            Mrs. Beatrice Abbey and Principal Dr. Elizabeth Appiah have signed off on Kofi's Continuous Assessment scores. The certified PDF includes full SBA marks, class rank, attendance verification, and behavioral remarks.
          </p>`,
    replacement: `<details class="carepoint-disclosure mt-2">
            <summary style="background: rgba(255,255,255,0.15); color: #ffffff; border-color: rgba(255,255,255,0.25);">
              <span class="material-symbols-outlined text-[14px]">info</span>
              <span>View Signoff Details &amp; Certification</span>
            </summary>
            <div class="carepoint-disclosure-content" style="background: rgba(255,255,255,0.1); color: #f1f5f9; border-color: rgba(255,255,255,0.2);">
              Mrs. Beatrice Abbey and Principal Dr. Elizabeth Appiah have signed off on Kofi's Continuous Assessment scores. The certified PDF includes full SBA marks, class rank, attendance verification, and behavioral remarks.
            </div>
          </details>`
  },

  // 19. parent/messages.html: Clinical Remarks Box
  {
    file: 'prototype/parent/messages.html',
    target: `<p class="font-body-md text-body-md text-on-surface leading-relaxed">
              Mild seasonal dust allergy noted after playground break time. Administered prescribed saline nasal rinse. Student rested comfortably in the health bay for 20 minutes and returned cheerfully to class without fever or respiratory discomfort.
            </p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">clinical_notes</span>
    <span>View Clinical Observations &amp; Interventions</span>
  </summary>
  <div class="carepoint-disclosure-content">
    Mild seasonal dust allergy noted after playground break time. Administered prescribed saline nasal rinse. Student rested comfortably in the health bay for 20 minutes and returned cheerfully to class without fever or respiratory discomfort.
  </div>
</details>`
  },

  // 20. parent/pickup.html: Emergency Temporary Pickup Protocol
  {
    file: 'prototype/parent/pickup.html',
    target: `<p class="font-body-sm text-body-sm text-secondary-fixed leading-relaxed max-w-2xl">If an unlisted individual must collect Kofi due to a family emergency, call the Campus Security Command Post immediately. Have your <strong class="text-surface-container-lowest font-bold">Guardian Master PIN (#9042)</strong> ready for verbal voice verification.</p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary style="background: rgba(255,255,255,0.18); color: #ffffff; border-color: rgba(255,255,255,0.3);">
    <span class="material-symbols-outlined text-[14px]">phone_in_talk</span>
    <span>View Emergency Verbal Voice Protocol</span>
  </summary>
  <div class="carepoint-disclosure-content" style="background: rgba(255,255,255,0.12); color: #fdf2f8; border-color: rgba(255,255,255,0.25);">
    If an unlisted individual must collect Kofi due to a family emergency, call the Campus Security Command Post immediately. Have your <strong class="text-surface-container-lowest font-bold">Guardian Master PIN (#9042)</strong> ready for verbal voice verification.
  </div>
</details>`
  },

  // 21. parent/pickup.html: Document Verification Requirement
  {
    file: 'prototype/parent/pickup.html',
    target: `<p class="font-body-sm text-[12px] text-on-surface-variant">The designated individual must report physically to the Gate 1 Administration Desk with their original Ghana Card and submit to optical biometric facial enrollment before this status turns active.</p>`,
    replacement: `<details class="carepoint-disclosure">
  <summary>
    <span class="material-symbols-outlined text-[14px]">badge</span>
    <span>View Gate 1 Verification Rules</span>
  </summary>
  <div class="carepoint-disclosure-content">
    The designated individual must report physically to the Gate 1 Administration Desk with their original Ghana Card and submit to optical biometric facial enrollment before this status turns active.
  </div>
</details>`
  },

  // 22. parent/academics.html: Head of Basic School Remark
  {
    file: 'prototype/parent/academics.html',
    target: `<blockquote class="font-body-lg text-body-lg text-on-surface italic pl-space-sm border-l-4 border-secondary-container">
            “A dedicated, well-mannered student who consistently lives up to the Carepoint ethos. Kofi exhibits exceptional inquisitive intellect and warmth among his classmates. Promoted with merit.”
          </blockquote>`,
    replacement: `<div class="carepoint-expandable-container">
  <blockquote class="font-body-lg text-body-lg text-on-surface italic pl-space-sm border-l-4 border-secondary-container carepoint-expandable-text carepoint-clamped">
    “A dedicated, well-mannered student who consistently lives up to the Carepoint ethos. Kofi exhibits exceptional inquisitive intellect and warmth among his classmates. Promoted with merit.”
  </blockquote>
  <button type="button" class="carepoint-expand-trigger" aria-expanded="false">
    <span class="material-symbols-outlined text-[13px]">expand_more</span>
    <span>Read full remark</span>
  </button>
</div>`
  }
];

let appliedCount = 0;
let missedCount = 0;

transformations.forEach((t, i) => {
  const filePath = path.join(root, t.file);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] File not found: ${t.file}`);
    missedCount++;
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  // Normalize CRLF to LF for matching
  const normContent = content.replace(/\r\n/g, '\n');
  const normTarget = t.target.replace(/\r\n/g, '\n');

  if (normContent.includes(normTarget)) {
    const updated = normContent.replace(normTarget, t.replacement);
    // Write back preserving original line endings if needed or standardizing
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`[PASS] Applied transformation #${i + 1} on ${t.file}`);
    appliedCount++;
  } else {
    console.warn(`[WARN] Target not found for transformation #${i + 1} on ${t.file}`);
    missedCount++;
  }
});

console.log(`\nDone: ${appliedCount} applied, ${missedCount} missed.`);
