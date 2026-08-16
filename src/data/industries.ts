import { industriesFr } from './industries.fr';

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  challenge: string;
  description: string;
  image: string;
  bestProducts: string[];
  buyingCommittee: string[];
  keyBenefits: string[];
}

export const industries: Industry[] = [
  {
    slug: 'oil-gas-petrochemical',
    name: 'Oil & Gas / Petrochemical',
    shortName: 'Oil & Gas',
    tagline: 'Continuous inspection for the most demanding hazardous environments on earth',
    challenge:
      'Refineries and petrochemical plants are dense with Zone 1 hazardous areas where human inspection is dangerous, costly, and limited by shift schedules. Undetected leaks, thermal anomalies, and structural degradation lead to unplanned shutdowns, regulatory penalties, and catastrophic safety incidents.',
    description:
      'Explosion-proof inspection robots enable continuous autonomous patrol of processing units, tank farms, and pipe racks — detecting gas leaks, thermal anomalies, and structural issues before they become incidents. Deployed in 40+ countries across the world\'s leading oil and gas operators.',
    image: 'https://images.pexels.com/photos/15970032/pexels-photo-15970032.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bestProducts: ['explosion-proof-wheeled-robot-l4s', 'explosion-proof-quadruped-robot', 'explosion-proof-rail-robot-g7-module', 'explosion-proof-tracked-robot'],
    buyingCommittee: ['HSE Director', 'Plant Manager', 'Inspection Manager', 'EPC Project Director'],
    keyBenefits: [
      '24/7 autonomous patrol replaces shift-limited manual inspection',
      'IIC T6 certified for hydrogen and the most demanding gas groups',
      'Thermal and gas anomaly detection before incidents escalate',
      'Automated compliance reporting for OSHA and regulatory audits',
    ],
  },
  {
    slug: 'power-generation',
    name: 'Power Generation',
    shortName: 'Power',
    tagline: 'Reliable inspection for power plants and substations',
    challenge:
      'Power generation facilities — from thermal plants to hydroelectric stations — require continuous monitoring of boilers, turbines, conveyor systems, and switchyards. These environments combine heat, dust, and confined spaces that make manual inspection hazardous and inconsistent.',
    description:
      'Autonomous inspection robots provide repeatable, high-frequency monitoring of critical power generation assets. Thermal imaging detects overheating components before failure, while continuous patrol replaces costly and dangerous manual boiler and conveyor inspections.',
    image: 'https://images.pexels.com/photos/13385063/pexels-photo-13385063.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bestProducts: ['explosion-proof-rail-robot-g7-power', 'electric-wheeled-robot', 'electric-rail-robot', 'asset-tracking-center-software'],
    buyingCommittee: ['Operations Director', 'Maintenance Manager', 'Safety Manager'],
    keyBenefits: [
      'Thermal monitoring detects bearing and electrical faults early',
      'Rail-mounted 24/7 monitoring for boilers and conveyors',
      'Reduces confined-space entry risk for inspection teams',
      'Trend analysis supports predictive maintenance planning',
    ],
  },
  {
    slug: 'marine-offshore',
    name: 'Marine & Offshore',
    shortName: 'Marine',
    tagline: 'Inspection for offshore platforms and marine vessels',
    challenge:
      'Offshore platforms and marine vessels present confined, corrosive, and hazardous environments where inspection access is difficult and costly. Personnel transport to offshore sites is expensive, and weather windows limit inspection frequency.',
    description:
      'Explosion-proof and electric inspection robots reduce the need for personnel to access hazardous and confined offshore areas. Continuous monitoring from a deployed robot reduces offshore staffing requirements and provides real-time situational awareness to onshore operations teams.',
    image: 'https://images.pexels.com/photos/8801960/pexels-photo-8801960.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bestProducts: ['explosion-proof-quadruped-robot', 'explosion-proof-wheeled-robot-l4s', 'asset-tracking-center-software'],
    buyingCommittee: ['Offshore Installation Manager', 'HSE Manager', 'Marine Operations Director'],
    keyBenefits: [
      'Reduces personnel exposure to confined and hazardous offshore spaces',
      'Real-time video and sensor feed to onshore operations centers',
      'Corrosion-resistant construction for marine environments',
      'Lower offshore staffing and logistics costs for routine inspection',
    ],
  },
  {
    slug: 'mining',
    name: 'Mining',
    shortName: 'Mining',
    tagline: 'Safe inspection of underground and surface mining operations',
    challenge:
      'Mining environments combine explosive dust atmospheres, confined underground spaces, and unstable ground conditions. Manual inspection of tunnels, stopes, and conveyor systems exposes personnel to rockfall, gas, and dust hazards that are inherent to the operating environment.',
    description:
      'Explosion-proof tracked and quadruped robots navigate underground tunnels and surface mining areas, providing visual, thermal, and environmental monitoring without putting inspectors at risk. Continuous patrol detects ground movement, gas accumulation, and equipment overheating.',
    image: 'https://images.pexels.com/photos/10016029/pexels-photo-10016029.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bestProducts: ['explosion-proof-tracked-robot', 'explosion-proof-quadruped-robot', 'asset-tracking-center-software'],
    buyingCommittee: ['Mine Manager', 'Safety Superintendent', 'Operations Director'],
    keyBenefits: [
      'Explosion-proof for combustible dust atmospheres',
      'Tracked mobility for uneven and debris-covered underground terrain',
      'Gas monitoring for methane and other mine gases',
      'Reduces personnel entry into unstable and confined areas',
    ],
  },
  {
    slug: 'emergency-response',
    name: 'Emergency Response',
    shortName: 'Emergency',
    tagline: 'Robotic reconnaissance for fire and hazardous material incidents',
    challenge:
      'Fire and hazardous material incidents require rapid situational assessment before human teams can safely enter. Incident commanders need real-time information on fire spread, gas concentrations, structural integrity, and victim location — information that is impossible to gather safely from inside the hot zone.',
    description:
      'The firefighting reconnaissance robot enters fire and hazmat scenes ahead of human teams, transmitting real-time thermal, visual, and gas data to incident command. This enables informed decisions on team deployment, evacuation zones, and resource allocation — saving lives and reducing exposure.',
    image: 'https://images.pexels.com/photos/19487945/pexels-photo-19487945.jpeg?auto=compress&cs=tinysrgb&w=1920',
    bestProducts: ['firefighting-reconnaissance-robot', 'explosion-proof-tracked-robot', 'asset-tracking-center-software'],
    buyingCommittee: ['Fire Chief', 'Hazmat Team Commander', 'Emergency Management Director'],
    keyBenefits: [
      'Real-time situational awareness before team entry',
      'Thermal imaging for fire spread and victim location',
      'Gas detection for hazmat assessment and zone management',
      'Heat-resistant and explosion-proof for the most extreme scenes',
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function localizeIndustry(industry: Industry, locale: 'en' | 'fr'): Industry {
  if (locale === 'en') return industry;
  const fr = industriesFr[industry.slug];
  return fr ? { ...industry, ...fr } : industry;
}

export function getLocalizedIndustries(locale: 'en' | 'fr'): Industry[] {
  return industries.map((i) => localizeIndustry(i, locale));
}

export function getLocalizedIndustry(slug: string, locale: 'en' | 'fr'): Industry | undefined {
  const industry = getIndustry(slug);
  return industry ? localizeIndustry(industry, locale) : undefined;
}
