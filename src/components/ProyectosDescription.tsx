import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';
import CursiveTitle from '../components/CursiveTitle';
import { useInView } from 'react-intersection-observer';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ProyectosDescription({ showBoxes }: ShowBoxes) {
  const { ref, inView } = useInView();

  useGSAP(() => {
    gsap.from('#proyectos-description', {
      xPercent: 100,
      ease: 'power4.out',
      duration: 1,
      scrollTrigger: {
        trigger: '#tecnologias-section',
        start: 'bottom bottom',
        toggleActions: 'restart',
        endTrigger: '.scroll-panel-a',
        end: 'top top'
      }
    });

    gsap.from('.proyectos-title', {
      filter: 'blur(64px)',
      duration: 1.6,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '#tecnologias-section',
        start: 'bottom bottom',
        toggleActions: 'restart',
        endTrigger: '.scroll-panel-a',
        end: 'top top'
      }
    });
  });

  return (
    <div className={cn('h-dvh flex flex-col justify-between py-10', { 'bg-yellow-box': showBoxes })}>
      <div
        id='proyectos-description'
        className={cn('flex flex-col gap-10 max-w-265.5 relative', { 'bg-green-box': showBoxes })}
      >
        <h2
          ref={ref}
          id={inView ? 'proyectos-heading' : undefined}
          className='text-[183.12px] uppercase text-nowrap leading-none z-10 w-fit proyectos-title'
        >
          Proyectos • Proyectos • Proyectos • Proyectos •{' '}
        </h2>
        <p className='text-xl leading-8 font-thin'>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis. Suspendisse tristique mollis
          lorem quis ullamcorper. Donec quis nunc consequat, lobortis odio at, ultrices nulla. Duis euismod elit vitae tincidunt faucibus. */}
          Una selección de proyectos que nacen de la curiosidad y de las ganas de construir productos que transmitan <b>claridad</b> y <b>propósito</b>. Cada uno refleja mi manera
          de trabajar y lo que disfruto hacer en el desarrollo web.
        </p>
        <CursiveTitle className='absolute left-27 top-16 proyectos-title'>Proyectos</CursiveTitle>
      </div>
    </div>
  );
}
export default ProyectosDescription;
