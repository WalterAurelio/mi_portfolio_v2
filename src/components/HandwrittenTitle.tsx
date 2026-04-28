import type { PropsWithChildren } from 'react';
import { cn } from '../utils/cn';
import type { WithClassName } from '../types/WithClassName';

type Props = PropsWithChildren & WithClassName;

function HandwrittenTitle({ className, children = 'Handwritten Title' }: Props) {
  return <p className={cn('text-miscellaneous-primary font-serif h1-normal', className)}>{children}</p>;
}
export default HandwrittenTitle;
