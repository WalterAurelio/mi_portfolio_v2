import { cn } from '../utils/cn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FrontendDeveloper from '../components/FrontendDeveloper';
import { icons } from '../utils/icons';
import type { WithBoxes } from '../types/WithBoxes';

function Hero({ showBoxes }: WithBoxes) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)'
      },
      context => {
        const { isMobile } = context.conditions as gsap.Conditions;

        gsap.from(['#nombre-aurelio', '#hero-motto'], {
          translateX: -40,
          opacity: 0,
          scale: 1.04,
          filter: isMobile ? undefined : 'blur(8px)',
          duration: 1.6,
          ease: 'expo.out',
          stagger: 0.2,
          delay: 2
        });
      }
    );
  });

  return (
    <section className={cn('h-svh lg:h-screen flex flex-col justify-between py-4 lg:py-10 translate-z-0', { 'bg-red-box': showBoxes })}>
      <div className={cn('flex flex-col gap-2 lg:gap-10 my-auto', { 'bg-yellow-box': showBoxes })}>
        <h1 className='sr-only'>Aurelio</h1>
        <div
          id='nombre-aurelio'
          className='text-main-black md:max-w-[68.04vw]'
        >
          {icons.nombreAurelio}
        </div>
        <FrontendDeveloper />
      </div>
      <p
        id='hero-motto'
        className={cn('lg:text-xl font-light lg:w-130.25', { 'bg-green-box': showBoxes })}
      >
        Transformando ideas en experiencias digitales donde la simplicidad se exprese y sea guía.
      </p>
    </section>
  );
}
export default Hero;
