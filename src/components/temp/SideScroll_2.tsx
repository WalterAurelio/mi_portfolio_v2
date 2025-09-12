import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import Proyecto from '../Proyecto'

gsap.registerPlugin(useGSAP, ScrollTrigger)
// gsap.defaults({ ease: 'none', duration: 2 })

function SideScroll_2() {
  useGSAP(() => {
    const sections = gsap.utils.toArray('#panel-proyecto')

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#pr-container',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + document.querySelector('#pr-container').offsetWidth
      }
    })
/*     const tl = gsap.timeline();
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
    }) */
  })

  return (
    <div className='font-overused-grotesk text-main-black'>
      <div id='caja-a' className='w-40 h-40 bg-red-500 text-6xl flex items-center justify-center'>a</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
      <div id='caja-b' className='w-40 h-40 bg-green-500 text-6xl flex items-center justify-center'>b</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
      
      <div id='pr-container' className='h-dvh w-fit bg-amber-950 flex flex-nowrap'>
        <div id='panel-proyecto' className='w-[1358px]'>
          <h1>Hola soy proyecto</h1>
        </div>
        <div id='panel-proyecto' className='w-[1358px]'>
          <Proyecto id='pr-a' />
        </div>
        <div id='panel-proyecto' className='w-[1358px]'>
          <Proyecto id='pr-b' />
        </div>
        <div id='panel-proyecto' className='w-[1358px]'>
          <Proyecto id='pr-c' />
        </div>
      </div>

      <div id='caja-c' className='w-40 h-40 bg-blue-500 text-6xl flex items-center justify-center'>c</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
    </div>
  )
}
export default SideScroll_2