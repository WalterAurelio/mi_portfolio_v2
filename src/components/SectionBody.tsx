import { cn } from '../utils/cn';

type Props = React.HTMLAttributes<HTMLParagraphElement>;

function SectionBody({ children, className, ...props }: Props) {
  return (
    <p
      className={cn('text-neutral-secondary leading-[156%]', className)}
      {...props}
    >
      {children ??
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus sit amet ligula molestie egestas. Praesent lobortis risus nec porta feugiat. Sed ex mi, pulvinar ut tellus vitae, hendrerit ullamcorper purus. Nulla pulvinar odio purus, non scelerisque dui posuere id.'}
    </p>
  );
}
export default SectionBody;
