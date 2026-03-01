import dynamic from 'next/dynamic';
import { getSortedPostsData } from '@/lib/posts';
import { getGalleryImages } from '@/lib/gallery';
import { GridBackground } from '@/components/GridBackground';
import { Hero } from '@/components/Hero';

// Dynamic imports for below-the-fold components
const StatsSection = dynamic(() => import('@/components/StatsSection').then(mod => mod.StatsSection), { ssr: true });
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs').then(mod => mod.WhyChooseUs), { ssr: true });
const BoardMembers = dynamic(() => import('@/components/BoardMembers').then(mod => mod.BoardMembers), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/ServicesSection').then(mod => mod.ServicesSection), { ssr: true });
const ClientsSection = dynamic(() => import('@/components/ClientsSection').then(mod => mod.ClientsSection), { ssr: true });
const MapSection = dynamic(() => import('@/components/MapSection').then(mod => mod.MapSection), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection').then(mod => mod.TestimonialsSection), { ssr: true });
const ReviewPlatformsSection = dynamic(() => import('@/components/ReviewPlatformsSection').then(mod => mod.ReviewPlatformsSection), { ssr: true });
const GallerySection = dynamic(() => import('@/components/GallerySection').then(mod => mod.GallerySection), { ssr: true });
const BlogTeaser = dynamic(() => import('@/components/BlogTeaser').then(mod => mod.BlogTeaser), { ssr: true });

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 3);
  const galleryImages = getGalleryImages().slice(0, 4);

  return (
    <GridBackground>
      
      <Hero />
      <StatsSection />
      <WhyChooseUs />
      <ServicesSection />
      <ClientsSection />
      <TestimonialsSection />
      <ReviewPlatformsSection />
      <BoardMembers />
      <GallerySection images={galleryImages} />
      <MapSection />
      <BlogTeaser posts={allPostsData} />
    </GridBackground>
  );
}
