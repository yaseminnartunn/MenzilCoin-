import React from 'react';
import { 
  Flame, ShieldAlert, AlertCircle, Compass, Zap, Target, Lock, 
  ArrowRight, Sparkles, Layers, ShieldCheck, CheckCircle2 
} from 'lucide-react';

export default function MemecoinGuide() {
  const guideCards = [
    {
      id: 'community',
      icon: Flame,
      title: 'Topluluk Gücü & Organik Kitle',
      description: 'X (Twitter) ve Telegram kanallarındaki kitle gerçek kişilerden mi oluşuyor yoksa bot katılımı mı var?',
      action: 'Kitle Analizini Oku',
      gradient: 'from-amber-500/25 via-orange-600/20 to-transparent',
      glowColor: 'rgba(245, 158, 11, 0.35)',
      iconBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30'
    },
    {
      id: 'liquidity',
      icon: Lock,
      title: 'Likidite Kilit ve Yakım Güvencesi',
      description: 'DEX havuzlarındaki likidite kilitli mi veya yakılmış mı? Rug Pull riskine karşı öncelikli kontrol.',
      action: 'Güvenlik Adımlarını İncele',
      gradient: 'from-blue-500/25 via-indigo-600/20 to-transparent',
      glowColor: 'rgba(59, 130, 246, 0.35)',
      iconBg: 'bg-blue-500/15 text-blue-400 border-blue-500/30'
    },
    {
      id: 'whales',
      icon: Target,
      title: 'Balina Cüzdan Dağılımı',
      description: 'Tek bir cüzdanın elinde toplam arzın %20-30\'u gibi devasa oranlar toplanmış mı? Dağılım şeffaflığı.',
      action: 'Cüzdan Analizini Keşfet',
      gradient: 'from-emerald-500/25 via-teal-600/20 to-transparent',
      glowColor: 'rgba(16, 185, 129, 0.35)',
      iconBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
    },
    {
      id: 'tax',
      icon: ShieldAlert,
      title: 'Alım-Satım Vergisi & Honeypot',
      description: 'Akıllı sözleşmede gizli yüksek satış vergisi veya satışı engelleyen Honeypot tuzak kodları var mı?',
      action: 'Sözleşme Kontrol Rehberi',
      gradient: 'from-purple-500/25 via-pink-600/20 to-transparent',
      glowColor: 'rgba(168, 85, 247, 0.35)',
      iconBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* 1. Üst Başlık Banner */}
      <div className="relative overflow-hidden rounded-[32px] p-6 sm:p-10 bg-gradient-to-r from-[#241138] via-[#1A0E2E] to-[#120822] border border-amber-500/25 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Kripto ve Memecoin Akademi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Memecoin Dünyası & <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">Bilinçli Analiz Rehberi</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
            Memecoinler internet kültürünün ve viral toplulukların gücüyle büyür. İşte yatırım veya araştırma yaparken bilmeniz gereken temel dinamikler.
          </p>
        </div>
      </div>

      {/* 2. Resim 1 İlhamlı 4'lü Radyal Işıklı Cam Kartlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {guideCards.map((card) => {
          const IconComp = card.icon;

          return (
            <div 
              key={card.id}
              className="uiverse-card group relative"
            >
              <div className="card-content flex-col items-start justify-between min-h-[260px] p-6 space-y-4 relative overflow-hidden">
                
                {/* Görsel 1 Alt Radyal Işık Parıltısı (Image 1 Glow Effect) */}
                <div 
                  className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-36 bg-gradient-to-t ${card.gradient} rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
                />

                {/* Cam İkon Rozeti */}
                <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${card.iconBg} shadow-inner group-hover:scale-110 transition-transform z-10`}>
                  <IconComp className="w-5 h-5" />
                </div>

                {/* İçerik */}
                <div className="w-full space-y-2 z-10 flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Alt Aksiyon Oku */}
                <div className="w-full pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors z-10">
                  <span>{card.action}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Ana Kripto vs Memecoin Karşılaştırması (Görsel 1 Çift Kart Yapısı) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Sol: Ana Kriptolar */}
        <div className="uiverse-card group">
          <div className="card-content flex-col items-start p-7 space-y-4 relative overflow-hidden">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-36 bg-gradient-to-t from-amber-500/20 via-yellow-600/15 to-transparent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3.5 z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-xl">
                ₿
              </div>
              <div>
                <h3 className="font-black text-lg text-white">Ana Kriptolar (BTC, ETH, SOL)</h3>
                <p className="text-xs text-slate-400">Teknoloji & Temel Değer Odaklı</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed z-10">
              Bitcoin ve Ethereum gibi projeler, gerçek dünyadaki finansal sistemleri merkezsizleştirmek ve güvenli akıllı sözleşme altyapıları sunmak üzere geliştirilir.
            </p>

            <ul className="space-y-2 text-xs text-slate-300 pt-3 border-t border-white/10 w-full z-10">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Uzun vadeli vizyon ve kurumsal kabul</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Kapsamlı teknik dokümanlar (Whitepaper)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sağ: Memecoinler */}
        <div className="uiverse-card group">
          <div className="card-content flex-col items-start p-7 space-y-4 relative overflow-hidden">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-36 bg-gradient-to-t from-pink-500/20 via-purple-600/15 to-transparent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3.5 z-10">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 font-black text-xl">
                🐕
              </div>
              <div>
                <h3 className="font-black text-lg text-white">Memecoinler (DOGE, PEPE, WIF)</h3>
                <p className="text-xs text-slate-400">Viral Hype & Topluluk Gücü</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed z-10">
              Memecoinler internet şakalarından veya maskotlardan doğar. Güçlerini teknolojiden değil, sosyal medyadaki viral yayılma hızından ve topluluğun bağlılığından alırlar.
            </p>

            <ul className="space-y-2 text-xs text-slate-300 pt-3 border-t border-white/10 w-full z-10">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Yüksek sosyal medya ilgisi ve eğlence</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Çok yüksek fiyat dalgalanması (Volatilite)</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* 4. Alt Uyarı Kutusu */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent border border-purple-500/20 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-pink-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs sm:text-sm font-bold text-white">Önemli Hatırlatma (DYOR - Do Your Own Research)</h4>
          <p className="text-xs text-purple-200/80 leading-relaxed">
            Memecoin piyasası son derece volatildir. Bu sitede sunulan bilgiler yalnızca araştırma ve genel kültür amaçlı olup yatırım tavsiyesi niteliği taşımaz.
          </p>
        </div>
      </div>

    </div>
  );
}
