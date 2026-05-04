import { useGSAP } from '@gsap/react';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';
import gsap from 'gsap';

type Props = WithClassName & {
  variant?: 'warm' | 'cold';
  id: string;
  reverseAnimation?: boolean;
  delay?: number;
};

function GradientShape({ className, variant = 'warm', id, reverseAnimation, delay }: Props) {
  useGSAP(() => {
    gsap.to(`#${id}`, {
      duration: 12,
      repeat: -1,
      ease: 'power1.inOut',
      runBackwards: reverseAnimation,
      delay: delay ?? 0,
      motionPath: {
        path: `#path-${id}`,
        align: `#${id}`
      }
    });
  });

  return (
    <div className={cn('w-fit relative', className)}>
      <div
        id={id}
        className={cn('h-29.25 lg:h-39 aspect-square rounded-full blur-md', {
          'bg-gradient-to-r from-[#ff7262] to-[#a259ff]': variant === 'warm',
          'bg-gradient-to-r from-[#1abcfe] to-[#0acf83]': variant === 'cold'
        })}
      ></div>
      <svg
        className='absolute -top-10.5 left-19.5'
        width='240'
        height='240'
        viewBox='0 0 240 240'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id={`path-${id}`}
          d='M120 120 m -120,0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0'
          fill='none'
          stroke='none'
        />
      </svg>
    </div>
  );
}
export default GradientShape;
