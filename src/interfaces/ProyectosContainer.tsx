import Proyecto from '../components/Proyecto'
import Proyectos from '../sections/Proyectos'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function ProyectosContainer() {
  useGSAP(() => {
    const sections = gsap.utils.toArray('.scroll-panel');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.proyectos-section',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + document.querySelector('.proyectos-section')!.clientWidth
      }
    })
  })

  return (
    <div className='flex -ml-10 w-dvw proyectos-section'>
      <div className='pl-10 overflow-clip min-w-full bg-green-500 scroll-panel'>
        <Proyectos />
      </div>
      <Proyecto className='min-w-full scroll-panel' />
      <Proyecto className='min-w-full scroll-panel' />
    </div>
  )
}
export default ProyectosContainer