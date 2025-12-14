import { Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Inicio />}
      />
      <Route
        path='/proyecto'
        element={<div>proyecto</div>}
      />
    </Routes>
  );
}
export default App;
