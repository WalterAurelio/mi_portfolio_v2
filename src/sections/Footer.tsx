import clsx from 'clsx'
import type { SeeBoxes } from './Hero'

function Footer({ seeBoxes }: SeeBoxes) {
  return (
    <footer className={clsx('p-10 -ml-10 w-dvw', { 'bg-green-300': seeBoxes })}>
      <div className='bg-main-black flex flex-col gap-1 text-white'>
        <h3 className='text-[61.04px] uppercase leading-none'>Aurelio.</h3>
        <p className='font-high-summit text-[25px]'>Frontend Developer</p>
      </div>
    </footer>
  )
}
export default Footer