import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

type ProyectoProps = {
  id?: string;
  className?: string;
  nombreProyecto?: string;
  description?: string;
};

function Proyecto({ id, className, nombreProyecto = 'Nombre Proyecto', description }: ProyectoProps) {
  return (
    <div
      id={id ?? undefined}
      className={cn('h-lvh lg:h-screen w-full flex items-center justify-center px-4 lg:px-64 bg-main-black relative', className)}
    >
      <div className='absolute w-full h-full bg-[url(./assets/img/StockSnap_YPGOEJM7JO.jpg)] bg-cover bg-center opacity-20'></div>
      <Link
        to='/proyecto'
        className='flex flex-col w-fit items-center z-10 lg:cursor-pointer lg:hover:scale-110 transition-all duration-300 text-center'
      >
        <h3 className='text-[31.25px] lg:text-[39.06px] text-main-white font-semibold text-center'>{nombreProyecto}</h3>
        <p className='lg:text-xl text-transparent-white-60 lg:-mt-2 max-lg:leading-5'>{description ?? 'Mauris non urna id nibh mattis vulputate at at velit.'}</p>
      </Link>
    </div>
  );
}
export default Proyecto;
