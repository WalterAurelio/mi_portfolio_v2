import TechCard from '../components/TechCard';
import SectionCompound from '../interfaces/SectionCompound';
import JavaScriptLogo from '../assets/svg/JavaScriptLogo.svg?react';
import CSSLogo from '../assets/svg/CSSLogo.svg?react';
import HTMLLogo from '../assets/svg/HTMLLogo.svg?react';
import TailwindCSSLogo from '../assets/svg/TailwindCSSLogo.svg?react';
import SassLogo from '../assets/svg/SassLogo.svg?react';
import TypeScriptLogo from '../assets/svg/TypeScriptLogo.svg?react';
import FigmaLogo from '../assets/svg/FigmaLogo.svg?react';
import GitLogo from '../assets/svg/GitLogo.svg?react';
import ReactLogo from '../assets/svg/ReactLogo.svg?react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

function Tecnologias() {
  const techs = [
    { dataSpeed: 1.0, position: 'top-[5.744%] left-[25.184%]', description: 'JavaScript', icon: <JavaScriptLogo /> },
    { dataSpeed: 1.2, position: 'top-[15.926%] lg:top-[15.404%] right-[9.720%]', description: 'CSS', icon: <CSSLogo /> },
    { dataSpeed: 0.8, position: 'top-[26.109%] lg:top-[25.065%] right-[32.916%]', description: 'HTML', icon: <HTMLLogo /> },
    { dataSpeed: 0.6, position: 'top-[36.292%] lg:top-[34.725%] left-[17.452%]', description: 'React', icon: <ReactLogo /> },
    { dataSpeed: 0.8, position: 'top-[46.475%] lg:top-[44.386%] left-[40.648%]', description: 'Tailwind CSS', icon: <TailwindCSSLogo /> },
    { dataSpeed: 1.0, position: 'top-[56.657%] lg:top-[54.046%] right-[17.452%]', description: 'Sass', icon: <SassLogo /> },
    { dataSpeed: 0.6, position: 'top-[66.840%] lg:top-[63.707%] left-[32.916%]', description: 'TypeScript', icon: <TypeScriptLogo /> },
    { dataSpeed: 1.0, position: 'top-[77.023%] lg:top-[73.368%] left-[9.720%]', description: 'Figma', icon: <FigmaLogo /> },
    { dataSpeed: 1.2, position: 'top-[87.206%] lg:top-[83.028%] right-[25.184%]', description: 'Git', icon: <GitLogo /> }
  ];

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '#technologies',
      start: 'center center',
      endTrigger: '#projects-section',
      end: 'top bottom',
      pin: true
    });

    const tl = gsap.timeline({
      defaults: { duration: 1.2 },
      scrollTrigger: { trigger: '#technologies-section', start: 'top center', end: 'bottom center', toggleActions: 'play none none reverse' }
    });

    tl.from('#technologies-section-title', { filter: 'blur(20px)', ease: 'power2.inOut' })
      .from('#technologies-handwritten-title', { filter: 'blur(20px)', ease: 'circ.out' }, '-=0.8')
      .from('#technologies-section-body', { filter: 'blur(20px)', x: -50, autoAlpha: 0, ease: 'circ.out' }, '-=0.8');
  });

  return (
    <section
      id='technologies-section'
      className='h-fit'
    >
      <div className='w-full h-screen s-p lg:flex items-center justify-center'>
        <SectionCompound
          id='technologies'
          title='Tecnologías'
          handwritten='Tecnologias'
          className='items-center text-center'
        />
      </div>
      <div className='w-full h-[500vh] relative'>
        {techs.map((tech, index) => (
          <TechCard
            key={index}
            data-speed={tech.dataSpeed}
            className={`absolute ${tech.position}`}
            description={tech.description}
            icon={tech.icon}
          />
        ))}
      </div>
    </section>
  );
}
export default Tecnologias;
