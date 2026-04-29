import gsap from 'gsap';
import { useHamburgerStore } from '../store/hamburgerStore';

export const useScrollTo = () => {
  const setIsOpen = useHamburgerStore(state => state.setIsOpen);

  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    gsap.to(window, {
      duration: 0.56,
      scrollTo: id
    });
  };

  return { scrollTo };
};
