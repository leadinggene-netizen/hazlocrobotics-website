import x3StableImg from '@/assets/robots/x3-stable.jpg';
import x5Img from '@/assets/robots/x5.jpg';
import sgls04Img from '@/assets/robots/sgls-04.jpg';
import sglsC3Img from '@/assets/robots/sgls-c3.jpg';
import l4sImg from '@/assets/robots/l4-s.jpg';
import l7TwisterImg from '@/assets/robots/l7-twister.jpg';
import l7FireImg from '@/assets/robots/l7-fire.jpg';
import g7ModuleImg from '@/assets/robots/g7-module.jpg';
import g7PowerImg from '@/assets/robots/g7-power.jpg';
import g451Img from '@/assets/robots/g451.jpg';
import d071Img from '@/assets/robots/d071.jpg';
import firefightingImg from '@/assets/robots/firefighting-reconnaissance.jpg';
import electricWheeledImg from '@/assets/robots/electric-wheeled.jpg';
import ga7Img from '@/assets/robots/ga7.jpg';
import powerRailImg from '@/assets/robots/power-rail-mounted.jpg';
import assetTrackingImg from '@/assets/robots/asset-tracking-center.png';
import chargingRoomImg from '@/assets/peripherals/charging-room.jpg';
import industrialPcImg from '@/assets/peripherals/industrial-pc-e01.jpg';
import aiComputeImg from '@/assets/peripherals/pc-a01-flat-fan.jpg';
import { productsFr } from './products.fr';
import { productsEs } from './products.es';
import { productsPt } from './products.pt';
import type { Locale } from '@/i18n/useLocale';

const translationsByLocale: Record<Exclude<Locale, 'en'>, typeof productsFr> = {
  fr: productsFr,
  es: productsEs,
  pt: productsPt,
};

export type ProductCategory = 'explosion-proof' | 'electric' | 'software' | 'peripheral';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  keyword: string;
  image: string;
  heroImage: string;
  specs: ProductSpec[];
  certifications: string[];
  useCases: string[];
  features: string[];
  relatedCaseStudy?: string;
  relatedResource?: string;
  datasheet?: string;
}

