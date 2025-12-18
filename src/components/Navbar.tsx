import { ScrollTrigger } from 'gsap/all';
import { cn } from '../utils/cn';
import NavLinks from './NavLinks';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  useGSAP(() => {
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
      <p>Logo</p>
      <NavLinks isOpen />
    </nav>
  );
}
export default Navbar;
