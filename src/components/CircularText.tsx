import type { WithBoxes } from '../types/WithBoxes';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';

function CircularText({ showBoxes, className }: WithBoxes & WithClassName) {
  return (
    <div className={cn('flex items-center justify-center w-fit aspect-square', className, { 'bg-red-box': showBoxes })}>
      <svg
        id='circular-text'
        viewBox='0 0 200 200'
        className='w-36 h-36'
      >
        <defs>
          <path
            id='circle-path-for-text'
            d='M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0'
          />
        </defs>
        <text
          fill='currentColor'
          className='text-[19px] font-medium tracking-widest'
        >
          <textPath
            href='#circle-path-for-text'
            startOffset='0%'
          >
            • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL
          </textPath>
        </text>
      </svg>
    </div>
  );
}
export default CircularText;
