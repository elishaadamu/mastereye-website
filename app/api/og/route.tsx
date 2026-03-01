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
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid #3b82f6',
            borderRadius: '24px',
            padding: '40px',
            backgroundColor: '#020617',
            width: '90%',
            height: '85%',
            textAlign: 'center',
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
