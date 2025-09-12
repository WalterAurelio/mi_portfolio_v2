import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)
// gsap.defaults({ ease: 'none', duration: 2 })

function Techs() {
  useGSAP(() => {
    gsap.to('#texto-stuck', {
      // y: 400,
      // duration: 4,
      scrollTrigger: {
        trigger: '#texto-stuck',
        endTrigger: '#caja-d',
        start: 'center center',
        end: 'bottom top',
        markers: true,
        scrub: 5,
        pin: true
      }
    })
  })

  return (
    <div className='font-overused-grotesk px-10 overflow-x-hidden text-main-black'>
      <div id='caja-a' className='w-40 h-40 bg-red-500 text-6xl flex items-center justify-center'>a</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
      <div id='caja-b' className='w-40 h-40 bg-green-500 text-6xl flex items-center justify-center'>b</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
      <div id='tech-section' className='relative'>
        <div id='texto-stuck' className='bg-pink-500'>
          <h2 className='text-8xl text-center'>Hola, soy un texto</h2>
        </div>

        <div className='w-40 h-40 bg-purple-400 absolute left-40 top-40'>Soy una tech</div>
        <div className='w-40 h-40 bg-yellow-400 absolute right-40 top-80'>Soy una tech</div>
        <div className='w-40 h-40 bg-green-400 absolute left-40 top-160'>Soy una tech</div>
        <div className='w-40 h-40 bg-blue-400 absolute right-40 top-200'>Soy una tech</div>
        <div className='w-40 h-40 bg-pink-400 absolute left-40 top-280'>Soy una tech</div>

      </div>
      <div id='caja-c' className='w-40 h-40 bg-blue-500 text-6xl flex items-center justify-center'>c</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
      <div id='caja-d' className='w-40 h-40 bg-purple-500 text-6xl flex items-center justify-center'>d</div>
      <div className='w-40 h-160 bg-yellow-500'></div>
    </div>
  )
}
export default Techs