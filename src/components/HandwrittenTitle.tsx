import { cn } from '../utils/cn';

type Props = React.HTMLAttributes<HTMLParagraphElement>;

function HandwrittenTitle({ className, children = 'Handwritten Title', ...props }: Props) {
  return (
    <p
      className={cn('text-miscellaneous-primary font-serif h1-normal text-nowrap', className)}
      {...props}
    >
      {children}
    </p>
  );
}
export default HandwrittenTitle;
