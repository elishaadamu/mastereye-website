import fs from 'fs';
import path from 'path';

export interface GalleryImage {
  src: string;
  alt: string;
  span?: string;
}

export function getGalleryImages(): GalleryImage[] {
  const galleryDir = path.join(process.cwd(), 'public', 'assets', 'gallery');
  let files: string[] = [];
  
  try {
    if (fs.existsSync(galleryDir)) {
      files = fs.readdirSync(galleryDir);
    }
  } catch (error) {
    console.error('Error reading gallery directory:', error);
  }

  // Filter for image files
  const imageFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg') || 
    file.toLowerCase().endsWith('.png') || 
    file.toLowerCase().endsWith('.webp') ||
    file.toLowerCase().endsWith('.gif')
  );

  return imageFiles.map((file, index) => {
    // Make every 5th image span wider/taller, just like a masonry grid
    let span = "col-span-1";
    if (index % 5 === 0) {
      span = "md:col-span-2 md:row-span-2";
    }

    // Convert filename to readable alt text
    const alt = file
      .replace(/\.[^/.]+$/, "") // remove extension
      .replace(/[-_]/g, " ")    // replace dashes and underscores with space
      .replace(/\d+/g, "")      // remove numbers optionally, wait - better to keep them if they name them specifically
      .trim() || "Gallery Image";

    return {
      src: `/assets/gallery/${file}`,
      alt: alt,
      span: span
    };
  });
}
