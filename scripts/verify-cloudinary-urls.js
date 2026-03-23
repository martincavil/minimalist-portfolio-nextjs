const https = require('https');

const urls = [
  // Maison Du Temps
  "https://res.cloudinary.com/martincvl/image/upload/v1763147434/portfolio/projects/maisondutemps/cover.webp",
  "https://res.cloudinary.com/martincvl/video/upload/v1763147438/portfolio/projects/maisondutemps/maisondutemps.mp4",

  // Uptoo
  "https://res.cloudinary.com/martincvl/image/upload/v1763147456/portfolio/projects/uptoo/cover.webp",
  "https://res.cloudinary.com/martincvl/video/upload/v1763147461/portfolio/projects/uptoo/uptoo.mp4",
  "https://res.cloudinary.com/martincvl/image/upload/v1763147456/portfolio/projects/uptoo/uptoo-1.webp",
  "https://res.cloudinary.com/martincvl/image/upload/v1763147459/portfolio/projects/uptoo/uptoo-4.webp",
  "https://res.cloudinary.com/martincvl/image/upload/v1763147457/portfolio/projects/uptoo/uptoo-2.webp",
  "https://res.cloudinary.com/martincvl/image/upload/v1763147458/portfolio/projects/uptoo/uptoo-3.webp",

  // Padel15
  "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/cover.webp",
  "https://res.cloudinary.com/martincvl/video/upload/v1763147447/portfolio/projects/padel15/padel15.mp4",
  "https://res.cloudinary.com/martincvl/image/upload/v1763147441/portfolio/projects/padel15/padel15-1.webp",
  "https://res.cloudinary.com/martincvl/image/upload/v1763147443/portfolio/projects/padel15/padel15-2.webp",
  "https://res.cloudinary.com/martincvl/image/upload/v1763147444/portfolio/projects/padel15/padel15-3.webp",

  // Les Yeux Détectives
  "https://res.cloudinary.com/martincvl/image/upload/v1763147430/portfolio/projects/les-yeux-detectives/cover.webp",
  "https://res.cloudinary.com/martincvl/video/upload/v1763147432/portfolio/projects/les-yeux-detectives/les-yeux-detectives.mp4",

  // PharmExecutive
  "https://res.cloudinary.com/martincvl/image/upload/v1763147451/portfolio/projects/pharmExecutive/cover.webp",
  "https://res.cloudinary.com/martincvl/video/upload/v1763147452/portfolio/projects/pharmExecutive/pharmexecutive.mp4",
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { method: 'HEAD' }, (res) => {
      const status = res.statusCode === 200 ? '✅' : '❌';
      const fileName = url.split('/').pop();
      console.log(`${status} ${res.statusCode} - ${fileName}`);
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      const fileName = url.split('/').pop();
      console.log(`❌ ERROR - ${fileName}: ${err.message}`);
      resolve({ url, status: 'error', error: err.message });
    });
  });
}

async function main() {
  console.log('🔍 Checking Cloudinary URLs...\n');

  const results = await Promise.all(urls.map(checkUrl));

  const working = results.filter(r => r.status === 200).length;
  const total = results.length;

  console.log(`\n📊 Summary: ${working}/${total} URLs are working`);

  const broken = results.filter(r => r.status !== 200);
  if (broken.length > 0) {
    console.log('\n❌ Broken URLs:');
    broken.forEach(r => console.log(`  - ${r.url}`));
  }
}

main().catch(console.error);
