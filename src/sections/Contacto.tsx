import email_img from '../assets/img/email_image.png';
import Button from '../components/Button';
import type { ShowBoxes } from '../types/showBoxes';
import { cn } from '../utils/cn';

function Contacto({ showBoxes }: ShowBoxes) {
  const openEmailClient = () => {
    const destinatario = 'aureliogareca.dev@gmail.com';
    const asunto = 'Contacto desde tu portfolio';
    const cuerpo = 'Hola Aurelio, vi tu portfolio y quería consultarte sobre...';
    const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailto;
  };

  return (
    <section
      id='contacto-section'
      className='h-dvh w-dvw flex flex-col p-4 lg:p-10 -ml-4 lg:-ml-10 bg-main-black'
    >
      <div className={cn('flex flex-col', { 'bg-red-box': showBoxes })}>
        <p className='font-steelfish uppercase text-[31.25px] lg:text-[61.04px] font-bold text-center leading-9 lg:leading-none text-main-white'>
          Listo para trabajar juntos.
          <br />
          Conversemos.
        </p>
      </div>
      <div className={cn('flex flex-col items-center gap-20 my-auto', { 'bg-blue-box': showBoxes })}>
        <img
          src={email_img}
          alt='email_img'
        />
        <Button onClick={openEmailClient}>Contactar</Button>
      </div>
    </section>
  );
}
export default Contacto;
