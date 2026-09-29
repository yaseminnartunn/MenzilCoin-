import React, { useState } from 'react';
import { ArrowUpRight, Flame, PieChart, ShieldAlert } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function RightSidebar({ onSelectCoin, coins, onOpenGuide }) {
  const [hoveredSlice, setHoveredSlice] = useState(null);

  const trendingList = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      iconUrl: '/assets/coins/bitcoin.png',
      isWhiteBg: true
    },
    {
      id: 'pepe',
      name: 'Pepe',
      symbol: 'PEPE',
      iconUrl: '/assets/coins/pepe.png',
      isWhiteBg: false
    },
    {
      id: 'dogwifhat',
      name: 'dogwifhat',
      symbol: 'WIF',
      iconUrl: '/assets/coins/dogwifhat.jpg',
      isWhiteBg: false
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      iconUrl: '/assets/coins/ethereum.png',
      isWhiteBg: false
    }
  ];

  const sliceInfo = {
    btc: {
      title: 'Bitcoin',
      share: '%56.4',
      color: '#818CF8'
    },
    meme: {
      title: 'Memecoinler',
      share: '%23.8',
      color: '#FF6B99'
    },
    alt: {
      title: 'ETH & L1',
      share: '%19.8',
      color: '#38BDF8'
    }
  };

  return (
    <div className="space-y-5">
      
      {/* 1. Neumorphic / Frosted 3D Dairesel Dağılım Grafiği */}
      <SpotlightCard className="p-5 sm:p-6 border border-white/5 space-y-4 shadow-2xl" spotlightColor="rgba(99, 102, 241, 0.25)">
        
        <div className="flex items-center justify-between pb-1 border-b border-white/5">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-[#8C3AFF]" />
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Piyasa Hacim Dağılımı</h3>
              <p className="text-[11px] text-slate-400">Kripto Varlık Payları</p>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* 3D Frosted Soft Glow Donut Grafik & Konuşma Baloncuğu */}
        <div className="relative flex flex-col items-center justify-center my-1 py-1">
          
          {/* Soluk & Küçük Konuşma Baloncuğu (Speech Bubble Tooltip) */}
          {hoveredSlice && (
            <div className="absolute -top-3 z-30 transition-all duration-200 pointer-events-none animate-in fade-in zoom-in-95">
              <div className="relative px-2.5 py-1 rounded-md bg-[#0C081A]/95 backdrop-blur-md border border-white/10 shadow-xl text-center">
                <span className="text-[10px] font-medium text-slate-300 flex items-center gap-1">
                  <span className="font-bold" style={{ color: sliceInfo[hoveredSlice].color }}>
                    {sliceInfo[hoveredSlice].title}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="font-mono text-slate-200 font-semibold">
                    {sliceInfo[hoveredSlice].share}
                  </span>
                </span>

                {/* Konuşma Baloncuğu Aşağı Bakan Küçük Kuyruk Oku */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0C081A] border-r border-b border-white/10 transform rotate-45" />
              </div>
            </div>
          )}

          <div className="relative w-40 h-40 rounded-full bg-gradient-to-tr from-[#140E26] via-[#21163C] to-[#2D1B50] p-2.5 shadow-inner border border-white/10 flex items-center justify-center mt-1">
            
            <svg viewBox="0 0 148 148" className="w-full h-full transform -rotate-90">
              {/* Arka Çember */}
              <circle
                cx="74"
                cy="74"
                r="58"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="15"
                fill="transparent"
              />
              
              {/* 1. Bitcoin Dilimi (%56.4 - Mavi/Indigo) */}
              <circle
                cx="74"
                cy="74"
                r="58"
                stroke="#6366F1"
                strokeWidth={hoveredSlice === 'btc' ? "18" : "15"}
                strokeDasharray="364.42"
                strokeDashoffset="158"
                strokeLinecap="round"
                fill="transparent"
                onMouseEnter={() => setHoveredSlice('btc')}
                onMouseLeave={() => setHoveredSlice(null)}
                className="cursor-pointer transition-all duration-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
              />

              {/* 2. Memecoin Dilimi (%23.8 - Pembe/Magenta) */}
              <circle
                cx="74"
                cy="74"
                r="58"
                stroke="#FF3B77"
                strokeWidth={hoveredSlice === 'meme' ? "18" : "15"}
                strokeDasharray="364.42"
                strokeDashoffset="277"
                strokeLinecap="round"
                fill="transparent"
                onMouseEnter={() => setHoveredSlice('meme')}
                onMouseLeave={() => setHoveredSlice(null)}
                className="cursor-pointer transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,59,119,0.7)]"
              />

              {/* 3. Ethereum & Altcoinler (%19.8 - Turkuaz/Cyan) */}
              <circle
                cx="74"
                cy="74"
                r="58"
                stroke="#00F2FE"
                strokeWidth={hoveredSlice === 'alt' ? "18" : "15"}
                strokeDasharray="364.42"
                strokeDashoffset="292"
                strokeLinecap="round"
                fill="transparent"
                onMouseEnter={() => setHoveredSlice('alt')}
                onMouseLeave={() => setHoveredSlice(null)}
                className="cursor-pointer transition-all duration-300 drop-shadow-[0_0_10px_rgba(0,242,254,0.7)]"
              />
            </svg>

            {/* Merkezdeki Mavi/Mor Parıltılı Radyal Küre */}
            <div 
              onMouseEnter={() => setHoveredSlice('btc')}
              onMouseLeave={() => setHoveredSlice(null)}
              className="absolute inset-7 rounded-full bg-gradient-to-b from-[#3B28CC]/85 via-[#2A189A]/95 to-[#120B38] backdrop-blur-md shadow-2xl shadow-indigo-600/50 border border-indigo-400/30 flex flex-col items-center justify-center text-center p-1.5 cursor-pointer hover:scale-105 transition-transform"
            >
              <span className="text-[9px] text-indigo-200 font-extrabold uppercase tracking-widest block">
                {hoveredSlice ? sliceInfo[hoveredSlice].title.split(' ')[0] : 'BTC'}
              </span>
              <span className="text-xl font-black text-white leading-none my-0.5">
                {hoveredSlice === 'meme' ? '23.8%' : hoveredSlice === 'alt' ? '19.8%' : '56.4%'}
              </span>
              <span className="text-[8px] text-pink-300 font-semibold">
                {hoveredSlice ? 'Oran' : 'Lider'}
              </span>
            </div>

          </div>
        </div>

        {/* Grafikteki 3 Ana Para Birimi Dağılımı */}
        <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-white/5 text-center text-xs">
          <div 
            onMouseEnter={() => setHoveredSlice('btc')}
            onMouseLeave={() => setHoveredSlice(null)}
            className={`p-1.5 rounded-xl bg-[#120D22] border transition-all cursor-pointer ${
              hoveredSlice === 'btc' ? 'border-indigo-500 bg-indigo-950/40 scale-105' : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-center gap-1 text-indigo-400 font-bold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>%56.4</span>
            </div>
            <span className="text-[9px] text-slate-400 block mt-0.5 font-medium truncate">Bitcoin</span>
          </div>

          <div 
            onMouseEnter={() => setHoveredSlice('meme')}
            onMouseLeave={() => setHoveredSlice(null)}
            className={`p-1.5 rounded-xl bg-[#120D22] border transition-all cursor-pointer ${
              hoveredSlice === 'meme' ? 'border-pink-500 bg-pink-950/40 scale-105' : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-center gap-1 text-pink-400 font-bold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B77]" />
              <span>%23.8</span>
            </div>
            <span className="text-[9px] text-slate-400 block mt-0.5 font-medium truncate">Meme</span>
          </div>

          <div 
            onMouseEnter={() => setHoveredSlice('alt')}
            onMouseLeave={() => setHoveredSlice(null)}
            className={`p-1.5 rounded-xl bg-[#120D22] border transition-all cursor-pointer ${
              hoveredSlice === 'alt' ? 'border-cyan-500 bg-cyan-950/40 scale-105' : 'border-white/5 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-center gap-1 text-cyan-400 font-bold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
              <span>%19.8</span>
            </div>
            <span className="text-[9px] text-slate-400 block mt-0.5 font-medium truncate">Diğer</span>
          </div>
        </div>

        {/* Kompakt & Yumuşatılmış Kılavuz Butonu */}
        <div className="pt-1">
          <button
            onClick={onOpenGuide}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FF3B77] via-[#9333EA] to-[#8C3AFF] text-white text-xs font-semibold tracking-normal shadow-md shadow-pink-500/20 hover:shadow-purple-500/35 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 border border-white/10"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-pink-200 shrink-0" />
            <span>Meme ve risk kılavuzunu oku</span>
          </button>
        </div>

      </SpotlightCard>

      {/* 2. Alt Liste: Öne Çıkan Projeler (Ferah Boşluk & Net Ayrım) */}
      <SpotlightCard className="p-5 sm:p-6 border border-white/5 space-y-4 shadow-2xl" spotlightColor="rgba(255, 59, 119, 0.2)">
        
        {/* Başlık ve Ayrım Çizgisi */}
        <div className="flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#FF3B77]" />
            <h3 className="text-sm font-bold text-white tracking-tight">Öne Çıkan Projeler</h3>
          </div>
        </div>

        {/* ElSombrero2 Uiverse Kartları (Ferah Boşluklu) */}
        <div className="space-y-3 pt-1">
          {trendingList.map((item) => {
            const coinData = coins.find(c => c.id === item.id);

            return (
              <div
                key={item.id}
                onClick={() => coinData && onSelectCoin(coinData)}
                className="uiverse-card group"
              >
                <div className="card-content">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      className={`w-9 h-9 rounded-xl object-contain p-0.5 border border-white/10 group-hover:scale-110 transition-transform shrink-0 ${
                        item.isWhiteBg ? 'bg-white' : 'bg-[#0D0B14]'
                      }`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/coins/bitcoin.png';
                      }}
                    />
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-black text-slate-400 px-2 py-0.5 bg-white/5 rounded-md border border-white/5">
                        {item.symbol}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Alt Tümünü Gör Linki */}
        <div className="pt-2 border-t border-white/5">
          <button
            onClick={onOpenGuide}
            className="w-full text-center text-xs font-medium text-purple-300 hover:text-white flex items-center justify-center gap-1 transition-colors"
          >
            <span>Meme Rehberine Git</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </SpotlightCard>

    </div>
  );
}
