import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login.tsx'
import Home from './Home.tsx'
import Costcheck from '../src/pages/Costcheck.tsx'
import Game from '../src/pages/Game.tsx'
import Test from '../src/pages/Test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Costcheck" element={<Costcheck />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)