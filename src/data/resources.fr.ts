export interface ResourceTranslation {
  title: string;
  metaDescription: string;
  readTime: string;
  excerpt: string;
  body: { heading: string; paragraphs: string[] }[];
}

export const resourcesFr: Record<string, ResourceTranslation> = {
  'ul-6260-explainer': {
    title: 'Qu\'est-ce que la norme UL 6260? Guide de certification pour robots en emplacement dangereux',
    metaDescription:
      'La norme UL 6260 est la norme émergente pour les robots en emplacement dangereux. Ce guide explique ce qu\'elle couvre, où elle en est, et ce que les acheteurs devraient demander aux fournisseurs dès aujourd\'hui.',
    readTime: '8 min de lecture',
    excerpt:
      'La norme UL 6260 est la première norme conçue spécifiquement pour les robots opérant en emplacement dangereux. Voici ce qu\'elle couvre, où en est le processus de certification aujourd\'hui, et ce qu\'il faut demander à un fournisseur avant de déployer.',
    body: [
      {
        heading: 'La réponse courte',
        paragraphs: [
          'La norme UL 6260 est une norme en cours d\'élaboration par UL Solutions qui traite de la sécurité des robots opérant en emplacements dangereux (classés) — des environnements où des gaz, vapeurs ou poussières inflammables peuvent être présents. C\'est la première norme conçue spécifiquement pour les robots mobiles dans ces environnements, plutôt qu\'une norme industrielle réaffectée.',
          'Pour les acheteurs, le point clé est le suivant : la norme UL 6260 est sur la feuille de route mais n\'est pas encore une certification mature et largement délivrée. Aujourd\'hui, la voie crédible vers le déploiement en emplacement dangereux passe par les certifications IECEx et ATEX, reconnues internationalement et bien établies. La norme UL 6260 deviendra la référence nord-américaine, et Hazloc Robotics est sur la feuille de route pour l\'obtenir.',
        ],
      },
      {
        heading: 'Pourquoi la norme UL 6260 est importante',
        paragraphs: [
          'Jusqu\'à présent, les robots déployés dans des emplacements dangereux aux États-Unis ont été évalués selon un ensemble disparate de normes qui n\'étaient pas conçues pour les robots mobiles autonomes. La norme UL 6260 comble cette lacune en offrant un cadre d\'évaluation unifié qui tient compte des caractéristiques propres aux robots — mobilité, autonomie, systèmes de batterie et charges utiles de capteurs — dans le contexte des atmosphères explosives.',
          'Pour les équipes HSE et conformité, un robot certifié UL 6260 signifie que l\'évaluation a été effectuée selon une norme qui comprend réellement ce qu\'est un robot et comment il se comporte sur le terrain. Cela simplifie le dossier de sécurité et réduit le fardeau de prouver l\'équivalence aux inspecteurs et assureurs.',
        ],
      },
      {
        heading: 'Relation avec IECEx et ATEX',
        paragraphs: [
          'IECEx et ATEX sont les systèmes internationaux établis pour certifier les équipements destinés aux atmosphères explosives. IECEx est le système mondial d\'évaluation de conformité de la CEI, tandis qu\'ATEX est la directive européenne. Les deux sont largement acceptés et servent de base à la certification des équipements industriels en emplacement dangereux depuis des décennies.',
          'La norme UL 6260 devrait s\'appuyer sur les fondations IECEx/ATEX, en ajoutant des exigences propres à l\'Amérique du Nord alignées sur le système de classification des emplacements dangereux du National Electrical Code (NEC). Un robot déjà certifié IECEx est bien positionné sur la feuille de route UL 6260, puisqu\'une grande partie de la conception de protection contre les explosions a déjà été évaluée.',
        ],
      },
      {
        heading: 'Ce qu\'il faut demander à un fournisseur aujourd\'hui',
        paragraphs: [
          'Si vous évaluez aujourd\'hui un robot pour emplacement dangereux, posez ces questions :',
          '1. Quelle certification IECEx ou ATEX le robot détient-il, et pour quel groupe de gaz et quelle classe de température?',
          '2. Quelle est la feuille de route du fournisseur pour les certifications UL 6260 et CSA?',
          '3. Le fournisseur peut-il fournir la documentation complète de certification, pas seulement un badge marketing?',
          '4. Le robot a-t-il été déployé dans des environnements de classification de danger similaire au vôtre?',
          '5. Quel est le processus du fournisseur pour maintenir la certification à mesure que le produit évolue?',
          'Hazloc Robotics publie son statut de certification complet et sa feuille de route sur notre page Certification et conformité. Nous croyons que la transparence en matière de certification est une exigence de base, non un facteur de différenciation.',
        ],
      },
      {
        heading: 'En résumé',
        paragraphs: [
          'La norme UL 6260 deviendra la référence que les acheteurs et équipes de conformité nord-américains rechercheront lors de l\'évaluation de robots pour emplacement dangereux. Elle n\'y est pas encore, et tout fournisseur affirmant détenir une certification UL 6260 aujourd\'hui devrait être invité à produire la documentation. En attendant, IECEx et ATEX demeurent les certifications crédibles et reconnues internationalement — et le fondement sur lequel la norme UL 6260 sera construite.',
        ],
      },
    ],
  },
  'iecex-vs-nec-guide': {
    title: 'IECEx/ATEX vs. NEC Classe/Division : la classification des emplacements dangereux expliquée',
    metaDescription:
      'Une comparaison en langage clair de la classification par zones IECEx/ATEX et du système Classe/Division du NEC pour les acheteurs évaluant des robots en emplacement dangereux.',
    readTime: '10 min de lecture',
    excerpt:
      'Deux systèmes classifient les emplacements dangereux — le système de zones de la CEI (IECEx/ATEX) et le système Classe/Division du NEC. Voici comment ils se comparent, et ce que cela signifie pour les acheteurs de robots en Amérique du Nord.',
    body: [
      {
        heading: 'Deux systèmes, un même objectif',
        paragraphs: [
          'Le système de zones IECEx/ATEX et le système Classe/Division du NEC existent tous deux pour classifier les environnements où des matières inflammables peuvent être présentes, et pour spécifier les équipements pouvant y fonctionner en sécurité. Ils abordent le même problème avec des cadres et une terminologie différents, ce qui peut créer de la confusion lorsqu\'un acheteur nord-américain évalue un équipement certifié selon le système de la CEI.',
          'Comprendre les bases des deux systèmes est essentiel pour quiconque est responsable du déploiement d\'équipements — y compris des robots — en emplacement dangereux.',
        ],
      },
      {
        heading: 'Le système de zones IECEx/ATEX',
        paragraphs: [
          'Les systèmes CEI et ATEX classifient les zones dangereuses selon la fréquence et la durée de l\'atmosphère explosive :',
          'Zone 0 : atmosphère explosive présente en continu ou pendant de longues périodes.',
          'Zone 1 : atmosphère explosive susceptible de se produire occasionnellement en fonctionnement normal.',
          'Zone 2 : atmosphère explosive peu susceptible de se produire, et si elle se produit, seulement pour une courte durée.',
          'Pour les environnements de poussières, les zones 20, 21 et 22 suivent la même logique. L\'équipement est ensuite certifié pour la zone appropriée, avec un groupe de gaz (I, IIA, IIB, IIC) et une classe de température (T1–T6) précisant la plage d\'atmosphères explosives pour laquelle il est sécuritaire.',
        ],
      },
      {
        heading: 'Le système Classe/Division du NEC',
        paragraphs: [
          'Le National Electrical Code (NEC, article 500) utilise un système de Classe et de Division :',
          'Classe I : gaz ou vapeurs inflammables.',
          'Classe II : poussières combustibles.',
          'Classe III : fibres ou volants inflammables.',
          'Divisions : la Division 1 signifie que le danger est présent en fonctionnement normal; la Division 2 signifie qu\'il n\'est présent qu\'en conditions anormales.',
          'Au sein de la Classe I, les gaz sont regroupés (A, B, C, D) et l\'équipement possède une classe de température (T1–T6). La correspondance est similaire dans l\'intention au système de la CEI, mais les catégories et l\'étiquetage diffèrent.',
        ],
      },
      {
        heading: 'Correspondance approximative entre systèmes',
        paragraphs: [
          'Bien qu\'il ne s\'agisse pas d\'une équivalence exacte, la correspondance approximative suivante aide à traduire entre les deux :',
          'CEI Zone 0 ≈ NEC Classe I Division 1 (continu)',
          'CEI Zone 1 ≈ NEC Classe I Division 1 (occasionnel)',
          'CEI Zone 2 ≈ NEC Classe I Division 2',
          'CEI Groupe de gaz IIC ≈ NEC Groupe B (hydrogène) et inférieur',
          'CEI Groupe de gaz IIB ≈ NEC Groupe C',
          'CEI Groupe de gaz IIA ≈ NEC Groupe D',
          'Cette correspondance est un point de départ, non un substitut à une évaluation technique appropriée. L\'équipe d\'ingénierie électrique et de conformité de votre site doit prendre la décision finale.',
        ],
      },
      {
        heading: 'Ce que cela signifie pour les acheteurs de robots',
        paragraphs: [
          'Si vous êtes en Amérique du Nord et évaluez un robot certifié IECEx, la certification est crédible et reconnue internationalement — mais vous devez la faire correspondre à la classification NEC de votre site pour confirmer sa pertinence. Un robot certifié Ex IIC T6 Gb (le groupe de gaz et la classe de température CEI les plus élevés) convient largement aux environnements de Classe I les plus exigeants.',
          'Demandez au fournisseur la documentation complète de certification et travaillez avec votre équipe de conformité pour confirmer la correspondance. Hazloc Robotics fournit cette documentation et collabore avec les équipes de conformité des acheteurs pour soutenir les évaluations propres à chaque site.',
        ],
      },
    ],
  },
  'buyer-education-robot-inspection-roi': {
    title: 'Calculer le RCI des robots d\'inspection : un cadre pour les responsables HSE et opérations',
    metaDescription:
      'Un cadre pratique pour calculer le retour sur investissement des robots d\'inspection en emplacement dangereux, avec des catégories de coûts et zones de bénéfices réelles.',
    readTime: '7 min de lecture',
    excerpt:
      'Comment bâtir un dossier d\'affaires crédible pour les robots d\'inspection en emplacement dangereux — au-delà du « c\'est plus sécuritaire » vers l\'évitement de coûts quantifié, les économies de main-d\'œuvre et la prévention d\'incidents.',
    body: [
      {
        heading: 'Pourquoi le RCI est important',
        paragraphs: [
          'La sécurité est le principal moteur d\'adoption des robots d\'inspection en emplacement dangereux, mais la sécurité seule obtient rarement l\'approbation budgétaire. Les responsables des opérations et des finances ont besoin d\'un dossier d\'affaires quantifié. La bonne nouvelle est que l\'économie de l\'inspection robotisée est favorable une fois que l\'on tient compte du coût complet de l\'inspection manuelle et du coût complet des incidents que les robots préviennent.',
          'Cet article fournit un cadre pour bâtir ce dossier, organisé en catégories de coûts et zones de bénéfices que vous pouvez remplir avec les données de votre propre installation.',
        ],
      },
      {
        heading: 'Coût de l\'inspection manuelle (ce que vous dépensez aujourd\'hui)',
        paragraphs: [
          'Main-d\'œuvre directe : heures d\'inspecteur, incluant les heures supplémentaires et primes de risque pour le travail en zone dangereuse.',
          'Coûts de soutien : essais de gaz, permis, personnel de garde et équipes d\'entrée en espace confiné.',
          'Temps d\'arrêt : l\'inspection nécessite souvent un arrêt partiel ou une réduction de production.',
          'Écart de fréquence : l\'inspection manuelle est limitée par les horaires de quart, ce qui signifie que les dangers entre les inspections passent inaperçus.',
          'Coûts d\'incident : le coût moyen d\'une seule fuite ou défaillance thermique non détectée — incluant réparation, production perdue, pénalités réglementaires et impact sur l\'assurance — dépasse souvent le coût annuel d\'une flotte de robots.',
        ],
      },
      {
        heading: 'Zones de bénéfices de l\'inspection robotisée',
        paragraphs: [
          'Couverture continue : la patrouille 24/7 remplace l\'inspection manuelle limitée par les quarts, réduisant la fenêtre pour les dangers non détectés.',
          'Réaffectation de la main-d\'œuvre : les inspecteurs passent de la patrouille routinière au traitement des exceptions et à l\'analyse — un travail à plus forte valeur ajoutée.',
          'Détection précoce : les anomalies thermiques et de gaz sont détectées avant de devenir des incidents, évitant les arrêts imprévus et les coûts de réparation.',
          'Efficacité de conformité : les rapports automatisés réduisent le temps consacré à la préparation des audits et soumissions réglementaires.',
          'Exposition du personnel : moins de personnes en zone dangereuse signifie un risque réduit et des primes d\'assurance plus basses avec le temps.',
        ],
      },
      {
        heading: 'Bâtir votre dossier',
        paragraphs: [
          'Commencez par une installation ou une zone à haut risque. Quantifiez le coût annuel de l\'inspection manuelle (toutes les catégories ci-dessus), puis estimez le coût annualisé d\'un incident évité. Comparez ceci au coût annualisé d\'un déploiement de robots (location ou achat, logiciel, entretien et formation).',
          'Dans la plupart des déploiements en environnement dangereux que nous avons soutenus, le seuil de rentabilité est atteint en moins de 18 mois — et ce, avant même de tenir compte de la valeur de réduction des risques à laquelle les équipes HSE accordent le plus d\'importance.',
        ],
      },
    ],
  },
};
