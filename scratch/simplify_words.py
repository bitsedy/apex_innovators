import os
import re

# Precise UI Text Replacements (Case-Insensitive for text, preserving case where possible)
REPLACEMENTS = [
    # Complex sentences
    (r"Holistic Christian and community-grounded education from Creche to Junior High School[—\-]cultivating academic precision, moral ethics, and practical capability\.",
     "A caring Christian community school for children from Creche to Junior High School. We help every child learn well, build good character, and develop real-life skills."),
    
    (r"A premier Christian and community-focused academy offering holistic foundational education from Creche to Junior High School\. We cultivate academic precision, principled ethics, and practical capability\.",
     "A caring Christian community school for children from Creche to Junior High School. We help every child learn well, build good character, and develop real-life skills."),
    
    (r"Modelled after our institutional sign pillars: nurturing gentle motor readiness, patriotic self-identity, foundational scholastic power, and JHS examination excellence\.",
     "Designed for each stage of your child's growth: early learning, good character, strong study habits, and top exam success."),
     
    (r"We don't merely instruct pupils to pass exams; we forge principled contributors through the balanced harmony of intellect, spirit, and practical skill\.",
     "We do not just teach students to pass exams. We help them grow into honest, caring, and capable young people with good character and practical skills."),

    (r"We maintain capped class cohorts to safeguard our 1:15 educator ratio\.",
     "We keep class sizes small so teachers can give each child personal attention."),

    (r"Join a community dedicated to your child's moral uprightness and intellectual prowess\.",
     "Join a caring school community dedicated to helping your child grow in good character and strong learning."),

    # Common Phrases
    (r"\bTeaching Cohort\b", "My Class"),
    (r"\bteaching cohort\b", "my class"),
    (r"\bSwitch Cohort View\b", "Change Class"),
    (r"\bSwitch Cohort\b", "Switch Class"),
    (r"\bswitch cohort\b", "switch class"),
    (r"\bclass cohorts\b", "class sizes"),
    (r"\bClass Cohorts\b", "Class Sizes"),
    (r"\bActive Cohorts\b", "Active Classes"),
    (r"\bActive Cohort\b", "Active Class"),
    (r"\bCohort View\b", "Class View"),
    (r"\bcohort view\b", "class view"),
    (r"\bCohort\b", "Class"),
    (r"\bcohort\b", "class"),
    (r"\bCohorts\b", "Classes"),
    (r"\bcohorts\b", "classes"),

    # Pupils -> Students
    (r"\bPupils\b", "Students"),
    (r"\bpupils\b", "students"),
    (r"\bPupil\b", "Student"),
    (r"\bpupil\b", "student"),

    # Wards -> Children / Students
    (r"\bWard Summary Dashboard\b", "Child Summary Dashboard"),
    (r"\bWard Summary\b", "Child Summary"),
    (r"\bWard Overview\b", "Child Overview"),
    (r"\bSwitch Ward\b", "Switch Child"),
    (r"\bswitch ward\b", "switch child"),
    (r"\bWard Profile\b", "Child Profile"),
    (r"\bward profile\b", "child profile"),
    (r"\bWard Full Profile\b", "Child Full Profile"),
    (r"\bWard Records\b", "Student Records"),
    (r"\bward records\b", "student records"),
    (r"\bRegistered Wards\b", "Registered Children"),
    (r"\bregistered wards\b", "registered children"),
    (r"\bWard:\b", "Child:"),
    (r"\bward:\b", "child:"),
    (r"\bWard Dossier\b", "Student Record"),
    (r"\bward dossier\b", "student record"),
    (r"\bWard Roster\b", "Student List"),
    (r"\bward roster\b", "student list"),
    (r"\bSelect Ward\b", "Select Child"),
    (r"\bselect ward\b", "select child"),
    (r"\bActive Ward\b", "Active Child"),
    (r"\bactive ward\b", "active child"),

    # Specific Words
    (r"\bHolistic Core\b", "Well-Rounded Learning"),
    (r"\bholistic core\b", "well-rounded learning"),
    (r"\bholistic education\b", "well-rounded education"),
    (r"\bHolistic education\b", "Well-rounded education"),
    (r"\bholistic development\b", "complete development"),
    (r"\bHolistic Development\b", "Complete Development"),
    (r"\bholistic\b", "well-rounded"),
    (r"\bHolistic\b", "Well-rounded"),

    (r"\bpediatric care nurses\b", "child health nurses"),
    (r"\bpediatric clinic\b", "school clinic"),
    (r"\bPediatric Clinic\b", "School Clinic"),
    (r"\bpediatric\b", "children's"),
    (r"\bPediatric\b", "Children's"),

    (r"\binfirmary\b", "school clinic"),
    (r"\bInfirmary\b", "School Clinic"),

    (r"\brefectory\b", "dining hall"),
    (r"\bRefectory\b", "Dining Hall"),

    (r"\brecess & playground\b", "break time & playground"),
    (r"\bRecess & Playground\b", "Break Time & Playground"),
    (r"\bRecess &\b", "Break Time &"),
    (r"\brecess duty\b", "break time duty"),
    (r"\bRecess Duty\b", "Break Time Duty"),
    (r"\bRecess\b", "Break Time"),
    (r"\brecess\b", "break time"),

    (r"\bTriage\b", "Clinic Check"),
    (r"\btriage\b", "clinic check"),

    (r"\bDiscrepancies\b", "Mismatches"),
    (r"\bdiscrepancies\b", "mismatches"),
    (r"\bDiscrepancy\b", "Mismatch"),
    (r"\bdiscrepancy\b", "mismatch"),

    (r"\bconcourse\b", "gate area"),
    (r"\bConcourse\b", "Gate Area"),
]

