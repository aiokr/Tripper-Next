import { SignUp } from '@clerk/nextjs'


export default function Page() {
  return (
    <main className='flex justify-center items-center h-[calc(100vh-240px)]'>
      <SignUp />
    </main>
  )
}