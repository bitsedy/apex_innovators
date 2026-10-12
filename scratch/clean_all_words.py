import os
import re

TEXT_REPLACEMENTS = [
    # Complex Ward expressions
    (r"\bDISMISSAL HALTED FOR WARD\b", "DISMISSAL HALTED FOR STUDENT"),
    (r"\bDismissal Halted for Ward\b", "Dismissal Halted for Student"),
    (r"\bWARD #", "STUDENT #"),
    (r"\bWard #", "Student #"),
    (r"\bward #", "student #"),
    (r"\bActive Wards Enrolled\b", "Active Students Enrolled"),
    (r"\bactive wards enrolled\b", "active students enrolled"),
    (r"\bAuto-Provision Ward\b", "Create Student Record"),
    (r"\bauto-provision ward\b", "create student record"),
    (r"\bAuto-provision Ward\b", "Create student record"),
    (r"\bWard Record\b", "Student Record"),
    (r"\bward record\b", "student record"),
    (r"\bWard Records\b", "Student Records"),
    (r"\bward records\b", "student records"),
    (r"\bEdit Ward Record\b", "Edit Student Record"),
    (r"\bedit ward record\b", "edit student record"),
    (r"\bfiltered wards\b", "filtered students"),
    (r"\bFiltered Wards\b", "Filtered Students"),
    (r"\bWard / Station\b", "Student / Station"),
    (r"\bWard Pickup Scan\b", "Student Pickup Scan"),
    (r"\bWard Pickup\b", "Student Pickup"),
    (r"\bward pickup\b", "student pickup"),
    (r"\bWard / Student Details\b", "Student Details"),
    (r"\bWard / Student\b", "Student"),
    (r"\bStudent / Ward:\b", "Student:"),
    (r"\bStudent / Ward\b", "Student"),
    (r"\benrolled wards\b", "enrolled children"),
    (r"\bEnrolled Wards\b", "Enrolled Children"),
    (r"\bretain ward\b", "keep child"),
    (r"\bRetain Ward\b", "Keep Child"),
    (r"\bWard Dismissed To\b", "Child Released To"),
    (r"\bward dismissed to\b", "child released to"),
    (r"\bRelationship to Ward\b", "Relationship to Child"),
    (r"\brelationship to ward\b", "relationship to child"),
    (r"\bRelationship to Student / Ward\b", "Relationship to Child"),
    (r"\bRegistered On-Campus Wards\b", "Registered Students on Campus"),
    (r"\bregistered on-campus wards\b", "registered students on campus"),
    (r"\bWard Protective Relocation\b", "Child Safety Care"),
    (r"\bLive Ward Monitor\b", "Live Student Monitor"),
    (r"\bLive Ward\b", "Live Student"),
    (r"\bWard Status\b", "Student Status"),
    (r"\bward status\b", "student status"),
    (r"\bWard Name\b", "Child Name"),
    (r"\bward name\b", "child name"),
    (r"\bWard:\b", "Child:"),
    (r"\bward:\b", "child:"),
    (r"\bWards:\b", "Children:"),
    (r"\bwards:\b", "children:"),
    (r"\bSwitch Ward\b", "Switch Child"),
    (r"\bswitch ward\b", "switch child"),
    (r"\bRegistered Wards\b", "Registered Children"),
    (r"\bregistered wards\b", "registered children"),
    (r"\bWard Profile\b", "Child Profile"),
    (r"\bward profile\b", "child profile"),
    (r"\bWard Full Profile\b", "Child Full Profile"),
    (r"\bWard Summary Dashboard\b", "Child Summary Dashboard"),
    (r"\bWard Summary\b", "Child Summary"),
    (r"\bWard Overview\b", "Child Overview"),
    (r"\bward overview\b", "child overview"),
    (r"\bWard Attendance\b", "Child Attendance"),
    (r"\bward attendance\b", "child attendance"),
    (r"\bWard Academic\b", "Child Academic"),
    (r"\bward academic\b", "child academic"),
    (r"\bWard Welfare\b", "Child Welfare"),
    (r"\bward welfare\b", "child welfare"),
    (r"\bWard Details\b", "Child Details"),
    (r"\bward details\b", "child details"),
    (r"\bWard List\b", "Student List"),
    (r"\bward list\b", "student list"),
    (r"\bSelect Ward\b", "Select Child"),
    (r"\bselect ward\b", "select child"),
    (r"\bActive Ward\b", "Active Child"),
    (r"\bactive ward\b", "active child"),
    (r"\bAll Wards\b", "All Children"),
    (r"\ball wards\b", "all children"),
    (r"\bYour Ward\b", "Your Child"),
    (r"\byour ward\b", "your child"),
    (r"\bThe Ward\b", "The Child"),
    (r"\bthe ward\b", "the child"),
    (r"\beach ward\b", "each child"),
    (r"\bEach Ward\b", "Each Child"),
    (r"\bany ward\b", "any child"),
    (r"\bAny Ward\b", "Any Child"),

    # Directives & Sanctions
    (r"\bPolicy Directives\b", "School Rules & Notes"),
    (r"\bpolicy directives\b", "school rules & notes"),
    (r"\bDirectives\b", "Instructions"),
    (r"\bdirectives\b", "instructions"),
    (r"\bDirective\b", "Notice"),
    (r"\bdirective\b", "notice"),
    (r"\bExecutive Directives\b", "School Instructions"),
    (r"\bexecutive directives\b", "school instructions"),

    (r"\bExecutive Sanctions\b", "Office Actions"),
    (r"\bexecutive sanctions\b", "office actions"),
    (r"\bSanctions\b", "Actions"),
    (r"\bsanctions\b", "actions"),
    (r"\bSanction\b", "Action"),
    (r"\bsanction\b", "action"),

    # Carepoint-app specifics
    (r"All 24 pupils marked Present", "All 24 students marked Present"),
    (r"Guardian & Ward Portal", "Parent & Child Portal"),
    (r"Switch Teaching Cohort", "Switch Class"),
    (r"Campus Concourse Stream", "Campus Gate Stream"),
    (r"pupil departure", "student departure"),
    (r"\b28 Pupils\b", "28 Students"),
    (r"\b26 Pupils\b", "26 Students"),
    (r"\b30 Pupils\b", "30 Students"),
    (r"\b\$\{cls\.pupils\} Pupils\b", "${cls.pupils} Students"),
]

