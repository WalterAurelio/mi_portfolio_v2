import StockSnap from '../assets/img/StockSnap_YPGOEJM7JO.webp';
import Button from '../components/Button';
import ChecklistItem from '../components/ChecklistItem';
import SectionBody from '../components/SectionBody';
import TechTag from '../components/TechTag';
import RelatedProject from '../interfaces/RelatedProject';

function Proyecto() {
  return (
    <main className='px-4 lg:px-[min(17.89vw,243px)] flex flex-col gap-10 pt-25 pb-10'>
      <div className='flex flex-col gap-xs'>
        <h1 className='h4-bold'>Lorem ipsum dolor</h1>
        <p className='body-bold text-neutral-tertiary'>Donec ipsum dui, lacinia et ullamcorper vitae, dictum vitae tellus.</p>
      </div>

      <div className='flex flex-col gap-xl lg:gap-10 max-w-190'>
        <img
          src={StockSnap}
          alt='Imagen del proyecto'
          className='aspect-video'
        />
        <SectionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus sit amet ligula molestie egestas. Praesent lobortis risus nec porta feugiat. Sed ex mi,
          pulvinar ut tellus vitae, hendrerit ullamcorper purus. Nulla pulvinar odio purus, non scelerisque dui posuere id.
        </SectionBody>
        <div className='flex gap-s'>
          <TechTag>React</TechTag>
          <TechTag>Tailwind</TechTag>
          <TechTag>TypeScript</TechTag>
        </div>
        <div className='flex flex-col gap-xl'>
          <p className='body-bold text-neutral-secondary'>Praesent sem erat</p>
          <div className='flex pl-xl flex-col gap-l'>
            <ChecklistItem>Etiam enim ante</ChecklistItem>
            <ChecklistItem>Quisque vehicula varius</ChecklistItem>
            <ChecklistItem>Phasellus maximus varius</ChecklistItem>
            <ChecklistItem>Aenean vitae porttitor</ChecklistItem>
          </div>
        </div>
        <div className='flex gap-m'>
          <Button className='max-lg:w-full'>Ver demo</Button>
          <Button
            buttonStyle={'minimal'}
            className='text-neutral-tertiary max-lg:w-full'
          >
            Ver repositorio
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-xl'>
        <p className='h4-bold'>Otros proyectos</p>
        <div className='flex flex-col gap-xl lg:grid lg:grid-cols-2'>
          <RelatedProject />
          <RelatedProject />
          <RelatedProject />
        </div>
      </div>
    </main>
  );
}
export default Proyecto;
