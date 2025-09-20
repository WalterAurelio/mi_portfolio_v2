import clsx from 'clsx';
import email_image from '../assets/img/email_image.png';
import type { SeeBoxes } from './Hero';
import Button from '../components/Button';

function Contacto({ seeBoxes }: SeeBoxes) {
  return (
    <section id='contacto-section' className={clsx('h-dvh flex flex-col p-10 -ml-10 w-dvw', { 'bg-red-200': seeBoxes })}>
      <div className={clsx('flex flex-col', { 'bg-amber-200': seeBoxes })}>
        <p className='font-steelfish uppercase text-[61.04px] font-bold text-center leading-none'>
          Lorem ipsum
          <br />
          dolor sit amet consectetur
        </p>
      </div>
      <div className='bg-main-black flex flex-col items-center gap-20 my-auto'>
        <img
          src={email_image}
          alt='email_image'
        />
        <Button>Contactar</Button>
        {/* <button
          type='button'
          className='w-40 h-15 border border-translucent-white-30 text-main-white rounded-full cursor-pointer'
        >
          Contactar
        </button> */}
      </div>
    </section>
  );
}
export default Contacto;
