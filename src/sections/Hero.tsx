import { cn } from '../utils/cn';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { ShowBoxes } from '../types/showBoxes';

gsap.registerPlugin(useGSAP);

function Hero({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    gsap.from('#nombre-aurelio', {
      x: -40,
      duration: 1.6,
      ease: 'expo.out',
      delay: 2
    });
  });

  return (
    <section className={cn('h-dvh flex flex-col justify-between py-10', { 'bg-red-box': showBoxes })}>
      <div className={cn('flex flex-col', { 'bg-yellow-box': showBoxes })}>
        <h1
          id='nombre-aurelio'
          className='text-[244.16px] uppercase leading-none'
        >
          Aurelio.
        </h1>
        <p className='font-high-summit text-[61.04px]'>Frontend Developer</p>
      </div>
      <p className={cn('text-xl w-130.25', { 'bg-green-box': showBoxes })}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit.
      </p>
    </section>
  );
}
export default Hero;
