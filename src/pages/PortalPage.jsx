import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopHeader from '../components/TopHeader';
import FloatingLines from '../components/FloatingLines';
import MenzilHeroBanner from '../components/MenzilHeroBanner';
import MarketTable from '../components/MarketTable';
import RightSidebar from '../components/RightSidebar';
import CoinDetailModal from '../components/CoinDetailModal';
import MemecoinGuide from '../components/MemecoinGuide';
import GlossarySection from '../components/GlossarySection';
import Footer from '../components/Footer';
import { coinsData } from '../data/coinsData';

export default function PortalPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all-coins');
  const [tableFilter, setTableFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'grid'
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Menzil Token Verisi
  const menzilCoin = useMemo(() => {
    return coinsData.find(c => c.id === 'menzil') || coinsData[0];
  }, []);

  // Filtreleme Mantığı
  const filteredCoins = useMemo(() => {
    return coinsData.filter((coin) => {
      let matchesCategory = true;

      if (activeTab === 'memecoins') {
        matchesCategory = coin.category === 'memecoin';
      } else if (activeTab === 'major-coins') {
        matchesCategory = coin.category === 'major' || coin.category === 'layer1';
      } else if (activeTab === 'all-coins') {
        if (tableFilter !== 'all') {
          matchesCategory = coin.category === tableFilter;
        }
      }

      // Arama filtresi
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        coin.name.toLowerCase().includes(query) ||
        coin.symbol.toLowerCase().includes(query) ||
        coin.tagline.toLowerCase().includes(query) ||
        coin.creator.toLowerCase().includes(query) ||
        coin.blockchain.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, tableFilter, searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#09090F] text-slate-100 flex font-sans selection:bg-[#F59E0B] selection:text-black overflow-x-hidden">
      
      {/* Tüm Sayfalarda Akıcı İnteraktif FloatingLines Arka Planı */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <FloatingLines 
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[7, 7, 7]}
          lineDistance={[9, 9, 9]}
          bendRadius={8}
          bendStrength={-1.8}
          interactive={false}
          parallax={true}
          animationSpeed={0.8}
          linesGradient={["#F59E0B", "#8C3AFF", "#e945f5", "#00F2FE"]}
          backgroundColor="#09090F"
        />
      </div>

      {/* Arka Plan Yumuşak Vinyet / Karartma Katmanı */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#09090F]/70 via-[#09090F]/50 to-[#09090F]/90 pointer-events-none" />

      {/* Sol İnce Dock Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          if (tab === 'home-back') {
            navigate('/');
            return;
          }
          setActiveTab(tab);
          if (tab === 'memecoins') setTableFilter('memecoin');
          if (tab === 'major-coins') setTableFilter('major');
          if (tab === 'all-coins') setTableFilter('all');
        }}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />

      {/* Ana İçerik Alanı */}
      <div className="relative z-10 flex-1 lg:pl-28 flex flex-col min-w-0">
        
        {/* Üst Başlık & Arama */}
        <TopHeader
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />

        {/* Ana İçerik */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          
          {/* 1. KRİPTO & MEMECOIN TABLOSU + MENZIL VITRINI + 3D GRAFİK & ÖNE ÇIKANLAR */}
          {(activeTab === 'all-coins' || activeTab === 'memecoins' || activeTab === 'major-coins') && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Menzil Tanıtım Vitrini Bannerı */}
              <MenzilHeroBanner
                onSelectMenzil={() => setSelectedCoin(menzilCoin)}
              />

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
                
                {/* Sol / Orta Geniş Kolon: Kripto & Memecoin Tablosu */}
                <div className="xl:col-span-2 space-y-6">
                  <div id="market-section">
                    <MarketTable
                      coins={filteredCoins}
                      onSelectCoin={(coin) => setSelectedCoin(coin)}
                      activeFilter={tableFilter}
                      onSelectFilter={setTableFilter}
                      viewMode={viewMode}
                      onToggleViewMode={setViewMode}
                    />
                  </div>
                </div>

                {/* Sağ Kolon: 3D Dairesel Grafik & Öne Çıkan Projeler */}
                <div className="xl:col-span-1">
                  <RightSidebar
                    coins={coinsData}
                    onSelectCoin={(coin) => setSelectedCoin(coin)}
                    onOpenGuide={() => setActiveTab('guide')}
                  />
                </div>

              </div>

            </div>
          )}

          {/* 2. MEMECOIN REHBERİ */}
          {activeTab === 'guide' && (
            <div className="animate-in fade-in duration-300">
              <MemecoinGuide />
            </div>
          )}

          {/* 3. JARGON & SÖZLÜK */}
          {activeTab === 'glossary' && (
            <div className="animate-in fade-in duration-300">
              <GlossarySection />
            </div>
          )}

        </main>

        {/* Alt Footer */}
        <Footer onNavigate={setActiveTab} />

      </div>

      {/* Detay Modalı */}
      {selectedCoin && (
        <CoinDetailModal
          coin={selectedCoin}
          onClose={() => setSelectedCoin(null)}
        />
      )}

    </div>
  );
}
