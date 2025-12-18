import { cn } from '../utils/cn';
import Button from './Button';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

function NavLinks({ isOpen }: { isOpen: boolean }) {
  const navLinks = [
    { section: 'Sobre mí', id: '#sobre-mi-section' },
    { section: 'Tecnologías', id: '#tecnologias-section' },
    { section: 'Proyectos', id: '#proyectos-section' }
  ];

  const scrollTo = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.4,
      scrollTo: sectionId
    });
  };

  return (
    <div className={cn('flex flex-col lg:flex-row lg:items-center gap-10 max-lg:p-5 opacity-100 transition-opacity duration-400', { 'opacity-0 -z-10': !isOpen })}>
      <div className='flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 lg:text-lg'>
        {navLinks.map((e, index) => (
          <a
            key={index}
            href={e.id}
            className='lg:cursor-pointer select-none'
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
