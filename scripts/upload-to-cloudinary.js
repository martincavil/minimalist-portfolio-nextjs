const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Configuration Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'martincvl',
  api_key: process.env.CLOUDINARY_API_KEY || '729687345468923',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'Mgg1WHeprwwH2JzOdDveSnoLIwM'
});

// Mapping pour stocker les URLs
const urlMapping = {};

// Fonction pour lister tous les fichiers récursivement
async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await readdir(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      arrayOfFiles = await getAllFiles(filePath, arrayOfFiles);
    } else {
      // Filtrer seulement les images et vidéos (mp4 au lieu de gif maintenant)
      if (/\.(png|jpg|jpeg|webp|mp4|mov)$/i.test(file)) {
        arrayOfFiles.push(filePath);
      }
    }
  }

  return arrayOfFiles;
}

// Fonction pour uploader un fichier
async function uploadFile(filePath) {
  try {
    // Créer un chemin relatif pour garder la structure
    const relativePath = filePath.replace(/.*\/public\/images\//, '');
    const publicId = relativePath.replace(/\.[^/.]+$/, ''); // Enlever l'extension

    // Vérifier la taille du fichier
    const fileStat = await stat(filePath);
    const fileSizeMB = fileStat.size / (1024 * 1024);

    console.log(`📤 Uploading: ${relativePath} (${fileSizeMB.toFixed(2)} MB)...`);

    // Pour les gros fichiers, utiliser l'upload chunked
    const uploadOptions = {
      public_id: publicId,
      folder: 'portfolio',
      resource_type: 'auto',
      overwrite: true
    };

    // Si le fichier est > 10MB, utiliser chunk_size
    if (fileStat.size > 10 * 1024 * 1024) {
      uploadOptions.chunk_size = 6000000; // 6MB chunks
    }

    const result = await cloudinary.uploader.upload(filePath, uploadOptions);

    // Stocker le mapping avec le chemin relatif correct
    const originalUrl = `/images/${relativePath}`;
    const cleanOriginalUrl = originalUrl.replace(/\/+/g, '/'); // Nettoyer les doubles slashes
    urlMapping[cleanOriginalUrl] = result.secure_url;

    console.log(`✅ Uploaded: ${relativePath}`);
    console.log(`   URL: ${result.secure_url}`);

    return result;
  } catch (error) {
    console.error(`❌ Error uploading ${filePath}:`, error.message);
    throw error;
  }
}

// Fonction principale
async function main() {
  try {
    console.log('🚀 Starting Cloudinary migration...\n');

    const imagesDir = path.join(process.cwd(), 'public', 'images');
    const files = await getAllFiles(imagesDir);

    console.log(`📁 Found ${files.length} media files to upload\n`);

    // Upload tous les fichiers
    for (const file of files) {
      await uploadFile(file);
      console.log(''); // Ligne vide pour la lisibilité
    }

    // Sauvegarder le mapping dans un fichier JSON
    const mappingPath = path.join(process.cwd(), 'cloudinary-url-mapping.json');
    fs.writeFileSync(mappingPath, JSON.stringify(urlMapping, null, 2));

    console.log('✨ Migration completed!');
    console.log(`📝 URL mapping saved to: cloudinary-url-mapping.json`);
    console.log(`\n📊 Total files uploaded: ${files.length}`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Exécuter
main();
