import HeaderLogo from '../components/HeaderLogo';
import NavAnchor from '../components/NavAnchor';
import Separator from '../components/Separator';
import NetworkPill from '../components/NetworkPill';
import { cn } from '../utils/cn';
import type { WithClassName } from '../types/WithClassName';
import { Fragment } from 'react/jsx-runtime';
import { useGSAP } from '@gsap/react';
import { useHamburgerStore } from '../store/hamburgerStore';
import gsap from 'gsap';

function NavigationMenu({ className }: WithClassName) {
  const { contextSafe } = useGSAP();
  const setIsOpen = useHamburgerStore(state => state.setIsOpen);
  const navigationInfo = [
    { prefix: '01', description: 'Sobre mí', href: '#about-section' },
    { prefix: '02', description: 'Tecnologías', href: '#technologies-section' },
    { prefix: '03', description: 'Proyectos', href: '#projects-section' },
    { prefix: '04', description: 'Contacto', href: '#contact-section' }
  ];
  const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    gsap.to(window, {
      duration: 0.56,
      scrollTo: id
    });
  };

  return (
    <nav className={cn('bg-miscellaneous-primary flex flex-col justify-between p-l max-w-80 w-full h-svh lg:h-screen', className)}>
      <HeaderLogo />
      <div className='flex flex-col items-start gap-s'>
        {navigationInfo.map((e, i) => (
          <Fragment key={i}>
            <NavAnchor
              href={e.href}
              onClick={contextSafe(scrollTo(e.href))}
              prefix={e.prefix}
            >
              {e.description}
            </NavAnchor>
            {e.prefix !== '04' && <Separator />}
          </Fragment>
        ))}
      </div>
      <div className='flex gap-s'>
        <NetworkPill
          href='https://www.linkedin.com/in/aurelio-gareca/'
          target='_blank'
          size='small'
        >
          LinkedIn
        </NetworkPill>
        <NetworkPill
          href='https://github.com/WalterAurelio'
          target='_blank'
          size='small'
        >
          GitHub
        </NetworkPill>
        <NetworkPill size='small'>CV</NetworkPill>
      </div>
    </nav>
  );
}
export default NavigationMenu;
