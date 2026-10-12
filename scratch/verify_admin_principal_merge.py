import urllib.request

test_urls = [
    ('/', 'Root Hub'),
    ('/admin/dashboard', 'Admin Dashboard'),
    ('/admin/inbox', 'Executive Inbox (Merged)'),
    ('/admin/decision', 'Statutory Decision Studio (Merged)'),
    ('/admin/approvals', 'Approvals Queue'),
    ('/admin/admissions', 'Admissions Review'),
    ('/admin/wards', 'Ward Records'),
    ('/admin/users', 'User Directory'),
    ('/admin/reports', 'Reports & Analytics'),
    ('/admin/settings', 'School Settings'),
    ('/admin/mobile-inbox', 'Mobile Executive Inbox'),
    ('/admin/mobile-decision', 'Mobile Decision Studio'),
    ('/principal/inbox', 'Legacy Principal Inbox Redirect'),
    ('/principal/decision', 'Legacy Principal Decision Redirect'),
]

passed = 0
failed = 0

print("Testing Unified Executive Admin & Principal Routes on http://localhost:3000 ...\n")

for path, desc in test_urls:
    url = f'http://localhost:3000{path}'
    try:
        req = urllib.request.urlopen(url, timeout=5)
        html = req.read().decode('utf-8', errors='ignore')
        
        has_26_27 = '2026/2027' in html or '2026/27' in html or '2026' in html
        has_exec_suite = 'Executive Suite' in html if '/admin/' in path and not 'mobile' in path else True
        
        print(f"[OK 200] {path:26} | len: {len(html):6}b | Academic Year 2026/27: {str(has_26_27):5} | {desc}")
        passed += 1
    except Exception as e:
        print(f"[FAIL]   {path:26} | error: {e} | {desc}")
        failed += 1

print(f"\n==========================================")
print(f"Summary: {passed} passed, {failed} failed out of {len(test_urls)} routes.")
print(f"==========================================")
