import os
import re

PROTOTYPE_REPLACEMENTS = [
    (r"Non-registered adult attempted gate egress with ward\.", "Non-registered adult attempted gate departure with child."),
    (r"Linked Wards / Students Pill", "Linked Children / Students Pill"),
    (r"Carepoint - Mobile Ward Directory Dossier", "Carepoint - Mobile Student Directory"),
    (r'label: "Mobile Ward Directory Dossier"', 'label: "Mobile Student Directory"'),
    (r"Compact Ward Card", "Compact Student Card"),
    (r"Enroll Ward / Batch Import NIA", "Enroll Student / Batch Import NIA"),
    (r"Ward Reference", "Student ID"),
    (r"label: \"Full Ward Directory & Dossier\"", "label: \"Full Student Directory\""),
    (r"PUPIL SAFEGUARD COMMAND", "STUDENT SAFETY COMMAND"),
    (r"Ward Safeguard Dossier", "Student Safeguard Dossier"),
    (r"Ward &amp; Incident Target Card", "Student &amp; Incident Target Card"),
    (r"Ward & Incident Target Card", "Student & Incident Target Card"),
    (r'<span class="absolute bottom-0 inset-x-0 bg-primary/80 text-on-primary font-label-sm text-label-sm text-center py-0.5 font-bold">PUPIL</span>',
     '<span class="absolute bottom-0 inset-x-0 bg-primary/80 text-on-primary font-label-sm text-label-sm text-center py-0.5 font-bold">STUDENT</span>'),
    (r"Ward Verbally Identified Guardian", "Child Verbally Identified Guardian"),
    (r"Ward Information &amp; Identity", "Student Information &amp; Identity"),
    (r"Ward Information & Identity", "Student Information & Identity"),
    (r"STEP 1 PANEL: Ward Information", "STEP 1 PANEL: Child Information"),
    (r"Ward quick chip", "Child quick chip"),
    (r"<span>Ward: <strong class=\"text-on-surface\">Kofi Mensah</strong>", "<span>Child: <strong class=\"text-on-surface\">Kofi Mensah</strong>"),
    (r'document\.getElementById\(\'chatDrawerWard\'\)\.textContent = "Ward: " \+ ward;',
     'document.getElementById(\'chatDrawerWard\').textContent = "Child: " + ward;'),
    (r"Automated instant WhatsApp alert dispatched upon ward gate turnstile egress scan with guardian timestamp\.",
     "Automated instant WhatsApp alert dispatched upon student gate turnstile exit scan with guardian timestamp."),
    (r"<!-- 1\. School Wards -->", "<!-- 1. School Rooms & Houses -->"),
]

root = r"c:\Projects\Carepoint_ApexEducators\prototype"
count = 0

for dirpath, _, filenames in os.walk(root):
    for fn in filenames:
        if not fn.endswith(('.html', '.js')):
            continue
        fpath = os.path.join(dirpath, fn)
        try:
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception:
            continue

        orig = content
        for pat, repl in PROTOTYPE_REPLACEMENTS:
            content = re.sub(pat, repl, content)

        if content != orig:
            # Protect links and IDs
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
            print(f"Updated prototype file: {rel}")
            count += 1

print(f"Done updating {count} prototype files.")
