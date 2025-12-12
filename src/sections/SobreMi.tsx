import { clsx } from 'clsx';
import gsap from 'gsap';
import type { ShowBoxes } from '../types/showBoxes';
import CursiveTitle from '../components/CursiveTitle';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SobreMi({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    gsap.from('.sobre-mi-title', {
      x: -40,
      filter: 'blur(64px)',
      duration: 1.6,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '#sobre-mi-heading',
        start: 'top center',
        toggleActions: 'play reset play reverse'
      }
    });
  });

  return (
    <section className={clsx('h-dvh flex flex-col justify-between py-10', { 'bg-red-box': showBoxes })}>
      <div className={clsx('flex flex-col gap-10 max-w-265.5 relative', { 'bg-yellow-box': showBoxes })}>
        <h2
          id='sobre-mi-heading'
          className='text-[97.66px] sobre-mi-title'
        >
          Sobre mí.
        </h2>
        <p className='text-xl leading-8 font-thin'>
          Soy un desarrollador frontend apasionado por crear experiencias web intuitivas orientadas al enfoque <b>pixel-perfect</b>. Me encanta trabajar en interfaces bien
          pensadas, cuidando cada detalle para asegurar que el producto final se sienta natural y fácil de utilizar. En mi tiempo libre disfruto tocar el piano, escuchar música,
          aprender nuevas tecnologías y desconectar un rato con videojuegos.
        </p>
        <CursiveTitle className='absolute left-27 top-18 -z-10 sobre-mi-title'>Sobre mi</CursiveTitle>
      </div>
    </section>
  );
}
export default SobreMi;
