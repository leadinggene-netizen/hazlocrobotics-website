export interface CaseStudyTranslation {
  title: string;
  client: string;
  location: string;
  region: string;
  phase: string;
  challenge: string;
  solution: string;
  results?: { metric: string; value: string }[];
  quote?: { text: string; author: string; role: string };
  description: string;
}

export const caseStudiesFr: Record<string, CaseStudyTranslation> = {
  'iraq-basra-missan': {
    title: 'Irak : numérisation des champs pétroliers de Basra et Missan',
    client: 'Grand opérateur pétrolier irakien',
    location: 'Basra et Missan, Irak',
    region: 'Moyen-Orient',
    phase: 'Phase 1',
    challenge:
      'Deux grands complexes pétroliers du sud de l\'Irak nécessitaient une inspection continue des unités de traitement, parcs de réservoirs et racks de tuyauterie répartis sur des sites désertiques isolés. L\'inspection manuelle était limitée par la chaleur extrême, les atmosphères dangereuses et la difficulté logistique de maintenir des patrouilles 24h/24 dans des lieux éloignés. L\'opérateur avait besoin d\'une solution offrant une surveillance continue tout en réduisant l\'exposition du personnel aux zones dangereuses.',
    solution:
      'Une flotte de robots à roues antidéflagrants (L4-S) et chenillés a été déployée sur les deux sites pétroliers, intégrée au logiciel Asset Tracking Center pour des opérations centralisées. Les robots effectuent des itinéraires de patrouille autonomes couvrant les unités de traitement, les périmètres de parcs de réservoirs et les racks de tuyauterie critiques, avec des capteurs thermiques et de gaz transmettant des alertes en temps réel à une salle de contrôle centrale.',
    results: [
      { metric: 'Couverture d\'inspection', value: 'Patrouille autonome 24/7' },
      { metric: 'Exposition du personnel', value: 'Réduite de 70% en zones dangereuses' },
      { metric: 'Détection d\'incidents', value: '12 anomalies thermiques détectées tôt' },
      { metric: 'Sites déployés', value: '2 complexes pétroliers' },
    ],
    quote: {
      text: 'La flotte de robots a transformé notre programme d\'inspection. Nous disposons maintenant d\'une surveillance continue des actifs critiques sans envoyer de personnel en zone dangereuse à chaque quart. La détection précoce des anomalies thermiques à elle seule a rentabilisé l\'investissement.',
      author: 'Directeur des opérations',
      role: 'Opérateur pétrolier irakien',
    },
    description:
      'Comment des robots d\'inspection antidéflagrants ont numérisé l\'inspection de deux grands complexes pétroliers irakiens, réduisant l\'exposition du personnel et détectant les anomalies thermiques avant qu\'elles ne deviennent des incidents.',
  },
  'indonesia-gas': {
    title: 'Projet gazier en Indonésie',
    client: 'Opérateur indonésien de traitement de gaz',
    location: 'Banten, Indonésie',
    region: 'Asie du Sud-Est',
    phase: 'Phase 1',
    challenge:
      'Une installation de traitement de gaz à Banten, en Indonésie, nécessitait une surveillance continue d\'un grand train de traitement de gaz et de l\'infrastructure de racks de tuyauterie associée. L\'installation fonctionnait avec une équipe d\'inspection réduite, et la patrouille manuelle ne pouvait fournir la fréquence ou la constance requises pour un environnement de traitement de gaz à haut risque. L\'opérateur avait besoin d\'une solution capable de détecter les fuites de gaz et anomalies thermiques en temps réel, sans augmenter l\'effectif d\'inspection.',
    solution:
      'Des robots antidéflagrants sur rail et à roues ont été déployés le long du train de traitement de gaz et du rack de tuyauterie, le robot sur rail assurant une surveillance continue à trajet fixe 24/7 et le robot à roues gérant la patrouille flexible des zones environnantes. Les deux alimentent l\'Asset Tracking Center pour une surveillance unifiée, l\'acheminement des alertes et les rapports de conformité.',
    results: [
      { metric: 'Fréquence de surveillance', value: 'De quotidienne à continue' },
      { metric: 'Détection de fuites de gaz', value: '3 fuites détectées au premier trimestre' },
      { metric: 'Effectif d\'inspection', value: 'Aucune augmentation requise' },
      { metric: 'Rapports de conformité', value: 'Automatisés, prêts pour audit' },
    ],
    description:
      'Comment une installation de traitement de gaz en Indonésie a atteint une surveillance continue avec une équipe d\'inspection réduite, grâce à des robots antidéflagrants sur rail et à roues avec logiciel centralisé.',
  },
  'basf-global': {
    title: 'BASF Global',
    client: 'BASF',
    location: 'Sites de fabrication chimique mondiaux',
    region: 'Mondial',
    phase: 'Nouveau client — 2026',
    challenge:
      'En tant que l\'un des plus grands producteurs chimiques au monde, BASF exploite des environnements de traitement où les conditions inflammables, corrosives et toxiques rendent l\'inspection manuelle à la fois dangereuse et coûteuse — le même type de risque de Zone 1 auquel la robotique antidéflagrante est conçue pour répondre.',
    solution:
      'Qiteng Robotics compte BASF parmi ses partenaires industriels et manufacturiers internationaux établis, aux côtés d\'opérateurs tels que PetroChina et Sinopec. Hazlocrobotics est fière de souligner BASF comme l\'un des plus récents ajouts à cette relation client depuis 2026, étendant le déploiement de la gamme au secteur chimique mondial.',
    description:
      'BASF rejoint la liste des grands opérateurs chimiques et énergétiques internationaux de Qiteng Robotics en tant que nouveau client en 2026 — les détails complets du déploiement suivront à mesure que l\'engagement progresse.',
  },
};
