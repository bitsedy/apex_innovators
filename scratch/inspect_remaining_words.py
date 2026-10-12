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

for root in roots:
    for dirpath, _, filenames in os.walk(root):
        for fn in filenames:
            if not fn.endswith(('.tsx', '.html', '.ts', '.js')):
                continue
            if fn.endswith('.d.ts'):
                continue
            fpath = os.path.join(dirpath, fn)
            try:
                with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                    lines = f.readlines()
            except Exception:
                continue

            rel = os.path.relpath(fpath, r"c:\Projects\Carepoint_ApexEducators")
            for idx, line in enumerate(lines, 1):
                for p_str, pat in compiled:
                    if pat.search(line):
                        print(f"{rel}:{idx} [{p_str}] -> {line.strip()[:140]}")
