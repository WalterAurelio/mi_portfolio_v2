import email_img from '../assets/img/email_image.png';
import Button from '../components/Button';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';

function Contacto({ showBoxes }: ShowBoxes) {
  return (
    <section
      id='contacto-section'
      className='h-dvh w-dvw flex flex-col p-10 -ml-10 bg-main-black'
    >
      <div className={cn('flex flex-col', { 'bg-red-box': showBoxes })}>
        <p className='font-steelfish uppercase text-[61.04px] font-bold text-center leading-none text-main-white'>
          Lorem ipsum
          <br />
          dolor sit amet consectetur
        </p>
      </div>
      <div className={cn('flex flex-col items-center gap-20 my-auto', { 'bg-blue-box': showBoxes })}>
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
