import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PortalPage from './pages/PortalPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Karşılama Açılış Sayfası (Full Screen FloatingLines + ParticleText) */}
        <Route path="/" element={<LandingPage />} />

        {/* 2. Kripto & Memecoin Portalı (Sidebar + Market Tablosu + 3D Grafik) */}
        <Route path="/portal" element={<PortalPage />} />

        {/* Bilinmeyen rotaları anasayfaya yönlendir */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
