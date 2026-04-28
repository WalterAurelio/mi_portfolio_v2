import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';
import NavigationLinks from './NavigationLinks';

function TopBar({ className }: WithClassName) {
  return (
    <nav className={cn('flex items-center justify-between', className)}>
      <div className='h-15 aspect-square rounded-full border border-transparent-grey-30'></div>
      <NavigationLinks />
    </nav>
  );
}
export default TopBar;
