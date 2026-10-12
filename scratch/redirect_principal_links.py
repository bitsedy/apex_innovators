import os
import re
import shutil

# Step 1: Rewrite links across all prototype files
count = 0
for root, dirs, files in os.walk('prototype'):
    if 'prototype\\principal' in root or 'prototype/principal' in root:
        continue
    for f in files:
        if f.endswith(('.html', '.js')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as fp:
                content = fp.read()
            
            orig = content
            # If inside prototype/admin/
            if 'admin' in root:
                content = re.sub(r'(\.\./)+principal/inbox\.html', 'inbox.html', content)
                content = re.sub(r'(\.\./)+principal/decision\.html', 'decision.html', content)
                content = re.sub(r'(\.\./)+principal/mobile-inbox\.html', 'mobile-inbox.html', content)
                content = re.sub(r'(\.\./)+principal/mobile-decision\.html', 'mobile-decision.html', content)
                content = re.sub(r'href=["\']\.\./principal["\']', 'href="inbox.html"', content)
                content = re.sub(r'href=["\']\.\./principal/["\']', 'href="inbox.html"', content)
            else:
                # Outside admin (e.g. parent, staff, gate, sysadmin, root)
                content = re.sub(r'(\.\./)+principal/inbox\.html', '../admin/inbox.html', content)
                content = re.sub(r'(\.\./)+principal/decision\.html', '../admin/decision.html', content)
                content = re.sub(r'(\.\./)+principal/mobile-inbox\.html', '../admin/mobile-inbox.html', content)
                content = re.sub(r'(\.\./)+principal/mobile-decision\.html', '../admin/mobile-decision.html', content)
                content = re.sub(r'principal/inbox\.html', 'admin/inbox.html', content)
                content = re.sub(r'principal/decision\.html', 'admin/decision.html', content)
                content = re.sub(r'href=["\'](\.\./)+principal/?["\']', 'href="../admin/dashboard.html"', content)
                content = re.sub(r'href=["\']principal/?["\']', 'href="admin/dashboard.html"', content)
            
            if content != orig:
                with open(p, 'w', encoding='utf-8') as fp:
                    fp.write(content)
                count += 1

print(f"Updated principal links in {count} prototype files!")

# Step 2: Remove prototype/principal/ directory
principal_dir = os.path.join('prototype', 'principal')
if os.path.exists(principal_dir):
    shutil.rmtree(principal_dir)
    print(f"Removed legacy directory: {principal_dir}")
else:
    print(f"Directory already removed: {principal_dir}")
