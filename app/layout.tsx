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
  title: {
    default: 'Master Eye Security Services Limited | Professional Security Nigeria',
    template: '%s | Master Eye Security'
  },
  description: 'Master Eye Security Services Limited provides state-of-the-art security solutions across Nigeria, including manned guarding, electronic surveillance, k9 services, and professional security training. RC: 1530932.',
  keywords: ['security services Nigeria', 'manned guarding Abuja', 'CCTV installation Nigeria', 'k9 security services', 'private security firm Nigeria', 'Master Eye Security', 'industrial security'],
  authors: [{ name: 'Master Eye Security Services Limited' }],
  creator: 'Master Eye Security Services Limited',
  publisher: 'Master Eye Security Services Limited',
  icons: {
    icon: '/assets/images/IMG-20230221-WA0004.jpg',
    shortcut: '/assets/images/IMG-20230221-WA0004.jpg',
    apple: '/assets/images/IMG-20230221-WA0004.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://mastereyesecurity.com.ng',
    title: 'Master Eye Security Services Limited | Elite Security Solutions',
    description: 'Expert security services in Nigeria featuring professional personnel and advanced surveillance technology.',
    siteName: 'Master Eye Security',
    images: [{
      url: '/assets/images/Security-Technology-scaled.jpeg',
      width: 1200,
      height: 630,
      alt: 'Master Eye Security Surveillance Technology'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Eye Security Services Limited',
    description: 'Professional security solutions and state-of-the-art surveillance in Nigeria.',
    images: ['/assets/images/Security-Technology-scaled.jpeg'],
  }
};

import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <head>
        <link rel="icon" href="/assets/images/IMG-20230221-WA0004.jpg" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/IMG-20230221-WA0004.jpg" />
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
