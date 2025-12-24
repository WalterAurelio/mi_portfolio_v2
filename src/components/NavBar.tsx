import { useGSAP } from '@gsap/react';
import HamburgerMenu from './HamburgerMenu';
import TopBar from './TopBar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useHamburgerStore } from '../store/hamburgerStore';
import { useEffect, useRef } from 'react';

function NavBar() {
  const isOpen = useHamburgerStore(state => state.isOpen);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useGSAP(() => {
    const showAnimation = gsap
      .from('#navigation-bar', {
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

    return () => trigger.kill();
  });

  return (
    <div
      id='navigation-bar'
      className='absolute top-4 lg:top-10 w-[calc(100%-32px)] lg:w-[calc(100%-80px)] z-10'
    >
      <HamburgerMenu className='lg:hidden ml-auto' />
      <TopBar className='max-lg:hidden h-2.5' />
    </div>
  );
}
export default NavBar;
