import { cn } from '../utils/cn';
import Button from './Button';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

type NavLinksProps = {
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
};

function NavLinks({ isOpen, setIsOpen }: NavLinksProps) {
  const navLinks = [
    { section: 'Sobre mí', id: '#sobre-mi-section' },
    { section: 'Tecnologías', id: '#tecnologias-section' },
    { section: 'Proyectos', id: '#proyectos-section' }
  ];

  const scrollTo = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (setIsOpen) setIsOpen(false);
    gsap.to(window, {
      duration: 0.4,
      scrollTo: sectionId
    });
  };

  return (
    <div className={cn('flex flex-col lg:flex-row max-lg:gap-10 max-lg:p-5 opacity-100 transition-opacity duration-400', { 'opacity-0 -z-10': !isOpen })}>
      <div className='flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 lg:text-lg lg:px-10 lg:rounded-full lg:bg-transparent-white-20 lg:backdrop-blur-sm'>
        {navLinks.map((e, index) => (
          <a
            key={index}
            href={e.id}
            className='lg:cursor-pointer w-fit select-none lg:text-transparent-black-20 lg:hover:text-main-black transition-colors'
            onClick={scrollTo(e.id)}
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
