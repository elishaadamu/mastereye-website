import { getSortedPostsData } from '@/lib/posts';
import { GridBackground } from '@/components/GridBackground';
import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { BoardMembers } from '@/components/BoardMembers';
import { ServicesSection } from '@/components/ServicesSection';
import { ClientsSection } from '@/components/ClientsSection';
import { MapSection } from '@/components/MapSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogTeaser } from '@/components/BlogTeaser';
import { TopBanner } from '@/components/TopBanner';

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 3);

  return (
    <GridBackground>
      
      <Hero />
      <StatsSection />
      <WhyChooseUs />
      <ServicesSection />
      <ClientsSection />
      <TestimonialsSection />
      <BoardMembers />
      <MapSection />
      <BlogTeaser posts={allPostsData} />
    </GridBackground>
  );
}
