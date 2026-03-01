import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Dynamic params for headline and call to action
  const title = searchParams.get('title') || 'Top-Tier Expert Security Services in Nigeria';
  const cta = searchParams.get('cta') || 'Protect Your Business Today \u2192';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a192f',
          backgroundImage: 'linear-gradient(to bottom right, #050c18, #0f2b56)',
          color: 'white',
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(59, 130, 246, 0.5)',
            borderRadius: '24px',
            padding: '40px',
            backgroundColor: 'rgba(2, 6, 23, 0.6)',
            width: '90%',
            height: '85%',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ fontSize: 32, color: '#60a5fa', marginBottom: 20, fontWeight: 'bold', letterSpacing: '0.1em' }}>
            MASTER EYE SECURITY
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 50,
              maxWidth: '900px',
              textShadow: '0 4px 10px rgba(0,0,0,0.5)',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 36,
              backgroundColor: '#2563eb',
              padding: '24px 48px',
              borderRadius: '16px',
              fontWeight: 'bold',
              border: '2px solid #3b82f6',
              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.4)',
              color: '#ffffff',
            }}
          >
            {cta}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
