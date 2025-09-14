import LenguajeTech from '../components/LenguajeTech';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger)

function Tecnologías() {
  useGSAP(() => {
    gsap.to('.tecnologias-descripcion', {
      scrollTrigger: {
        trigger: '.tecnologias-descripcion',
        start: 'center center',
        markers: true,
        pin: true,
        scrub: 5
      }
    })
  })

  return (
    <section className='bg-red-200 h-dvh flex flex-col justify-between py-10 relative'>
      <div className='flex flex-col bg-amber-200 max-w-[534px] relative m-auto tecnologias-descripcion'>
        <h2 className='text-[97.66px] z-1'>Tecnologías.</h2>
        <p className='text-xl text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit. Phasellus sed feugiat felis.
        </p>
        <p className='font-high-summit text-translucent-grey text-[61.04px] absolute left-[108px] top-18'>Tecnologias</p>
      </div>

      <LenguajeTech data-speed='1' className='absolute left-[862px] top-[357px]' />
      <LenguajeTech data-speed='2' className='absolute left-[1078px] top-[115px]' />
      <LenguajeTech data-speed='3' className='absolute left-[581px] top-[814px]' />
      <LenguajeTech className='absolute left-[970px] top-[1232px]' />

      <LenguajeTech className='absolute left-[148px] top-[1820px]' />
      <LenguajeTech className='absolute left-[148px] top-[141px]' />
      <LenguajeTech className='absolute left-[473px] top-[1491px]' />
      <LenguajeTech className='absolute left-[581px] top-[1901px]' />

      <LenguajeTech className='absolute left-[40px] top-[768px]' />
    </section>
  );
}
export default Tecnologías;
