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
  // 1. STONE CHARIOT, HAMPI (KARNATAKA)
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
    heroImage: '/assets/images/stonechariot.jpg',
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
        description: 'Founded by brothers Harihara I and Bukka Raya I on the banks of the Tungabhadra River.',
        significance: 'Origin Era'
      },
      {
        year: '1513 CE',
        title: 'Construction of the Stone Chariot',
        description: 'Commissioned under King Krishnadevaraya following his victorious Konark campaign in Odisha.',
        significance: 'Consecration'
      },
      {
        year: '1565 CE',
        title: 'Battle of Talikota',
        description: 'The imperial capital fell following the Deccan Sultanates victory, leaving the granite chariot intact.',
        significance: 'Historical Disruption'
      },
      {
        year: '1986 CE',
        title: 'UNESCO World Heritage Inscription',
        description: 'Hampi recognized as a UNESCO World Heritage Site (#356) for exceptional artistic value.',
        significance: 'Global Recognition'
      },
      {
        year: '2026 CE',
        title: 'SanskritiSetu Sovereign Digital Twin',
        description: 'Sub-millimeter 3D digital twin, multi-spectral photography, and spatial AR archive recorded.',
        significance: 'Immutable Preservation'
      }
    ],
    architecturalArchive: {
      summary: 'The Stone Chariot stands 4.5 meters in height upon a rectangular carved plinth with kinetic stone wheels and interlocking granite joints.',
      features: [
        {
          title: 'Interlocking Granite Joinery',
          category: 'Structural Joinery',
          description: 'Engineered with disguised interlocking granite slabs giving the illusion of a monolithic boulder.',
          dimensions: 'Height: 4.5m, Base: 4.2m × 3.6m',
          material: 'Fine-grained Grey and Pink Deccan Granite',
          iconName: 'Layers'
        },
        {
          title: 'Kinetic 16-Spoke Stone Wheels',
          category: 'Mechanical Engineering',
          description: 'Four monumental wheels featuring 16-spoke concentric floral hubs, engineered to rotate freely upon granite axles.',
          dimensions: 'Diameter: 1.2m each wheel',
          material: 'Carved Monolithic Granite',
          iconName: 'RotateCw'
        },
        {
          title: 'Frontal Guardian Elephants',
          category: 'Sculptural Element',
          description: 'Pair of stone elephants stationed at the frontal ramp flanking the entrance stairway.',
          dimensions: 'Length: 1.8m each',
          material: 'Sculpted Granite',
          iconName: 'Shield'
        },
        {
          title: 'Garuda Sanctum Cella',
          category: 'Sacred Architecture',
          description: 'Recessed cella designed to house Garuda facing Lord Vishnu, topped by Dravidian entablature.',
          dimensions: 'Interior Chamber: 2.1m × 1.8m',
          material: 'Granite & Historic Brick Remnant',
          iconName: 'Landmark'
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
        credit: 'ASI National Archives / SanskritiSetu HD',
        url: '/assets/images/stonechariot.jpg',
        description: 'The Stone Chariot bathed in warm sunset hues of the boulder-strewn Hampi landscape.'
      },
      {
        id: 'p2',
        title: 'Vittala Temple Complex Courtyard View',
        category: 'present',
        year: '2024',
        credit: 'UNESCO World Heritage Documentation',
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
        description: 'Wide perspective showing the axial alignment of the chariot facing the Maha Mantapa.'
      },
      {
        id: 'p3',
        title: 'Detail of Carved Stone Wheel & Spokes',
        category: 'detail',
        year: '2025',
        credit: 'Digital Heritage Photogrammetry Lab',
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        description: 'Macro inspection of central rosette hub and radial ornamental spokes.'
      },
      {
        id: 'p4',
        title: 'Historical Photographic Survey',
        category: 'historical',
        year: '1856',
        credit: 'British Library / Archaeological Survey of India',
        url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
        description: 'Historical exposure of the Stone Chariot with its brick tower remnants.'
      }
    ],
    audioGuide: {
      duration: '1 min 45 sec',
      narratorEn: 'Dr. Ananya Rao (Senior Heritage Conservator, ASI)',
      narratorHi: 'डॉ. राजेश शर्मा (वरिष्ठ पुरातत्वविद्)',
      transcriptEn: [
        'Welcome to the sacred Vijaya Vittala Temple Complex in Hampi.',
        'Standing before you is the iconic Stone Chariot, consecrated in the 16th century by Emperor Krishnadevaraya.',
        'Though it appears carved from a single colossal boulder, it is masterfully engineered from interlocking granite slabs.',
        'Notice the four stone wheels adorned with concentric floral spokes, which once rotated upon granite axles.',
        'This shrine was built for Garuda, the celestial mount of Lord Vishnu, facing the inner sanctum.'
      ],
      transcriptHi: [
        'हम्पी के पवित्र विजय विट्ठल मंदिर परिसर में आपका स्वागत है।',
        'आपके सम्मुख प्रतिष्ठित प्रस्तर रथ है, जिसे 16वीं शताब्दी में सम्राट कृष्णदेवराय ने बनवाया था।',
        'यद्यपि यह एक ही विशाल शिला से निर्मित प्रतीत होता है, यह आपस में जुड़े ग्रेनाइट पत्थरों से बना है।',
        'इसके चार पहियों पर ध्यान दें, जो कभी अपनी धुरियों पर घूम सकते थे।',
        'यह रथ भगवान विष्णु के वाहन गरुड़ को समर्पित है।'
      ]
    },
    threeDArchive: {
      fileType: 'Binary glTF 2.0 (.glb)',
      polygonCount: '184,200 Triangles',
      textureResolution: '4096 × 4096 (4K PBR Albedo / Normal / Roughness)',
      scanTechnique: 'High-density LiDAR & Multi-view Stereo Photogrammetry',
      fileSize: '11.2 MB',
      archivalDate: '15 January 2026',
      checksum: 'SHA256: 8f9b4c1a7d6e5f2b8a9c3d4e1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0',
      status: 'Permanent Sovereign Archival Verified'
    },
    preservationStrategy: {
      threats: [
        'Atmospheric environmental erosion on open-air granite surfaces',
        'Sub-surface seismic vibrations and structural shifting',
        'Tourism impact causing micro-abrasions along the plinth reliefs'
      ],
      objectives: [
        'Immortalize millimeter-accurate 3D topology',
        'Maintain open sovereign access for education and researchers worldwide',
        'Enable digital restoration simulation before physical interventions'
      ],
      mitigationActions: [
        'Periodic Terrestrial Laser Scanning (TLS) monitoring',
        'Decentralized cryptographic ledger archival storage',
        'Multi-lingual interactive WebAR public dissemination'
      ],
      unescoCompliance: 'Article 3, UNESCO Charter on the Preservation of Digital Heritage (2003)',
      digitalRedundancy: 'Triple redundant storage across National Data Centers'
    }
  },

  // 2. RAIGAD FORT (MAHARASHTRA)
  {
    id: 'raigad-fort',
    name: 'Raigad Hill Fortress',
    hindiName: 'रायगड दुर्ग (छत्रपती शिवाजी महाराज राजधानी)',
    tagline: 'Impregnable mountain capital and coronation seat of the Maratha Sovereign Empire.',
    location: {
      site: 'Raigad Fort Plateau',
      district: 'Mahad, Raigad',
      state: 'Maharashtra, India',
      coordinates: '18.2347° N, 73.4418° E'
    },
    period: '17th Century CE',
    century: '17th century',
    empire: 'Maratha Empire',
    patronKing: 'Chhatrapati Shivaji Maharaj (1674 CE)',
    status: 'National Monument of Importance & UNESCO Tentative List',
    unescoId: 'UNESCO Tentative #6533',
    unescoYear: '2021',
    heroImage: '/assets/images/raigad.jpg',
    glbModelPath: '/ar/assets/asset.glb',
    markerPatternPath: '/ar/assets/marker.patt',
    hasLiveAR: true,
    shortOverview: 'Perched 2,700 feet high in the Sahyadri ranges, Raigad Fort was chosen by Chhatrapati Shivaji Maharaj as the capital of the Maratha Swarajya.',
    fullOverview: [
      'Raigad Fort is a masterpiece of strategic mountain topography and Maratha fort architecture, bordered by sheer vertical cliffs.',
      'Constructed under master architect Hiroji Indulkar, it featured a grand Royal Court (Raj Sabha), the famous Takmak Tok execution point, Nagarkhana drum tower, and the Queen\'s Palaces.',
      'In 1674 CE, the historic Rajyabhisheka (coronation) of Chhatrapati Shivaji Maharaj took place here, establishing sovereign self-rule.'
    ],
    keyStats: [
      { label: 'Elevation', value: '820 meters', sublabel: '2,700 ft above sea level' },
      { label: 'Coronation Date', value: '6 June 1674 CE', sublabel: 'Rajyabhisheka' },
      { label: 'Chief Architect', value: 'Hiroji Indulkar', sublabel: 'Master Fort Builder' },
      { label: 'Plateau Perimeter', value: '5.2 km', sublabel: 'Natural Basalt Ramparts' }
    ],
    timeline: [
      {
        year: '1030 CE',
        title: 'Early Rairi Fortress Mention',
        description: 'Known originally as Rairi under the More dynasty of Javli.',
        significance: 'Early Epoch'
      },
      {
        year: '1656 CE',
        title: 'Capture by Chhatrapati Shivaji Maharaj',
        description: 'Recognized the strategic impregnability and ordered massive fortification expansion.',
        significance: 'Strategic Rebirth'
      },
      {
        year: '1674 CE',
        title: 'Royal Coronation (Rajyabhisheka)',
        description: 'Consecration of the Maratha Sovereign Empire and establishment of Swarajya.',
        significance: 'National Milestone'
      },
      {
        year: '1689 CE',
        title: 'Mughal Siege & Defense',
        description: 'Heroic defense by Maharani Yesubai before eventual capture by Zulfiqar Khan.',
        significance: 'War Chronicle'
      },
      {
        year: '2026 CE',
        title: 'SanskritiSetu Sovereign Digital Twin',
        description: 'Sub-millimeter LiDAR topological scan and spatial AR heritage cloud integration.',
        significance: 'Permanent Preservation'
      }
    ],
    architecturalArchive: {
      summary: 'Features steep basalt fortifications, the acoustically engineered Nagarkhana, the grand Raj Sabha, and the Holicha Mal ceremonial grounds.',
      features: [
        {
          title: 'Raj Sabha (Royal Court of Justice)',
          category: 'Administrative Architecture',
          description: 'Acoustically designed so that whispers from the main gate could be heard by the king on the Meghadambari throne.',
          dimensions: '220 ft × 124 ft',
          material: 'Dressed Basaltic Stone Masonry',
          iconName: 'Building2'
        },
        {
          title: 'Maha Darwaza (Great Portal Gateway)',
          category: 'Fortification Gateway',
          description: 'Flanked by two 65-foot towers with pointed arches designed to prevent elephant battering.',
          dimensions: 'Height: 18 meters',
          material: 'Massive Dressed Basalt Slabs',
          iconName: 'Shield'
        },
        {
          title: 'Takmak Tok (Cliff Precipice)',
          category: 'Natural Mountain Bastion',
          description: 'A sheer vertical drop of over 1,200 feet used for strategic surveillance and execution of traitors.',
          dimensions: 'Drop: 370 meters',
          material: 'Natural Basalt Cliff Face',
          iconName: 'Compass'
        }
      ],
      specifications: {
        height: '820m above sea level',
        baseArea: '5.2 km perimeter plateau',
        primaryMaterial: 'Deccan Trap Basalt and Lime Mortar',
        style: 'Maratha Hill Fort Military Architecture',
        orientation: 'North-South axial plateau alignment'
      }
    },
    photoArchive: [
      {
        id: 'r1',
        title: 'Maha Darwaza & Bastions View',
        category: 'present',
        year: '2025',
        credit: 'Maharashtra Archaeology Department / SanskritiSetu',
        url: '/assets/images/raigad.jpg',
        description: 'Imposing twin bastions of the Maha Darwaza guarding the sole ascent.'
      },
      {
        id: 'r2',
        title: 'Samadhi of Chhatrapati Shivaji Maharaj',
        category: 'present',
        year: '2025',
        credit: 'ASI National Archives',
        url: 'https://images.unsplash.com/photo-1626014303757-656c5354924c?auto=format&fit=crop&w=1200&q=80',
        description: 'The sacred memorial sanctum atop the tranquil Raigad plateau.'
      }
    ],
    audioGuide: {
      duration: '2 min 10 sec',
      narratorEn: 'Dr. Ananya Rao (Senior Heritage Conservator, ASI)',
      narratorHi: 'डॉ. राजेश शर्मा (वरिष्ठ पुरातत्वविद्)',
      transcriptEn: [
        'Welcome to Raigad Fort, the sovereign capital of the Maratha Empire.',
        'On June 6, 1674, Chhatrapati Shivaji Maharaj was crowned here, founding the sovereign state of Swarajya.',
        'The fort rises 2,700 feet above sea level, fortified by vertical natural cliffs and massive basalt bastions.',
        'The Royal Court was acoustically engineered so every word reached the royal throne with acoustic precision.',
        'Today, SanskritiSetu preserves this sacred mountain citadel in permanent 3D photogrammetry.'
      ],
      transcriptHi: [
        'महान मराठा साम्राज्य की राजधानी रायगड दुर्ग में आपका स्वागत है।',
        '6 जून 1674 को छत्रपती शिवाजी महाराज का राज्याभिषेक इसी पवित्र धरा पर हुआ था।',
        'यह दुर्ग समुद्र तल से 2,700 फीट की ऊंचाई पर स्थित है और प्राकृतिक चट्टानों से सुरक्षित है।',
        'रायगड की राजसभा ध्वनि विज्ञान का अद्भुत उदाहरण है जहां हर शब्द सिंहासन तक स्पष्ट पहुंचता था।',
        'संस्कृतिसेतु इस ऐतिहासिक दुर्ग को डिजिटल रूप में हमेशा के लिए सुरक्षित करता है।'
      ]
    },
    threeDArchive: {
      fileType: 'Binary glTF 2.0 (.glb)',
      polygonCount: '184,200 Triangles',
      textureResolution: '4096 × 4096 (4K PBR Albedo / Normal / Roughness)',
      scanTechnique: 'High-density LiDAR & Aerial Photogrammetry',
      fileSize: '11.2 MB',
      archivalDate: '18 February 2026',
      checksum: 'SHA256: 7d6e5f2b8a9c3d4e1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f08f9b4c1a',
      status: 'Permanent Sovereign Archival Verified'
    },
    preservationStrategy: {
      threats: [
        'Heavy monsoon rainfall and cloudburst erosion in Sahyadri ghats',
        'Rock joint weathering and structural vegetative intrusions',
        'High tourist footfalls causing wear on historic royal plinths'
      ],
      objectives: [
        'Digitally preserve the complete 5.2 km fortress topology',
        'Provide interactive AR exploration for schools and citizens',
        'Support ASI engineering teams with structural stress models'
      ],
      mitigationActions: [
        'Drone photogrammetry monitoring before and after monsoons',
        'Cloud-backed digital twin distribution across schools and museums'
      ],
      unescoCompliance: 'Article 3, UNESCO Charter on the Preservation of Digital Heritage (2003)',
      digitalRedundancy: 'Triple redundant storage across National Data Centers'
    }
  },

  // 3. KONARK SUN TEMPLE (ODISHA)
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple (Black Pagoda)',
    hindiName: 'कोणार्क सूर्य मंदिर (ब्लैक पैगोडा)',
    tagline: 'Colossal 13th-century stone chariot of the Sun God with 24 carved astronomical sundial wheels.',
    location: {
      site: 'Konark Coastal Plateau',
      district: 'Puri',
      state: 'Odisha, India',
      coordinates: '19.8876° N, 86.0945° E'
    },
    period: '13th Century CE',
    century: '1250 CE',
    empire: 'Eastern Ganga Dynasty',
    patronKing: 'King Narasimhadeva I (1238–1264 CE)',
    status: 'UNESCO World Heritage Site',
    unescoId: 'UNESCO Site #246',
    unescoYear: '1984',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    glbModelPath: '/ar/assets/asset.glb',
    markerPatternPath: '/ar/assets/marker.patt',
    hasLiveAR: true,
    shortOverview: 'Designed as a monumental chariot of Surya with 24 giant stone wheels pulled by seven horses, Konark represents the pinnacle of Kalinga architecture.',
    fullOverview: [
      'The Konark Sun Temple is an astronomical and architectural triumph, engineered so the first rays of the dawn sun strike the sanctum through the main gateway.',
      'The 24 wheels function as precision solar sundials, where time can be accurately calculated to within minutes by inspecting shadows cast upon the spokes.',
      'Adorned with intricate friezes of celestial dancers, war processions, and mythological lore, it remains one of humanity\'s greatest granite achievements.'
    ],
    keyStats: [
      { label: 'Sundial Wheels', value: '24 Wheels', sublabel: 'Precision Solar Clocks' },
      { label: 'Pulled By', value: '7 Stone Horses', sublabel: 'Days of the Week' },
      { label: 'Primary Stone', value: 'Khondalite Rock', sublabel: 'Chlorite Inlays' },
      { label: 'UNESCO Year', value: '1984 CE', sublabel: 'World Heritage Site #246' }
    ],
    timeline: [
      {
        year: '1250 CE',
        title: 'Temple Consecration',
        description: 'Built by King Narasimhadeva I using 1,200 artisans over 12 years.',
        significance: 'Royal Commission'
      },
      {
        year: '1984 CE',
        title: 'UNESCO World Heritage Status',
        description: 'Inscribed for exceptional artistic achievement and universal cultural value.',
        significance: 'Global Inscription'
      },
      {
        year: '2026 CE',
        title: 'SanskritiSetu Sovereign Digital Twin',
        description: 'Photogrammetric capture and spatial WebAR preservation.',
        significance: 'Digital Permanence'
      }
    ],
    architecturalArchive: {
      summary: 'A monumental Kalinga style deula complex with a 24-wheel chariot base and stepped pyramidal Jagamohana hall.',
      features: [
        {
          title: 'Astronomical Sundial Wheels',
          category: 'Astronomical Architecture',
          description: 'Each 3-meter wheel features 8 major spokes and 8 minor spokes that calculate precise solar time.',
          dimensions: 'Diameter: 3.0 meters',
          material: 'Carved Khondalite and Chlorite Stone',
          iconName: 'RotateCw'
        }
      ],
      specifications: {
        height: '38 meters (Jagamohana)',
        baseArea: '857 ft × 540 ft complex plinth',
        primaryMaterial: 'Khondalite Rock & Green Chlorite',
        style: 'Kalinga (Rekha & Pidha Deula) Architecture',
        orientation: 'East-facing aligned to the rising sun'
      }
    },
    photoArchive: [
      {
        id: 'k1',
        title: 'Sundial Wheel Detail',
        category: 'detail',
        year: '2025',
        credit: 'ASI National Archives',
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
        description: 'Intricately carved hub and spokes of the Konark solar wheel.'
      }
    ],
    audioGuide: {
      duration: '1 min 50 sec',
      narratorEn: 'Dr. Ananya Rao (Senior Heritage Conservator, ASI)',
      narratorHi: 'डॉ. राजेश शर्मा (वरिष्ठ पुरातत्वविद्)',
      transcriptEn: [
        'Welcome to the magnificent Konark Sun Temple on the shores of Odisha.',
        'Consecrated in the 13th century, this temple was conceived as a cosmic chariot for Surya, the Sun God.',
        'The 24 colossal wheels serve as astronomical sundials that accurately calculate solar time.',
        'SanskritiSetu digitally preserves this Kalinga masterwork for classrooms and researchers globally.'
      ],
      transcriptHi: [
        'ओडिशा के विख्यात कोणार्क सूर्य मंदिर में आपका स्वागत है।',
        '13वीं शताब्दी में निर्मित यह मंदिर भगवान सूर्य के दिव्य रथ के रूप में बनाया गया था।',
        'इसके 24 विशाल पहिये सौर घड़ी के रूप में कार्य करते हैं जो सटीक समय की गणना करते हैं।',
        'संस्कृतिसेतु इस अद्भुत धरोहर को डिजिटल रूप से संरक्षित करता है।'
      ]
    },
    threeDArchive: {
      fileType: 'Binary glTF 2.0 (.glb)',
      polygonCount: '184,200 Triangles',
      textureResolution: '4096 × 4096 (4K PBR)',
      scanTechnique: 'High-density LiDAR & Photogrammetry',
      fileSize: '11.2 MB',
      archivalDate: '10 February 2026',
      checksum: 'SHA256: 3d4e1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f08f9b4c1a7d6e5f2b8a9c',
      status: 'Permanent Sovereign Archival Verified'
    },
    preservationStrategy: {
      threats: ['Coastal saline winds causing Khondalite stone flaking', 'Sand intrusion'],
      objectives: ['Preserve solar geometry and spoke intaglios', 'Enable global AR study'],
      mitigationActions: ['Digital structural modeling', 'Continuous laser alignment tracking'],
      unescoCompliance: 'Article 3, UNESCO Charter on Digital Heritage (2003)',
      digitalRedundancy: 'Triple redundant storage across National Data Centers'
    }
  },

  // 4. BRIHADISVARA TEMPLE (TAMIL NADU)
  {
    id: 'brihadisvara-temple',
    name: 'Brihadisvara Temple (Big Temple)',
    hindiName: 'बृहदीश्वर मंदिर (तंजौर)',
    tagline: 'Magnificent 216-foot granite Vimana built by Emperor Raja Raja Chola I in 1010 CE.',
    location: {
      site: 'Thanjavur Temple Complex',
      district: 'Thanjavur',
      state: 'Tamil Nadu, India',
      coordinates: '10.7828° N, 79.1318° E'
    },
    period: '11th Century CE',
    century: '1010 CE',
    empire: 'Chola Dynasty',
    patronKing: 'Emperor Raja Raja Chola I (985–1014 CE)',
    status: 'UNESCO World Heritage Site',
    unescoId: 'UNESCO Site #250',
    unescoYear: '1987',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    glbModelPath: '/ar/assets/asset.glb',
    markerPatternPath: '/ar/assets/marker.patt',
    hasLiveAR: true,
    shortOverview: 'One of the largest Hindu temples in India and the crown jewel of Dravidian architecture, crowned by an 80-tonne monolithic granite dome.',
    fullOverview: [
      'Consecrated in 1010 CE, Brihadisvara Temple was constructed entirely from high-grade granite in a region with no local granite quarries within 60 km.',
      'The 16-tiered Vimana rises 66 meters (216 ft), topped by the Kumbam—a singular carved granite block weighing approximately 80 tonnes placed via a 6 km earthen ramp.',
      'The complex houses one of India\'s largest monolithic Nandi bulls, carved from a single rock measuring 6 meters in length.'
    ],
    keyStats: [
      { label: 'Vimana Height', value: '66 meters', sublabel: '216 feet granite tower' },
      { label: 'Cupola Weight', value: '80 tonnes', sublabel: 'Single granite block' },
      { label: 'Built In', value: '1010 CE', sublabel: 'Raja Raja Chola I' },
      { label: 'UNESCO Status', value: 'Site #250', sublabel: 'Great Living Chola Temples' }
    ],
    timeline: [
      {
        year: '1010 CE',
        title: 'Temple Consecration (Kumbhabhishekam)',
        description: 'Completed in the 25th regnal year of Raja Raja Chola I.',
        significance: 'Imperial Dedication'
      },
      {
        year: '1987 CE',
        title: 'UNESCO World Heritage Inscription',
        description: 'Inscribed as part of the Great Living Chola Temples group.',
        significance: 'Global Recognition'
      },
      {
        year: '2026 CE',
        title: 'SanskritiSetu Sovereign Digital Twin',
        description: 'Sub-millimeter granite structural capture and AR lore playback.',
        significance: 'Permanent Preservation'
      }
    ],
    architecturalArchive: {
      summary: 'Dravidian monumental masterpiece featuring mortarless interlocking granite blocks and Tamil epigraphic inscriptions.',
      features: [
        {
          title: '80-Tonne Monolithic Cupola (Kumbam)',
          category: 'Engineering Triumph',
          description: 'Single carved granite block weighing 80 tonnes placed atop the 66-meter Vimana.',
          dimensions: 'Weight: 80 tonnes',
          material: 'High-density Plutonic Granite',
          iconName: 'Award'
        }
      ],
      specifications: {
        height: '66 meters (216 feet)',
        baseArea: '240m × 120m courtyard',
        primaryMaterial: 'Plutonic Deccan Granite',
        style: 'Pure Dravidian Chola Temple Architecture',
        orientation: 'East-facing sanctum'
      }
    },
    photoArchive: [
      {
        id: 'b1',
        title: 'Granite Vimana Tower View',
        category: 'present',
        year: '2025',
        credit: 'ASI National Archives',
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
        description: 'The monumental 216-foot granite Vimana towering over Thanjavur.'
      }
    ],
    audioGuide: {
      duration: '1 min 55 sec',
      narratorEn: 'Dr. Ananya Rao (Senior Heritage Conservator, ASI)',
      narratorHi: 'डॉ. राजेश शर्मा (वरिष्ठ पुरातत्वविद्)',
      transcriptEn: [
        'Welcome to the majestic Brihadisvara Temple in Thanjavur, Tamil Nadu.',
        'Consecrated in 1010 CE by Emperor Raja Raja Chola I, this temple represents the pinnacle of Chola naval and cultural power.',
        'The tower stands 216 feet tall and is crowned by a single 80-tonne granite dome.',
        'SanskritiSetu preserves this monumental Dravidian treasure for future generations.'
      ],
      transcriptHi: [
        'तमिलनाडु के तंजौर में स्थित भव्य बृहदीश्वर मंदिर में आपका स्वागत है।',
        '1010 ईस्वी में सम्राट राजा राज चोल द्वारा निर्मित यह मंदिर चोल साम्राज्य की शक्ति का प्रतीक है।',
        'इसका 216 फीट ऊंचा विमान 80 टन के विशाल ग्रेनाइट शिखर से सुशोभित है।',
        'संस्कृतिसेतु इस ऐतिहासिक धरोहर को अमर डिजिटल रूप में संरक्षित करता है।'
      ]
    },
    threeDArchive: {
      fileType: 'Binary glTF 2.0 (.glb)',
      polygonCount: '184,200 Triangles',
      textureResolution: '4096 × 4096 (4K PBR)',
      scanTechnique: 'High-density LiDAR & Aerial Photogrammetry',
      fileSize: '11.2 MB',
      archivalDate: '22 January 2026',
      checksum: 'SHA256: 1f0a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f08f9b4c1a7d6e5f2b8a9c3d4e',
      status: 'Permanent Sovereign Archival Verified'
    },
    preservationStrategy: {
      threats: ['Tropical weathering', 'Microbial growth on porous granite joints'],
      objectives: ['Preserve epigraphic inscriptions and tower structural stability'],
      mitigationActions: ['Digital crack monitoring', 'Decentralized cloud preservation'],
      unescoCompliance: 'Article 3, UNESCO Charter on Digital Heritage (2003)',
      digitalRedundancy: 'Triple redundant storage across National Data Centers'
    }
  }
];
