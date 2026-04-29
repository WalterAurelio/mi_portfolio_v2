import { NavLink } from 'react-router-dom';
import StockSnap from '../assets/img/StockSnap_YPGOEJM7JO.webp';
import { cn } from '../utils/cn';
import type React from 'react';

type Props = {
  img?: string;
  title?: string;
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function ProjectSlide({
  className,
  img = StockSnap,
  title = 'Lorem ipsum dolor',
  description = 'Donec ipsum dui, lacinia et ullamcorper vitae, dictum vitae tellus.',
  ...props
}: Props) {
  return (
    <div
      className={cn('flex w-screen h-svh lg:h-screen px-l flex-col justify-center items-center bg-miscellaneous-secondary relative', className)}
      {...props}
    >
      <img
        src={img}
        alt={title}
        className='absolute top-0 left-0 w-full h-full object-cover opacity-20'
      />
      <div className='flex flex-col justify-center items-center gap-xs max-w-162 text-center z-10'>
        <NavLink
          to={'#'}
          className='text-neutral-inverse-primary h5-bold'
        >
          {title}
        </NavLink>
        <NavLink
          to={'#'}
          className='text-miscellaneous-secondary body-bold'
        >
          {description}
        </NavLink>
      </div>
    </div>
  );
}
export default ProjectSlide;