TARGET_FILES = [
    r"c:\Projects\Carepoint_ApexEducators\prototype",
    r"c:\Projects\Carepoint_ApexEducators\src"
]

files_updated = 0
total_replacements = 0

for root_dir in TARGET_FILES:
    for dirpath, _, filenames in os.walk(root_dir):
        for fn in filenames:
            if not fn.endswith(('.html', '.tsx', '.ts', '.js')):
                continue
            if fn.endswith('.d.ts'):
                continue
            fpath = os.path.join(dirpath, fn)
            try:
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception:
                continue

            orig = content
            file_changes = 0

            for pattern, repl in TEXT_REPLACEMENTS:
                matches = re.findall(pattern, content)
                if matches:
                    new_content = re.sub(pattern, repl, content)
                    if new_content != content:
                        file_changes += len(matches)
                        content = new_content

            if content != orig:
                # Protect structural links and IDs
                content = content.replace('href="children.html"', 'href="wards.html"')
                content = content.replace('href="../admin/children.html"', 'href="../admin/wards.html"')
                content = content.replace('href="/admin/children"', 'href="/admin/wards"')
                content = content.replace('data-path="children-records"', 'data-path="ward-records"')
                content = content.replace('id="childMenu"', 'id="wardMenu"')
                content = content.replace("id='childMenu'", "id='wardMenu'")
                content = content.replace('id="childDropdownContainer"', 'id="wardDropdownContainer"')

                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(content)
                rel = os.path.relpath(fpath, r"c:\Projects\Carepoint_ApexEducators")
                print(f"Updated {rel} ({file_changes} replacements)")
                files_updated += 1
                total_replacements += file_changes

print(f"\nCompleted! {files_updated} files updated with {total_replacements} replacements.")
