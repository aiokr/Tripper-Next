import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: '#71afdd',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Tripper Press
      </div>
    ),
    {
      width: 600,
      height: 600,
    },
  );
}