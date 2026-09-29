import React from 'react';
import { Search, X, Sparkles, Coins, Flame, Layers, Users } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Coins: Coins,
  Flame: Flame,
  Layers: Layers,
  Users: Users
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  resultCount
}) {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        
        {/* Kategori Butonları */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25 font-bold scale-[1.02]'
                    : 'bg-[#151922] text-slate-300 hover:text-white hover:bg-[#1D222E] border border-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-amber-400'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Canlı Arama Kutusu */}
        <div className="relative min-w-[260px] md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Coin veya Memecoin ara (örn: BTC, PEPE)..."
            className="w-full pl-10 pr-10 py-2.5 bg-[#151922] text-white text-xs sm:text-sm rounded-xl border border-white/10 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 placeholder-slate-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>

      {/* Arama / Filtre Sonuç Bilgisi */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Görüntülenen: <strong className="text-amber-400">{resultCount}</strong> adet proje
        </span>
        {searchQuery && (
          <span className="text-slate-500">
            "{searchQuery}" için sonuçlar
          </span>
        )}
      </div>
    </div>
  );
}

