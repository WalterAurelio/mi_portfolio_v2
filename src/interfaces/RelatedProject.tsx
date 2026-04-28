import Image from '../assets/svg/Image.svg?react';

type Props = {
  img?: string;
  title?: string;
  description?: string;
};

function RelatedProject({ img, title = 'Lorem ipsum dolor', description = 'Donec ipsum dui, lacinia et ullamcorper vitae, dictum vitae tellus.' }: Props) {
  return (
    <div className='flex min-w-72 max-w-106.5 w-full flex-col gap-m'>
      {img ? (
        <img
          src={img}
          alt={title}
          className='aspect-video w-full object-cover'
        />
      ) : (
        <div className='flex aspect-video w-full flex-col justify-center items-center bg-neutral-disabled'>
          <Image />
        </div>
      )}

      <div className='flex flex-col gap-xs'>
        <p className='body-bold'>{title}</p>
        <p className='text-neutral-secondary'>{description}</p>
      </div>
    </div>
  );
}
export default RelatedProject;
