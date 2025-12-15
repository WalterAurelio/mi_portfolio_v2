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
        className={cn('flex flex-col justify-center max-w-133.5 h-svh lg:h-screen m-auto', { 'bg-yellow-box': showBoxes })}
      >
        <div className={cn('relative flex flex-col max-lg:gap-4', { 'bg-green-box': showBoxes })}>
          <h2 className='text-[52.67px] lg:text-[97.66px] text-center tecnologias-animate'>Tecnologías.</h2>
          {/* <CursiveTitle className='absolute left-27 top-18 -z-10 tecnologias-animate'>Tecnologias</CursiveTitle> */}
          <CursiveTitle className='absolute left-[50%] -translate-x-[50%] top-12 lg:top-18 -z-10 tecnologias-animate'>Tecnologias</CursiveTitle>
          <p className='lg:text-xl font-thin text-center tecnologias-animate'>
            El stack tecnológico que forma parte de mi proceso para
            <br className='hidden' /> el desarrollo de productos digitales, combinando simplicidad, solidez y calidad.
          </p>
        </div>
      </div>

      <div
        id='languages-container'
        className='relative h-[calc(100vh*4)] lg:h-[calc(100vh*4)]'
      >
        <LenguajeTech
          data-speed='1.4'
          description='CSS'
          icon={icons.css}
          className='absolute max-lg:right-0 lg:left-[calc(100dvw-396px)] top-[2.1%]'
        />
        <LenguajeTech
          data-speed='1.2'
          description='JavaScript'
          icon={icons.javaScript}
          className='absolute lg:left-27 top-[3.67%]'
        />
        <LenguajeTech
          data-speed='1'
          description='HTML'
          icon={icons.html}
          className='absolute left-[41px] lg:left-[calc(100dvw-496px)] top-[9.34%]'
        />
        <LenguajeTech
          data-speed='1.2'
          description='React'
          icon={icons.react}
          className='absolute lg:left-10 top-[20.16%]'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Tailwind CSS'
          icon={icons.tailwindCss}
          className='absolute left-[53px] lg:left-[calc(100dvw-777px)] top-[21.42%]'
        />
        <LenguajeTech
          data-speed='1'
          description='Sass'
          icon={icons.sass}
          className='absolute max-lg:right-0 lg:left-[calc(100dvw-496px)] top-[32.34%]'
        />
        <LenguajeTech
          data-speed='0.6'
          description='TypeScript'
          icon={icons.typeScript}
          className='absolute left-[37px] lg:left-118 top-[49.16%]'
        />
        <LenguajeTech
          data-speed='1.2'
          description='Figma'
          icon={icons.figma}
          className='absolute lg:left-37 top-[57.77%]'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Git'
          icon={icons.git}
          className='absolute left-[57px] lg:left-145 top-[59.87%]'
        />
      </div>
    </section>
  );
}
export default Tecnologias;
