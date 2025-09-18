import clsx from 'clsx'
import type { SeeBoxes } from '../sections/Hero'

function CircularText({ className, seeBoxes }: SeeBoxes & { className?: string }) {
  return (
    <div className={clsx('flex items-center justify-center w-fit aspect-square', className, { 'bg-pink-200': seeBoxes })}>
      <svg viewBox="0 0 200 200" className="w-36 h-36 animate-spin-slow">
        <defs>
          <path id="circle" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"/>
        </defs>

        <text fill="currentColor" className="text-[19px] font-medium tracking-widest">
          <textPath href="#circle" startOffset="0%">
            • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL
          </textPath>
        </text>
      </svg>
    </div>
  )
}
export default CircularText