// import SectionBody from '../components/SectionBody';
import FrontendDeveloper from '../assets/svg/FrontendDeveloper.svg?react';
import NetworkPill from '../components/NetworkPill';
import LinkedinLogo from '../assets/svg/LinkedinLogo B.svg?react';
import DownloadSimple from '../assets/svg/DownloadSimple.svg?react';

function Hero() {
  return (
    <section className='w-full h-screen s-px s-pt lg:pb-5 flex flex-col justify-between'>
      <div className='flex flex-col max-lg:my-auto gap-m lg:gap-5 w-fit'>
        <h1 className='font-bold lowercase leading-[0.73] text-[26.796875vw] lg:text-[14.251841vw]'>Aurelio</h1>
        <FrontendDeveloper className='w-[63.85vw] lg:w-[33.905vw]' />
        <div className='max-lg:hidden flex items-start gap-s'>
          <NetworkPill Icon={LinkedinLogo}>LinkedIn</NetworkPill>
          <NetworkPill>GitHub</NetworkPill>
          <NetworkPill Icon={DownloadSimple}>CV</NetworkPill>
        </div>
      </div>

      {/* <SectionBody className='max-w-106.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus sit amet ligula molestie egestas.</SectionBody> */}
    </section>
  );
}
export default Hero;
