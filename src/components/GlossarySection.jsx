import React from 'react';
import { 
  BookOpen, Sparkles, Shield, Gem, FileText, 
  Rocket, AlertTriangle, Zap, Flame, Layers, 
  TrendingUp, TrendingDown, Gift, ArrowUpRight 
} from 'lucide-react';
import { memecoinDictionary } from '../data/coinsData';

const iconMap = {
  Sparkles, Shield, Gem, FileText, Rocket, 
  AlertTriangle, Zap, Flame, Layers, TrendingUp, 
  TrendingDown, Gift
};

export default function GlossarySection() {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Üst Hero Header - Şık Radyal Glow & Gradyanlı İnsan Odaklı Tipografi */}
      <div className="relative overflow-hidden rounded-[32px] p-6 sm:p-10 bg-gradient-to-r from-[#1D1338] via-[#160D2E] to-[#100922] border border-amber-500/25 shadow-2xl">
        
        {/* Arka Plan Yumuşak Parıltı Efektleri */}
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Kripto Kültürü & Sözlük</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Kripto & Memecoin <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">Jargon Rehberi</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
            Topluluklarda, X (Twitter) ve Telegram kanallarında sıkça karşılaşacağınız en popüler terimler ve anlamları.
          </p>

        </div>
      </div>

      {/* 2. Görsel 2 ve Uiverse İlhamlı Glow Kartlar Izgarası */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {memecoinDictionary.map((item) => {
          const IconComponent = iconMap[item.icon] || Sparkles;

          return (
            <div
              key={item.id}
              className="uiverse-card group relative"
            >
              {/* İç İçerik Kutusu (Görsel 2 Radyal Dip Parıltısı Efekti) */}
              <div className="card-content flex-col items-start justify-between min-h-[220px] p-6 space-y-4 relative overflow-hidden">
                
                {/* Dip/Alt Radyal Işık Parıltısı (Image 2 Glow) */}
                <div 
                  className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-t ${item.gradient} rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
                />

                {/* Üst Kısım: İkon Rozeti & Kategori Etiketi */}
                <div className="w-full flex items-center justify-between z-10">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 shadow-inner group-hover:scale-110 group-hover:border-amber-400/50 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {item.tag}
                  </span>
                </div>

                {/* Orta Kısım: Terim Başlığı & Açıklama */}
                <div className="w-full space-y-2 z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors tracking-tight">
                    {item.term}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.meaning}
                  </p>
                </div>

                {/* Alt Kısım: İncele Oku Linki */}
                <div className="w-full pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-amber-400 transition-colors z-10">
                  <span>Menzil Jargon</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
