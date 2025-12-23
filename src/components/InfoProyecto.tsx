import { icons } from '../utils/icons';
import Button from './Button';
import { cn } from '../utils/cn';
import type { WithClassName } from '../types/WithClassName';

const checkItems = [{ description: 'Phasellus sed feugiat' }, { description: 'Donec quis nunc' }, { description: 'Suspendisse tristique' }, { description: 'Duis euismod elit' }];

function InfoProyecto({ className }: WithClassName) {
  return (
    <div className={cn('flex flex-col h-[calc(100dvh-80px)] justify-between text-main-white relative', className)}>
      <div className='flex flex-col items-start font-semibold uppercase'>
        <p className='text-[39.06px] -mb-2.5'>Nombre Proyecto</p>
        <p className='text-transparent-white-60 text-xl'>Desarrollo Frontend</p>
      </div>

      <div className='flex flex-col items-start text-xl h-full justify-evenly'>
        <p className='font-light leading-[200%]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis. Suspendisse tristique mollis
          lorem quis ullamcorper. Donec quis nunc consequat, lobortis odio at, ultrices nulla. Duis euismod elit vitae tincidunt faucibus.
        </p>

        <div className='flex pl-4 flex-col items-start font-medium gap-4'>
          {checkItems.map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-4'
            >
              <div className='flex h-3.5 justify-center items-center'>{icons.check}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className='flex items-start gap-5'>
          <Button>Ver demo</Button>
          <Button variant='minimal'>Ver repositorio</Button>
        </div>

        <button
          type='button'
          className='absolute top-4.5 right-0 flex w-[53px] aspect-square p-3.5 justify-center items-center border rounded-full border-transparent-white-30 cursor-pointer hover:scale-110 transition-all'
        >
          {icons.close}
        </button>
      </div>
    </div>
  );
}
export default InfoProyecto;
