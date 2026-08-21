import type { IndustryTranslation } from './industries.fr';

export const industriesEs: Record<string, IndustryTranslation> = {
  'oil-gas-petrochemical': {
    name: 'Petróleo y gas / Petroquímica',
    shortName: 'Petróleo y gas',
    tagline: 'Inspección continua para los entornos peligrosos más exigentes del planeta',
    challenge:
      'Las refinerías y plantas petroquímicas están repletas de áreas peligrosas de Zona 1 donde la inspección humana es riesgosa, costosa y limitada por los turnos de trabajo. Las fugas, anomalías térmicas y el deterioro estructural no detectados provocan paradas no planificadas, sanciones regulatorias e incidentes de seguridad catastróficos.',
    description:
      'Los robots de inspección antiexplosión permiten el patrullaje autónomo continuo de unidades de proceso, parques de tanques y racks de tuberías — detectando fugas de gas, anomalías térmicas y problemas estructurales antes de que se conviertan en incidentes. Desplegados en más de 40 países entre los principales operadores petroleros y gasíferos del mundo.',
    buyingCommittee: ['Director de HSE', 'Gerente de planta', 'Gerente de inspección', 'Director de proyecto EPC'],
    keyBenefits: [
      'El patrullaje autónomo 24/7 reemplaza la inspección manual limitada por turnos',
      'Certificado IIC T6 para hidrógeno y los grupos de gas más exigentes',
      'Detección de anomalías térmicas y de gas antes de que los incidentes escalen',
      'Informes de cumplimiento automatizados para auditorías OSHA y regulatorias',
    ],
  },
  'power-generation': {
    name: 'Generación de energía',
    shortName: 'Energía',
    tagline: 'Inspección confiable para plantas de energía y subestaciones',
    challenge:
      'Las instalaciones de generación de energía — desde plantas térmicas hasta centrales hidroeléctricas — requieren monitoreo continuo de calderas, turbinas, sistemas de transportadores y patios de maniobras. Estos entornos combinan calor, polvo y espacios confinados que hacen que la inspección manual sea peligrosa e inconsistente.',
    description:
      'Los robots de inspección autónomos brindan un monitoreo repetible y de alta frecuencia de los activos críticos de generación de energía. La imagen térmica detecta el sobrecalentamiento de componentes antes de la falla, mientras que el patrullaje continuo reemplaza las inspecciones manuales costosas y peligrosas de calderas y transportadores.',
    buyingCommittee: ['Director de operaciones', 'Gerente de mantenimiento', 'Gerente de seguridad'],
    keyBenefits: [
      'El monitoreo térmico detecta fallas en rodamientos y eléctricas de forma temprana',
      'Monitoreo 24/7 sobre riel para calderas y transportadores',
      'Reduce el riesgo de entrada a espacios confinados para los equipos de inspección',
      'El análisis de tendencias respalda la planificación del mantenimiento predictivo',
    ],
  },
  'marine-offshore': {
    name: 'Marítimo y costa afuera',
    shortName: 'Marítimo',
    tagline: 'Inspección para plataformas costa afuera y embarcaciones marítimas',
    challenge:
      'Las plataformas costa afuera y las embarcaciones marítimas presentan entornos confinados, corrosivos y peligrosos donde el acceso para inspección es difícil y costoso. El transporte de personal a sitios costa afuera es costoso, y las ventanas climáticas limitan la frecuencia de inspección.',
    description:
      'Los robots de inspección antiexplosión y eléctricos reducen la necesidad de que el personal acceda a áreas costa afuera peligrosas y confinadas. El monitoreo continuo mediante un robot desplegado reduce los requisitos de personal costa afuera y proporciona conciencia situacional en tiempo real a los equipos de operaciones en tierra.',
    buyingCommittee: ['Gerente de instalación costa afuera', 'Gerente de HSE', 'Director de operaciones marítimas'],
    keyBenefits: [
      'Reduce la exposición del personal a espacios costa afuera confinados y peligrosos',
      'Transmisión de video y sensores en tiempo real a los centros de operaciones en tierra',
      'Construcción resistente a la corrosión para entornos marinos',
      'Menores costos de personal y logística costa afuera para la inspección rutinaria',
    ],
  },
  'mining': {
    name: 'Minería',
    shortName: 'Minería',
    tagline: 'Inspección segura de operaciones mineras subterráneas y de superficie',
    challenge:
      'Los entornos mineros combinan atmósferas de polvo explosivo, espacios subterráneos confinados y condiciones de terreno inestables. La inspección manual de túneles, frentes de explotación y sistemas de transportadores expone al personal a riesgos de derrumbe, gas y polvo inherentes al entorno operativo.',
    description:
      'Los robots con orugas y cuadrúpedos antiexplosión navegan por túneles subterráneos y áreas mineras de superficie, proporcionando monitoreo visual, térmico y ambiental sin poner en riesgo a los inspectores. El patrullaje continuo detecta movimiento de terreno, acumulación de gas y sobrecalentamiento de equipos.',
    buyingCommittee: ['Gerente de mina', 'Superintendente de seguridad', 'Director de operaciones'],
    keyBenefits: [
      'Antiexplosión para atmósferas de polvo combustible',
      'Movilidad con orugas para terreno subterráneo irregular y cubierto de escombros',
      'Monitoreo de gas para metano y otros gases de mina',
      'Reduce la entrada de personal a áreas inestables y confinadas',
    ],
  },
  'emergency-response': {
    name: 'Respuesta a emergencias',
    shortName: 'Emergencias',
    tagline: 'Reconocimiento robótico para incidentes de incendio y materiales peligrosos',
    challenge:
      'Los incidentes de incendio y materiales peligrosos requieren una evaluación rápida de la situación antes de que los equipos humanos puedan ingresar con seguridad. Los comandantes de incidentes necesitan información en tiempo real sobre la propagación del fuego, las concentraciones de gas, la integridad estructural y la ubicación de víctimas — información imposible de recopilar con seguridad desde dentro de la zona caliente.',
    description:
      'El robot de reconocimiento contra incendios ingresa a escenas de incendio y materiales peligrosos antes que los equipos humanos, transmitiendo datos térmicos, visuales y de gas en tiempo real al comando de incidentes. Esto permite decisiones informadas sobre el despliegue de equipos, las zonas de evacuación y la asignación de recursos — salvando vidas y reduciendo la exposición.',
    buyingCommittee: ['Jefe de bomberos', 'Comandante del equipo hazmat', 'Director de gestión de emergencias'],
    keyBenefits: [
      'Conciencia situacional en tiempo real antes del ingreso del equipo',
      'Imagen térmica para la propagación del fuego y la localización de víctimas',
      'Detección de gas para la evaluación hazmat y la gestión de zonas',
      'Resistente al calor y antiexplosión para las escenas más extremas',
    ],
  },
};
