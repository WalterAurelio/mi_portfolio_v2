import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectSlide from '../interfaces/ProjectSlide';
import SectionCompound from '../interfaces/SectionCompound';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { filterBlur } from '../utils/filterBlur';

function Proyectos() {
  useGSAP(() => {
    const tl1 = gsap.timeline({
      defaults: { duration: 1.2, ease: 'circ.out' },
      scrollTrigger: { trigger: '#projects-section', start: 'top center', end: 'bottom center', toggleActions: 'play none none reverse' }
    });
    const split = SplitText.create('#projects-section-body', { type: 'lines', mask: 'lines' });

    tl1
      .from('#projects-section-title', { filter: filterBlur, xPercent: 36.5, autoAlpha: 0 })
      .from('#projects-handwritten-title', { yPercent: -36.5, autoAlpha: 0 }, '-=0.8')
      .from(split.lines, { yPercent: 100, duration: 0.632, stagger: 0.189 }, '-=0.8');

    const tl2 = gsap.timeline();
    tl2.from('#slide-a', { xPercent: 100 }).from('#slide-b', { xPercent: 100 });

    ScrollTrigger.create({
      animation: tl2,
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
          id='projects'
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
