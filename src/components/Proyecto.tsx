import { useState } from 'react';
import InfoProyecto from './InfoProyecto';
import clsx from 'clsx';

type ProyectoProps = {
  id?: string;
  className?: string;
  nombreProyecto?: string;
  description?: string;
}

function Proyecto({ id, className, nombreProyecto='Nombre Proyecto', description }: ProyectoProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div id={id ?? undefined} className={`h-dvh flex items-center justify-center px-64 bg-main-black ${className}`}>
      <div className='bg-[url(./assets/img/StockSnap_YPGOEJM7JO.jpg)] absolute w-full h-full bg-cover bg-center opacity-20'></div>

      <InfoProyecto setIsOpen={setIsOpen} className={clsx('hidden', { 'z-10 flex': isOpen })} />
      
      <div onClick={() => setIsOpen(true)} className={clsx('flex flex-col w-fit items-center z-10 cursor-pointer hover:scale-110 transition-all', { 'hidden': isOpen })}>
        <h3 className='text-[39.06px] text-main-white font-semibold text-center'>{nombreProyecto}</h3>
        <p className='text-xl text-translucent-white-60 -mt-2'>{description ?? 'Mauris non urna id nibh mattis vulputate at at velit.'}</p>
      </div>
    </div>
  )
}
export default Proyecto