import os
import shutil
import re

# Step 1: Copy principal files to admin
mappings = [
    ('prototype/principal/inbox.html', 'prototype/admin/inbox.html'),
    ('prototype/principal/decision.html', 'prototype/admin/decision.html'),
    ('prototype/principal/mobile-inbox.html', 'prototype/admin/mobile-inbox.html'),
    ('prototype/principal/mobile-decision.html', 'prototype/admin/mobile-decision.html'),
]

for src, dst in mappings:
    if os.path.exists(src):
        with open(src, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace relative links to admin from ../admin/xxx to xxx
        content = content.replace('../admin/', '')
        
        # Update HUD config
        if 'mobile' in dst:
            is_mobile = True
            if 'inbox' in dst:
                label = 'Mobile Executive Statutory Inbox'
                counterpart = 'inbox.html'
            else:
                label = 'Mobile Executive Statutory Decision Studio'
                counterpart = 'decision.html'
        else:
            is_mobile = False
            if 'inbox' in dst:
                label = 'Executive Statutory Inbox & Dispatch'
                counterpart = 'mobile-inbox.html'
            else:
                label = 'Executive Statutory Decision Studio'
                counterpart = 'mobile-decision.html'
        
        hud_replacement = f'''window.__CAREPOINT_HUD__ = {{
            role: "admin",
            label: "{label}",
            isMobile: {str(is_mobile).lower()},
            relRoot: "../",
            counterpart: "{counterpart}"
        }};'''
        content = re.sub(r'window\.__CAREPOINT_HUD__\s*=\s*\{[^}]+\};', hud_replacement, content)
        
        with open(dst, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Copied and adapted: {src} -> {dst}")

print("Step 1 complete: Principal files copied into Admin.")
