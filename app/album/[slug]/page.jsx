import Fancybox from '../../fancybox.jsx'

export default function albumPage(props) {
  return(
  <main className='bg-zinc-900 text-white pt-[65px]'>
    {props.params.slug}
  </main>
  )
}