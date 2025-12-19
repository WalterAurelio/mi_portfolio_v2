import { ScrollTrigger } from 'gsap/all';
import { cn } from '../utils/cn';
import NavLinks from './NavLinks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ag_logo from '../assets/img/ag_logo.png';

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  useGSAP(() => {
    gsap.from('#navbar div', {
      y: -80,
      delay: 4.8,
      ease: 'expo',
      duration: 1.6
    });

    const showAnimation = gsap
      .from('#navbar', {
        y: -80,
        paused: true,
        ease: 'sine',
        duration: 0.4
      })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: self => {
        if (self.direction === -1) {
          showAnimation.play();
        } else {
          showAnimation.reverse();
        }
      }
    });
  });

  return (
    <nav
      id='navbar'
      className={cn('flex w-full justify-between items-center text-lg', className)}
    >
      <div className=' bg-smart-white mask-[url(./assets/img/ag_logo.png)] mask-center mask-contain mask-no-repeat'>
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
