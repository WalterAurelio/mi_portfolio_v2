import type { PropsWithChildren } from 'react';
import { cn } from '../utils/cn';
import type { WithClassName } from '../types/WithClassName';

function CursiveTitle({ children, className }: PropsWithChildren & WithClassName) {
  return <p className={cn('font-high-summit text-[31.25px] lg:text-[61.04px] text-transparent-grey-30', className)}>{children}</p>;
}
export default CursiveTitle;
