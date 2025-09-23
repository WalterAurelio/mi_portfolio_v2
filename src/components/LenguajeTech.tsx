import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useInView } from 'react-intersection-observer';

type LenguajeTechProps = {
  description?: string;
  className?: string;
  imageUrl: string;
  imgOptions?: {
    x?: string;
    y?: string;
    rotate?: string;
  }
}

function LenguajeTech({ description='Lorem ipsum', className, imageUrl, imgOptions, ...props }: LenguajeTechProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  return (
    <div ref={ref} className={twMerge('flex w-[283px] h-85 p-5.5 flex-col items-center border border-translucent-grey-30 bg-[#eee] cursor-pointer', className)} {...props}>
      <div className='flex w-full aspect-square border border-translucent-grey-30 overflow-clip relative'>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={clsx('bg-cover absolute w-108 h-108', imgOptions?.x, imgOptions?.y, imgOptions?.rotate, 'polaroid', { 'inView': inView })}></div>
        <div className={clsx('w-full aspect-square bg-gradient-to-t from-black-gradient to-white-gradient to-10% z-10', { 'polaroid inView': inView })}></div>
      </div>
      <div className='flex justify-center items-center self-stretch text-main-black font-gloria-hallelujah text-xl h-full'>
        {description}
      </div>
    </div>
  )
}
export default LenguajeTech