import type { ProductSpec } from './products';

export interface ProductTranslation {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  specs: ProductSpec[];
  useCases: string[];
  features: string[];
}

export const productsFr: Record<string, ProductTranslation> = {
  'explosion-proof-quadruped-robot': {
    name: 'Robot quadrupède antidéflagrant — X3 Stable',
    shortName: 'X3 Stable',
    tagline: 'Inspection agile sur pattes pour les zones dangereuses complexes et encombrées',
    description:
      'En combinant plusieurs méthodes de conception antidéflagrante, le X3 Stable offre des avantages complets en matière de protection contre les explosions, de légèreté et de fiabilité. Équipé de plus de 500 algorithmes intelligents, d\'apprentissage adaptatif et d\'acquisition d\'images de haute précision, il franchit escaliers, marches, interstices, obstacles et espaces confinés inaccessibles aux robots à roues — et va au-delà de l\'inspection pour assurer la reconnaissance, le transport de matériel et le soutien au sauvetage en situation d\'urgence.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: 'Debout 1200×600×1060mm · Couché 1310×600×590mm' },
      { label: 'Poids', value: '110 kg' },
      { label: 'Charge utile', value: '20 kg' },
      { label: 'Mobilité', value: 'Quadrupède, 14 degrés de liberté (12 + nacelle 2 axes) — pentes de 20°, obstacles de 20cm' },
      { label: 'Autonomie', value: '2 à 3 heures de patrouille continue · charge 3h' },
      { label: 'Capteurs', value: 'Thermique, gaz, caméra HD, LIDAR — navigation laser, précision ±5cm' },
    ],
    useCases: [
      'Inspections de cages d\'escalier et à plusieurs niveaux dans les usines pétrochimiques',
      'Patrouille dans les corridors étroits des unités de traitement confinées',
      'Transport de matériel et soutien au sauvetage en intervention d\'urgence',
    ],
    features: [
      'La mobilité sur pattes atteint des zones inaccessibles aux robots à roues',
      'Plus de 500 algorithmes embarqués pour la perception environnementale et l\'apprentissage autonome',
      'Patrouille autonome avec évitement d\'obstacles et répétition d\'itinéraire',
      'Algorithmes de scénario en option : détection de personnel, aire de pompage, zone de stockage, patrouille de pipeline',
    ],
  },
  'explosion-proof-wheeled-robot-sgls-04': {
    name: 'Robot à roues antidéflagrant — SGLS-04',
    shortName: 'SGLS-04',
    tagline: 'Détection environnementale en temps réel avec diagnostic automatisé des défauts',
    description:
      'Le SGLS-04 recueille et analyse en temps réel les données environnementales du site, permettant le diagnostic automatique des défauts d\'équipement, la maintenance intelligente des installations et l\'investigation des dangers — remplaçant totalement ou partiellement le personnel lors des rondes d\'inspection courantes. Un système de suspension de haute précision améliore la stabilité de conduite et évite les vibrations à haute fréquence en environnement difficile, réduisant les risques et la pénibilité pour les opérateurs.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIB T6 Gb' },
      { label: 'Dimensions', value: '1150×880×1060mm' },
      { label: 'Poids', value: '420 kg' },
      { label: 'Mobilité', value: 'Quatre roues motrices — pentes de 20°, obstacles de 12cm, gué de 20cm' },
      { label: 'Autonomie', value: '5 heures de fonctionnement · charge 3h' },
      { label: 'Capteurs', value: 'Imagerie optique et acoustique — navigation laser, précision ±5cm' },
    ],
    useCases: [
      'Diagnostic automatisé des défauts sur les équipements de traitement pétrochimique',
      'Rondes d\'investigation des dangers en extraction pétrolière et parcs de réservoirs',
      'Patrouille des zones de stockage GNL et de produits finis',
    ],
    features: [
      'Diagnostic automatique des défauts d\'équipement, pas seulement capture vidéo',
      'Suspension de haute précision pour la stabilité en terrain difficile',
      'Mesure de vibration laser et détection de bruit/empreinte vocale en option',
      'Algorithmes de scénario adaptés à l\'extraction pétrolière et au stockage GNL',
    ],
  },
  'explosion-proof-wheeled-robot-sgls-c3': {
    name: 'Robot à roues antidéflagrant — SGLS-C3',
    shortName: 'SGLS-C3',
    tagline: 'Intégration modulaire de capteurs avec sécurité anticollision et détection de tranchées',
    description:
      'Conçu de façon modulaire, le SGLS-C3 intègre facilement divers dispositifs pour répondre aux besoins d\'applications variées — couvrant la détection de fuites, la sécurité des équipements, la sécurité du personnel et la sécurité du site en une seule plateforme. Un système anticollision omnidirectionnel à ultrasons et de détection de tranchées anti-chute protège équipements et personnel, et un ordinateur industriel IA en option permet une reconnaissance et une réponse à la milliseconde.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIC T6 Gb (groupe de gaz le plus élevé)' },
      { label: 'Dimensions', value: '1250×960×920mm' },
      { label: 'Poids', value: '450 kg' },
      { label: 'Mobilité', value: 'Quatre roues motrices, 0–1,4 m/s — pentes de 25°, obstacles de 10cm' },
      { label: 'Autonomie', value: '5 heures d\'autonomie · charge 3h' },
      { label: 'Capteurs', value: 'Imagerie optique et acoustique, bras robotisé en option — navigation laser, précision ±3cm' },
    ],
    useCases: [
      'Inspection des zones de synthèse d\'ammoniac et d\'unités BDO',
      'Patrouille de sécurité en raffinage et unités VCM',
      'Surveillance des fuites et de la sécurité du site à l\'échelle de l\'installation',
    ],
    features: [
      'Intégration modulaire de dispositifs pour des configurations de capteurs spécifiques au site',
      'Anticollision à ultrasons et détection anti-chute de tranchées',
      'Nacelle orientable et bras robotisé en option',
      'Certification Ex IIC — le groupe de gaz le plus élevé, y compris les atmosphères d\'hydrogène',
    ],
  },
  'explosion-proof-wheeled-robot-l4s': {
    name: 'Robot à roues antidéflagrant — L4-S',
    shortName: 'Robot à roues L4-S',
    tagline: 'Le robot d\'inspection à roues phare pour les zones dangereuses de Zone 1',
    description:
      'Le L4-S est le robot d\'inspection à roues antidéflagrant phare, troisième génération de la gamme à roues, conçu pour résoudre les défis d\'inspection dans les sites industriels complexes. Une conception flexible, modulaire et intégrée le maintient compact — 1065×655×1000mm — pour manœuvrer dans les passages étroits, les interstices d\'équipement et les dégagements de canalisations inaccessibles aux robots plus grands. Des capteurs à ultrasons assurent un évitement de collision à 360° sans angle mort, avec une résistance à la corrosion conçue pour les conditions des plateformes offshore.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '1065×655×1000mm' },
      { label: 'Poids', value: '275 kg' },
      { label: 'Mobilité', value: 'Quatre roues motrices, 0–0,9 m/s — pentes de 20°, obstacles de 10cm' },
      { label: 'Autonomie', value: '3 heures de fonctionnement · charge 1,5h' },
      { label: 'Protection environnementale', value: 'IP65 — résistant à la corrosion et à l\'humidité, conçu pour les plateformes offshore' },
      { label: 'Positionnement', value: 'Navigation laser, précision ±3cm' },
    ],
    useCases: [
      'Patrouille continue de périmètre et d\'actifs dans les grandes raffineries',
      'Inspection de parcs de réservoirs et surveillance thermique',
      'Plateformes de forage offshore, groupes de pompage et stations GNL',
    ],
    features: [
      'Suffisamment compact pour l\'inspection de canalisations étroites et d\'interstices d\'équipement',
      'Évitement de collision à ultrasons à 360°, sans angle mort',
      'Construction résistante à la corrosion, conçue pour les environnements offshore et côtiers',
      'Algorithmes de scénario pour cuves de stockage en terre, traitement des boues et postes de sectionnement de gaz naturel',
    ],
  },
  'explosion-proof-wheeled-robot-l7-twister': {
    name: 'Robot à roues antidéflagrant — L7 Twister',
    shortName: 'L7 Twister',
    tagline: 'Configuration quatre roues, huit moteurs pour une inspection tout-terrain autonome',
    description:
      'Conçu avec une configuration à quatre roues et huit moteurs et une suspension indépendante, le L7 Twister offre une forte adaptabilité sur les terrains complexes et accidentés. Chaque roue dispose de sa propre unité de puissance indépendante pour des performances hors route exceptionnelles et une manœuvrabilité agile. Un ordinateur industriel IA embarqué fournit jusqu\'à 100 TOPS de puissance de calcul pour l\'inspection hors ligne, avec une grande fiabilité et de solides performances en temps réel.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIC T6 Gb (groupe de gaz le plus élevé)' },
      { label: 'Dimensions', value: '1060×620×1020mm' },
      { label: 'Poids', value: '250 kg' },
      { label: 'Mobilité', value: 'Quatre roues, huit moteurs — pentes de 15°, obstacles de 10cm' },
      { label: 'Autonomie', value: '5 heures de fonctionnement · charge 3h' },
      { label: 'Calcul', value: 'Ordinateur industriel IA embarqué, jusqu\'à 100 TOPS pour l\'inspection hors ligne' },
    ],
    useCases: [
      'Patrouille tout-terrain sur sites industriels accidentés et non aménagés',
      'Inspection de plateformes offshore et de zones d\'unités VCM/BDO',
      'Inspection hors ligne à forte puissance de calcul là où la connectivité est limitée',
    ],
    features: [
      'Unité de puissance indépendante par roue pour l\'agilité hors route',
      'Jusqu\'à 100 TOPS de calcul embarqué — inspection complète sans connectivité',
      'Nacelle pan-tilt-zoom avec imagerie acoustique et optique',
      'Certification Ex IIC — le groupe de gaz le plus élevé, y compris les atmosphères d\'hydrogène',
    ],
  },
  'explosion-proof-wheeled-robot-l7-fire': {
    name: 'Robot à roues antidéflagrant — L7 Fire',
    shortName: 'L7 Fire',
    tagline: 'Inspection à roues avec détection de flammes et extinction intégrées',
    description:
      'Le L7 Fire combine les capacités d\'inspection standard avec des fonctions de détection de flammes et d\'extinction d\'incendie. Un capteur de flamme monté et des buses d\'extinction capturent rapidement et précisément l\'emplacement, la taille et la direction de propagation d\'un incendie, tandis que le contrôle flexible de l\'angle de pulvérisation et du débit d\'agent extincteur permet une intervention rapide et fiable — améliorant la réactivité d\'urgence sans exposer le personnel au danger.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIC T6 Gb (groupe de gaz le plus élevé)' },
      { label: 'Dimensions', value: '1250×960×920mm' },
      { label: 'Poids', value: '450 kg' },
      { label: 'Mobilité', value: 'Quatre roues motrices, 0–1,4 m/s — pentes de 25°, obstacles de 10cm' },
      { label: 'Autonomie', value: '5 heures de fonctionnement · charge 5h' },
      { label: 'Réponse incendie', value: 'Extinction à distance avec angle de pulvérisation et débit réglables' },
    ],
    useCases: [
      'Détection précoce d\'incendie et extinction sur sites industriels actifs',
      'Patrouille de risque incendie en raffinage et unités VCM',
      'Inspection combinée et préparation incendie pour les opérateurs pétrochimiques',
    ],
    features: [
      'Le capteur de flamme localise précisément l\'incendie, sa taille et sa propagation',
      'Angle de pulvérisation et débit d\'agent extincteur contrôlés à distance',
      'Partage la suite de capteurs d\'inspection de la plateforme L7',
      'Algorithmes de scénario pour le raffinage et les zones d\'unités VCM et BDO',
    ],
  },
  'explosion-proof-rail-robot-g7-module': {
    name: 'Robot suspendu sur rail antidéflagrant — G7 Module',
    shortName: 'G7 Module',
    tagline: 'Robot suspendu à conception modulaire pour une précision centimétrique',
    description:
      'Une conception modulaire innovante maintient le centre de gravité du G7 Module près du rail, réduisant les oscillations et assurant la stabilité à grande vitesse. Un système de positionnement de haute précision offre une précision centimétrique, et l\'architecture modulaire permet l\'intégration rapide de différents capteurs pour répondre à des besoins d\'application variés — un robot à trajet fixe conçu pour une surveillance répétable et de haute précision.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIC T6 Gb' },
      { label: 'Dimensions', value: '1420×460×520mm' },
      { label: 'Poids', value: '130 kg' },
      { label: 'Mobilité', value: 'Rail simple voie — pentes de 20°' },
      { label: 'Portée', value: '3,2 km par charge · charge 3h' },
      { label: 'Positionnement', value: 'Odométrie + capteur Hall + RFID, précision ±1cm' },
    ],
    useCases: [
      'Inspection 24/7 de racks de tuyauterie et corridors techniques en raffinerie',
      'Surveillance de bâtiments à vapeur évaporative et d\'unités de gazéification',
      'Patrouille de zones de stockage et d\'unités d\'extraction',
    ],
    features: [
      'Centre de gravité bas minimisant l\'oscillation du rail à grande vitesse',
      'Intégration modulaire de capteurs pour des configurations spécifiques au site',
      'Nettoyage automatisé du rail et du corps de l\'appareil en option',
      'Positionnement répétable centimétrique pour l\'analyse de tendances',
    ],
  },
  'explosion-proof-rail-robot-g7-power': {
    name: 'Robot sur rail plafonnier antidéflagrant — G7 Power',
    shortName: 'G7 Power',
    tagline: 'Robot sur rail haute puissance avec 10km d\'autonomie et forte capacité de montée',
    description:
      'Un système d\'entraînement modulaire haute puissance antidéflagrant confère au G7 Power une sécurité, une fiabilité et une flexibilité accrues. Il fonctionne de manière stable de -20°C à 60°C, avec une autonomie ultra-longue de 10 km et une capacité de montée de pentes abruptes de 45° pour les scénarios de rail complexes tels que les corridors techniques et les tunnels. Une tourelle et une architecture de corps hautement modulaires permettent une expansion rapide des capteurs — une machine adaptée à de multiples besoins d\'inspection.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIC T6 Gb / Ex tC T80 Db' },
      { label: 'Dimensions', value: '1290×380×390mm' },
      { label: 'Poids', value: '50 kg' },
      { label: 'Mobilité', value: 'Entraînement double rail — pentes de 45°' },
      { label: 'Autonomie', value: '10 km d\'autonomie · charge 3h' },
      { label: 'Plage de fonctionnement', value: '-20°C à 60°C' },
      { label: 'Positionnement', value: 'Odométrie + capteur Hall + RFID, précision ±1cm' },
    ],
    useCases: [
      'Inspection de corridors techniques et de tunnels sur une large plage de température',
      'Surveillance des zones de cokéfaction, de sulfuration et de fours à coke',
      'Patrouille des salles de compresseurs et des parcs de stockage',
    ],
    features: [
      'Autonomie de 10 km par charge pour les longs trajets sur rail',
      'Capacité de montée de pentes abruptes de 45°',
      'Nacelle élévatrice-orientable avec imagerie optique et acoustique',
      'Conçu pour fonctionner de -20°C à 60°C',
    ],
  },
  'explosion-proof-rail-robot-g451': {
    name: 'Robot sur rail suspendu antidéflagrant — G451',
    shortName: 'G451',
    tagline: 'Robot sur rail à autonomie ultra-longue pour une couverture continue de zone',
    description:
      'Conçu pour la patrouille continue longue distance, le G451 atteint jusqu\'à 45 km par charge avec une excellente stabilité et précision. Une conception à double voie parallèle assure un mouvement plus fluide, résiste aux interférences et minimise les écarts. Il assure une inspection continue et complète des zones d\'équipement par tous les temps — reconnaissance de relevés de compteurs, détection de fuites et déversements, mesure de température infrarouge et surveillance d\'anomalies.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '880×600×700mm' },
      { label: 'Poids', value: '230 kg' },
      { label: 'Mobilité', value: 'Double rail, deux roues motrices — pentes de 5°' },
      { label: 'Autonomie', value: 'Jusqu\'à 45 km · charge 4h' },
      { label: 'Positionnement', value: 'Odométrie + capteur Hall + RFID, précision ±1cm' },
    ],
    useCases: [
      'Relevé de compteurs et détection de fuites 24/7 sur trajets fixes',
      'Patrouille d\'inspection de pipelines le long de longs corridors d\'infrastructure',
      'Configuration robot de sauvetage en option pour les scénarios d\'urgence',
    ],
    features: [
      'Autonomie de 45 km par charge — la plus longue de la gamme sur rail',
      'Conception à double voie parallèle minimisant les écarts et interférences',
      'Reconnaissance de relevés de compteurs et mesure de température infrarouge',
      'Configuration de charge utile robot de sauvetage en option',
    ],
  },
  'explosion-proof-tracked-robot': {
    name: 'Robot chenillé antidéflagrant — D071',
    shortName: 'D071',
    tagline: 'Inspection chenillée tout-terrain pour les environnements les plus difficiles',
    description:
      'Un système chenillé haute efficacité rend le D071 mieux adapté aux conditions de route complexes que les robots à roues. Un rapport pression-surface au sol plus élevé et une bande de roulement spécialement conçue gèrent le froid extrême, la pluie et la neige mêlées, les surfaces glissantes et les terrains montagneux accidentés. La détection et le contrôle internes utilisent une conception modulaire — chaque composant indépendant mais coordonné — maintenant le robot stable et fiable dans les conditions les plus difficiles.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '1420×900×1120mm' },
      { label: 'Poids', value: '550 kg' },
      { label: 'Mobilité', value: 'Double chenille, deux roues motrices, 0–1,4 m/s — pentes de 25°, obstacles de 15cm' },
      { label: 'Autonomie', value: '3 heures de fonctionnement · charge 5h' },
      { label: 'Positionnement', value: 'Navigation laser, précision ±5cm' },
    ],
    useCases: [
      'Patrouille de parcs de réservoirs et de pipelines extérieurs par tous les temps',
      'Reconnaissance de champs de débris post-incident',
      'Inspection minière et de carrières en atmosphère de poussières explosives',
    ],
    features: [
      'Traction supérieure sur boue, gravier, neige et débris',
      'Capacité de charge utile la plus élevée de la gamme antidéflagrante',
      'Enceinte robuste certifiée pour les atmosphères dangereuses de Zone 1',
      'Algorithmes de scénario pour l\'extraction pétrolière, l\'alcool de base et les zones de réservoirs GNL',
    ],
  },
  'firefighting-reconnaissance-robot': {
    name: 'Robot antidéflagrant de reconnaissance incendie',
    shortName: 'Robot d\'incendie',
    tagline: 'Reconnaissance et intervention de première ligne pour les équipes d\'urgence et d\'incendie',
    description:
      'Combinant les fonctions de lutte contre l\'incendie et de reconnaissance, ce robot chenillé transporte un canon à eau de surveillance incendie et des dispositifs de détection environnementale, avec un système de pulvérisation à double rideau d\'eau et de refroidissement qui lui permet de pénétrer dans les zones dangereuses à la place des pompiers. Son châssis chenillé offre une forte protection antidéflagrante, une capacité de franchissement d\'obstacles et de remorquage, avec rotation, inclinaison et balayage du canon contrôlés à distance selon plusieurs modes de pulvérisation — passant librement de l\'eau à la mousse.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIB T4 Gb' },
      { label: 'Dimensions', value: '1800×1100×1500mm' },
      { label: 'Poids', value: '780 kg' },
      { label: 'Mobilité', value: 'Double chenille, quatre roues motrices — pentes de 70%, obstacles de 15cm, gué de 20cm' },
      { label: 'Canon à eau', value: 'Débit 80 L/s · portée 80m' },
      { label: 'Autonomie', value: '5h de pulvérisation continue / 1,5h de déplacement continu · charge 6h' },
      { label: 'Portée de télécommande', value: '1000m' },
    ],
    useCases: [
      'Reconnaissance et extinction sur les lieux d\'incendie avant l\'entrée des équipes humaines',
      'Évaluation d\'incidents de matières dangereuses et surveillance de gaz',
      'Réponse aux accidents industriels et évaluation structurelle',
    ],
    features: [
      'Extinction à distance avec commutation eau/mousse et pulvérisation réglable',
      'Système de pulvérisation à double rideau d\'eau et de refroidissement pour l\'intervention rapprochée',
      'Enceinte antidéflagrante résistante à la chaleur pour la proximité des incendies',
      'Communication bidirectionnelle redondante pour un contrôle fiable sur le terrain',
    ],
  },
  'electric-wheeled-robot': {
    name: 'Robot électrique à roues',
    shortName: 'Électrique à roues',
    tagline: 'Inspection de zones non dangereuses pour postes électriques et salles de distribution',
    description:
      'Équipé de la navigation SLAM 3D et de pneus antidérapants, le robot électrique à roues fonctionne avec souplesse dans les environnements intérieurs et extérieurs de postes électriques et de salles de distribution. Des caméras à zoom élevé en lumière visible et un imageur thermique infrarouge de haute précision détectent les relevés de compteurs, l\'état des sectionneurs et la surchauffe des équipements, avec des modules optionnels de détection de décharge partielle/SF6 pour les alertes d\'arc et de fuite de gaz.',
    specs: [
      { label: 'Certification', value: 'Usage industriel général (non-Ex), IP55' },
      { label: 'Dimensions', value: '650×550×800mm' },
      { label: 'Poids', value: '40 kg' },
      { label: 'Mobilité', value: 'Quatre/deux roues motrices — pentes de 15°, obstacles de 4cm' },
      { label: 'Autonomie', value: '7 heures d\'autonomie · charge 3h' },
      { label: 'Positionnement', value: 'Navigation laser, précision ±2cm' },
    ],
    useCases: [
      'Patrouille de postes électriques et de salles de distribution',
      'Vérification des relevés de compteurs et de l\'état des sectionneurs',
      'Surveillance de centres de données et de salles de distribution électrique',
    ],
    features: [
      'Navigation SLAM 3D avec pneus antidérapants pour usage intérieur/extérieur',
      'Imagerie thermique infrarouge et lumière visible à zoom élevé',
      'Modules optionnels de détection de décharge partielle et de fuite de gaz SF6',
      'Intégration transparente avec le logiciel Asset Tracking Center',
    ],
  },
  'security-patrol-robot-ga7': {
    name: 'Robot de patrouille de sécurité — GA7',
    shortName: 'GA7',
    tagline: 'Patrouille de sécurité urbaine alimentée par IA avec surveillance panoramique à quatre directions',
    description:
      'Le GA7 associe une conception de navigation et d\'évitement d\'obstacles redondante à une imagerie vidéo panoramique à quatre directions, tout en réservant des interfaces pour l\'expansion fonctionnelle. Intégrant un grand modèle d\'IA, la reconnaissance d\'image haute définition, l\'interaction vocale multimodale et la navigation LIDAR, il boucle la fonction « patrouille intelligente, alertes de risque, services pratiques et traçabilité des données » — apportant une protection de niveau industriel et un fonctionnement par tous les temps à la sécurité urbaine.',
    specs: [
      { label: 'Certification', value: 'Déploiement général/urbain, IP65' },
      { label: 'Dimensions', value: '1070×580×840mm' },
      { label: 'Poids', value: '150 kg' },
      { label: 'Mobilité', value: 'Quatre roues, huit moteurs, 0–0,9 m/s — pentes de 15°' },
      { label: 'Autonomie', value: '5 heures de fonctionnement · charge à 80% en 3h' },
      { label: 'Positionnement', value: 'Navigation laser, précision ±3cm' },
    ],
    useCases: [
      'Patrouille de sécurité autonome de périmètre et de limites',
      'Interaction multilingue en espace public et publicité anti-fraude',
      'Surveillance des comportements anormaux avec traçabilité des rapports de patrouille',
    ],
    features: [
      'Grand modèle d\'IA avec reconnaissance d\'image haute définition',
      'Imagerie panoramique à quatre directions avec navigation redondante',
      'Interaction vocale multimodale et support multilingue',
      'Retour à la base en un clic avec accostage automatique à la station de charge',
    ],
  },
  'electric-rail-robot': {
    name: 'Système robotisé électrique sur rail',
    shortName: 'Électrique sur rail',
    tagline: 'Surveillance sur rail alimentée en continu pour infrastructures électriques étroites',
    description:
      'Une ligne de contact glissante fournit une alimentation continue, éliminant entièrement les interruptions liées à l\'autonomie de la batterie. La structure d\'entraînement à voie unique, combinée à un calibrage RFID, assure une grande précision de positionnement et un contrôle sécuritaire en cas d\'imprévu, transmettant en continu des données en temps réel pour vérifier l\'état des équipements des salles électriques et des galeries techniques. Une conception ultra-compacte spécialement conçue pour les scénarios de champs électriques étroits.',
    specs: [
      { label: 'Certification', value: 'Usage industriel général (non-Ex), IP55' },
      { label: 'Dimensions', value: '450×330×760mm' },
      { label: 'Poids', value: '30 kg' },
      { label: 'Mobilité', value: 'Entraînement rail simple — pentes de 25°' },
      { label: 'Alimentation', value: 'Continue par ligne de contact glissante — aucun temps d\'arrêt de charge' },
      { label: 'Positionnement', value: 'Odométrie + RFID, précision ±3mm' },
    ],
    useCases: [
      'Surveillance continue 24/7 des salles électriques et galeries techniques',
      'Inspection de lignes de transmission et de postes électriques',
      'Patrouille de centres de données et de salles de groupes électrogènes',
    ],
    features: [
      'Alimentation continue par ligne de contact glissante — aucun temps d\'arrêt de batterie',
      'Calibrage RFID pour une précision de positionnement millimétrique',
      'Alimenté par rail pour une installation permanente et ininterrompue',
      'Partage la plateforme de capteurs et de logiciels de toute la gamme',
    ],
  },
  'asset-tracking-center-software': {
    name: 'Centre de suivi des actifs et équipements',
    shortName: 'Tracking Center',
    tagline: 'La couche logicielle qui unifie l\'ensemble de votre flotte de robots',
    description:
      'Le Centre de suivi des actifs et équipements est la couche logicielle qui connecte chaque robot de votre flotte — quadrupède, à roues, chenillé et sur rail — en un seul tableau de bord opérationnel. Surveillez les patrouilles en temps réel, consultez les données d\'inspection, gérez les horaires des robots et générez des rapports de conformité, le tout depuis une seule plateforme.',
    specs: [
      { label: 'Déploiement', value: 'Infonuagique ou sur site' },
      { label: 'Taille de flotte', value: 'Robots et capteurs illimités' },
      { label: 'Conservation des données', value: 'Configurable, jusqu\'à 5 ans' },
      { label: 'Rapports', value: 'Conformité automatisée + exports personnalisés' },
      { label: 'Accès', value: 'Basé sur les rôles, multi-site, multi-utilisateur' },
      { label: 'Intégration', value: 'API REST, connecteurs SCADA, DCS' },
    ],
    useCases: [
      'Gestion de flotte multi-site pour raffineries et usines',
      'Rapports de conformité automatisés pour la préparation aux audits',
      'Acheminement des alertes en temps réel vers les équipes d\'exploitation et HSE',
    ],
    features: [
      'Tableau de bord unifié pour tous les types de robots et charges utiles de capteurs',
      'Planification et gestion automatisées des itinéraires de patrouille',
      'Détection d\'anomalies par IA avec analyse de tendances historiques',
      'Génération de rapports de conformité pour audits et soumissions réglementaires',
      'API REST pour l\'intégration avec les systèmes SCADA et DCS existants',
    ],
  },
  'explosion-proof-charging-room': {
    name: 'Local de charge antidéflagrant — SREX-CDF',
    shortName: 'Local de charge',
    tagline: 'Charge et stockage sécuritaires conçus spécifiquement pour les robots à roues extérieurs',
    description:
      'Une installation spécialement conçue pour les robots à roues en application d\'inspection extérieure, le SREX-CDF est équipé intérieurement d\'une porte électrique, de stations de charge et d\'un système d\'éclairage. Adapté aux environnements dangereux de classes IIB/IIC, il offre un lieu de charge et de stockage temporaire sûr et fiable pour les robots opérant sur le terrain.',
    specs: [
      { label: 'Certification antidéflagrante', value: 'Ex IIB T4 Gb / Ex IIC T4 Gb' },
      { label: 'Dimensions', value: '2000×2900×2500mm' },
      { label: 'Poids', value: '2 tonnes' },
      { label: 'Résistance au vent', value: 'Niveau 8, porte à volet roulant automatique' },
      { label: 'Charge', value: 'Trois étapes : courant constant, tension constante, charge de compensation' },
      { label: 'Intérieur', value: 'Éclairage antidéflagrant, ventilateur, station de charge, armoire de contrôle' },
    ],
    useCases: [
      'Infrastructure de charge sur le terrain pour les flottes de robots à roues extérieurs',
      'Stockage de robots protégé contre les intempéries et les dangers entre les patrouilles',
      'Sites nécessitant des installations de charge extérieures classées IIB/IIC',
    ],
    features: [
      'Certifié pour les atmosphères dangereuses IIB et IIC',
      'Résistance au vent de niveau 8 avec porte à volet automatique',
      'Chauffage, climatisation, capteur de fumée et caméra en option',
      'La charge en trois étapes préserve la durée de vie de la batterie',
    ],
  },
  'industrial-network-pc': {
    name: 'PC réseau industriel — E01 / E02',
    shortName: 'PC réseau',
    tagline: 'Routeur, commutateur et unité de contrôle véhicule en un seul module industriel',
    description:
      'Le PC réseau industriel intègre les fonctions de routeur, commutateur et unité de contrôle véhicule (VCU) grâce à un module routeur sans fil de qualité industrielle, un module sans fil 4G/5G, une puce de commutation à négociation automatique 100/1000Mbps et un MCU haute performance. Utilisé sur les robots, bras robotisés et déploiements IoT industriels, il se décline en deux modèles selon le module de communication installé : le E01 en 4G et le E02 en 5G.',
    specs: [
      { label: 'Dimensions', value: '142×110,5×43mm' },
      { label: 'Température de fonctionnement', value: 'E01 : -40°C à 80°C · E02 : -40°C à 75°C' },
      { label: '4G (E01)', value: 'LTE CAT4 — 150 Mbps descendant / 50 Mbps montant' },
      { label: '5G (E02)', value: 'NR Sub-6GHz — 2,4 Gbps descendant / 900 Mbps montant' },
      { label: 'Wi-Fi', value: 'Bibande 802.11a/b/g/n/ac/ax, jusqu\'à 2402 Mbps' },
    ],
    useCases: [
      'Module de connectivité pour tout robot de la flotte',
      'Déploiements IoT industriels nécessitant un routage et un contrôle intégrés',
      'Sites nécessitant une voie de mise à niveau 5G (E02) par rapport au 4G standard (E01)',
    ],
    features: [
      'Combine routeur, commutateur et unité de contrôle véhicule en un seul module',
      'Certifié pour températures extrêmes : plancher de fonctionnement à -40°C',
      'Variante 4G ou 5G selon les besoins de connectivité du site',
      'Wi-Fi bibande avec commutateur à négociation automatique haut débit',
    ],
  },
  'ai-compute-module': {
    name: 'PC industriel — Module de calcul IA A01',
    shortName: 'Module de calcul IA',
    tagline: 'Calcul IA modulaire embarqué pour déployer des algorithmes d\'inspection en périphérie',
    description:
      'Un PC industriel modulaire combinant un module embarqué X86, un module de calcul IA et un fond de panier de PC industriel dans une enceinte en profilé d\'aluminium. La plateforme X86 basse consommation et la plateforme NVIDIA Jetson Xavier NX prennent en charge les systèmes de gestion de microservices et les algorithmes d\'IA, permettant l\'exécution d\'algorithmes d\'inspection directement sur le robot. Disponible en formats plat et empilé pour s\'adapter à différents besoins de montage.',
    specs: [
      { label: 'Plateforme X86', value: 'Intel Atom X7-E3950, 2,0 GHz (jusqu\'à 2,41 GHz en rafale)' },
      { label: 'Plateforme IA', value: 'NVIDIA Jetson Xavier NX, 21 TOPS' },
      { label: 'Mémoire', value: 'LPDDR4 8/16Go · DDR3L 8Go' },
      { label: 'Stockage', value: 'SSD M.2 2280 256Go / SSD mSATA' },
      { label: 'Formats', value: 'Variantes plate (encastrée) et empilée' },
    ],
    useCases: [
      'Déploiement embarqué d\'algorithmes d\'inspection IA sans dépendance infonuagique',
      'Sites nécessitant une détection d\'anomalies hors ligne à faible latence',
      'Mise à niveau de calcul rétroactive pour les déploiements de robots existants',
    ],
    features: [
      '21 TOPS de calcul IA via NVIDIA Jetson Xavier NX',
      'Exécute les algorithmes d\'inspection directement sur le robot, sans aller-retour infonuagique',
      'Format plat ou empilé pour s\'adapter à différents châssis de robots',
      'Enceinte en profilé d\'aluminium avec refroidissement actif',
    ],
  },
};
