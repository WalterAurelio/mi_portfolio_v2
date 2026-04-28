import type { PropsWithChildren } from 'react';
import Hash from '../assets/svg/Hash.svg?react';

function TechTag({ children = 'Tech' }: PropsWithChildren) {
  return (
    <div className='flex p-s items-center gap-xs rounded-xs border border-neutral-inverse-primary w-fit'>
      <Hash />
      <p className='text-neutral-tertiary select-none'>{children}</p>
    </div>
  );
}
export default TechTag;
