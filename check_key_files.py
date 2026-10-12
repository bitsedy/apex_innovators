import os
import re

files_to_check = [
    r"c:\Projects\Carepoint_ApexEducators\src\app\(public)\page.tsx",
    r"c:\Projects\Carepoint_ApexEducators\src\app\(staff)\staff\page.tsx",
    r"c:\Projects\Carepoint_ApexEducators\src\app\(staff)\staff\layout.tsx",
    r"c:\Projects\Carepoint_ApexEducators\src\app\(staff)\staff\attendance\page.tsx",
    r"c:\Projects\Carepoint_ApexEducators\src\app\(staff)\staff\gradebook\page.tsx",
    r"c:\Projects\Carepoint_ApexEducators\src\app\(staff)\staff\health\page.tsx",
    r"c:\Projects\Carepoint_ApexEducators\src\app\(staff)\staff\timetable\page.tsx",
    r"c:\Projects\Carepoint_ApexEducators\prototype\staff\dashboard.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\staff\attendance.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\staff\gradebook.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\staff\health.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\staff\timetable.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\staff\approvals.html",
    r"c:\Projects\Carepoint_ApexEducators\prototype\staff\messages.html",
]

for p in files_to_check:
    with open(p, "r", encoding="utf-8") as f:
        content = f.read()
    
    found = []
    for word in ["cohort", "pupil", "ward", "triage", "directive", "sanction", "refectory", "recess", "discrepancy"]:
        matches = len(re.findall(r'\b' + word + r'[s]?', content, re.I))
        if matches > 0:
            found.append(f"{word}: {matches}")
    
    print(f"{os.path.basename(p)}: {', '.join(found) if found else 'CLEAN'}")
