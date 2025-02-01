import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login.tsx'
import Costcheck from '../src/pages/Costcheck.tsx'
import Game from '../src/pages/game.tsx'
import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Costcheck" element={<Costcheck />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)