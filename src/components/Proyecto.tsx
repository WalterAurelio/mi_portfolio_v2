import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';
import bg_img from '../assets/img/StockSnap_YPGOEJM7JO.webp';
import type { WithClassName } from '../types/WithClassName';

type Props = {
  id?: string;
  nombreProyecto?: string;
  description?: string;
} & WithClassName;

function Proyecto({ id, nombreProyecto = 'Nombre Proyecto', description, className }: Props) {
  return (
    <div
      id={id ?? undefined}
      className={cn('h-lvh lg:h-screen w-full flex items-center justify-center px-4 lg:px-64 bg-main-black relative overflow-clip', className)}
    >
      <img
        src={bg_img}
        alt='fondo-placeholder'
        className='absolute size-full object-cover opacity-20'
      />
      <Link
        to='/proyecto'
        className='flex flex-col w-fit items-center z-10 lg:cursor-pointer lg:hover:scale-110 transition-all duration-400 text-center'
      >
        <h3 className='text-[31.25px] lg:text-[39.06px] text-main-white font-semibold text-center'>{nombreProyecto}</h3>
        <p className='lg:text-xl text-transparent-white-60 lg:-mt-2 max-lg:leading-5'>{description ?? 'Mauris non urna id nibh mattis vulputate at at velit.'}</p>
      </Link>
    </div>
  );
}
export default Proyecto;
