import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin, MotionPathPlugin, ScrollSmoother, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import Navbar from '../components/Navbar';
import HamburgerMenu from '../components/HamburgerMenu';
import FloatingShapesOnPath from '../components/FloatingShapesOnPath';
import Hero from '../sections/Hero';
import SobreMi from '../sections/SobreMi';
import Tecnologias from '../sections/Tecnologias';
import Proyectos from '../sections/Proyectos';
import Contacto from '../sections/Contacto';
import Footer from '../sections/Footer';
// import CircularText from '../components/CircularText';

gsap.registerPlugin(useGSAP, DrawSVGPlugin, MotionPathPlugin, ScrollSmoother, ScrollToPlugin, ScrollTrigger);

function Inicio() {
  return (
    <div
      id='smooth-wrapper'
      className='font-overused-grotesk px-4 lg:px-10 overflow-x-hidden text-main-black relative bg-smart-white'
    >
      {/* <CircularText className='fixed right-10 bottom-10 z-10' /> */}
      <Navbar className='max-lg:hidden h-2.5 absolute top-10 z-10 w-[calc(100%-80px)]' />
      <HamburgerMenu className='lg:hidden absolute top-4 right-4 z-10 w-[calc(100%-32px)]' />
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
