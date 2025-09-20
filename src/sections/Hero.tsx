import { clsx } from 'clsx';
import gsap from 'gsap';
import { TextPlugin, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, TextPlugin, SplitText);

export type SeeBoxes = {
  seeBoxes?: boolean
}

function Hero({ seeBoxes }: SeeBoxes) {
  useGSAP(() => {
    gsap.from('#aurelio', {
      x: -40,
      duration: 1.6,
      ease: 'expo.out',
      delay: 2
    })
  })

  return (
    <section className={clsx('h-dvh flex flex-col justify-between py-10', { 'bg-red-200': seeBoxes })}>
      <div className={clsx('flex flex-col', { 'bg-amber-200': seeBoxes })}>
        <h1 id='aurelio' className='text-[244.16px] uppercase leading-none'>Aurelio.</h1>
        <p className='font-high-summit text-[61.04px]'>Frontend Developer</p>
      </div>
      <p id='hero-description' className={clsx('text-xl w-[521px] min-h-14', { 'bg-orange-400': seeBoxes })}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit.</p>
    </section>
  );
}
export default Hero;
