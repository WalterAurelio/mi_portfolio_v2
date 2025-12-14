import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';
import { pathEase } from '../utils/pathEaseFn';
import { useEffect, useState } from 'react';
import FloatingShapes from './FloatingShapes';

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

function FloatingShapesOnPath() {
  const [height, setHeight] = useState(window.innerHeight);

  useGSAP(() => {
    gsap.to('#floating-shapes', {
      motionPath: {
        path: '#curvy-path',
        align: '#curvy-path',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      immediateRender: true,
      ease: pathEase('#curvy-path'),
      scrollTrigger: {
        trigger: '#curvy-path',
        start: 'top center',
        end: () => '+=' + document.querySelector('#curvy-path')?.getBoundingClientRect().height,
        scrub: true
      }
    });
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setHeight(window.innerHeight);
      });
    };
  }, []);

  return (
    <div className='w-dvw absolute -left-10 -z-10'>
      <svg
        width='auto'
        height={height * 9}
        // viewBox={`0 0 1062 ${height * 9}`}
        viewBox='0 0 1063 6001'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='curvy-path'
          d='M737.5 0C737.5 1000 0.5 664 0.5 1164C0.5 1664 1062.5 1537 1062.5 2037C1062.5 2537 0.5 2472 0.5 2972C0.5 3472 1062.5 3997 531.5 4997C0.5 5997 531.5 6000 531.5 6000'
          stroke='none'
        />
      </svg>

      <FloatingShapes />
    </div>
  );
}
export default FloatingShapesOnPath;
