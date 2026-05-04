import Hero from '../sections/Hero';
import SobreMi from '../sections/SobreMi';
import Tecnologias from '../sections/Tecnologias';
import Proyectos from '../sections/Proyectos';
import Contacto from '../sections/Contacto';
import Footer from '../sections/Footer';
import NavigationMenu from '../interfaces/NavigationMenu';
import { useHamburgerStore } from '../store/hamburgerStore';
import { cn } from '../utils/cn';
import FloatingShapesOnPath from '../components/FloatingShapesOnPath';

function Inicio() {
  const isOpen = useHamburgerStore(state => state.isOpen);

  return (
    <>
      <NavigationMenu
        className={cn('fixed top-0 z-10 transition-all duration-300', {
          'right-0': isOpen,
          '-right-80': !isOpen
        })}
      />
      <main
        id='smooth-content'
        className='relative flex flex-col gap-[17.232376vh]'
      >
        <FloatingShapesOnPath />
        <Hero />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Contacto className='-my-[17.232376vh]' />
        <Footer />
      </main>
    </>
  );
}
export default Inicio;
