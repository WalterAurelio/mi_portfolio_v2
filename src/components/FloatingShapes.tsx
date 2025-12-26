import GradientShape from './GradientShape';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function FloatingShapes() {
  useGSAP(() => {
    gsap.from('#floatingShapes', {
      opacity: 0,
      duration: 2,
      ease: 'power1.in'
    });
  });

  return (
    <div
      id='floatingShapes'
      className='w-90 aspect-square relative'
    >
      <GradientShape
        className='max-lg:scale-50'
        id='shapeA'
        variant={1}
      />
      <GradientShape
        className='rotate-90 absolute left-30 top-30 max-lg:scale-50'
        id='shapeB'
        options={{ runBackwards: true, delay: 5 }}
        variant={2}
      />
    </div>
  );
}
export default FloatingShapes;
