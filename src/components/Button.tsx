import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const variants = cva(['flex', 'w-32', 'lg:w-40', 'h-12', 'lg:h-15', 'justify-center', 'items-center', 'rounded-full', 'text-neutral-inverse-primary', 'font-bold'], {
  variants: {
    buttonStyle: {
      fill: 'bg-neutral-inverse-primary lg:hover:bg-neutral-inverse-secondary',
      outline: 'border border-neutral-inverse-secondary lg:hover:border-width-m',
      minimal: 'lg:hover:border-b-width-s border-neutral-inverse-secondary'
    }
  },
  defaultVariants: {
    buttonStyle: 'fill'
  }
});

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>;

function Button({ className, buttonStyle, children, ...props }: Props) {
  return (
    <button
      className={cn(variants({ buttonStyle, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
