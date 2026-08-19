export type LanguageCode = 'en' | 'hi' | 'mr' | 'kn' | 'ta';

export interface TranslationDict {
  appName: string;
  appSubtitle: string;
  greetingCitizen: string;
  sovereignActive: string;
  recordsSynced: string;
  preservedRecords: string;
  stateArchives: string;
  centralCustodians: string;
  viewAll: string;
  searchPlaceholder: string;
  issuedRecordsTitle: string;
  launchAR: string;
  viewDossier: string;
  homeTab: string;
  searchTab: string;
  explorerTab: string;
  menuTab: string;
  faqTitle: string;
  aboutTitle: string;
  helpline: string;
  verifiedBy: string;
  languageName: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDict> = {
  en: {
    appName: 'SanskritiSetu',
    appSubtitle: 'National Digital Heritage Cloud',
    greetingCitizen: 'Hi Citizen',
    sovereignActive: 'Sovereign Cloud Active',
    recordsSynced: '3,690 National Records Synced',
    preservedRecords: 'Preserved Heritage Records',
    stateArchives: 'State Government Archives',
    centralCustodians: 'Central Custodians',
    viewAll: 'View All',
    searchPlaceholder: 'Search monuments, states, or periods...',
    issuedRecordsTitle: 'Issued Heritage Records',
    launchAR: 'Launch Spatial 3D & AR Explorer',
    viewDossier: 'View 7-Tier Archival Records',
    homeTab: 'Home',
    searchTab: 'Search',
    explorerTab: 'Explorer',
    menuTab: 'Menu',
    faqTitle: 'Frequently Asked Questions (FAQ)',
    aboutTitle: 'About SanskritiSetu Mission',
    helpline: 'National Heritage Helpdesk: 1800-11-4040',
    verifiedBy: 'SanskritiSetu Verified',
    languageName: 'English'
  },
  hi: {
    appName: 'संस्कृतिसेतु',
    appSubtitle: 'राष्ट्रीय डिजिटल धरोहर क्लाउड',
    greetingCitizen: 'नमस्ते नागरिक',
    sovereignActive: 'संप्रभु क्लाउड सक्रिय',
    recordsSynced: '३,६९० राष्ट्रीय अभिलेख सिंक्रनाइज़्ड',
    preservedRecords: 'संरक्षित धरोहर अभिलेख',
    stateArchives: 'राज्य सरकार अभिलेखागार',
    centralCustodians: 'केंद्रीय संरक्षक संस्थाएं',
    viewAll: 'सभी देखें',
    searchPlaceholder: 'स्मारक, राज्य या कालखंड खोजें...',
    issuedRecordsTitle: 'जारी किए गए धरोहर अभिलेख',
    launchAR: 'स्थानिक 3D और एआर एक्सप्लोरर शुरू करें',
    viewDossier: '7-स्तरीय अभिलेख देखें',
    homeTab: 'होम',
    searchTab: 'खोजें',
    explorerTab: 'एआर दृश्य',
    menuTab: 'मेनू',
    faqTitle: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    aboutTitle: 'संस्कृतिसेतु राष्ट्रीय मिशन के बारे में',
    helpline: 'राष्ट्रीय धरोहर सहायता केंद्र: 1800-11-4040',
    verifiedBy: 'संस्कृतिसेतु सत्यापित',
    languageName: 'हिंदी'
  },
  mr: {
    appName: 'संस्कृतीसेतू',
    appSubtitle: 'राष्ट्रीय डिजिटल वारसा क्लाउड',
    greetingCitizen: 'नमस्कार नागरिक',
    sovereignActive: 'सार्वभौम क्लाउड सक्रिय',
    recordsSynced: '३,६९० राष्ट्रीय नोंदी सिंक',
    preservedRecords: 'संरक्षित वारसा नोंदी',
    stateArchives: 'राज्य शासन पुराभिलेख',
    centralCustodians: 'केंद्रीय पालक संस्था',
    viewAll: 'सर्व पहा',
    searchPlaceholder: 'स्मारके, राज्ये किंवा कालखंड शोधा...',
    issuedRecordsTitle: 'जारी केलेल्या वारसा नोंदी',
    launchAR: 'त्रिमितीय 3D आणि एआर एक्सप्लोरर उघडा',
    viewDossier: '७-स्तरीय पुराभिलेख पहा',
    homeTab: 'मुख्यपृष्ठ',
    searchTab: 'शोध',
    explorerTab: 'एआर दृश्य',
    menuTab: 'मेनू',
    faqTitle: 'नेहमी विचारले जाणारे प्रश्न (FAQ)',
    aboutTitle: 'संस्कृतीसेतू राष्ट्रीय मोहिमेविषयी',
    helpline: 'राष्ट्रीय वारसा हेल्पलाइन: 1800-11-4040',
    verifiedBy: 'संस्कृतीसेतू प्रमाणित',
    languageName: 'मराठी'
  },
  kn: {
    appName: 'ಸಂಸ್ಕೃತಿಸೇತು',
    appSubtitle: 'ರಾಷ್ಟ್ರೀಯ ಡಿಜಿಟಲ್ ಪರಂಪರೆ ಮೇಘ',
    greetingCitizen: 'ನಮಸ್ಕಾರ ನಾಗರಿಕರೆ',
    sovereignActive: 'ಸಾರ್ವಭೌಮ ಮೇಘ ಸಕ್ರಿಯ',
    recordsSynced: '೩,೬೯೦ ರಾಷ್ಟ್ರೀಯ ದಾಖಲೆಗಳು ಸಿಂಕ್',
    preservedRecords: 'ಸಂರಕ್ಷಿತ ಪರಂಪರೆಯ ದಾಖಲೆಗಳು',
    stateArchives: 'ರಾಜ್ಯ ಸರ್ಕಾರದ ದಾಖಲೆಗಳು',
    centralCustodians: 'ಕೇಂದ್ರ ರಕ್ಷಕರು',
    viewAll: 'ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ',
    searchPlaceholder: 'ಸ್ಮಾರಕಗಳು, ರಾಜ್ಯಗಳು ಅಥವಾ ಅವಧಿಗಳನ್ನು ಹುಡುಕಿ...',
    issuedRecordsTitle: 'ನೀಡಲಾದ ಪರಂಪರೆ ದಾಖಲೆಗಳು',
    launchAR: 'ಪ್ರಾದೇಶಿಕ 3D ಮತ್ತು AR ವೀಕ್ಷಕ',
    viewDossier: '೭-ಹಂತದ ದಾಖಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    homeTab: 'ಮುಖಪುಟ',
    searchTab: 'ಹುಡುಕು',
    explorerTab: 'ಎಆರ್ ದೃಶ್ಯ',
    menuTab: 'ಮೆನು',
    faqTitle: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು (FAQ)',
    aboutTitle: 'ಸಂಸ್ಕೃತಿಸೇತು ಮಿಷನ್ ಬಗ್ಗೆ',
    helpline: 'ರಾಷ್ಟ್ರೀಯ ಪರಂಪರೆ ಸಹಾಯವಾಣಿ: 1800-11-4040',
    verifiedBy: 'ಸಂಸ್ಕೃತಿಸೇತು ಪರಿಶೀಲಿಸಲಾಗಿದೆ',
    languageName: 'ಕನ್ನಡ'
  },
  ta: {
    appName: 'சமஸ்கிருதிசேது',
    appSubtitle: 'தேசிய டிஜிட்டல் பாரம்பரிய மேகம்',
    greetingCitizen: 'வணக்கம் குடிமகனே',
    sovereignActive: 'இறையாண்மை மேகம் செயலில் உள்ளது',
    recordsSynced: '3,690 தேசிய பதிவுகள் இணைக்கப்பட்டுள்ளன',
    preservedRecords: 'பாதுகாக்கப்பட்ட பாரம்பரிய பதிவுகள்',
    stateArchives: 'மாநில அரசு காப்பகங்கள்',
    centralCustodians: 'மத்திய பாதுகாவலர்கள்',
    viewAll: 'அனைத்தையும் பார்க்க',
    searchPlaceholder: 'நினைவுச்சின்னங்கள், மாநிலங்களை தேடுங்கள்...',
    issuedRecordsTitle: 'வெளியிடப்பட்ட பாரம்பரிய பதிவுகள்',
    launchAR: '3D மற்றும் ஏஆர் எக்ஸ்ப்ளோரர்',
    viewDossier: '7-அடுக்கு காப்பக பதிவுகளைக் காண்க',
    homeTab: 'முகப்பு',
    searchTab: 'தேடு',
    explorerTab: 'ஏஆர் காட்சி',
    menuTab: 'மெனு',
    faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)',
    aboutTitle: 'சமஸ்கிருதிசேது திட்டம் பற்றி',
    helpline: 'தேசிய பாரம்பரிய உதவி மையம்: 1800-11-4040',
    verifiedBy: 'சமஸ்கிருதிசேது சரிபார்க்கப்பட்டது',
    languageName: 'தமிழ்'
  }
};
