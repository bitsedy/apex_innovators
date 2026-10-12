const fs = require('fs');
const path = require('path');

const srcPath = 'C:/Users/sedya/.gemini/antigravity/brain/19a11326-611f-433b-baf9-9f96579a0cb3/.user_uploaded/media_1790585154233.jpg';

// Destination directories
const dirs = ['prototype/assets', 'prototype/images', 'prototype/public/images'];
dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

const destFiles = [
  'prototype/assets/carepoint-school-profile.jpg',
  'prototype/images/carepoint-school-profile.jpg',
  'prototype/carepoint-school-profile.jpg',
  'prototype/public/carepoint-school-profile.jpg'
];

destFiles.forEach(dest => {
  fs.copyFileSync(srcPath, dest);
  console.log('Copied to:', dest, 'Size:', fs.statSync(dest).size, 'bytes');
});
