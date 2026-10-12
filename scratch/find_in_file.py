import re

with open(r"c:\Projects\Carepoint_ApexEducators\prototype\carepoint-app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines, 1):
    for w in ["cohort", "pupil", "ward", "concourse"]:
        if re.search(r'\b' + w, line, re.I):
            print(f"Line {idx}: {line.strip()[:100]}")
