import { useGSAP } from '@gsap/react';
// import HamburgerMenu from '../HamburgerMenu';
import NavBar from '../NavBar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useGSAP(() => {
    /* gsap.from('#navigation-menu', {
      opacity: 0,
      scale: 1.04,
      ease: 'expo',
      duration: 1.6,
      delay: 4.8
    }); */

    const showAnimation = gsap
      .from('#navigation-menu', {
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

  return (
    <div
      id='navigation-menu'
      className='z-10 absolute top-4 max-lg:right-4 flex justify-end w-[calc(100%-32px)] lg:h-2.5 lg:top-10 lg:w-[calc(100%-80px)]'
    >
      {/* <HamburgerMenu
        className='lg:hidden'
      /> */}
      <NavBar className='max-lg:hidden' />
    </div>
  );
}
export default NavigationMenu;
