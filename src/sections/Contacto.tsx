import clsx from 'clsx';
import email_image from '../assets/img/email_image.png';
import type { SeeBoxes } from './Hero';
import Button from '../components/Button';

function Contacto({ seeBoxes }: SeeBoxes) {
  return (
    <section id='contacto-section' className={clsx('h-dvh flex flex-col p-10 -ml-10 w-dvw bg-main-black', { 'bg-red-200': seeBoxes })}>
      <div className={clsx('flex flex-col', { 'bg-amber-700': seeBoxes })}>
        <p className='font-steelfish uppercase text-[61.04px] font-bold text-center leading-none text-main-white'>
          Lorem ipsum
          <br />
          dolor sit amet consectetur
        </p>
      </div>
      <div className={clsx('flex flex-col items-center gap-20 my-auto', { 'bg-red-900': seeBoxes })}>
        <img
          src={email_image}
          alt='email_image'
        />
        <Button>Contactar</Button>
      </div>
    </section>
  );
}
export default Contacto;
