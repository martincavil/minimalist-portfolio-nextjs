const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Configuration Cloudinary
cloudinary.config({
  cloud_name: 'martincvl',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Mapping des images restantes à uploader
const imagesToUpload = [
  // Maison Du Temps
  {
    local: 'public/images/projects/maisondutemps/maisondutemps-1.webp',
    cloudinary: 'portfolio/projects/maisondutemps/maisondutemps-1'
  },
  {
    local: 'public/images/projects/maisondutemps/maisondutemps-2.webp',
    cloudinary: 'portfolio/projects/maisondutemps/maisondutemps-2'
  },
  {
    local: 'public/images/projects/maisondutemps/maisondutemps-3.webp',
    cloudinary: 'portfolio/projects/maisondutemps/maisondutemps-3'
  },
  // Padel15
  {
    local: 'public/images/projects/padel15/padel15-1.webp',
    cloudinary: 'portfolio/projects/padel15/padel15-1'
  },
  {
    local: 'public/images/projects/padel15/padel15-2.webp',
    cloudinary: 'portfolio/projects/padel15/padel15-2'
  },
  {
    local: 'public/images/projects/padel15/padel15-3.webp',
    cloudinary: 'portfolio/projects/padel15/padel15-3'
  },
  // Les Yeux Détectives
  {
    local: 'public/images/projects/les-yeux-detectives/les-yeux-detectives-1.webp',
    cloudinary: 'portfolio/projects/les-yeux-detectives/les-yeux-detectives-1'
  },
  {
    local: 'public/images/projects/les-yeux-detectives/les-yeux-detectives-2.webp',
    cloudinary: 'portfolio/projects/les-yeux-detectives/les-yeux-detectives-2'
  },
  {
    local: 'public/images/projects/les-yeux-detectives/les-yeux-detectives-3.webp',
    cloudinary: 'portfolio/projects/les-yeux-detectives/les-yeux-detectives-3'
  },
  // PharmExecutive
  {
    local: 'public/images/projects/pharmExecutive/pharmExecutive-1.webp',
    cloudinary: 'portfolio/projects/pharmExecutive/pharmExecutive-1'
  },
  {
    local: 'public/images/projects/pharmExecutive/pharmExecutive-2.webp',
    cloudinary: 'portfolio/projects/pharmExecutive/pharmExecutive-2'
  },
  {
    local: 'public/images/projects/pharmExecutive/pharmExecutive-3.webp',
    cloudinary: 'portfolio/projects/pharmExecutive/pharmExecutive-3'
  }
];

async function uploadImage(localPath, cloudinaryPath) {
  const fullPath = path.join(process.cwd(), localPath);

  // Vérifier si le fichier existe
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${localPath}`);
    return null;
  }

  try {
    console.log(`⬆️  Uploading: ${localPath}`);
    const result = await cloudinary.uploader.upload(fullPath, {
      public_id: cloudinaryPath,
      folder: '',
      resource_type: 'image',
      overwrite: true
    });
    console.log(`✅ Uploaded: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`❌ Error uploading ${localPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image upload to Cloudinary...\n');

  const results = {};

  for (const image of imagesToUpload) {
    const url = await uploadImage(image.local, image.cloudinary);
    if (url) {
      results[image.local] = url;
    }
  }

  console.log('\n📊 Upload Summary:');
  console.log(`✅ Successfully uploaded: ${Object.keys(results).length}/${imagesToUpload.length} images`);

  console.log('\n📝 Cloudinary URLs:');
  Object.entries(results).forEach(([local, url]) => {
    console.log(`${local} → ${url}`);
  });

  // Sauvegarder les résultats dans un fichier JSON
  fs.writeFileSync(
    'cloudinary-urls.json',
    JSON.stringify(results, null, 2)
  );
  console.log('\n💾 URLs saved to cloudinary-urls.json');
}

main().catch(console.error);
