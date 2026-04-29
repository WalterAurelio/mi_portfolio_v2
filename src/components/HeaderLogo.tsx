import { useGSAP } from '@gsap/react';
import A from '../assets/svg/A.svg?react';
import { useScrollTo } from '../hooks/useScrollTo';

function HeaderLogo() {
  const { scrollTo } = useScrollTo();
  const { contextSafe } = useGSAP();

  return (
    <a
      href='#hero-section'
      onClick={contextSafe(scrollTo('#hero-section'))}
      className='flex w-20 h-10 justify-center items-center rounded-full bg-neutral-tertiary'
    >
      <A />
    </a>
  );
}
export default HeaderLogo;
