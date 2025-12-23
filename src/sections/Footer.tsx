import type { WithBoxes } from '../types/WithBoxes';
import { cn } from '../utils/cn';
import { icons } from '../utils/icons';

function Footer({ showBoxes }: WithBoxes) {
  return (
    <footer className='p-4 lg:p-10 -ml-4 lg:-ml-10 w-screen bg-main-black flex justify-between border-t border-transparent-white-30 -mt-[26.25vh]'>
      <div className={cn('hidden lg:flex flex-col gap-1 text-main-white w-fit', { 'bg-red-box': showBoxes })}>
        <h3 className='text-[61.04px] uppercase leading-none'>Aurelio.</h3>
        <p className='font-high-summit text-[25px]'>Frontend Developer</p>
      </div>

      <div className={cn('hidden lg:flex gap-10', { 'bg-yellow-box': showBoxes })}>
        <div className={cn('text-transparent-white-60 flex flex-col w-21.5 gap-1', { 'bg-blue-box': showBoxes })}>
          <p className='text-main-white font-bold'>Sociales</p>
          <a
            href='https://www.linkedin.com/in/aurelio-gareca/'
            target='_blank'
            className='hover:underline cursor-pointer'
          >
            LinkedIn
          </a>
          <a
            href='https://github.com/WalterAurelio'
            target='_blank'
            className='hover:underline cursor-pointer'
          >
            GitHub
          </a>
          <p className='hover:underline cursor-pointer'>CV</p>
        </div>
        <div className={cn('text-transparent-white-60 flex flex-col w-21.5 gap-1', { 'bg-green-box': showBoxes })}>
          <p className='text-main-white font-bold'>Info</p>
          <p className='hover:underline cursor-pointer'>Sobre mí</p>
          <p className='hover:underline cursor-pointer'>Tecnologías</p>
          <p className='hover:underline cursor-pointer'>Proyectos</p>
          <p className='hover:underline cursor-pointer'>Contacto</p>
        </div>
      </div>

      <div className='flex lg:hidden gap-5 mx-auto'>
        <div className='w-12.5 aspect-square border border-transparent-white-30 rounded-full flex items-center justify-center'>
          <a
            href='https://github.com/WalterAurelio'
            target='_blank'
            className='w-5.5 aspect-square text-main-white'
          >
            {icons.gitHub}
          </a>
        </div>
        <div className='w-12.5 aspect-square border border-transparent-white-30 rounded-full flex items-center justify-center'>
          <a
            href='https://www.linkedin.com/in/aurelio-gareca/'
            target='_blank'
            className='w-5.5 aspect-square text-main-white'
          >
            {icons.linkedIn}
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
