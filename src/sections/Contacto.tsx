import { useGSAP } from '@gsap/react';
import Button from '../components/Button';
import MiscTitle from '../components/MiscTitle';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { filterBlur } from '../utils/filterBlur';

function Contacto() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2 },
      scrollTrigger: { trigger: '#contact-section', start: 'top center', end: 'bottom center', toggleActions: 'play none none reverse' }
    });
    const split = SplitText.create('#contact-title', { type: 'words', mask: 'words' });

    tl.from(split.words, {
      yPercent: -100,
      duration: 0.48,
      stagger: 0.144,
      ease: 'expo.inOut'
    })
      .from('#contact-email', { filter: filterBlur, yPercent: 50, autoAlpha: 0, ease: 'power3.inOut' }, '-=0.8')
      .from('#contact-button', { autoAlpha: 0, scale: 1.5, ease: 'circ.out' }, '-=.2');
  });

  return (
    <section
      id='contact-section'
      className='h-96 lg:h-screen p-l lg:pt-5 bg-neutral-inverse-primary flex flex-col items-center'
    >
      <MiscTitle id='contact-title'>
        Lorem ipsum dolor sit
        <br /> amet consectetur
      </MiscTitle>

      <div className=' flex flex-col items-center my-auto gap-10 lg:gap-20'>
        <p
          id='contact-email'
          className='text-neutral-inverse-primary font-misc text-[10.8028125vw] lg:text-[9.678497vw] font-bold leading-[100%] uppercase '
        >
          aureliogareca.dev@gmail.com
        </p>
        <Button
          id='contact-button'
          buttonStyle='outline'
        >
          Contactar
        </Button>
      </div>
    </section>
  );
}
export default Contacto;
