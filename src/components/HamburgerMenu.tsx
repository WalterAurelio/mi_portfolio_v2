import { useRef } from 'react';
import { useHamburgerStore } from '../store/hamburgerStore';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';
import NavigationLinks from './NavigationLinks';
import { useHandleClickOutside } from '../hooks/useHandleClickOutside';
import miLogo from '../assets/svgs/MiLogo.svg';
import hamburger from '../assets/svgs/icons/Hamburger.svg';
import close from '../assets/svgs/icons/Close.svg';

function HamburgerMenu({ className }: WithClassName) {
  const isOpen = useHamburgerStore(state => state.isOpen);
  const setIsOpen = useHamburgerStore(state => state.setIsOpen);
  const navRef = useRef<HTMLElement>(null);

  useHandleClickOutside(navRef);

  return (
    <nav
      ref={navRef}
      className={cn('bg-main-white w-full max-h-78 flex flex-col rounded-4xl overflow-clip transition-all duration-400 relative', className, { 'w-[75px] max-h-15': !isOpen })}
    >
      <div className='px-5 flex justify-between items-center h-15'>
        <img
          src={miLogo}
          alt=''
          className={cn('opacity-40 max-w-62 transition-opacity duration-400', { 'opacity-0': !isOpen })}
        />
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className='w-[75px] h-15 flex justify-center items-center rounded-[64px] absolute top-0 right-0'
        >
          <img
            src={isOpen ? close : hamburger}
            alt=''
            className={cn('h-5', { 'h-[23px] aspect-square': isOpen })}
          />
        </button>
      </div>

      <NavigationLinks />
    </nav>
  );
}
export default HamburgerMenu;
