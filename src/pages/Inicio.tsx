import Hero from '../sections/Hero';
import SobreMi from '../sections/SobreMi';
import Tecnologias from '../sections/Tecnologias';
import Proyectos from '../sections/Proyectos';
import Contacto from '../sections/Contacto';
import Footer from '../sections/Footer';
// import { useThemeStore } from '../store/themeStore';
// import FloatingShapesOnPath from '../components/FloatingShapesOnPath';
import MenuButton from '../components/MenuButton';
import NavigationMenu from '../interfaces/NavigationMenu';
import { useHamburgerStore } from '../store/hamburgerStore';
import { cn } from '../utils/cn';

function Inicio() {
  // const { theme, toggleTheme } = useThemeStore();
  const isOpen = useHamburgerStore(state => state.isOpen);

  return (
    <>
      <MenuButton className='fixed right-5 top-5 z-20' />
      <NavigationMenu
        className={cn('fixed top-0 z-10 transition-all duration-300', {
          'right-0': isOpen,
          '-right-80 opacity-0': !isOpen
        })}
      />
      <main id='smooth-content'>
        {/* <button onClick={toggleTheme}>{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</button> */}
        {/* <FloatingShapesOnPath /> */}

        <Hero />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
export default Inicio;
