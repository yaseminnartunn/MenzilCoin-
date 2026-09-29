import React from 'react';
import FloatingLines from './FloatingLines';
import ParticleText from './ParticleText';
import { ArrowRight, Compass, Flame, Layers, ShieldCheck } from 'lucide-react';

export default function LandingHero({ onEnterPortal }) {
  return (
    <div className="relative w-full min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden rounded-[32px] border border-purple-500/20 shadow-2xl bg-[#09090F]">
      
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
          linesGradient={["#e945f5", "#8C3AFF", "#6366F1", "#00F2FE"]}
          backgroundColor="#09090F"
        />
      </div>

      {/* Arka Plan Yumuşak Karartma & Vinyet */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090F]/60 via-transparent to-[#09090F]/90 pointer-events-none z-1" />

      {/* 2. Ön Plan İçerik Kutusu */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center space-y-7">
        
        {/* ParticleText CryptoHub Başlığı */}
        <div className="w-full h-32 sm:h-36 flex items-center justify-center">
          <ParticleText
            text="CryptoHub"
            particleSize={2.4}
            density={3.6}
            color="#FFFFFF"
            highlightColor="#FF3B77"
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

        {/* Genişletilmiş ve Doğal Bilgilendirici Açıklama */}
        <div className="max-w-2xl space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed font-normal bg-[#120D24]/70 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-white/10 shadow-2xl">
          <p>
            Kripto para ekosistemi, yalnızca finansal transferlerin ötesine geçerek merkeziyetsiz dijital altın vizyonu sunan <strong>Bitcoin</strong> ve akıllı sözleşmelerle programlanabilir ekonomiyi başlatan <strong>Ethereum</strong> ile küresel bir dönüşüm başlattı.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            Aynı zamanda internet kültürü, viral topluluk gücü ve mizahın birleşimiyle doğan <strong>Dogecoin, Pepe, Shiba Inu ve Dogwifhat</strong> gibi memecoin'ler dijital varlık algısına yepyeni bir boyut kazandırdı. Bu portalda her projenin teknik yapısını, çıkış amacını, tokenomisini ve risk dinamiklerini tarafsızca inceleyebilirsiniz.
          </p>
        </div>

        {/* Uiverse Ashon-G Fluid Aurora Butonu ("Hemen Keşfet") */}
        <div className="pt-2">
          <button
            onClick={onEnterPortal}
            className="uiverse-btn-aura scale-110 hover:scale-115 transition-transform"
          >
            <div className="wrapper">
              <span>
                Hemen Keşfet
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>

              {/* 12 Adet Akışkan Aurora Parıltı Dairesi */}
              <div className="circle circle-12"></div>
              <div className="circle circle-11"></div>
              <div className="circle circle-10"></div>
              <div className="circle circle-9"></div>
              <div className="circle circle-8"></div>
              <div className="circle circle-7"></div>
              <div className="circle circle-6"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-1"></div>
            </div>
          </button>
        </div>

        {/* Alt Özet İpuçları */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="text-amber-400 font-bold">₿</span>
            <span>Bitcoin & Ana Coinler</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
            <Flame className="w-3.5 h-3.5 text-[#FF3B77]" />
            <span>Memecoin Analizleri</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Risk Skorları & Sözlük</span>
          </div>
        </div>

      </div>

    </div>
  );
}

