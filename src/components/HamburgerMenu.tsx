import { useState } from 'react';
import { cn } from '../utils/cn';
import { icons } from '../utils/icons';
import NavLinks from './NavLinks';

type HamburgerMenuProps = {
  className?: string;
};

function HamburgerMenu({ className }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn('w-full max-h-78 flex flex-col rounded-4xl bg-main-white shadow-custom-shadow overflow-clip transition-all duration-400 relative', className, {
        'w-[75px] max-h-15 shadow-none': !isOpen
      })}
    >
      <div className='px-5 flex justify-between items-center h-15'>
        <p className={cn('opacity-100 transition-opacity duration-400', { 'opacity-0 -z-10': !isOpen })}>Logo</p>
        <button
          onClick={handleClick}
          className='w-[75px] h-15 flex justify-center items-center rounded-[64px] bg-main-white text-main-black absolute right-0 top-0'
        >
          {isOpen ? <div className='h-[23px] aspect-square'>{icons.hamburgerClose}</div> : <div className='h-5'>{icons.hamburgerMenu}</div>}
        </button>
      </div>
      <NavLinks isOpen={isOpen} />
    </nav>
  );
}
export default HamburgerMenu;
