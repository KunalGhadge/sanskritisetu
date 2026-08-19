export interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
  significance: string;
}

export interface ArchitecturalFeature {
  title: string;
  category: string;
  description: string;
  dimensions?: string;
  material: string;
  iconName?: string;
}

export interface PhotoAsset {
  id: string;
  title: string;
  category: 'historical' | 'present' | 'aerial' | 'detail';
  year: string;
  credit: string;
  url: string;
  description: string;
}

export interface MonumentData {
  id: string;
  name: string;
  hindiName: string;
  tagline: string;
  location: {
    site: string;
    district: string;
    state: string;
    coordinates: string;
  };
  period: string;
  century: string;
  empire: string;
  patronKing: string;
  status: string;
  unescoId: string;
  unescoYear: string;
  heroImage: string;
  glbModelPath: string;
  markerPatternPath: string;
  hasLiveAR: boolean;
  shortOverview: string;
  fullOverview: string[];
  keyStats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  timeline: HistoricalEvent[];
  architecturalArchive: {
    summary: string;
    features: ArchitecturalFeature[];
    specifications: {
      height: string;
      baseArea: string;
      primaryMaterial: string;
      style: string;
      orientation: string;
    };
  };
  photoArchive: PhotoAsset[];
  audioGuide: {
    duration: string;
    narratorEn: string;
    narratorHi: string;
    transcriptEn: string[];
    transcriptHi: string[];
  };
  threeDArchive: {
    fileType: string;
    polygonCount: string;
    textureResolution: string;
    scanTechnique: string;
    fileSize: string;
    archivalDate: string;
    checksum: string;
    status: string;
  };
  preservationStrategy: {
    threats: string[];
    objectives: string[];
    mitigationActions: string[];
    unescoCompliance: string;
    digitalRedundancy: string;
  };
}

