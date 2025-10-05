import type { PropsWithChildren } from 'react';
import { cn } from '../utils/cn';

type CursiveTitle = PropsWithChildren & {
  className?: string;
};

function CursiveTitle({ className, children }: CursiveTitle) {
  return <p className={cn('font-high-summit text-[61.04px] text-transparent-grey-30', className)}>{children}</p>;
}
export default CursiveTitle;
