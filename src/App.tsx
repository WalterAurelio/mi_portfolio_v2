import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Proyectos from './sections/Proyectos'
import SobreMi from './sections/SobreMi'
import Tecnologias from './sections/Tecnologias'

function App() {
  return (
    <div className='font-overused-grotesk px-10 overflow-x-hidden text-main-black'>
      <Hero />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  )
}
export default App