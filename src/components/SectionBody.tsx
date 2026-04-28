import type { PropsWithChildren } from 'react';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';

type Props = PropsWithChildren & WithClassName;

function SectionBody({ children, className }: Props) {
  return (
    <p className={cn('text-neutral-secondary leading-[156%]', className)}>
      {children ??
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus sit amet ligula molestie egestas. Praesent lobortis risus nec porta feugiat. Sed ex mi, pulvinar ut tellus vitae, hendrerit ullamcorper purus. Nulla pulvinar odio purus, non scelerisque dui posuere id.'}
    </p>
  );
}
export default SectionBody;
