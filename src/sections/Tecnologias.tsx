import LenguajeTech from '../components/LenguajeTech';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import type { SeeBoxes } from './Hero';
import clsx from 'clsx';
import htmlImg from '../assets/img/1000218227-02.jpeg'
import sassImg from '../assets/img/1000218233-02.jpeg'

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
          <p className='font-high-summit text-translucent-grey-30 text-[61.04px] absolute left-[108px] top-18'>Tecnologias</p>
        </div>
      </div>

      <div id='lang-container' className='relative h-[calc(100dvh*5)]'>
        <LenguajeTech imgOptions={{ x: '-right-37', y: '-top-37', rotate: '-rotate-33' }} imageUrl={htmlImg} data-speed='1' description='Html' className='absolute left-[862px] top-[357px]' />
        <LenguajeTech data-speed='1.4' description='Css' className='absolute left-[1078px] top-[115px]' />
        <LenguajeTech data-speed='0.8' description='Tailwind Css' className='absolute left-[581px] top-[814px]' />
        <LenguajeTech imgOptions={{ x: '-right-17', y: '-top-27', rotate: 'rotate-33' }} imageUrl={sassImg} data-speed='1' description='Sass' className='absolute left-[970px] top-[1232px]' />

        <LenguajeTech data-speed='0.8' description='Figma' className='absolute left-[148px] top-[1820px]' />
        <LenguajeTech data-speed='1.2' description='JavaScript' className='absolute left-[148px] top-[141px]' />
        <LenguajeTech data-speed='0.6' description='TypeScript' className='absolute left-[473px] top-[1491px]' />
        <LenguajeTech data-speed='0.8' description='Git' className='absolute left-[581px] top-[1901px]' />

        <LenguajeTech data-speed='1.2' description='React' className='absolute left-[40px] top-[768px]' />
      </div>

    </section>
  );
}
export default Tecnologías;
