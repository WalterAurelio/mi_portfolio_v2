import HeaderLogo from '../components/HeaderLogo';
import NavAnchor from '../components/NavAnchor';
import Separator from '../components/Separator';
import NetworkPill from '../components/NetworkPill';
import { cn } from '../utils/cn';
import type { WithClassName } from '../types/WithClassName';

function NavigationMenu({ className }: WithClassName) {
  return (
    <nav className={cn('bg-miscellaneous-primary flex flex-col justify-between p-l max-w-80 w-full h-screen', className)}>
      <HeaderLogo />
      <div className='flex flex-col items-start gap-s'>
        <NavAnchor>Sobre mí</NavAnchor>
        <Separator />
        <NavAnchor prefix='02'>Tecnologías</NavAnchor>
        <Separator />
        <NavAnchor prefix='03'>Proyectos</NavAnchor>
        <Separator />
        <NavAnchor prefix='04'>Contacto</NavAnchor>
      </div>
      <div className='flex gap-s'>
        <NetworkPill size='small'>LinkedIn</NetworkPill>
        <NetworkPill size='small'>GitHub</NetworkPill>
        <NetworkPill size='small'>CV</NetworkPill>
      </div>
    </nav>
  );
}

export default NavigationMenu;
