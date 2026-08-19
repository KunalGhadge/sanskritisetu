export type LanguageCode = 'en' | 'hi' | 'mr' | 'kn' | 'ta';

export interface TranslationDict {
  // App Header & Greeting
  appName: string;
  appSubtitle: string;
  greetingCitizen: string;
  welcomeCloud: string;
  sovereignActive: string;
  recordsSynced: string;

  // Home Screen Sections
  liveWebARTarget: string;
  marathaHeritageArchive: string;
  unescoWorldHeritage: string;
  greatLivingChola: string;
  launchARScanner: string;
  exploreCollection: string;
  viewRepository: string;
  viewIngestion: string;
  preservedRecords: string;
  stateArchives: string;
  centralCustodians: string;
  viewAll: string;
  monumentsCountSuffix: string;
  homeTab: string;
  searchTab: string;
  explorerTab: string;
  menuTab: string;

  // Repository & Search Screen
  searchPlaceholder: string;
  issuedRecordsTitle: string;
  allStatesFilter: string;
  phase2Badge: string;
  closeDossier: string;
  archivalStatusText: string;

  // Archive Vault / Dossier
  heritageDossierTitle: string;
  govtOfIndia: string;
  periodLabel: string;
  patronLabel: string;
  statusLabel: string;
  officialSiteLocation: string;
  verifiedBy: string;
  verifiedBadge: string;
  doYouKnowTitle: string;
  doYouKnowText: string;
  launchSpatialARButton: string;
  archivalAnalysisTitle: string;
  allIngestedBadge: string;

  // 7 Tiers Tabs
  tierOverview: string;
  tierTimeline: string;
  tierJoinery: string;
  tierPhotos: string;
  tierAudio: string;
  tier3DTwin: string;
  tierStrategy: string;

  // Structural Specifications
  heightLabel: string;
  baseAreaLabel: string;
  materialLabel: string;
  styleLabel: string;

  // Audio Guide
  voiceArchiveTitle: string;
  officialNarration: string;
  sentenceOf: string;
  interactiveTranscriptTitle: string;
  activeSpeaking: string;

  // AR Explorer
  spatialARExplorerTitle: string;
  augmentedRealityView: string;
  arExplorerDesc: string;
  targetHeritageModel: string;
  launchCameraARView: string;
  viewPrintMarker: string;
  alignMarkerHUD: string;
  finishARExploration: string;
  exitARButton: string;

  // Trust / Menu Screen
  trustPortalTitle: string;
  trustPortalSubtitle: string;
  appLanguageTitle: string;
  changeButton: string;
  preservationScoreTitle: string;
  fullyCompliantBadge: string;
  digitalIndiaActCompliance: string;
  unescoCharterCompliance: string;
  asiCadastralSync: string;
  rootHashLabel: string;
  faqTitle: string;
  deviceDisplayModeTitle: string;
  autoDetectMode: string;
  webMode: string;
  nativeAppMode: string;
  fullscreenButton: string;
  exitFullscreenButton: string;
  nationalHelplineTitle: string;
  tollFreeNumber: string;
  selectLanguageModalTitle: string;
  languageName: string;

  // Monument Specific Localized Names
  monumentNames: {
    stoneChariot: string;
    stoneChariotSub: string;
    raigadFort: string;
    raigadFortSub: string;
    konarkTemple: string;
    konarkTempleSub: string;
    brihadisvaraTemple: string;
    brihadisvaraTempleSub: string;
  };

