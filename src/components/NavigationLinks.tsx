import { useGSAP } from '@gsap/react';
import Button from './Button';
import gsap from 'gsap';
import { cn } from '../utils/cn';
import { useHamburgerStore } from '../store/hamburgerStore';

const navigationInfo = [
  { description: 'Sobre mí', sectionId: '#sobreMiSection' },
  { description: 'Tecnologías', sectionId: '#tecnologiasSection' },
  { description: 'Proyectos', sectionId: '#proyectosSection' }
];

function NavigationLinks() {
  const isOpen = useHamburgerStore(state => state.isOpen);
  const setIsOpen = useHamburgerStore(state => state.setIsOpen);
  const { contextSafe } = useGSAP();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {
      gsap.to('.nav-anchor', {
        color: '#F5F5F5',
        scrollTrigger: {
          trigger: '#proyectosDescription',
          start: 'top top',
          scrub: true
        }
      });
    });
  });

  const scrollTo = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    gsap.to(window, {
      duration: 0.4,
      scrollTo: {
        y: sectionId,
        offsetY: sectionId === '#tecnologiasSection' && window.innerWidth >= 1024 ? -120 : 0
      }
    });
  };

  return (
    <div className={cn('flex flex-col lg:flex-row max-lg:gap-10 max-lg:p-5 opacity-100 transition-opacity duration-400', { 'max-lg:opacity-0 max-lg:-z-10': !isOpen })}>
      <ul className='flex flex-col lg:flex-row gap-5 lg:gap-10 lg:bg-transparent-white-20 lg:px-5 lg:rounded-full lg:backdrop-blur-sm'>
        {navigationInfo.map((e, index) => (
          <li
            key={index}
            className='flex items-center'
          >
            <a
              href={e.sectionId}
              onClick={contextSafe(scrollTo(e.sectionId))}
              className='lg:text-lg lg:hover:underline lg:text-transparent-black-20 nav-anchor'
            >
              {e.description}
            </a>
          </li>
        ))}
      </ul>
      <Button variant='solid'>Contactar</Button>
    </div>
  );
}
export default NavigationLinks;
