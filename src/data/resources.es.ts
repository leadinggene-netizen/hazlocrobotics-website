export interface ResourceTranslation {
  title: string;
  metaDescription: string;
  readTime: string;
  excerpt: string;
  body: { heading: string; paragraphs: string[] }[];
}

export const resourcesEs: Record<string, ResourceTranslation> = {
  'ul-6260-explainer': {
    title: '¿Qué es UL 6260? Una guía de certificación para robots en áreas peligrosas',
    metaDescription:
      'UL 6260 es la norma emergente para robots en áreas peligrosas. Esta guía explica qué cubre, en qué etapa se encuentra y qué deben preguntar los compradores a los proveedores hoy.',
    readTime: '8 min',
    excerpt:
      'UL 6260 es la primera norma diseñada específicamente para robots que operan en áreas peligrosas. Esto es lo que cubre, en qué etapa se encuentra hoy el proceso de certificación, y qué preguntarle a un proveedor antes de desplegar.',
    body: [
      {
        heading: 'La respuesta corta',
        paragraphs: [
          'UL 6260 es una norma en desarrollo por UL Solutions que aborda la seguridad de los robots que operan en áreas peligrosas (clasificadas) — entornos donde pueden estar presentes gases, vapores o polvos inflamables. Es la primera norma diseñada específicamente para robots móviles en estos entornos, en lugar de una norma industrial reutilizada.',
          'Para los compradores, el punto clave es este: UL 6260 está en la hoja de ruta pero aún no es una certificación madura y ampliamente emitida. Hoy, la vía creíble hacia el despliegue en áreas peligrosas pasa por las certificaciones IECEx y ATEX, que son reconocidas internacionalmente y están bien establecidas. UL 6260 se convertirá en la referencia norteamericana, y Hazloc Robotics está en la hoja de ruta para lograrla.',
        ],
      },
      {
        heading: 'Por qué importa UL 6260',
        paragraphs: [
          'Hasta ahora, los robots desplegados en áreas peligrosas de EE. UU. han sido evaluados contra un mosaico de normas que no fueron diseñadas para robots móviles y autónomos. UL 6260 aborda esta brecha al proporcionar un marco de evaluación unificado que considera las características únicas de los robots — movilidad, autonomía, sistemas de batería y cargas útiles de sensores — en el contexto de atmósferas explosivas.',
          'Para los equipos de HSE y cumplimiento, un robot certificado UL 6260 significa que la evaluación se realizó según una norma que realmente comprende qué es un robot y cómo se comporta en el campo. Esto simplifica el caso de seguridad y reduce la carga de demostrar equivalencia ante inspectores y aseguradoras.',
        ],
      },
      {
        heading: 'Cómo se relaciona con IECEx y ATEX',
        paragraphs: [
          'IECEx y ATEX son los sistemas internacionales establecidos para certificar equipos destinados a atmósferas explosivas. IECEx es el sistema global de evaluación de conformidad de la IEC, mientras que ATEX es la directiva europea. Ambos son ampliamente aceptados y han sido la base para certificar equipos industriales en áreas peligrosas durante décadas.',
          'Se espera que UL 6260 se construya sobre la base de IECEx/ATEX, añadiendo requisitos específicos de Norteamérica alineados con el sistema de clasificación de áreas peligrosas del Código Eléctrico Nacional (NEC). Un robot que ya cuenta con certificación IECEx está bien posicionado en la hoja de ruta de UL 6260, ya que gran parte del diseño de protección contra explosiones ya ha sido evaluado.',
        ],
      },
      {
        heading: 'Qué preguntarle a un proveedor hoy',
        paragraphs: [
          'Si está evaluando hoy un robot para áreas peligrosas, haga estas preguntas:',
          '1. ¿Qué certificación IECEx o ATEX posee el robot, y para qué grupo de gas y clase de temperatura?',
          '2. ¿Cuál es la hoja de ruta del proveedor para las certificaciones UL 6260 y CSA?',
          '3. ¿Puede el proveedor proporcionar la documentación de certificación completa, no solo una insignia de marketing?',
          '4. ¿Se ha desplegado el robot en entornos con una clasificación de riesgo similar a la suya?',
          '5. ¿Cuál es el proceso del proveedor para mantener la certificación a medida que el producto evoluciona?',
          'Hazloc Robotics publica su estado de certificación completo y su hoja de ruta en nuestra página de Certificación y Cumplimiento. Creemos que la transparencia en la certificación es un requisito básico, no un diferenciador.',
        ],
      },
      {
        heading: 'La conclusión',
        paragraphs: [
          'UL 6260 se convertirá en la norma que los compradores y equipos de cumplimiento norteamericanos buscarán al evaluar robots para áreas peligrosas. Todavía no lo es, y a cualquier proveedor que afirme hoy tener una certificación UL 6260 se le debería pedir que presente la documentación. Mientras tanto, IECEx y ATEX siguen siendo las certificaciones creíbles y reconocidas internacionalmente — y la base sobre la que se construirá UL 6260.',
        ],
      },
    ],
  },
  'iecex-vs-nec-guide': {
    title: 'IECEx/ATEX vs. NEC Clase/División: la clasificación de áreas peligrosas explicada',
    metaDescription:
      'Una comparación en lenguaje sencillo del sistema de zonas IECEx/ATEX y del sistema Clase/División del NEC para compradores que evalúan robots en áreas peligrosas.',
    readTime: '10 min',
    excerpt:
      'Dos sistemas clasifican las áreas peligrosas — el sistema de Zonas de la IEC (IECEx/ATEX) y el sistema Clase/División del NEC. Así se comparan, y lo que significa para los compradores de robots en Norteamérica.',
    body: [
      {
        heading: 'Dos sistemas, un mismo objetivo',
        paragraphs: [
          'Tanto el sistema de Zonas IECEx/ATEX como el sistema Clase/División del NEC existen para clasificar entornos donde pueden estar presentes materiales inflamables, y para especificar el equipo que puede operar allí con seguridad. Abordan el mismo problema con marcos y terminología diferentes, lo que puede generar confusión cuando un comprador en Norteamérica evalúa equipos certificados bajo el sistema de la IEC.',
          'Comprender los conceptos básicos de ambos sistemas es esencial para cualquier persona responsable de desplegar equipos — incluidos robots — en áreas peligrosas.',
        ],
      },
      {
        heading: 'El sistema de Zonas IECEx/ATEX',
        paragraphs: [
          'Los sistemas IEC y ATEX clasifican las áreas peligrosas en Zonas según la frecuencia y duración de la atmósfera explosiva:',
          'Zona 0: atmósfera explosiva presente de forma continua o durante largos períodos.',
          'Zona 1: es probable que ocurra una atmósfera explosiva ocasionalmente en funcionamiento normal.',
          'Zona 2: no es probable que ocurra una atmósfera explosiva, y si ocurre, solo por poco tiempo.',
          'Para entornos con polvo, las Zonas 20, 21 y 22 siguen la misma lógica. El equipo se certifica luego para la Zona apropiada, con un grupo de gas (I, IIA, IIB, IIC) y una clase de temperatura (T1–T6) que especifican el rango de atmósferas explosivas para las que es seguro.',
        ],
      },
      {
        heading: 'El sistema Clase/División del NEC',
        paragraphs: [
          'El Código Eléctrico Nacional (NEC, Artículo 500) utiliza un sistema de Clase y División:',
          'Clase I: gases o vapores inflamables.',
          'Clase II: polvos combustibles.',
          'Clase III: fibras o partículas volátiles inflamables.',
          'Divisiones: la División 1 significa que el riesgo está presente durante el funcionamiento normal; la División 2 significa que solo está presente en condiciones anormales.',
          'Dentro de la Clase I, los gases se agrupan (A, B, C, D) y el equipo tiene una clase de temperatura (T1–T6). La correspondencia es similar en intención al sistema IEC, pero las categorías y el etiquetado difieren.',
        ],
      },
      {
        heading: 'Correspondencia aproximada entre sistemas',
        paragraphs: [
          'Aunque no es una equivalencia exacta, la siguiente correspondencia aproximada ayuda a traducir entre ambos:',
          'IEC Zona 0 ≈ NEC Clase I División 1 (continuo)',
          'IEC Zona 1 ≈ NEC Clase I División 1 (ocasional)',
          'IEC Zona 2 ≈ NEC Clase I División 2',
          'IEC Grupo de gas IIC ≈ NEC Grupo B (hidrógeno) e inferiores',
          'IEC Grupo de gas IIB ≈ NEC Grupo C',
          'IEC Grupo de gas IIA ≈ NEC Grupo D',
          'Esta correspondencia es un punto de partida, no un sustituto de una evaluación de ingeniería adecuada. El equipo de ingeniería eléctrica y cumplimiento de su sitio debe tomar la determinación final.',
        ],
      },
      {
        heading: 'Qué significa esto para los compradores de robots',
        paragraphs: [
          'Si usted está en Norteamérica y evalúa un robot certificado bajo IECEx, la certificación es creíble y reconocida internacionalmente — pero necesita relacionarla con la clasificación NEC de su sitio para confirmar su idoneidad. Un robot certificado Ex IIC T6 Gb (el grupo de gas y la clase de temperatura IEC más altos) es ampliamente adecuado para los entornos de Clase I más exigentes.',
          'Pida al proveedor la documentación de certificación completa y trabaje con su equipo de cumplimiento para confirmar la correspondencia. Hazloc Robotics proporciona esta documentación y trabaja con los equipos de cumplimiento de los compradores para apoyar evaluaciones específicas del sitio.',
        ],
      },
    ],
  },
  'buyer-education-robot-inspection-roi': {
    title: 'Cómo calcular el ROI de la inspección robótica: un marco para líderes de HSE y operaciones',
    metaDescription:
      'Un marco práctico para calcular el retorno de la inversión de los robots de inspección en áreas peligrosas, con categorías de costos y áreas de beneficio reales.',
    readTime: '7 min',
    excerpt:
      'Cómo construir un caso de negocio creíble para los robots de inspección en áreas peligrosas — yendo más allá de "es más seguro" hacia la evitación de costos cuantificada, el ahorro de mano de obra y la prevención de incidentes.',
    body: [
      {
        heading: 'Por qué importa el ROI',
        paragraphs: [
          'La seguridad es el principal motor para adoptar robots de inspección en áreas peligrosas, pero la seguridad por sí sola rara vez obtiene la aprobación presupuestaria. Los líderes de operaciones y finanzas necesitan un caso de negocio cuantificado. La buena noticia es que la economía de la inspección robótica es favorable una vez que se contabiliza el costo total de la inspección manual y el costo total de los incidentes que los robots previenen.',
          'Este artículo proporciona un marco para construir ese caso, organizado en categorías de costos y áreas de beneficio que usted puede completar con los datos de su propia instalación.',
        ],
      },
      {
        heading: 'Costo de la inspección manual (lo que gasta hoy)',
        paragraphs: [
          'Mano de obra directa: horas de inspector, incluidas horas extra y primas de riesgo por trabajo en áreas peligrosas.',
          'Costos de soporte: pruebas de gas, permisos, personal de reserva y equipos de entrada a espacios confinados.',
          'Tiempo de inactividad: la inspección a menudo requiere una parada parcial o una reducción de la producción.',
          'Brecha de frecuencia: la inspección manual está limitada por los horarios de turno, lo que significa que los riesgos entre inspecciones pasan sin detectarse.',
          'Costos de incidentes: el costo promedio de una sola fuga o falla térmica no detectada — incluyendo reparación, producción perdida, sanciones regulatorias e impacto en el seguro — a menudo supera el costo anual de una flota de robots.',
        ],
      },
      {
        heading: 'Áreas de beneficio de la inspección robótica',
        paragraphs: [
          'Cobertura continua: la patrulla 24/7 reemplaza la inspección manual limitada por turnos, reduciendo la ventana para riesgos no detectados.',
          'Reasignación de mano de obra: los inspectores pasan de la patrulla rutinaria al manejo de excepciones y al análisis — trabajo de mayor valor.',
          'Detección temprana: las anomalías térmicas y de gas se detectan antes de que se conviertan en incidentes, evitando paradas no planificadas y costos de reparación.',
          'Eficiencia de cumplimiento: los informes automatizados reducen el tiempo dedicado a la preparación de auditorías y presentaciones regulatorias.',
          'Exposición del personal: menos personas en áreas peligrosas significa menor riesgo y primas de seguro más bajas con el tiempo.',
        ],
      },
      {
        heading: 'Construyendo su caso',
        paragraphs: [
          'Comience con una instalación o un área de alto riesgo. Cuantifique el costo anual de la inspección manual (todas las categorías anteriores), luego estime el costo anualizado de un incidente evitado. Compare esto con el costo anualizado de un despliegue de robots (arrendamiento o compra, software, mantenimiento y capacitación).',
          'En la mayoría de los despliegues en entornos peligrosos que hemos respaldado, el punto de equilibrio se alcanza en menos de 18 meses — y eso es antes de contabilizar el valor de reducción de riesgo que más le importa a los equipos de HSE.',
        ],
      },
    ],
  },
};
