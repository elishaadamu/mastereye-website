import { getSortedPostsData } from '@/lib/posts';
import { GridBackground } from "@/components/GridBackground";
import { BlogGrid } from "@/components/BlogGrid";

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <GridBackground>
      <div className="pt-32 pb-24">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-24">
          <div>
            <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Security Intelligence</span>
            <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-7xl mb-8">
              Expert <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends in surveillance, manned guarding, and corporate security strategies.
            </p>
          </div>
        </div>

        {/* Blog Grid Client Component */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogGrid posts={allPostsData} />
        </div>
      </div>
    </GridBackground>
  );
}
