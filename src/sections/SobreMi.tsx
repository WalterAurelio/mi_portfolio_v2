import { clsx } from 'clsx';
import gsap from 'gsap';
import type { ShowBoxes } from '../types/showBoxes';
import CursiveTitle from '../components/CursiveTitle';
import { useGSAP } from '@gsap/react';

function SobreMi({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    gsap.from('.sobre-mi-animate', {
      x: -40,
      autoAlpha: 0,
      filter: 'blur(64px)',
      duration: 1.6,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#sobre-mi-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });
  });

  return (
    <section
      id='sobre-mi-section'
      className={clsx('h-dvh flex flex-col justify-between py-4 lg:py-10', { 'bg-red-box': showBoxes })}
    >
      <div className={clsx('flex flex-col gap-10 max-w-265.5 relative', { 'bg-yellow-box': showBoxes })}>
        <h2 className='text-[61.04px] lg:text-[97.66px] sobre-mi-animate'>Sobre mí.</h2>
        <CursiveTitle className='absolute left-27 top-14 lg:top-18 -z-10 sobre-mi-animate'>Sobre mi</CursiveTitle>
        <p className='lg:text-xl leading-8 font-thin sobre-mi-animate'>
          Soy un desarrollador frontend apasionado por crear experiencias web intuitivas orientadas al enfoque <b>pixel-perfect</b>. Me encanta trabajar en interfaces bien
          pensadas, cuidando cada detalle para asegurar que el producto final se sienta natural y fácil de utilizar. En mi tiempo libre disfruto tocar el piano, escuchar música,
          aprender nuevas tecnologías y desconectar un rato con videojuegos.
        </p>
      </div>
    </section>
  );
}
export default SobreMi;
