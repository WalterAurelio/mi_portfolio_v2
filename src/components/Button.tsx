import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const variants = cva(['flex w-40 h-15 justify-center items-center lg:text-lg font-medium text-main-white cursor-pointer leading-normal lg:hover:scale-110 transition-all'], {
  variants: {
    variant: {
      outlined: ['rounded-full border border-transparent-white-30'],
      minimal: ['hover:underline'],
      solid: ['bg-main-black rounded-full']
    }
  },
  defaultVariants: {
    variant: 'outlined'
  }
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>;

function Button({ variant, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(variants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
