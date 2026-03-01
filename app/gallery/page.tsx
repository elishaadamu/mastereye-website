import { getGalleryImages } from '@/lib/gallery';
import GalleryView from '@/components/GalleryView';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GalleryPage() {
  const images = getGalleryImages();
  
  return <GalleryView images={images} />;
}
