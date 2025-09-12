import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, MotionPathPlugin, ScrollSmoother } from 'gsap/all'
import { pathEase } from '../../utils/pathEaseFn'

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin, ScrollSmoother)

function AuxComponent() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    })
    gsap.to('#caja-b', {
      // x: 400,
      // rotation: 360,
      // duration: 3,
      scrollTrigger: {
        trigger: '#custom-path',
        start: 'top center',
        end: () => "+=" + document.querySelector("#custom-path")?.getBoundingClientRect().height,
        markers: true,
        scrub: 0.8,
        pin: true
      },
      ease: pathEase('#custom-path'),
      immediateRender: true,
      motionPath: {
        path: '#custom-path',
        align: '#custom-path',
        alignOrigin: [0.5, 0.5], // [x, y]
        autoRotate: true,
      }
    });
  })

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <div className='font-overused-grotesk px-10 overflow-x-hidden text-main-black'>
          <div id='caja-a' className='w-40 h-40 bg-red-500 text-6xl flex items-center justify-center'>a</div>
          <div className='w-40 h-160 bg-yellow-500'></div>

          <svg width="1060" height="4888" viewBox="0 0 1060 4888" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id='custom-path' d="M1055 0C1126 941.5 229.566 695 211.997 1158C194.428 1621 835.5 1344.5 965.998 1908.5C1096.5 2472.5 375 3219.5 711 4166C1047 5112.5 0.000136625 4863.17 -0.00268555 4840.5" stroke="black"/>
          </svg>

          <div id='caja-b' className='w-40 h-40 bg-green-500 text-6xl flex items-center justify-center'>b</div>
          <div className='w-40 h-160 bg-yellow-500'></div>
          <div id='caja-c' className='w-40 h-40 bg-blue-500 text-6xl flex items-center justify-center'>c</div>
          <div className='w-40 h-160 bg-yellow-500'></div>
        </div>
      </div>
    </div>
  )
}
export default AuxComponent