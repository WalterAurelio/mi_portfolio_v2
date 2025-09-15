import gsap from 'gsap'
import LenguajeTech from './components/LenguajeTech'
import ProyectosContainer from './interfaces/ProyectosContainer'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import SobreMi from './sections/SobreMi'
import Tecnologias from './sections/Tecnologias'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/all'
import ProyectosContainer_2 from './interfaces/ProyectosContainer_2'
import SideScroll from './components/temp/SideScroll'
import Proyectos from './sections/Proyectos'
import AuxComponent from './components/temp/AuxComponent'
import AuxComponent_2 from './components/temp/AuxComponent_2'
import AuxComponent_3 from './components/temp/AuxComponent_3'
import FloatingShapes from './components/FloatingShapes'

gsap.registerPlugin(useGSAP, ScrollSmoother)

function App() {
  /* useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    })
  }) */

  console.log(window.innerHeight)
  
  return (
    <div id='smooth-wrapper' className='font-overused-grotesk px-10 overflow-x-hidden text-main-black relative'>
      <div id='smooth-content'>
      
      <FloatingShapes />

      {/* <AuxComponent_3 />

      <Hero />
      <SobreMi />
      <Tecnologias />
      <ProyectosContainer_2 />
      <Contacto /> */}

      </div>
    </div>
  )
}
export default App