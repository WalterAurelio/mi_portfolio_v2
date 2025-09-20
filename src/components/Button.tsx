import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge';

const variants = cva([
  'flex w-40 h-15 justify-center items-center text-lg font-medium text-main-white cursor-pointer leading-normal hover:scale-110 transition-all'
], {
  variants: {
    variant: {
      outlined: ['rounded-full border border-translucent-white-30'],
      minimal: ['hover:underline']
    }
  },
  defaultVariants: {
    variant: 'outlined'
  }
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>;

function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button className={twMerge(variants({ variant }))} {...props}>
      {children}
    </button>
  )
}
export default Button