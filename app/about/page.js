import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="container max-w-[800px]">
      <div className='grid grid-cols-12 gap-6'>
        <div className='lg:col-span-2'></div>
        <div className='col-span-8 lg:col-span-10 pt-[65px]'>
          <div className='text-[48px] font-[500] leading-[60px]'>Hey,</div>
          <div className='text-[48px] font-[500] leading-[60px]'>I am aiokr</div>
          <div className='py-4'>Always a student / Photographer / Blogger</div>
        </div>
      </div>
      <Image
        src="https://imgur.lzmun.com/picgo/after2022/202209101335136.png_avatar"
        alt="Picture of the author"
        className='center pt-12'
        width={128}
        height={128}
        automatically="true"
        provided="true"
      />
    </main>
  )
}