import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import FloatingShapesOnPath from './components/FloatingShapesOnPath';
import Hero from './sections/Hero';
import SobreMi from './sections/SobreMi';
import Tecnologias from './sections/Tecnologias';
import Proyectos from './sections/Proyectos';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';
// import CircularText from './components/CircularText';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    });

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
      className='font-overused-grotesk px-10 overflow-x-hidden text-main-black relative'
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
export default App;
