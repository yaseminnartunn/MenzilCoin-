import React from 'react';
import ParticleText from './ParticleText';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner({ onExploreClick }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#280C34] via-[#1A0A2C] to-[#100720] border border-purple-500/20 banner-glow p-6 sm:p-9">
      
      {/* Arka Plan Yumuşak Parıltı */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF3B77]/20 to-[#8C3AFF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start max-w-3xl text-left space-y-4">
        
        {/* İnteraktif ParticleText Başlığı (Çakışmayı engelleyen net boyutlu alan) */}
        <div className="w-full h-28 sm:h-32 relative">
          <ParticleText
            text="Menzil"
            particleSize={2.4}
            density={3.6}
            color="#FFFFFF"
            highlightColor="#F59E0B"
            scatter={140}
            gatherDuration={1500}
            stagger={350}
            pointerRepel={38}
            repelRadius={95}
            idleDrift={0.5}
            trigger="hover"
            fontSize="clamp(2.4rem, 6.5vw, 3.8rem)"
            fontWeight={900}
            fontFamily="Inter, sans-serif"
            glow
          />
        </div>

        {/* Genişletilmiş ve Doğal Bilgilendirici Metin (Başlıktan bağımsız temiz blok) */}
        <div className="space-y-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal pt-1">
          <p>
            Kripto para ekosistemi, yalnızca finansal transferlerin ötesine geçerek merkeziyetsiz dijital altın vizyonu sunan <strong>Bitcoin</strong> ve akıllı sözleşmelerle programlanabilir ekonomiyi başlatan <strong>Ethereum</strong> ile küresel bir dönüşüm başlattı.
          </p>
          <p className="text-slate-400">
            Aynı zamanda internet kültürü, viral topluluk gücü ve mizahın birleşimiyle doğan <strong>Dogecoin, Pepe, Shiba Inu ve Dogwifhat</strong> gibi memecoin'ler dijital varlık algısına yepyeni bir boyut kazandırdı. Bu portalda her projenin teknik yapısını, çıkış amacını, tokenomisini ve risk dinamiklerini tarafsızca inceleyebilirsiniz.
          </p>
        </div>

        {/* Uiverse Ashon-G Fluid Aurora Butonu */}
        <div className="pt-2">
          <button
            onClick={onExploreClick}
            className="uiverse-btn-aura"
          >
            <div className="wrapper">
              <span>
                Hemen İncele
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

      </div>

    </div>
  );
}
