import { clsx } from 'clsx';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, SplitText);

export type SeeBoxes = {
  seeBoxes?: boolean
}

function Hero({ seeBoxes }: SeeBoxes) {
  useGSAP(() => {
    const split = SplitText.create('#nombre-aurelio', { type: 'chars' });
    
    gsap.from(split.chars, {
      duration: 1.6,
      x: 400,
      autoAlpha: 0,
      stagger: 0.04,
      ease: 'power4.out',
      // onComplete: () => split.revert()
    });
    
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 3.2 });

    tl.to(split.chars[2], {
      duration: 0.3,
      scaleX: -1,
      ease: 'power2.out'
    })
    .to(split.chars[2], {
      duration: 1.2,
      scaleX: 1,
      ease: 'power4.out'
    })
    .to(split.chars, {
      delay: 5,
      duration: 0.4,
      y: -56,
      stagger: 0.04,
      ease: 'expo.in'
    })
    .to(split.chars, {
      duration: 0.4,
      y: 0,
      stagger: 0.04,
      ease: 'bounce',
      delay: -0.4
    })
  })

  return (
    <section className={clsx('h-dvh flex flex-col justify-between py-10', { 'bg-red-200': seeBoxes })}>
      <div className={clsx('flex flex-col', { 'bg-amber-200': seeBoxes })}>
        <h1 id='nombre-aurelio' className='text-[244.16px] uppercase leading-none'>Aurelio.</h1>
        <p className='font-high-summit text-[61.04px]'>Frontend Developer</p>
      </div>
      <p className={clsx('text-xl w-[521px]', { 'bg-orange-400': seeBoxes })}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit.</p>
    </section>
  );
}
export default Hero;
