import { clsx } from 'clsx';
import type { SeeBoxes } from './Hero';

function SobreMi({ seeBoxes }: SeeBoxes) {
  return (
    <section id='sobre-mi-section' className={clsx('h-dvh flex flex-col justify-between py-10', { 'bg-green-300': seeBoxes })}>
      <div className={clsx('flex flex-col gap-10 max-w-[1062px] relative', { 'bg-amber-200': seeBoxes })}>
        <h2 className='text-[97.66px] z-1'>Sobre mí.</h2>
        <p className='text-[25px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis. Suspendisse tristique mollis
          lorem quis ullamcorper. Donec quis nunc consequat, lobortis odio at, ultrices nulla. Duis euismod elit vitae tincidunt faucibus.
        </p>
        <p className='font-high-summit text-translucent-grey-30 text-[61.04px] absolute left-[108px] top-18'>Sobre mi</p>
      </div>
    </section>
  );
}
export default SobreMi;
