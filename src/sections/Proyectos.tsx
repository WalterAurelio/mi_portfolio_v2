import Proyecto from '../components/Proyecto';
import ProyectosDescription from '../components/ProyectosDescription';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import type { WithBoxes } from '../types/WithBoxes';
import { cn } from '../utils/cn';
import '../styles/Proyectos.css';

function Proyectos({ showBoxes }: WithBoxes) {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.scroll-panel-b', { xPercent: 100 }).from('.scroll-panel-c', { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: '.proyectosContainer',
      start: 'top top',
      end: '+=1200',
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
  });

  return (
    <section id='proyectosSection'>
      <div className='flex -ml-4 lg:-ml-10 w-screen h-lvh lg:h-screen relative proyectosContainer'>
        <div className={cn('pl-4 lg:pl-10 overflow-clip w-full', 'scroll-panel-a', { 'bg-red-box': showBoxes })}>
          <ProyectosDescription showBoxes={showBoxes} />
        </div>

        <Proyecto className='min-w-full absolute border-l border-main-black scroll-panel-b' />
        <Proyecto className='min-w-full absolute border-l border-main-black scroll-panel-c' />
      </div>
    </section>
  );
}
export default Proyectos;
