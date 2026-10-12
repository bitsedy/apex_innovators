import os
import re

PHASE2_REPLACEMENTS = [
    # Explicit user-facing Ward strings
    (r"<span>Ward: Kofi Mensah \(Basic 3\)</span>", "<span>Child: Kofi Mensah (Basic 3)</span>"),
    (r"<span>Ward: David Quaye \(KG 2\)</span>", "<span>Child: David Quaye (KG 2)</span>"),
    (r'<span className="font-body-sm text-body-sm text-on-primary-container" id="toast-desc">Ward record successfully created.</span>',
     '<span className="font-body-sm text-body-sm text-on-primary-container" id="toast-desc">Student record successfully created.</span>'),
    (r"Asthma gym exemption &amp; Ward transit alert", "Asthma gym exemption &amp; Child safety alert"),
    (r"Mrs\. Beatrice Abbey identified acute bronchospasm during PE warmup\. Ward escorted safely to Infirmatory Bay 2\.",
     "Mrs. Beatrice Abbey identified acute bronchospasm during PE warmup. Child escorted safely to Sick Bay 2."),
    (r'title="Manage Wards"', 'title="Manage Children"'),
    (r'<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">PUPIL SAFEGUARD COMMAND</span>',
     '<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim">STUDENT SAFETY COMMAND</span>'),
    (r"<span>FLAG DISCREPANCY &amp; HOLD</span>", "<span>FLAG MISMATCH &amp; HOLD</span>"),
    (r"<span>FLAG DISCREPANCY</span>", "<span>FLAG MISMATCH</span>"),
    (r"for safe ward handover", "for safe child pickup"),
    (r"Ward: Kofi Mensah \u2014 Primary 4 Gold", "Child: Kofi Mensah — Primary 4 Gold"),
    (r"Ward: Kofi Mensah  Primary 4 Gold", "Child: Kofi Mensah — Primary 4 Gold"),
    (r"Perimeter Gate Hold: Ward Kofi Mensah \(#24-089\)", "Perimeter Gate Hold: Student Kofi Mensah (#24-089)"),
    (r"Form Tutor Mrs\. Beatrice Abbey quietly isolated Ward Kofi Mensah from common dismissal",
     "Form Tutor Mrs. Beatrice Abbey quietly isolated Student Kofi Mensah from common dismissal"),
    (r"Bar any third-party interaction\. Hold ward strictly until primary guardian",
     "Bar any third-party interaction. Keep child safe until primary guardian"),
    (r"Ward &amp; Academic Background", "Child &amp; Academic Background"),
    (r"Passport Photo of Ward", "Passport Photo of Child"),
    (r"Executed binding Executive Order <code className=\"font-bold text-secondary\">#SAF-ACC-2026-08</code> on Ward Kofi Mensah \(#24-089\)",
     "Executed binding Executive Order <code className=\"font-bold text-secondary\">#SAF-ACC-2026-08</code> for Student Kofi Mensah (#24-089)"),
    (r"Executed binding Executive Order <code class=\"font-bold text-secondary\">#SAF-ACC-2026-08</code> on Ward Kofi Mensah \(#24-089\)",
     "Executed binding Executive Order <code class=\"font-bold text-secondary\">#SAF-ACC-2026-08</code> for Student Kofi Mensah (#24-089)"),
    (r"Unauthorized guardian NFC tap flagged for Ward Kofi Mensah",
     "Unauthorized guardian NFC tap flagged for Student Kofi Mensah"),
    (r"CANARY COHORT", "TEST GROUP"),
    (r"Nana Mensah \(Ward: K\. Mensah, Gr\. 5\)", "Nana Mensah (Child: K. Mensah, Gr. 5)"),
    (r"PENDING PRINCIPAL SANCTION", "PENDING PRINCIPAL ACTION"),
    (r"student ward master records", "student master records"),
    (r"Search by ward", "Search by student"),
    (r"search by ward", "search by student"),
    (r"Search by Ward", "Search by Student"),
    (r"Ward Kofi Mensah", "Student Kofi Mensah"),
    (r"Ward Kwadwo Osei", "Student Kwadwo Osei"),
    (r"Switch Child Ward", "Switch Child"),
    (r"Staff standing by ward", "Staff standing by child"),
    (r"School Wards &amp; Dorms", "School Rooms &amp; Dorms"),
    (r"School Wards & Dorms", "School Rooms & Dorms"),
    (r"Target Ward:", "Target Student:"),
    (r"alt=\"Ward Preview\"", "alt=\"Child Preview\""),
    (r"Ward Photo", "Child Photo"),
    (r"Carepoint - Mobile Ward Dashboard", "Carepoint - Mobile Child Dashboard"),
    (r'label: "Mobile Ward Dashboard"', 'label: "Mobile Child Dashboard"'),
    (r"Ward: Kofi Mensah", "Child: Kofi Mensah"),
    (r"Ward: Ama Yeboah", "Child: Ama Yeboah"),
    (r"Ward: Kwame Osei", "Child: Kwame Osei"),
    (r"Ward: Adjoa Tetteh", "Child: Adjoa Tetteh"),
    (r"Ward: Kofi", "Child: Kofi"),
    (r"Ward & Dynamic QR Badge", "Child & Dynamic QR Badge"),
    (r"safe ward handover", "safe child pickup"),
    (r"Safe ward handover", "Safe child pickup"),
    (r"Multi-Cohort Management", "Multi-Class Management"),
    (r"Staff Class & Cohort Switcher", "Staff Class Switcher"),
    (r"\$\{cls\.pupils\} Pupils", "${cls.pupils} Students"),
    (r"\$\{current\.pupils\} Pupils", "${current.pupils} Students"),
    (r"s\.textContent\.includes\('Pupils'\)", "s.textContent.includes('Students')"),
    (r"Infirmatory Bay", "Sick Bay"),
    (r"infirmatory bay", "sick bay"),
    (r"Infirmatory", "Sick Bay"),
    (r"infirmatory", "sick bay"),
]

