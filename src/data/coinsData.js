/**
 * 🪙 COIN & MEMECOIN VERİ TABANI
 * 
 * Bu dosyayı dilediğiniz gibi düzenleyebilir, yeni coinler ekleyebilir 
 * veya var olanların bilgilerini güncelleyebilirsiniz.
 */

export const categories = [
  { id: 'all', name: 'Tüm Kriptolar', icon: 'Sparkles' },
  { id: 'major', name: 'Ana Kripto Paralar', icon: 'Coins' },
  { id: 'memecoin', name: '🔥 Popüler Memecoinler', icon: 'Flame' },
  { id: 'layer1', name: 'Katman 1 (Layer 1)', icon: 'Layers' },
  { id: 'community', name: 'Topluluk & Kültür', icon: 'Users' }
];

export const coinsData = [
  // ==========================================
  // 🌟 MENZIL DIGITAL COIN (MNZ) - PROJE YEREL PARASI
  // ==========================================
  {
    id: 'menzil',
    name: 'Menzil',
    symbol: 'MNZ',
    category: 'major',
    categoryLabel: '🌟 Ekosistem Para Birimi',
    iconUrl: '/menzil.png',
    color: '#F59E0B',
    themeClass: 'from-amber-500/20 to-yellow-600/10 border-amber-500/30 text-amber-400',
    tagline: 'Günlük hayatın harcamalarını değere dönüştüren yeni nesil ekosistem.',
    foundedYear: 2026,
    creator: 'Menzil Core Team',
    blockchain: 'Menzil Network (EVM)',
    consensus: 'Proof of Stake (PoS) / Topluluk Doğrulayıcıları',
    maxSupply: '1.000.000.000 MNZ',
    riskLevel: 'Lansman Aşaması',
    riskType: 'low-mid',
    riskColor: 'text-amber-400 bg-amber-950/60 border-amber-800',
    summary: 'Günlük harcamalarımızın yükünü azaltmak, değerimizi korumak ve geleceğin ekonomisinde kendimize yeni bir menzil oluşturmak için geliştirilen yerel dijital varlık.',
    description: `MENZİL COİN - Günlük Hayatın Harcamalarını Değere Dönüştürme Fikri

Her gün para harcıyoruz: Sinemaya gidiyoruz, tiyatroya gidiyoruz, konserlere katılıyoruz. Ulaşıma para ödüyoruz, alışveriş yapıyoruz, sosyal hayatımızı sürdürüyoruz. Bu harcamaların büyük bölümü hayatımızın vazgeçilmez bir parçası.

MENZİL COİN'in çıkış noktası tam olarak burada ortaya çıkıyor:
Zaten yapmak zorunda olduğumuz harcamaları, gelecekte bize değer üretebilecek bir sisteme dönüştürebilir miyiz?

MENZİL COİN'in vizyonu, kripto para dünyasının sunduğu imkanlardan yararlanarak insanların günlük yaşamlarında yaptıkları rutin harcamaların (sinema, tiyatro, konser, ulaşım, alışveriş) ekonomik yükünü azaltabilecek bir ekosistem oluşturmaktır.

Sinema bileti, tiyatro, konser, ulaşım ve alışveriş... Günlük yaşamın tüm dinamiklerine doğrudan dokunan sürdürülebilir bir dijital değer iklimi.

PARAMIZI SADECE HARCAMAK DEĞİL, DEĞERLENDİRMEK
Geleneksel sistemde para harcanır ve gider. MENZİL COİN ise farklı bir bakış açısı ortaya koymayı hedefliyor: Harcamalarımızı bir maliyet olmaktan çıkarıp ekosistemin parçası haline getirmek.

EKONOMİK DALGALANMALARA KARŞI DAHA GÜÇLÜ BİR YAPI
Dünya ekonomisi sürekli değişiyor. MENZİL COİN'in vizyonu, insanların yalnızca gelirlerini artırmaya değil, aynı zamanda giderlerini azaltmaya odaklandığı bir sistem oluşturmaktır:
• Kazancın değerini korumak.
• Günlük harcamaların yükünü azaltmak.

MENZİL'İN HEDEFİ
Bugün güçlü bir proje olarak başlayan yolculuk; yarın insanların sinemadan ulaşıma, eğlenceden alışverişe kadar farklı alanlarda kullanabileceği bir ekosisteme dönüşebilir.

MENZİL COİN'in başarısını yalnızca fiyat grafiğiyle değil, insanların hayatına sağladığı gerçek faydayla ölçmek istiyoruz:
• Daha fazla harcamak değil, aynı hayatı daha az maliyetle yaşayabilmek.
• Daha fazla kazanmak kadar, kazandığımızı koruyabilmek.
• Daha fazla tüketmek kadar, harcamalarımızdan yeniden değer üretebilmek.

İşte MENZİL COİN'in hikâyesi burada başlıyor: Harcamalarımızın yükünü azaltmak, değerimizi korumak ve geleceğin ekonomisinde kendimize yeni bir menzil oluşturmak için.`,
    originStory: 'Harcamalarımızın yükünü azaltmak, değerimizi korumak ve geleceğin ekonomisinde kendimize yeni bir menzil oluşturmak için doğdu.',
    keyFeatures: [
      'Günlük Harcama Avantajları: Sinema, ulaşım ve alışverişte bütçe yükünü azaltma vizyonu.',
      'Değer Koruma Odağı: Harcamaları maliyet olmaktan çıkarıp ekosistemin parçası yapma.',
      'EVM & Hızlı İşlem: Mikro ödemelere uygun yüksek hızlı blokzincir altyapısı.',
      'Topluluk Odaklı Büyüme: Fiyat grafiğinin ötesinde gerçek hayat faydası oluşturma.'
    ],
    officialLinks: {
      whitepaper: 'https://menzil.io/whitepaper.pdf',
      explorer: 'https://menzilscan.io'
    }
  },

  // ==========================================
  // 1. BITCOIN (BTC)
  // ==========================================
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    category: 'major',
    categoryLabel: 'Dijital Altın / Ana Kripto',
    iconUrl: '/assets/coins/bitcoin.png',
    color: '#F7931A',
    themeClass: 'from-amber-500/20 to-orange-600/10 border-amber-500/30 text-amber-500',
    tagline: 'Dünyanın ilk ve en büyük merkeziyetsiz dijital para birimi.',
    foundedYear: 2009,
    creator: 'Satoshi Nakamoto',
    blockchain: 'Bitcoin Blockchain',
    consensus: 'Proof of Work (İş Kanıtı - SHA-256)',
    maxSupply: '21.000.000 BTC',
    riskLevel: 'Düşük Risk',
    riskType: 'low',
    riskColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800',
    summary: 'Merkeziyetsiz, aracı kurumlara ihtiyaç duymayan, sınırlı arza sahip küresel değer saklama aracı.',
    description: `Bitcoin, 2008 yılında 'Satoshi Nakamoto' takma adlı gizemli bir kişi veya grup tarafından yayımlanan teknik makale (Whitepaper) ile duyuruldu ve 2009'da hayata geçti. Geleneksel finansal sistemlerin enflasyonist ve merkezi yapısına bir başkaldırı olarak tasarlanan Bitcoin, peer-to-peer (eşler arası) transfer yapısına sahiptir.

Toplam arzı kesin olarak 21 milyon adetle sınırlandırılmıştır. Her 210.000 blokta bir (yaklaşık 4 yılda bir) madencilere verilen blok ödülü yarıya iner (Halving). Bu durum Bitcoin'i deflasyonist ve kıt bir varlık, yani "Dijital Altın" haline getirir.`,
    originStory: '2008 Küresel Ekonomik Krizi sırasında bankaların batışı ve sınırsız para basımına tepki olarak doğdu. İlk blokta (Genesis Block) "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" gazete manşeti yer almaktadır.',
    keyFeatures: [
      'Sınırlı Arz: Yalnızca 21 milyon adet üretilebilir.',
      'Merkeziyetsiz: Hiçbir hükümet, şirket veya lider tarafından kontrol edilemez.',
      'Sansüre Dayanıklı: İşlemler geri alınamaz ve engellenemez.',
      'Halving Döngüsü: 4 yılda bir arz üretim hızı yarı yarıya düşer.'
    ],
    pros: [
      'En yüksek piyasa değeri ve kurumsal kabul (Spot ETFler, MicroStrategy vb.)',
      'Ağ güvenliği dünyanın en güçlü süper bilgisayar ağından daha büyüktür',
      'Küresel likidite ve küresel tanınırlık'
    ],
    risks: [
      'Fiyat volatilitesi (kısa vadeli sert dalgalanmalar)',
      'Geleneksel ödeme sistemlerine kıyasla ana ağda daha yavaş işlem hızı (Lightning ile çözülmektedir)'
    ],
    officialLinks: {
      website: 'https://bitcoin.org',
      whitepaper: 'https://bitcoin.org/bitcoin.pdf',
      explorer: 'https://mempool.space'
    }
  },

  // ==========================================
  // 2. DOGECOIN (DOGE) - MEMECOIN OG
  // ==========================================
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    category: 'memecoin',
    categoryLabel: 'Memecoin Öncüsü / Kültür',
    iconUrl: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
    color: '#C2A633',
    themeClass: 'from-yellow-500/20 to-amber-600/10 border-yellow-500/30 text-yellow-500',
    tagline: 'Kripto dünyasının ilk ve en efsanevi şaka (meme) para birimi.',
    foundedYear: 2013,
    creator: 'Billy Markus & Jackson Palmer',
    blockchain: 'Dogecoin (Scrypt tabanlı)',
    consensus: 'Proof of Work (AuxPow ile Litecoin ile ortak kazım)',
    maxSupply: 'Sınırsız (Yılda ~5 Milyar DOGE sabit artış)',
    riskLevel: 'Orta - Yüksek',
    riskColor: 'text-amber-400 bg-amber-950/60 border-amber-800',
    summary: 'Kripto paraları alaya almak için yaratılan ancak Elon Musk ve devasa internet topluluğuyla küresel bir fenomene dönüşen memecoin.',
    description: `Dogecoin, Aralık 2013'te yazılım mühendisleri Billy Markus ve Jackson Palmer tarafından Bitcoin ve diğer kripto projeleriyle dalga geçmek amacıyla bir 'şaka' olarak piyasaya sürüldü. Maskotu, ünlü internet fenomeni Shiba Inu cinsi köpek 'Kabosu'dur.

Zamanla samimi ve yardımsever topluluğu sayesinde (Jamaika Kızak Takımına sponsor olma, su kuyuları açma gibi bağış projeleri) büyük saygı kazandı. 2021 yılında Elon Musk'ın yoğun tweet desteği ile dünyanın en değerli kriptoları arasına girdi.`,
    originStory: '2013 yılında internette viral olan "Doge" (iç konuşmaları Comic Sans fontuyla yazılan şaşkın Shiba Inu köpeği) meme\'inden esinlenerek 3 saat içinde kodlanmıştır.',
    keyFeatures: [
      'OG Memecoin: Tüm memecoin furyasının başladığı nokta.',
      'Düşük İşlem Ücreti ve Hızlı Transfer: Mikro ödemeler ve bahşişler için elverişli.',
      'Sınırsız Fakat Sabit Enflasyon: Madencilere sürekli ödül sağlayarak ağı korur.',
      'Elon Musk ve Tesla Desteği: Tesla ve SpaceX ürünlerinde ödeme aracı olarak kabul edilmiştir.'
    ],
    pros: [
      'Geniş ve aşırı sadık global topluluk desteği',
      'Birçok borsa ve ödeme altyapısında tam entegrasyon',
      'Sembolik işlem ücretleri'
    ],
    risks: [
      'Maksimum arz sınırı olmaması (sürekli yeni arz girer)',
      'Sosyal medya hype\'larına ve influencer açıklamalarına aşırı duyarlılık'
    ],
    officialLinks: {
      website: 'https://dogecoin.com',
      whitepaper: 'https://github.com/dogecoin/dogecoin',
      explorer: 'https://dogechain.info'
    }
  },

  // ==========================================
  // 3. PEPE (PEPE) - FROG MEMECOIN
  // ==========================================
  {
    id: 'pepe',
    name: 'Pepe',
    symbol: 'PEPE',
    category: 'memecoin',
    categoryLabel: 'Viral Kurbağa Memecoin',
    iconUrl: '/assets/coins/pepe.png',
    color: '#48C754',
    themeClass: 'from-emerald-500/20 to-green-600/10 border-emerald-500/30 text-emerald-400',
    tagline: '"Köpek coinleri devri bitti, artık kurbağanın zamanı!" sloganıyla doğan fenomen.',
    foundedYear: 2023,
    creator: 'Anonim Topluluk',
    blockchain: 'Ethereum (ERC-20)',
    consensus: 'Proof of Stake (Ethereum Ağı Üzerinde)',
    maxSupply: '420.690.000.000.000 PEPE',
    riskLevel: 'Yüksek (Volatil)',
    riskColor: 'text-orange-400 bg-orange-950/60 border-orange-800',
    summary: 'Matt Furie\'nin ünlü Pepe the Frog internet çizgi karakterine adanmış, sıfır vergi politikasına sahip viral memecoin.',
    description: `Nisan 2023'te sessiz sedasız piyasaya sürülen PEPE, çok kısa bir sürede milyar dolarlık piyasa değerine ulaşarak kripto tarihindeki en hızlı yükselen memecoin'lerden biri oldu.

Projenin resmi beyanında "Hiçbir içsel değeri veya finansal getiri beklentisi yoktur. Sadece saf eğlence ve meme kültürü içindir." denilmektedir. Ön satışsız ve sıfır işlem vergisi (0% tax) ile piyasaya sürülmüştür.`,
    originStory: 'Matt Furie tarafından 2005 yılında yaratılan "Boy\'s Club" çizgi romanındaki ünlü "Feels Good Man" kurbağası Pepe, internet kültürünün en büyük ikonu haline gelmişti. 2023 yılında bu ikon saf bir token formatına büründü.',
    keyFeatures: [
      'Köpek Memelerine Karşı Alternatif: Memecoin piyasasındaki kedi/köpek hegemonyasını kırdı.',
      'Sıfır Alım-Satım Vergisi: Kullanıcılardan ekstra slippage veya kesinti yapmaz.',
      'Yakım Mekanizması: Belirli işlemler ve etkinliklerle arz azaltımı hedeflenir.',
      'Saf Meme Kültürü: Hiçbir sahte vaatte bulunmadan tamamen eğlenceyi hedefler.'
    ],
    pros: [
      'Muazzam sosyal medya görünürlüğü ve internet memeleri',
      'Ethereum ağının en popüler likidite havuzlarına sahip olması',
      'Büyük global borsalarda (Binance vb.) anında listelenme başarısı'
    ],
    risks: [
      'Geliştirici ekibin anonim olması',
      'Pratik bir kullanım alanı (utility) bulunmaması, tamamen topluluk talebine bağlı olması'
    ],
    officialLinks: {
      website: 'https://pepe.vip',
      whitepaper: 'https://pepe.vip',
      explorer: 'https://etherscan.io/token/0x6982508145454ce325ddbe47a25d4ec3d2311933'
    }
  },

  // ==========================================
  // 4. ETHEREUM (ETH)
  // ==========================================
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    category: 'major',
    categoryLabel: 'Akıllı Sözleşmeler / DeFi Kralı',
    iconUrl: '/assets/coins/ethereum.png',
    color: '#627EEA',
    themeClass: 'from-blue-500/20 to-indigo-600/10 border-blue-500/30 text-blue-400',
    tagline: 'Dünya bilgisayarı ve merkeziyetsiz uygulamaların (dApps) ana omurgası.',
    foundedYear: 2015,
    creator: 'Vitalik Buterin, Gavin Wood & ekibi',
    blockchain: 'Ethereum 2.0',
    consensus: 'Proof of Stake (Hisse Kanıtı)',
    maxSupply: 'Dinamik (EIP-1559 ile yakım mekanizması)',
    riskLevel: 'Düşük',
    riskColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800',
    summary: 'Akıllı sözleşmeleri ve programlanabilir blokzincir devrimini başlatan, DeFi ve NFT\'lerin doğduğu devasa ekosistem.',
    description: `Ethereum, sadece para transferi yapmakla kalmayıp, blokzincir üzerinde kod bloklarının (Akıllı Sözleşmeler - Smart Contracts) çalışmasını sağlayan devrim niteliğinde bir platformdur. 

Bugün piyasada bulunan binlerce altcoin, DeFi (Merkeziyetsiz Finans) protokolü, NFT koleksiyonu ve memecoin (ERC-20 standardı ile) doğrudan Ethereum üzerinde varlığını sürdürmektedir. 2022 yılındaki 'The Merge' güncellemesi ile enerji tüketimini %99.9 azaltarak Proof of Stake yapısına geçmiştir.`,
    originStory: 'Vitalik Buterin henüz 19 yaşındayken, Bitcoin\'in sadece bir para birimi olmaktan öteye geçip genel amaçlı programlanabilir bir platform olması gerektiğini savundu ve Ethereum teknik dokümanını yayımladı.',
    keyFeatures: [
      'EVM (Ethereum Virtual Machine): Küresel çapta kod çalıştıran sanal makine.',
      'Akıllı Sözleşmeler: Otomatik çalışan, güven gerektirmeyen dijital anlaşmalar.',
      'DeFi ve NFT Ekosisteminin Merkezi: Kriptodaki toplam kilitli değerin (TVL) aslan payı.',
      'Deflasyonist Potansiyel: Ağdaki işlem ücretleri (Gas) yakılarak ETH arzı eritilir.'
    ],
    pros: [
      'En büyük geliştirici ve yazılımcı topluluğu',
      'Kurumsal onay ve Spot ETH ETF fonları',
      'Zengin Katman 2 (Layer 2) ekosistemi (Arbitrum, Optimism, Base vb.)'
    ],
    risks: [
      'Ağ yoğunluğu zamanlarında artan Gas (işlem) ücretleri',
      'Katman 2 ağlarına likidite bölünmesi'
    ],
    officialLinks: {
      website: 'https://ethereum.org',
      whitepaper: 'https://ethereum.org/en/whitepaper/',
      explorer: 'https://etherscan.io'
    }
  },

  // ==========================================
  // 5. SHIBA INU (SHIB)
  // ==========================================
  {
    id: 'shiba-inu',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    category: 'memecoin',
    categoryLabel: 'Memecoin Ekosistemi & Shibarium',
    iconUrl: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png',
    color: '#FFA409',
    themeClass: 'from-orange-500/20 to-red-600/10 border-orange-500/30 text-orange-400',
    tagline: '"Dogecoin Katili" olarak başlayıp kendi ekosistemini kuran memecoin devi.',
    foundedYear: 2020,
    creator: 'Ryoshi (Anonim)',
    blockchain: 'Ethereum / Shibarium (Layer 2)',
    consensus: 'ERC-20 / PoS',
    maxSupply: '589 Trilyon SHIB',
    riskLevel: 'Yüksek',
    riskColor: 'text-orange-400 bg-orange-950/60 border-orange-800',
    summary: 'Kendi merkeziyetsiz borsası (ShibaSwap), NFT oyunları ve Shibarium Katman 2 ağı bulunan dev topluluk projesi.',
    description: `Ağustos 2020'de Ryoshi takma adlı anonim bir geliştirici tarafından başlatılan Shiba Inu, başlangıçta 1 Katrilyon adet olarak üretildi. Ryoshi, arzın %50'sini Uniswap likiditesine kilitledi ve kalan %50'sini Ethereum'un kurucusu Vitalik Buterin'e gönderdi. Vitalik Buterin bu tokenların büyük kısmını yaktı ve bir kısmını Hindistan Covid Yardım Fonu'na bağışladı.

Zamanla SHIB, sadece bir şaka olmaktan çıkıp Shibarium adlı kendi Layer-2 blokzincirini, BONE ve LEASH yardımcı tokenlarını ve Metaverse projelerini inşa etti.`,
    originStory: 'Dogecoin\'in başarısına meydan okumak ve merkeziyetsiz bir topluluk deneyi yapmak amacıyla yaratıldı.',
    keyFeatures: [
      'Shibarium Katman 2: Düşük ücretli ve hızlı işlem imkanı sunan kendi ağı.',
      'ShibaSwap: Merkeziyetsiz alım-satım ve stake platformu.',
      'Aktif Yakım Portalı: Topluluk tarafından sürekli SHIB yakılarak arz azaltılır.'
    ],
    pros: [
      'Şaka tokenından gerçek teknolojik altyapıya geçiş çabası',
      'Dünyanın en kalabalık topluluklarından biri (ShibArmy)',
      'Geniş ödeme ağı kabulleri'
    ],
    risks: [
      'Hala çok yüksek dolaşımdaki arz miktarı',
      'Memecoin kökeninden gelen yüksek fiyat oynaklığı'
    ],
    officialLinks: {
      website: 'https://shib.io',
      whitepaper: 'https://shib.io/wp-content/uploads/2023/07/Woof-Paper-v2.pdf',
      explorer: 'https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
    }
  },

  // ==========================================
  // 6. SOLANA (SOL)
  // ==========================================
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    category: 'layer1',
    categoryLabel: 'Yüksek Hızlı Katman 1 / Meme Cenneti',
    iconUrl: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    color: '#14F195',
    themeClass: 'from-teal-500/20 to-purple-600/10 border-teal-500/30 text-teal-400',
    tagline: 'Işık hızında işlemler, neredeyse sıfır ücret ve yeni nesil memecoinlerin ana üssü.',
    foundedYear: 2020,
    creator: 'Anatoly Yakovenko & Greg Fitzgerald',
    blockchain: 'Solana',
    consensus: 'Proof of History (PoH) + Proof of Stake (PoS)',
    maxSupply: 'Sınırsız (Deflasyonist/EIP-1559)',
    riskLevel: 'Düşük - Orta',
    riskType: 'low-mid',
    riskColor: 'text-blue-400 bg-blue-950/60 border-blue-800',
    summary: 'Saniyede 65.000\'e varan işlem kapasitesi ve cent\'in altında işlem ücretleri ile DeFi, NFT ve memecoin patlamasının merkezi.',
    description: `Solana, yüksek işlem hızı ve düşük maliyet sunmak üzere tasarlanmış modern bir Katman 1 blokzinciridir. 'Proof of History' (Geçmiş Kanıtı) adı verilen yenilikçi zaman damgası mekanizması sayesinde düğümler arasındaki senkronizasyon süresini minimuma indirir.

2023-2024 yıllarında Solana; Pump.fun, Raydium ve Phantom cüzdan gibi kullanıcı dostu araçları sayesinde küresel memecoin çılgınlığının (WIF, BONK, POPCAT vb.) kalbi haline gelmiştir.`,
    originStory: 'Qualcomm eski mühendisi Anatoly Yakovenko, blokzincirlerin en büyük sorunu olan ölçeklenebilirlik ve zaman eşzamanlamasını çözmek için Solana mimarisini geliştirdi.',
    keyFeatures: [
      'Proof of History (PoH): Bloklar arası süreleri mikro saniyelere indiren zamanlama teknolojisi.',
      'Sıfıra Yakın İşlem Ücreti: İşlem başına $0.00025 gibi ihmal edilebilir maliyet.',
      'Yüksek İşlem Hacmi (TPS): Gerçek hayatta saniyede binlerce işlem geçirebilme gücü.',
      'Meme & Web3 Ekosistemi: En aktif mobil ve Web3 kullanıcı tabanlarından biri.'
    ],
    pros: [
      'Kullanıcı dostu mobil deneyim (Saga Phone, Phantom Wallet)',
      'Hızlı ve anında sonuçlanan işlemler',
      'Büyük kurumsal yatırımlar ve ortaklıklar (Visa, Shopify entegrasyonları)'
    ],
    risks: [
      'Geçmişte yaşanan geçici ağ kesintileri ve düğüm donanım maliyetleri',
      'Aşırı memecoin spekülasyonu nedeniyle ağda oluşan anlık spam yükleri'
    ],
    officialLinks: {
      website: 'https://solana.com',
      whitepaper: 'https://solana.com/solana-whitepaper.pdf',
      explorer: 'https://solscan.io'
    }
  },

  // ==========================================
  // 7. DOGWIFHAT (WIF)
  // ==========================================
  {
    id: 'dogwifhat',
    name: 'dogwifhat',
    symbol: 'WIF',
    category: 'memecoin',
    categoryLabel: 'Solana Meme Fenomeni',
    iconUrl: '/assets/coins/dogwifhat.jpg',
    color: '#E07A5F',
    themeClass: 'from-rose-500/20 to-amber-600/10 border-rose-500/30 text-rose-400',
    tagline: '"Şapkalı köpek sadece şapkalı bir köpektir." - Solana ağının en popüler memesi.',
    foundedYear: 2023,
    creator: 'Anonim Topluluk',
    blockchain: 'Solana (SPL Token)',
    consensus: 'Solana Ağı Üzerinde',
    maxSupply: '998.920.000 WIF',
    riskLevel: 'Çok Yüksek (Extreme)',
    riskColor: 'text-red-400 bg-red-950/60 border-red-800',
    summary: 'Pembe yün bere takan sevimli Shiba köpeğinin görseliyle Solana ağında milyar dolarlık değere ulaşan saf meme çılgınlığı.',
    description: `Kasım 2023'te Solana blokzincirinde doğan WIF (dogwifhat), pembe örgülü bere takmış bir köpek fotoğrafından ibarettir. Projenin hiçbir teknik vaadi, karmaşık yol haritası veya DeFi iddiası yoktur; projenin gücü tamamen topluluğun mizah anlayışından ve meme kültüründen gelir.

Kısa sürede Las Vegas Sphere küresine reklam vermek için yüz binlerce dolar toplayan topluluğu ile modern kripto çılgınlığının en belirgin simgelerinden biridir.`,
    originStory: '2019 yılında internette yayılan "Achi" isimli pembe şapkalı köpeğin fotoğrafı, 2023 sonunda Solana Web3 topluluğu tarafından sahiplenildi.',
    keyFeatures: [
      'Saf Meme & Kimlik: Şapka asla çıkmaz! ("The hat stays on")',
      'Sabit Arz: Tüm arz dolaşımdadır, yeni WIF basılamaz.',
      'Solana Hızı: Saniyeler içinde cüzdanlar arası transfersellik.'
    ],
    pros: [
      'Kripto tarihindeki en güçlü organik sosyal medya etkileşimlerinden biri',
      'Tüm büyük global borsalarda listelenmiş olması'
    ],
    risks: [
      'Tamamen spekülatif olması, temel finansal bir dayanağı olmaması',
      'Hype azaldığında sert fiyat geri çekilmeleri riski'
    ],
    officialLinks: {
      website: 'https://dogwifcoin.org',
      whitepaper: 'https://dogwifcoin.org',
      explorer: 'https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm'
    }
  },

  // ==========================================
  // 8. BONK (BONK)
  // ==========================================
  {
    id: 'bonk',
    name: 'Bonk',
    symbol: 'BONK',
    category: 'memecoin',
    categoryLabel: 'Solana Topluluk Köpeği',
    iconUrl: 'https://assets.coingecko.com/coins/images/28600/large/bonk.jpg',
    color: '#F48C06',
    themeClass: 'from-amber-500/20 to-yellow-600/10 border-amber-500/30 text-amber-400',
    tagline: '"Halk için, halk tarafından" - Solana ekosistemini canlandıran köpek coini.',
    foundedYear: 2022,
    creator: 'Solana Topluluğu',
    blockchain: 'Solana (SPL Token)',
    consensus: 'Solana Ağı Üzerinde',
    maxSupply: '92.7 Trilyon BONK',
    riskLevel: 'Yüksek',
    riskColor: 'text-orange-400 bg-orange-950/60 border-orange-800',
    summary: 'FTX çöküşü sonrası zor günlerden geçen Solana topluluğuna moral ve can suyu olmak için bedava dağıtılan efsanevi memecoin.',
    description: `Aralık 2022'de FTX borsasının iflası ile Solana ağır bir kriz yaşarken, anonim geliştiriciler tarafından Solana NFT sanatçılarına, geliştiricilerine ve kullanıcılarına toplam arzın %50'si ücretsiz airdrop olarak dağıtıldı.

BONK, yalnızca bir meme olarak kalmayıp Solana ekosistemindeki yüzlerce DeFi uygulaması, oyun ve NFT projesine entegre edilerek gerçek bir kullanım alanına kavuştu.`,
    originStory: 'Klasik çizgi film sopasıyla kafaya vurma ("Bonk!") meme\'inden ilham alınarak Solana ekosistemindeki kötü havanın dağıtılması için doğdu.',
    keyFeatures: [
      'Topluluk Airdrop\'u: Lansmanda hiçbir VC (yatırım fonu) payı olmadan topluluğa dağıtıldı.',
      'Geniş Entegrasyon: Solana üzerindeki onlarca oyunda ve ödeme platformunda geçerli.',
      'BonkBot: Telegram üzerinden en çok kullanılan alım-satım botlarından birine sahiptir.'
    ],
    pros: [
      'Solana ekosistemine derin bağlılık ve geliştirici desteği',
      'Gerçek kullanım alanları (DEX ücret indirimleri, bot yakımları)',
      'Düzenli yakım etkinlikleri'
    ],
    risks: [
      'Büyük arz miktarı',
      'Genel memecoin döngülerine bağımlılık'
    ],
    officialLinks: {
      website: 'https://bonkcoin.com',
      whitepaper: 'https://bonkcoin.com',
      explorer: 'https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
    }
  },

  // ==========================================
  // 9. FLOKI (FLOKI)
  // ==========================================
  {
    id: 'floki',
    name: 'Floki',
    symbol: 'FLOKI',
    category: 'memecoin',
    categoryLabel: 'Viking Memecoin & Fayda Ekosistemi',
    iconUrl: 'https://assets.coingecko.com/coins/images/16746/large/FLOKI.png',
    color: '#D4AF37',
    themeClass: 'from-yellow-600/20 to-stone-700/10 border-yellow-600/30 text-yellow-300',
    tagline: 'Elon Musk\'ın köpeğinden ilham alan Viking kasklı savaşçı memecoin.',
    foundedYear: 2021,
    creator: 'Floki Topluluğu',
    blockchain: 'Ethereum & BNB Chain (Çoklu Ağ)',
    consensus: 'ERC-20 & BEP-20',
    maxSupply: '9.68 Trilyon FLOKI',
    riskLevel: 'Yüksek',
    riskColor: 'text-orange-400 bg-orange-950/60 border-orange-800',
    summary: 'Valhalla isimli NFT Metaverse oyunu, FlokiFi kripto dolabı ve yardım okulları ile fayda odaklı memecoin ekosistemi.',
    description: `Floki, Elon Musk'ın sahiplendiği Shiba Inu cinsi köpeğine 'Floki' adını vereceğini duyurmasının ardından doğdu. Kendilerini "Halkın Kriptosu" olarak tanımlayan Floki ekibi, memecoin kimliğini Valhalla isimli Play-to-Earn (Oyna-Kazan) metaverse oyunu, FlokiFi kilit protokolü ve küresel eğitim vakıflarıyla birleştirmiştir.`,
    originStory: 'Elon Musk\'ın 2021 yılında attığı "My Shiba Inu will be named Floki" tweet\'i ile hayata geçti.',
    keyFeatures: [
      'Valhalla NFT Oyunu: Blokzincir tabanlı strateji ve rol yapma oyunu.',
      'FlokiFi Locker: Kripto token ve likidite havuzlarını kilitleyen DeFi protokolü.',
      'Sosyal Sorumluluk: Nijerya, Guatemala, Laos ve Gana\'da inşa edilen okullar.'
    ],
    pros: [
      'Agresif global pazarlama ve spor kulübü sponsorlukları',
      'Gerçek DeFi ve Web3 ürünleri geliştirme kararlılığı'
    ],
    risks: [
      'Rekabetin yoğun olduğu metaverse ve oyun sektörüne bağımlılık',
      'Geniş token arzı'
    ],
    officialLinks: {
      website: 'https://floki.com',
      whitepaper: 'https://floki.com',
      explorer: 'https://etherscan.io/token/0xcf0c122c6b73380ea4060a47675713296039474b'
    }
  },

  // ==========================================
  // 10. POPCAT (POPCAT)
  // ==========================================
  {
    id: 'popcat',
    name: 'Popcat',
    symbol: 'POPCAT',
    category: 'memecoin',
    categoryLabel: 'Kedi Memecoin / İnternet Klasiği',
    iconUrl: 'https://assets.coingecko.com/coins/images/33760/large/popcat.png',
    color: '#93C5FD',
    themeClass: 'from-sky-500/20 to-blue-600/10 border-sky-500/30 text-sky-300',
    tagline: 'Ağzını "Pop!" sesiyle açıp kapatan sevimli internet kedisi Oatmeal.',
    foundedYear: 2023,
    creator: 'Anonim Solana Topluluğu',
    blockchain: 'Solana (SPL Token)',
    consensus: 'Solana Ağı Üzerinde',
    maxSupply: '979.970.000 POPCAT',
    riskLevel: 'Çok Yüksek (Extreme)',
    riskColor: 'text-red-400 bg-red-950/60 border-red-800',
    summary: 'İnternetin en popüler tıklama oyununun yıldızı olan kediden ilham alan, köpek egemenliğine kafa tutan kedi memecoin.',
    description: `2020 yılında internette tıklama rekorları kıran popcat.click oyunundan esinlenen POPCAT, Solana ekosisteminde kedi temalı memecoin dalgasının liderliğini üstlenmiştir. 

Köpek memelerine alternatif arayan kripto yatırımcılarının en büyük buluşma noktalarından biri haline gelmiştir. Sıfır vergi ve tamamen adil dağıtımla başlatılmıştır.`,
    originStory: 'Sahibi tarafından esnerken çekilen videosunun montajlanarak ağzının "O" şeklinde açılıp kapanmasıyla dünyaca ünlü bir meme haline gelen kedi Oatmeal.',
    keyFeatures: [
      'Kedi Temalı Memelerin Lideri: Köpek hakimiyetindeki piyasaya renk katar.',
      'Sıfır İşlem Vergisi: Alım ve satımlarda kesinti yoktur.',
      'Tamamen Dolaşımda Arz: Gelecekte kilit açılımı riski bulunmaz.'
    ],
    pros: [
      'Güçlü ve eğlenceli internet kültürü desteği',
      'Yüksek likidite ve borsa listelemeleri'
    ],
    risks: [
      'Yalnızca meme odaklı olması, teknolojik bir altyapı vaat etmemesi'
    ],
    officialLinks: {
      website: 'https://popcatsol.com',
      whitepaper: 'https://popcatsol.com',
      explorer: 'https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr'
    }
  }
];

