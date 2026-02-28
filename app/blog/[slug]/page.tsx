import { getPostData, getSortedPostsData } from '@/lib/posts';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { Calendar, ChevronLeft, BookmarkCheck, User, Share2, Printer, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { GridBackground } from "@/components/GridBackground";

// Generate static params so the dynamic routing works efficiently at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <GridBackground>
      <article className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-12">
             <Link href="/blog" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-all">
                   <ChevronLeft className="h-4 w-4" />
                </div>
                Back to intelligence
             </Link>
          </div>

          {/* Header */}
          <header className="mb-16">
            <div className="flex items-center gap-x-6 text-[10px] mb-8 font-black uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                <time dateTime={postData.date}>
                  {new Date(postData.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="h-3 w-px bg-border" />
              {postData.categories && postData.categories.map((cat: string) => (
                <div key={cat} className="flex items-center gap-2 text-secondary">
                  <BookmarkCheck className="h-3.5 w-3.5" />
                  {cat}
                </div>
              ))}
            </div>
            
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-6xl mb-12 leading-[1.1]">
              {postData.title}
            </h1>

            {/* Author / Metadata Bar */}
            <div className="flex items-center justify-between py-6 border-y border-border/40 mb-12">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-foreground">MESSL Personnel</p>
                    <p className="text-[10px] text-muted-foreground font-bold">Security Analysis Team</p>
                  </div>
               </div>
               <div className="hidden sm:flex items-center gap-3">
                  <button className="p-2.5 rounded-xl bg-muted/30 border border-border/50 text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-xl bg-muted/30 border border-border/50 text-muted-foreground hover:text-primary transition-colors">
                    <Printer className="w-4 h-4" />
                  </button>
               </div>
            </div>

            {postData.image && (
               <div className="rounded-[3rem] overflow-hidden w-full aspect-video relative shadow-2xl shadow-primary/10 border border-border/50 ring-4 ring-primary/5">
                  <img 
                      src={postData.image} 
                      alt={postData.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                  />
               </div>
            )}
          </header>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-blue prose-lg dark:prose-invert max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-medium
              prose-strong:text-foreground prose-strong:font-black
              prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:not-italic
              prose-img:rounded-[2rem] prose-img:border prose-img:border-border/50
              prose-li:text-muted-foreground prose-li:font-medium
              ">
              <ReactMarkdown>
                {postData.content}
              </ReactMarkdown>
            </div>

            {/* Article Footer */}
            <div className="mt-20 pt-10 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-8">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-5 h-5 text-primary" />
                 <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">End of Analysis</span>
               </div>
               <Link href="/blog" className="text-sm font-black uppercase tracking-[0.2em] text-primary hover:tracking-[0.3em] transition-all">
                 Read more insights
               </Link>
            </div>
          </div>
        </div>
      </article>
    </GridBackground>
  );
}
