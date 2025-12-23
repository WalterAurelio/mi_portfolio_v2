import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin, MotionPathPlugin, ScrollSmoother, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import FloatingShapesOnPath from '../components/FloatingShapesOnPath';
import Hero from '../sections/Hero';
import SobreMi from '../sections/SobreMi';
import Tecnologias from '../sections/Tecnologias';
import Proyectos from '../sections/Proyectos';
import Contacto from '../sections/Contacto';
import Footer from '../sections/Footer';
import NavBar from '../components/NavBar';
import Hamburger from '../components/Hamburger';
// import CircularText from '../components/CircularText';

gsap.registerPlugin(useGSAP, DrawSVGPlugin, MotionPathPlugin, ScrollSmoother, ScrollToPlugin, ScrollTrigger);

function Inicio() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      smoothTouch: 0.1,
      effects: true,
      ignoreMobileResize: true,
      normalizeScroll: true
    });

    ScrollTrigger.refresh();
  });

  return (
    <div
      id='smooth-wrapper'
      className='font-overused-grotesk px-4 lg:px-10 overflow-x-hidden text-main-black relative bg-smart-white'
    >
      {/* <CircularText className='fixed right-10 bottom-10 z-10' /> */}
      <Hamburger className='lg:hidden absolute top-4 right-4 w-[calc(100%-32px)]' />
      <NavBar className='max-lg:hidden h-2.5 absolute top-10 z-10 w-[calc(100%-80px)]' />
      <div
        id='smooth-content'
        className='flex flex-col gap-[26.25vh]'
      >
        <FloatingShapesOnPath />
        <Hero />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}
export default Inicio;
