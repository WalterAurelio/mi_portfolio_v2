import email_img from '../assets/img/email_image.png';
import Button from '../components/Button';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';

function Contacto({ showBoxes }: ShowBoxes) {
  return (
    <section
      id='contacto-section'
      className={cn('h-dvh w-dvw flex flex-col p-10 -ml-10 bg-main-black', { 'bg-red-box': showBoxes })}
    >
      {/* <div className={clsx('flex flex-col', { 'bg-amber-700': showBoxes })}> */}
      <div className={cn('flex flex-col', { 'bg-yellow-box': showBoxes })}>
        <p className='font-steelfish uppercase text-[61.04px] font-bold text-center leading-none text-main-white'>
          Lorem ipsum
          <br />
          dolor sit amet consectetur
        </p>
      </div>
      {/* <div className={clsx('flex flex-col items-center gap-20 my-auto', { 'bg-red-900': showBoxes })}> */}
      <div className={cn('flex flex-col items-center gap-20 my-auto', { 'bg-green-box': showBoxes })}>
        <img
          src={email_img}
          alt='email_img'
        />
        <Button>Contactar</Button>
      </div>
    </section>
  );
}
export default Contacto;
