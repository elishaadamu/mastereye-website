'use client';

// global-error must include html and body tags
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center" aria-labelledby="error-heading">
          <div className="max-w-md w-full bg-card border border-primary/20 p-8 rounded-3xl shadow-xl shadow-primary/5">
            <h1 id="error-heading" className="text-4xl font-black text-foreground mb-4">Something went wrong</h1>
            <p className="text-muted-foreground mb-8">
              A critical error occurred while trying to render this page. Our team has been notified.
            </p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest text-sm"
              aria-label="Try to recover from the error"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
