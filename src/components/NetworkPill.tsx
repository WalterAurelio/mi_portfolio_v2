import type { WithClassName } from '../types/WithClassName';
import GithubLogo from '../assets/svg/GithubLogo B.svg?react';
import { cn } from '../utils/cn';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  Icon?: React.ComponentType<WithClassName>;
  size?: 'large' | 'small';
};

function NetworkPill({ Icon = GithubLogo, size = 'large', children = 'Network', ...props }: Props) {
  return (
    <a
      className={cn(
        'inline-flex justify-center items-center rounded-full border border-neutral-inverse-primary bg-miscellaneous-primary transition-all duration-300 font-bold relative group select-none',
        {
          'py-m px-xl text-body': size === 'large',
          'py-s px-m text-small': size === 'small'
        }
      )}
      {...props}
    >
      <Icon
        className={cn(
          'size-1.5 absolute left-[50%] -translate-x-[50%] bottom-0 group-hover:size-6 transition-all duration-300 group-hover:bottom-2.25 opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]',
          { hidden: size === 'small' }
        )}
      />
      <span className={cn('transition-all duration-300 text-neutral-tertiary', { 'group-hover:opacity-0': size === 'large' })}>{children}</span>
    </a>
  );
}
export default NetworkPill