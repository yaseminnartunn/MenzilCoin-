import React from 'react';
import { Flame, ShieldCheck, Zap, Info, TrendingUp, Sparkles } from 'lucide-react';

export default function Hero({ onExploreClick, totalCoins, totalMemes }) {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 border-b border-white/5">
      {/* Arka Plan Işık Efektleri */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Üst Rozet */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-500/15 to-emerald-500/15 border border-amber-500/30 text-xs font-semibold text-amber-300 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Kripto & Memecoin Dünyasını Tanı ve Öğren</span>
          </div>
        </div>

        {/* Ana Başlık */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Bitcoin'den <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500">Memecoin</span> Dünyasına
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Bitcoin ve Ethereum gibi ana kriptoların ardındaki devrimsel teknolojiyi, Dogecoin, Pepe ve WIF gibi viral memecoin'lerin ise maskotlarını, hikayelerini ve risklerini keşfet.
          </p>
        </div>

        {/* Özet Kartları / Özellikler */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          
          <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-amber-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <span className="text-2xl">₿</span>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Ana Kriptolar</p>
              <h4 className="text-sm font-bold text-white">Bitcoin, ETH & L1 Ağlar</h4>
              <p className="text-[11px] text-amber-400/80">Teknoloji & Whitepaper</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-yellow-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
              <span className="text-2xl">🐕</span>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Meme Fenomenleri</p>
              <h4 className="text-sm font-bold text-white">{totalMemes}+ Popüler Memecoin</h4>
              <p className="text-[11px] text-yellow-400/80">Köken & Topluluk Kültürü</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Bilinçli İnceleme</p>
              <h4 className="text-sm font-bold text-white">Risk Seviyeleri & Sözlük</h4>
              <p className="text-[11px] text-emerald-400/80">FOMO ve Güvenlik Rehberi</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

