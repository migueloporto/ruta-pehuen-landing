const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../src/assets/gallery');

async function optimizeImages() {
    console.log('Optimizing images in:', galleryDir);

    try {
        const files = fs.readdirSync(galleryDir);

        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                const filePath = path.join(galleryDir, file);
                const filename = path.parse(file).name;
                const outputPath = path.join(galleryDir, `${filename}.webp`);

                console.log(`Processing ${file}...`);

                await sharp(filePath)
                    .resize(1600, 1600, { // Max width/height 1600px, maintaining aspect ratio
                        fit: 'inside',
                        withoutEnlargement: true
                    })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                const originalSize = fs.statSync(filePath).size;
                const newSize = fs.statSync(outputPath).size;

                console.log(`✓ Converted to WebP: ${(newSize / 1024).toFixed(2)} KB (was ${(originalSize / 1024 / 1024).toFixed(2)} MB)`);

                // Delete original file
                fs.unlinkSync(filePath);
            }
        }

        console.log('All images optimized!');
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages();
