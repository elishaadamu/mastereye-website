import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { Facebook, Linkedin, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TopBanner } from '@/components/TopBanner';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mastereyesecurityservicesltd.com.ng'),
  title: {
    default: 'Master Eye Security | Top Security Services in Nigeria',
    template: '%s | Master Eye Security'
  },
  description: 'Master Eye Security provides professional manned guarding, advanced surveillance, and specialized K9 security solutions across Nigeria.',
  keywords: ['security services Nigeria', 'manned guarding Abuja', 'CCTV installation Nigeria', 'k9 security services', 'private security firm Nigeria', 'Master Eye Security', 'industrial security'],
  authors: [{ name: 'Master Eye Security Services Limited' }],
  creator: 'Master Eye Security Services Limited',
  publisher: 'Master Eye Security Services Limited',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://mastereyesecurityservicesltd.com.ng',
    title: 'Master Eye Security | Top Security Services in Nigeria',
    description: 'Master Eye Security provides professional manned guarding, advanced surveillance, and specialized K9 security solutions across Nigeria.',
    siteName: 'Master Eye Security',
    images: [{
      url: 'https://mastereyesecurityservicesltd.com.ng/assets/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Master Eye Security Services Logo'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Master Eye Security | Top Security Services in Nigeria',
    description: 'Master Eye Security provides professional manned guarding, advanced surveillance, and specialized K9 security solutions across Nigeria.',
    images: ['https://mastereyesecurityservicesltd.com.ng/assets/images/og-image.jpg'],
  },
  verification: {
    google: "MuGZ3WfhP_P7vcCAiL6yIPC183_id9zTZP607zu_YM0",
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
    <html lang="en" suppressHydrationWarning> 
      <head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-HDLVSNJ2SP" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-HDLVSNJ2SP');
          `}
        </Script>
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
