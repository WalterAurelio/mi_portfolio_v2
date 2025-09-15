import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, MotionPathPlugin, ScrollSmoother } from 'gsap/all'
import { pathEase } from '../../utils/pathEaseFn'
import { useEffect, useState } from 'react'
import FloatingShapes from '../FloatingShapes'

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin, ScrollSmoother)

function AuxComponent_3() {
  const [height, setHeight] = useState(window.innerHeight);
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true
    })

    gsap.to('#caja-b', {
      motionPath: {
        path: '#custom-path',
        align: '#custom-path',
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      immediateRender: true,
      ease: pathEase('#custom-path'),
      scrollTrigger: {
        trigger: '#custom-path',
        start: 'top center',
        end: () => "+=" + document.querySelector("#custom-path")?.getBoundingClientRect().height,
        markers: true,
        scrub: true,
      }
    });

    /* gsap.to('#caja-b', {
      // x: 400,
      // rotation: 360,
      // duration: 3,
      scrollTrigger: {
        trigger: '#custom-path',
        start: 'top center',
        // end: () => "+=" + document.querySelector("#custom-path")?.getBoundingClientRect().height,
        markers: true,
        scrub: 0.8,
        pin: true
      },
      duration: 12,
      ease: pathEase('#custom-path'),
      immediateRender: true,
      motionPath: {
        path: '#custom-path',
        align: '#custom-path',
        alignOrigin: [0.5, 0.5], // [x, y]
        autoRotate: true,

      }
    }); */
  })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setHeight(window.innerHeight);
      })
    }
  }, [])

  return (
    <div id='smooth-wrapper' className='w-dvw aux-component absolute -left-10 z-10'>
      <div id='smooth-content'>
        <div className='font-overused-grotesk overflow-x-hidden text-main-black'>
          {/* <div className='w-40 h-160 bg-yellow-500'></div> */}
          {/* <svg width="auto" height={height*9} viewBox="0 0 1358 4947" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path id='custom-path' d="M1358 0C1358 941.5 229.566 695 211.997 1158C194.428 1621 835.5 1344.5 965.997 1908.5C1096.5 2472.5 375 3219.5 711 4166C1047 5112.5 -0.00268555 4932.5 -0.00268555 4932.5" stroke="black"/>
          </svg> */}

          <svg width="1123" height={height*9} viewBox="0 0 1123 4873" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='custom-path' d="M1014 0C1290.93 1029.01 148 555.575 148 1152.97C148 1750.36 1122 1367.03 1122 1750.36C1122 2133.69 201.243 2079.43 679 2903.33C1156.76 3727.24 1082 4340.07 767 4653.7C452 4967.33 0 4850.84 0 4850.84" stroke="black"/>
</svg>



          {/* <svg className='bg-yellow-100' width="1060" height={height*7} viewBox={`0 0 1060 4888`} fill="none"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path id='custom-path' d="M1055 0C1126 941.5 229.566 695 211.997 1158C194.428 1621 835.5 1344.5 965.998 1908.5C1096.5 2472.5 375 3219.5 711 4166C1047 5112.5 0.000136625 4863.17 -0.00268555 4840.5" stroke="black"/>
          </svg> */}

          {/* <div id='caja-b' className='w-40 h-40 bg-green-500 text-6xl flex items-center justify-center'>b</div> */}
          <div id='caja-b' className='w-fit relative flex items-center justify-center'>
            <FloatingShapes />
          </div>
          
          {/* <div id='caja-b'>
            <FloatingShapes />
          </div> */}
          {/* <div className='w-40 h-160 bg-yellow-500'></div> */}
        </div>
      </div>
    </div>
  )
}
export default AuxComponent_3