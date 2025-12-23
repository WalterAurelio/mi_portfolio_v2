import { useGSAP } from '@gsap/react';
import { cn } from '../utils/cn';
import Button from './Button';
import gsap from 'gsap';

type Props = {
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
};

const navLinks = [
  { section: 'Sobre mí', id: '#sobre-mi-section' },
  { section: 'Tecnologías', id: '#tecnologias-section' },
  { section: 'Proyectos', id: '#proyectos-section' }
];

function NavLinks({ isOpen, setIsOpen }: Props) {
  const { contextSafe } = useGSAP();

  const scrollToSection = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (setIsOpen) setIsOpen(false);
    gsap.to(window, {
      duration: 0.4,
      scrollTo: {
        y: id,
        offsetY: id === '#tecnologias-section' && window.innerWidth >= 1024 ? -120 : 0
      }
    });
  };

  return (
    <div className={cn('flex flex-col max-lg:gap-10 max-lg:p-5 opacity-100 transition-opacity duration-400 lg:flex-row', { 'opacity-0 -z-10': !isOpen })}>
      <div className='flex flex-col gap-5 lg:text-lg lg:flex-row lg:items-center'>
        {navLinks.map((e, index) => (
          <a
            key={index}
            href={e.id}
            className='w-fit select-none transition-colors lg:text-transparent-black-20 lg:hover:text-main-black lg:cursor-pointer'
            onClick={contextSafe(scrollToSection(e.id))}
          >
            {e.section}
          </a>
        ))}
      </div>
      <Button variant='solid'>Contactar</Button>
    </div>
  );
}
export default NavLinks;
