const cloudinary = require('cloudinary').v2;

// Configuration Cloudinary
cloudinary.config({
  cloud_name: 'martincvl',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadVideo() {
  try {
    console.log('⬆️  Uploading pharmexecutive.mp4 to Cloudinary...');

    const result = await cloudinary.uploader.upload(
      'public/images/projects/pharmExecutive/pharmexecutive.mp4',
      {
        public_id: 'portfolio/projects/pharmExecutive/pharmexecutive',
        folder: '',
        resource_type: 'video',
        overwrite: true
      }
    );

    console.log('✅ Upload successful!');
    console.log('URL:', result.secure_url);

    return result.secure_url;
  } catch (error) {
    console.error('❌ Error uploading video:', error.message);
    throw error;
  }
}

uploadVideo().catch(console.error);
