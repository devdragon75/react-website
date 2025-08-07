const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  inputDir: 'public/images',
  outputDir: 'public/images-optimized',
  quality: 80,
  maxWidth: 1920,
  maxHeight: 1080,
  formats: ['webp', 'jpeg']
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Function to process a single image
async function optimizeImage(inputPath, outputPath, format) {
  try {
    let pipeline = sharp(inputPath);
    
    // Resize if needed
    const metadata = await pipeline.metadata();
    if (metadata.width > config.maxWidth || metadata.height > config.maxHeight) {
      pipeline = pipeline.resize(config.maxWidth, config.maxHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Apply format-specific optimizations
    if (format === 'webp') {
      pipeline = pipeline.webp({ quality: config.quality });
    } else if (format === 'jpeg') {
      pipeline = pipeline.jpeg({ 
        quality: config.quality,
        progressive: true,
        mozjpeg: true
      });
    }
    
    // Save optimized image
    await pipeline.toFile(outputPath);
    console.log(`✅ Optimized: ${inputPath} → ${outputPath}`);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`   Size: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

// Function to process all images in a directory
async function processDirectory(inputDir, outputDir) {
  const items = fs.readdirSync(inputDir);
  
  for (const item of items) {
    const inputPath = path.join(inputDir, item);
    const outputPath = path.join(outputDir, item);
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) {
      // Create subdirectory in output
      const subOutputDir = path.join(outputDir, item);
      if (!fs.existsSync(subOutputDir)) {
        fs.mkdirSync(subOutputDir, { recursive: true });
      }
      await processDirectory(inputPath, subOutputDir);
    } else if (stat.isFile()) {
      // Check if it's an image file
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].includes(ext)) {
        // Create output directory if it doesn't exist
        const outputDirPath = path.dirname(outputPath);
        if (!fs.existsSync(outputDirPath)) {
          fs.mkdirSync(outputDirPath, { recursive: true });
        }
        
        // Process image in multiple formats
        for (const format of config.formats) {
          const formatExt = format === 'webp' ? '.webp' : '.jpg';
          const formatOutputPath = outputPath.replace(/\.[^/.]+$/, formatExt);
          
          await optimizeImage(inputPath, formatOutputPath, format);
        }
      } else {
        // Copy non-image files as-is
        fs.copyFileSync(inputPath, outputPath);
        console.log(`📁 Copied: ${inputPath} → ${outputPath}`);
      }
    }
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting image optimization...');
  console.log(`📁 Input: ${config.inputDir}`);
  console.log(`📁 Output: ${config.outputDir}`);
  console.log(`⚙️  Quality: ${config.quality}%`);
  console.log(`📏 Max size: ${config.maxWidth}x${config.maxHeight}`);
  console.log(`🖼️  Formats: ${config.formats.join(', ')}`);
  console.log('---');
  
  const startTime = Date.now();
  
  try {
    await processDirectory(config.inputDir, config.outputDir);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log('---');
    console.log(`✅ Image optimization completed in ${duration}s`);
    console.log(`📁 Optimized images saved to: ${config.outputDir}`);
    console.log('💡 Replace your images folder with the optimized version for smaller build size!');
    
  } catch (error) {
    console.error('❌ Optimization failed:', error);
    process.exit(1);
  }
}

// Run the script
main(); 