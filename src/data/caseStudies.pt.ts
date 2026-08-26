import type { CaseStudyTranslation } from './caseStudies.fr';

export const caseStudiesPt: Record<string, CaseStudyTranslation> = {
  'iraq-basra-missan': {
    title: 'Iraque: digitalização dos campos de petróleo de Basra e Missan',
    client: 'Grande operador de petróleo iraquiano',
    location: 'Basra e Missan, Iraque',
    region: 'Oriente Médio',
    phase: 'Fase 1',
    challenge:
      'Dois grandes complexos petrolíferos no sul do Iraque exigiam inspeção contínua de unidades de processo, parques de tanques e pipe racks espalhados por locais desérticos remotos. A inspeção manual era limitada pelo calor extremo, atmosferas perigosas e a dificuldade logística de manter patrulhas 24 horas em locais remotos. O operador precisava de uma solução que fornecesse monitoramento 24/7 enquanto reduzia a exposição do pessoal a áreas perigosas.',
    solution:
      'Uma frota de robôs com rodas à prova de explosão (L4-S) e com esteiras foi implantada em ambos os locais petrolíferos, integrada ao software Asset Tracking Center para operações centralizadas. Os robôs realizam rotas de patrulha autônomas cobrindo unidades de processo, perímetros de parques de tanques e pipe racks críticos, com sensores térmicos e de gás enviando alertas em tempo real para uma sala de controle central.',
    results: [
      { metric: 'Cobertura de inspeção', value: 'Patrulha autônoma 24/7' },
      { metric: 'Exposição do pessoal', value: 'Reduzida em 70% em zonas perigosas' },
      { metric: 'Detecção de incidentes', value: '12 anomalias térmicas detectadas precocemente' },
      { metric: 'Locais implantados', value: '2 complexos petrolíferos' },
    ],
    quote: {
      text: 'A frota de robôs transformou nosso programa de inspeção. Agora temos monitoramento contínuo de ativos críticos sem enviar pessoal para áreas perigosas em cada turno. Somente a detecção precoce de anomalias térmicas já pagou o investimento.',
      author: 'Diretor de Operações',
      role: 'Operador de petróleo iraquiano',
    },
    description:
      'Como robôs de inspeção à prova de explosão digitalizaram a inspeção em dois grandes complexos petrolíferos iraquianos, reduzindo a exposição do pessoal e detectando anomalias térmicas antes que se tornassem incidentes.',
  },
  'indonesia-gas': {
    title: 'Projeto de gás na Indonésia',
    client: 'Operador indonésio de processamento de gás',
    location: 'Banten, Indonésia',
    region: 'Sudeste Asiático',
    phase: 'Fase 1',
    challenge:
      'Uma planta de processamento de gás em Banten, Indonésia, precisava de monitoramento contínuo de um grande trem de processamento de gás e da infraestrutura de pipe rack associada. A planta operava com uma equipe de inspeção enxuta, e a patrulha manual não conseguia fornecer a frequência ou consistência exigidas para um ambiente de processamento de gás de alto risco. O operador precisava de uma solução capaz de detectar vazamentos de gás e anomalias térmicas em tempo real, sem aumentar o efetivo de inspeção.',
    solution:
      'Robôs à prova de explosão sobre trilho e com rodas foram implantados ao longo do trem de processamento de gás e do pipe rack, com o robô sobre trilho fornecendo monitoramento contínuo de trajeto fixo 24/7 e o robô com rodas realizando a patrulha flexível das áreas circundantes. Ambos se integram ao Asset Tracking Center para monitoramento unificado, roteamento de alertas e relatórios de conformidade.',
    results: [
      { metric: 'Frequência de monitoramento', value: 'De diária para contínua' },
      { metric: 'Detecção de vazamentos de gás', value: '3 vazamentos detectados no primeiro trimestre' },
      { metric: 'Efetivo de inspeção', value: 'Nenhum aumento necessário' },
      { metric: 'Relatórios de conformidade', value: 'Automatizados, prontos para auditoria' },
    ],
    description:
      'Como uma planta de processamento de gás na Indonésia alcançou monitoramento contínuo com uma equipe de inspeção enxuta, usando robôs à prova de explosão sobre trilho e com rodas com software centralizado.',
  },
  'basf-global': {
    title: 'BASF Global',
    client: 'BASF',
    location: 'Instalações de fabricação química em todo o mundo',
    region: 'Global',
    phase: 'Novo cliente — 2026',
    challenge:
      'Como um dos maiores produtores químicos do mundo, a BASF opera ambientes de processamento onde condições inflamáveis, corrosivas e tóxicas tornam a inspeção manual arriscada e cara — o mesmo tipo de risco de Zona 1 que a robótica à prova de explosão foi projetada para enfrentar.',
    solution:
      'A Sevnce Robotics conta com a BASF entre seus parceiros industriais e de fabricação internacionais já estabelecidos, ao lado de operadores como PetroChina e Sinopec. A Hazlocrobotics tem orgulho de destacar a BASF como uma das mais recentes adições a esse relacionamento com clientes a partir de 2026, estendendo a implantação da linha ao setor químico global.',
    description:
      'A BASF se junta à lista de grandes operadores químicos e energéticos internacionais da Sevnce Robotics como novo cliente em 2026 — detalhes completos da implantação serão divulgados à medida que a parceria avançar.',
  },
};
