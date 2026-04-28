import { Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger, ScrollSmoother, MotionPathPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Inicio from './pages/Inicio';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, MotionPathPlugin);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#root',
      content: '#smooth-content',
      smooth: 2,
      smoothTouch: 0.1,
      effects: true
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