export const memecoinDictionary = [
  {
    id: 'memecoin',
    term: 'Memecoin',
    tag: 'Popüler Kültür',
    icon: 'Sparkles',
    theme: 'orange',
    gradient: 'from-amber-500/20 via-orange-600/15 to-transparent',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    meaning: 'İnternet şakaları, mizah, popüler kültür veya viral hayvan figürlerinden esinlenerek yaratılmış kripto para birimleri.'
  },
  {
    id: 'hodl',
    term: 'HODL',
    tag: 'Strateji',
    icon: 'Shield',
    theme: 'blue',
    gradient: 'from-blue-500/20 via-indigo-600/15 to-transparent',
    glowColor: 'rgba(59, 130, 246, 0.35)',
    meaning: '"Hold" (tutmak) kelimesinin yazım hatasından türeyen, piyasa ne kadar düşerse düşsün varlıkları kararlılıkla saklama felsefesi.'
  },
  {
    id: 'diamond-hands',
    term: 'Diamond Hands',
    tag: 'Kararlılık',
    icon: 'Gem',
    theme: 'cyan',
    gradient: 'from-cyan-500/20 via-teal-600/15 to-transparent',
    glowColor: 'rgba(6, 182, 212, 0.35)',
    meaning: 'Büyük fiyat dalgalanmalarında panik satışı yapmadan sabırla pozisyonunu koruyan yatırımcı kimliği.'
  },
  {
    id: 'paper-hands',
    term: 'Paper Hands',
    tag: 'Psikoloji',
    icon: 'FileText',
    theme: 'rose',
    gradient: 'from-rose-500/20 via-pink-600/15 to-transparent',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    meaning: 'Ufak bir fiyat geri çekilmesinde panikleyerek zararına satış yapan sabırsız yatırımcı tipi.'
  },
  {
    id: 'to-the-moon',
    term: 'To the Moon',
    tag: 'Trend',
    icon: 'Rocket',
    theme: 'purple',
    gradient: 'from-purple-500/20 via-indigo-600/15 to-transparent',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    meaning: 'Bir kripto varlığın değerinin roket gibi dikey ve astronomik seviyelere ulaşacağına olan güçlü inanç.'
  },
  {
    id: 'rug-pull',
    term: 'Rug Pull',
    tag: 'Güvenlik',
    icon: 'AlertTriangle',
    theme: 'red',
    gradient: 'from-red-500/20 via-rose-600/15 to-transparent',
    glowColor: 'rgba(239, 68, 68, 0.35)',
    meaning: 'Geliştiricilerin likiditeyi birden çekerek yatırımcıları mağdur ettiği kötü niyetli proje dolandırıcılığı.'
  },
  {
    id: 'fomo',
    term: 'FOMO',
    tag: 'Piyasa Psikolojisi',
    icon: 'Zap',
    theme: 'yellow',
    gradient: 'from-yellow-500/20 via-amber-600/15 to-transparent',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    meaning: '"Fear of Missing Out" - Yükselen bir varlığı kaçırma korkusuyla yüksek fiyattan kontrolsüzce satın alma durumu.'
  },
  {
    id: 'degen',
    term: 'Degen',
    tag: 'Kültür',
    icon: 'Flame',
    theme: 'magenta',
    gradient: 'from-pink-500/20 via-purple-600/15 to-transparent',
    glowColor: 'rgba(236, 72, 153, 0.35)',
    meaning: 'Detaylı analiz yapmadan yüksek risk ve yüksek getiri amacıyla yeni memecoin avlayan cesur kripto aktörü.'
  },
  {
    id: 'whale',
    term: 'Whale (Balina)',
    tag: 'Piyasa Aktörü',
    icon: 'Layers',
    theme: 'emerald',
    gradient: 'from-emerald-500/20 via-teal-600/15 to-transparent',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    meaning: 'Elinde devasa miktarda varlık bulunduran ve hamleleriyle piyasa yönünü değiştirebilen büyük yatırımcı.'
  },
  {
    id: 'bullish',
    term: 'Bullish (Boğa)',
    tag: 'Yön Beklentisi',
    icon: 'TrendingUp',
    theme: 'green',
    gradient: 'from-emerald-500/20 via-green-600/15 to-transparent',
    glowColor: 'rgba(34, 197, 94, 0.35)',
    meaning: 'Piyasanın veya belirli bir kripto paranın fiyatının yükseleceğine dair olumlu ve güçlü beklenti.'
  },
  {
    id: 'bearish',
    term: 'Bearish (Ayı)',
    tag: 'Yön Beklentisi',
    icon: 'TrendingDown',
    theme: 'rose',
    gradient: 'from-rose-500/20 via-red-600/15 to-transparent',
    glowColor: 'rgba(225, 29, 72, 0.35)',
    meaning: 'Fiyatların düşeceğine dair karamsar piyasa beklentisi veya düşüş trendi dönemi.'
  },
  {
    id: 'airdrop',
    term: 'Airdrop',
    tag: 'Ödül & Etkinlik',
    icon: 'Gift',
    theme: 'sky',
    gradient: 'from-sky-500/20 via-blue-600/15 to-transparent',
    glowColor: 'rgba(56, 189, 248, 0.35)',
    meaning: 'Projelerin tanıtım veya topluluk ödülü amacıyla kullanıcılara ücretsiz token dağıtması.'
  }
];

