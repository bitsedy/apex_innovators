const fs = require('fs');

let appJs = fs.readFileSync('prototype/carepoint-app.js', 'utf8');

const oldSync = `  // Ward display synchronization for parent portal
  function syncWardDisplay(child) {
    const isKofi = child === 'kofi';
    const nameEl = aside.querySelector('#parent-drawer-ward-name');
    const classEl = aside.querySelector('#parent-drawer-ward-class');
    const avatarEl = aside.querySelector('#parent-drawer-ward-avatar');
    if (nameEl) nameEl.textContent = isKofi ? 'Kofi Mensah' : 'Ama Mensah';
    if (classEl) classEl.textContent = isKofi ? 'Basic 2 • Sunflower Class' : 'Nursery 1 • Buttercup';
    if (avatarEl) avatarEl.textContent = isKofi ? 'KM' : 'AM';
  }`;

const newSync = `  // Ward display synchronization for parent portal
  function syncWardDisplay(child) {
    const isKofi = child === 'kofi';
    document.querySelectorAll('#parent-drawer-ward-name').forEach(el => el.textContent = isKofi ? 'Kofi Mensah' : 'Ama Mensah');
    document.querySelectorAll('#parent-drawer-ward-class').forEach(el => el.textContent = isKofi ? 'Basic 2 • Sunflower Class' : 'Nursery 1 • Buttercup');
    document.querySelectorAll('#parent-drawer-ward-avatar').forEach(el => el.textContent = isKofi ? 'KM' : 'AM');
    const nameEl = aside.querySelector('#parent-drawer-ward-name');
    const classEl = aside.querySelector('#parent-drawer-ward-class');
    const avatarEl = aside.querySelector('#parent-drawer-ward-avatar');
    if (nameEl) nameEl.textContent = isKofi ? 'Kofi Mensah' : 'Ama Mensah';
    if (classEl) classEl.textContent = isKofi ? 'Basic 2 • Sunflower Class' : 'Nursery 1 • Buttercup';
    if (avatarEl) avatarEl.textContent = isKofi ? 'KM' : 'AM';
  }`;

if (appJs.replace(/\r\n/g, '\n').includes(oldSync.replace(/\r\n/g, '\n'))) {
  // Normalize and replace
  const isCrlf = appJs.includes('\r\n');
  const normalized = appJs.replace(/\r\n/g, '\n');
  const replaced = normalized.replace(oldSync.replace(/\r\n/g, '\n'), newSync.replace(/\r\n/g, '\n'));
  fs.writeFileSync('prototype/carepoint-app.js', isCrlf ? replaced.replace(/\n/g, '\r\n') : replaced, 'utf8');
  console.log('Successfully updated syncWardDisplay in prototype/carepoint-app.js');
} else {
  console.log('syncWardDisplay already updated or not found');
}
