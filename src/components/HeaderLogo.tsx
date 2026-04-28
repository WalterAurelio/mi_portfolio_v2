import A from '../assets/svg/A.svg?react';

function HeaderLogo() {
  return (
    <a
      href='#hero-section'
      className='flex w-20 h-10 justify-center items-center rounded-full bg-neutral-tertiary'
    >
      <A />
    </a>
  );
}
export default HeaderLogo;
