import os
import re

target_words = [
    r'\bcohorts?\b',
    r'\bpupils?\b',
    r'\bwards?\b',
    r'\btriage\b',
    r'\bdirectives?\b',
    r'\bsanctions?\b',
    r'\brefectory\b',
    r'\brecess\b',
    r'\bpediatric\b',
    r'\binfirmary\b',
    r'\bdiscrepanc(y|ies)\b',
    r'\bholistic\b',
    r'\bpedagogy\b',
    r'\bconcourse\b'
]

compiled = [(w, re.compile(w, re.I)) for w in target_words]

roots = [
    r"c:\Projects\Carepoint_ApexEducators\src",
    r"c:\Projects\Carepoint_ApexEducators\prototype"
]

results = {}

for root in roots:
    for dirpath, _, filenames in os.walk(root):
        for fn in filenames:
            if not fn.endswith(('.tsx', '.html', '.ts', '.js')):
                continue
            fpath = os.path.join(dirpath, fn)
            try:
                with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
            except Exception:
                continue

            matches_for_file = {}
            for pattern_str, pattern in compiled:
                m = pattern.findall(content)
                if m:
                    matches_for_file[pattern_str] = len(m)
            
            if matches_for_file:
                rel = os.path.relpath(fpath, r"c:\Projects\Carepoint_ApexEducators")
                results[rel] = matches_for_file

print(f"Total files with target words: {len(results)}")
for f, counts in sorted(results.items()):
    c_str = ", ".join(f"{k}: {v}" for k, v in counts.items())
    print(f"{f} -> {c_str}")
