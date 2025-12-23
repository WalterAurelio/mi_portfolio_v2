import { clsx } from 'clsx';
import gsap from 'gsap';
import type { WithBoxes } from '../types/WithBoxes';
import CursiveTitle from '../components/CursiveTitle';
import { useGSAP } from '@gsap/react';

function SobreMi({ showBoxes }: WithBoxes) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)'
      },
      context => {
        const { isMobile } = context.conditions as gsap.Conditions;

        gsap.from('.sobre-mi-animate', {
          translateX: -40,
          opacity: 0,
          scale: 1.04,
          filter: isMobile ? undefined : 'blur(8px)',
          duration: 1.6,
          ease: 'expo.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#sobre-mi-section',
            start: 'top center',
            end: 'bottom center',
            // toggleActions: isMobile ? 'play none none none' : 'play none none reverse',
            toggleActions: 'play none none reverse'
          }
        });
      }
    );
  });

  return (
    <section
      id='sobre-mi-section'
      className={clsx('min-h-[50vh] h-fit lg:h-screen flex flex-col justify-between py-4 lg:py-10', { 'bg-red-box': showBoxes })}
    >
      <div className={clsx('flex flex-col gap-10 max-w-265.5 relative', { 'bg-yellow-box': showBoxes })}>
        <h2 className='text-[61.04px] lg:text-[97.66px] sobre-mi-animate'>Sobre mí.</h2>
        <CursiveTitle className='absolute left-27 top-14 lg:top-18 -z-10 sobre-mi-animate'>Sobre mi</CursiveTitle>
        <p className='lg:text-xl leading-8 font-light sobre-mi-animate'>
          Soy un desarrollador frontend apasionado por crear experiencias web intuitivas orientadas al enfoque <b>pixel-perfect</b>. Me encanta trabajar en interfaces bien
          pensadas, cuidando cada detalle para asegurar que el producto final se sienta natural y fácil de utilizar. En mi tiempo libre disfruto tocar el piano, escuchar música,
          aprender nuevas tecnologías y desconectar un rato con videojuegos.
        </p>
      </div>
    </section>
  );
}
export default SobreMi;
