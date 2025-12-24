import { cn } from '../utils/cn';
import type { WithClassName } from '../types/WithClassName';

type Props = {
  description: string;
  icon: string;
} & WithClassName;

function LenguajeTech({ description, icon, className, ...props }: Props) {
  return (
    <div
      className={cn(
        'w-[137px] lg:w-45 aspect-[1/1.3] flex flex-col items-center backdrop-blur-sm rounded-[40px] lg:rounded-[52px] bg-transparent-white-20 relative overflow-clip border border-transparent-grey-30',
        className
      )}
      {...props}
    >
      <p className='flex items-center justify-center h-[39px] lg:h-13 font-light'>{description}</p>
      <img
        src={icon}
        alt=''
        className='min-w-[153px] min-h-[153px] lg:min-w-51 lg:min-h-51 absolute top-[39px] lg:top-13'
      />
      <div className='w-full h-full absolute top-0 bg-linear-to-b from-transparent-white-0 from-72% to-radiant-pink opacity-40'></div>
    </div>
  );
}
export default LenguajeTech;
