import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/posts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';

  if (!q) {
    return NextResponse.json([]);
  }

  // Define static pages and links to index
  const staticPages = [
    { title: 'Home', content: 'Master Eye Security Services Limited homepage. Professional security solutions in Nigeria.', url: '/' },
    { title: 'About Us', content: 'Learn about our mission, vision, and the leadership team behind Master Eye Security.', url: '/about' },
    { title: 'Services', content: 'Our security pillars: Manned Guarding, Electronic Surveillance, K9 Services, and Training.', url: '/services' },
    { title: 'Contact', content: 'Get in touch with our head office in Abuja. Request a quote or inquire about services.', url: '/contact' },
    { title: 'Blog', content: 'Latest security insights, case studies, and intelligence reports.', url: '/blog' },
    { title: 'Careers', content: 'Join the Master Eye team. Professional security career opportunities.', url: 'https://mastereyesecurityserviceslimited.000webhostapp.com/' },
  ];

  const posts = getSortedPostsData();
  
  // Search static pages
  const pageResults = staticPages
    .filter(page => 
      page.title.toLowerCase().includes(q) || 
      page.content.toLowerCase().includes(q)
    )
    .map(page => ({
      type: 'page',
      url: page.url,
      title: page.title,
      content: page.content
    }));

  // Search blog posts
  const blogResults = posts
    .filter(post => 
      (post.title && post.title.toLowerCase().includes(q)) || 
      (post.content && post.content.toLowerCase().includes(q)) ||
      (post.categories && post.categories.some((c: string) => c.toLowerCase().includes(q)))
    )
    .map((post) => ({
      type: 'blog',
      url: `/blog/${post.slug}`,
      title: post.title,
      content: post.content.substring(0, 150).replace(/[#*`_\[\]()]/g, '') + '...' 
    }));

  // Combine and return results
  const results = [...pageResults, ...blogResults];

  return NextResponse.json(results);
}
