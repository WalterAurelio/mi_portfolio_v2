import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '../utils/cn';
import CursiveTitle from '../components/CursiveTitle';
import { useInView } from 'react-intersection-observer';
import type { WithBoxes } from '../types/WithBoxes';

function ProyectosDescription({ showBoxes }: WithBoxes) {
  const { ref, inView } = useInView();

  const vh = (coef: number) => window.innerHeight * (coef / 100);

  useGSAP(() => {
    gsap.from('#proyectosDescription', {
      xPercent: 100,
      ease: 'power4.out',
      duration: 1,
      scrollTrigger: {
        trigger: '#tecnologiasSection',
        start: `bottom+=${vh(26.25)} bottom`,
        toggleActions: 'restart',
        endTrigger: '.scroll-panel-a',
        end: 'top top'
      }
    });
  });

  return (
    <div className={cn('h-lvh lg:h-screen flex flex-col justify-between py-4 max-lg:pr-4 lg:py-10', { 'bg-yellow-box': showBoxes })}>
      <div
        id='proyectosDescription'
        className={cn('flex flex-col gap-10 max-w-265.5 relative', { 'bg-green-box': showBoxes })}
      >
        <h2
          ref={ref}
          id={inView ? 'proyectosHeading' : undefined}
          className='text-[122.08px] lg:text-[183.12px] uppercase text-nowrap leading-none z-10 w-fit proyectos-animate'
        >
          Proyectos • Proyectos • Proyectos • Proyectos •{' '}
        </h2>
        <CursiveTitle className='absolute left-27 top-16 proyectos-animate'>Proyectos</CursiveTitle>
        <p className='lg:text-xl leading-8 font-light proyectos-animate'>
          Una selección de proyectos que nacen de la curiosidad y de las ganas de construir productos que transmitan <b>claridad</b> y <b>propósito</b>. Cada uno refleja mi manera
          de trabajar y lo que disfruto hacer en el desarrollo web.
        </p>
      </div>
    </div>
  );
}
export default ProyectosDescription;
