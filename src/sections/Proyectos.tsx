import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Proyectos() {
  useGSAP(() => {
    gsap.from('#proyectos-description', {
      xPercent: 100,
      ease: 'power4.out',
      duration: 1,
      scrollTrigger: {
        // trigger: '#sobre-mi-section',
        trigger: '#tecnologias-section',
        start: 'bottom bottom',
        toggleActions: 'restart',
        // scrub: true,
        endTrigger: '.scroll-panel-a',
        end: 'top top',
        // markers: true
      }
    });
  })

  return (
    <section className='bg-green-300 h-dvh flex flex-col justify-between py-10'>
      <div id='proyectos-description' className='flex flex-col gap-10 bg-amber-200 max-w-[1062px] relative'>
        <h2 className='text-[183.12px] uppercase text-nowrap leading-none z-1 proyectos-text w-fit'>Proyectos • Proyectos • Proyectos • Proyectos • </h2>
        <p className='text-[25px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis. Suspendisse tristique mollis
          lorem quis ullamcorper. Donec quis nunc consequat, lobortis odio at, ultrices nulla. Duis euismod elit vitae tincidunt faucibus.
        </p>
        <p className='font-high-summit text-translucent-grey text-[61.04px] absolute left-[108px] top-16'>Proyectos</p>
      </div>
    </section>
  );
}
export default Proyectos;
