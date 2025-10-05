import { useState } from 'react';
import InfoProyecto from './InfoProyecto';
import { cn } from '../utils/cn';

type ProyectoProps = {
  id?: string;
  className?: string;
  nombreProyecto?: string;
  description?: string;
};

function Proyecto({ id, className, nombreProyecto = 'Nombre Proyecto', description }: ProyectoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id={id ?? undefined}
      className={cn('h-dvh flex items-center justify-center px-64 bg-main-black relative', className)}
    >
      <div className='absolute w-full h-full bg-[url(./assets/img/StockSnap_YPGOEJM7JO.jpg)] bg-cover bg-center opacity-20'></div>
      <InfoProyecto
        setIsOpen={setIsOpen}
        className={cn('transition-all duration-300 -translate-y-[calc(100dvh-40px)] opacity-0', { '-translate-y-0 opacity-100': isOpen })}
      />

      <div
        onClick={() => setIsOpen(true)}
        className={cn('flex flex-col w-fit items-center z-10 cursor-pointer hover:scale-110 transition-all duration-300 absolute bottom-[50%] translate-y-[50%]', {
          'translate-y-[calc(100dvh-40px)] opacity-0': isOpen
        })}
      >
        <h3 className='text-[39.06px] text-main-white font-semibold text-center'>{nombreProyecto}</h3>
        <p className='text-xl text-transparent-white-60 -mt-2'>{description ?? 'Mauris non urna id nibh mattis vulputate at at velit.'}</p>
      </div>
    </div>
  );
}
export default Proyecto;
