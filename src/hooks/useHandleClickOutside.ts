import { useEffect } from 'react';
import { useHamburgerStore } from '../store/hamburgerStore';

export const useHandleClickOutside = (ref: React.RefObject<HTMLElement | null>) => {
  const isOpen = useHamburgerStore(state => state.isOpen);
  const setIsOpen = useHamburgerStore(state => state.setIsOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && !ref.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, setIsOpen, ref]);
};
