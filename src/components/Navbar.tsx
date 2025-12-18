import { cn } from '../utils/cn';
import NavLinks from './NavLinks';

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn('flex w-full justify-between items-center text-lg', className)}>
      <p>Logo</p>
      <NavLinks isOpen />
    </nav>
  );
}
export default Navbar;
