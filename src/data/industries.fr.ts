export interface IndustryTranslation {
  name: string;
  shortName: string;
  tagline: string;
  challenge: string;
  description: string;
  buyingCommittee: string[];
  keyBenefits: string[];
}

export const industriesFr: Record<string, IndustryTranslation> = {
  'oil-gas-petrochemical': {
    name: 'Pétrole et gaz / Pétrochimie',
    shortName: 'Pétrole et gaz',
    tagline: 'Inspection continue pour les environnements dangereux les plus exigeants au monde',
    challenge:
      'Les raffineries et usines pétrochimiques regorgent de zones dangereuses de Zone 1 où l\'inspection humaine est dangereuse, coûteuse et limitée par les horaires de quart. Les fuites, anomalies thermiques et dégradations structurelles non détectées entraînent des arrêts imprévus, des pénalités réglementaires et des incidents de sécurité catastrophiques.',
    description:
      'Les robots d\'inspection antidéflagrants permettent une patrouille autonome continue des unités de traitement, parcs de réservoirs et racks de tuyauterie — détectant fuites de gaz, anomalies thermiques et problèmes structurels avant qu\'ils ne deviennent des incidents. Déployés dans plus de 40 pays chez les principaux opérateurs pétroliers et gaziers mondiaux.',
    buyingCommittee: ['Directeur HSE', 'Directeur d\'usine', 'Directeur d\'inspection', 'Directeur de projet EPC'],
    keyBenefits: [
      'La patrouille autonome 24/7 remplace l\'inspection manuelle limitée par les quarts',
      'Certifié IIC T6 pour l\'hydrogène et les groupes de gaz les plus exigeants',
      'Détection d\'anomalies thermiques et de gaz avant l\'escalade des incidents',
      'Rapports de conformité automatisés pour les audits OSHA et réglementaires',
    ],
  },
  'power-generation': {
    name: 'Production d\'électricité',
    shortName: 'Électricité',
    tagline: 'Inspection fiable pour les centrales électriques et postes de distribution',
    challenge:
      'Les installations de production d\'électricité — des centrales thermiques aux stations hydroélectriques — nécessitent une surveillance continue des chaudières, turbines, systèmes de convoyeurs et postes de commutation. Ces environnements combinent chaleur, poussière et espaces confinés qui rendent l\'inspection manuelle dangereuse et inconsistante.',
    description:
      'Les robots d\'inspection autonomes offrent une surveillance répétable et à haute fréquence des actifs critiques de production d\'électricité. L\'imagerie thermique détecte la surchauffe des composants avant la défaillance, tandis que la patrouille continue remplace les inspections manuelles coûteuses et dangereuses des chaudières et convoyeurs.',
    buyingCommittee: ['Directeur des opérations', 'Directeur de maintenance', 'Directeur de sécurité'],
    keyBenefits: [
      'La surveillance thermique détecte tôt les défauts de roulements et électriques',
      'Surveillance 24/7 sur rail pour chaudières et convoyeurs',
      'Réduit le risque d\'entrée en espace confiné pour les équipes d\'inspection',
      'L\'analyse de tendances soutient la planification de la maintenance prédictive',
    ],
  },
  'marine-offshore': {
    name: 'Maritime et extracôtier',
    shortName: 'Maritime',
    tagline: 'Inspection pour plateformes offshore et navires maritimes',
    challenge:
      'Les plateformes offshore et navires maritimes présentent des environnements confinés, corrosifs et dangereux où l\'accès pour inspection est difficile et coûteux. Le transport de personnel vers les sites offshore est onéreux, et les fenêtres météorologiques limitent la fréquence d\'inspection.',
    description:
      'Les robots d\'inspection antidéflagrants et électriques réduisent le besoin pour le personnel d\'accéder aux zones offshore dangereuses et confinées. La surveillance continue par un robot déployé réduit les besoins en personnel offshore et fournit une conscience situationnelle en temps réel aux équipes d\'exploitation à terre.',
    buyingCommittee: ['Directeur d\'installation offshore', 'Directeur HSE', 'Directeur des opérations maritimes'],
    keyBenefits: [
      'Réduit l\'exposition du personnel aux espaces offshore confinés et dangereux',
      'Flux vidéo et de capteurs en temps réel vers les centres d\'exploitation à terre',
      'Construction résistante à la corrosion pour environnements marins',
      'Coûts de personnel et de logistique offshore réduits pour l\'inspection courante',
    ],
  },
  'mining': {
    name: 'Exploitation minière',
    shortName: 'Minier',
    tagline: 'Inspection sécuritaire des opérations minières souterraines et de surface',
    challenge:
      'Les environnements miniers combinent des atmosphères de poussières explosives, des espaces souterrains confinés et des conditions de terrain instables. L\'inspection manuelle des tunnels, chantiers et systèmes de convoyeurs expose le personnel à des risques d\'effondrement, de gaz et de poussière inhérents à l\'environnement d\'exploitation.',
    description:
      'Les robots chenillés et quadrupèdes antidéflagrants naviguent dans les tunnels souterrains et les zones minières de surface, fournissant une surveillance visuelle, thermique et environnementale sans exposer les inspecteurs au danger. La patrouille continue détecte les mouvements de terrain, l\'accumulation de gaz et la surchauffe des équipements.',
    buyingCommittee: ['Directeur de mine', 'Surintendant de sécurité', 'Directeur des opérations'],
    keyBenefits: [
      'Antidéflagrant pour les atmosphères de poussières combustibles',
      'Mobilité chenillée pour terrain souterrain accidenté et couvert de débris',
      'Surveillance de gaz pour le méthane et autres gaz miniers',
      'Réduit l\'entrée du personnel dans les zones instables et confinées',
    ],
  },
  'emergency-response': {
    name: 'Intervention d\'urgence',
    shortName: 'Urgence',
    tagline: 'Reconnaissance robotisée pour incidents d\'incendie et de matières dangereuses',
    challenge:
      'Les incidents d\'incendie et de matières dangereuses nécessitent une évaluation rapide de la situation avant que les équipes humaines puissent entrer en sécurité. Les commandants d\'intervention ont besoin d\'informations en temps réel sur la propagation du feu, les concentrations de gaz, l\'intégrité structurelle et l\'emplacement des victimes — des informations impossibles à recueillir en sécurité depuis l\'intérieur de la zone chaude.',
    description:
      'Le robot de reconnaissance incendie pénètre les scènes d\'incendie et de matières dangereuses avant les équipes humaines, transmettant des données thermiques, visuelles et de gaz en temps réel au commandement d\'intervention. Cela permet des décisions éclairées sur le déploiement des équipes, les zones d\'évacuation et l\'allocation des ressources — sauvant des vies et réduisant l\'exposition.',
    buyingCommittee: ['Chef pompier', 'Commandant d\'équipe hazmat', 'Directeur de gestion des urgences'],
    keyBenefits: [
      'Conscience situationnelle en temps réel avant l\'entrée des équipes',
      'Imagerie thermique pour la propagation du feu et la localisation des victimes',
      'Détection de gaz pour l\'évaluation hazmat et la gestion des zones',
      'Résistant à la chaleur et antidéflagrant pour les scènes les plus extrêmes',
    ],
  },
};
