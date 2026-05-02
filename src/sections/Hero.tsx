// import SectionBody from '../components/SectionBody';
import FrontendDeveloper from '../assets/svg/FrontendDeveloper.svg?react';
import NetworkPill from '../components/NetworkPill';
import LinkedinLogo from '../assets/svg/LinkedinLogo B.svg?react';
import DownloadSimple from '../assets/svg/DownloadSimple.svg?react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Hero() {
  const cursiveColor = '#AEA0A1'; /* #AEA0A1 */

  useGSAP(() => {
    const tl1 = gsap.timeline({ defaults: { duration: 1.2 } });
    const tl2 = gsap.timeline();

    tl1
      .from('#warm-shape', { scale: 0.5, autoAlpha: 0, xPercent: -100, ease: 'back.out' })
      .from('#cold-shape', { scale: 0.5, autoAlpha: 0, yPercent: 100, ease: 'back.out' }, '-=1')
      .from('#aurelio', { filter: 'blur(20px)', xPercent: -50, autoAlpha: 0, ease: 'power2.inOut' }, '-=0.8');

    tl2
      .set('#frontend-developer path', { strokeWidth: '1px', stroke: cursiveColor })
      .from('#frontend-developer path', { drawSVG: 0, duration: 2, stagger: 0.12, ease: 'expo.out' }, '+=2')
      .to('#frontend-developer path', { fill: cursiveColor, duration: 0.4, stagger: 0.12 }, '-=3.6')
      .from('#pill-container .hero-pill', { yPercent: -100, duration: 0.8, stagger: 0.12, ease: 'expo.inOut' }, '-=1.6');
  });

  return (
    <section
      id='hero-section'
      className='w-full h-svh lg:h-screen s-px s-pt lg:pb-5 flex flex-col justify-between'
    >
      <div className='flex flex-col max-lg:my-auto gap-m lg:gap-5 w-fit'>
        <h1
          id='aurelio'
          className='font-bold lowercase leading-[0.73] text-[26.796875vw] lg:text-[14.251841vw]'
        >
          Aurelio
        </h1>
        <FrontendDeveloper
          id='frontend-developer'
          className='w-[63.85vw] lg:w-[33.905vw] text-neutral-inverse-primary/0'
        />

        <ul
          id='pill-container'
          className='max-lg:hidden flex items-start gap-s overflow-clip'
        >
          <li className='hero-pill'>
            <NetworkPill
              href='https://www.linkedin.com/in/aurelio-gareca/'
              target='_blank'
              Icon={LinkedinLogo}
            >
              LinkedIn
            </NetworkPill>
          </li>
          <li className='hero-pill'>
            <NetworkPill
              href='https://github.com/WalterAurelio'
              target='_blank'
            >
              GitHub
            </NetworkPill>
          </li>
          <li className='hero-pill'>
            <NetworkPill Icon={DownloadSimple}>CV</NetworkPill>
          </li>
        </ul>
      </div>

      {/* <SectionBody className='max-w-106.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus sit amet ligula molestie egestas.</SectionBody> */}
    </section>
  );
}
export default Hero;
