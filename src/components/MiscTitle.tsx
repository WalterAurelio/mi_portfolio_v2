import type { PropsWithChildren } from 'react';

function MiscTitle({ children = 'Misc Title' }: PropsWithChildren) {
  return <h4 className='text-neutral-inverse-primary text-center font-misc font-bold text-h4 lg:text-h1 leading-[100%] uppercase'>{children}</h4>;
}
export default MiscTitle;
