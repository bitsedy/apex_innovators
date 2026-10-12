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

counts_by_dir = {}
counts_by_word = {}

for base in TARGET_DIRS:
    for root, _, files in os.walk(base):
        for f in files:
            if f.endswith((".html", ".tsx", ".ts")):
                path = os.path.join(root, f)
                rel = path.replace(r"c:\Projects\Carepoint_ApexEducators\\", "")
                folder = rel.split("\\")[0] + "/" + (rel.split("\\")[1] if len(rel.split("\\")) > 1 else "")
                try:
                    with open(path, "r", encoding="utf-8") as file:
                        for line in file:
                            line_lower = line.lower()
                            for w in WORDS:
                                if re.search(r'\b' + re.escape(w), line_lower):
                                    counts_by_dir[folder] = counts_by_dir.get(folder, 0) + 1
                                    counts_by_word[w] = counts_by_word.get(w, 0) + 1
                except Exception:
                    pass

print("Counts by Folder:")
for k, v in sorted(counts_by_dir.items(), key=lambda x: -x[1]):
    print(f"  {k}: {v}")

print("\nCounts by Word:")
for k, v in sorted(counts_by_word.items(), key=lambda x: -x[1]):
    print(f"  {k}: {v}")
