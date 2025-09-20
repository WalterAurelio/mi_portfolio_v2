import Proyecto from '../components/Proyecto'
import Proyectos from '../sections/Proyectos'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'
import type { SeeBoxes } from '../sections/Hero'
import clsx from 'clsx'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)
gsap.defaults({ ease: 'none', duration: 2 })

function ProyectosContainer_2({ seeBoxes }: SeeBoxes) {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    })

    const tl = gsap.timeline();
    tl/* .from('.scroll-panel-a', {}) */
    .from('.scroll-panel-b', { xPercent: 100 })
    .from('.scroll-panel-c', { xPercent: 100 })
    
    ScrollTrigger.create({
      animation: tl,
      trigger: '.proyectos-section',
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });    
  })

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content' className='flex -ml-10 w-dvw h-dvh relative proyectos-section'>
        <div className={clsx('pl-10 overflow-clip min-w-full absolute scroll-panel-a', { 'bg-green-500': seeBoxes })}>
          <Proyectos seeBoxes={seeBoxes} />
        </div>
        <Proyecto className='min-w-full absolute border-l border-main-black scroll-panel-b' />
        <Proyecto className='min-w-full absolute border-l border-main-black scroll-panel-c' />
      </div>
    </div>
  )
}
export default ProyectosContainer_2