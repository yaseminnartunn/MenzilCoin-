import React from 'react';
import { Gem, Sparkles, ArrowRight, Zap, Layers, Users, Star } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function MenzilHeroBanner({ onSelectMenzil }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#2A1207] via-[#1E0B04] to-[#120502] border border-amber-500/35 p-6 sm:p-10 shadow-2xl shadow-amber-950/40">
      
      {/* Görsel 3 Tarzı Yan Dekoratif Kavis Çerçeveleri (Ambient Arch Borders) */}
      <div className="absolute top-4 bottom-4 left-3 w-16 border-l border-amber-500/20 rounded-l-3xl pointer-events-none hidden sm:block" />
      <div className="absolute top-4 bottom-4 right-3 w-16 border-r border-amber-500/20 rounded-r-3xl pointer-events-none hidden sm:block" />

      {/* Arka Plan Işık & Yıldız Parıltıları */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Sol Alan: Görsel 3 Tarzı Lüks Tipografi ve Butonlar */}
        <div className="flex-1 space-y-5 text-center lg:text-left">
          
          {/* Görsel 3 Üst Yıldızlı Rozet */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-inner">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>RESMİ EKOSİSTEM PARA BİRİMİ • MNZ</span>
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          </div>

          {/* Görsel 3 Tipografisine Uygun İddialı Başlık (Serif & Sans Karışımı) */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Menzil Digital Coin <span className="italic font-serif font-normal bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">Geleceğin Ekonomisi</span>
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-2xl leading-relaxed font-normal">
              Geleceğin dijital ekonomisini, şeffaf blokzincir altyapısını ve güçlü topluluk vizyonunu buluşturan yerel kripto para birimi.
            </p>
          </div>

          {/* Özellik Rozetleri */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Mikro İşlem Ücreti</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 backdrop-blur-sm">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>EVM Uyumlu</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 backdrop-blur-sm">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>PoS Konsensüs</span>
            </div>
          </div>

          {/* Butonlar & Sosyal Medya */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onSelectMenzil}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black font-extrabold text-xs sm:text-sm shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Menzil Token Detayları</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Sosyal Medya Butonları (X, Instagram, Facebook) */}
            <SocialLinks />
          </div>

        </div>

        {/* Sağ Alan: Menzil Görseli & Kesintisiz Yumuşatılmış Arz Kutusu */}
        <div className="relative shrink-0 flex flex-col items-center">
          <div className="relative group cursor-pointer" onClick={onSelectMenzil}>
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-amber-400 to-yellow-600 shadow-2xl">
              <img
                src="/menzil.png"
                alt="Menzil Logo"
                className="w-full h-full object-cover rounded-full border-2 border-black/80 bg-black group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/menzil.png';
                }}
              />
            </div>
          </div>

          {/* Softened Maksimum Arz Rozeti (Görsel 2 Yumuşatması) */}
          <div className="mt-4 px-5 py-2 rounded-full bg-[#160D24]/85 border border-amber-500/20 text-xs backdrop-blur-xl shadow-lg shadow-amber-950/30 flex items-center gap-2 whitespace-nowrap">
            <span className="text-slate-400 font-normal">Maksimum Arz:</span>
            <span className="text-amber-200/95 font-medium tracking-wide">1.000.000.000 MNZ</span>
          </div>
        </div>

      </div>

    </div>
  );
}
