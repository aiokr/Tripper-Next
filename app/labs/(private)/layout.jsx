import Link from 'next/link';
export default function PrivateLabs({ children }) {
  return (
    <>
      {
        process.env.DEP_ENV ? (
          <>{ children }</>
        ) : (
          <div className="container p-20 text-center text-lg">Tern To <Link href='https://next.tripper.press' target='_blank' className='text-bold text-main'>NEXT.TRIPPER.PRESS</Link> and Login by Vercel</div>
        )
      }
    </>
  )
}
