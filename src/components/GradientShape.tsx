import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { MotionPathPlugin } from 'gsap/all'
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

gsap.registerPlugin(useGSAP, MotionPathPlugin);

type GradientShapeProps = {
  id: string;
  className?: string;
  options?: {
    delay?: number,
    runBackwards?: boolean
  },
  variant: 1 | 2;
}

function GradientShape({ id, className, options, variant }: GradientShapeProps) {
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
    })
  })

  return (
    <div className={`w-fit ${className}`}>

      <div id={id} className={twMerge(clsx('w-60 aspect-square rounded-full blur-xl', {
        'bg-radial-[at_25%_25%] from-[#E07C17] from-20% to-[#4C4880]': variant === 1,
        'bg-radial-[at_25%_25%] from-[#A8F877] from-20% to-[#727082]': variant === 2,
      }))}></div>
      <svg className='hidden' width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
        <path
          id={`circle-path-${id}`}
          d="M120 120 m -120,0 a 120,120 0 1,0 240,0 a 120,120 0 1,0 -240,0"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
    
  )
}
export default GradientShape