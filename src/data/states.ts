export interface StateHeritage {
  id: string;
  name: string;
  hindiName: string;
  collectionName: string;
  monumentCount: number;
  featuredSite: string;
  authority: string;
  coverImage: string;
  sites: {
    id: string;
    name: string;
    location: string;
    period: string;
    unescoStatus: string;
    isFullyArchived: boolean;
    image: string;
    description: string;
  }[];
}

export const STATES_DATA: StateHeritage[] = [
  {
    id: 'karnataka',
    name: 'Karnataka',
    hindiName: 'कर्नाटक',
    collectionName: 'Vijayanagara & Hoysala Heritage Registry',
    monumentCount: 4,
    featuredSite: 'Stone Chariot, Hampi',
    authority: 'Archaeological Survey of India (Hampi Circle)',
    coverImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c3e?q=80&w=1000&auto=format&fit=crop',
    sites: [
      {
        id: 'stone-chariot',
        name: 'Stone Chariot (Vittala Temple)',
        location: 'Hampi, Bellary',
        period: '16th Century CE',
        unescoStatus: 'UNESCO Site #356',
        isFullyArchived: true,
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c3e?q=80&w=1000&auto=format&fit=crop',
        description: 'Monolithic granite Garuda shrine engineered with rotating wheels and interlocking stone joinery.'
      },
      {
        id: 'virupaksha-temple',
        name: 'Virupaksha Temple',
        location: 'Hampi, Bellary',
        period: '7th–16th Century CE',
        unescoStatus: 'UNESCO Site #356',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
        description: 'Sacred active sanctuary dedicated to Lord Shiva with an iconic 50-meter eastern Gopuram tower.'
      },
      {
        id: 'lotus-mahal',
        name: 'Lotus Mahal',
        location: 'Zenana Enclosure, Hampi',
        period: '16th Century CE',
        unescoStatus: 'UNESCO Site #356',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1000&auto=format&fit=crop',
        description: 'Indo-Islamic secular pavilion built with multi-layered lobed arches and natural terracotta cooling pipes.'
      },
      {
        id: 'hoysaleswara-temple',
        name: 'Hoysaleswara Temple',
        location: 'Halebidu, Hassan',
        period: '12th Century CE',
        unescoStatus: 'UNESCO Site #1670',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop',
        description: 'Chloritic schist soapstone temple renowned for intricate friezes of deities, celestial dancers, and elephants.'
      }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    hindiName: 'महाराष्ट्र',
    collectionName: 'Maratha Forts & Rock-Cut Shrines Registry',
    monumentCount: 4,
    featuredSite: 'Raigad Fort',
    authority: 'Directorate of Archaeology & Museums, Maharashtra',
    coverImage: 'https://images.unsplash.com/photo-1626014303757-656c5354924c?q=80&w=1000&auto=format&fit=crop',
    sites: [
      {
        id: 'raigad-fort',
        name: 'Raigad Fort (Capital of Chhatrapati Shivaji Maharaj)',
        location: 'Mahad, Raigad',
        period: '17th Century CE',
        unescoStatus: 'Tentative UNESCO List',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1626014303757-656c5354924c?q=80&w=1000&auto=format&fit=crop',
        description: 'Impregnable hill fortress situated at 2,700 ft, coronation seat of the Maratha Empire.'
      },
      {
        id: 'ajanta-caves',
        name: 'Ajanta Caves',
        location: 'Chhatrapati Sambhajinagar',
        period: '2nd BCE – 5th CE',
        unescoStatus: 'UNESCO Site #242',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop',
        description: '30 rock-cut Buddhist cave monuments featuring masterwork murals and fresco paintings.'
      },
      {
        id: 'sindhudurg-fort',
        name: 'Sindhudurg Sea Fort',
        location: 'Malvan, Konkan',
        period: '1664 CE',
        unescoStatus: 'Tentative UNESCO List',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop',
        description: 'Engineering marvel ocean bastion built on an offshore island with foundation stones fixed in molten lead.'
      },
      {
        id: 'ellora-caves',
        name: 'Kailasa Temple (Ellora Cave 16)',
        location: 'Chhatrapati Sambhajinagar',
        period: '8th Century CE',
        unescoStatus: 'UNESCO Site #243',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
        description: 'Largest single monolithic rock excavation in the world, carved vertically top-down from volcanic basalt.'
      }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    hindiName: 'तमिलनाडु',
    collectionName: 'Great Living Chola Temples & Pallava Registry',
    monumentCount: 3,
    featuredSite: 'Brihadisvara Temple, Thanjavur',
    authority: 'Archaeological Survey of India (Chennai Circle)',
    coverImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
    sites: [
      {
        id: 'brihadisvara-temple',
        name: 'Brihadisvara Temple',
        location: 'Thanjavur',
        period: '1010 CE',
        unescoStatus: 'UNESCO Site #250',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
        description: 'Magnificent 216-foot granite Vimana constructed under Raja Raja Chola I with an 80-tonne monolithic cupola.'
      },
      {
        id: 'shore-temple',
        name: 'Shore Temple',
        location: 'Mahabalipuram',
        period: '8th Century CE',
        unescoStatus: 'UNESCO Site #249',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop',
        description: 'Dravidian structural rock temple perched directly on the Bay of Bengal coastline built under Narasimhavarman II.'
      },
      {
        id: 'meenakshi-temple',
        name: 'Meenakshi Amman Temple',
        location: 'Madurai',
        period: '14th–17th Century CE',
        unescoStatus: 'National Monument Registry',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop',
        description: 'Historic Hindu temple with 14 towering gopurams adorned with thousands of colorful stucco sculptures.'
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    hindiName: 'राजस्थान',
    collectionName: 'Hill Forts & Rajput Palace Registry',
    monumentCount: 3,
    featuredSite: 'Amer Fort, Jaipur',
    authority: 'Archaeological Survey of India (Jaipur Circle)',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000&auto=format&fit=crop',
    sites: [
      {
        id: 'amer-fort',
        name: 'Amer Fort & Sheesh Mahal',
        location: 'Amer, Jaipur',
        period: '16th Century CE',
        unescoStatus: 'UNESCO Site #247',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000&auto=format&fit=crop',
        description: 'Red sandstone and marble palace fortress known for its concave mirror-inlaid Sheesh Mahal.'
      },
      {
        id: 'hawa-mahal',
        name: 'Hawa Mahal (Palace of Winds)',
        location: 'Jaipur',
        period: '1799 CE',
        unescoStatus: 'UNESCO Site #1470',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1000&auto=format&fit=crop',
        description: 'Five-story pink honeycomb facade containing 953 intricate jharokhas engineered for cross-ventilation.'
      },
      {
        id: 'chittorgarh-fort',
        name: 'Chittorgarh Fort',
        location: 'Chittorgarh',
        period: '7th Century CE',
        unescoStatus: 'UNESCO Site #247',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop',
        description: 'Largest fort in India spanning 700 acres, iconic symbol of Rajput valor, featuring the 9-story Vijay Stambha.'
      }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    hindiName: 'गुजरात',
    collectionName: 'Māru-Gurjara & Stepwell Architecture Registry',
    monumentCount: 3,
    featuredSite: 'Rani ki Vav, Patan',
    authority: 'Archaeological Survey of India (Vadodara Circle)',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop',
    sites: [
      {
        id: 'rani-ki-vav',
        name: 'Rani ki Vav (The Queen’s Stepwell)',
        location: 'Patan',
        period: '11th Century CE',
        unescoStatus: 'UNESCO Site #922',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop',
        description: 'Subterranean stepwell designed as an inverted temple with seven levels of sculpted stone panels.'
      },
      {
        id: 'sun-temple-modhera',
        name: 'Sun Temple Modhera',
        location: 'Modhera, Mehsana',
        period: '1026 CE',
        unescoStatus: 'Tentative UNESCO List',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop',
        description: 'Solanki-era solar shrine with the stepped Surya Kund water reservoir containing 108 miniature shrines.'
      },
      {
        id: 'somnath-temple',
        name: 'Somnath Temple',
        location: 'Prabhas Patan, Saurashtra',
        period: 'Ancient–1951 CE',
        unescoStatus: 'National Sacred Shrine Registry',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1600100397608-f010f4439c3e?q=80&w=1000&auto=format&fit=crop',
        description: 'First of the twelve Jyotirlinga shrines of Shiva, located on the Arabian Sea coast.'
      }
    ]
  },
  {
    id: 'odisha',
    name: 'Odisha',
    hindiName: 'ओडिशा',
    collectionName: 'Kalinga Sacred Temple Registry',
    monumentCount: 2,
    featuredSite: 'Konark Sun Temple',
    authority: 'Archaeological Survey of India (Bhubaneswar Circle)',
    coverImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop',
    sites: [
      {
        id: 'konark-sun-temple',
        name: 'Konark Sun Temple (Black Pagoda)',
        location: 'Konark, Puri',
        period: '13th Century CE',
        unescoStatus: 'UNESCO Site #246',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop',
        description: 'Gigantic solar chariot temple carved with 24 colossal sundial wheels pulled by seven horses.'
      },
      {
        id: 'jagannath-temple',
        name: 'Jagannath Temple Puri',
        location: 'Puri',
        period: '12th Century CE',
        unescoStatus: 'National Sacred Shrine Registry',
        isFullyArchived: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop',
        description: 'Monumental Kalinga temple famous for its annual Ratha Yatra chariot festival and sacred kitchen.'
      }
    ]
  }
];

export const ISSUING_AUTHORITIES = [
  {
    name: 'Archaeological Survey of India (ASI)',
    badge: 'Primary Custodian',
    recordsCount: '3,690+ Monuments',
    verified: true
  },
  {
    name: 'Ministry of Culture, Govt. of India',
    badge: 'National Mandate',
    recordsCount: '28 States & 8 UTs',
    verified: true
  },
  {
    name: 'UNESCO World Heritage Centre',
    badge: 'Global Charter',
    recordsCount: '42 World Heritage Sites',
    verified: true
  },
  {
    name: 'National Monuments Authority (NMA)',
    badge: 'Regulatory Body',
    recordsCount: 'Heritage Bye-laws Ingested',
    verified: true
  }
];
