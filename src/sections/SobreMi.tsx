import { useGSAP } from '@gsap/react';
import SectionCompound from '../interfaces/SectionCompound';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

function SobreMi() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: 'circ.out' },
      scrollTrigger: { trigger: '#about-section', start: 'top center', end: 'bottom center', toggleActions: 'play none none reverse' }
    });
    const split = SplitText.create('#about-section-body', { type: 'lines', mask: 'lines' });

    tl.from('#about-section-title', { filter: 'blur(20px)', xPercent: -36.5 })
      .from('#about-handwritten-title', { yPercent: -36.5, autoAlpha: 0 }, '-=0.8')
      .from(split.lines, { yPercent: 100, duration: 0.633, stagger: 0.189 }, '-=0.8');
  });

  return (
    <section
      id='about-section'
      className='w-full h-svh lg:h-screen s-p pt-lg'
    >
      <SectionCompound
        id='about'
        title='Sobre mí'
        handwritten='Sobre mi'
      />
    </section>
  );
}
export default SobreMi;
