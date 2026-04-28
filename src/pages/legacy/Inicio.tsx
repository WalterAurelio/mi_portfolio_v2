import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin, MotionPathPlugin, ScrollSmoother, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
// import CircleText from '../components/CircleText';
// import NavBar from '../components/NavBar';
// import FloatingShapesOnPath from '../components/FloatingShapesOnPath';
import Hero from '../../sections/legacy/Hero';
import SobreMi from '../../sections/legacy/SobreMi';
import Tecnologias from '../../sections/legacy/Tecnologias';
import Proyectos from '../../sections/legacy/Proyectos';
import Contacto from '../../sections/legacy/Contacto';
import Footer from '../../sections/legacy/Footer';

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
      className='font-overused-grotesk px-4 lg:px-10 overflow-x-hidden text-main-black bg-smart-white relative'
    >
      {/* <CircleText className='fixed right-10 bottom-10 z-10' /> */}
      {/* <NavBar /> */}
      <div
        id='smooth-content'
        className='flex flex-col gap-[26.25vh]'
      >
        {/* <FloatingShapesOnPath /> */}

        {/* <Hero /> */}
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Contacto />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
export default Inicio;
