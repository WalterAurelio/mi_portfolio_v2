import GradientShape from './GradientShape';

type Props = React.ComponentPropsWithoutRef<'div'>;

function FloatingShapes({ ...props }: Props) {
  return (
    <div
      className='w-58.5 aspect-square relative bg-yellow-200'
      {...props}
    >
      <GradientShape
        id='warm-shape'
        variant='warm'
        className='absolute top-0 left-0 z-10'
      />
      <GradientShape
        id='cold-shape'
        variant='cold'
        className='absolute bottom-0 right-0'
        reverseAnimation
        delay={4}
      />
    </div>
  );
}
export default FloatingShapes;
