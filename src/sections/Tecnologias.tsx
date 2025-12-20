import LenguajeTech from '../components/LenguajeTech';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';
import CursiveTitle from '../components/CursiveTitle';
import { icons } from '../utils/icons';

function Tecnologias({ showBoxes }: ShowBoxes) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)'
      },
      context => {
        const { isMobile } = context.conditions as gsap.Conditions;

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
          opacity: 0,
          scale: 1.04,
          duration: 1.6,
          ease: 'expo.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#tecnologias-section',
            start: isMobile ? 'top center' : 'top top',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse'
          }
        });
      }
    );
  });

  return (
    <section
      id='tecnologias-section'
      className={cn('flex flex-col justify-between', { 'bg-red-box': showBoxes })}
    >
      <div
        id='tecnologias-description'
        className={cn('flex flex-col justify-center max-w-133.5 min-h-[50vh] h-fit lg:h-screen m-auto', { 'bg-yellow-box': showBoxes })}
      >
        <div className={cn('relative flex flex-col max-lg:gap-4', { 'bg-green-box': showBoxes })}>
          <h2 className='text-[52.67px] lg:text-[97.66px] text-center tecnologias-animate'>Tecnologías.</h2>
          <CursiveTitle className='absolute left-[50%] -translate-x-[50%] top-12 lg:top-18 -z-10 tecnologias-animate'>Tecnologias</CursiveTitle>
          <p className='lg:text-xl font-light text-center tecnologias-animate'>
            El stack tecnológico que forma parte de mi proceso para
            <br className='hidden' /> el desarrollo de productos digitales, combinando simplicidad, solidez y calidad.
          </p>
        </div>
      </div>

      <div
        id='languages-container'
        className='relative h-[300vh] lg:h-[400vh]'
      >
        <LenguajeTech
          data-speed='1.4'
          description='CSS'
          icon={icons.css}
          className='absolute right-0 md:right-[calc(23.83%-180px)] top-[2.1%]'
        />
        <LenguajeTech
          data-speed='1.2'
          description='JavaScript'
          icon={icons.javaScript}
          className='absolute md:left-[8.55%] top-[3.67%]'
        />
        <LenguajeTech
          data-speed='1'
          description='HTML'
          icon={icons.html}
          className='absolute right-[14.24%] md:right-[calc(31.75%-180px)] top-[9.34%]'
        />
        <LenguajeTech
          data-speed='1.2'
          description='React'
          icon={icons.react}
          className='absolute md:left-[3.17%] top-[20.16%]'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Tailwind CSS'
          icon={icons.tailwindCss}
          className='absolute left-[46%] top-[21.42%]'
        />
        <LenguajeTech
          data-speed='1'
          description='Sass'
          icon={icons.sass}
          className='absolute right-0 md:right-[calc(31.75%-180px)] top-[32.34%]'
        />
        <LenguajeTech
          data-speed='0.6'
          description='TypeScript'
          icon={icons.typeScript}
          className='absolute left-[37.37%] top-[49.16%]'
        />
        <LenguajeTech
          data-speed='1.2'
          description='Figma'
          icon={icons.figma}
          className='absolute md:left-[11.72%] top-[57.77%]'
        />
        <LenguajeTech
          data-speed='0.8'
          description='Git'
          icon={icons.git}
          className='absolute left-[45.92%] top-[59.87%]'
        />
      </div>
    </section>
  );
}
export default Tecnologias;
