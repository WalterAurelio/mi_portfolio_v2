import type { PropsWithChildren } from 'react';

function SectionTitle({ children = 'Section Title' }: PropsWithChildren) {
  return <h2 className='h1-bold'>{children}</h2>;
}
export default SectionTitle;
