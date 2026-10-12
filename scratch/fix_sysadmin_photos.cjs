const fs = require('fs');

const adminPhoto = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkWfNsavZrE2q7ehrA64sihUwtmROAw4xXN-C6BlUTPhqxnN--2RN5DRycS1Zzkyt6oCEfdTUfjODz6QYZEv08Q-JAkUc3Av7yS8ahvu_IycCMkJCxx5Dx9PYnuyuHQLKp_OkepCnkvleE-hqHca1ZtXA-REaPgIftK5gPRsomXA64FFaJZFdKmQGy-GEt_k2m5zV-0ASaXXLnRB3Au6F5xwS03ye8IFEGRzgETPCCJ1eKP6QrBZk3BQ';
const sysadminPhoto = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDficibdtzh0xCg-RYeNu3YjQOB2wMrnGhDiTxfeEkMCvfdTGILXcQePEO7gWXcB0Go5WFlo_hEWJ02SQiIcocAII6hOv3v1Vsp7KFfSldX32a6rzPOlL4ReSyMBYgRP4crioNrulufNiTAaSTQ4t8TQjfTn2QMKIucNdX2AAUv4Tqdihfy2Ta3gZpSWIFxOD5ap0xX9esm5pfkFeCaRACUrCY2TlfFs2xIlboc8vEYjBoZW3eIjBokfQ';

const sysFiles = fs.readdirSync('prototype/sysadmin').filter(f => f.endsWith('.html'));
sysFiles.forEach(f => {
  const p = 'prototype/sysadmin/' + f;
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes(adminPhoto)) {
    c = c.replaceAll(adminPhoto, sysadminPhoto);
    c = c.replaceAll('alt="Dr. Elizabeth Appiah"', 'alt="Ing. Kwabena Boateng"');
    fs.writeFileSync(p, c, 'utf8');
    console.log('Fixed sysadmin photo in:', p);
  }
});
console.log('Sysadmin photo replacement complete.');
