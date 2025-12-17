import GradientShape from './GradientShape';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function FloatingShapes() {
  useGSAP(() => {
    gsap.from('#floating-shapes', {
      autoAlpha: 0,
      duration: 2,
      ease: 'power1.in'
    });
  });

  return (
    <div
      id='floating-shapes'
      className='w-90 aspect-square relative'
    >
      <GradientShape
        className='max-md:scale-50'
        id='shape-a'
        variant={1}
      />
      <GradientShape
        className='rotate-90 absolute left-30 top-30 max-md:scale-50'
        id='shape-b'
        options={{ runBackwards: true, delay: 5 }}
        variant={2}
      />
    </div>
  );
}
export default FloatingShapes;
