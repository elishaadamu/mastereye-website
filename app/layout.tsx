import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Facebook, Linkedin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TopBanner } from '@/components/TopBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Master Eye Security',
  description: 'Your trusted partner in state-of-the-art security solutions.',
};

import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground selection:bg-blue-600/30 font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
         <div className='hidden md:block'>
                       <TopBanner />
         
               </div>
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />

        <Script id="netlify-identity-script" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
