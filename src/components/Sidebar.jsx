import React from 'react';
import { 
  Coins, Flame, Layers, BookOpen, 
  HelpCircle, Home, X, Info
} from 'lucide-react';

export default function Sidebar({ activeTab, onSelectTab, isMobileOpen, setIsMobileOpen }) {
  const menuItems = [
    { id: 'all-coins', label: 'Tüm Kriptolar & Tablo', icon: Coins, count: '10+' },
    { id: 'memecoins', label: 'Popüler Memecoinler', icon: Flame, badge: 'HOT' },
    { id: 'major-coins', label: 'Ana Kripto Paralar', icon: Layers, count: null },
    { id: 'guide', label: 'Meme & Risk Rehberi', icon: BookOpen, count: null },
    { id: 'glossary', label: 'Kripto Sözlüğü', icon: HelpCircle, count: null },
  ];

  const handleItemClick = (id) => {
    onSelectTab(id);
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobil Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Responsive Dock / Mobile Drawer */}
      <aside className={`
        fixed top-0 left-0 bottom-0 lg:top-4 lg:left-4 lg:bottom-4 z-50
        w-72 sm:w-80 lg:w-20 
        bg-gradient-to-b from-[#18112C]/98 via-[#130E22]/98 to-[#0F0A1C]/98
        backdrop-blur-2xl border-r lg:border border-white/10 lg:rounded-[32px]
        flex flex-col items-center justify-between py-6 px-4 lg:px-0 shadow-2xl shadow-purple-950/50
        transition-transform duration-300 ease-in-out overflow-y-auto lg:overflow-visible
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Üst Kısım: Logo, Başlık & Mobil Kapat Butonu */}
        <div className="flex flex-col items-center gap-5 w-full">
          
          {/* Mobil Başlık & Kapat Butonu / Desktop 3 Renkli Nokta */}
          <div className="w-full flex items-center justify-between lg:justify-center px-2">
            {/* Desktop Noktalar */}
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
            </div>

            {/* Mobil Logo + Başlık */}
            <div className="flex lg:hidden items-center gap-3">
              <img
                src="/menzil.png"
                alt="Menzil Logo"
                className="w-8 h-8 rounded-full border border-amber-400/80"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/menzil.png';
                }}
              />
              <span className="font-bold text-white text-base tracking-wide">Menzil Portal</span>
            </div>

            {/* Mobil Kapat (X) Butonu */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menzil Logo İkonu (Desktop) */}
          <div 
            onClick={() => handleItemClick('home-back')}
            className="hidden lg:flex w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-500 to-amber-600 p-0.5 shadow-lg shadow-amber-500/25 cursor-pointer hover:scale-110 active:scale-95 transition-all group relative items-center justify-center"
            title="Menzil - Açılışa Dön"
          >
            <div className="w-full h-full bg-[#120D22] rounded-[14px] flex items-center justify-center overflow-hidden p-0.5">
              <img
                src="/menzil.png"
                alt="Menzil Logo"
                className="w-full h-full object-cover rounded-[12px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/menzil.png';
                }}
              />
            </div>
            
            <div className="hidden lg:block absolute left-24 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-[#1C1433]/95 text-white text-xs font-semibold rounded-2xl border border-amber-500/30 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all whitespace-nowrap z-50">
              Menzil • Açılışa Dön
            </div>
          </div>

          {/* Ayrım Çizgisi */}
          <div className="w-full lg:w-10 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-1" />

          {/* Navigasyon İkonları / Listesi */}
          <nav className="flex flex-col items-center gap-2.5 w-full">
            
            {/* Mobil Açılış Sayfası Linki */}
            <button
              onClick={() => handleItemClick('home-back')}
              className="lg:hidden w-full px-4 py-3 rounded-2xl flex items-center gap-3 text-amber-400 bg-amber-500/10 border border-amber-500/20 text-sm font-semibold transition-all"
            >
              <Home className="w-5 h-5 shrink-0" />
              <span>Karşılama Ekranına Dön</span>
            </button>

            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <div key={item.id} className="relative group w-full flex items-center justify-center">
                  
                  {/* Aktif Sol Gösterge Çubuğu (Desktop) */}
                  {isActive && (
                    <span className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-white rounded-r-full shadow-[0_0_12px_#fff]" />
                  )}

                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`
                      relative w-full lg:w-12 h-12 rounded-2xl flex items-center justify-start lg:justify-center px-4 lg:px-0 gap-3.5
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-tr from-[#FF3B77]/30 to-[#8C3AFF]/30 text-white border border-[#FF3B77]/50 shadow-lg shadow-purple-500/30 font-bold' 
                        : 'text-slate-400 hover:text-white hover:bg-white/10 font-medium'}
                    `}
                  >
                    <Icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : ''}`} />

                    {/* Mobil Etiket Text */}
                    <span className="lg:hidden text-sm flex-1 text-left truncate">{item.label}</span>

                    {/* Mobil Rozet / Sayı */}
                    {item.badge && (
                      <span className="lg:hidden text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500 text-white animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    {item.count && (
                      <span className="lg:hidden text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-white/5">
                        {item.count}
                      </span>
                    )}

                    {/* Desktop HOT Rozet Noktası */}
                    {item.badge && (
                      <span className="hidden lg:block absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-[#120D22] animate-pulse" />
                    )}
                  </button>

                  {/* Desktop Tooltip (Sıkışma ve Kesilme Düzeltildi) */}
                  <div className="hidden lg:block absolute left-24 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-[#1C1433]/95 text-white text-xs font-semibold rounded-2xl border border-purple-500/30 shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all whitespace-nowrap z-50">
                    {item.label}
                  </div>

                </div>
              );
            })}
          </nav>
        </div>

        {/* Alt Kısım: Rehber & Bilgi */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="w-full lg:w-10 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          
          <button
            onClick={() => handleItemClick('guide')}
            className="w-full lg:w-10 h-10 rounded-2xl lg:rounded-full bg-white/5 hover:bg-purple-500/20 text-slate-400 hover:text-purple-300 flex items-center justify-start lg:justify-center px-4 lg:px-0 gap-3 transition-colors relative group"
            title="Meme Rehberi"
          >
            <Info className="w-4 h-4 shrink-0" />
            <span className="lg:hidden text-xs font-medium">Rehber ve Riskler</span>
          </button>
        </div>

      </aside>
    </>
  );
}