export const products: Product[] = [
  {
    slug: 'explosion-proof-quadruped-robot',
    name: 'Explosion-Proof Quadruped Robot — X3 Stable',
    shortName: 'X3 Stable',
    tagline: 'Agile legged inspection for complex, cluttered hazardous zones',
    description:
      'Innovatively combining multiple explosion-proof design methods, the X3 Stable delivers comprehensive performance across explosion protection, lightweight design, and reliability. Equipped with more than 500 intelligent algorithms, adaptive learning, and high-precision image acquisition and perception, it navigates stairs, steps, gaps, obstacles, and confined spaces that wheeled robots cannot reach — and extends beyond inspection to reconnaissance, material transport, and rescue support in emergency response scenarios.',
    category: 'explosion-proof',
    keyword: 'explosion proof quadruped robot',
    image: x3StableImg,
    heroImage: x3StableImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: 'Standing 1200×600×1060mm · Lying 1310×600×590mm' },
      { label: 'Weight', value: '110 kg' },
      { label: 'Payload', value: '20 kg' },
      { label: 'Mobility', value: 'Quadruped, 14 DOF (12 + 2-axis gimbal) — climbs 20° slopes, 20cm obstacles' },
      { label: 'Battery Life', value: '2–3 hours continuous patrol · 3h charge' },
      { label: 'Sensors', value: 'Thermal, gas, HD camera, LIDAR — laser navigation, ±5cm accuracy' },
    ],
    certifications: ['IIB T4 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Stairwell and multi-level robot inspections in petrochemical plants',
      'Narrow corridor patrol in confined processing units',
      'Material transport and rescue support in emergency response scenarios',
    ],
    features: [
      'Legged mobility reaches areas wheeled robots cannot access',
      '500+ onboard algorithms for environmental perception and autonomous learning',
      'Autonomous patrol with obstacle avoidance and route replay',
      'Optional scene algorithms: personnel detection, pump area, storage tank, pipeline patrol',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'explosion-proof-quadruped-robot-x5',
    name: 'Explosion-Proof Quadruped Robot — X5',
    shortName: 'X5',
    tagline: 'Wheel-leg hybrid mobility built for the widest range of industrial terrain',
    description:
      'Constructed from aerospace-grade alloy for high strength and reliability, the X5 pairs an upgraded wheel-leg hybrid locomotion structure with a newly developed motion control algorithm, delivering superior mobility and terrain adaptability for mission-critical industrial environments. It is widely deployed across petroleum, chemical, natural gas, steel, and distillery facilities, supporting unmanned inspection and reconnaissance in deserts, forests, mountains, and other extreme terrain.',
    category: 'explosion-proof',
    keyword: 'explosion proof quadruped robot X5',
    image: x5Img,
    heroImage: x5Img,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '1200×750×950mm' },
      { label: 'Weight', value: '125 kg' },
      { label: 'Payload', value: '30 kg' },
      { label: 'Mobility', value: 'Wheel-leg hybrid, 16+2 DOF, 0–2.0 m/s — climbs 30° slopes, 40cm obstacles' },
      { label: 'Battery Life', value: '2 hours continuous patrol · 3h charge' },
      { label: 'Sensors', value: 'LiDAR SLAM + IMU + visual positioning, ±5cm accuracy' },
    ],
    certifications: ['IIB T4 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Cross-terrain inspection across petroleum, natural gas, and chemical facilities',
      'Steel plant and distillery site patrol',
      'Reconnaissance across desert, forest, and mountainous terrain',
    ],
    features: [
      'Wheel-leg hybrid locomotion with 16+2 degrees of freedom for complex terrain',
      'Aerospace-grade alloy construction for high strength and reliability',
      'Autonomous obstacle avoidance, emergency stop, and auto-charging',
      'LiDAR SLAM navigation with IMU and visual positioning, ±5cm accuracy',
    ],
    datasheet: '/datasheets/explosion-proof-quadruped-robot-x5.pdf',
  },
  {
    slug: 'explosion-proof-wheeled-robot-sgls-04',
    name: 'Explosion-Proof Wheeled Robot — SGLS-04',
    shortName: 'SGLS-04',
    tagline: 'Real-time environmental sensing with automated defect diagnosis',
    description:
      'The SGLS-04 collects and analyzes on-site environmental data in real time, enabling automatic defect diagnosis, intelligent operation and maintenance of environmental facilities, and hazard investigation — fully or semi-autonomously replacing personnel on routine inspection rounds. A high-precision suspension system improves driving stability and avoids high-frequency vibration in harsh environments, reducing risk and labor intensity for operators.',
    category: 'explosion-proof',
    keyword: 'explosion proof wheeled robot SGLS-04',
    image: sgls04Img,
    heroImage: sgls04Img,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T6 Gb' },
      { label: 'Dimensions', value: '1150×880×1060mm' },
      { label: 'Weight', value: '420 kg' },
      { label: 'Mobility', value: 'Four-wheel drive — climbs 20° slopes, 12cm obstacles, 20cm water depth' },
      { label: 'Battery Life', value: '5 hours operating · 3h charge' },
      { label: 'Sensors', value: 'Optical & acoustic imaging — laser navigation, ±5cm accuracy' },
    ],
    certifications: ['IIB T6 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Automated defect diagnosis on petrochemical processing equipment',
      'Oil extraction and tank farm hazard investigation rounds',
      'LNG storage area and finished-product tank patrol',
    ],
    features: [
      'Automatic equipment defect diagnosis, not just video capture',
      'High-precision suspension for stability in harsh terrain',
      'Optional laser vibration measurement and voiceprint/noise detection',
      'Scene algorithms tuned for oil extraction and LNG storage scenarios',
    ],
    relatedResource: 'iecex-vs-nec-guide',
  },
  {
    slug: 'explosion-proof-wheeled-robot-sgls-c3',
    name: 'Explosion-Proof Wheeled Robot — SGLS-C3',
    shortName: 'SGLS-C3',
    tagline: 'Modular sensor integration with collision and trench-detection safety',
    description:
      'Built on a modular design, the SGLS-C3 flexibly integrates a variety of devices to meet different application needs — covering leak detection, equipment safety, personnel safety, and site safety in one platform. An ultrasonic omnidirectional anti-collision and trench-detection anti-fall system protects both equipment and personnel, and an optional AI industrial PC enables millisecond-level recognition and response.',
    category: 'explosion-proof',
    keyword: 'explosion proof wheeled robot SGLS-C3',
    image: sglsC3Img,
    heroImage: sglsC3Img,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIC T6 Gb (highest gas group)' },
      { label: 'Dimensions', value: '1250×960×920mm' },
      { label: 'Weight', value: '450 kg' },
      { label: 'Mobility', value: 'Four-wheel drive, 0–1.4 m/s — climbs 25° slopes, 10cm obstacles' },
      { label: 'Battery Life', value: '5 hours endurance · 3h charge' },
      { label: 'Sensors', value: 'Optical & acoustic imaging, optional robotic arm — laser navigation, ±3cm accuracy' },
    ],
    certifications: ['IIC T6 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Ammonia synthesis and BDO unit area inspection',
      'Oil refining and VCM unit safety patrol',
      'Facility-wide leak and site-safety monitoring',
    ],
    features: [
      'Modular device integration for site-specific sensor loadouts',
      'Ultrasonic anti-collision and anti-fall trench detection',
      'Optional adjustable pan-tilt gimbal and robotic arm',
      'Ex IIC — the highest gas group, including hydrogen atmospheres',
    ],
    relatedResource: 'iecex-vs-nec-guide',
    datasheet: '/datasheets/explosion-proof-wheeled-robot-sgls-c3.pdf',
  },
  {
    slug: 'explosion-proof-wheeled-robot-l4s',
    name: 'Explosion-Proof Wheeled Robot — L4-S',
    shortName: 'L4-S Wheeled Robot',
    tagline: 'The flagship wheeled inspection robot for Zone 1 hazardous areas',
    description:
      'The L4-S is the flagship explosion-proof wheeled inspection robot, third-generation in the wheeled line and purpose-built to solve inspection challenges in complex industrial sites. A flexible, modular, integrated design keeps it compact — 1065×655×1000mm — so it maneuvers through narrow passages, equipment gaps, and pipeline clearances that larger robots cannot enter. Ultrasonic sensors provide all-around, no-dead-angle collision avoidance, with corrosion resistance built for offshore platform conditions.',
    category: 'explosion-proof',
    keyword: 'explosion proof wheeled robot L4-S',
    image: l4sImg,
    heroImage: l4sImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '1065×655×1000mm' },
      { label: 'Weight', value: '275 kg' },
      { label: 'Mobility', value: 'Four-wheel drive, 0–0.9 m/s — climbs 20° slopes, 10cm obstacles' },
      { label: 'Battery Life', value: '3 hours operating · 1.5h charge' },
      { label: 'Environmental Protection', value: 'IP65 — corrosion and moisture resistant, rated for offshore platforms' },
      { label: 'Positioning', value: 'Laser navigation, ±3cm accuracy' },
    ],
    certifications: ['IIB T4 Gb', 'IP65', 'IECEx', 'ATEX'],
    useCases: [
      'Continuous perimeter and asset patrol across large refineries',
      'Tank farm inspection and thermal monitoring',
      'Offshore drilling platforms, pump groups, and LNG stations',
    ],
    features: [
      'Compact enough for narrow pipeline and equipment-gap inspection',
      'All-around ultrasonic collision avoidance, no dead angles',
      'Corrosion-resistant construction rated for offshore and coastal environments',
      'Scene algorithms for earthen jar storage, sewage sludge, and natural gas gate stations',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'iecex-vs-nec-guide',
  },
  {
    slug: 'explosion-proof-wheeled-robot-l7-twister',
    name: 'Explosion-Proof Wheeled Robot — L7 Twister',
    shortName: 'L7 Twister',
    tagline: 'Four-wheel, eight-drive design for all-terrain autonomous inspection',
    description:
      'Designed with a four-wheel, eight-drive configuration and independent suspension, the L7 Twister offers strong adaptability across complex, rugged terrain. Each wheel has its own independent power unit for outstanding off-road performance and agile maneuverability. An onboard AI industrial computer delivers up to 100 TOPS of compute for offline inspection, high reliability, and strong real-time performance.',
    category: 'explosion-proof',
    keyword: 'explosion proof wheeled robot L7 Twister',
    image: l7TwisterImg,
    heroImage: l7TwisterImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIC T6 Gb (highest gas group)' },
      { label: 'Dimensions', value: '1060×620×1020mm' },
      { label: 'Weight', value: '250 kg' },
      { label: 'Mobility', value: 'Four-wheel, eight-drive — climbs 15° slopes, 10cm obstacles' },
      { label: 'Battery Life', value: '5 hours operating · 3h charge' },
      { label: 'Compute', value: 'Onboard AI industrial computer, up to 100 TOPS for offline inspection' },
    ],
    certifications: ['IIC T6 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'All-terrain patrol on rugged, unpaved industrial sites',
      'Offshore platform and VCM/BDO unit area inspection',
      'High-compute offline inspection where connectivity is limited',
    ],
    features: [
      'Independent power unit per wheel for off-road agility',
      'Up to 100 TOPS onboard compute — full inspection runs without connectivity',
      'Pan-tilt-zoom gimbal with acoustic and optical imaging',
      'Ex IIC rated — the highest gas group, including hydrogen atmospheres',
    ],
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'explosion-proof-wheeled-robot-l7-fire',
    name: 'Explosion-Proof Wheeled Robot — L7 Fire',
    shortName: 'L7 Fire',
    tagline: 'Wheeled inspection with integrated flame detection and fire suppression',
    description:
      'The L7 Fire combines standard inspection capability with flame detection and fire-extinguishing functions. A mounted flame sensor and fire-extinguishing nozzles quickly and accurately capture the location, size, and spread direction of a fire, while flexible control of spray angle and extinguishing-agent flow rate enables fast, reliable fire response — improving the timeliness of emergency action without putting personnel in harm\'s way.',
    category: 'explosion-proof',
    keyword: 'explosion proof wheeled fire robot L7 Fire',
    image: l7FireImg,
    heroImage: l7FireImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIC T6 Gb (highest gas group)' },
      { label: 'Dimensions', value: '1250×960×920mm' },
      { label: 'Weight', value: '450 kg' },
      { label: 'Mobility', value: 'Four-wheel drive, 0–1.4 m/s — climbs 25° slopes, 10cm obstacles' },
      { label: 'Battery Life', value: '5 hours operating · 5h charge' },
      { label: 'Fire Response', value: 'Remote fire extinguishing with adjustable spray angle and flow rate' },
    ],
    certifications: ['IIC T6 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Early-stage fire detection and suppression on active industrial sites',
      'Oil refining and VCM unit fire-risk patrol',
      'Combined inspection and fire-readiness for petrochemical operators',
    ],
    features: [
      'Flame sensor pinpoints fire location, size, and spread direction',
      'Remote-controlled spray angle and extinguishing-agent flow rate',
      'Shares the L7 platform\'s inspection sensor suite',
      'Scene algorithms for oil refining, VCM, and BDO unit areas',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
  },
  {
    slug: 'explosion-proof-rail-robot-g7-module',
    name: 'Explosion-Proof Suspended Rail Robot — G7 Module',
    shortName: 'G7 Module',
    tagline: 'Modular split-design suspended rail robot for centimeter-level precision',
    description:
      'An innovative modular split design keeps the G7 Module\'s center of gravity close to the track, reducing oscillation and ensuring stability at high speed. A high-precision positioning system delivers centimeter-level accuracy, and the modular architecture allows rapid integration of different sensors to meet diverse application needs — a fixed-path robot built for repeatable, high-precision monitoring.',
    category: 'explosion-proof',
    keyword: 'explosion proof suspended rail robot G7 Module',
    image: g7ModuleImg,
    heroImage: g7ModuleImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIC T6 Gb' },
      { label: 'Dimensions', value: '1420×460×520mm' },
      { label: 'Weight', value: '130 kg' },
      { label: 'Mobility', value: 'Single-track rail — climbs 20° grades' },
      { label: 'Range', value: '3.2 km per charge · 3h charge' },
      { label: 'Positioning', value: 'Odometry + Hall sensor + RFID, ±1cm accuracy' },
    ],
    certifications: ['IIC T6 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      '24/7 pipe rack and utility corridor inspection in refineries',
      'Evaporative steam building and gasification unit monitoring',
      'Storage tank area and extraction unit patrol',
    ],
    features: [
      'Low center of gravity minimizes track oscillation at speed',
      'Modular sensor integration for site-specific loadouts',
      'Optional automated track and device-body cleaning',
      'Centimeter-level repeatable positioning for trend analysis',
    ],
    relatedCaseStudy: 'indonesia-gas',
  },
  {
    slug: 'explosion-proof-rail-robot-g7-power',
    name: 'Explosion-Proof Ceiling Rail Robot — G7 Power',
    shortName: 'G7 Power',
    tagline: 'High-power modular rail robot with 10km endurance and steep-slope climbing',
    description:
      'An explosion-proof modular high-power drive system gives the G7 Power added safety, reliability, and flexibility. It operates stably from -20°C to 60°C, with ultra-long 10 km endurance and 45° steep-slope climbing for complex rail scenarios like utility corridors and tunnels. A highly modular turret and body architecture support rapid sensor expansion — one machine adapted to multiple inspection needs.',
    category: 'explosion-proof',
    keyword: 'explosion proof ceiling rail robot G7 Power',
    image: g7PowerImg,
    heroImage: g7PowerImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIC T6 Gb / Ex tC T80 Db' },
      { label: 'Dimensions', value: '1290×380×390mm' },
      { label: 'Weight', value: '50 kg' },
      { label: 'Mobility', value: 'Dual rail drive — climbs 45° grades' },
      { label: 'Battery Life', value: '10 km endurance · 3h charge' },
      { label: 'Operating Range', value: '-20°C to 60°C' },
      { label: 'Positioning', value: 'Odometry + Hall sensor + RFID, ±1cm accuracy' },
    ],
    certifications: ['IIC T6 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Utility corridor and tunnel inspection in extreme temperature ranges',
      'Coking, sulfurization, and coke-oven area monitoring',
      'Compressor plant and storage tank yard patrol',
    ],
    features: [
      '10 km single-charge endurance for long rail runs',
      '45° steep-slope climbing capability',
      'Lift-and-pan gimbal with optical and acoustic imaging',
      'Rated for -20°C to 60°C operating environments',
    ],
    datasheet: '/datasheets/explosion-proof-rail-robot-g7-power.pdf',
  },
  {
    slug: 'explosion-proof-rail-robot-g451',
    name: 'Explosion-Proof Overhead Rail Robot — G451',
    shortName: 'G451',
    tagline: 'Ultra-long-endurance rail robot for round-the-clock area coverage',
    description:
      'Built for long-distance continuous patrol, the G451 reaches up to 45 km on a single charge with excellent stability and accuracy. A parallel dual-track design keeps movement smooth, resists interference, and minimizes deviation. It provides all-weather, full-coverage inspection of equipment areas — meter-reading recognition, leak and spill detection, infrared temperature measurement, and abnormality monitoring.',
    category: 'explosion-proof',
    keyword: 'explosion proof overhead rail robot G451',
    image: g451Img,
    heroImage: g451Img,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '880×600×700mm' },
      { label: 'Weight', value: '230 kg' },
      { label: 'Mobility', value: 'Dual-rail, two-wheel drive — climbs 5° grades' },
      { label: 'Battery Life', value: 'Up to 45 km range · 4h charge' },
      { label: 'Positioning', value: 'Odometry + Hall sensor + RFID, ±1cm accuracy' },
    ],
    certifications: ['IIB T4 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Round-the-clock meter reading and leak detection on fixed rail runs',
      'Pipeline inspection patrol along long infrastructure corridors',
      'Optional rescue-robot configuration for emergency scenarios',
    ],
    features: [
      'Up to 45 km single-charge range — the longest in the rail lineup',
      'Parallel dual-track design minimizes deviation and interference',
      'Meter-reading recognition and infrared temperature measurement',
      'Optional rescue robot payload configuration',
    ],
  },
  {
    slug: 'explosion-proof-tracked-robot',
    name: 'Explosion-Proof Crawler Robot — D071',
    shortName: 'D071',
    tagline: 'All-terrain tracked inspection for the harshest environments',
    description:
      'A high-efficiency crawler system makes the D071 better suited to complex road conditions than wheeled robots. A larger ground-contact pressure-to-area ratio and specially designed tread pattern handle extreme cold, mixed rain and snow, slippery surfaces, and rugged mountainous terrain. Internal sensing and control use a modular design — each component independent yet coordinated — keeping the robot stable and reliable in the harshest conditions.',
    category: 'explosion-proof',
    keyword: 'explosion proof tracked robot D071',
    image: d071Img,
    heroImage: d071Img,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '1420×900×1120mm' },
      { label: 'Weight', value: '550 kg' },
      { label: 'Mobility', value: 'Dual tracks, two-wheel drive, 0–1.4 m/s — climbs 25° slopes, 15cm obstacles' },
      { label: 'Battery Life', value: '3 hours operating · 5h charge' },
      { label: 'Positioning', value: 'Laser navigation, ±5cm accuracy' },
    ],
    certifications: ['IIB T4 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Outdoor tank farm and pipeline patrol in all weather',
      'Post-incident debris-field reconnaissance',
      'Mining and quarry inspection in explosive dust atmospheres',
    ],
    features: [
      'Superior traction on mud, gravel, snow, and debris-covered terrain',
      'Highest payload capacity in the explosion-proof line',
      'Rugged enclosure certified for Zone 1 hazardous atmospheres',
      'Scene algorithms for oil extraction, base liquor, and LNG tank areas',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'iecex-vs-nec-guide',
    datasheet: '/datasheets/explosion-proof-tracked-robot.pdf',
  },
  {
    slug: 'firefighting-reconnaissance-robot',
    name: 'Explosion-Proof Firefighting Reconnaissance Robot',
    shortName: 'Firefighting Robot',
    tagline: 'Front-line reconnaissance and suppression for fire and emergency response teams',
    description:
      'Combining firefighting and reconnaissance functions, this tracked robot carries a fire-monitoring water cannon and environmental sensing devices, with a dual water-curtain spray and cooling system that lets it enter hazardous areas in place of firefighters. Its tracked chassis delivers strong explosion protection, obstacle-climbing, and towing capacity, with remote-controlled cannon rotation, tilt, and sweep across multiple spray modes — switching freely between water and foam.',
    category: 'explosion-proof',
    keyword: 'firefighting reconnaissance robot',
    image: firefightingImg,
    heroImage: firefightingImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '1800×1100×1500mm' },
      { label: 'Weight', value: '780 kg' },
      { label: 'Mobility', value: 'Dual-track, four-wheel drive — climbs 70% grade, 15cm obstacles, 20cm water' },
      { label: 'Water Monitor', value: 'Flow rate 80 L/s · range 80m' },
      { label: 'Endurance', value: '5h continuous spraying / 1.5h continuous travel · 6h charge' },
      { label: 'Remote Control Range', value: '1000m' },
    ],
    certifications: ['IIB T4 Gb', 'IP66', 'IECEx', 'ATEX'],
    useCases: [
      'Fire scene reconnaissance and suppression before human team entry',
      'Hazardous material incident assessment and gas monitoring',
      'Industrial accident response and structural assessment',
    ],
    features: [
      'Remote fire extinguishing with water/foam switching and adjustable spray',
      'Dual water-curtain spray and cooling system for close-proximity operation',
      'Heat-resistant, explosion-proof enclosure for proximity to fire scenes',
      'Redundant bidirectional communication for reliable field control',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'iecex-vs-nec-guide',
    datasheet: '/datasheets/firefighting-reconnaissance-robot.pdf',
  },
  {
    slug: 'electric-wheeled-robot',
    name: 'Electric-Wheeled Robot',
    shortName: 'Electric Wheeled',
    tagline: 'Non-hazardous area inspection for substations and distribution rooms',
    description:
      'Equipped with 3D SLAM navigation and anti-slip tires, the electric-wheeled robot operates flexibly across indoor and outdoor substation and distribution room environments. High-zoom visible-light cameras and a high-precision infrared thermal imager detect meter readings, disconnector status, and equipment overheating, with optional partial-discharge/SF6 modules for arcing and gas-leak alerts.',
    category: 'electric',
    keyword: 'electric wheeled inspection robot',
    image: electricWheeledImg,
    heroImage: electricWheeledImg,
    specs: [
      { label: 'Rating', value: 'General industrial (non-Ex), IP55' },
      { label: 'Dimensions', value: '650×550×800mm' },
      { label: 'Weight', value: '40 kg' },
      { label: 'Mobility', value: 'Four-wheel/two-wheel drive — climbs 15° slopes, 4cm obstacles' },
      { label: 'Battery Life', value: '7 hours endurance · 3h charge' },
      { label: 'Positioning', value: 'Laser navigation, ±2cm accuracy' },
    ],
    certifications: ['CE', 'FCC'],
    useCases: [
      'Substation and distribution room patrol',
      'Meter reading and disconnector status verification',
      'Data center and electrical distribution room monitoring',
    ],
    features: [
      '3D SLAM navigation with anti-slip tires for indoor/outdoor use',
      'High-zoom visible-light + infrared thermal imaging',
      'Optional partial-discharge and SF6 gas-leak detection modules',
      'Seamless integration with the Asset Tracking Center software',
    ],
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'security-patrol-robot-ga7',
    name: 'Security Patrol Robot — GA7',
    shortName: 'GA7',
    tagline: 'AI-powered urban security patrol with four-direction panoramic monitoring',
    description:
      'The GA7 pairs redundant navigation and obstacle-avoidance design with four-direction panoramic video imaging, and reserves interfaces for functional expansion. Integrating an AI large model, high-definition image recognition, multimodal voice interaction, and LIDAR navigation, it closes the loop on "smart patrol, risk alerts, convenient services, and data traceability" — bringing industrial-grade protection and all-weather operation to urban security.',
    category: 'electric',
    keyword: 'security patrol robot GA7',
    image: ga7Img,
    heroImage: ga7Img,
    specs: [
      { label: 'Rating', value: 'General/urban deployment, IP65' },
      { label: 'Dimensions', value: '1070×580×840mm' },
      { label: 'Weight', value: '150 kg' },
      { label: 'Mobility', value: 'Four-wheel, eight-drive, 0–0.9 m/s — climbs 15° slopes' },
      { label: 'Battery Life', value: '5 hours operating · charges to 80% in 3h' },
      { label: 'Positioning', value: 'Laser navigation, ±3cm accuracy' },
    ],
    certifications: ['CE', 'FCC'],
    useCases: [
      'Autonomous boundary and perimeter security patrol',
      'Multilingual public-space interaction and anti-fraud publicity',
      'Abnormal-behavior monitoring with patrol report traceability',
    ],
    features: [
      'AI large model with high-definition image recognition',
      'Four-direction panoramic imaging with redundant navigation',
      'Multimodal voice interaction and multilingual support',
      'One-click return-to-home with automatic charging station docking',
    ],
  },
  {
    slug: 'electric-rail-robot',
    name: 'Power Rail-Mounted Robotic System',
    shortName: 'Power Rail-Mounted',
    tagline: 'Continuously-powered rail monitoring for narrow power infrastructure',
    description:
      'A sliding contact line provides continuous power, eliminating battery-life interruptions entirely. The single-rail drive structure, combined with RFID calibration, achieves high positioning accuracy and safe control in unexpected situations, continuously transmitting real-time data to verify electrical room and utility tunnel equipment status. An ultra-compact design purpose-built for narrow power-field scenarios.',
    category: 'electric',
    keyword: 'electric rail mounted inspection robot',
    image: powerRailImg,
    heroImage: powerRailImg,
    specs: [
      { label: 'Rating', value: 'General industrial (non-Ex), IP55' },
      { label: 'Dimensions', value: '450×330×760mm' },
      { label: 'Weight', value: '30 kg' },
      { label: 'Mobility', value: 'Single-rail drive — climbs 25° grades' },
      { label: 'Power', value: 'Continuous via sliding contact line — no charging downtime' },
      { label: 'Positioning', value: 'Odometry + RFID, ±3mm accuracy' },
    ],
    certifications: ['CE', 'FCC'],
    useCases: [
      'Continuous 24/7 monitoring of electrical rooms and utility tunnels',
      'Transmission line and substation inspection',
      'Data center and generator set room patrol',
    ],
    features: [
      'Continuous power via sliding contact line — no battery downtime',
      'RFID calibration for millimeter-level positioning accuracy',
      'Rail-powered for permanent, uninterrupted installation',
      'Shares sensor and software platform with the full product line',
    ],
  },
  {
    slug: 'asset-tracking-center-software',
    name: 'Asset/Equipment Tracking Center',
    shortName: 'Tracking Center',
    tagline: 'The software layer that unifies your entire robot fleet',
    description:
      'The Asset/Equipment Tracking Center is the software layer that connects every robot in your fleet — quadruped, wheeled, tracked, and rail — into a single operations dashboard. Monitor patrols in real time, review inspection data, manage robot schedules, and generate compliance reports, all from one platform.',
    category: 'software',
    keyword: 'robot fleet management software',
    image: assetTrackingImg,
    heroImage: assetTrackingImg,
    specs: [
      { label: 'Deployment', value: 'Cloud or on-premise' },
      { label: 'Fleet Size', value: 'Unlimited robots and sensors' },
      { label: 'Data Retention', value: 'Configurable, up to 5 years' },
      { label: 'Reports', value: 'Automated compliance + custom exports' },
      { label: 'Access', value: 'Role-based, multi-site, multi-user' },
      { label: 'Integration', value: 'REST API, SCADA, DCS connectors' },
    ],
    certifications: ['ISO 27001 roadmap'],
    useCases: [
      'Multi-site fleet management for refineries and plants',
      'Automated compliance reporting for audit readiness',
      'Real-time alert routing to operations and HSE teams',
    ],
    features: [
      'Unified dashboard for all robot types and sensor payloads',
      'Automated patrol scheduling and route management',
      'AI-powered anomaly detection with historical trend analysis',
      'Compliance report generation for audit and regulatory submissions',
      'REST API for integration with existing SCADA and DCS systems',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'explosion-proof-charging-room',
    name: 'Explosion-Proof Charging Room — SREX-CDF',
    shortName: 'Charging Room',
    tagline: 'Purpose-built safe charging and storage for outdoor wheeled robots',
    description:
      'A facility specifically designed for wheeled robots in outdoor inspection applications, the SREX-CDF is equipped internally with an electric door, charging stations, and a lighting system. Suitable for IIB/IIC hazardous environments, it provides a safe, reliable charging and temporary storage location for robots operating in the field.',
    category: 'peripheral',
    keyword: 'explosion proof robot charging room',
    image: chargingRoomImg,
    heroImage: chargingRoomImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb / Ex IIC T4 Gb' },
      { label: 'Dimensions', value: '2000×2900×2500mm' },
      { label: 'Weight', value: '2 tons' },
      { label: 'Wind Resistance', value: 'Level 8, automatic rolling shutter door' },
      { label: 'Charging', value: 'Three-stage: constant-current, constant-voltage, trickle' },
      { label: 'Interior', value: 'Explosion-proof lighting, ventilation fan, charging station, control cabinet' },
    ],
    certifications: ['IIB T4 Gb', 'IIC T4 Gb'],
    useCases: [
      'Field charging infrastructure for outdoor wheeled robot fleets',
      'Weather- and hazard-protected robot storage between patrols',
      'Sites requiring IIB/IIC-rated outdoor charging installations',
    ],
    features: [
      'Rated for both IIB and IIC hazardous atmospheres',
      'Level-8 wind resistance with automatic shutter door',
      'Optional heating, cooling, smoke sensor, and camera add-ons',
      'Three-stage charging protects battery life over time',
    ],
  },
  {
    slug: 'industrial-network-pc',
    name: 'Industrial Network PC — E01 / E02',
    shortName: 'Network PC',
    tagline: 'Router, switch, and vehicle control unit in one industrial module',
    description:
      'The industrial network PC integrates router, switch, and vehicle control unit (VCU) functions using an industrial-grade wireless router module, a 4G/5G wireless module, a 100/1000Mbps auto-negotiating switch chip, and a high-performance MCU. Used across robots, robotic arms, and industrial IoT deployments, it comes in two models depending on the installed communication module: the 4G E01 and the 5G E02.',
    category: 'peripheral',
    keyword: 'industrial network PC robot connectivity',
    image: industrialPcImg,
    heroImage: industrialPcImg,
    specs: [
      { label: 'Dimensions', value: '142×110.5×43mm' },
      { label: 'Operating Temperature', value: 'E01: -40°C to 80°C · E02: -40°C to 75°C' },
      { label: '4G (E01)', value: 'LTE CAT4 — 150 Mbps down / 50 Mbps up' },
      { label: '5G (E02)', value: 'NR Sub-6GHz — 2.4 Gbps down / 900 Mbps up' },
      { label: 'Wi-Fi', value: 'Dual-band 802.11a/b/g/n/ac/ax, up to 2402 Mbps' },
    ],
    certifications: [],
    useCases: [
      'Connectivity module for any robot in the fleet',
      'Industrial IoT deployments requiring integrated routing and control',
      'Sites needing a 5G upgrade path (E02) over standard 4G (E01)',
    ],
    features: [
      'Combines router, switch, and vehicle control unit in one module',
      'Extreme-temperature rated: -40°C operating floor',
      '4G or 5G variant depending on site connectivity needs',
      'Dual-band Wi-Fi with high-throughput auto-negotiating switch',
    ],
  },
  {
    slug: 'ai-compute-module',
    name: 'Industrial PC — A01 AI Compute Module',
    shortName: 'AI Compute Module',
    tagline: 'Modular on-robot AI compute for deploying inspection algorithms at the edge',
    description:
      'A modular industrial PC combining an X86 embedded module, an AI compute module, and an industrial PC backplane in an aluminum profile enclosure. The low-power X86 platform and NVIDIA Jetson Xavier NX platform support microservice management systems and AI algorithms, enabling inspection algorithms to run directly on the robot. Available in flat and stacked form factors to suit different mounting needs.',
    category: 'peripheral',
    keyword: 'robot AI compute module industrial PC',
    image: aiComputeImg,
    heroImage: aiComputeImg,
    specs: [
      { label: 'X86 Platform', value: 'Intel Atom X7-E3950, 2.0 GHz (up to 2.41 GHz burst)' },
      { label: 'AI Platform', value: 'NVIDIA Jetson Xavier NX, 21 TOPS' },
      { label: 'Memory', value: 'LPDDR4 8/16GB · DDR3L 8GB' },
      { label: 'Storage', value: '256GB M.2 2280 SSD / mSATA SSD' },
      { label: 'Form Factors', value: 'Flat (tiled) and stacked variants' },
    ],
    certifications: [],
    useCases: [
      'On-robot deployment of AI inspection algorithms without cloud dependency',
      'Sites requiring offline, low-latency anomaly detection',
      'Retrofit compute upgrade for existing robot deployments',
    ],
    features: [
      '21 TOPS AI compute via NVIDIA Jetson Xavier NX',
      'Runs inspection algorithms directly on the robot, no round-trip to cloud',
      'Flat or stacked form factor to fit different robot chassis',
      'Aluminum profile enclosure with active cooling',
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === 'en') return product;
  const translation = translationsByLocale[locale][product.slug];
  return translation ? { ...product, ...translation } : product;
}

export function getLocalizedProducts(locale: Locale): Product[] {
  return products.map((p) => localizeProduct(p, locale));
}

export function getLocalizedProduct(slug: string, locale: Locale): Product | undefined {
  const product = getProduct(slug);
  return product ? localizeProduct(product, locale) : undefined;
}
