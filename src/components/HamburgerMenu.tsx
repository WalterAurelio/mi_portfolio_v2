import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';
import { icons } from '../utils/icons';
import NavLinks from './NavLinks';
import ag_logo from '../assets/img/ag_logo.webp';
import type { WithClassName } from '../types/WithClassName';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function HamburgerMenu({ className }: WithClassName) {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !navRef?.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useGSAP(() => {
    const showAnimation = gsap
      .from('#hamburger-menu', {
        y: -80,
        paused: true,
        ease: 'sine',
        duration: 0.4
      })
      .progress(1);
    const trigger = ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: self => {
        if (!isOpenRef.current) {
          if (self.direction === -1) {
            showAnimation.play();
          } else {
            showAnimation.reverse();
          }
        }
      }
    });
    return () => {
      trigger.kill();
    };
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id='hamburger-menu'
      ref={navRef}
      className={cn('w-full max-w-full lg:max-w-81 max-h-81 flex flex-col rounded-4xl bg-main-white overflow-clip transition-all duration-400 relative', className, {
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
          className='w-[75px] h-15 flex justify-center items-center rounded-[64px] text-main-black absolute right-0 top-0 lg:cursor-pointer'
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
