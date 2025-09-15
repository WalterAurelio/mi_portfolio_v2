import GradientShape from './GradientShape'

function FloatingShapes() {
  return (
    <div className='w-90 aspect-square relative'>
      <GradientShape id='gradient-1' variant={1} />
      <GradientShape
        className='rotate-90 absolute left-30 top-30'
        id='gradient-2'
        options={{ runBackwards: true, delay: 5 }}
        variant={2}
      />
    </div>
  )
}
export default FloatingShapes