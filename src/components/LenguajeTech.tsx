import type React from 'react';
import { cn } from '../utils/cn';

type LenguajeTechProps = {
  className?: string;
  description?: string;
  icon: React.JSX.Element;
};

function LenguajeTech({ className, description = 'Lorem ipsum', icon, ...props }: LenguajeTechProps) {
  return (
    <div
      className={cn(
        'w-[137px] lg:w-45 aspect-[1/1.3] flex flex-col items-center backdrop-blur-sm rounded-[40px] lg:rounded-[52px] bg-transparent-white-20 relative overflow-clip',
        className
      )}
      {...props}
    >
      <div className='flex items-center justify-center h-[39px] lg:h-13 font-light'>
        <p>{description}</p>
      </div>

      <div className='size-[153px] lg:size-51 flex items-center justify-center absolute top-[39px] lg:top-13'>{icon}</div>

      <div className='w-full h-full absolute top-0 bg-linear-to-b from-transparent-white-0 from-72% to-radiant-pink opacity-40'></div>
    </div>
  );
}
export default LenguajeTech;
