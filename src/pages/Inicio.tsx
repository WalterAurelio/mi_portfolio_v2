import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import FloatingShapesOnPath from '../components/FloatingShapesOnPath';
import Hero from '../sections/Hero';
import SobreMi from '../sections/SobreMi';
import Tecnologias from '../sections/Tecnologias';
import Proyectos from '../sections/Proyectos';
import Contacto from '../sections/Contacto';
import Footer from '../sections/Footer';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
gsap.defaults({ ease: 'none', duration: 2 });

function Inicio() {
  useGSAP(() => {
    /* gsap.to('#circular-text', {
      opacity: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: '#contacto-section',
        start: 'top bottom',
        toggleActions: 'play none none reverse'
      }
    }); */
  });

  return (
    <div
      id='smooth-wrapper'
      className='font-overused-grotesk px-4 lg:px-10 overflow-x-hidden text-main-black relative'
    >
      {/* <CircularText className='fixed right-10 bottom-10 z-10' /> */}
      <div
        id='smooth-content'
        className='flex flex-col'
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
