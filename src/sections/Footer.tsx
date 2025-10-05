import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';

function Footer({ showBoxes }: ShowBoxes) {
  return (
    <footer className='p-10 -ml-10 w-dvw bg-main-black flex justify-between border-t border-transparent-white-30'>
      <div className={cn('flex flex-col gap-1 text-main-white w-fit', { 'bg-red-box': showBoxes })}>
        <h3 className='text-[61.04px] uppercase leading-none'>Aurelio.</h3>
        <p className='font-high-summit text-[25px]'>Frontend Developer</p>
      </div>

      <div className={cn('flex gap-10', { 'bg-yellow-box': showBoxes })}>
        <div className={cn('text-transparent-white-60 flex flex-col w-21.5', { 'bg-blue-box': showBoxes })}>
          <p className='text-main-white font-bold'>Sociales</p>
          <p className='hover:underline cursor-pointer'>LinkedIn</p>
          <p className='hover:underline cursor-pointer'>GitHub</p>
          <p className='hover:underline cursor-pointer'>CV</p>
        </div>
        <div className={cn('text-transparent-white-60 flex flex-col w-21.5', { 'bg-green-box': showBoxes })}>
          <p className='text-main-white font-bold'>Info</p>
          <p className='hover:underline cursor-pointer'>Sobre mí</p>
          <p className='hover:underline cursor-pointer'>Tecnologías</p>
          <p className='hover:underline cursor-pointer'>Proyectos</p>
          <p className='hover:underline cursor-pointer'>Contacto</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