export const MONUMENTS: MonumentData[] = [
  {
    id: 'stone-chariot',
    name: 'Stone Chariot (Vittala Temple)',
    hindiName: 'प्रस्तर रथ (विट्ठल मंदिर, हम्पी)',
    tagline: 'An iconic monolithic shrine dedicated to Garuda within the sacred Vijaya Vittala Complex.',
    location: {
      site: 'Vijaya Vittala Temple Complex',
      district: 'Vijayanagara (Bellary)',
      state: 'Karnataka, India',
      coordinates: '15.3188° N, 76.4767° E'
    },
    period: '16th Century CE',
    century: '16th century',
    empire: 'Vijayanagara Empire',
    patronKing: 'King Krishnadevaraya (1509–1529 CE)',
    status: 'UNESCO World Heritage Site',
    unescoId: 'UNESCO Site #356',
    unescoYear: '1986',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f4439c3e?auto=format&fit=crop&w=1600&q=80',
    glbModelPath: '/ar/assets/asset.glb',
    markerPatternPath: '/ar/assets/marker.patt',
    hasLiveAR: true,
    shortOverview: 'The Stone Chariot of Hampi is one of India\'s most celebrated architectural wonders, representing the zenith of Vijayanagara granite craftsmanship.',
    fullOverview: [
      'The Stone Chariot is not actually a single carved rock, but a masterfully assembled shrine constructed of intricately interlocking granite slabs.',
      'Dedicated to Garuda, the celestial eagle and divine mount of Lord Vishnu, this monument stands as the axial focal point facing the grand Vittala Temple sanctum.',
      'Four monumental wheels adorned with intricate floral rosettes flank the shrine base, originally engineered to rotate freely on granite axles.'
    ],
    keyStats: [
      { label: 'Built Under', value: 'Krishnadevaraya', sublabel: 'Vijayanagara Golden Age' },
      { label: 'Year of Inscription', value: '1986 CE', sublabel: 'UNESCO World Heritage' },
      { label: 'Primary Stone', value: 'Deccan Granite', sublabel: 'Mortarless Interlocking' },
      { label: 'Dedicated Deity', value: 'Garuda (Vahana)', sublabel: 'Facing Vishnu Sanctum' }
    ],
    timeline: [
      {
        year: '1336 CE',
        title: 'Foundation of Vijayanagara Empire',
        description: 'Founded by brothers Harihara I and Bukka Raya I of the Sangama Dynasty on the banks of the Tungabhadra River.',
        significance: 'Origin Era'
      },
      {
        year: '1513 CE',
        title: 'Construction of the Stone Chariot',
        description: 'Commissioned under the golden reign of King Krishnadevaraya following his victorious Konark campaign in Odisha, inspired by the Konark Sun Temple chariot.',
        significance: 'Consecration'
      },
      {
        year: '1565 CE',
        title: 'Battle of Talikota & Abandonment',
        description: 'The imperial capital of Vijayanagara fell after the coalition of Deccan Sultanates defeated Rama Raya, leading to extensive sacking of the metropolis.',
        significance: 'Historical Disruption'
      },
      {
        year: '1986 CE',
        title: 'UNESCO World Heritage Inscription',
        description: 'Hampi recognized as a UNESCO World Heritage Site (#356) for its exceptional universal cultural and artistic value.',
        significance: 'Global Recognition'
      },
      {
        year: '2026 CE',
        title: 'SanskritiSetu Sovereign Digital Twin Preserved',
        description: 'Comprehensive 3D digital twin, multi-spectral photography, and spatial augmented reality archive recorded for eternity.',
        significance: 'Immutable Preservation'
      }
    ],
    architecturalArchive: {
      summary: 'The Stone Chariot stands 4.5 meters in height upon a rectangular carved plinth. It showcases late Vijayanagara Dravidian architecture characterized by refined granite masonry, mythical Yali guardians, and floral wheel rims.',
      features: [
        {
          title: 'Interlocking Granite Joinery',
          category: 'Structural Joinery',
          description: 'Engineered with disguised interlocking granite slabs giving the sublime visual illusion of being carved from a singular colossal boulder.',
          dimensions: 'Height: 4.5m, Base: 4.2m × 3.6m',
          material: 'Fine-grained Grey and Pink Deccan Granite',
          iconName: 'Layers'
        },
        {
          title: 'Kinetic 16-Spoke Stone Wheels',
          category: 'Mechanical / Kinetic Feature',
          description: 'Four monumental wheels featuring 16-spoke concentric floral hubs and lotus petal fringes, engineered to rotate freely upon granite axles.',
          dimensions: 'Diameter: 1.2m each wheel',
          material: 'Carved Monolithic Granite',
          iconName: 'RotateCw'
        },
        {
          title: 'Frontal Guardian Elephants',
          category: 'Sculptural Element',
          description: 'Pair of lifelike stone elephants stationed at the frontal ramp, positioned during early colonial consolidation to flank the entrance stairway.',
          dimensions: 'Length: 1.8m each',
          material: 'Sculpted Granite',
          iconName: 'Shield'
        },
        {
          title: 'Garuda Sanctum Cella',
          category: 'Sacred Architecture',
          description: 'Recessed cella designed to house the vahana (carrier) Garuda facing Lord Vishnu, topped by an ornate multi-tiered Dravidian entablature.',
          dimensions: 'Interior Chamber: 2.1m × 1.8m',
          material: 'Granite & Historic Brick Superstructure Remnant',
          iconName: 'Landmark'
        },
        {
          title: 'Continuous Narrative Plinth Reliefs',
          category: 'Bas-Relief Friezes',
          description: 'The plinth platform is circumscribed with continuous narrative bands showing war horses, royal soldiers, court dancers, and celestial musicians.',
          dimensions: 'Plinth Perimeter: 15.6m',
          material: 'Low-relief Basaltic Granite Carving',
          iconName: 'Eye'
        }
      ],
      specifications: {
        height: '4.5 meters (14.8 feet)',
        baseArea: '4.2m × 3.6m',
        primaryMaterial: 'Granite (Fine-grained Grey and Pink)',
        style: 'Late Vijayanagara Dravidian Temple Architecture',
        orientation: 'East-facing towards the temple Maha-Mandapa'
      }
    },
    photoArchive: [
      {
        id: 'p1',
        title: 'Present-day Golden Hour Capture',
        category: 'present',
        year: '2025',
        credit: 'ASI National Archives / SanskritiSetu HD photogrammetry',
        url: 'https://images.unsplash.com/photo-1600100397608-f010f4439c3e?auto=format&fit=crop&w=1200&q=80',
        description: 'The Stone Chariot bathed in the warm sunset hues of the boulder-strewn Hampi landscape.'
      },
      {
        id: 'p2',
        title: 'Vittala Temple Complex Courtyard View',
        category: 'present',
        year: '2024',
        credit: 'UNESCO World Heritage Documentation',
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
        description: 'Wide perspective showing the axial alignment of the chariot directly facing the open Maha Mantapa.'
      },
      {
        id: 'p3',
        title: 'Detail of the Carved Stone Wheel & Spokes',
        category: 'detail',
        year: '2025',
        credit: 'Digital Heritage Photogrammetry Lab',
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        description: 'Macro inspection of the central rosette hub and radial ornamental spokes carved on granite.'
      },
      {
        id: 'p4',
        title: 'Historical Photographic Survey (Alexander Greenlaw Archive)',
        category: 'historical',
        year: '1856',
        credit: 'British Library / Archaeological Survey of India (Historical Plate)',
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
        description: 'One of the earliest recorded photographic exposures of the Stone Chariot with its brick tower remnants.'
      },
      {
        id: 'p5',
        title: 'Photogrammetric Spatial Point-Cloud Reconstruction',
        category: 'aerial',
        year: '2026',
        credit: 'SanskritiSetu LiDAR & Photogrammetry Division',
        url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
        description: 'Sub-millimeter aerial photogrammetry mesh capturing the topological summit and cornice moldings.'
      }
    ],
    audioGuide: {
      duration: '1 min 45 sec',
      narratorEn: 'Dr. Ananya Rao (Senior Heritage Conservator, ASI)',
      narratorHi: 'डॉ. राघव शर्मा (राष्ट्रीय सांस्कृतिक अभिलेखागार)',
      transcriptEn: [
        'Welcome to SanskritiSetu’s official digital preservation audio archive for the Stone Chariot of Hampi.',
        'Standing gracefully inside the courtyard of the Vijaya Vittala Temple, this 16th-century marvel represents the peak of Vijayanagara architectural genius.',
        'Although it appears carved from a single piece of rock, the chariot was ingeniously assembled with interlocking granite slabs, hiding every joint with intricate friezes.',
        'Dedicated to Garuda, the celestial mount of Lord Vishnu, this monument was inspired by King Krishnadevaraya’s admiration of the Sun Temple in Konark.',
        'Through sub-millimeter 3D scanning and spatial preservation, SanskritiSetu ensures that future generations can explore this heritage in timeless, unblemished detail.'
      ],
      transcriptHi: [
        'संस्कृतिसेतु के आधिकारिक डिजिटल संरक्षण ऑडियो अभिलेखागार में आपका स्वागत है।',
        'हम्पी के विजया विट्ठल मंदिर प्रांगण में स्थित यह प्रस्तर रथ विजयनगर साम्राज्य के शिल्प कौशल का अद्वितीय उदाहरण है।',
        'यह रथ केवल एक पत्थर से नहीं, बल्कि ग्रेनाइट शिलाओं के अद्भुत संयोजन से निर्मित किया गया है, जिसके जोड़ अत्यंत सूक्ष्मता से छिपे हैं।',
        'भगवान विष्णु के वाहन गरुड़ को समर्पित यह रथ राजा कृष्णदेवराय द्वारा कोणार्क के सूर्य मंदिर से प्रेरित होकर बनवाया गया था।',
        'संस्कृतिसेतु के माध्यम से हम इस ऐतिहासिक धरोहर को आने वाली पीढ़ियों के लिए डिजिटल रूप में सुरक्षित रखते हैं।'
      ]
    },
    threeDArchive: {
      fileType: 'GLB (Binary glTF 2.0)',
      polygonCount: '184,200 Triangles',
      textureResolution: '4K PBR (Albedo, Normal, Roughness, AO)',
      scanTechnique: 'High-Density Terrestrial Photogrammetry & Structured Light Scan',
      fileSize: '10.67 MB',
      archivalDate: 'August 2026',
      checksum: 'SHA256: 9b2d8e4f1a0c3b5e7d9a1c2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a',
      status: 'Permanent Vault Inscription Verified'
    },
    preservationStrategy: {
      threats: [
        'Micro-abrasion and granitic exfoliation caused by windborne quartz particles.',
        'Thermal expansion stress from extreme day-to-night temperature fluctuations in the Deccan Plateau.',
        'Tourist touch friction on wheel axles and elephant trunk bas-reliefs.',
        'Atmospheric moisture ingress during heavy monsoon cycles leading to biogrowth.'
      ],
      objectives: [
        'Establish a sub-millimeter permanent geometric baseline to measure decadal erosion.',
        'Enable remote virtual and augmented education globally without physical site wear.',
        'Provide structural data for precision architectural restoration in the event of natural calamity.',
        'Preserve oral histories, architectural joinery knowledge, and iconographic meanings.'
      ],
      mitigationActions: [
        'Quarterly 3D LiDAR surface variance comparison.',
        'Touch-free digital exploration incentives via SanskritiSetu AR markers.',
        'Controlled micro-grouting of structural fissures by ASI conservators.',
        'Open digital twin access for researchers, architects, and historians worldwide.'
      ],
      unescoCompliance: 'Complies with UNESCO Operational Guidelines for the Implementation of the World Heritage Convention & Charter on the Preservation of Digital Heritage (2003).',
      digitalRedundancy: 'Geographically replicated across 3 national sovereign digital vaults with daily cryptographic integrity verification.'
    }
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    hindiName: 'सूर्य मंदिर, कोणार्क',
    tagline: 'Colossal 13th-century chariot of Surya with 24 monumental wheels and 7 galloping steeds.',
    location: {
      site: 'Konark Coastal Sanctuary',
      district: 'Puri',
      state: 'Odisha, India',
      coordinates: '19.8876° N, 86.0945° E'
    },
    period: '13th Century CE',
    century: '13th century',
    empire: 'Eastern Ganga Dynasty',
    patronKing: 'King Narasimhadeva I (1238–1264 CE)',
    status: 'UNESCO World Heritage Site',
    unescoId: 'UNESCO Site #246',
    unescoYear: '1984',
    heroImage: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1600&q=80',
    glbModelPath: '/ar/assets/asset.glb',
    markerPatternPath: '/ar/assets/marker.patt',
    hasLiveAR: false,
    shortOverview: 'A monumental stone symphony conceived as the grand chariot of Surya, the Sun God, decorated with 24 intricately carved sundial wheels.',
    fullOverview: [
      'The Konark Sun Temple is designed in the shape of a colossal chariot dedicated to the Sun God, Surya.',
      'Constructed from Khondalite rocks, the temple features 24 exquisitely carved wheels that act as precise sundials, capable of calculating time down to the minute.',
      'Seven sculpted stone horses pull the celestial chariot toward the dawn over the Bay of Bengal.'
    ],
    keyStats: [
      { label: 'Era of Origin', value: '13th Century', sublabel: 'Ganga Dynasty' },
      { label: 'Architecture', value: 'Kalinga Style', sublabel: 'Rekha Deula' },
      { label: 'Sundial Wheels', value: '24 Wheels', sublabel: 'Time Calculating' },
      { label: 'Status', value: 'Archived Tier 2', sublabel: 'Catalog In Progress' }
    ],
    timeline: [
      {
        year: '1250 CE',
        title: 'Temple Consecration',
        description: 'Constructed by King Narasimhadeva I on the shores of the Bay of Bengal.',
        significance: 'Epitome of Kalinga stone sculpture and astronomical engineering.'
      },
      {
        year: '1984 CE',
        title: 'UNESCO Inscription',
        description: 'Declared a World Heritage Site for exceptional universal artistic value.',
        significance: 'National preservation priority under ASI.'
      }
    ],
    architecturalArchive: {
      summary: 'Monumental Kalinga temple architecture featuring chlorite and khondalite stonework, with 24 sundials.',
      features: [
        {
          title: '24 Sundial Chariot Wheels',
          category: 'Astronomical Architecture',
          description: 'Each wheel features spokes and rims that calculate time by shadow casting.',
          material: 'Khondalite Stone'
        }
      ],
      specifications: {
        height: '30 meters (Surviving Jagamohana)',
        baseArea: '80m × 50m',
        primaryMaterial: 'Khondalite and Chlorite stone',
        style: 'Kalinga Temple Architecture',
        orientation: 'East facing ocean sunrise'
      }
    },
    photoArchive: [
      {
        id: 'k1',
        title: 'Sun Temple Grand Chariot Wheel',
        category: 'present',
        year: '2025',
        credit: 'ASI Digital Archives',
        url: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1200&q=80',
        description: 'Carved spokes of the 3-meter high sundial wheel.'
      }
    ],
    audioGuide: {
      duration: '1 min 30 sec',
      narratorEn: 'ASI Heritage Bureau',
      narratorHi: 'भारतीय पुरातत्व सर्वेक्षण',
      transcriptEn: ['The Konark Sun Temple represents the supreme height of Kalinga architectural glory...'],
      transcriptHi: ['कोणार्क सूर्य मंदिर कलिंग वास्तुकला की अद्वितीय पराकाष्ठा है...']
    },
    threeDArchive: {
      fileType: 'GLB Photogrammetry Model',
      polygonCount: '210,000 Triangles',
      textureResolution: '4K PBR',
      scanTechnique: 'Drone LiDAR & Terrestrial Scanning',
      fileSize: '14.2 MB',
      archivalDate: 'July 2026',
      checksum: 'SHA256: 4f1a0c3b5e7d9a1c2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d',
      status: 'Tier-2 Preservation Ingested'
    },
    preservationStrategy: {
      threats: ['Saline coastal wind erosion', 'Structural foundation settling'],
      objectives: ['Digital twin archival', 'Sub-surface structural radar mapping'],
      mitigationActions: ['Continuous laser scan monitoring', 'SanskritSetu digital public archive'],
      unescoCompliance: 'Meets UNESCO World Heritage standards.',
      digitalRedundancy: 'Replicated across government cloud nodes.'
    }
  },
  {
    id: 'brihadisvara-temple',
    name: 'Brihadisvara Temple (Thanjavur)',
    hindiName: 'बृहदीश्वर मंदिर, तंजावूर',
    tagline: 'Magnificent 11th-century Chola granite temple crowned by an 80-tonne monolithic cupola.',
    location: {
      site: 'Great Living Chola Temples',
      district: 'Thanjavur',
      state: 'Tamil Nadu, India',
      coordinates: '10.7828° N, 79.1318° E'
    },
    period: '11th Century CE (1010 CE)',
    century: '11th century',
    empire: 'Chola Dynasty',
    patronKing: 'Emperor Raja Raja Chola I',
    status: 'UNESCO World Heritage Site',
    unescoId: 'UNESCO Site #250',
    unescoYear: '1987',
    heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1600&q=80',
    glbModelPath: '/ar/assets/asset.glb',
    markerPatternPath: '/ar/assets/marker.patt',
    hasLiveAR: false,
    shortOverview: 'One of the largest temple complexes in South India, celebrated for its 66-meter high Vimana tower and interlocking granite engineering.',
    fullOverview: [
      'Built by Raja Raja Chola I between 1003 and 1010 CE, Brihadisvara Temple stands as the pinnacle of Dravidian stone architecture.',
      'The entire structure is composed of granite transported from quarries over 50 kilometers away, topped with an 80-tonne single-stone Kumbam (apex dome).'
    ],
    keyStats: [
      { label: 'Built In', value: '1010 CE', sublabel: 'Raja Raja Chola I' },
      { label: 'Vimana Height', value: '66 Meters', sublabel: 'All Granite Tower' },
      { label: 'Dome Mass', value: '80 Tonnes', sublabel: 'Single Monolith' },
      { label: 'Status', value: 'Archived Tier 2', sublabel: 'Preservation Catalog' }
    ],
    timeline: [
      {
        year: '1010 CE',
        title: 'Completion of the Great Temple',
        description: 'Consecrated by Raja Raja Chola I in celebration of Chola naval and imperial triumphs.',
        significance: 'World’s first complete granite temple of this monumental scale.'
      }
    ],
    architecturalArchive: {
      summary: 'Pure granite Dravidian architecture with monumental scale and geometric acoustic design.',
      features: [
        {
          title: 'Monolithic Vimana Apex Dome',
          category: 'Structural Engineering',
          description: 'Single carved granite block weighing approximately 80 tonnes placed atop the 66m tower.',
          material: 'Charnockite Granite'
        }
      ],
      specifications: {
        height: '66 meters',
        baseArea: '240m × 120m complex',
        primaryMaterial: 'Granite',
        style: 'Pure Chola Dravidian Architecture',
        orientation: 'East-facing'
      }
    },
    photoArchive: [
      {
        id: 'b1',
        title: 'Towering Vimana under Azure Sky',
        category: 'present',
        year: '2024',
        credit: 'ASI National Registry',
        url: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=80',
        description: 'The monumental 216-foot granite Vimana seen from the central courtyard.'
      }
    ],
    audioGuide: {
      duration: '1 min 20 sec',
      narratorEn: 'ASI Heritage Bureau',
      narratorHi: 'भारतीय पुरातत्व सर्वेक्षण',
      transcriptEn: ['Brihadisvara Temple is a testament to the supreme naval and architectural power of the Cholas...'],
      transcriptHi: ['बृहदीश्वर मंदिर चोल साम्राज्य की असीम शक्ति और स्थापत्य प्रतिभा का प्रतीक है...']
    },
    threeDArchive: {
      fileType: 'GLB Photogrammetry Model',
      polygonCount: '198,000 Triangles',
      textureResolution: '4K PBR',
      scanTechnique: 'High-Altitude Drone Photogrammetry',
      fileSize: '12.8 MB',
      archivalDate: 'June 2026',
      checksum: 'SHA256: 7d9a1c2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c',
      status: 'Tier-2 Preservation Ingested'
    },
    preservationStrategy: {
      threats: ['Biological growth and lichen on exterior granite', 'Heavy footfall wear'],
      objectives: ['Permanent digital twin creation', 'Structural load stress analysis'],
      mitigationActions: ['Non-invasive digital archiving', 'ASI periodic conservation'],
      unescoCompliance: 'Part of Great Living Chola Temples UNESCO listing.',
      digitalRedundancy: 'Digitally secured across national servers.'
    }
  }
];
