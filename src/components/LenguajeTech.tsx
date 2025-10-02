import { cn } from '../utils/cn';

type LenguajeTechProps = {
  className?: string;
  description?: string;
};

function LenguajeTech({ className, description = 'Lorem ipsum', ...props }: LenguajeTechProps) {
  return (
    <div
      className={cn(
        'w-60 h-77.5 flex flex-col items-center border border-transparent-grey-30 backdrop-blur-sm rounded-[56px] overflow-clip bg-transparent-white-20 relative',
        className
      )}
      {...props}
    >
      {/* <div className='p-3 gap-2 flex items-center rounded-full bg-transparent-black-20 w-fit'>
        <div className='h-2 w-2 rounded-full bg-main-white'></div>
        <p className='text-main-white leading-3'>{description}</p>
      </div> */}

      <div className='flex items-center justify-center h-17.5 text-xl'>
        <p>{description}</p>
      </div>

      <div className='w-full h-full absolute top-0 bg-linear-to-b from-transparent-white-0 from-72% to-radiant-pink opacity-40'></div>
    </div>
  );
}
export default LenguajeTech;
