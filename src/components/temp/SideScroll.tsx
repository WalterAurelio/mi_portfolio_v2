import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Proyecto from '../Proyecto'

gsap.registerPlugin(useGSAP, ScrollTrigger)
gsap.defaults({ ease: 'none', duration: 2 })

function SideScroll() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('#pr-a', { xPercent: 100 })
    .from('#pr-b', { xPercent: 100 })
    .from('#pr-c', { xPercent: 100 })

    ScrollTrigger.create({
      animation: tl,
      trigger: '#pr-container',
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      anticipatePin: 1
    })
  })

  return (
    <div className='font-overused-grotesk px-10 overflow-x-hidden text-main-black'>
      <div id='caja-a' className='w-40 h-40 bg-red-500 text-6xl flex items-center justify-center'>a</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
      <div id='caja-b' className='w-40 h-40 bg-green-500 text-6xl flex items-center justify-center'>b</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
      <div id='pr-container' className='relative h-dvh bg-amber-950'>
        <div className='absolute w-full'>
          <Proyecto id='pr-a' />
        </div>
        <div className='absolute w-full'>
          <Proyecto id='pr-b' />
        </div>
        <div className='absolute w-full'>
          <Proyecto id='pr-c' />
        </div>
      </div>
      <div id='caja-c' className='w-40 h-40 bg-blue-500 text-6xl flex items-center justify-center'>c</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
    </div>
  )
}
export default SideScroll