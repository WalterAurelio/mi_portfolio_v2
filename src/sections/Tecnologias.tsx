import LenguajeTech from '../components/LenguajeTech';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';
import CursiveTitle from '../components/CursiveTitle';
import { icons } from '../utils/icons';

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

    gsap.from('.tecnologias-animate', {
      autoAlpha: 0,
      filter: 'blur(64px)',
      duration: 1.6,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#tecnologias-section',
        start: 'top top',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
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
          <h2 className='text-[97.66px] tecnologias-animate'>Tecnologías.</h2>
          <CursiveTitle className='absolute left-27 top-18 -z-10 tecnologias-animate'>Tecnologias</CursiveTitle>
          <p className='text-xl font-thin text-center tecnologias-animate'>
            El stack tecnológico que forma parte de mi proceso para
            <br /> el desarrollo de productos digitales, combinando simplicidad, solidez y calidad.
          </p>
        </div>
      </div>

      <div
        id='languages-container'
        className='relative h-[calc(100dvh*5)]'
      >
        <LenguajeTech
          data-speed='1'
          description='HTML'
          icon={icons.html}
          className='absolute left-[calc(100dvw-496px)] top-89'
        />
        <LenguajeTech
          data-speed='1.4'
          description='CSS'
          icon={icons.css}
          className='absolute left-[calc(100dvw-396px)] top-20'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Tailwind CSS'
          icon={icons.tailwindCss}
          className='absolute left-[calc(100dvw-777px)] top-204'
        />
        <LenguajeTech
          data-speed='1'
          description='Sass'
          icon={icons.sass}
          className='absolute left-[calc(100dvw-496px)] top-308'
        />

        <LenguajeTech
          data-speed='1.2'
          description='JavaScript'
          icon={icons.javaScript}
          className='absolute left-27 top-35'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Figma'
          icon={icons.figma}
          className='absolute left-37 top-455'
        />
        <LenguajeTech
          data-speed='0.6'
          description='TypeScript'
          icon={icons.typeScript}
          className='absolute left-118 top-373'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Git'
          icon={icons.git}
          className='absolute left-145 top-475'
        />

        <LenguajeTech
          data-speed='1.2'
          description='React'
          icon={icons.react}
          className='absolute left-10 top-192'
        />
      </div>
    </section>
  );
}
export default Tecnologias;
