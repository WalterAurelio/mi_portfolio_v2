import HandwrittenTitle from '../components/HandwrittenTitle';
import SectionBody from '../components/SectionBody';
import SectionTitle from '../components/SectionTitle';
import { cn } from '../utils/cn';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  handwritten?: string;
  body?: string;
};

function SectionCompound({ className, title, handwritten, body, id, ...props }: Props) {
  return (
    <div
      id={id}
      className={cn('flex max-w-162.25 w-full flex-col items-start gap-xl', className)}
      {...props}
    >
      <div className='relative'>
        <SectionTitle id={`${id}-section-title`}>{title}</SectionTitle>
        <HandwrittenTitle
          id={`${id}-handwritten-title`}
          className='absolute left-9 top-9 -z-10'
        >
          {handwritten}
        </HandwrittenTitle>
      </div>
      <SectionBody id={`${id}-section-body`}>{body}</SectionBody>
    </div>
  );
}
export default SectionCompound;
