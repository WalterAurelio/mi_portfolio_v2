import type { ReactNode } from 'react';
import ReactLogo from '../assets/svg/ReactLogo.svg?react';
import Code from '../assets/svg/Code.svg?react';
import { cn } from '../utils/cn';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  description?: string;
  icon?: ReactNode;
};

function TechCard({ className, description = 'React', icon = <ReactLogo />, ...props }: Props) {
  return (
    <div
      className={cn('flex w-40 h-40 lg:w-64 lg:h-64 aspect-square p-xl flex-col rounded-xl bg-neutral-tertiary', className)}
      {...props}
    >
      <div className=' flex items-center gap-s'>
        <p className='text-neutral-secondary body-bold'>{description}</p>
        <Code />
      </div>
      <div className='flex justify-end items-end h-full'>{icon}</div>
    </div>
  );
}
export default TechCard;
