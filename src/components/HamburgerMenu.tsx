import { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';
import { icons } from '../utils/icons';
import NavLinks from './NavLinks';
import ag_logo from '../assets/img/ag_logo.webp';

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  className?: string;
};

function HamburgerMenu({ className, isOpen, setIsOpen }: HamburgerMenuProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (isOpen && !navRef?.current?.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id='hamburger-menu'
      ref={navRef}
      className={cn('w-full max-h-78 flex flex-col rounded-4xl bg-main-white overflow-clip transition-all duration-400 relative', className, {
        'w-[75px] max-h-15': !isOpen
      })}
    >
      <div className='px-5 flex justify-between items-center h-15'>
        <img
          src={ag_logo}
          alt='ag-logo'
          className={cn('opacity-40 transition-opacity duration-400', { 'opacity-0': !isOpen })}
        />
        <button
          onClick={handleClick}
          className='w-[75px] h-15 flex justify-center items-center rounded-[64px] text-main-black absolute right-0 top-0'
        >
          {isOpen ? <div className='h-[23px] aspect-square'>{icons.hamburgerClose}</div> : <div className='h-5'>{icons.hamburgerMenu}</div>}
        </button>
      </div>
      <NavLinks
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </nav>
  );
}
export default HamburgerMenu;
