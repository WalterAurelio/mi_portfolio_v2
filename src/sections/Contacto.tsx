import Button from '../components/Button';
import MiscTitle from '../components/MiscTitle';

function Contacto() {
  return (
    <section
      id='contact-section'
      className='h-96 lg:h-screen p-l s-px bg-neutral-inverse-primary flex flex-col items-center'
    >
      <MiscTitle>
        Lorem ipsum dolor sit
        <br /> amet consectetur
      </MiscTitle>

      <div className=' flex flex-col items-center my-auto gap-10 lg:gap-20'>
        <p className='text-neutral-inverse-primary font-misc text-[10.8028125vw] lg:text-[9.678497vw] font-bold leading-[100%] uppercase '>aureliogareca.dev@gmail.com</p>
        <Button buttonStyle='outline'>Contactar</Button>
      </div>
    </section>
  );
}
export default Contacto;
