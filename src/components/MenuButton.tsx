import List from '../assets/svg/List.svg?react';
import X from '../assets/svg/X.svg?react';
import { useHamburgerStore } from '../store/hamburgerStore';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';

function MenuButton({ className }: WithClassName) {
  const isOpen = useHamburgerStore(state => state.isOpen);
  const setIsOpen = useHamburgerStore(state => state.setIsOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex w-12.75 h-10 justify-center items-center rounded-xl border border-neutral-inverse-primary bg-miscellaneous-primary relative overflow-hidden',
        {
          'border-0': isOpen
        },
        className
      )}
    >
      <List className={cn('absolute left-[50%] -translate-x-[50%] transition-all duration-300', { '-left-6 translate-x-[0%]': isOpen })} />
      <X className={cn('absolute right-[50%] translate-x-[50%] transition-all duration-300', { '-right-6 translate-x-[0%]': !isOpen })} />
    </button>
  );
}
export default MenuButton;
