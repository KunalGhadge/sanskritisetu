export type LanguageCode = 'en' | 'hi' | 'mr' | 'kn' | 'ta';

export interface FAQItem {
  q: string;
  a: string;
}

export interface TranslationDict {
  // App Header & Greeting
  appName: string;
  appSubtitle: string;
  greetingCitizen: string;
  welcomeCloud: string;
  sovereignActive: string;
  recordsSynced: string;

  // Bottom Navigation
  homeTab: string;
  searchTab: string;
  explorerTab: string;
  menuTab: string;

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

  // Repository & Search Screen
  searchPlaceholder: string;
  issuedRecordsTitle: string;
  allStatesFilter: string;
  phase2Badge: string;
  closeDossier: string;
  archivalStatusText: string;
  showingCadastralRecords: string;
  sovereignVerifiedStatus: string;
  liveDossier: string;
  viewSchedule: string;
  openDossierButton: string;
  phase2IngestionTitle: string;
  phase2IngestionDesc: string;

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

  // Dossier Titles & Headings
  historicalSignificanceTitle: string;
  chronologicalMilestonesTitle: string;
  dimensionalEngineeringTitle: string;
  structuralJoinerySystemTitle: string;
  keyArchitecturalElementsTitle: string;
  photogrammetricGalleryTitle: string;
  preservationMonitoringTitle: string;
  threatsTitle: string;
  mitigationTitle: string;
  digitalRedundancyTitle: string;

  // Structural Specifications
  heightLabel: string;
  baseAreaLabel: string;
  materialLabel: string;
  styleLabel: string;

  // Audio Guide
  voiceArchiveTitle: string;
  officialNarration: string;
  officialAudioGuide: string;
  sentenceOf: string;
  sectionOf: string;
  percentComplete: string;
  interactiveTranscriptTitle: string;
  activeSpeaking: string;
  speakingLabel: string;
  selectedLabel: string;
  voiceSynthesizerLabel: string;

  // AR Explorer
  spatialARExplorerTitle: string;
  augmentedRealityView: string;
  arExplorerDesc: string;
  selectTargetModel: string;
  targetHeritageModel: string;
  universalPipelineDesc: string;
  launchCameraARView: string;
  viewPrintMarker: string;
  openInBrowserAR: string;
  openInBrowserARSub: string;
  alignMarkerHUD: string;
  finishARExploration: string;
  exitARButton: string;

  // Trust / Menu Screen
  trustPortalTitle: string;
  trustPortalSubtitle: string;
  sovereignCitizenId: string;
  activeStatus: string;
  verifiedRecordBadge: string;
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

