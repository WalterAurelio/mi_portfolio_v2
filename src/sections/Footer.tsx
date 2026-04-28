import FrontendDeveloper from '../assets/svg/FrontendDeveloper.svg?react';
import Contact from '../components/Contact';
import LinkedinLogo from '../assets/svg/LinkedinLogo.svg?react';
import GithubLogo from '../assets/svg/GithubLogo.svg?react';
import ReadCvLogo from '../assets/svg/ReadCvLogo.svg?react';

function Footer() {
  return (
    <footer className='bg-neutral-inverse-primary h-28 lg:h-39 flex flex-col'>
      <div className='w-full h-0.25 bg-neutral-inverse-tertiary'></div>

      <div className='s-px my-auto flex justify-between'>
        <div className='flex flex-col gap-xs'>
          <p className='text-neutral-inverse-tertiary h3-bold leading-[0.72] lowercase'>Aurelio</p>
          <FrontendDeveloper className='w-26.25 lg:w-32.75' />
        </div>

        <div className='flex gap-s lg:gap-m'>
          <Contact
            href='https://www.linkedin.com/in/aurelio-gareca/'
            target='_blank'
          >
            <LinkedinLogo />
          </Contact>
          <Contact
            href='https://github.com/WalterAurelio'
            target='_blank'
          >
            <GithubLogo />
          </Contact>
          <Contact>
            <ReadCvLogo />
          </Contact>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
