import style from './color.module.css'

export async function ColorPage() {
  return (
    <main className='font-light dark:bg-[#18181B]'>
      <div className='py-8 md:py-[120px] container max-w-[1000px]'>
        <div className='text-center text-4xl'>Tripper Color</div>
        <div>
          <div className='container px-4 lg:px-2 max-w-[1000px] grid grid-cols-12 pt-4'>
            <div className={`${style['Card']} col-span-12 px-6 py-4 lg:px-10 lg:py-8 border`}>
              <div className='text-xl lg:text-3xl leading-[48px] lg:leading-[60px]'>Theme Color</div>
              <div className='py-4 flex gap-2'>
                <div className='inline-block w-8 h-8 rounded-full shadow bg-main'></div>
                <div className='inline-block h-8 leading-8'>#71AFDD Main Color</div>
              </div>
              <div className='p-6 m-6 border-l-4 border-sub rounded'>
                <h2 className='inline-block m-1'>
                  文章内标题
                </h2>
              </div>
              <div className='py-4 flex gap-2'>
                <div className='inline-block w-8 h-8 rounded-full shadow bg-sub'></div>
                <div className='inline-block h-8 leading-8'>#A3B4BF Sub Color</div>
              </div>
            </div>
          </div>
          <div className='container px-4 lg:px-2 max-w-[1000px] grid grid-cols-12 pt-4'>
            <div className={`${style['Card']} col-span-12 px-6 py-4 lg:px-10 lg:py-8 border`}>
              <div className='text-xl lg:text-3xl leading-[48px] lg:leading-[60px]'>Font Color</div>
              <div className='py-4 flex gap-2'>
                <div className='inline-block w-8 h-8 rounded-full shadow bg-text'></div>
                <div className='inline-block h-8 leading-8'>#222831 Text in Light Theme</div>
              </div>
              <div className='bg-white text-[#222831] p-6 m-6 border-l-4 border-sub rounded'>
                少数派成立于 2012 年，我们致⼒于汇聚少数⼈的⼒量，通过优质内容和产品，和大家一起用科学的方法和多维视角探索数字生活，提升⼤众⽤⼾的⼯作效率和⽣活品质。同时构建创作和创造的⾏业桥梁。
              </div>
              <div className='py-4 flex gap-2'>
                <div className='inline-block w-8 h-8 rounded-full shadow bg-[#E2E2E2]'></div>
                <div className='inline-block h-8 leading-8'>#E2E2E2 Text in Dark Theme</div>
              </div>
              <div className='bg-[#18181B] text-[#E2E2E2] p-6 m-6 border-l-4 border-sub rounded'>
                少数派成立于 2012 年，我们致⼒于汇聚少数⼈的⼒量，通过优质内容和产品，和大家一起用科学的方法和多维视角探索数字生活，提升⼤众⽤⼾的⼯作效率和⽣活品质。同时构建创作和创造的⾏业桥梁。
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default ColorPage