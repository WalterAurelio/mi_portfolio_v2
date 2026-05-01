import FloatingShapes from './FloatingShapes';
import CurvyPath from '../assets/svg/Vector.svg?react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { pathEase } from '../utils/pathEaseFn';

function FloatingShapesOnPath() {
  useGSAP(() => {
    gsap.to('#floating-shapes', {
      motionPath: {
        path: '#curvy-path path',
        align: '#curvy-path path',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      immediateRender: true,
      ease: pathEase('#curvy-path path'),
      scrollTrigger: {
        trigger: '#curvy-path path',
        start: 'top center',
        end: () => '+=' + document.querySelector('#curvy-path path')?.getBoundingClientRect().height,
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });

  return (
    <div className='absolute -z-10'>
      <CurvyPath id='curvy-path' />
      <FloatingShapes id='floating-shapes' />
    </div>
  );
}
export default FloatingShapesOnPath;
