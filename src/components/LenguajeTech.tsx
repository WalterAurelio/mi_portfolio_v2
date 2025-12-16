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
        'w-[137px] lg:w-45 aspect-[1/1.3] flex flex-col items-center border border-transparent-grey-30 backdrop-blur-sm rounded-sm lg:rounded-md bg-transparent-white-20 relative overflow-clip',
        className
      )}
      /* className={cn(
        'w-45 h-58.5 flex flex-col items-center border border-transparent-grey-30 backdrop-blur-sm rounded-b-md bg-transparent-white-20 relative overflow-clip scale-75',
        className
      )} */
      {...props}
    >
      {/* <div className='p-3 gap-2 flex items-center rounded-full bg-transparent-black-20 w-fit mt-1'>
        <div className='h-2 w-2 rounded-full bg-main-white'></div>
        <p className='text-main-white text-xl leading-3 font-thin -translate-y-[1px]'>{description}</p>
      </div> */}

      <div className='flex items-center justify-center h-[39px] lg:h-13 font-thin'>
        <p>{description}</p>
      </div>

      <div className='size-[153px] lg:size-51 flex items-center justify-center absolute top-[39px] lg:top-13'>{icon}</div>

      <div className='w-full h-full absolute top-0 bg-linear-to-b from-transparent-white-0 from-72% to-radiant-pink opacity-40'></div>
    </div>
  );
}
export default LenguajeTech;
