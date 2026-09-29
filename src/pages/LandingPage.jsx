import React from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLines from '../components/FloatingLines';
import ParticleText from '../components/ParticleText';
import SocialLinks from '../components/SocialLinks';
import { ArrowRight, Flame, ShieldCheck, Sparkles, Gem } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden bg-[#09090F] selection:bg-[#F59E0B] selection:text-black px-4 py-8 sm:py-12">
      
      {/* 1. Üç Boyutlu İnteraktif FloatingLines Arka Planı */}
      <div className="absolute inset-0 z-0">
        <FloatingLines 
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[8, 8, 8]}
          lineDistance={[8, 8, 8]}
          bendRadius={8}
          bendStrength={-2}
          interactive={true}
          parallax={true}
          animationSpeed={1}
          linesGradient={["#F59E0B", "#8C3AFF", "#e945f5", "#00F2FE"]}
          backgroundColor="#09090F"
        />
      </div>

      {/* Arka Plan Yumuşak Vinyet / Karartma */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090F]/60 via-transparent to-[#09090F]/90 pointer-events-none z-1" />

      {/* 2. Ön Plan İçerik Alanı */}
      <div className="relative z-10 max-w-3xl w-full mx-auto flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Menzil Logo Görseli (Işıltılı Altın Çerçeve) */}
        <div className="relative group cursor-pointer" onClick={() => navigate('/portal')}>
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
          <img 
            src="/menzil.png" 
            alt="Menzil Logo" 
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-contain border-2 border-amber-400/90 shadow-2xl bg-black group-hover:scale-105 transition-transform"
          />
        </div>

        {/* ParticleText Menzil Başlığı */}
        <div className="w-full h-28 sm:h-32 flex items-center justify-center -my-2">
          <ParticleText
            text="Menzil"
            particleSize={2.4}
            density={3.6}
            color="#FFFFFF"
            highlightColor="#F59E0B"
            scatter={160}
            gatherDuration={1600}
            stagger={360}
            pointerRepel={45}
            repelRadius={120}
            idleDrift={0.6}
            trigger="hover"
            fontSize="clamp(3.2rem, 9vw, 5.5rem)"
            fontWeight={900}
            fontFamily="Inter, sans-serif"
            glow
          />
        </div>

        {/* Menzil Tanıtım Açıklaması */}
        <div className="w-full space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed font-normal bg-[#120D24]/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <p>
            Geleceğin dijital ekonomisini, şeffaf blokzincir altyapısını ve güçlü topluluk vizyonunu bir araya getiren yeni nesil kripto parası <strong>Menzil</strong> ile tanışın.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            Menzil'in teknik detaylarını, tokenomisini ve gelecek hedeflerini keşfederken; aynı zamanda küresel kripto para piyasasının ve en popüler memecoin'lerin güncel analizlerine tek bir merkezden ulaşabilirsiniz.
          </p>
        </div>

        {/* Uiverse Creatlydev Animated Pill Butonu ("Menzil'i Keşfet") + Sosyal Medya İkonları */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('/portal')}
            className="btn-creatly"
          >
            <span>Menzil'i Keşfet</span>
            <div className="button__icon-wrapper">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Sosyal Medya İkonları (X ve Instagram) */}
          <SocialLinks />
        </div>

        {/* Alt Özet İpuçları */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs text-slate-400 pt-1">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 backdrop-blur-sm">
            <Gem className="w-3.5 h-3.5 text-amber-400" />
            <span>Menzil Digital Coin</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Yeni Nesil Ekosistem</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
            <Flame className="w-3.5 h-3.5 text-[#FF3B77]" />
            <span>Kripto & Memecoin Analizleri</span>
          </div>
        </div>

      </div>

    </div>
  );
}
