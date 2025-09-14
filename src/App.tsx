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

  return (
    <div id='smooth-wrapper' className='font-overused-grotesk px-10 overflow-x-hidden text-main-black'>
      <div id='smooth-content'>

        <Hero />
        <SobreMi />
        <Tecnologias />
        <ProyectosContainer />
        <Contacto />
        <Footer />
      
      </div>
    </div>
  )
}
export default App