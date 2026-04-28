import type { PropsWithChildren } from 'react';
import Check from '../assets/svg/Check.svg?react';

function ChecklistItem({ children = 'Etiam enim ante' }: PropsWithChildren) {
  return (
    <div className='flex items-center gap-l text-neutral-tertiary body-bold'>
      <Check />
      {children}
    </div>
  );
}
export default ChecklistItem;
