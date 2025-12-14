import { cn } from '../utils/cn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { ShowBoxes } from '../types/showBoxes';
import '../styles/Hero.css';
import FrontEndDev from '../components/FrontEndDev';

function Hero({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    gsap.from(['#nombre-aurelio', '#hero-motto'], {
      x: -40,
      duration: 1.6,
      ease: 'expo.out',
      delay: 2
    });
  });

  return (
    <section className={cn('h-dvh flex flex-col justify-between py-4 lg:py-10', { 'bg-red-box': showBoxes })}>
      <div className={cn('flex flex-col max-lg:gap-1 max-lg:my-auto', { 'bg-yellow-box': showBoxes })}>
        <h1
          id='nombre-aurelio'
          className='text-[74.65px] lg:text-[244.16px] uppercase leading-none'
        >
          Aurelio.
        </h1>
        {/* <p className='font-high-summit text-[61.04px]'>Frontend Developer</p> */}
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