  // State Localized Names
  stateNames: {
    karnataka: string;
    maharashtra: string;
    tamilNadu: string;
    rajasthan: string;
    gujarat: string;
    odisha: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDict> = {
  // 1. ENGLISH
  en: {
    appName: 'SanskritiSetu',
    appSubtitle: 'National Digital Heritage Cloud',
    greetingCitizen: 'Hi Citizen',
    welcomeCloud: 'Welcome to SanskritiSetu Digital Cloud',
    sovereignActive: 'Sovereign Cloud Active',
    recordsSynced: '3,690 National Records Synced',
    liveWebARTarget: 'Live WebAR Target',
    marathaHeritageArchive: 'Maratha Heritage Archive',
    unescoWorldHeritage: 'UNESCO World Heritage #246',
    greatLivingChola: 'Great Living Chola Temples',
    launchARScanner: 'Launch AR Scanner',
    exploreCollection: 'Explore Collection',
    viewRepository: 'View Repository',
    viewIngestion: 'View Ingestion',
    preservedRecords: 'Preserved Heritage Records',
    stateArchives: 'State Government Archives',
    centralCustodians: 'Central Government Custodians',
    viewAll: 'View All',
    monumentsCountSuffix: 'Monuments',
    homeTab: 'Home',
    searchTab: 'Search',
    explorerTab: 'Explorer',
    menuTab: 'Menu',
    searchPlaceholder: 'Search monuments, states, or periods...',
    issuedRecordsTitle: 'Issued Heritage Records',
    allStatesFilter: 'All States',
    phase2Badge: 'Phase 2',
    closeDossier: 'Close Dossier',
    archivalStatusText: 'Photogrammetric Scan Ingestion Scheduled',
    heritageDossierTitle: 'Heritage Digital Dossier',
    govtOfIndia: 'GOVERNMENT OF INDIA',
    periodLabel: 'Period',
    patronLabel: 'Patron',
    statusLabel: 'Status',
    officialSiteLocation: 'Official Site Location:',
    verifiedBy: 'Verified by:',
    verifiedBadge: 'SanskritiSetu Verified',
    doYouKnowTitle: 'Do you know?',
    doYouKnowText: 'The Stone Chariot in Hampi is one of only three famous stone chariots in India. It is carved from interlocking granite slabs with kinetic rotating stone wheels.',
    launchSpatialARButton: 'Launch Spatial 3D & AR Explorer',
    archivalAnalysisTitle: '7-Tier Archival Analysis',
    allIngestedBadge: '100% Ingested',
    tierOverview: 'Overview',
    tierTimeline: 'Timeline',
    tierJoinery: 'Joinery',
    tierPhotos: 'Photos',
    tierAudio: 'Audio',
    tier3DTwin: '3D Twin',
    tierStrategy: 'Strategy',
    heightLabel: 'Height',
    baseAreaLabel: 'Base Plinth',
    materialLabel: 'Primary Stone',
    styleLabel: 'Style',
    voiceArchiveTitle: 'Voice Archive',
    officialNarration: 'Official Narration',
    sentenceOf: 'Sentence',
    interactiveTranscriptTitle: 'Interactive Synced Transcript',
    activeSpeaking: '● Active Speaking',
    spatialARExplorerTitle: 'Spatial AR Explorer',
    augmentedRealityView: 'Augmented Reality View',
    arExplorerDesc: 'Zero-install browser camera tracking projecting 3D monuments into physical space.',
    targetHeritageModel: 'Target Heritage Model',
    launchCameraARView: 'Launch Camera AR View',
    viewPrintMarker: 'View / Print AR Tracking Marker',
    alignMarkerHUD: 'Align Marker in Viewfinder',
    finishARExploration: 'Finish AR Exploration',
    exitARButton: 'Exit AR',
    trustPortalTitle: 'National Trust & Governance Portal',
    trustPortalSubtitle: 'Sovereign Cloud, Language Settings & Heritage Mission',
    appLanguageTitle: 'App Language / भाषा',
    changeButton: 'Change',
    preservationScoreTitle: '100% Preservation Score',
    fullyCompliantBadge: 'Fully Compliant',
    digitalIndiaActCompliance: 'Digital India Act 2026 Sovereign Archival Mandate',
    unescoCharterCompliance: 'UNESCO Digital Heritage Charter (Article 3 Verified)',
    asiCadastralSync: 'ASI Archaeological Circles Real-time Cadastral Sync',
    rootHashLabel: 'Root Cryptographic Hash Ledger:',
    faqTitle: 'Frequently Asked Questions (FAQ)',
    deviceDisplayModeTitle: 'Device & Notch Display Mode',
    autoDetectMode: 'Auto Detect',
    webMode: 'Web (0 Dead)',
    nativeAppMode: 'Native App',
    fullscreenButton: 'Enter Fullscreen Immersive Mode',
    exitFullscreenButton: 'Exit Fullscreen',
    nationalHelplineTitle: 'National Heritage Helpline',
    tollFreeNumber: 'Toll Free: 1800-11-4040',
    selectLanguageModalTitle: 'Select Official Language / भाषा चुनें',
    languageName: 'English',
    monumentNames: {
      stoneChariot: 'Stone Chariot',
      stoneChariotSub: 'Hampi, Karnataka',
      raigadFort: 'Raigad Fort',
      raigadFortSub: 'Maharashtra',
      konarkTemple: 'Konark Temple',
      konarkTempleSub: 'Odisha',
      brihadisvaraTemple: 'Brihadisvara Temple',
      brihadisvaraTempleSub: 'Tamil Nadu',
    },
    stateNames: {
      karnataka: 'Karnataka',
      maharashtra: 'Maharashtra',
      tamilNadu: 'Tamil Nadu',
      rajasthan: 'Rajasthan',
      gujarat: 'Gujarat',
      odisha: 'Odisha',
    }
  },

  // 2. HINDI (हिंदी)
  hi: {
    appName: 'संस्कृतिसेतु',
    appSubtitle: 'राष्ट्रीय डिजिटल धरोहर क्लाउड',
    greetingCitizen: 'नमस्ते नागरिक',
    welcomeCloud: 'संस्कृतिसेतु डिजिटल क्लाउड में आपका स्वागत है',
    sovereignActive: 'संप्रभु क्लाउड सक्रिय',
    recordsSynced: '३,६९० राष्ट्रीय अभिलेख सिंक्रनाइज़्ड',
    liveWebARTarget: 'लाइव वेबएआर लक्ष्य',
    marathaHeritageArchive: 'मराठा धरोहर अभिलेखागार',
    unescoWorldHeritage: 'यूनेस्को विश्व धरोहर #246',
    greatLivingChola: 'महान जीवित चोल मंदिर',
    launchARScanner: 'एआर स्कैनर शुरू करें',
    exploreCollection: 'संग्रह का अन्वेषण करें',
    viewRepository: 'अभिलेखागार देखें',
    viewIngestion: 'प्रविष्टि देखें',
    preservedRecords: 'संरक्षित धरोहर अभिलेख',
    stateArchives: 'राज्य सरकार अभिलेखागार',
    centralCustodians: 'केंद्रीय संरक्षक संस्थाएं',
    viewAll: 'सभी देखें',
    monumentsCountSuffix: 'स्मारक',
    homeTab: 'होम',
    searchTab: 'खोजें',
    explorerTab: 'एआर',
    menuTab: 'मेनू',
    searchPlaceholder: 'स्मारक, राज्य या कालखंड खोजें...',
    issuedRecordsTitle: 'जारी किए गए धरोहर अभिलेख',
    allStatesFilter: 'सभी राज्य',
    phase2Badge: 'चरण २',
    closeDossier: 'दस्तावेज़ बंद करें',
    archivalStatusText: 'फोटोग्रामेट्रिक स्कैन प्रविष्टि निर्धारित',
    heritageDossierTitle: 'धरोहर डिजिटल दस्तावेज़',
    govtOfIndia: 'भारत सरकार',
    periodLabel: 'कालखंड',
    patronLabel: 'संरक्षक',
    statusLabel: 'स्थिति',
    officialSiteLocation: 'आधिकारिक स्थल स्थान:',
    verifiedBy: 'सत्यापितकर्ता:',
    verifiedBadge: 'संस्कृतिसेतु सत्यापित',
    doYouKnowTitle: 'क्या आप जानते हैं?',
    doYouKnowText: 'हम्पी का प्रस्तर रथ भारत के तीन प्रसिद्ध पत्थर के रथों में से एक है। यह आपस में जुड़े ग्रेनाइट पत्थरों और घूमने वाले पहियों से बना है।',
    launchSpatialARButton: 'स्थानिक 3D और एआर एक्सप्लोरर शुरू करें',
    archivalAnalysisTitle: '७-स्तरीय अभिलेख विश्लेषण',
    allIngestedBadge: '१००% प्रविष्ट',
    tierOverview: 'अवलोकन',
    tierTimeline: 'समयरेखा',
    tierJoinery: 'शिल्पकला',
    tierPhotos: 'तस्वीरें',
    tierAudio: 'ऑडियो',
    tier3DTwin: '3D मॉडल',
    tierStrategy: 'संरक्षण',
    heightLabel: 'ऊंचाई',
    baseAreaLabel: 'आधार चबूतरा',
    materialLabel: 'प्राथमिक पत्थर',
    styleLabel: 'शैली',
    voiceArchiveTitle: 'ध्वनि अभिलेखागार',
    officialNarration: 'आधिकारिक वाचन',
    sentenceOf: 'पंक्ति',
    interactiveTranscriptTitle: 'इंटरैक्टिव ऑडियो प्रतिलिपि',
    activeSpeaking: '● सक्रिय वाचन',
    spatialARExplorerTitle: 'स्थानिक एआर एक्सप्लोरर',
    augmentedRealityView: 'संवर्धित वास्तविकता दृश्य',
    arExplorerDesc: 'शून्य-इंस्टॉल ब्राउज़र कैमरा ट्रैकिंग जो 3D स्मारकों को आपके सामने प्रस्तुत करता है।',
    targetHeritageModel: 'लक्ष्य धरोहर मॉडल',
    launchCameraARView: 'कैमरा एआर दृश्य शुरू करें',
    viewPrintMarker: 'एआर ट्रैकिंग मार्कर देखें / प्रिंट करें',
    alignMarkerHUD: 'व्यूफ़ाइंडर में मार्कर संरेखित करें',
    finishARExploration: 'एआर अन्वेषण समाप्त करें',
    exitARButton: 'एआर से बाहर निकलें',
    trustPortalTitle: 'राष्ट्रीय विश्वास और शासन पोर्टल',
    trustPortalSubtitle: 'संप्रभु क्लाउड, भाषा सेटिंग्स और धरोहर मिशन',
    appLanguageTitle: 'ऐप की भाषा / Language',
    changeButton: 'बदलें',
    preservationScoreTitle: '१००% संरक्षण स्कोर',
    fullyCompliantBadge: 'पूर्णतः अनुपालन',
    digitalIndiaActCompliance: 'डिजिटल इंडिया अधिनियम २०२६ संप्रभु अभिलेख अधिदेश',
    unescoCharterCompliance: 'यूनेस्को डिजिटल धरोहर चार्टर (अनुच्छेद ३ सत्यापित)',
    asiCadastralSync: 'एएसआई पुरातत्व मंडल रीयल-टाइम सिंक',
    rootHashLabel: 'मूल क्रिप्टोग्राफिक हैश लेज़र:',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    deviceDisplayModeTitle: 'डिवाइस और नॉच डिस्प्ले मोड',
    autoDetectMode: 'स्वचालित पहचान',
    webMode: 'वेब मोड',
    nativeAppMode: 'नेटिव ऐप',
    fullscreenButton: 'फुलस्क्रीन मोड में जाएं',
    exitFullscreenButton: 'फुलस्क्रीन से बाहर निकलें',
    nationalHelplineTitle: 'राष्ट्रीय धरोहर हेल्पलाइन',
    tollFreeNumber: 'टोल फ्री: 1800-11-4040',
    selectLanguageModalTitle: 'आधिकारिक भाषा चुनें / Select Language',
    languageName: 'हिंदी',
    monumentNames: {
      stoneChariot: 'प्रस्तर रथ',
      stoneChariotSub: 'हम्पी, कर्नाटक',
      raigadFort: 'रायगड दुर्ग',
      raigadFortSub: 'महाराष्ट्र',
      konarkTemple: 'कोणार्क सूर्य मंदिर',
      konarkTempleSub: 'ओडिशा',
      brihadisvaraTemple: 'बृहदीश्वर मंदिर',
      brihadisvaraTempleSub: 'तमिलनाडु',
    },
    stateNames: {
      karnataka: 'कर्नाटक',
      maharashtra: 'महाराष्ट्र',
      tamilNadu: 'तमिलनाडु',
      rajasthan: 'राजस्थान',
      gujarat: 'गुजरात',
      odisha: 'ओडिशा',
    }
  },

  // 3. MARATHI (मराठी)
  mr: {
    appName: 'संस्कृतीसेतू',
    appSubtitle: 'राष्ट्रीय डिजिटल वारसा क्लाउड',
    greetingCitizen: 'नमस्कार नागरिक',
    welcomeCloud: 'संस्कृतीसेतू डिजिटल क्लाउडमध्ये आपले स्वागत आहे',
    sovereignActive: 'सार्वभौम क्लाउड सक्रिय',
    recordsSynced: '३,६९० राष्ट्रीय नोंदी सिंक',
    liveWebARTarget: 'थेट वेबएआर लक्ष्य',
    marathaHeritageArchive: 'मराठा वारसा पुराभिलेख',
    unescoWorldHeritage: 'युनेस्को जागतिक वारसा #246',
    greatLivingChola: 'महान जिवंत चोल मंदिरे',
    launchARScanner: 'एआर स्कॅनर सुरू करा',
    exploreCollection: 'संग्रह एक्सप्लोर करा',
    viewRepository: 'पुराभिलेख पहा',
    viewIngestion: 'नोंदणी पहा',
    preservedRecords: 'संरक्षित वारसा नोंदी',
    stateArchives: 'राज्य शासन पुराभिलेख',
    centralCustodians: 'केंद्रीय संरक्षक संस्था',
    viewAll: 'सर्व पहा',
    monumentsCountSuffix: 'स्मारके',
    homeTab: 'मुख्यपृष्ठ',
    searchTab: 'शोध',
    explorerTab: 'एआर',
    menuTab: 'मेनू',
    searchPlaceholder: 'स्मारके, राज्ये किंवा कालखंड शोधा...',
    issuedRecordsTitle: 'जारी केलेल्या वारसा नोंदी',
    allStatesFilter: 'सर्व राज्ये',
    phase2Badge: 'टप्पा २',
    closeDossier: 'दस्तावेज बंद करा',
    archivalStatusText: 'फोटोग्रामेट्रिक स्कॅन नियोजनबद्ध',
    heritageDossierTitle: 'वारसा डिजिटल दस्तऐवज',
    govtOfIndia: 'भारत सरकार',
    periodLabel: 'कालखंड',
    patronLabel: 'संरक्षक',
    statusLabel: 'स्थिती',
    officialSiteLocation: 'अधिकृत स्थळ स्थान:',
    verifiedBy: 'प्रमाणित करणारी संस्था:',
    verifiedBadge: 'संस्कृतीसेतू प्रमाणित',
    doYouKnowTitle: 'तुम्हाला माहित आहे का?',
    doYouKnowText: 'हम्पीचा दगडी रथ हा भारतातील तीन प्रसिद्ध दगडी रथांपैकी एक आहे. हा ग्रेनाइट शिळांच्या जोडणीतून आणि फिरणाऱ्या दगडी चाकांनी बनवला आहे.',
    launchSpatialARButton: 'त्रिमितीय 3D आणि एआर एक्सप्लोरर उघडा',
    archivalAnalysisTitle: '७-स्तरीय पुराभिलेख विश्लेषण',
    allIngestedBadge: '१००% पूर्ण',
    tierOverview: 'आढावा',
    tierTimeline: 'कालरेषा',
    tierJoinery: 'शिल्पकला',
    tierPhotos: 'छायाचित्रे',
    tierAudio: 'ऑडिओ',
    tier3DTwin: '3D मॉडेल',
    tierStrategy: 'संरक्षण',
    heightLabel: 'उंची',
    baseAreaLabel: 'पाया चबुतरा',
    materialLabel: 'प्राथमिक दगड',
    styleLabel: 'शैली',
    voiceArchiveTitle: 'ध्वनी पुराभिलेख',
    officialNarration: 'अधिकृत वाचन',
    sentenceOf: 'ओळ',
    interactiveTranscriptTitle: 'इंटरॅक्टिव्ह ऑडिओ मजकूर',
    activeSpeaking: '● चालू वाचन',
    spatialARExplorerTitle: 'त्रिमितीय एआर एक्सप्लोरर',
    augmentedRealityView: 'संवर्धित वास्तविकता दृश्य',
    arExplorerDesc: 'कोणत्याही ॲप डाऊनलोडशिवाय कॅमेऱ्याद्वारे 3D स्मारके प्रत्यक्षात पाहण्याची सुविधा.',
    targetHeritageModel: 'लक्ष्य वारसा मॉडेल',
    launchCameraARView: 'कॅमेरा एआर दृश्य सुरू करा',
    viewPrintMarker: 'एआर ट्रॅकिंग मार्कर पहा / प्रिंट करा',
    alignMarkerHUD: 'व्ह्यूफाइंडरमध्ये मार्कर जुळवा',
    finishARExploration: 'एआर पाहणी पूर्ण करा',
    exitARButton: 'एआर मधून बाहेर पडा',
    trustPortalTitle: 'राष्ट्रीय विश्वास व प्रशासन पोर्टल',
    trustPortalSubtitle: 'सार्वभौम क्लाउड, भाषा आणि वारसा मोहीम',
    appLanguageTitle: 'ॲपची भाषा / Language',
    changeButton: 'बदला',
    preservationScoreTitle: '१००% संरक्षण स्कोअर',
    fullyCompliantBadge: 'पूर्णतः प्रमाणित',
    digitalIndiaActCompliance: 'डिजिटल इंडिया कायदा २०२६ सार्वभौम पुराभिलेख आदेश',
    unescoCharterCompliance: 'युनेस्को डिजिटल वारसा सनद (कलम ३ प्रमाणित)',
    asiCadastralSync: 'एएसआय पुरातत्व मंडळ रिअल-टाइम सिंक',
    rootHashLabel: 'मूळ क्रिप्टोग्राफिक हॅश लेजर:',
    faqTitle: 'नेहमी विचारले जाणारे प्रश्न (FAQ)',
    deviceDisplayModeTitle: 'डिव्हाइस आणि नॉच मोड',
    autoDetectMode: 'स्वयं शोध',
    webMode: 'वेब मोड',
    nativeAppMode: 'नेटिव्ह ॲप',
    fullscreenButton: 'फुलस्क्रीन मोड चालू करा',
    exitFullscreenButton: 'फुलस्क्रीन बंद करा',
    nationalHelplineTitle: 'राष्ट्रीय वारसा हेल्पलाइन',
    tollFreeNumber: 'टोल फ्री: 1800-11-4040',
    selectLanguageModalTitle: 'अधिकृत भाषा निवडा / Select Language',
    languageName: 'मराठी',
    monumentNames: {
      stoneChariot: 'दगडी रथ',
      stoneChariotSub: 'हम्पी, कर्नाटक',
      raigadFort: 'रायगड किल्ला',
      raigadFortSub: 'महाराष्ट्र',
      konarkTemple: 'कोणार्क सूर्य मंदिर',
      konarkTempleSub: 'ओडिशा',
      brihadisvaraTemple: 'बृहदीश्वर मंदिर',
      brihadisvaraTempleSub: 'तमिळनाडू',
    },
    stateNames: {
      karnataka: 'कर्नाटक',
      maharashtra: 'महाराष्ट्र',
      tamilNadu: 'तमिळनाडू',
      rajasthan: 'राजस्थान',
      gujarat: 'गुजरात',
      odisha: 'ओडिशा',
    }
  },

  // 4. KANNADA (ಕನ್ನಡ)
  kn: {
    appName: 'ಸಂಸ್ಕೃತಿಸೇತು',
    appSubtitle: 'ರಾಷ್ಟ್ರೀಯ ಡಿಜಿಟಲ್ ಪರಂಪರೆ ಮೇಘ',
    greetingCitizen: 'ನಮಸ್ಕಾರ ನಾಗರಿಕರೆ',
    welcomeCloud: 'ಸಂಸ್ಕೃತಿಸೇತು ಡಿಜಿಟಲ್ ಮೇಘಕ್ಕೆ ಸುಸ್ವಾಗತ',
    sovereignActive: 'ಸಾರ್ವಭೌಮ ಮೇಘ ಸಕ್ರಿಯ',
    recordsSynced: '೩,೬೯೦ ರಾಷ್ಟ್ರೀಯ ದಾಖಲೆಗಳು ಸಿಂಕ್',
    liveWebARTarget: 'ಲೈವ್ ವೆಬ್‌ಎಆರ್ ಗುರಿ',
    marathaHeritageArchive: 'ಮರಾಠ ಪರಂಪರೆ ದಾಖಲೆಗಳು',
    unescoWorldHeritage: 'ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ #246',
    greatLivingChola: 'ಗ್ರೇಟ್ ಲಿವಿಂಗ್ ಚೋಳ ದೇವಾಲಯಗಳು',
    launchARScanner: 'ಎಆರ್ ಸ್ಕ್ಯಾನರ್ ಪ್ರಾರಂಭಿಸಿ',
    exploreCollection: 'ಸಂಗ್ರಹವನ್ನು ಅನ್ವೇಷಿಸಿ',
    viewRepository: 'ದಾಖಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    viewIngestion: 'ದಾಖಲಾತಿ ವೀಕ್ಷಿಸಿ',
    preservedRecords: 'ಸಂರಕ್ಷಿತ ಪರಂಪರೆ ದಾಖಲೆಗಳು',
    stateArchives: 'ರಾಜ್ಯ ಸರ್ಕಾರ ದಾಖಲೆಗಳು',
    centralCustodians: 'ಕೇಂದ್ರ ರಕ್ಷಕರು',
    viewAll: 'ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ',
    monumentsCountSuffix: 'ಸ್ಮಾರಕಗಳು',
    homeTab: 'ಮುಖಪುಟ',
    searchTab: 'ಹುಡುಕು',
    explorerTab: 'ಎಆರ್',
    menuTab: 'ಮೆನು',
    searchPlaceholder: 'ಸ್ಮಾರಕಗಳು, ರಾಜ್ಯಗಳು ಅಥವಾ ಅವಧಿಗಳನ್ನು ಹುಡುಕಿ...',
    issuedRecordsTitle: 'ನೀಡಲಾದ ಪರಂಪರೆ ದಾಖಲೆಗಳು',
    allStatesFilter: 'ಎಲ್ಲಾ ರಾಜ್ಯಗಳು',
    phase2Badge: 'ಹಂತ ೨',
    closeDossier: 'ದಾಖಲೆ ಮುಚ್ಚಿ',
    archivalStatusText: 'ಫೋಟೋಗ್ರಾಮೆಟ್ರಿಕ್ ಸ್ಕ್ಯಾನ್ ನಿಗದಿಯಾಗಿದೆ',
    heritageDossierTitle: 'ಪರಂಪರೆ ಡಿಜಿಟಲ್ ದಾಖಲೆ',
    govtOfIndia: 'ಭಾರತ ಸರ್ಕಾರ',
    periodLabel: 'ಅವಧಿ',
    patronLabel: 'ಪೋಷಕರು',
    statusLabel: 'ಸ್ಥಿತಿ',
    officialSiteLocation: 'ಅಧಿಕೃತ ಸ್ಥಳ:',
    verifiedBy: 'ಪರಿಶೀಲಿಸಿದವರು:',
    verifiedBadge: 'ಸಂಸ್ಕೃತಿಸೇತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    doYouKnowTitle: 'ನಿಮಗೆ ತಿಳಿದಿದೆಯೇ?',
    doYouKnowText: 'ಹಂಪಿಯ ಕಲ್ಲಿನ ರಥವು ಭಾರತದ ಮೂರು ಪ್ರಸಿದ್ಧ ಕಲ್ಲಿನ ರಥಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದನ್ನು ಗ್ರಾನೈಟ್ ಶಿಲೆಗಳು ಮತ್ತು ತಿರುಗುವ ಚಕ್ರಗಳಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
    launchSpatialARButton: 'ಪ್ರಾದೇಶಿಕ 3D ಮತ್ತು AR ವೀಕ್ಷಕ',
    archivalAnalysisTitle: '೭-ಹಂತದ ದಾಖಲೆ ವಿಶ್ಲೇಷಣೆ',
    allIngestedBadge: '೧೦೦% ಪೂರ್ಣ',
    tierOverview: 'ಅವಲೋಕನ',
    tierTimeline: 'ಕಾಲಾವಧಿ',
    tierJoinery: 'ಶಿಲ್ಪಕಲೆ',
    tierPhotos: 'ಚಿತ್ರಗಳು',
    tierAudio: 'ಆಡಿಯೋ',
    tier3DTwin: '3D ಮಾದರಿ',
    tierStrategy: 'ಸಂರಕ್ಷಣೆ',
    heightLabel: 'ಎತ್ತರ',
    baseAreaLabel: 'ತಳಪಾಯ',
    materialLabel: 'ಮುಖ್ಯ ಕಲ್ಲು',
    styleLabel: 'ಶೈಲಿ',
    voiceArchiveTitle: 'ಧ್ವನಿ ದಾಖಲೆ',
    officialNarration: 'ಅಧಿಕೃತ ನಿರೂಪಣೆ',
    sentenceOf: 'ವಾಕ್ಯ',
    interactiveTranscriptTitle: 'ಸಂವಾದಾತ್ಮಕ ಆಡಿಯೋ ಪ್ರತಿಲಿಪಿ',
    activeSpeaking: '● ಸಕ್ರಿಯ ನಿರೂಪಣೆ',
    spatialARExplorerTitle: 'ಪ್ರಾದೇಶಿಕ ಎಆರ್ ವೀಕ್ಷಕ',
    augmentedRealityView: 'ವರ್ಧಿತ ರಿಯಾಲಿಟಿ ನೋಟ',
    arExplorerDesc: 'ಯಾವುದೇ ಅಪ್ಲಿಕೇಶನ್ ಇಲ್ಲದೆ ಬ್ರೌಸರ್ ಕ್ಯಾಮೆರಾ ಮೂಲಕ 3D ಸ್ಮಾರಕಗಳನ್ನು ಕಣ್ಮುಂದೆ ವೀಕ್ಷಿಸಿ.',
    targetHeritageModel: 'ಗುರಿ ಪರಂಪರೆ ಮಾದರಿ',
    launchCameraARView: 'ಕ್ಯಾಮೆರಾ ಎಆರ್ ನೋಟ ಪ್ರಾರಂಭಿಸಿ',
    viewPrintMarker: 'ಎಆರ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾರ್ಕರ್ ವೀಕ್ಷಿಸಿ / ಮುದ್ರಿಸಿ',
    alignMarkerHUD: 'ವ್ಯೂಫೈಂಡರ್‌ನಲ್ಲಿ ಮಾರ್ಕರ್ ಜೋಡಿಸಿ',
    finishARExploration: 'ಎಆರ್ ಅನ್ವೇಷಣೆ ಪೂರ್ಣಗೊಳಿಸಿ',
    exitARButton: 'ಎಆರ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ',
    trustPortalTitle: 'ರಾಷ್ಟ್ರೀಯ ನಂಬಿಕೆ ಮತ್ತು ಆಡಳಿತ ಪೋರ್ಟಲ್',
    trustPortalSubtitle: 'ಸಾರ್ವಭೌಮ ಮೇಘ, ಭಾಷಾ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ಪರಂಪರೆ ಮಿಷನ್',
    appLanguageTitle: 'ಅಪ್ಲಿಕೇಶನ್ ಭಾಷೆ / Language',
    changeButton: 'ಬದಲಾಯಿಸಿ',
    preservationScoreTitle: '೧೦೦% ಸಂರಕ್ಷಣಾ ಸ್ಕೋರ್',
    fullyCompliantBadge: 'ಸಂಪೂರ್ಣ ಅನುಸರಣೆ',
    digitalIndiaActCompliance: 'ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ ಕಾಯ್ದೆ ೨೦೨೬ ಸಾರ್ವಭೌಮ ದಾಖಲೆ ಆದೇಶ',
    unescoCharterCompliance: 'ಯುನೆಸ್ಕೋ ಡಿಜಿಟಲ್ ಪರಂಪರೆ ಸನ್ನದು (ಲೇಖನ ೩ ಪರಿಶೀಲಿಸಲಾಗಿದೆ)',
    asiCadastralSync: 'ಎಎಸ್‌ಐ ಪುರಾತತ್ವ ವೃತ್ತ ನೈಜ-ಸಮಯ ಸಿಂಕ್',
    rootHashLabel: 'ಮೂಲ ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಹ್ಯಾಶ್ ಲೆಡ್ಜರ್:',
    faqTitle: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು (FAQ)',
    deviceDisplayModeTitle: 'ಸಾಧನ ಮತ್ತು ನಾಚ್ ಪ್ರದರ್ಶನ ಮೋಡ್',
    autoDetectMode: 'ಸ್ವಯಂ ಪತ್ತೆ',
    webMode: 'ವೆಬ್ ಮೋಡ್',
    nativeAppMode: 'ಸ್ಥಳೀಯ ಅಪ್ಲಿಕೇಶನ್',
    fullscreenButton: 'ಪೂರ್ಣಪರದೆಯ ಮೋಡ್',
    exitFullscreenButton: 'ಪೂರ್ಣಪರದೆಯಿಂದ ನಿರ್ಗಮಿಸಿ',
    nationalHelplineTitle: 'ರಾಷ್ಟ್ರೀಯ ಪರಂಪರೆ ಸಹಾಯವಾಣಿ',
    tollFreeNumber: 'ಟೋಲ್ ಫ್ರೀ: 1800-11-4040',
    selectLanguageModalTitle: 'ಅಧಿಕೃತ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ / Select Language',
    languageName: 'ಕನ್ನಡ',
    monumentNames: {
      stoneChariot: 'ಕಲ್ಲಿನ ರಥ',
      stoneChariotSub: 'ಹಂಪಿ, ಕರ್ನಾಟಕ',
      raigadFort: 'ರಾಯಗಡ ಕೋಟೆ',
      raigadFortSub: 'ಮಹಾರಾಷ್ಟ್ರ',
      konarkTemple: 'ಕೊನಾರ್ಕ್ ಸೂರ್ಯ ದೇವಾಲಯ',
      konarkTempleSub: 'ಒಡಿಶಾ',
      brihadisvaraTemple: 'ಬೃಹದೀಶ್ವರ ದೇವಾಲಯ',
      brihadisvaraTempleSub: 'ತಮಿಳುನಾಡು',
    },
    stateNames: {
      karnataka: 'ಕರ್ನಾಟಕ',
      maharashtra: 'ಮಹಾರಾಷ್ಟ್ರ',
      tamilNadu: 'ತಮಿಳುನಾಡು',
      rajasthan: 'ರಾಜಸ್ಥಾನ',
      gujarat: 'ಗುಜರಾತ್',
      odisha: 'ಒಡಿಶಾ',
    }
  },

  // 5. TAMIL (தமிழ்)
  ta: {
    appName: 'சமஸ்கிருதிசேது',
    appSubtitle: 'தேசிய டிஜிட்டல் பாரம்பரிய மேகம்',
    greetingCitizen: 'வணக்கம் குடிமகனே',
    welcomeCloud: 'சமஸ்கிருதிசேது டிஜிட்டல் மேகத்திற்கு வரவேற்கிறோம்',
    sovereignActive: 'இறையாண்மை மேகம் செயலில் உள்ளது',
    recordsSynced: '3,690 தேசிய பதிவுகள் இணைக்கப்பட்டுள்ளன',
    liveWebARTarget: 'நேரலை வெப்ஏஆர் இலக்கு',
    marathaHeritageArchive: 'மராட்டிய பாரம்பரிய காப்பகம்',
    unescoWorldHeritage: 'யுனெஸ்கோ உலக பாரம்பரியம் #246',
    greatLivingChola: 'மாபெரும் சோழர் கோயில்கள்',
    launchARScanner: 'ஏஆர் ஸ்கேனரைத் தொடங்கவும்',
    exploreCollection: 'தொகுப்பை ஆராயுங்கள்',
    viewRepository: 'காப்பகத்தைக் காண்க',
    viewIngestion: 'பதிவைக் காண்க',
    preservedRecords: 'பாதுகாக்கப்பட்ட பாரம்பரிய பதிவுகள்',
    stateArchives: 'மாநில அரசு காப்பகங்கள்',
    centralCustodians: 'மத்திய பாதுகாவலர்கள்',
    viewAll: 'அனைத்தையும் பார்க்க',
    monumentsCountSuffix: 'நினைவுச்சின்னங்கள்',
    homeTab: 'முகப்பு',
    searchTab: 'தேடு',
    explorerTab: 'ஏஆர்',
    menuTab: 'மெனு',
    searchPlaceholder: 'நினைவுச்சின்னங்கள், மாநிலங்களை தேடுங்கள்...',
    issuedRecordsTitle: 'வெளியிடப்பட்ட பாரம்பரிய பதிவுகள்',
    allStatesFilter: 'அனைத்து மாநிலங்கள்',
    phase2Badge: 'கட்டம் 2',
    closeDossier: 'ஆவணத்தை மூடு',
    archivalStatusText: 'புகைப்பட அளவீட்டு ஸ்கேன் திட்டமிடப்பட்டுள்ளது',
    heritageDossierTitle: 'பாரம்பரிய டிஜிட்டல் ஆவணம்',
    govtOfIndia: 'இந்திய அரசு',
    periodLabel: 'காலம்',
    patronLabel: 'ஆதரவாளர்',
    statusLabel: 'நிலை',
    officialSiteLocation: 'அதிகாரப்பூர்வ தளம்:',
    verifiedBy: 'சரிபார்க்கப்பட்டது:',
    verifiedBadge: 'சமஸ்கிருதிசேது சரிபார்க்கப்பட்டது',
    doYouKnowTitle: 'உங்களுக்குத் தெரியுமா?',
    doYouKnowText: 'ஹம்பியில் உள்ள கல் தேர் இந்தியாவின் மூன்று புகழ்பெற்ற கல் தேர்களில் ஒன்றாகும். இது சுழலும் கல் சக்கரங்களுடன் கிரானைட் கற்களால் செதுக்கப்பட்டுள்ளது.',
    launchSpatialARButton: '3D மற்றும் ஏஆர் எக்ஸ்ப்ளோரர்',
    archivalAnalysisTitle: '7-அடுக்கு காப்பக பகுப்பாய்வு',
    allIngestedBadge: '100% முடிந்தது',
    tierOverview: 'கண்ணோட்டம்',
    tierTimeline: 'காலவரிசை',
    tierJoinery: 'கட்டடக்கலை',
    tierPhotos: 'புகைப்படங்கள்',
    tierAudio: 'ஆடியோ',
    tier3DTwin: '3D மாதிரி',
    tierStrategy: 'பாதுகாப்பு',
    heightLabel: 'உயரம்',
    baseAreaLabel: 'அடித்தளம்',
    materialLabel: 'முக்கிய கல்',
    styleLabel: 'பாணி',
    voiceArchiveTitle: 'குரல் காப்பகம்',
    officialNarration: 'அதிகாரப்பூர்வ உரை',
    sentenceOf: 'வரி',
    interactiveTranscriptTitle: 'ஊடாடும் ஆடியோ உரை',
    activeSpeaking: '● ஒலிக்கும் உரை',
    spatialARExplorerTitle: 'முப்பரிமாண ஏஆர் எக்ஸ்ப்ளோரர்',
    augmentedRealityView: 'ஆக்மென்டட் ரியாலிட்டி காட்சி',
    arExplorerDesc: 'எந்த செயலியும் இல்லாமல் கேமரா மூலம் 3D நினைவுச்சின்னங்களை உங்கள் முன் காணும் வசதி.',
    targetHeritageModel: 'இலக்கு மாதிரி',
    launchCameraARView: 'கேமரா ஏஆர் காட்சியைத் தொடங்கவும்',
    viewPrintMarker: 'ஏஆர் டிராக்கிங் மார்க்கரைக் காண்க / அச்சிடுங்கள்',
    alignMarkerHUD: 'குறிப்பானை திரையில் சீரமைக்கவும்',
    finishARExploration: 'ஏஆர் பார்வையை முடிக்கவும்',
    exitARButton: 'ஏஆர்-லிருந்து வெளியேறு',
    trustPortalTitle: 'தேசிய நம்பிக்கை மற்றும் நிர்வாக தளம்',
    trustPortalSubtitle: 'இறையாண்மை மேகம், மொழி அமைப்புகள் & பாரம்பரிய திட்டம்',
    appLanguageTitle: 'செயலி மொழி / Language',
    changeButton: 'மாற்று',
    preservationScoreTitle: '100% பாதுகாப்பு மதிப்பீடு',
    fullyCompliantBadge: 'முழு இணக்கம்',
    digitalIndiaActCompliance: 'டிஜிட்டல் இந்தியா சட்டம் 2026 காப்பக ஆணை',
    unescoCharterCompliance: 'யுனெஸ்கோ டிஜிட்டல் பாரம்பரிய சாசனம் (பிரிவு 3 சரிபார்க்கப்பட்டது)',
    asiCadastralSync: 'ஏஎஸ்ஐ தொல்பொருள் வட்டம் நேரலை இணைப்பு',
    rootHashLabel: 'மூல கிரிப்டோகிராஃபிக் ஹாஷ் லெட்ஜர்:',
    faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)',
    deviceDisplayModeTitle: 'சாதனம் மற்றும் நாட்ச் காட்சி முறை',
    autoDetectMode: 'தானியங்கி முறை',
    webMode: 'வலை முறை',
    nativeAppMode: 'நேட்டிவ் ஆப்',
    fullscreenButton: 'முழுத்திரை முறை',
    exitFullscreenButton: 'முழுத்திரையிலிருந்து வெளியேறு',
    nationalHelplineTitle: 'தேசிய பாரம்பரிய உதவி மையம்',
    tollFreeNumber: 'கட்டணமில்லா எண்: 1800-11-4040',
    selectLanguageModalTitle: 'அதிகாரப்பூர்வ மொழியைத் தேர்ந்தெடுக்கவும் / Select Language',
    languageName: 'தமிழ்',
    monumentNames: {
      stoneChariot: 'கல் தேர்',
      stoneChariotSub: 'ஹம்பி, கர்நாடகா',
      raigadFort: 'ராய்காட் கோட்டை',
      raigadFortSub: 'மகாராஷ்டிரா',
      konarkTemple: 'கொனார்க் சூரிய கோயில்',
      konarkTempleSub: 'ஒடிசா',
      brihadisvaraTemple: 'பிரகதீஸ்வரர் கோயில்',
      brihadisvaraTempleSub: 'தமிழ்நாடு',
    },
    stateNames: {
      karnataka: 'கர்நாடகா',
      maharashtra: 'மகாராஷ்டிரா',
      tamilNadu: 'தமிழ்நாடு',
      rajasthan: 'ராஜஸ்தான்',
      gujarat: 'குஜராத்',
      odisha: 'ஒடிசா',
    }
  }
};
