import type { CaseStudyTranslation } from './caseStudies.fr';

export const caseStudiesEs: Record<string, CaseStudyTranslation> = {
  'iraq-basra-missan': {
    title: 'Irak: digitalización de los campos petroleros de Basora y Missan',
    client: 'Gran operador petrolero iraquí',
    location: 'Basora y Missan, Irak',
    region: 'Medio Oriente',
    phase: 'Fase 1',
    challenge:
      'Dos grandes complejos petroleros del sur de Irak requerían inspección continua de unidades de proceso, parques de tanques y racks de tuberías distribuidos en sitios desérticos remotos. La inspección manual estaba limitada por el calor extremo, las atmósferas peligrosas y la dificultad logística de mantener patrullas las 24 horas en lugares remotos. El operador necesitaba una solución que brindara monitoreo 24/7 mientras reducía la exposición del personal a áreas peligrosas.',
    solution:
      'Se desplegó una flota de robots con ruedas antiexplosión (L4-S) y con orugas en ambos sitios petroleros, integrada con el software Asset Tracking Center para operaciones centralizadas. Los robots realizan rutas de patrullaje autónomo que cubren unidades de proceso, perímetros de parques de tanques y racks de tuberías críticos, con sensores térmicos y de gas que envían alertas en tiempo real a una sala de control central.',
    results: [
      { metric: 'Cobertura de inspección', value: 'Patrullaje autónomo 24/7' },
      { metric: 'Exposición del personal', value: 'Reducida en 70% en zonas peligrosas' },
      { metric: 'Detección de incidentes', value: '12 anomalías térmicas detectadas a tiempo' },
      { metric: 'Sitios desplegados', value: '2 complejos petroleros' },
    ],
    quote: {
      text: 'La flota de robots ha transformado nuestro programa de inspección. Ahora tenemos monitoreo continuo de activos críticos sin enviar personal a áreas peligrosas en cada turno. La detección temprana de anomalías térmicas por sí sola ha pagado la inversión.',
      author: 'Director de Operaciones',
      role: 'Operador petrolero iraquí',
    },
    description:
      'Cómo los robots de inspección antiexplosión digitalizaron la inspección en dos grandes complejos petroleros iraquíes, reduciendo la exposición del personal y detectando anomalías térmicas antes de que se convirtieran en incidentes.',
  },
  'indonesia-gas': {
    title: 'Proyecto de gas en Indonesia',
    client: 'Operador indonesio de procesamiento de gas',
    location: 'Banten, Indonesia',
    region: 'Sudeste Asiático',
    phase: 'Fase 1',
    challenge:
      'Una planta de procesamiento de gas en Banten, Indonesia, necesitaba monitoreo continuo de un gran tren de procesamiento de gas y la infraestructura de rack de tuberías asociada. La planta operaba con un equipo de inspección reducido, y el patrullaje manual no podía brindar la frecuencia o consistencia requerida para un entorno de procesamiento de gas de alto riesgo. El operador necesitaba una solución capaz de detectar fugas de gas y anomalías térmicas en tiempo real, sin ampliar la plantilla de inspección.',
    solution:
      'Se desplegaron robots antiexplosión sobre riel y con ruedas a lo largo del tren de procesamiento de gas y el rack de tuberías, con el robot sobre riel proporcionando monitoreo continuo de trayecto fijo 24/7 y el robot con ruedas manejando el patrullaje flexible de las áreas circundantes. Ambos se integran al Asset Tracking Center para monitoreo unificado, enrutamiento de alertas e informes de cumplimiento.',
    results: [
      { metric: 'Frecuencia de monitoreo', value: 'De diaria a continua' },
      { metric: 'Detección de fugas de gas', value: '3 fugas detectadas en el primer trimestre' },
      { metric: 'Plantilla de inspección', value: 'No se requirió aumento' },
      { metric: 'Informes de cumplimiento', value: 'Automatizados, listos para auditoría' },
    ],
    description:
      'Cómo una planta de procesamiento de gas en Indonesia logró un monitoreo continuo con un equipo de inspección reducido, utilizando robots antiexplosión sobre riel y con ruedas con software centralizado.',
  },
  'basf-global': {
    title: 'BASF Global',
    client: 'BASF',
    location: 'Sitios de fabricación química a nivel mundial',
    region: 'Global',
    phase: 'Nuevo cliente — 2026',
    challenge:
      'Como uno de los mayores productores químicos del mundo, BASF opera entornos de procesamiento donde las condiciones inflamables, corrosivas y tóxicas hacen que la inspección manual sea peligrosa y costosa — el mismo tipo de riesgo de Zona 1 que la robótica antiexplosión está diseñada para abordar.',
    solution:
      'Qiteng Robotics cuenta con BASF entre sus socios industriales y de fabricación internacionales establecidos, junto con operadores como PetroChina y Sinopec. Hazlocrobotics se enorgullece de destacar a BASF como una de las incorporaciones más recientes a esa relación con clientes a partir de 2026, extendiendo el despliegue de la línea al sector químico global.',
    description:
      'BASF se une a la lista de grandes operadores químicos y energéticos internacionales de Qiteng Robotics como nuevo cliente en 2026 — los detalles completos del despliegue se compartirán a medida que avance la colaboración.',
  },
};
