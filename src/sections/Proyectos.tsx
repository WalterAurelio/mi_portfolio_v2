import Proyecto from '../components/Proyecto';
import ProyectosDescription from '../components/ProyectosDescription';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';
import '../styles/Proyectos.css';

function Proyectos({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      smoothTouch: 0.1,
      effects: true
    });

    const tl = gsap.timeline();
    tl.from('.scroll-panel-b', { xPercent: 100 }).from('.scroll-panel-c', { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: '.proyectos-section',
      start: 'top top',
      end: '+=1200',
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
  });

  return (
    <section>
      <div className={cn('flex -ml-4 lg:-ml-10 w-screen h-svh lg:h-screen relative', 'proyectos-section')}>
        <div className={cn('pl-4 lg:pl-10 overflow-clip w-full', 'scroll-panel-a', { 'bg-red-box': showBoxes })}>
          <ProyectosDescription showBoxes={showBoxes} />
        </div>

        <Proyecto className={cn('min-w-full absolute border-l border-main-black', 'scroll-panel-b')} />
        <Proyecto className={cn('min-w-full absolute border-l border-main-black', 'scroll-panel-c')} />
      </div>
    </section>
  );
}
export default Proyectos;
