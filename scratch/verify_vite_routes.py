import urllib.request
import sys

routes = [
    '/',
    '/public/home',
    '/public/apply',
    
    # Gate Kiosk
    '/gate/scan',
    '/gate/verify',
    '/gate/alert',
    '/gate/log',
    '/gate/login',
    
    # Parent Portal
    '/parent/dashboard',
    '/parent/academics',
    '/parent/pickup',
    '/parent/messages',
    '/parent/login',
    
    # Staff Portal
    '/staff/dashboard',
    '/staff/attendance',
    '/staff/gradebook',
    '/staff/timetable',
    '/staff/approvals',
    '/staff/health',
    '/staff/login',
    
    # Admin Portal
    '/admin/dashboard',
    '/admin/wards',
    '/admin/users',
    '/admin/admissions',
    '/admin/approvals',
    '/admin/reports',
    '/admin/settings',
    '/admin/login',
    
    # Principal
    '/principal/inbox',
    '/principal/decision',
    
    # SysAdmin
    '/sysadmin/dashboard',
    '/sysadmin/provisioning',
    '/sysadmin/integrations',
    '/sysadmin/features',
    '/sysadmin/changes',
    '/sysadmin/audit',
    '/sysadmin/tracker',
    '/sysadmin/login',
]

success = 0
failed = 0

print("Verifying Vite Dev Server on http://localhost:3000 ...\n")

for r in routes:
    url = f'http://localhost:3000{r}'
    try:
        req = urllib.request.urlopen(url, timeout=5)
        html = req.read().decode('utf-8', errors='ignore')
        has_alpine = 'carepoint-app.js' in html
        has_tailwind = 'tailwindcss' in html
        print(f"[OK 200] {r:24} | len: {len(html):6}b | Alpine: {str(has_alpine):5} | Tailwind: {str(has_tailwind):5}")
        success += 1
    except Exception as e:
        print(f"[FAIL]   {r:24} | error: {e}")
        failed += 1

print("\n==========================================")
print(f"Summary: {success} passed, {failed} failed out of {len(routes)} routes.")
print("==========================================")

if failed > 0:
    sys.exit(1)
