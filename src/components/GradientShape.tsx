import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '../utils/cn';
import type { WithClassName } from '../types/WithClassName';

type Props = {
  id: string;
  options?: {
    delay?: number;
    runBackwards?: boolean;
  };
  variant: 1 | 2;
};

function GradientShape({ id, options, variant, className }: Props & WithClassName) {
  useGSAP(() => {
    gsap.to(`#${id}`, {
      duration: 12,
      repeat: -1,
      delay: options?.delay ?? 0,
      runBackwards: options?.runBackwards ?? false,
      ease: 'power1.inOut',
      motionPath: {
        path: `#circle-path-${id}`,
        align: `#${id}`
      }
    });
  });

  return (
    <div className={cn('w-fit', className)}>
      <div
        id={id}
        className={cn('w-60 aspect-square rounded-full blur-xl', {
          'bg-linear-to-r from-[#A259FF] to-[#FF7262]': variant === 1,
          'bg-linear-to-r from-[#0ACF83] to-[#1ABCFE]': variant === 2
        })}
      ></div>
      <svg
        className='hidden'
        width='240'
        height='240'
        viewBox='0 0 240 240'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id={`circle-path-${id}`}
          d='M120 120 m -120,0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0'
          fill='none'
          stroke='black'
          strokeWidth='2'
        />
      </svg>
    </div>
  );
}
export default GradientShape;
