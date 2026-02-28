"use client";
import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, FileText, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle click outside to close the modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key to close the modal
  useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
     };
     window.addEventListener('keydown', handleKeyDown);
     return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch search results automatically with a debounce
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 400); // 400ms debounce
    
    return () => clearTimeout(timer);
  }, [query]);

  // Lock body scrolling when modal is open
  useEffect(() => {
      if (isOpen) {
          document.body.style.overflow = 'hidden';
      } else {
           document.body.style.overflow = '';
           setQuery(''); // Reset query when closed
      }
      return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center text-slate-500 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search"
      >
        <SearchIcon className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-24 sm:pt-32 bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            ref={modalRef}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-slate-200 animate-in slide-in-from-top-4 duration-300 transform"
          >
            {/* Search Input Area */}
            <div className="relative border-b border-slate-200 flex items-center px-4 bg-slate-50/50">
              <SearchIcon className="w-5 h-5 text-slate-400 shrink-0" />
              <input 
                autoFocus
                type="text" 
                className="w-full py-5 px-4 text-lg bg-transparent border-0 focus:ring-0 placeholder-slate-400 text-slate-900 outline-none"
                placeholder="Search blog posts, guides, and services..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors shrink-0 focus:outline-none"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close search</span>
              </button>
            </div>

            {/* Results Area */}
            {query && (
              <div className="overflow-y-auto p-2 bg-white flex-1 relative min-h-[150px]">
                {loading ? (
                   <div className="flex flex-col items-center justify-center py-10 text-slate-500">
                      <Loader2 className="w-6 h-6 animate-spin mb-2" />
                      <p className="text-sm">Searching our knowledgebase...</p>
                   </div>
                ) : results.length > 0 ? (
                  <ul className="space-y-1">
                    {results.map((post) => (
                      <li key={post.slug}>
                        <Link 
                          href={`/blog/${post.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-100"
                        >
                          <div className="w-10 h-10 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                               {post.title}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                               {post.content}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="py-14 text-center">
                    <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                       <SearchIcon className="w-6 h-6" />
                    </div>
                     <p className="text-slate-900 font-medium">No results found</p>
                     <p className="text-slate-500 text-sm mt-1">We couldn't find anything matching "{query}"</p>
                  </div>
                )}
              </div>
            )}
            
            {!query && (
               <div className="p-8 text-center bg-white flex flex-col items-center justify-center text-slate-500">
                  <SearchIcon className="w-8 h-8 text-slate-300 mb-3" />
                  <p className="text-sm">Type anything to quickly find blog posts and security resources.</p>
               </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
