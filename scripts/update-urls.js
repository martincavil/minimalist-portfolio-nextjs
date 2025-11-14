const fs = require('fs');
const path = require('path');

// Charger le mapping
const mapping = require('../cloudinary-url-mapping.json');

// Ajouter les correspondances .gif -> .mp4
const extendedMapping = { ...mapping };
Object.keys(mapping).forEach(key => {
  if (key.endsWith('.mp4')) {
    const gifKey = key.replace('.mp4', '.gif');
    extendedMapping[gifKey] = mapping[key];
  }
});

// Fichiers à mettre à jour
const filesToUpdate = [
  'data/projects.ts',
  'components/Hero.tsx',
  'components/About.tsx',
];

console.log('🔄 Starting URL replacement...\n');

filesToUpdate.forEach(relativePath => {
  const filePath = path.join(process.cwd(), relativePath);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${relativePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changeCount = 0;

  // Remplacer chaque URL locale par son équivalent Cloudinary
  Object.keys(extendedMapping).forEach(localUrl => {
    const cloudinaryUrl = extendedMapping[localUrl];
    const regex = new RegExp(localUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);

    if (matches) {
      content = content.replace(regex, cloudinaryUrl);
      changeCount += matches.length;
    }
  });

  if (changeCount > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${relativePath}: ${changeCount} URL(s) replaced`);
  } else {
    console.log(`ℹ️  No changes needed in ${relativePath}`);
  }
});

console.log('\n✨ URL replacement completed!');
