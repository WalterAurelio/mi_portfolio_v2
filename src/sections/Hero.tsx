import { cn } from '../utils/cn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { ShowBoxes } from '../types/showBoxes';
import FrontEndDev from '../components/FrontEndDev';
import { icons } from '../utils/icons';

function Hero({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    gsap.from(['#nombre-aurelio', '#hero-motto'], {
      autoAlpha: 0,
      x: -40,
      filter: 'blur(64px)',
      duration: 1.6,
      ease: 'expo.out',
      delay: 2
    });
  });

  return (
    <section className={cn('h-svh lg:h-screen flex flex-col justify-between py-4 lg:py-10', { 'bg-red-box': showBoxes })}>
      <div className={cn('flex flex-col gap-2 lg:gap-10 my-auto', { 'bg-yellow-box': showBoxes })}>
        <h1 className='sr-only'>Aurelio</h1>
        <div
          id='nombre-aurelio'
          className='text-main-black md:max-w-[68.04vw]'
        >
          {icons.miNombre}
        </div>
        <FrontEndDev />
      </div>
      <p
        id='hero-motto'
        className={cn('lg:text-xl font-thin lg:w-130.25', { 'bg-green-box': showBoxes })}
      >
        Transformando ideas en experiencias digitales donde la simplicidad se exprese y sea guía.
      </p>
    </section>
  );
}
export default Hero;
