import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';
import NavigationLinks from './NavigationLinks';

function TopBar({ className }: WithClassName) {
  return (
    <nav className={cn('flex items-center justify-between', className)}>
      <span></span>
      <NavigationLinks />
    </nav>
  );
}
export default TopBar;
