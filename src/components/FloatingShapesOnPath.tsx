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
        viewBox={`0 0 1062 ${height * 9}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='curvy-path'
          d='M738 0C738 1000 1 664 1 1164C1 1664 1063 1537 1063 2037C1063 2537 1 2472 1 2972C1 3472 1063 3997 532 4997'
          stroke='none'
        />
      </svg>
      <FloatingShapes />
    </div>
  );
}
export default FloatingShapesOnPath;
