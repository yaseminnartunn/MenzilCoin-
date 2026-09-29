import React from 'react';
import { Search, Menu, Gem, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SocialLinks from './SocialLinks';

export default function TopHeader({ searchQuery, onSearchChange, onOpenMobileSidebar }) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 w-full bg-[#0D0B14]/85 backdrop-blur-xl border-b border-white/5 px-4 sm:px-8 py-3.5">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        
        {/* Sol: Menü Açma (Mobil) + Uiverse Arama Kutusu */}
        <div className="flex items-center gap-3 flex-1 max-w-md">
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2.5 rounded-xl bg-[#18132A] text-slate-300 hover:text-white border border-white/10 active:scale-95 transition-all shrink-0"
            aria-label="Menüyü Aç"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative w-full">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Coin veya Memecoin ara..."
              className="uiverse-input"
            />
          </div>
        </div>

        {/* Sağ: Social Links + Menzil Portal Logosu & Canlı Rozet */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Uiverse Sosyal Medya İkonları (X & Instagram) */}
          <SocialLinks />

          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#18112C] border border-amber-500/30 hover:border-amber-500/60 cursor-pointer transition-all group"
          >
            <img
              src="/menzil.png"
              alt="Menzil"
              className="w-6 h-6 rounded-full object-cover border border-amber-400"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/menzil.png';
              }}
            />
            <span className="hidden sm:inline-block font-bold text-xs text-white group-hover:text-amber-300 transition-colors">
              Menzil Hub
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

      </div>
    </header>
  );
}
