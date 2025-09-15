import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { MotionPathPlugin } from 'gsap/all'

gsap.registerPlugin(useGSAP, MotionPathPlugin);

type GradientShapeProps = {
  id: string;
  className?: string;
  options: {
    colors: [string, string],
    delay?: number,
    runBackwards?: boolean
  }
}

function GradientShape({ id, className, options }: GradientShapeProps) {
  const { colors, delay, runBackwards } = options;
  
  useGSAP(() => {
    gsap.to(`#${id}`, {
      duration: 12,
      repeat: -1,
      delay: delay ?? 0,
      runBackwards: runBackwards ?? false,
      ease: 'power1.inOut',
      motionPath: {
        path: `#circle-path-${id}`,
        align: `#${id}`
      }
    })
  })
  const colorOne = colors[0];
  const colorTwo = colors[1];

  return (
    <div className={`border w-fit ${className}`}>
      <div id={id} className={`w-60 aspect-square rounded-full bg-radial-[at_25%_25%] from-[${colorOne}] from-20% to-[${colorTwo}]`}></div>
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