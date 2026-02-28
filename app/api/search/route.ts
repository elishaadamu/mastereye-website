import { NextResponse } from 'next/server';
import { getSortedPostsData } from '@/lib/posts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';

  const posts = getSortedPostsData();
  
  if (!q) {
    return NextResponse.json([]);
  }

  // Filter posts based on query matching title, content, or categories
  const results = posts.filter(post => 
    (post.title && post.title.toLowerCase().includes(q)) || 
    (post.content && post.content.toLowerCase().includes(q)) ||
    (post.categories && post.categories.some((c: string) => c.toLowerCase().includes(q)))
  ).map((post) => ({
    slug: post.slug,
    title: post.title,
    // Return a clean snippet of the content for the search preview
    content: post.content.substring(0, 150).replace(/[#*`_\[\]()]/g, '') + '...' 
  }));

  return NextResponse.json(results);
}
