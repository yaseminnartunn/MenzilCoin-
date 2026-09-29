import React from 'react';
import { Sparkles, Flame, BookOpen, HelpCircle, ShieldAlert } from 'lucide-react';

export default function Navbar({ onNavigate, activeSection }) {
  return (
    <nav className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 bg-[#0B0E14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Başlık */}
          <div 
            onClick={() => onNavigate('coins')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B0E14] rounded-[10px] flex items-center justify-center">
                <span className="text-xl font-black text-amber-500">₿</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  Coin & Meme<span className="text-amber-500">Hub</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  v1.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Kripto ve Memecoin Bilgi Portalı
              </p>
            </div>
          </div>

          {/* Menü Linkleri */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onNavigate('coins')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeSection === 'coins'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Coinler</span>
            </button>

            <button
              onClick={() => onNavigate('guide')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeSection === 'guide'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Meme Rehberi</span>
              <span className="sm:hidden">Rehber</span>
            </button>

            <button
              onClick={() => onNavigate('glossary')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeSection === 'glossary'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>Sözlük</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