roots = [
    r"c:\Projects\Carepoint_ApexEducators\src",
    r"c:\Projects\Carepoint_ApexEducators\prototype"
]

files_updated = 0
total_replacements = 0

for root in roots:
    for dirpath, _, filenames in os.walk(root):
        for fn in filenames:
            if not fn.endswith(('.tsx', '.html', '.ts', '.js')):
                continue
            if fn.endswith('.d.ts'):
                continue
            # avoid editing the script itself
            fpath = os.path.join(dirpath, fn)
            try:
                with open(fpath, "r", encoding="utf-8") as f:
                    content = f.read()
            except Exception:
                continue

            orig = content
            file_changes = 0

            for pat, repl in PHASE2_REPLACEMENTS:
                matches = re.findall(pat, content)
                if matches:
                    new_content = re.sub(pat, repl, content)
                    if new_content != content:
                        file_changes += len(matches)
                        content = new_content

            if content != orig:
                # Protect URLs and structural IDs
                content = content.replace('href="children.html"', 'href="wards.html"')
                content = content.replace('href="../admin/children.html"', 'href="../admin/wards.html"')
                content = content.replace('href="/admin/children"', 'href="/admin/wards"')
                content = content.replace('data-path="children-records"', 'data-path="ward-records"')
                content = content.replace('id="childMenu"', 'id="wardMenu"')
                content = content.replace("id='childMenu'", "id='wardMenu'")
                content = content.replace('id="childDropdownContainer"', 'id="wardDropdownContainer"')

                with open(fpath, "w", encoding="utf-8") as f:
                    f.write(content)
                rel = os.path.relpath(fpath, r"c:\Projects\Carepoint_ApexEducators")
                print(f"Updated {rel} ({file_changes} replacements)")
                files_updated += 1
                total_replacements += file_changes

print(f"\nPhase 2 Complete: {files_updated} files updated, {total_replacements} replacements made.")
