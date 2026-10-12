const fs = require('fs');

// Simple JPEG parser to read width and height
const buf = fs.readFileSync('prototype/assets/carepoint-school-profile.jpg');
let offset = 2;
while (offset < buf.length) {
  if (buf[offset] !== 0xFF) break;
  const marker = buf[offset + 1];
  if (marker === 0xC0 || marker === 0xC2) {
    const height = buf.readUInt16BE(offset + 5);
    const width = buf.readUInt16BE(offset + 7);
    console.log(`JPEG dimensions: ${width} x ${height}`);
    break;
  }
  const len = buf.readUInt16BE(offset + 2);
  offset += 2 + len;
}
