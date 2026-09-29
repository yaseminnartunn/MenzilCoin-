import React from 'react';
import { ArrowUpRight, Flame, Shield, Calendar, Layers, ExternalLink } from 'lucide-react';

export default function CoinCard({ coin, onSelect }) {
  const isMeme = coin.category === 'memecoin';

  return (
    <div 
      onClick={() => onSelect(coin)}
      className="group relative glass-card rounded-2xl p-5 border border-white/5 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
    >
      {/* Üst Kısım: Rozet ve Risk Göstergesi */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${coin.themeClass} flex items-center gap-1`}>
            {isMeme && <Flame className="w-3 h-3 animate-pulse" />}
            {coin.categoryLabel}
          </span>

          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${coin.riskColor}`}>
            {coin.riskLevel}
          </span>
        </div>

        {/* Coin Başlık & Logo */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="relative">
            <img
              src={coin.iconUrl}
              alt={coin.name}
              className="w-12 h-12 rounded-full object-cover p-0.5 bg-[#0B0E14] border border-white/10 group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png';
              }}
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                {coin.name}
              </h3>
              <span className="text-xs font-black text-slate-400 px-1.5 py-0.5 bg-white/5 rounded">
                {coin.symbol}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              Çıkış: {coin.foundedYear} • {coin.creator}
            </p>
          </div>
        </div>

        {/* Slogan / Kısa Açıklama */}
        <p className="text-xs text-slate-300 line-clamp-2 mb-4 font-normal leading-relaxed">
          {coin.summary}
        </p>

        {/* Öne Çıkan 2 Özellik */}
        <div className="space-y-1.5 mb-5">
          {coin.keyFeatures.slice(0, 2).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
              <span className="text-amber-500 font-bold">•</span>
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Alt Kısım: İncele Butonu & Ağ */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[11px] flex items-center gap-1">
          <Layers className="w-3.5 h-3.5 text-slate-500" />
          {coin.blockchain.split(' ')[0]}
        </span>

        <span className="text-amber-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
          Detayları İncele
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>

    </div>
  );
}

