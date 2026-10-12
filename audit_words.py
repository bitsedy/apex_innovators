import os
import re

TARGET_DIRS = [
    r"c:\Projects\Carepoint_ApexEducators\prototype",
    r"c:\Projects\Carepoint_ApexEducators\src\app"
]

WORDS = [
    "cohort", "pupil", "ward", "broadsheet", "pediatric", "infirmary",
    "triage", "taxonomy", "directive", "sanction", "endorsed", "contention",
    "curricula", "manipulative", "refectory", "recess", "rehydration",
    "discrepancy", "reconciliation", "synchronized", "synchronization",
    "mitigation", "inter-house", "formative"
]

results = []

for base in TARGET_DIRS:
    for root, _, files in os.walk(base):
        for f in files:
            if f.endswith((".html", ".tsx", ".ts")):
                path = os.path.join(root, f)
                try:
                    with open(path, "r", encoding="utf-8") as file:
                        for line_num, line in enumerate(file, 1):
                            line_lower = line.lower()
                            for w in WORDS:
                                if re.search(r'\b' + re.escape(w), line_lower):
                                    results.append((path, line_num, w, line.strip()))
                except Exception as e:
                    pass

print(f"Total findings: {len(results)}")
for path, line_num, word, snippet in results[:40]:
    rel = path.replace(r"c:\Projects\Carepoint_ApexEducators\\", "")
    print(f"{rel}:{line_num} [{word}]: {snippet[:80]}")
