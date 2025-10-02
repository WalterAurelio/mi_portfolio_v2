import { clsx } from 'clsx';
import type { ShowBoxes } from '../types/showBoxes';
import CursiveTitle from '../components/CursiveTitle';

function SobreMi({ showBoxes }: ShowBoxes) {
  return (
    <section className={clsx('h-dvh flex flex-col justify-between py-10', { 'bg-red-box': showBoxes })}>
      <div className={clsx('flex flex-col gap-10 max-w-265.5 relative', { 'bg-yellow-box': showBoxes })}>
        <h2 className='text-[97.66px]'>Sobre mí.</h2>
        <p className='text-[25px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis. Suspendisse tristique mollis
          lorem quis ullamcorper. Donec quis nunc consequat, lobortis odio at, ultrices nulla. Duis euismod elit vitae tincidunt faucibus.
        </p>
        <CursiveTitle className='absolute left-27 top-18 -z-10'>Sobre mi</CursiveTitle>
      </div>
    </section>
  );
}
export default SobreMi;
