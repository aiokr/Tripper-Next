import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

const image = fetch(new URL('/public/icon.png', import.meta.url)).then((res) =>
  res.arrayBuffer(),
);

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const hasSubTitle = searchParams.has('subtitle');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 96)
      : 'Default title';
    const subTitle = hasSubTitle
      ? searchParams.get('subtitle')?.slice(0, 96)
      : 'Tripper Press - 按下瞬间';
      

    const imageData = await image;
    return new ImageResponse(
      (
        <div
          tw='p-24'
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #9DCBEE, #71AFDD)',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            color: 'white',
            fontFamily: 'sans',
          }}
        >
          <img width="64" height="64" src={imageData} />
          <div tw='text-4xl pt-6' style={{ fontWeight: '800' }} lang="zh-CN">{title}</div>
          <div tw='text-2xl pt-4' lang="zh-CN">{subTitle}</div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      },
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}