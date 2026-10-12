const fs = require('fs');
const path = require('path');

const PHOTOS = {
  admin: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkWfNsavZrE2q7ehrA64sihUwtmROAw4xXN-C6BlUTPhqxnN--2RN5DRycS1Zzkyt6oCEfdTUfjODz6QYZEv08Q-JAkUc3Av7yS8ahvu_IycCMkJCxx5Dx9PYnuyuHQLKp_OkepCnkvleE-hqHca1ZtXA-REaPgIftK5gPRsomXA64FFaJZFdKmQGy-GEt_k2m5zV-0ASaXXLnRB3Au6F5xwS03ye8IFEGRzgETPCCJ1eKP6QrBZk3BQ',
    alt: 'Dr. Elizabeth Appiah'
  },
  staff: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo1EGS9Udv9jbRuc-r6_oXpPteu9hto5W-SkEkm2uTxYC_8t04Z0bkIPpHMyA7yGLHXLvsrFuQqok8JD7tVi6QkAq01hTH_2GU1O1U0WY1b_fqIXnvJvjsmyxu_6286Xsi9NMB9HAsZaxqurxk17R4oPRa4XNsolx6wRTOhJJIEBUI6m6AdHqZ8LPBO6IrFN8ItlRIZm_xSUzn8SkT-Hm1LpNpyB808pBwbwzAPFI0qzuy3owK2k3KoA',
    alt: 'Mrs. Beatrice Abbey'
  },
  parent: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk7nHm7egIuiTau40KQEFHBKNDX3EptaSdTu9TBK2iwADoApEdjY9Kkt9Tjm_DoF2KYNTvFIWgNO5GlABZPWPHY658qTxcggA0vvpzxYpMpol0tKKMsBvv14t1fD96WIU0vH77Tjlup7Pbm-TJ2cyzQEIlGRhdG85eoLM-GTjxqblK4wxMDpCIWDtDAyb_zVdq8MuHW3anaXkB6adGWp9xlHqAM3FbRNIoqmH3e2xOnAIl_mjOPskfLg',
    alt: 'Dr. Nana Mensah'
  },
  gate: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWyCxim_7skt8k31G0IotbuvMRM2YBPGoHvoZYsa25Oh7YjCKOaPB9NbEJlz7absl89QYzqeKxYnR448A6GuD58V-wOmg0TgMyyhDKQx0RuvqJw6XlU06RFl_YO6p1OAhJ8yWUqb6Xir1rbx9sdVdTXXX34sj3lncm3yNoCumK2AKJSnHf-teZ8hmWgZoInrNO2R9DoQfxqZAsqD5baLXIUfUmMaFmvVU0wSaAabCoCC1PDgEeMPJThA',
    alt: 'Officer Emmanuel Tetteh'
  },
  sysadmin: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDficibdtzh0xCg-RYeNu3YjQOB2wMrnGhDiTxfeEkMCvfdTGILXcQePEO7gWXcB0Go5WFlo_hEWJ02SQiIcocAII6hOv3v1Vsp7KFfSldX32a6rzPOlL4ReSyMBYgRP4crioNrulufNiTAaSTQ4t8TQjfTn2QMKIucNdX2AAUv4Tqdihfy2Ta3gZpSWIFxOD5ap0xX9esm5pfkFeCaRACUrCY2TlfFs2xIlboc8vEYjBoZW3eIjBokfQ',
    alt: 'Ing. Kwabena Boateng'
  },
  public: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkWfNsavZrE2q7ehrA64sihUwtmROAw4xXN-C6BlUTPhqxnN--2RN5DRycS1Zzkyt6oCEfdTUfjODz6QYZEv08Q-JAkUc3Av7yS8ahvu_IycCMkJCxx5Dx9PYnuyuHQLKp_OkepCnkvleE-hqHca1ZtXA-REaPgIftK5gPRsomXA64FFaJZFdKmQGy-GEt_k2m5zV-0ASaXXLnRB3Au6F5xwS03ye8IFEGRzgETPCCJ1eKP6QrBZk3BQ',
    alt: 'Carepoint Community School'
  }
};

const brokenUrl = 'https://lh3.googleusercontent.com/aida/AEtjO1UcOOFjMJZVJ59Yh3L8LzZiUZO0hEp_GwwTgvCtTnWZfJagO3-7TaJ4bxUgdy1S0Qh8tAD2MH6qGl39TQi65jkrsFxWRv-PuCoY4nMUoIztIr-M-TCSylx_ZDc-MCAG1QUpd-D-vnuiKsvstaH_9Jq_M2glwv__1QoKqT23MMd4t5D_zr35wty3UKyOV57GvEWnMEmNaQqzHhM6qGSpm3xSDR4xv5NwnsbzLg4MTkwc1oa_otpV5DwCDA_KcraFD6DtOcNBhDHiNQ';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.html')) results.push(file);
  });
  return results;
}

const files = walk('prototype');
let replacedCount = 0;
let placeholderReplaced = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Determine portal role from file path
  let role = 'public';
  if (filePath.includes('sysadmin')) role = 'sysadmin';
  else if (filePath.includes('admin')) role = 'admin';
  else if (filePath.includes('staff')) role = 'staff';
  else if (filePath.includes('parent')) role = 'parent';
  else if (filePath.includes('gate')) role = 'gate';

  const photo = PHOTOS[role] || PHOTOS.admin;

  // 1. Replace broken AIDA URL with the exact role photo
  if (content.includes(brokenUrl)) {
    content = content.replaceAll(brokenUrl, photo.src);
    replacedCount++;
  }

  // 2. Replace empty icon placeholder <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm"><span class="material-symbols-outlined text-on-primary text-[18px]">person</span></div>
  const placeholderRegex = /<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center(?:\s+shadow-sm)?"><span class="material-symbols-outlined text-on-primary text-\[18px\]">person<\/span><\/div>/g;
  if (placeholderRegex.test(content)) {
    const replacementImg = `<img alt="${photo.alt}" class="w-8 h-8 rounded-full object-cover shadow-sm ring-1 ring-outline-variant/30" src="${photo.src}"/>`;
    content = content.replace(placeholderRegex, replacementImg);
    placeholderReplaced++;
  }

  // Also check without shadow-sm
  const placeholderRegex2 = /<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span class="material-symbols-outlined text-on-primary text-\[18px\]">person<\/span><\/div>/g;
  if (placeholderRegex2.test(content)) {
    const replacementImg = `<img alt="${photo.alt}" class="w-8 h-8 rounded-full object-cover shadow-sm ring-1 ring-outline-variant/30" src="${photo.src}"/>`;
    content = content.replace(placeholderRegex2, replacementImg);
    placeholderReplaced++;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated profile photo in: ${filePath} (Role: ${role})`);
  }
});

console.log(`Done! Replaced broken URLs in ${replacedCount} files. Replaced placeholder divs in ${placeholderReplaced} instances.`);
