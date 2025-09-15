import GradientShape from './GradientShape'

function FloatingShapes() {
  return (
    <div className='flex bg-amber-300 w-fit relative'>
      <GradientShape id='gradient-1' options={{ colors: ['#dc143c', '#dc143c'] }} />
      <GradientShape
        className='rotate-90 absolute left-30 top-30 bg-blue-300'
        id='gradient-2'
        options={{ colors: ['#dc143c', '#dc143c'], runBackwards: true, delay: 4 }}
      />
    </div>
  )
}
export default FloatingShapes