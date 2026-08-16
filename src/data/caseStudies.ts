import iraqImg from '@/assets/robots/case-iraq.png';
import indonesiaImg from '@/assets/robots/case-indonesia.png';
import basfImg from '@/assets/cases/basf.jpg';

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  location: string;
  region: string;
  phase: string;
  image: string;
  challenge: string;
  solution: string;
  productsUsed: string[];
  results?: { metric: string; value: string }[];
  quote?: { text: string; author: string; role: string };
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'iraq-basra-missan',
    title: 'Iraq: Basra & Missan Oilfield Digitalization',
    client: 'Major Iraqi Oil Operator',
    location: 'Basra & Missan, Iraq',
    region: 'Middle East',
    phase: 'Phase 1',
    image: iraqImg,
    challenge:
      'Two large oilfield complexes in southern Iraq required continuous inspection of processing units, tank farms, and pipe racks spread across remote desert sites. Manual inspection was limited by extreme heat, hazardous atmospheres, and the logistical difficulty of staffing round-the-clock patrols in remote locations. The operator needed a solution that could provide 24/7 monitoring while reducing personnel exposure to hazardous areas.',
    solution:
      'A fleet of explosion-proof wheeled (L4-S) and tracked robots was deployed across both oilfield sites, integrated with the Asset Tracking Center software for centralized operations. The robots perform autonomous patrol routes covering processing units, tank farm perimeters, and critical pipe racks, with thermal and gas sensors feeding real-time alerts to a central control room.',
    productsUsed: ['explosion-proof-wheeled-robot-l4s', 'explosion-proof-tracked-robot', 'asset-tracking-center-software'],
    results: [
      { metric: 'Inspection Coverage', value: '24/7 autonomous patrol' },
      { metric: 'Personnel Exposure', value: 'Reduced 70% in hazardous zones' },
      { metric: 'Incident Detection', value: '12 thermal anomalies caught early' },
      { metric: 'Sites Deployed', value: '2 oilfield complexes' },
    ],
    quote: {
      text: 'The robot fleet has transformed our inspection program. We now have continuous monitoring of critical assets without sending personnel into hazardous areas on every shift. The early detection of thermal anomalies alone has paid for the investment.',
      author: 'Operations Director',
      role: 'Iraqi Oil Operator',
    },
    description:
      'How explosion-proof inspection robots digitalized inspection at two major Iraqi oilfield complexes, reducing personnel exposure and catching thermal anomalies before they became incidents.',
  },
  {
    slug: 'indonesia-gas',
    title: 'Indonesia Gas Project',
    client: 'Indonesian Gas Processing Operator',
    location: 'Banten, Indonesia',
    region: 'Southeast Asia',
    phase: 'Phase 1',
    image: indonesiaImg,
    challenge:
      'A gas processing facility in Banten, Indonesia needed continuous monitoring of a large gas processing train and associated pipe rack infrastructure. The facility operated with a lean inspection team, and manual patrol could not provide the frequency or consistency required for a high-risk gas processing environment. The operator needed a solution that could detect gas leaks and thermal anomalies in real time, without expanding the inspection headcount.',
    solution:
      'Explosion-proof rail-mounted and wheeled robots were deployed along the gas processing train and pipe rack, with the rail robot providing 24/7 fixed-path monitoring and the wheeled robot handling flexible patrol of surrounding areas. Both feed into the Asset Tracking Center for unified monitoring, alert routing, and compliance reporting.',
    productsUsed: ['explosion-proof-rail-robot-g7-module', 'explosion-proof-wheeled-robot-l4s', 'asset-tracking-center-software'],
    results: [
      { metric: 'Monitoring Frequency', value: 'From daily to continuous' },
      { metric: 'Gas Leak Detection', value: '3 leaks detected in first quarter' },
      { metric: 'Inspection Headcount', value: 'No increase required' },
      { metric: 'Compliance Reports', value: 'Automated, audit-ready' },
    ],
    description:
      'How a gas processing facility in Indonesia achieved continuous monitoring with a lean inspection team, using rail and wheeled explosion-proof robots with centralized software.',
  },
  {
    slug: 'basf-global',
    title: 'BASF Global',
    client: 'BASF',
    location: 'Global chemical manufacturing sites',
    region: 'Global',
    phase: 'New client — 2026',
    image: basfImg,
    challenge:
      'As one of the world\'s largest chemical producers, BASF operates processing environments where flammable, corrosive, and toxic conditions make manual inspection both hazardous and costly — the same class of Zone 1 risk that explosion-proof robotics is built to address.',
    solution:
      'Qiteng Robotics counts BASF among its established international manufacturing and industrial partners, alongside operators such as PetroChina and Sinopec. Hazlocrobotics is proud to note BASF as one of the newest additions to that client relationship as of 2026, extending the line\'s deployment into the global chemical sector.',
    productsUsed: ['explosion-proof-wheeled-robot-l4s', 'explosion-proof-quadruped-robot', 'asset-tracking-center-software'],
    description:
      'BASF joins Qiteng Robotics\' roster of major international chemical and energy operators as a new client in 2026 — full deployment details to follow as the engagement progresses.',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
