import style from './lab-css.module.css'
import Link from 'next/link'

export async function CssLab() {
  return (
    <main className='md:py-[65px] container max-w-[1000px] article'>
      <h2>CSS 中的新功能</h2><br />
      参考链接：<Link href='https://developer.chrome.com/blog/whats-new-css-ui-2023/' target='_blank'>https://developer.chrome.com/blog/whats-new-css-ui-2023/</Link><br />

      <h3>CSS 首字下沉</h3>
      <p>Chrome 110 Safari 9</p>
      <p className={`${style['initialLetter']} py-2`}>
        Another lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, deleniti saepe! Labore alias nemo quam perferendis harum ducimus at qui omnis magni amet eius, optio dolorum? Aliquid harum molestias voluptatibus.
      </p>
      <p className={`${style['initialLetter']} py-2`}>
        噫吁戏，危乎高哉！<br />
        蜀道之难，难于上青天！<br />
        蚕丛及鱼凫，开国何茫然。<br />
        尔来四万八千岁，不与秦塞通人烟。<br />
        西当太白有鸟道，可以横绝峨眉巅。
      </p>
      
      <h3>nth-of 语法</h3>
      <p>Chrome 111 Safari 9</p>
      <ul className='py-2'>
        <li className={`${style['nth']} ${style['nthof']}`}>1 text nth nthof</li>
        <li className={`${style['nth']} ${style['nthof']}`}>2 text nth nthof</li>
        <li className={`${style['nth']} `}>3 text nth</li>
        <li className={`${style['nth']} ${style['nthof']}`}>4 text nth nthof</li>
        <li className={`${style['nth']} `}>5 text nth</li>
        <li className={`${style['nth']} ${style['nthof']}`}>6 text nth nthof</li>
        <li className={`${style['nth']} `}>7 text nth</li>
      </ul>
      <p>
        高级 nth-child 语法提供了一个新关键字（“of”），它允许您使用现有的 An+B 微语法，并在其中搜索更具体的子集。<br />
        :nth-child(2) 可以筛选出一个列表的第二个<br />
        :nth-child(2 of .special) 可以筛选出一个列表中，带有 special 样式的第二个<br />
      </p>

      <h3>颜色混合器</h3>
      <p>Chrome 111 Safari 16.2</p>
      <div className={`${style['colorMix']} `}></div>
    </main>
  )
}

export default CssLab