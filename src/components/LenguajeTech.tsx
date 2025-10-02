import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useInView } from 'react-intersection-observer';

type LenguajeTechProps = {
  description?: string;
  className?: string;
  imageUrl?: string;
}

function LenguajeTech({ description='Lorem ipsum', className, imageUrl, ...props }: LenguajeTechProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <div ref={ref} className={twMerge('flex w-60 h-77.5 flex-col items-center pt-2 border border-translucent-grey-30 bg-translucent-white-20 backdrop-blur-sm rounded-[56px] overflow-clip relative', className)} {...props}>
      {/* <div className='w-full h-full bg-gradient-to-t from-[#FF007F] to-[rgba(255,255,255,0)] to-[28%]'></div> */}

      <div className='p-3 gap-2 flex items-center rounded-full bg-translucent-black-20 w-fit'>
        <p className='text-main-white'>JavaScript</p>
      </div>
    </div>
  )
}
export default LenguajeTech