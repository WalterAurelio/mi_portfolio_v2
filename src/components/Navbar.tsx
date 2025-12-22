import { cn } from '../utils/cn';
import NavLinks from './NavLinks';
import ag_logo from '../assets/img/ag_logo.webp';

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  return (
    <nav
      id='navbar'
      className={cn('flex w-full justify-between items-center text-lg', className)}
    >
      <div className=' bg-smart-white mask-[url(./assets/img/ag_logo.webp)] mask-center mask-contain mask-no-repeat'>
        <img
          src={ag_logo}
          alt='ag-logo'
          className='h-10 opacity-40'
        />
      </div>
      <NavLinks isOpen />
    </nav>
  );
}
export default Navbar;
