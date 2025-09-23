import LenguajeTech from '../components/LenguajeTech';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import type { SeeBoxes } from './Hero';
import clsx from 'clsx';

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Tecnologías({ seeBoxes }: SeeBoxes) {
  useGSAP(() => {
    gsap.to('.tecnologias-descripcion', {
      scrollTrigger: {
        trigger: '.tecnologias-descripcion',
        endTrigger: '#lang-container',
        start: 'center center',
        end: 'bottom bottom',
        // markers: true,
        pin: true,
        scrub: 4
      }
    })
  })

  return (
    <section id='tecnologias-section' className={clsx('flex flex-col justify-between', { 'bg-red-200': seeBoxes })}>
      <div className={clsx('flex flex-col justify-center max-w-[534px] h-dvh m-auto tecnologias-descripcion', { 'bg-amber-200': seeBoxes })}>
        <div className={clsx('relative', { 'bg-green-300': seeBoxes })}>
          <h2 className='text-[97.66px] z-1'>Tecnologías.</h2>
          <p className='text-xl text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis.
          </p>
          <p className='font-high-summit text-translucent-grey-30 text-[61.04px] absolute left-27 top-18'>Tecnologias</p>
        </div>
      </div>

      <div id='lang-container' className='relative h-[calc(100dvh*5)]'>
        <LenguajeTech data-speed='1' description='Html' className='absolute left-[calc(100dvw-496px)] top-89' />
        <LenguajeTech data-speed='1.4' description='Css' className='absolute left-[calc(100dvw-396px)] top-20' />
        <LenguajeTech data-speed='0.8' description='Tailwind Css' className='absolute left-[calc(100dvw-777px)] top-204' />
        <LenguajeTech data-speed='1' description='Sass' className='absolute left-[calc(100dvw-496px)] top-308' />

        <LenguajeTech data-speed='1.2' description='JavaScript' className='absolute left-27 top-35' />
        <LenguajeTech data-speed='0.8' description='Figma' className='absolute left-37 top-455' />
        <LenguajeTech data-speed='0.6' description='TypeScript' className='absolute left-118 top-373' />
        <LenguajeTech data-speed='0.8' description='Git' className='absolute left-145 top-475' />

        <LenguajeTech data-speed='1.2' description='React' className='absolute left-10 top-192' />
      </div>

    </section>
  );
}
export default Tecnologías;
