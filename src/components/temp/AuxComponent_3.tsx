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
        // markers: true,
        scrub: true
      }
    });
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
    <div id='smooth-wrapper' className='w-dvw aux-component absolute -left-10 -z-10'>
      <div id='smooth-content'>
        <div className='font-overused-grotesk overflow-x-hidden text-main-black'>
          <svg width="auto" height={9 * height} viewBox={`0 0 1062 ${9 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="custom-path" d="M738 0C738 1000 1 664 1 1164C1 1664 1063 1537 1063 2037C1063 2537 1 2472 1 2972C1 3472 1063 3997 532 4997" stroke="none"/>
          </svg>




          {/* <div id='caja-b' className='w-40 h-40 bg-green-500 text-6xl flex items-center justify-center'>b</div> */}
          <div id='caja-b' className='w-fit relative flex items-center justify-center'>
            <FloatingShapes />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuxComponent_3