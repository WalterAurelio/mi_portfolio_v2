import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { icons } from '../utils/icons';

function FrontendDeveloper() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set('#frontend-developer path', {
      strokeWidth: '1px',
      stroke: '#171413'
    })
      .from('#frontend-developer path', {
        delay: 2.8,
        drawSVG: 0,
        duration: 2,
        ease: 'expo.out',
        stagger: 0.1
      })
      .to('#frontend-developer path', {
        delay: -3.5,
        fill: '#171413',
        duration: 0.1,
        stagger: 0.1
      });
  });

  return <div className='w-[76.88vw] md:w-[35.2vw]'>{icons.frontendDeveloper}</div>;
}
export default FrontendDeveloper;