  // FAQs
  faqs: FAQItem[];

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
    homeTab: 'Home',
    searchTab: 'Search',
    explorerTab: 'Explorer',
    menuTab: 'Menu',
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
    searchPlaceholder: 'Search monuments, states, or periods...',
    issuedRecordsTitle: 'National Heritage Repository',
    allStatesFilter: 'All States',
    phase2Badge: 'Phase 2',
    closeDossier: 'Close Dossier',
    archivalStatusText: 'Photogrammetric Scan Ingestion Scheduled',
    showingCadastralRecords: 'Showing Cadastral Records',
    sovereignVerifiedStatus: '● Sovereign Verified',
    liveDossier: 'Live Dossier',
    viewSchedule: 'View Schedule',
    openDossierButton: 'Open Dossier',
    phase2IngestionTitle: 'Phase 2 Archival Ingestion',
    phase2IngestionDesc: 'Photogrammetric 3D point-cloud LiDAR scan scheduled under the National Heritage Digital Ingestion Mandate 2026.',
    heritageDossierTitle: 'Heritage Digital Dossier',
    govtOfIndia: 'GOVERNMENT OF INDIA',
    periodLabel: 'Period',
    patronLabel: 'Patron King',
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
    tierJoinery: 'Architecture',
    tierPhotos: 'Photos',
    tierAudio: 'Audio Guide',
    tier3DTwin: '3D Twin',
    tierStrategy: 'Strategy',
    historicalSignificanceTitle: 'Historical & Architectural Significance',
    chronologicalMilestonesTitle: 'Chronological Epochs & Milestones',
    dimensionalEngineeringTitle: 'Dimensional & Material Engineering',
    structuralJoinerySystemTitle: 'Structural Engineering Summary',
    keyArchitecturalElementsTitle: 'Key Architectural Elements',
    photogrammetricGalleryTitle: 'High-Resolution Photogrammetric Asset Gallery',
    preservationMonitoringTitle: 'Digital Preservation & Climate Monitoring',
    threatsTitle: 'Threats & Degradation Vectors',
    mitigationTitle: 'ASI Remediation & Mitigation Actions',
    digitalRedundancyTitle: 'Digital Sovereign Redundancy SLA',
    heightLabel: 'Height',
    baseAreaLabel: 'Base Plinth',
    materialLabel: 'Primary Stone',
    styleLabel: 'Style',
    voiceArchiveTitle: 'Voice Archive',
    officialNarration: 'Official Narration',
    officialAudioGuide: 'Official Audio Guide',
    sentenceOf: 'Sentence',
    sectionOf: 'Section',
    percentComplete: 'Complete',
    interactiveTranscriptTitle: 'Interactive Synced Transcript',
    activeSpeaking: '● Speaking',
    speakingLabel: '● Speaking',
    selectedLabel: '● Selected',
    voiceSynthesizerLabel: 'Official Voice Synthesizer:',
    spatialARExplorerTitle: 'Spatial AR Explorer',
    augmentedRealityView: 'Augmented Reality View',
    arExplorerDesc: 'Zero-install browser camera tracking projecting 3D monuments into physical space.',
    selectTargetModel: 'Select Heritage Target',
    targetHeritageModel: 'Target Heritage Model',
    universalPipelineDesc: 'Universal Sovereign Pipeline: Calibrated with the Universal AR Tracking Anchor for instant classroom and field deployment across all national circles.',
    launchCameraARView: 'Launch Camera AR View',
    viewPrintMarker: 'View / Print AR Tracking Marker',
    openInBrowserAR: 'Open Direct WebAR in Browser',
    openInBrowserARSub: 'Standalone hosted scanner for seamless testing',
    alignMarkerHUD: 'Align Marker in Viewfinder',
    finishARExploration: 'Finish AR Exploration',
    exitARButton: 'Exit AR',
    trustPortalTitle: 'National Trust & Governance Portal',
    trustPortalSubtitle: 'Sovereign Cloud, Language Settings & Heritage Mission',
    sovereignCitizenId: 'Sovereign Citizen ID',
    activeStatus: 'Active',
    verifiedRecordBadge: '100% Verified',
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
    faqs: [
      {
        q: 'How are monument 3D digital twins photogrammetrically scanned & verified?',
        a: 'Each monument undergoes multi-spectral photogrammetry combining high-density Terrestrial Laser Scanning (TLS) and drone captures, capturing over 5,000 overlapping RAW images to reconstruct millimeter-accurate 3D topology.'
      },
      {
        q: 'Does SanskritiSetu comply with international UNESCO standards?',
        a: 'Yes. SanskritiSetu adheres to Article 3 of the UNESCO Charter on the Preservation of Digital Heritage (2003) and the London Charter for Computer-based Visualisation of Cultural Heritage.'
      },
      {
        q: 'Can schools and citizens use the AR Explorer on low-cost devices?',
        a: 'Yes! SanskritiSetu is engineered as a zero-install WebAR application that runs directly in any modern mobile browser without requiring app store downloads or expensive LiDAR hardware.'
      },
      {
        q: 'How is digital data tamper-proofing achieved?',
        a: 'Every 3D mesh, texture atlas, and historical audio guide is hashed using SHA-256 cryptographic algorithms and committed to sovereign National Data Center nodes.'
      },
      {
        q: 'How are state archaeological departments integrated?',
        a: 'State archaeology directorates (e.g. Maharashtra, Karnataka, Tamil Nadu) securely ingest verified cadastral and site excavation records through sovereign API pipelines.'
      }
    ],
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
    homeTab: 'होम',
    searchTab: 'खोजें',
    explorerTab: 'एआर',
    menuTab: 'मेनू',
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
    searchPlaceholder: 'स्मारक, राज्य या कालखंड खोजें...',
    issuedRecordsTitle: 'राष्ट्रीय धरोहर अभिलेखागार',
    allStatesFilter: 'सभी राज्य',
    phase2Badge: 'चरण २',
    closeDossier: 'दस्तावेज़ बंद करें',
    archivalStatusText: 'फोटोग्रामेट्रिक स्कैन प्रविष्टि निर्धारित',
    showingCadastralRecords: 'भू-अभिलेख प्रदर्शित किए जा रहे हैं',
    sovereignVerifiedStatus: '● संप्रभु सत्यापित',
    liveDossier: 'लाइव दस्तावेज़',
    viewSchedule: 'समय सारणी देखें',
    openDossierButton: 'दस्तावेज़ खोलें',
    phase2IngestionTitle: 'चरण २ अभिलेख प्रविष्टि',
    phase2IngestionDesc: 'राष्ट्रीय धरोहर डिजिटल प्रविष्टि अधिदेश २०२६ के अंतर्गत ३D लिडार स्कैन निर्धारित।',
    heritageDossierTitle: 'धरोहर डिजिटल दस्तावेज़',
    govtOfIndia: 'भारत सरकार',
    periodLabel: 'कालखंड',
    patronLabel: 'संरक्षक नरेश',
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
    tierAudio: 'ऑडियो गाइड',
    tier3DTwin: '3D मॉडल',
    tierStrategy: 'संरक्षण',
    historicalSignificanceTitle: 'ऐतिहासिक एवं स्थापत्य महत्व',
    chronologicalMilestonesTitle: 'कालानुक्रमिक युग और मील के पत्थर',
    dimensionalEngineeringTitle: 'आयामी और पदार्थ इंजीनियरिंग',
    structuralJoinerySystemTitle: 'संरचनात्मक इंजीनियरिंग सारांश',
    keyArchitecturalElementsTitle: 'प्रमुख स्थापत्य तत्व',
    photogrammetricGalleryTitle: 'उच्च-रिज़ॉल्यूशन फोटोग्रामेट्रिक गैलरी',
    preservationMonitoringTitle: 'डिजिटल संरक्षण एवं जलवायु निगरानी',
    threatsTitle: 'संरचनात्मक खतरे एवं क्षरण कारक',
    mitigationTitle: 'एएसआई निवारण एवं उपचारात्मक कार्य',
    digitalRedundancyTitle: 'डिजिटल संप्रभु अतिरेक एसएलए',
    heightLabel: 'ऊंचाई',
    baseAreaLabel: 'आधार चबूतरा',
    materialLabel: 'प्राथमिक पत्थर',
    styleLabel: 'शैली',
    voiceArchiveTitle: 'ध्वनि अभिलेखागार',
    officialNarration: 'आधिकारिक वाचन',
    officialAudioGuide: 'आधिकारिक ऑडियो गाइड',
    sentenceOf: 'पंक्ति',
    sectionOf: 'भाग',
    percentComplete: 'पूर्ण',
    interactiveTranscriptTitle: 'इंटरैक्टिव ऑडियो प्रतिलिपि',
    activeSpeaking: '● वाचन जारी',
    speakingLabel: '● वाचन जारी',
    selectedLabel: '● चयनित',
    voiceSynthesizerLabel: 'आधिकारिक ध्वनि संकलक:',
    spatialARExplorerTitle: 'स्थानिक एआर एक्सप्लोरर',
    augmentedRealityView: 'संवर्धित वास्तविकता दृश्य',
    arExplorerDesc: 'शून्य-इंस्टॉल ब्राउज़र कैमरा ट्रैकिंग जो 3D स्मारकों को आपके सामने प्रस्तुत करता है।',
    selectTargetModel: 'धरोहर मॉडल चुनें',
    targetHeritageModel: 'लक्ष्य धरोहर मॉडल',
    universalPipelineDesc: 'सार्वभौमिक संप्रभु पाइपलाइन: सभी राष्ट्रीय मंडलों में तत्काल प्रदर्शन हेतु सार्वभौमिक एआर ट्रैकिंग एंकर से कैलिब्रेट किया गया।',
    launchCameraARView: 'कैमरा एआर दृश्य शुरू करें',
    viewPrintMarker: 'एआर ट्रैकिंग मार्कर देखें / प्रिंट करें',
    openInBrowserAR: 'ब्राउज़र में डायरेक्ट वेबएआर खोलें',
    openInBrowserARSub: 'सुलभ परीक्षण हेतु स्टैंडअलोन होस्टेड स्कैनर',
    alignMarkerHUD: 'व्यूफ़ाइंडर में मार्कर संरेखित करें',
    finishARExploration: 'एआर अन्वेषण समाप्त करें',
    exitARButton: 'एआर से बाहर निकलें',
    trustPortalTitle: 'राष्ट्रीय विश्वास और शासन पोर्टल',
    trustPortalSubtitle: 'संप्रभु क्लाउड, भाषा सेटिंग्स और धरोहर मिशन',
    sovereignCitizenId: 'संप्रभु नागरिक आईडी',
    activeStatus: 'सक्रिय',
    verifiedRecordBadge: '१००% सत्यापित',
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
    faqs: [
      {
        q: 'स्मारकों के 3D डिजिटल ट्विन्स को कैसे स्कैन और सत्यापित किया जाता है?',
        a: 'प्रत्येक स्मारक को उच्च-घनत्व स्थलीय लेजर स्कैनिंग (TLS) और ड्रोन फोटोग्रामेट्री के माध्यम से ५,००० से अधिक रॉ तस्वीरों से मिलीमीटर-सटीक 3D मॉडल में पुनर्निर्मित किया जाता है।'
      },
      {
        q: 'क्या संस्कृतिसेतु अंतरराष्ट्रीय यूनेस्को मानकों का पालन करता है?',
        a: 'हाँ, संस्कृतिसेतु डिजिटल धरोहर संरक्षण पर यूनेस्को चार्टर (२००३) के अनुच्छेद ३ और लंदन चार्टर का पूर्णतः पालन करता है।'
      },
      {
        q: 'क्या विद्यार्थी और नागरिक इसे सस्ते मोबाइल फोन पर देख सकते हैं?',
        a: 'हाँ! संस्कृतिसेतु एक शून्य-इंस्टॉल वेबएआर प्रणाली है जो बिना किसी विशेष हार्डवेयर या भारी ऐप के किसी भी मोबाइल ब्राउज़र में तुरंत चलती है।'
      },
      {
        q: 'डिजिटल डेटा की सुरक्षा और अपरिवर्तनीयता कैसे सुनिश्चित की जाती है?',
        a: 'प्रत्येक 3D मेश और ऐतिहासिक ऑडियो गाइड को SHA-256 क्रिप्टोग्राफ़िक हैश द्वारा सुरक्षित कर राष्ट्रीय डेटा केंद्र नोड्स में दर्ज किया जाता है।'
      },
      {
        q: 'राज्य पुरातत्व विभागों का एकीकरण कैसे किया गया है?',
        a: 'राज्य पुरातत्व निदेशालय (उदा. महाराष्ट्र, कर्नाटक, तमिलनाडु) संप्रभु एपीआई पाइपलाइनों के माध्यम से सीधे सत्यापित अभिलेख प्रविष्ट करते हैं।'
      }
    ],
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
    homeTab: 'मुख्यपृष्ठ',
    searchTab: 'शोध',
    explorerTab: 'एआर',
    menuTab: 'मेनू',
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
    searchPlaceholder: 'स्मारके, राज्ये किंवा कालखंड शोधा...',
    issuedRecordsTitle: 'राष्ट्रीय वारसा पुराभिलेख',
    allStatesFilter: 'सर्व राज्ये',
    phase2Badge: 'टप्पा २',
    closeDossier: 'दस्तावेज बंद करा',
    archivalStatusText: 'फोटोग्रामेट्रिक स्कॅन नियोजनबद्ध',
    showingCadastralRecords: 'नोंदवलेले भू-अभिलेख दर्शवत आहे',
    sovereignVerifiedStatus: '● सार्वभौम प्रमाणित',
    liveDossier: 'थेट दस्तऐवज',
    viewSchedule: 'वेळापत्रक पहा',
    openDossierButton: 'दस्तऐवज उघडा',
    phase2IngestionTitle: 'टप्पा २ पुराभिलेख नोंदणी',
    phase2IngestionDesc: 'राष्ट्रीय डिजिटल वारसा आदेश २०२६ अंतर्गत ३D लिडार स्कॅन नियोजनबद्ध.',
    heritageDossierTitle: 'वारसा डिजिटल दस्तऐवज',
    govtOfIndia: 'भारत सरकार',
    periodLabel: 'कालखंड',
    patronLabel: 'संरक्षक राजे',
    statusLabel: 'स्थिती',
    officialSiteLocation: 'अधिकृत स्थळ स्थान:',
    verifiedBy: 'प्रमाणित करणारी संस्था:',
    verifiedBadge: 'संस्कृतीसेतू प्रमाणित',
    doYouKnowTitle: 'तुम्हाला माहित आहे का?',
    doYouKnowText: 'हम्पीचा दगडी रथ हा भारतातील तीन प्रसिद्ध दगडी रथांपैकी एक आहे. हा ग्रॅनाइट शिळांच्या जोडणीतून आणि फिरणाऱ्या दगडी चाकांनी बनवला आहे.',
    launchSpatialARButton: 'त्रिमितीय 3D आणि एआर एक्सप्लोरर उघडा',
    archivalAnalysisTitle: '७-स्तरीय पुराभिलेख विश्लेषण',
    allIngestedBadge: '१००% पूर्ण',
    tierOverview: 'आढावा',
    tierTimeline: 'कालरेषा',
    tierJoinery: 'शिल्पकला',
    tierPhotos: 'छायाचित्रे',
    tierAudio: 'ऑडिओ मार्गदर्शक',
    tier3DTwin: '3D मॉडेल',
    tierStrategy: 'संरक्षण',
    historicalSignificanceTitle: 'ऐतिहासिक व वास्तुशास्त्रीय महत्त्व',
    chronologicalMilestonesTitle: 'कालक्रमानुसार महत्त्वाचे टप्पे',
    dimensionalEngineeringTitle: 'मापन व स्थापत्य अभियांत्रिकी',
    structuralJoinerySystemTitle: 'संरचनात्मक स्थापत्य सारांश',
    keyArchitecturalElementsTitle: 'प्रमुख वास्तुरचना घटक',
    photogrammetricGalleryTitle: 'उच्च दर्जाची छायाचित्र दालन',
    preservationMonitoringTitle: 'डिजिटल संवर्धन आणि हवामान निरीक्षण',
    threatsTitle: 'धोके आणि धूप घटक',
    mitigationTitle: 'एएसआय संवर्धन उपाययोजना',
    digitalRedundancyTitle: 'डिजिटल सार्वभौम सुरक्षा करार',
    heightLabel: 'उंची',
    baseAreaLabel: 'पाया चबुतरा',
    materialLabel: 'प्राथमिक दगड',
    styleLabel: 'शैली',
    voiceArchiveTitle: 'ध्वनी पुराभिलेख',
    officialNarration: 'अधिकृत वाचन',
    officialAudioGuide: 'अधिकृत ऑडिओ मार्गदर्शक',
    sentenceOf: 'ओळ',
    sectionOf: 'विभाग',
    percentComplete: 'पूर्ण',
    interactiveTranscriptTitle: 'इंटरॅक्टिव्ह ऑडिओ मजकूर',
    activeSpeaking: '● चालू वाचन',
    speakingLabel: '● चालू वाचन',
    selectedLabel: '● निवडलेले',
    voiceSynthesizerLabel: 'अधिकृत ध्वनी संकलक:',
    spatialARExplorerTitle: 'त्रिमितीय एआर एक्सप्लोरर',
    augmentedRealityView: 'संवर्धित वास्तविकता दृश्य',
    arExplorerDesc: 'कोणत्याही ॲप डाऊनलोडशिवाय कॅमेऱ्याद्वारे 3D स्मारके प्रत्यक्षात पाहण्याची सुविधा.',
    selectTargetModel: 'वारसा मॉडेल निवडा',
    targetHeritageModel: 'लक्ष्य वारसा मॉडेल',
    universalPipelineDesc: 'सार्वभौम प्रणाली: सर्व राष्ट्रीय मंडळांमध्ये थेट पाहण्यासाठी युनिव्हर्सल एआर ट्रॅकिंग मार्करशी जोडलेले.',
    launchCameraARView: 'कॅमेरा एआर दृश्य सुरू करा',
    viewPrintMarker: 'एआर ट्रॅकिंग मार्कर पहा / प्रिंट करा',
    openInBrowserAR: 'ब्राउझरमध्ये थेट वेबएआर उघडा',
    openInBrowserARSub: 'चाचणीसाठी स्वतंत्र होस्ट केलेले स्कॅनर',
    alignMarkerHUD: 'व्ह्यूफाइंडरमध्ये मार्कर जुळवा',
    finishARExploration: 'एआर पाहणी पूर्ण करा',
    exitARButton: 'एआर मधून बाहेर पडा',
    trustPortalTitle: 'राष्ट्रीय विश्वास व प्रशासन पोर्टल',
    trustPortalSubtitle: 'सार्वभौम क्लाउड, भाषा आणि वारसा मोहीम',
    sovereignCitizenId: 'सार्वभौम नागरिक आयडी',
    activeStatus: 'सक्रिय',
    verifiedRecordBadge: '१००% प्रमाणित',
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
    faqs: [
      {
        q: 'स्मारकांचे 3D डिजिटल मॉडेल्स कसे स्कॅन आणि प्रमाणित केले जातात?',
        a: 'प्रत्येक स्मारकाचे टेरेस्ट्रियल लेझर स्कॅनिंग (TLS) आणि ड्रोनद्वारे ५००० पेक्षा जास्त फोटोंमधून अचूक त्रिमितीय 3D मॉडेल तयार केले जाते.'
      },
      {
        q: 'संस्कृतीसेतू युनेस्कोच्या जागतिक नियमांचे पालन करतो का?',
        a: 'होय, संस्कृतीसेतू युनेस्को डिजिटल वारसा सनद २००३ च्या कलम ३ चे आणि लंडन सनदेचे काटेकोर पालन करतो.'
      },
      {
        q: 'सामान्य नागरिक साध्या मोबाईलवर हे पाहू शकतात का?',
        a: 'होय! संस्कृतीसेतू ही शून्य-डाऊनलोड वेबएआर प्रणाली आहे जी कोणत्याही मोबाईल ब्राउझरमध्ये थेट चालते.'
      },
      {
        q: 'डिजिटल माहितीची सुरक्षितता कशी राखली जाते?',
        a: 'प्रत्येक 3D मॉडेल आणि ऐतिहासिक माहिती SHA-256 क्रिप्टोग्राफिक हॅशने सुरक्षित करून सरकारी डेटा सेंटरमध्ये साठवली जाते.'
      },
      {
        q: 'राज्य पुरातत्व विभाग कसे जोडले गेले आहेत?',
        a: 'महाराष्ट्र, कर्नाटक, तामिळनाडू यांसारखे राज्य पुरातत्व विभाग थेट सरकारी एपीआय द्वारे प्रमाणित माहिती जोडतात.'
      }
    ],
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
    homeTab: 'ಮುಖಪುಟ',
    searchTab: 'ಹುಡುಕು',
    explorerTab: 'ಎಆರ್',
    menuTab: 'ಮೆನು',
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
    searchPlaceholder: 'ಸ್ಮಾರಕಗಳು, ರಾಜ್ಯಗಳು ಅಥವಾ ಅವಧಿಗಳನ್ನು ಹುಡುಕಿ...',
    issuedRecordsTitle: 'ರಾಷ್ಟ್ರೀಯ ಪರಂಪರೆ ಭಂಡಾರ',
    allStatesFilter: 'ಎಲ್ಲಾ ರಾಜ್ಯಗಳು',
    phase2Badge: 'ಹಂತ ೨',
    closeDossier: 'ದಾಖಲೆ ಮುಚ್ಚಿ',
    archivalStatusText: 'ಫೋಟೋಗ್ರಾಮೆಟ್ರಿಕ್ ಸ್ಕ್ಯಾನ್ ನಿಗದಿಯಾಗಿದೆ',
    showingCadastralRecords: 'ದಾಖಲೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತಿದೆ',
    sovereignVerifiedStatus: '● ಸಾರ್ವಭೌಮ ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    liveDossier: 'ಲೈವ್ ದಾಖಲೆ',
    viewSchedule: 'ವೇಳಾಪಟ್ಟಿ ವೀಕ್ಷಿಸಿ',
    openDossierButton: 'ದಾಖಲೆ ತೆರೆಯಿರಿ',
    phase2IngestionTitle: 'ಹಂತ ೨ ದಾಖಲಾತಿ',
    phase2IngestionDesc: 'ರಾಷ್ಟ್ರೀಯ ಡಿಜಿಟಲ್ ಪರಂಪರೆ ಆದೇಶ ೨೦೨೬ ರ ಅಡಿಯಲ್ಲಿ ೩D ಸ್ಕ್ಯಾನ್ ನಿಗದಿಯಾಗಿದೆ.',
    heritageDossierTitle: 'ಪರಂಪರೆ ಡಿಜಿಟಲ್ ದಾಖಲೆ',
    govtOfIndia: 'ಭಾರತ ಸರ್ಕಾರ',
    periodLabel: 'ಅವಧಿ',
    patronLabel: 'ಪೋಷಕ ದೊರೆ',
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
    tierAudio: 'ಆಡಿಯೋ ಮಾರ್ಗದರ್ಶಿ',
    tier3DTwin: '3D ಮಾದರಿ',
    tierStrategy: 'ಸಂರಕ್ಷಣೆ',
    historicalSignificanceTitle: 'ಐತಿಹಾಸಿಕ ಮತ್ತು ವಾಸ್ತುಶಿಲ್ಪ ಪ್ರಾಮುಖ್ಯತೆ',
    chronologicalMilestonesTitle: 'ಐತಿಹಾಸಿಕ ಪ್ರಮುಖ ಘಟನೆಗಳು',
    dimensionalEngineeringTitle: 'ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಎಂಜಿನಿಯರಿಂಗ್',
    structuralJoinerySystemTitle: 'ರಚನಾತ್ಮಕ ಎಂಜಿನಿಯರಿಂಗ್ ಸಾರಾಂಶ',
    keyArchitecturalElementsTitle: 'ಪ್ರಮುಖ ವಾಸ್ತುಶಿಲ್ಪ ಅಂಶಗಳು',
    photogrammetricGalleryTitle: 'ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಫೋಟೋ ಗ್ಯಾಲರಿ',
    preservationMonitoringTitle: 'ಡಿಜಿಟಲ್ ಸಂರಕ್ಷಣೆ ಮತ್ತು ಹವಾಮಾನ ಮೇಲ್ವಿಚಾರಣೆ',
    threatsTitle: 'ರಚನಾತ್ಮಕ ಬೆದರಿಕೆಗಳು',
    mitigationTitle: 'ಎಎಸ್‌ಐ ಸಂರಕ್ಷಣಾ ಕ್ರಮಗಳು',
    digitalRedundancyTitle: 'ಡಿಜಿಟಲ್ ಸಾರ್ವಭೌಮ ಭದ್ರತಾ ಒಪ್ಪಂದ',
    heightLabel: 'ಎತ್ತರ',
    baseAreaLabel: 'ತಳಪಾಯ',
    materialLabel: 'ಮುಖ್ಯ ಕಲ್ಲು',
    styleLabel: 'ಶೈಲಿ',
    voiceArchiveTitle: 'ಧ್ವನಿ ದಾಖಲೆ',
    officialNarration: 'ಅಧಿಕೃತ ನಿರೂಪಣೆ',
    officialAudioGuide: 'ಅಧಿಕೃತ ಆಡಿಯೋ ಮಾರ್ಗದರ್ಶಿ',
    sentenceOf: 'ವಾಕ್ಯ',
    sectionOf: 'ಭಾಗ',
    percentComplete: 'ಪೂರ್ಣ',
    interactiveTranscriptTitle: 'ಸಂವಾದಾತ್ಮಕ ಆಡಿಯೋ ಪ್ರತಿಲಿಪಿ',
    activeSpeaking: '● ನಿರೂಪಣೆ ಜಾರಿಯಲ್ಲಿದೆ',
    speakingLabel: '● ನಿರೂಪಣೆ ಜಾರಿಯಲ್ಲಿದೆ',
    selectedLabel: '● ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ',
    voiceSynthesizerLabel: 'ಅಧಿಕೃತ ಧ್ವನಿ ಸಂಯೋಜಕ:',
    spatialARExplorerTitle: 'ಪ್ರಾದೇಶಿಕ ಎಆರ್ ವೀಕ್ಷಕ',
    augmentedRealityView: 'ವರ್ಧಿತ ರಿಯಾಲಿಟಿ ನೋಟ',
    arExplorerDesc: 'ಯಾವುದೇ ಅಪ್ಲಿಕೇಶನ್ ಇಲ್ಲದೆ ಬ್ರೌಸರ್ ಕ್ಯಾಮೆರಾ ಮೂಲಕ 3D ಸ್ಮಾರಕಗಳನ್ನು ಕಣ್ಮುಂದೆ ವೀಕ್ಷಿಸಿ.',
    selectTargetModel: 'ಪರಂಪರೆ ಮಾದರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    targetHeritageModel: 'ಗುರಿ ಪರಂಪರೆ ಮಾದರಿ',
    universalPipelineDesc: 'ಸಾರ್ವಭೌಮ ವ್ಯವಸ್ಥೆ: ಎಲ್ಲಾ ರಾಷ್ಟ್ರೀಯ ವೃತ್ತಗಳಲ್ಲಿ ತಕ್ಷಣ ವೀಕ್ಷಿಸಲು ಯುನಿವರ್ಸಲ್ ಎಆರ್ ಮಾರ್ಕರ್‌ನೊಂದಿಗೆ ಸಂಯೋಜಿಸಲಾಗಿದೆ.',
    launchCameraARView: 'ಕ್ಯಾಮೆರಾ ಎಆರ್ ನೋಟ ಪ್ರಾರಂಭಿಸಿ',
    viewPrintMarker: 'ಎಆರ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಮಾರ್ಕರ್ ವೀಕ್ಷಿಸಿ / ಮುದ್ರಿಸಿ',
    openInBrowserAR: 'ಬ್ರೌಸರ್‌ನಲ್ಲಿ ನೇರ ವೆಬ್‌ಎಆರ್ ತೆರೆಯಿರಿ',
    openInBrowserARSub: 'ಸುಲಭ ಪರೀಕ್ಷೆಗಾಗಿ ಸ್ವತಂತ್ರ ಸ್ಕ್ಯಾನರ್',
    alignMarkerHUD: 'ವ್ಯೂಫೈಂಡರ್‌ನಲ್ಲಿ ಮಾರ್ಕರ್ ಜೋಡಿಸಿ',
    finishARExploration: 'ಎಆರ್ ಅನ್ವೇಷಣೆ ಪೂರ್ಣಗೊಳಿಸಿ',
    exitARButton: 'ಎಆರ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ',
    trustPortalTitle: 'ರಾಷ್ಟ್ರೀಯ ನಂಬಿಕೆ ಮತ್ತು ಆಡಳಿತ ಪೋರ್ಟಲ್',
    trustPortalSubtitle: 'ಸಾರ್ವಭೌಮ ಮೇಘ, ಭಾಷಾ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ಪರಂಪರೆ ಮಿಷನ್',
    sovereignCitizenId: 'ಸಾರ್ವಭೌಮ ನಾಗರಿಕ ಐಡಿ',
    activeStatus: 'ಸಕ್ರಿಯ',
    verifiedRecordBadge: '೧೦೦% ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
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
    faqs: [
      {
        q: 'ಸ್ಮಾರಕಗಳ 3D ಡಿಜಿಟಲ್ ಮಾದರಿಗಳನ್ನು ಹೇಗೆ ಸ್ಕ್ಯಾನ್ ಮಾಡಲಾಗುತ್ತದೆ?',
        a: 'ಪ್ರತಿಯೊಂದು ಸ್ಮಾರಕವನ್ನು ಲೇಸರ್ ಸ್ಕ್ಯಾನಿಂಗ್ (TLS) ಮತ್ತು ಡ್ರೋನ್ ಫೋಟೋಗ್ರಾಮೆಟ್ರಿ ಮೂಲಕ ೫,೦೦೦ ಕ್ಕೂ ಹೆಚ್ಚು ಚಿತ್ರಗಳಿಂದ ನಿಖರವಾದ 3D ಮಾದರಿಯಾಗಿ ಮರುಸೃಷ್ಟಿಸಲಾಗುತ್ತದೆ.'
      },
      {
        q: 'ಸಂಸ್ಕೃತಿಸೇತು ಯುನೆಸ್ಕೋ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸುತ್ತದೆಯೇ?',
        a: 'ಹೌದು, ಸಂಸ್ಕೃತಿಸೇತು ಯುನೆಸ್ಕೋ ಡಿಜಿಟಲ್ ಪರಂಪರೆ ಸನ್ನದು (೨೦೦೩) ಕಲಂ ೩ ಮತ್ತು ಲಂಡನ್ ಸನ್ನದನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅನುಸರಿಸುತ್ತದೆ.'
      },
      {
        q: 'ಇದನ್ನು ಸಾಮಾನ್ಯ ಮೊಬೈಲ್‌ಗಳಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದೇ?',
        a: 'ಹೌದು! ಯಾವುದೇ ಅಪ್ಲಿಕೇಶನ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡದೆ ನೇರವಾಗಿ ಮೊಬೈಲ್ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ವೀಕ್ಷಿಸಬಹುದು.'
      },
      {
        q: 'ಮಾಹಿತಿಯ ಸುರಕ್ಷತೆಯನ್ನು ಹೇಗೆ ಖಚಿತಪಡಿಸಲಾಗುತ್ತದೆ?',
        a: 'ಪ್ರತಿಯೊಂದು ಮಾದರಿಯನ್ನು SHA-256 ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಹ್ಯಾಶ್ ಮೂಲಕ ರಕ್ಷಿಸಿ ರಾಷ್ಟ್ರೀಯ ಡೇಟಾ ಕೇಂದ್ರದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ.'
      },
      {
        q: 'ರಾಜ್ಯ ಪುರಾತತ್ವ ಇಲಾಖೆಗಳು ಹೇಗೆ ಸಂಪರ್ಕಗೊಂಡಿವೆ?',
        a: 'ಕರ್ನಾಟಕ, ಮಹಾರಾಷ್ಟ್ರ, ತಮಿಳುನಾಡು ಮುಂತಾದ ರಾಜ್ಯ ಇಲಾಖೆಗಳು ನೇರವಾಗಿ ಪರಿಶೀಲಿಸಿದ ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸುತ್ತವೆ.'
      }
    ],
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
    homeTab: 'முகப்பு',
    searchTab: 'தேடு',
    explorerTab: 'ஏஆர்',
    menuTab: 'மெனு',
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
    searchPlaceholder: 'நினைவுச்சின்னங்கள், மாநிலங்களை தேடுங்கள்...',
    issuedRecordsTitle: 'தேசிய பாரம்பரிய களஞ்சியம்',
    allStatesFilter: 'அனைத்து மாநிலங்கள்',
    phase2Badge: 'கட்டம் 2',
    closeDossier: 'ஆவணத்தை மூடு',
    archivalStatusText: 'புகைப்பட அளவீட்டு ஸ்கேன் திட்டமிடப்பட்டுள்ளது',
    showingCadastralRecords: 'பதிவுகள் காண்பிக்கப்படுகின்றன',
    sovereignVerifiedStatus: '● சரிபார்க்கப்பட்டது',
    liveDossier: 'நேரலை ஆவணம்',
    viewSchedule: 'திட்டத்தைக் காண்க',
    openDossierButton: 'ஆவணத்தைத் திறக்கவும்',
    phase2IngestionTitle: 'கட்டம் 2 காப்பகப் பதிவு',
    phase2IngestionDesc: 'தேசிய டிஜிட்டல் பாரம்பரிய ஆணை 2026-ன் கீழ் 3D ஸ்கேன் திட்டமிடப்பட்டுள்ளது.',
    heritageDossierTitle: 'பாரம்பரிய டிஜிட்டல் ஆவணம்',
    govtOfIndia: 'இந்திய அரசு',
    periodLabel: 'காலம்',
    patronLabel: 'ஆதரவு அரசர்',
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
    tierAudio: 'ஆடியோ வழிகாட்டி',
    tier3DTwin: '3D மாதிரி',
    tierStrategy: 'பாதுகாப்பு',
    historicalSignificanceTitle: 'வரலாற்று மற்றும் கட்டடக்கலை முக்கியத்துவம்',
    chronologicalMilestonesTitle: 'வரலாற்று முக்கிய நிகழ்வுகள்',
    dimensionalEngineeringTitle: 'அளவீட்டு மற்றும் பொருள் பொறியியல்',
    structuralJoinerySystemTitle: 'கட்டமைப்பு பொறியியல் சுருக்கம்',
    keyArchitecturalElementsTitle: 'முக்கிய கட்டடக்கலை கூறுகள்',
    photogrammetricGalleryTitle: 'உயர்தர புகைப்பட தொகுப்பு',
    preservationMonitoringTitle: 'டிஜிட்டல் பாதுகாப்பு மற்றும் சுற்றுச்சூழல் கண்காணிப்பு',
    threatsTitle: 'கட்டமைப்பு அச்சுறுத்தல்கள்',
    mitigationTitle: 'ஏஎஸ்ஐ பாதுகாப்பு நடவடிக்கைகள்',
    digitalRedundancyTitle: 'டிஜிட்டல் பாதுகாப்பு ஒப்பந்தம்',
    heightLabel: 'உயரம்',
    baseAreaLabel: 'அடித்தளம்',
    materialLabel: 'முக்கிய கல்',
    styleLabel: 'பாணி',
    voiceArchiveTitle: 'குரல் காப்பகம்',
    officialNarration: 'அதிகாரப்பூர்வ உரை',
    officialAudioGuide: 'அதிகாரப்பூர்வ ஆடியோ வழிகாட்டி',
    sentenceOf: 'வரி',
    sectionOf: 'பிரிவு',
    percentComplete: 'முடிந்தது',
    interactiveTranscriptTitle: 'ஊடாடும் ஆடியோ உரை',
    activeSpeaking: '● ஒலிக்கிறது',
    speakingLabel: '● ஒலிக்கிறது',
    selectedLabel: '● தேர்ந்தெடுக்கப்பட்டது',
    voiceSynthesizerLabel: 'அதிகாரப்பூர்வ குரல் தொகுப்பி:',
    spatialARExplorerTitle: 'முப்பரிமாண ஏஆர் எக்ஸ்ப்ளோரர்',
    augmentedRealityView: 'ஆக்மென்டட் ரியாலிட்டி காட்சி',
    arExplorerDesc: 'எந்த செயலியும் இல்லாமல் கேமரா மூலம் 3D நினைவுச்சின்னங்களை உங்கள் முன் காணும் வசதி.',
    selectTargetModel: 'மாதிரியைத் தேர்ந்தெடுக்கவும்',
    targetHeritageModel: 'இலக்கு மாதிரி',
    universalPipelineDesc: 'அனைத்து தேசிய வட்டங்களிலும் உடனடியாக காட்சிப்படுத்த யுனிவர்சல் ஏஆர் மார்க்கருடன் இணைக்கப்பட்டுள்ளது.',
    launchCameraARView: 'கேமரா ஏஆர் காட்சியைத் தொடங்கவும்',
    viewPrintMarker: 'ஏஆர் டிராக்கிங் மார்க்கரைக் காண்க / அச்சிடுங்கள்',
    openInBrowserAR: 'உலாவியில் நேரடி வெப்ஏஆர்-ஐ திறக்கவும்',
    openInBrowserARSub: 'எளிதான சோதனைக்கான பிரத்யேக ஸ்கேனர்',
    alignMarkerHUD: 'குறிப்பானை திரையில் சீரமைக்கவும்',
    finishARExploration: 'ஏஆர் பார்வையை முடிக்கவும்',
    exitARButton: 'ஏஆர்-லிருந்து வெளியேறு',
    trustPortalTitle: 'தேசிய நம்பிக்கை மற்றும் நிர்வாக தளம்',
    trustPortalSubtitle: 'இறையாண்மை மேகம், மொழி அமைப்புகள் & பாரம்பரிய திட்டம்',
    sovereignCitizenId: 'குடிமகன் அடையாள எண்',
    activeStatus: 'செயலில் உள்ளது',
    verifiedRecordBadge: '100% சரிபார்க்கப்பட்டது',
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
    faqs: [
      {
        q: 'நினைவுச்சின்னங்களின் 3D மாதிரிகள் எவ்வாறு ஸ்கேன் செய்யப்படுகின்றன?',
        a: 'ஒவ்வொரு நினைவுச்சின்னமும் லேசர் ஸ்கேனிங் (TLS) மற்றும் ட்ரோன்கள் மூலம் 5,000 க்கும் மேற்பட்ட படங்களிலிருந்து துல்லியமான 3D மாதிரியாக உருவாக்கப்படுகிறது.'
      },
      {
        q: 'சமஸ்கிருதிசேது யுனெஸ்கோ விதிகளைப் பின்பற்றுகிறதா?',
        a: 'ஆம், சமஸ்கிருதிசேது யுனெஸ்கோ டிஜிட்டல் பாரம்பரிய சாசனம் 2003 பிரிவு 3-ஐ முழுமையாகப் பின்பற்றுகிறது.'
      },
      {
        q: 'இதை எளிய மொபைல் போன்களில் பார்க்க முடியுமா?',
        a: 'ஆம்! எந்த செயலியும் தரவிறக்கம் செய்யாமல் நேரடியாக மொபைல் உலாவியில் பார்க்கலாம்.'
      },
      {
        q: 'டிஜிட்டல் தரவுகளின் பாதுகாப்பு எவ்வாறு உறுதி செய்யப்படுகிறது?',
        a: 'ஒவ்வொரு மாதிரியும் SHA-256 கிரிப்டோகிராஃபிக் ஹாஷ் மூலம் பாதுகாக்கப்பட்டு தேசிய தரவு மையத்தில் சேமிக்கப்படுகிறது.'
      },
      {
        q: 'மாநில தொல்பொருள் துறைகள் எவ்வாறு இணைக்கப்பட்டுள்ளன?',
        a: 'தமிழ்நாடு, மகாராஷ்டிரா, கர்நாடகா போன்ற மாநில தொல்பொருள் துறைகள் நேரடியாக சரிபார்க்கப்பட்ட பதிவுகளை வழங்குகின்றன.'
      }
    ],
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