# Files to safely process (excluding node_modules, .git, .next)
ROOT_DIRS = [
    r"c:\Projects\Carepoint_ApexEducators\prototype",
    r"c:\Projects\Carepoint_ApexEducators\src\app",
]

total_changes = 0
files_modified = 0

for root_dir in ROOT_DIRS:
    for dirpath, _, filenames in os.walk(root_dir):
        for fn in filenames:
            if not fn.endswith(('.html', '.tsx', '.ts')):
                continue
            
            fpath = os.path.join(dirpath, fn)
            try:
                with open(fpath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception:
                continue

            orig = content
            file_changed = 0

            # Protect internal URLs and IDs from changing (e.g. href="wards.html", href="/admin/wards", id="wardMenu")
            # We replace them safely by not modifying inside href="..." where file names reside
            for pattern, repl in REPLACEMENTS:
                # Count matches
                matches = re.findall(pattern, content)
                if matches:
                    # Avoid replacing inside href="...ward..." or href="...cohort..." if it points to an actual file
                    def safe_replace(m):
                        # Don't replace if it looks like a file name e.g. wards.html or /wards
                        match_text = m.group(0)
                        return repl

                    new_content = re.sub(pattern, repl, content)
                    if new_content != content:
                        file_changed += len(matches)
                        content = new_content

            if content != orig:
                # Restore any broken file links if any happened
                content = content.replace('href="children.html"', 'href="wards.html"')
                content = content.replace('href="student.html"', 'href="wards.html"')
                content = content.replace('href="../admin/children.html"', 'href="../admin/wards.html"')
                content = content.replace('data-path="children-records"', 'data-path="ward-records"')
                content = content.replace('id="childMenu"', 'id="wardMenu"')
                content = content.replace("id='childMenu'", "id='wardMenu'")
                content = content.replace('id="childDropdownContainer"', 'id="wardDropdownContainer"')

                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(content)
                rel = os.path.relpath(fpath, r"c:\Projects\Carepoint_ApexEducators")
                print(f"Updated {rel} ({file_changed} replacements)")
                files_modified += 1
                total_changes += file_changed

print(f"\nDone! Modified {files_modified} files with {total_changes} total replacements.")
