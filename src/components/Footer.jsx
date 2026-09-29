import React from 'react';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-white/10 bg-[#0B0E14] text-slate-400 text-xs py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <img
              src="/menzil.png"
              alt="Menzil"
              className="w-7 h-7 rounded-full object-cover border border-amber-400"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/menzil.png';
              }}
            />
            <span className="text-white font-bold tracking-tight">
              Menzil <span className="text-amber-500">Crypto Hub</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden sm:inline">Kripto & Memecoin Portalı</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Sosyal Medya İkonları (X ve Instagram) */}
            <SocialLinks />

            <div className="flex items-center gap-4 text-xs font-medium pl-2 border-l border-white/10">
              <button onClick={() => onNavigate && onNavigate('all-coins')} className="hover:text-amber-400 transition-colors">
                Coin Listesi
              </button>
              <button onClick={() => onNavigate && onNavigate('guide')} className="hover:text-amber-400 transition-colors">
                Memecoin Rehberi
              </button>
              <button onClick={() => onNavigate && onNavigate('glossary')} className="hover:text-amber-400 transition-colors">
                Sözlük
              </button>
            </div>
          </div>

        </div>

        {/* Yasal & Bilgilendirme Uyarısı */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 text-center leading-relaxed">
          <p>
            ⚠️ <strong>Sorumluluk Reddi Beyanı:</strong> Bu web sitesinde yer alan tüm içerikler, analizler, grafikler ve memecoin incelemeleri yalnızca <strong>genel bilgilendirme ve eğitim</strong> amacıyla hazırlanmıştır. Hiçbir şekilde yatırım, finans, hukuk veya vergi tavsiyesi niteliği taşımaz. Kripto varlıklar yüksek volatiliteye ve risklere tabidir.
          </p>
        </div>

      </div>
    </footer>
  );
}

