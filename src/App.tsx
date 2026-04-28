import { Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Inicio from './pages/Inicio';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, MotionPathPlugin, ScrollToPlugin);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#root',
      content: '#smooth-content',
      smooth: 2,
      smoothTouch: 0.1,
      effects: true,
      ignoreMobileResize: true,
      normalizeScroll: true
    });
  });

  return (
    <Routes>
      <Route
        path='/'
        element={<Inicio />}
      />
    </Routes>
  );
}
export default App;
