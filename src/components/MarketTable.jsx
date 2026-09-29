import React from 'react';
import { ArrowUpRight, Flame, ChevronDown, List, LayoutGrid, ShieldAlert } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export default function MarketTable({ 
  coins, 
  onSelectCoin, 
  activeFilter, 
  onSelectFilter,
  viewMode,
  onToggleViewMode
}) {
  const filterTabs = [
    { id: 'all', label: 'Tüm Kriptolar' },
    { id: 'memecoin', label: 'Memecoinler 🔥' },
    { id: 'major', label: 'Ana Kriptolar 👑' },
    { id: 'layer1', label: 'Katman 1 ⚡' }
  ];

  // mrhyddenn Risk Rozeti Renk Eşleştirmesi
  const getRiskStyles = (coin) => {
    const type = coin.riskType || (coin.category === 'memecoin' ? 'high' : 'low');

    switch (type) {
      case 'low':
        return {
          '--risk-border': '#10B981',
          '--risk-color': '#34D399',
          '--risk-glow': 'rgba(16, 185, 129, 0.6)',
          '--risk-bg-hover': 'rgba(16, 185, 129, 0.2)'
        };
      case 'low-mid':
        return {
          '--risk-border': '#3B82F6',
          '--risk-color': '#60A5FA',
          '--risk-glow': 'rgba(59, 130, 246, 0.6)',
          '--risk-bg-hover': 'rgba(59, 130, 246, 0.2)'
        };
      case 'mid':
      case 'mid-high':
        return {
          '--risk-border': '#F59E0B',
          '--risk-color': '#FBBF24',
          '--risk-glow': 'rgba(245, 158, 11, 0.6)',
          '--risk-bg-hover': 'rgba(245, 158, 11, 0.2)'
        };
      case 'high':
        return {
          '--risk-border': '#EF4444',
          '--risk-color': '#F87171',
          '--risk-glow': 'rgba(239, 68, 68, 0.6)',
          '--risk-bg-hover': 'rgba(239, 68, 68, 0.2)'
        };
      case 'extreme':
      default:
        return {
          '--risk-border': '#EC4899',
          '--risk-color': '#F472B6',
          '--risk-glow': 'rgba(236, 72, 153, 0.6)',
          '--risk-bg-hover': 'rgba(236, 72, 153, 0.2)'
        };
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#0A101E]/95 backdrop-blur-2xl border border-blue-500/20 p-5 sm:p-7 space-y-6 shadow-2xl shadow-blue-950/40">
      
      {/* Görsel 4 Gece Mavisi Radyal Işık Parıltısı (Midnight Dashboard Ambient Glow) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Üst Başlık ve Filtre Seçici */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        
        {/* Sol Başlık */}
        <div>
          <h3 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <span>Kripto & Memecoin Listesi</span>
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Ekosistemdeki önde gelen projeler ve detaylı analizler
          </p>
        </div>

        {/* Sağ Filtre Dropdown & Görünüm Butonları (Görsel 4 Dashboard Stili) */}
        <div className="flex items-center gap-3">
          
          {/* Dropdown Filtre */}
          <div className="relative">
            <select
              value={activeFilter}
              onChange={(e) => onSelectFilter(e.target.value)}
              className="appearance-none bg-[#121B2E] text-slate-200 text-xs font-semibold px-4 py-2.5 pr-9 rounded-2xl border border-blue-500/25 hover:border-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 cursor-pointer transition-all shadow-inner"
            >
              {filterTabs.map((tab) => (
                <option key={tab.id} value={tab.id} className="bg-[#0D1424] text-white">
                  Kategori: {tab.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Tablo / Grid Görünüm Değiştirici */}
          <div className="flex items-center bg-[#121B2E] p-1 rounded-2xl border border-blue-500/25 gap-1">
            <button
              onClick={() => onToggleViewMode('table')}
              className={`p-1.5 rounded-xl transition-all ${
                viewMode === 'table'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablo Görünümü"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleViewMode('grid')}
              className={`p-1.5 rounded-xl transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Kart Görünümü"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Tablo Görünümü (Görsel 4 Gece Mavisi Teması) */}
      {viewMode === 'table' ? (
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left text-xs text-slate-300">
            <thead>
              <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                <th className="py-3.5 px-3.5 w-12 text-slate-400">#</th>
                <th className="py-3.5 px-3.5">Coin</th>
                <th className="py-3.5 px-3.5 hidden md:table-cell">Ağ & Altyapı</th>
                <th className="py-3.5 px-3.5 hidden sm:table-cell">Maksimum Arz</th>
                <th className="py-3.5 px-3.5">Risk Seviyesi</th>
                <th className="py-3.5 px-3.5 text-right w-20 whitespace-nowrap">İncele</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05]">
              {coins.map((coin, index) => {
                const isMeme = coin.category === 'memecoin';
                const isBitcoin = coin.id === 'bitcoin';
                const riskStyles = getRiskStyles(coin);

                return (
                  <tr
                    key={coin.id}
                    onClick={() => onSelectCoin(coin)}
                    className="hover:bg-[#131D33]/80 transition-all duration-200 cursor-pointer group"
                  >
                    {/* # Sıra Numarası */}
                    <td className="py-4 px-3.5 font-sans text-slate-400 text-xs font-medium">
                      {index + 1}
                    </td>

                    {/* Logo & İsim */}
                    <td className="py-4 px-3.5">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center p-1 shrink-0 border border-white/10 group-hover:scale-105 transition-transform shadow-md ${
                          isBitcoin ? 'bg-white' : 'bg-[#121B2E]'
                        }`}>
                          <img
                            src={coin.iconUrl}
                            alt={coin.name}
                            className="w-full h-full object-contain rounded-full"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/menzil.png';
                            }}
                          />
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                              {coin.name}
                            </span>
                            {isMeme && <Flame className="w-3.5 h-3.5 text-[#FF3B77] inline" />}
                          </div>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                            {coin.symbol}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Ağ & Altyapı Rozeti */}
                    <td className="py-4 px-3.5 hidden md:table-cell">
                      <span className="cyber-badge">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00ffff] animate-pulse" />
                        {coin.blockchain}
                      </span>
                    </td>

                    {/* Maksimum Arz (Yumuşatılmış Görünüm) */}
                    <td className="py-4 px-3.5 hidden sm:table-cell">
                      <span className="text-slate-300 text-xs font-normal max-w-[220px] block truncate" title={coin.maxSupply}>
                        {coin.maxSupply}
                      </span>
                    </td>

                    {/* Risk Seviyesi Rozeti */}
                    <td className="py-4 px-3.5 whitespace-nowrap">
                      <div 
                        className="uiverse-risk-badge"
                        style={riskStyles}
                      >
                        <ShieldAlert className="w-3 h-3 shrink-0" />
                        <span>{coin.riskLevel}</span>
                      </div>
                    </td>

                    {/* İncele Butonu */}
                    <td className="py-4 px-3.5 text-right w-20 whitespace-nowrap">
                      <button className="p-2 rounded-xl bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white transition-all group-hover:translate-x-0.5 shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        /* Grid Kart Görünümü (Görsel 4 Dashboard Uyumlu) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          {coins.map((coin) => {
            const riskStyles = getRiskStyles(coin);

            return (
              <div
                key={coin.id}
                onClick={() => onSelectCoin(coin)}
                className="p-5 rounded-3xl bg-[#121B2E]/90 hover:bg-[#18243E] border border-blue-500/20 hover:border-blue-400/40 transition-all cursor-pointer group space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center p-1 shrink-0 border border-white/10 ${
                      coin.id === 'bitcoin' ? 'bg-white' : 'bg-[#121B2E]'
                    }`}>
                      <img
                        src={coin.iconUrl}
                        alt={coin.name}
                        className="w-full h-full object-contain rounded-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/menzil.png';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors">
                        {coin.name}
                      </h4>
                      <span className="text-[11px] font-black text-slate-400 uppercase">
                        {coin.symbol}
                      </span>
                    </div>
                  </div>

                  <div 
                    className="uiverse-risk-badge"
                    style={riskStyles}
                  >
                    <ShieldAlert className="w-3 h-3 shrink-0" />
                    <span>{coin.riskLevel}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                  {coin.summary}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="cyber-badge">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ffff]" />
                    {coin.blockchain.split(' ')[0]}
                  </span>

                  <span className="text-blue-300 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    İncele
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
