import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectSlide from '../interfaces/ProjectSlide';
import SectionCompound from '../interfaces/SectionCompound';
import { ScrollTrigger } from 'gsap/all';

function Proyectos() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('#slide-a', { xPercent: 100 }).from('#slide-b', { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl,
      trigger: '#projects-section',
      start: 'top top',
      end: '+=200%',
      scrub: true,
      pin: true
    });
  });

  return (
    <section
      id='projects-section'
      className='relative'
    >
      <div className='w-full h-svh lg:h-screen s-p pt-lg'>
        <SectionCompound
          title='Proyectos'
          handwritten='Proyectos'
          className='lg:ml-auto'
        />
      </div>
      <ProjectSlide
        id='slide-a'
        className='absolute top-0 left-0'
      />
      <ProjectSlide
        id='slide-b'
        className='absolute top-0 left-0'
      />
    </section>
  );
}
export default Proyectos;
