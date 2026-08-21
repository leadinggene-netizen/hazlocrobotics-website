import { resourcesFr } from './resources.fr';
import { resourcesEs } from './resources.es';
import { resourcesPt } from './resources.pt';
import type { Locale } from '@/i18n/useLocale';

const translationsByLocale: Record<Exclude<Locale, 'en'>, typeof resourcesFr> = {
  fr: resourcesFr,
  es: resourcesEs,
  pt: resourcesPt,
};

export interface ResourceArticle {
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  category: 'Explainer' | 'Guide' | 'Buyer Education' | 'Gated';
  readTime: string;
  date: string;
  excerpt: string;
  body: { heading: string; paragraphs: string[] }[];
  relatedProduct?: string;
  relatedCertification?: boolean;
}

export const resources: ResourceArticle[] = [
  {
    slug: 'ul-6260-explainer',
    title: 'What Is UL 6260? A Certification Guide for Hazardous-Location Robots',
    metaDescription:
      'UL 6260 is the emerging standard for robots in hazardous locations. This guide explains what it covers, where it stands, and what buyers should ask suppliers today.',
    keyword: 'UL 6260',
    category: 'Explainer',
    readTime: '8 min',
    date: '2026-08-01',
    excerpt:
      'UL 6260 is the first standard purpose-built for robots operating in hazardous locations. Here is what it covers, where the certification process stands today, and what to ask a supplier before you deploy.',
    body: [
      {
        heading: 'The Short Answer',
        paragraphs: [
          'UL 6260 is a standard under development by UL Solutions that addresses the safety of robots operating in hazardous (classified) locations — environments where flammable gases, vapors, or dusts may be present. It is the first standard purpose-built for mobile robots in these environments, rather than a repurposed industrial standard.',
          'For buyers, the key point is this: UL 6260 is on the roadmap but not yet a mature, widely-issued certification. Today, the credible path to hazardous-location deployment runs through IECEx and ATEX certifications, which are internationally recognized and well-established. UL 6260 will become the North American benchmark, and Hazloc Robotics is on the roadmap to achieve it.',
        ],
      },
      {
        heading: 'Why UL 6260 Matters',
        paragraphs: [
          'Until now, robots deployed in U.S. hazardous locations have been evaluated against a patchwork of standards that were not designed for mobile, autonomous robots. UL 6260 addresses this gap by providing a unified evaluation framework that considers the unique characteristics of robots — mobility, autonomy, battery systems, and sensor payloads — in the context of explosive atmospheres.',
          'For HSE and compliance teams, a UL 6260-certified robot means the evaluation was done against a standard that actually understands what a robot is and how it behaves in the field. This simplifies the safety case and reduces the burden of proving equivalency to inspectors and insurers.',
        ],
      },
      {
        heading: 'How It Relates to IECEx and ATEX',
        paragraphs: [
          'IECEx and ATEX are the established international systems for certifying equipment for explosive atmospheres. IECEx is the IEC\'s global conformity assessment system, while ATEX is the European directive. Both are widely accepted and have been the basis for certifying industrial equipment in hazardous locations for decades.',
          'UL 6260 is expected to build on the IECEx/ATEX foundation, adding North American-specific requirements aligned with the National Electrical Code (NEC) hazardous location classification system. A robot that already holds IECEx certification is well-positioned on the UL 6260 roadmap, since much of the explosion protection design has already been evaluated.',
        ],
      },
      {
        heading: 'What to Ask a Supplier Today',
        paragraphs: [
          'If you are evaluating a hazardous-location robot today, ask these questions:',
          '1. What IECEx or ATEX certification does the robot hold, and for what gas group and temperature class?',
          '2. What is the supplier\'s roadmap for UL 6260 and CSA certification?',
          '3. Can the supplier provide the full certification documentation, not just a marketing badge?',
          '4. Has the robot been deployed in environments with a similar hazard classification to yours?',
          '5. What is the supplier\'s process for maintaining certification as the product evolves?',
          'Hazloc Robotics publishes its full certification status and roadmap on our Certification & Compliance page. We believe transparency on certification is a baseline requirement, not a differentiator.',
        ],
      },
      {
        heading: 'The Bottom Line',
        paragraphs: [
          'UL 6260 will become the standard that North American buyers and compliance teams look for when evaluating hazardous-location robots. It is not there yet, and any supplier claiming a UL 6260 certification today should be asked to produce the documentation. In the meantime, IECEx and ATEX remain the credible, internationally recognized certifications — and the foundation on which UL 6260 will be built.',
        ],
      },
    ],
    relatedProduct: 'explosion-proof-wheeled-robot-l4s',
    relatedCertification: true,
  },
  {
    slug: 'iecex-vs-nec-guide',
    title: 'IECEx/ATEX vs. NEC Class/Division: Hazardous Location Classification Explained',
    metaDescription:
      'A plain-language comparison of IECEx/ATEX Zone classification and NEC Class/Division systems for buyers evaluating hazardous-location robots.',
    keyword: 'IECEx vs NEC hazardous location',
    category: 'Guide',
    readTime: '10 min',
    date: '2026-08-05',
    excerpt:
      'Two systems classify hazardous locations — the IEC Zone system (IECEx/ATEX) and the NEC Class/Division system. Here is how they compare, and what it means for robot buyers in North America.',
    body: [
      {
        heading: 'Two Systems, One Goal',
        paragraphs: [
          'Both the IECEx/ATEX Zone system and the NEC Class/Division system exist to classify environments where flammable materials may be present, and to specify the equipment that can safely operate in them. They approach the same problem with different frameworks and terminology, which can create confusion when a buyer in North America evaluates equipment certified under the IEC system.',
          'Understanding the basics of both systems is essential for anyone responsible for deploying equipment — including robots — in hazardous locations.',
        ],
      },
      {
        heading: 'The IECEx/ATEX Zone System',
        paragraphs: [
          'The IEC and ATEX systems classify hazardous areas into Zones based on the frequency and duration of the explosive atmosphere:',
          'Zone 0: Explosive atmosphere present continuously or for long periods.',
          'Zone 1: Explosive atmosphere likely to occur in normal operation occasionally.',
          'Zone 2: Explosive atmosphere not likely to occur, and if it does, only for a short time.',
          'For dust environments, Zones 20, 21, and 22 follow the same logic. Equipment is then certified for the appropriate Zone, with gas group (I, IIA, IIB, IIC) and temperature class (T1–T6) specifying the range of explosive atmospheres it is safe for.',
        ],
      },
      {
        heading: 'The NEC Class/Division System',
        paragraphs: [
          'The National Electrical Code (NEC, Article 500) uses a Class and Division system:',
          'Class I: Flammable gases or vapors.',
          'Class II: Combustible dusts.',
          'Class III: Ignitable fibers or flyings.',
          'Divisions: Division 1 means the hazard is present during normal operation; Division 2 means it is present only in abnormal conditions.',
          'Within Class I, gases are grouped (A, B, C, D) and equipment has a temperature class (T1–T6). The mapping is similar in intent to the IEC system, but the categories and labeling differ.',
        ],
      },
      {
        heading: 'Rough Mapping Between Systems',
        paragraphs: [
          'While not an exact equivalence, the following rough mapping helps translate between the two:',
          'IEC Zone 0 ≈ NEC Class I Division 1 (continuous)',
          'IEC Zone 1 ≈ NEC Class I Division 1 (occasional)',
          'IEC Zone 2 ≈ NEC Class I Division 2',
          'IEC Gas Group IIC ≈ NEC Group B (hydrogen) and below',
          'IEC Gas Group IIB ≈ NEC Group C',
          'IEC Gas Group IIA ≈ NEC Group D',
          'This mapping is a starting point, not a substitute for a proper engineering evaluation. Your site\'s electrical engineering and compliance team must make the final determination.',
        ],
      },
      {
        heading: 'What This Means for Robot Buyers',
        paragraphs: [
          'If you are in North America and evaluating a robot certified under IECEx, the certification is credible and internationally recognized — but you need to map it to your site\'s NEC classification to confirm suitability. A robot certified Ex IIC T6 Gb (the highest IEC gas group and temperature class) is broadly suitable for the most demanding Class I environments.',
          'Ask the supplier for the full certification documentation and work with your compliance team to confirm the mapping. Hazloc Robotics provides this documentation and works with buyers\' compliance teams to support site-specific evaluations.',
        ],
      },
    ],
    relatedCertification: true,
  },
  {
    slug: 'buyer-education-robot-inspection-roi',
    title: 'Calculating the ROI of Robot Inspection: A Framework for HSE and Operations Leaders',
    metaDescription:
      'A practical framework for calculating the return on investment of hazardous-location inspection robots, with real cost categories and benefit areas.',
    keyword: 'inspection robot ROI',
    category: 'Buyer Education',
    readTime: '7 min',
    date: '2026-08-10',
    excerpt:
      'How to build a credible business case for hazardous-location inspection robots — moving beyond "it is safer" to quantified cost avoidance, labor savings, and incident prevention.',
    body: [
      {
        heading: 'Why ROI Matters',
        paragraphs: [
          'Safety is the primary driver for adopting hazardous-location inspection robots, but safety alone rarely wins budget approval. Operations and finance leaders need a quantified business case. The good news is that the economics of robot inspection are favorable once you account for the full cost of manual inspection and the full cost of the incidents that robots prevent.',
          'This article provides a framework for building that case, organized into cost categories and benefit areas that you can populate with your own facility data.',
        ],
      },
      {
        heading: 'Cost of Manual Inspection (What You Spend Today)',
        paragraphs: [
          'Direct labor: Inspector hours, including overtime and hazard-pay premiums for hazardous-area work.',
          'Support costs: Gas testing, permits, standby personnel, and confined-space entry teams.',
          'Downtime: Inspection often requires partial shutdown or production reduction.',
          'Frequency gap: Manual inspection is limited by shift schedules, meaning hazards between inspections go undetected.',
          'Incident costs: The average cost of a single undetected leak or thermal failure — including repair, lost production, regulatory penalties, and insurance impact — often exceeds the annual cost of a robot fleet.',
        ],
      },
      {
        heading: 'Benefit Areas of Robot Inspection',
        paragraphs: [
          'Continuous coverage: 24/7 patrol replaces shift-limited manual inspection, reducing the window for undetected hazards.',
          'Labor reallocation: Inspectors shift from routine patrol to exception handling and analysis — higher-value work.',
          'Early detection: Thermal and gas anomalies are caught before they become incidents, avoiding unplanned shutdowns and repair costs.',
          'Compliance efficiency: Automated reporting reduces the time spent preparing for audits and regulatory submissions.',
          'Personnel exposure: Fewer people in hazardous areas means lower risk and lower insurance premiums over time.',
        ],
      },
      {
        heading: 'Building Your Case',
        paragraphs: [
          'Start with one facility or one high-risk area. Quantify the annual cost of manual inspection (all categories above), then estimate the annualized cost of one prevented incident. Compare this to the annualized cost of a robot deployment (lease or purchase, software, maintenance, and training).',
          'In most hazardous-environment deployments we have supported, the break-even point is under 18 months — and that is before accounting for the risk-reduction value that HSE teams care about most.',
        ],
      },
    ],
    relatedProduct: 'explosion-proof-wheeled-robot-l4s',
  },
];

export function getResource(slug: string): ResourceArticle | undefined {
  return resources.find((r) => r.slug === slug);
}

export function localizeResource(resource: ResourceArticle, locale: Locale): ResourceArticle {
  if (locale === 'en') return resource;
  const translation = translationsByLocale[locale][resource.slug];
  return translation ? { ...resource, ...translation } : resource;
}

export function getLocalizedResources(locale: Locale): ResourceArticle[] {
  return resources.map((r) => localizeResource(r, locale));
}

export function getLocalizedResource(slug: string, locale: Locale): ResourceArticle | undefined {
  const resource = getResource(slug);
  return resource ? localizeResource(resource, locale) : undefined;
}
