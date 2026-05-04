import { useGSAP } from '@gsap/react';
import SectionCompound from '../interfaces/SectionCompound';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { filterBlur } from '../utils/filterBlur';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';

function SobreMi({ className }: WithClassName) {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: 'circ.out' },
      scrollTrigger: { trigger: '#about-section', start: 'top center', end: 'bottom center', toggleActions: 'play none none reverse' }
    });
    const split = SplitText.create('#about-section-body', { type: 'lines', mask: 'lines' });

    tl.from('#about-section-title', { filter: filterBlur, xPercent: -36.5, autoAlpha: 0 })
      .from('#about-handwritten-title', { yPercent: -36.5, autoAlpha: 0 }, '-=0.8')
      .from(split.lines, { yPercent: 100, duration: 0.633, stagger: 0.189 }, '-=0.8');
  });

  return (
    <section
      id='about-section'
      className={cn('w-full h-svh lg:h-screen s-p pt-lg', className)}
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
