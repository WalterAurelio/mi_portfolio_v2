import Proyecto from '../components/Proyecto';
import ProyectosDescription from '../components/ProyectosDescription';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';

gsap.registerPlugin(useGSAP, ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 2 });

function Proyectos({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.scroll-panel-b', { xPercent: 100 }).from('.scroll-panel-c', { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: '.proyectos-section',
      start: 'top top',
      end: '+=4000',
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
  });

  return (
    <section>
      <div className={cn('flex -ml-10 w-dvw h-dvh relative', 'proyectos-section')}>
        <div className={cn('pl-10 overflow-clip min-w-full absolute', 'scroll-panel-a', { 'bg-red-box': showBoxes })}>
          <ProyectosDescription showBoxes={showBoxes} />
        </div>
        <Proyecto className={cn('min-w-full absolute border-l border-main-black', 'scroll-panel-b')} />
        <Proyecto className={cn('min-w-full absolute border-l border-main-black', 'scroll-panel-c')} />
      </div>
    </section>
  );
}
export default Proyectos;
