import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { pathEase } from '../utils/pathEaseFn';
import FloatingShapes from './FloatingShapes';

function FloatingShapesOnPath() {
  useGSAP(() => {
    gsap.to('#floatingShapes', {
      motionPath: {
        path: '#curvyPath',
        align: '#curvyPath',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      immediateRender: true,
      ease: pathEase('#curvyPath'),
      scrollTrigger: {
        trigger: '#curvyPath',
        start: 'top center',
        end: () => '+=' + document.querySelector('#curvyPath')?.getBoundingClientRect().height,
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });

  return (
    <div className='w-dvw absolute -left-10 -z-10'>
      <svg
        className='block w-screen h-[678.75vh] lg:h-[878.75vh]' /* w-[78.2%] */
        viewBox='0 0 1062 6000'
        preserveAspectRatio='none'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='curvyPath'
          d='M737.5 0C737.5 1000 0.5 664 0.5 1164C0.5 1664 1062.5 1537 1062.5 2037C1062.5 2537 0.5 2472 0.5 2972C0.5 3472 1062.5 3997 531.5 4997C0.5 5997 531.5 6000 531.5 6000'
          stroke='none'
        />
      </svg>

      <FloatingShapes />
    </div>
  );
}
export default FloatingShapesOnPath;
