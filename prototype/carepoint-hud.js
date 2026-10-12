(function() {
  window.CarepointDemo = {
    showToast: function(message, isSuccess = true) {
      const existing = document.querySelector('.carepoint-toast');
      if (existing) existing.remove();
      const toast = document.createElement('div');
      toast.className = 'carepoint-toast';
      toast.innerHTML = `
        <span class="material-symbols-outlined text-[20px]" style="color: ${isSuccess ? '#94f9a0' : '#ffb4a9'};">
          ${isSuccess ? 'check_circle' : 'warning'}
        </span>
        <span>${message}</span>
      `;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.4s ease';
        setTimeout(() => toast.remove(), 400);
      }, 3500);
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    const hudData = window.__CAREPOINT_HUD__;
    if (!hudData) return;

    const root = document.createElement('div');
    root.id = 'carepoint-hud-root';

    const pill = document.createElement('div');
    pill.className = 'carepoint-hud-pill';
    pill.innerHTML = `
      <span class="carepoint-hud-dot"></span>
      <span style="font-size: 12px; font-weight: 700;">Demo HUD</span>
      <span class="material-symbols-outlined text-[18px]">tune</span>
    `;

    const drawer = document.createElement('div');
    drawer.className = 'carepoint-hud-drawer hidden';

    const roleName = hudData.role.toUpperCase();
    const isMobile = hudData.isMobile;
    const counterpartUrl = hudData.counterpart;

    drawer.innerHTML = `
      <div class="carepoint-hud-header">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="material-symbols-outlined text-[18px]" style="color:#011549;">school</span>
          <span class="carepoint-hud-title">Carepoint Navigator</span>
        </div>
        <span class="carepoint-hud-badge">${roleName} • ${isMobile ? 'MOBILE' : 'DESKTOP'}</span>
      </div>

      <div>
        <div style="font-size: 12px; color: #757680; margin-bottom: 2px;">Current Screen:</div>
        <div style="font-size: 13px; font-weight: 700; color: #011549;">${hudData.label}</div>
      </div>

      <div class="carepoint-hud-section-title">PORTAL QUICK SWITCH</div>
      <div class="carepoint-hud-btn-grid">
        <a class="carepoint-hud-link ${hudData.role === 'admin' ? 'active' : ''}" href="${hudData.relRoot}admin/dashboard.html">
          <span class="material-symbols-outlined text-[16px]">admin_panel_settings</span>Admin (Principal)
        </a>
        <a class="carepoint-hud-link ${hudData.role === 'staff' ? 'active' : ''}" href="${hudData.relRoot}staff/dashboard.html">
          <span class="material-symbols-outlined text-[16px]">school</span>Teacher
        </a>
        <a class="carepoint-hud-link ${hudData.role === 'parent' ? 'active' : ''}" href="${hudData.relRoot}parent/dashboard.html">
          <span class="material-symbols-outlined text-[16px]">family_restroom</span>Parent
        </a>
        <a class="carepoint-hud-link ${hudData.role === 'gate' ? 'active' : ''}" href="${hudData.relRoot}gate/scan.html">
          <span class="material-symbols-outlined text-[16px]">qr_code_scanner</span>Gate Kiosk
        </a>
        <a class="carepoint-hud-link ${hudData.role === 'sysadmin' ? 'active' : ''}" href="${hudData.relRoot}sysadmin/dashboard.html">
          <span class="material-symbols-outlined text-[16px]">terminal</span>Super Admin
        </a>
        <a class="carepoint-hud-link ${hudData.role === 'public' ? 'active' : ''}" href="${hudData.relRoot}public/home.html">
          <span class="material-symbols-outlined text-[16px]">public</span>Public Site
        </a>
      </div>

      <div class="carepoint-hud-actions">
        ${counterpartUrl ? `
          <a class="carepoint-hud-action-btn secondary" href="${counterpartUrl}">
            <span class="material-symbols-outlined text-[16px]">${isMobile ? 'desktop_windows' : 'smartphone'}</span>
            <span>Switch to ${isMobile ? 'Desktop Layout' : 'Mobile Layout'}</span>
          </a>
        ` : ''}

        <button class="carepoint-hud-action-btn alert" id="hud-sim-alert" type="button">
          <span class="material-symbols-outlined text-[16px]">emergency</span>
          <span>Simulate Custody Mismatch Alert</span>
        </button>

        <button class="carepoint-hud-action-btn secondary" id="hud-sim-clockin" type="button">
          <span class="material-symbols-outlined text-[16px]">schedule</span>
          <span>Simulate Geofenced Clock-In</span>
        </button>

        <button class="carepoint-hud-action-btn secondary" id="hud-open-notifs" type="button">
          <span class="material-symbols-outlined text-[16px]">notifications_active</span>
          <span>Open Notifications Center</span>
        </button>

        <a class="carepoint-hud-action-btn secondary" href="${hudData.relRoot}index.html">
          <span class="material-symbols-outlined text-[16px]">hub</span>
          <span>All 75 Screens Directory</span>
        </a>
      </div>
    `;

    pill.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });

    root.appendChild(drawer);
    root.appendChild(pill);
    document.body.appendChild(root);

    // Event listeners
    document.getElementById('hud-open-notifs')?.addEventListener('click', () => {
      drawer.classList.add('hidden');
      window.openCarepointNotifications();
    });

    document.getElementById('hud-sim-alert')?.addEventListener('click', () => {
      window.location.href = `${hudData.relRoot}gate/alert.html`;
    });

    document.getElementById('hud-sim-clockin')?.addEventListener('click', () => {
      window.CarepointDemo.showToast("Teacher Clocked-In: GPS Geofence Verified at 07:15 GMT");
    });

    // Auto-wire all notification bell buttons across pages
    document.querySelectorAll('button[aria-label="Notifications"], button[aria-label="Urgent alerts"], .notification-bell-btn').forEach(btn => {
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openCarepointNotifications();
      });
    });
  });

  // Global Notification Center with Progressive Disclosure (Headlines only by default)
  window.openCarepointNotifications = function() {
    let backdrop = document.getElementById('carepoint-notif-backdrop');
    let notifDrawer = document.getElementById('carepoint-notif-drawer');

    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'carepoint-notif-backdrop';
      document.body.appendChild(backdrop);
    }

    if (!notifDrawer) {
      notifDrawer = document.createElement('div');
      notifDrawer.id = 'carepoint-notif-drawer';
      document.body.appendChild(notifDrawer);
    }

    const hudData = window.__CAREPOINT_HUD__ || { relRoot: '' };
    const relRoot = hudData.relRoot || '';

    const notifications = [
      {
        id: 'notif-1',
        headline: 'Kofi Mensah: Inhaler Reminder at 11:30 AM',
        category: 'Health',
        badgeBg: '#fef3c7',
        badgeColor: '#92400e',
        time: '10m ago',
        isUnread: true,
        priority: 'urgent',
        student: 'Kofi Mensah (Basic 2 - Sunflower)',
        sender: 'School Clinic (Nurse Mary)',
        fullMessage: 'Kofi needs 2 puffs of his Ventolin inhaler before physical play or outdoor sports. Please ensure he drinks water afterward. Cabinet location: First Aid Station Shelf #04.',
        actionLabel: 'View Clinic Notes',
        actionUrl: `${relRoot}staff/health.html`
      },
      {
        id: 'notif-2',
        headline: 'Morning Class Attendance Register Due',
        category: 'Attendance',
        badgeBg: '#e0f2fe',
        badgeColor: '#075985',
        time: '25m ago',
        isUnread: true,
        priority: 'normal',
        student: 'Basic 2 Sunflower (28 Students)',
        sender: 'School Office',
        fullMessage: 'Morning attendance register closes at 08:30 AM. 28 students are marked present and 1 student is excused. Please review and confirm final head count.',
        actionLabel: 'Take Attendance',
        actionUrl: `${relRoot}staff/attendance.html`
      },
      {
        id: 'notif-3',
        headline: 'Term 1 Report Card Marks Ready for Review',
        category: 'Academics',
        badgeBg: '#e0e7ff',
        badgeColor: '#3730a3',
        time: '1h ago',
        isUnread: true,
        priority: 'normal',
        student: 'All Sunflower Students',
        sender: 'Academic Office',
        fullMessage: 'End-of-term continuous assessment marks are compiled. 3 English homework marks are still pending entry before report cards can be printed.',
        actionLabel: 'Open Gradebook',
        actionUrl: `${relRoot}staff/gradebook.html`
      },
      {
        id: 'notif-4',
        headline: 'New Afternoon Pickup Pass Created',
        category: 'Safety',
        badgeBg: '#d1fae5',
        badgeColor: '#065f46',
        time: '2h ago',
        isUnread: false,
        priority: 'normal',
        student: 'Kofi Mensah',
        sender: 'Father (Dr. Nana Mensah)',
        fullMessage: 'A single-day pickup pass has been issued for family driver Kwame Boateng (Vehicle: Toyota Corolla GT-4412-24). Phone: +233 24 555 1234. Security code: 8829.',
        actionLabel: 'View Security Log',
        actionUrl: `${relRoot}gate/log.html`
      },
      {
        id: 'notif-5',
        headline: 'Parent Emergency Phone Number Changed',
        category: 'Notice',
        badgeBg: '#f1f5f9',
        badgeColor: '#334155',
        time: 'Yesterday',
        isUnread: false,
        priority: 'normal',
        student: 'Ama Mensah (Nursery 1)',
        sender: 'Parent Portal',
        fullMessage: 'Mother Mrs. Abena Mensah added a new backup emergency phone number: +233 20 888 9900. All class emergency contacts have been refreshed.',
        actionLabel: 'View Student Details',
        actionUrl: `${relRoot}parent/dashboard.html`
      }
    ];

    notifDrawer.innerHTML = `
      <div class="carepoint-notif-header">
        <div style="display: flex; items-center; justify-content: space-between; margin-bottom: 6px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="material-symbols-outlined text-[20px]" style="color:#011549;">notifications</span>
            <span style="font-size: 16px; font-weight: 800; color: #011549;">Notifications</span>
            <span style="background: #ba0a0c; color: white; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 9999px;">3 New</span>
          </div>
          <button id="close-notif-drawer-btn" style="background:none; border:none; cursor:pointer; padding:4px; display:flex; align-items:center; color:#64748b;" title="Close Notifications">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <p style="font-size: 13px; color: #475569; margin: 0 0 10px 0;">
          Only headlines are shown below. <strong>Click any headline</strong> to read complete details.
        </p>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
          <div style="display: flex; gap: 6px;" id="notif-filter-group">
            <button data-filter="all" style="padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; border: none; cursor: pointer; background: #011549; color: white;">All (5)</button>
            <button data-filter="unread" style="padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; border: none; cursor: pointer; background: #e2e8f0; color: #334155;">Unread (3)</button>
            <button data-filter="urgent" style="padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 700; border: none; cursor: pointer; background: #e2e8f0; color: #334155;">Urgent (1)</button>
          </div>
          <button id="toggle-all-notifs-btn" style="background: none; border: none; font-size: 12px; font-weight: 700; color: #011549; cursor: pointer; padding: 2px 4px;">
            Expand All
          </button>
        </div>
      </div>

      <div class="carepoint-notif-list" id="carepoint-notif-items-container">
        ${notifications.map((n, idx) => `
          <div class="carepoint-notif-item ${n.isUnread ? 'is-unread' : ''}" data-category="${n.category.toLowerCase()}" data-urgent="${n.priority === 'urgent'}" id="item-${n.id}">
            <button class="carepoint-notif-headline-btn" type="button" onclick="window.toggleNotifItem('${n.id}')">
              <div style="display: flex; align-items: flex-start; gap: 10px; flex: 1; min-width: 0;">
                <span style="width: 8px; height: 8px; border-radius: 9999px; background: ${n.isUnread ? '#ba0a0c' : 'transparent'}; margin-top: 5px; shrink: 0;"></span>
                <div style="flex: 1; min-width: 0;">
                  <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px; flex-wrap: wrap;">
                    <span style="background: ${n.badgeBg}; color: ${n.badgeColor}; font-size: 10px; font-weight: 700; padding: 1px 6px; border-radius: 4px; text-transform: uppercase;">${n.category}</span>
                    ${n.priority === 'urgent' ? '<span style="background: #fee2e2; color: #991b1b; font-size: 10px; font-weight: 800; padding: 1px 6px; border-radius: 4px;">URGENT</span>' : ''}
                    <span style="font-size: 11px; color: #64748b;">${n.time}</span>
                  </div>
                  <div style="font-size: 13px; font-weight: 700; color: #0f172a; line-height: 1.35;">
                    ${n.headline}
                  </div>
                  <div class="notif-hint" style="font-size: 11px; color: #0284c7; font-weight: 600; margin-top: 3px; display: flex; align-items: center; gap: 2px;">
                    <span>Tap to view details</span>
                    <span class="material-symbols-outlined text-[13px]">expand_more</span>
                  </div>
                </div>
              </div>
              <span class="material-symbols-outlined carepoint-notif-chevron text-[20px]" style="color: #64748b; transition: transform 0.2s ease;">expand_more</span>
            </button>
            <div class="carepoint-notif-details" id="details-${n.id}">
              <p style="font-size: 13px; color: #1e293b; line-height: 1.5; margin: 0 0 10px 0;">
                ${n.fullMessage}
              </p>
              <div style="background: #f8fafc; border-radius: 8px; padding: 8px 12px; margin-bottom: 10px; font-size: 11px; color: #475569; display: flex; flex-direction: column; gap: 4px;">
                <div style="display:flex; justify-content:space-between;">
                  <span>Student / Class:</span>
                  <strong style="color:#0f172a;">${n.student}</strong>
                </div>
                <div style="display:flex; justify-content:space-between;">
                  <span>Sender:</span>
                  <span style="color:#0f172a; font-weight:600;">${n.sender}</span>
                </div>
              </div>
              <div style="display: flex; items-center; justify-content: space-between; gap: 8px;">
                <a href="${n.actionUrl}" style="display: inline-flex; align-items: center; gap: 4px; padding: 6px 12px; background: #011549; color: white; border-radius: 6px; font-size: 11px; font-weight: 700; text-decoration: none;">
                  <span>${n.actionLabel}</span>
                  <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
                <button type="button" onclick="window.toggleNotifItem('${n.id}')" style="background: none; border: none; font-size: 11px; color: #64748b; cursor: pointer;">
                  Close Details
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="padding: 12px 20px; border-top: 1px solid #e2e8f0; background: #f8fafc; display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: #64748b;">
        <span>Carepoint Notifications</span>
        <button id="done-notif-btn" style="background: none; border: none; font-weight: 700; color: #011549; cursor: pointer;">Done</button>
      </div>
    `;

    // Show drawer
    backdrop.classList.add('active');
    notifDrawer.classList.add('active');

    function closeDrawer() {
      backdrop.classList.remove('active');
      notifDrawer.classList.remove('active');
    }

    backdrop.onclick = closeDrawer;
    document.getElementById('close-notif-drawer-btn').onclick = closeDrawer;
    document.getElementById('done-notif-btn').onclick = closeDrawer;

    // Filter handling
    const filterButtons = document.querySelectorAll('#notif-filter-group button');
    filterButtons.forEach(btn => {
      btn.onclick = () => {
        filterButtons.forEach(b => {
          b.style.background = '#e2e8f0';
          b.style.color = '#334155';
        });
        btn.style.background = '#011549';
        btn.style.color = 'white';

        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.carepoint-notif-item').forEach(item => {
          if (filter === 'all') {
            item.style.display = 'block';
          } else if (filter === 'unread') {
            item.style.display = item.classList.contains('is-unread') ? 'block' : 'none';
          } else if (filter === 'urgent') {
            item.style.display = item.getAttribute('data-urgent') === 'true' ? 'block' : 'none';
          }
        });
      };
    });

    // Expand all toggle
    let isAllExpanded = false;
    document.getElementById('toggle-all-notifs-btn').onclick = () => {
      isAllExpanded = !isAllExpanded;
      document.querySelectorAll('.carepoint-notif-item').forEach(item => {
        if (isAllExpanded) {
          item.classList.add('expanded');
          item.querySelector('.notif-hint').style.display = 'none';
        } else {
          item.classList.remove('expanded');
          item.querySelector('.notif-hint').style.display = 'flex';
        }
      });
      document.getElementById('toggle-all-notifs-btn').innerText = isAllExpanded ? 'Collapse All' : 'Expand All';
    };
  };

  // Toggle single item
  window.toggleNotifItem = function(id) {
    const item = document.getElementById(`item-${id}`);
    if (!item) return;
    const isExpanded = item.classList.toggle('expanded');
    const hint = item.querySelector('.notif-hint');
    if (hint) hint.style.display = isExpanded ? 'none' : 'flex';

    // Mark as read visually
    item.classList.remove('is-unread');
    const dot = item.querySelector('span[style*="border-radius: 9999px"]');
    if (dot) dot.style.background = 'transparent';
  };
})();