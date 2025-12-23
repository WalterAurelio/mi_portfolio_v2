// import ag_logo from '../assets/img/ag_logo.webp';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';
import NavigationLinks from './NavigationLinks';

function NavBar({ className }: WithClassName) {
  return (
    <nav className={cn('flex items-center justify-between', className)}>
      <span></span>

      <NavigationLinks />
    </nav>
  );
}
export default NavBar;
