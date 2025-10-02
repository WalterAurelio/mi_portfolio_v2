import LenguajeTech from '../components/LenguajeTech';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';
import CursiveTitle from '../components/CursiveTitle';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Tecnologias({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    gsap.to('#tecnologias-description', {
      scrollTrigger: {
        trigger: '#tecnologias-description',
        endTrigger: '#languages-container',
        start: 'center center',
        end: 'bottom bottom',
        pin: true,
        scrub: 4
      }
    });
  });

  return (
    <section
      id='tecnologias-section'
      className={cn('flex flex-col justify-between', { 'bg-red-box': showBoxes })}
    >
      <div
        id='tecnologias-description'
        className={cn('flex flex-col justify-center max-w-133.5 h-dvh m-auto', { 'bg-yellow-box': showBoxes })}
      >
        <div className={cn('relative', { 'bg-green-box': showBoxes })}>
          <h2 className='text-[97.66px]'>Tecnologías.</h2>
          <p className='text-xl text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis.
          </p>
          <CursiveTitle className='absolute left-27 top-18 -z-10'>Tecnologias</CursiveTitle>
        </div>
      </div>

      <div
        id='languages-container'
        className='relative h-[calc(100dvh*5)]'
      >
        <LenguajeTech
          data-speed='1'
          description='HTML'
          className='absolute left-[calc(100dvw-496px)] top-89'
        />
        <LenguajeTech
          data-speed='1.4'
          description='CSS'
          className='absolute left-[calc(100dvw-396px)] top-20'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Tailwind CSS'
          className='absolute left-[calc(100dvw-777px)] top-204'
        />
        <LenguajeTech
          data-speed='1'
          description='Sass'
          className='absolute left-[calc(100dvw-496px)] top-308'
        />

        <LenguajeTech
          data-speed='1.2'
          description='JavaScript'
          className='absolute left-27 top-35'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Figma'
          className='absolute left-37 top-455'
        />
        <LenguajeTech
          data-speed='0.6'
          description='TypeScript'
          className='absolute left-118 top-373'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Git'
          className='absolute left-145 top-475'
        />

        <LenguajeTech
          data-speed='1.2'
          description='React'
          className='absolute left-10 top-192'
        />
      </div>
    </section>
  );
}
export default Tecnologias;
