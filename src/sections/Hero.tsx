import { clsx } from 'clsx';

export type SeeBoxes = {
  seeBoxes?: boolean
}

function Hero({ seeBoxes }: SeeBoxes) {
  return (
    <section className={clsx('h-dvh flex flex-col justify-between py-10', { 'bg-red-200': seeBoxes })}>
      <div className={clsx('flex flex-col', { 'bg-amber-200': seeBoxes })}>
        <h1 className='text-[244.16px] uppercase leading-none'>Aurelio.</h1>
        <p className='font-high-summit text-[61.04px]'>Frontend Developer</p>
      </div>
      <p className={clsx('text-xl w-[521px]', { 'bg-orange-400': seeBoxes })}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non urna id nibh mattis vulputate at at velit.</p>
    </section>
  );
}
export default Hero;
