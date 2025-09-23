import gsap from 'gsap'
import LenguajeTech from './components/LenguajeTech'
import ProyectosContainer from './interfaces/ProyectosContainer'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import SobreMi from './sections/SobreMi'
import Tecnologias from './sections/Tecnologias'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import ProyectosContainer_2 from './interfaces/ProyectosContainer_2'
import AuxComponent_3 from './components/temp/AuxComponent_3'
import CircularText from './components/CircularText'
import Proyecto from './components/Proyecto'
import InfoProyecto from './components/InfoProyecto'

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger)

function App() {
  /* useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    })
  }) */

  useGSAP(() => {
    gsap.to('.circular-text', {
      opacity: 0,
      scale: 0.1,
      duration: 0.3,
      scrollTrigger: {
        trigger: '#contacto-section',
        start: 'top bottom',
        toggleActions: 'play none none reverse'
      }
    });
  })
  
  return (
    <div id='smooth-wrapper' className='font-overused-grotesk px-10 overflow-x-hidden text-main-black relative'>
      {/* <CircularText className='fixed right-10 bottom-10 z-10 circular-text' /> */}
      <div id='smooth-content' className='flex flex-col'>
        
        <AuxComponent_3 />
        <Hero />
        <SobreMi />
        <Tecnologias />
        {/* <ProyectosContainer_2 />
        <Contacto />
        <Footer /> */}

      </div>
    </div>
  )
}
export default App