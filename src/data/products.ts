import quadrupedImg from '@/assets/robots/quadruped.png';
import l4sImg from '@/assets/robots/l4s-wheeled.png';
import railImg from '@/assets/robots/rail-mounted.png';
import trackedImg from '@/assets/robots/tracked.png';
import firefightingImg from '@/assets/robots/firefighting.png';
import electricWheeledImg from '@/assets/robots/electric-wheeled.png';
import electricRailImg from '@/assets/robots/electric-rail.png';
import assetTrackingImg from '@/assets/robots/asset-tracking-center.png';

export type ProductCategory = 'explosion-proof' | 'electric' | 'software';

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
}

export const products: Product[] = [
  {
    slug: 'explosion-proof-quadruped-robot',
    name: 'Explosion-Proof Quadruped Robot',
    shortName: 'Quadruped Robot',
    tagline: 'Agile legged inspection for complex, cluttered hazardous zones',
    description:
      'A quadruped robot engineered for explosive atmospheres, combining legged mobility with certified explosion-proof protection. High-precision image acquisition, analysis, and perception let it move freely on stairs, steps, and uneven terrain that wheeled robots cannot reach — carrying thermal and gas sensors into the most challenging hazardous-area inspections. Its emergency-response applicability extends beyond inspection to unmanned reconnaissance, material transport, and rescue support.',
    category: 'explosion-proof',
    keyword: 'explosion proof quadruped robot',
    image: quadrupedImg,
    heroImage: quadrupedImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Mobility', value: 'Quadruped — stairs, slopes up to 35°' },
      { label: 'Payload', value: '5 kg' },
      { label: 'Battery Life', value: '2 hours continuous patrol' },
      { label: 'Sensors', value: 'Thermal, gas, HD camera, LIDAR' },
      { label: 'Comms', value: 'Wi-Fi / 4G / optional fiber tether' },
    ],
    certifications: ['IIB T4 Gb', 'IECEx', 'ATEX'],
    useCases: [
      'Stairwell and multi-level robot inspections in petrochemical plants',
      'Narrow corridor patrol in confined processing units',
      'Post-incident structural assessment before human re-entry',
      'Material transport and rescue support in emergency response scenarios',
    ],
    features: [
      'Legged mobility reaches areas wheeled robots cannot access',
      'Certified for Zone 1 hazardous atmospheres',
      'Autonomous patrol with obstacle avoidance and route replay',
      'Real-time thermal anomaly and gas leak detection',
      'High-precision image acquisition and perception for reconnaissance and maintenance support',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'explosion-proof-wheeled-robot-l4s',
    name: 'Explosion-Proof Wheeled Robot — L4-S',
    shortName: 'L4-S Wheeled Robot',
    tagline: 'The flagship wheeled inspection robot for Zone 1 hazardous areas',
    description:
      'The L4-S is the flagship explosion-proof wheeled inspection robot, third-generation in the wheeled line and purpose-built to solve inspection challenges in complex industrial sites. A flexible, modular, integrated design keeps it compact — under 655 mm wide and 1000 mm tall — so it maneuvers through narrow passages, equipment gaps, and pipeline clearances that larger robots cannot enter. Full-degree-of-freedom steering, gimbal rotation, and pitch adjustment adapt it to varied terrain, while an advanced suspension and drive system keep it stable on pipe racks, steps, cable trenches, potholes, and mud.',
    category: 'explosion-proof',
    keyword: 'explosion proof wheeled robot',
    image: l4sImg,
    heroImage: l4sImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIC T6 Gb (highest gas group)' },
      { label: 'Dimensions', value: 'Width < 655 mm · Height < 1000 mm' },
      { label: 'Mobility', value: '4-wheel drive, full-DOF steering, autonomous navigation' },
      { label: 'Payload', value: '15 kg' },
      { label: 'Battery Life', value: '8 hours continuous patrol' },
      { label: 'Sensors', value: 'Thermal, HD, gas, acoustic, LIDAR' },
      { label: 'Environmental Protection', value: 'Resists salt spray, strong acids and alkalis — rated for offshore platforms' },
      { label: 'Comms', value: '5G / Wi-Fi / fiber tether' },
    ],
    certifications: ['IIC T6 Gb', 'IECEx', 'ATEX'],
    useCases: [
      'Continuous perimeter and asset patrol across large refineries',
      'Tank farm inspection and thermal monitoring',
      'Gas leak detection and source localization in processing units',
      'Offshore drilling platforms, pump groups, and LNG stations',
    ],
    features: [
      'Highest explosion rating — certified for IIC atmospheres including hydrogen',
      '8-hour continuous patrol on a single charge',
      'Autonomous route planning with dynamic obstacle avoidance',
      'Integrated multi-sensor payload with AI anomaly detection',
      'Corrosion-resistant construction rated for offshore and coastal environments',
      'Visual recognition flags personnel PPE violations in real time',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'iecex-vs-nec-guide',
  },
  {
    slug: 'explosion-proof-rail-robot',
    name: 'Explosion-Proof Rail-Mounted Robot',
    shortName: 'Rail Robot',
    tagline: 'Fixed-rail inspection for repetitive, high-precision monitoring',
    description:
      'A rail-mounted explosion-proof robot for continuous, repeatable inspection along fixed paths. Ideal for long pipe racks, conveyor systems, and gantry structures where a permanent installation enables 24/7 monitoring without the variability of free-roaming robots.',
    category: 'explosion-proof',
    keyword: 'explosion proof rail mounted robot',
    image: railImg,
    heroImage: railImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Mobility', value: 'Fixed-rail, up to 500 m track' },
      { label: 'Payload', value: '10 kg' },
      { label: 'Battery Life', value: 'Continuous (rail-powered option)' },
      { label: 'Sensors', value: 'Thermal, HD, gas, vibration' },
      { label: 'Comms', value: 'Wired / Wi-Fi' },
    ],
    certifications: ['IIB T4 Gb', 'IECEx', 'ATEX'],
    useCases: [
      '24/7 pipe rack and conveyor inspection in refineries',
      'Gantry crane structural monitoring',
      'Long-run cable tray inspection in power plants',
    ],
    features: [
      'Permanent installation enables true 24/7 monitoring',
      'Rail-powered option eliminates battery swap downtime',
      'Millimeter-precise repeatability for trend analysis',
      'Explosion-proof for Zone 1 deployment along infrastructure',
    ],
    relatedCaseStudy: 'indonesia-gas',
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'explosion-proof-tracked-robot',
    name: 'Explosion-Proof Tracked Robot',
    shortName: 'Tracked Robot',
    tagline: 'All-terrain tracked inspection for the harshest environments',
    description:
      'A tracked explosion-proof robot built for extreme terrain — mud, gravel, debris, and post-incident environments. Its rugged tracks provide superior traction where wheels lose grip, making it the robot of choice for outdoor hazardous-area patrol and emergency response support.',
    category: 'explosion-proof',
    keyword: 'explosion proof tracked robot',
    image: trackedImg,
    heroImage: trackedImg,
    specs: [
      { label: 'Explosion Rating', value: 'Ex IIB T4 Gb' },
      { label: 'Mobility', value: 'Tracked — slopes up to 40°, mud, debris' },
      { label: 'Payload', value: '20 kg' },
      { label: 'Battery Life', value: '6 hours continuous patrol' },
      { label: 'Sensors', value: 'Thermal, HD, gas, environmental' },
      { label: 'Comms', value: '4G / Wi-Fi / fiber tether' },
    ],
    certifications: ['IIB T4 Gb', 'IECEx', 'ATEX'],
    useCases: [
      'Outdoor tank farm and pipeline patrol in all weather',
      'Post-incident debris-field reconnaissance',
      'Mining and quarry inspection in explosive dust atmospheres',
    ],
    features: [
      'Superior traction on mud, gravel, and debris-covered terrain',
      'Highest payload capacity in the explosion-proof line',
      'Rugged enclosure certified for Zone 1 hazardous atmospheres',
      'Emergency response ready with real-time video and gas monitoring',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'iecex-vs-nec-guide',
  },
  {
    slug: 'firefighting-reconnaissance-robot',
    name: 'Firefighting Reconnaissance Robot',
    shortName: 'Firefighting Robot',
    tagline: 'Front-line reconnaissance for fire and emergency response teams',
    description:
      'A specialized reconnaissance robot for firefighting and emergency response, designed to enter high-risk fire and hazardous-atmosphere scenes ahead of human teams. Equipped with thermal imaging, gas detection, and high-definition video, it provides real-time situational awareness to incident commanders.',
    category: 'explosion-proof',
    keyword: 'firefighting reconnaissance robot',
    image: firefightingImg,
    heroImage: firefightingImg,
    specs: [
      { label: 'Protection Rating', value: 'Heat-resistant, explosion-proof' },
      { label: 'Mobility', value: 'Tracked — debris, slopes up to 40°' },
      { label: 'Payload', value: '25 kg (monitoring + response payload)' },
      { label: 'Battery Life', value: '4 hours continuous operation' },
      { label: 'Sensors', value: 'Thermal, HD, gas, ambient temperature' },
      { label: 'Comms', value: '4G / fiber tether (fire-resistant)' },
    ],
    certifications: ['IIB T4 Gb', 'IECEx', 'ATEX'],
    useCases: [
      'Fire scene reconnaissance before human team entry',
      'Hazardous material incident assessment and gas monitoring',
      'Industrial accident response and structural assessment',
    ],
    features: [
      'Heat-resistant enclosure for proximity to fire scenes',
      'Real-time thermal and gas feed to incident command',
      'Fiber tether option for reliable comms in RF-hostile environments',
      'Designed alongside fire service professionals for operational relevance',
    ],
    relatedCaseStudy: 'iraq-basra-missan',
    relatedResource: 'iecex-vs-nec-guide',
  },
  {
    slug: 'electric-wheeled-robot',
    name: 'Electric Wheeled Robot',
    shortName: 'Electric Wheeled',
    tagline: 'Non-hazardous area inspection for general industrial sites',
    description:
      'An electric wheeled inspection robot for non-hazardous industrial environments. Shares the same autonomous navigation and sensor suite as the explosion-proof line, making it ideal for facilities that need automated patrol without the cost of explosion-proof certification.',
    category: 'electric',
    keyword: 'electric wheeled inspection robot',
    image: electricWheeledImg,
    heroImage: electricWheeledImg,
    specs: [
      { label: 'Rating', value: 'General industrial (non-Ex)' },
      { label: 'Mobility', value: '4-wheel drive, autonomous navigation' },
      { label: 'Payload', value: '15 kg' },
      { label: 'Battery Life', value: '10 hours continuous patrol' },
      { label: 'Sensors', value: 'Thermal, HD, acoustic, LIDAR' },
      { label: 'Comms', value: 'Wi-Fi / 4G / 5G' },
    ],
    certifications: ['CE', 'FCC'],
    useCases: [
      'General factory and warehouse patrol',
      'Power generation facility monitoring (non-hazardous zones)',
      'Perimeter security and asset inspection for large facilities',
    ],
    features: [
      'Same autonomous navigation platform as the explosion-proof line',
      '10-hour patrol endurance for large facility coverage',
      'Lower cost for non-hazardous area deployment',
      'Seamless integration with the Asset Tracking Center software',
    ],
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'electric-rail-robot',
    name: 'Electric Rail-Mounted Robot',
    shortName: 'Electric Rail',
    tagline: 'Fixed-rail monitoring for non-hazardous infrastructure',
    description:
      'An electric rail-mounted inspection robot for non-hazardous environments. Provides the same 24/7 continuous monitoring capability as the explosion-proof rail robot, for facilities and infrastructure that do not require hazardous-area certification.',
    category: 'electric',
    keyword: 'electric rail mounted inspection robot',
    image: electricRailImg,
    heroImage: electricRailImg,
    specs: [
      { label: 'Rating', value: 'General industrial (non-Ex)' },
      { label: 'Mobility', value: 'Fixed-rail, up to 500 m track' },
      { label: 'Payload', value: '10 kg' },
      { label: 'Battery Life', value: 'Continuous (rail-powered option)' },
      { label: 'Sensors', value: 'Thermal, HD, vibration, acoustic' },
      { label: 'Comms', value: 'Wired / Wi-Fi' },
    ],
    certifications: ['CE', 'FCC'],
    useCases: [
      'Long-run conveyor and pipe inspection in non-hazardous areas',
      'Warehouse and distribution center monitoring',
      'Solar farm and renewable energy infrastructure patrol',
    ],
    features: [
      'Continuous 24/7 monitoring without battery limitations',
      'Rail-powered for permanent installation',
      'Shares sensor and software platform with the full product line',
      'Cost-effective for non-hazardous infrastructure',
    ],
    relatedResource: 'ul-6260-explainer',
  },
  {
    slug: 'asset-tracking-center-software',
    name: 'Asset/Equipment Tracking Center',
    shortName: 'Tracking Center',
    tagline: 'The software platform that unifies your robot fleet',
    description:
      'The Asset/Equipment Tracking Center is the software layer that connects every robot in your fleet into a single operations dashboard. Monitor patrols in real time, review inspection data, manage robot schedules, and generate compliance reports — all from one platform.',
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
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
