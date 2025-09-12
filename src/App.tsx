/* import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Proyectos from './sections/Proyectos'
import SobreMi from './sections/SobreMi'
import Tecnologias from './sections/Tecnologias' */
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all'
import SideScroll from './components/temp/SideScroll'
import SideScroll_2 from './components/temp/SideScroll_2'
import Techs_2 from './components/temp/Techs_2'

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin)

function App() {

  return (
    <div className='font-overused-grotesk px-10 overflow-x-hidden text-main-black'>
      <SideScroll_2 />
    </div>
  )
}
export default App