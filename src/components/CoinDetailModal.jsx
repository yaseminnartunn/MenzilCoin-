import React, { useEffect } from 'react';
import { 
  X, ExternalLink, ShieldCheck, AlertTriangle, 
  Flame, CheckCircle2, FileText, Calendar, 
  User, Database, Cpu
} from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function CoinDetailModal({ coin, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!coin) return null;

  const isMeme = coin.category === 'memecoin';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      
      {/* Modal Kutusu */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#16102B] rounded-3xl border border-purple-500/20 shadow-2xl p-5 sm:p-7 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Başlık Bölümü */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pr-10">
          <div className="relative">
            <img
              src={coin.iconUrl}
              alt={coin.name}
              className={`w-16 h-16 rounded-2xl p-1 border border-purple-500/30 shrink-0 shadow-lg shadow-purple-500/20 object-contain ${
                coin.id === 'bitcoin' ? 'bg-white' : 'bg-[#0D0B14]'
              }`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/coins/bitcoin.png';
              }}
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {coin.name}
              </h2>
              <span className="text-xs font-black text-slate-300 px-2 py-0.5 bg-white/10 rounded-md">
                {coin.symbol}
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${coin.themeClass}`}>
                {coin.categoryLabel}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-purple-200/80 mt-1 font-medium">
              {coin.tagline}
            </p>
          </div>
        </div>

        {/* Hızlı Bilgi Izgarası */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 rounded-2xl bg-[#0D0B14]/80 border border-white/5 text-xs">
          
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Çıkış Yılı</span>
            <div className="flex items-center gap-1 mt-0.5 font-semibold text-white">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{coin.foundedYear}</span>
            </div>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Kurucu / Ekip</span>
            <div className="flex items-center gap-1 mt-0.5 font-semibold text-white">
              <User className="w-3.5 h-3.5 text-pink-400" />
              <span className="truncate">{coin.creator}</span>
            </div>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Ağ & Altyapı</span>
            <div className="flex items-center gap-1 mt-0.5 font-semibold text-white">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span className="truncate">{coin.blockchain}</span>
            </div>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Maksimum Arz</span>
            <div className="flex items-center gap-1 mt-0.5 font-semibold text-white">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span className="truncate">{coin.maxSupply}</span>
            </div>
          </div>

        </div>

        {/* Görsel 1 İlhamlı Hakkında & Genel Bakış Kartı */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#181232]/90 via-[#120D26]/90 to-[#0A0718] border border-amber-500/25 p-5 sm:p-7 space-y-4 shadow-2xl">
          
          {/* Görsel 1 İç Radyal Işık Parıltısı (Ambient Moss/Emerald Glow) */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-36 bg-gradient-to-t from-emerald-500/20 via-amber-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Üst Başlık & İkon Rozeti */}
          <div className="flex items-center gap-3 z-10 relative">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-black text-white tracking-tight">
                Hakkında & <span className="italic font-serif font-normal bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">Genel Bakış</span>
              </h4>
              <p className="text-[11px] text-slate-400">Proje vizyonu, altyapısı ve temel hedefleri</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line relative z-10 font-normal">
            {coin.description}
          </p>
        </div>

        {/* Memecoin Özel Köken Hikayesi */}
        {coin.originStory && (
          <div className="relative overflow-hidden rounded-[24px] p-5 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-transparent border border-amber-500/20 space-y-2">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{isMeme ? 'Meme Kökeni & Doğuş Hikayesi' : 'Arka Plan & Çıkış Nedeni'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed italic font-normal">
              "{coin.originStory}"
            </p>
          </div>
        )}

        {/* Görsel 1 Tarzı Temel Özellikler Izgarası */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Temel Özellikleri & Fark Yaratan Noktalar</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {coin.keyFeatures.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 text-xs text-slate-200 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Avantajlar ve Riskler (Menzil için gizlendi) */}
        {coin.id !== 'menzil' && coin.pros && coin.risks && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 space-y-2">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Güçlü Yönleri (Avantajlar)
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {coin.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">+</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/40 space-y-2">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Riskler & Dikkat Edilmesi Gerekenler
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {coin.risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400 font-bold">-</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Alt Sosyal Bağlantılar ve Kapat Butonu */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {coin.id === 'menzil' ? (
              <SocialLinks />
            ) : (
              coin.officialLinks?.whitepaper && (
                <a
                  href={coin.officialLinks.whitepaper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/5 transition-colors"
                >
                  <span>Whitepaper / Doküman</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#FF3B77] to-[#8C3AFF] text-white font-bold text-xs shadow-lg shadow-purple-500/20 hover:opacity-95 transition-all ml-auto"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
}
