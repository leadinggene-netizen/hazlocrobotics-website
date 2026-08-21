import type { IndustryTranslation } from './industries.fr';

export const industriesPt: Record<string, IndustryTranslation> = {
  'oil-gas-petrochemical': {
    name: 'Óleo e gás / Petroquímica',
    shortName: 'Óleo e gás',
    tagline: 'Inspeção contínua para os ambientes perigosos mais exigentes do planeta',
    challenge:
      'Refinarias e plantas petroquímicas são repletas de áreas perigosas de Zona 1, onde a inspeção humana é arriscada, cara e limitada pelos turnos de trabalho. Vazamentos, anomalias térmicas e degradação estrutural não detectados levam a paradas não planejadas, penalidades regulatórias e incidentes de segurança catastróficos.',
    description:
      'Robôs de inspeção à prova de explosão permitem patrulha autônoma contínua de unidades de processo, parques de tanques e pipe racks — detectando vazamentos de gás, anomalias térmicas e problemas estruturais antes que se tornem incidentes. Implantados em mais de 40 países entre os principais operadores de óleo e gás do mundo.',
    buyingCommittee: ['Diretor de HSE', 'Gerente de planta', 'Gerente de inspeção', 'Diretor de projeto EPC'],
    keyBenefits: [
      'A patrulha autônoma 24/7 substitui a inspeção manual limitada por turnos',
      'Certificado IIC T6 para hidrogênio e os grupos de gás mais exigentes',
      'Detecção de anomalias térmicas e de gás antes que os incidentes se agravem',
      'Relatórios de conformidade automatizados para auditorias OSHA e regulatórias',
    ],
  },
  'power-generation': {
    name: 'Geração de energia',
    shortName: 'Energia',
    tagline: 'Inspeção confiável para usinas de energia e subestações',
    challenge:
      'Instalações de geração de energia — de usinas térmicas a estações hidrelétricas — exigem monitoramento contínuo de caldeiras, turbinas, sistemas transportadores e subestações. Esses ambientes combinam calor, poeira e espaços confinados que tornam a inspeção manual perigosa e inconsistente.',
    description:
      'Robôs de inspeção autônomos fornecem monitoramento repetível e de alta frequência de ativos críticos de geração de energia. A imagem térmica detecta o superaquecimento de componentes antes da falha, enquanto a patrulha contínua substitui inspeções manuais caras e perigosas de caldeiras e transportadores.',
    buyingCommittee: ['Diretor de operações', 'Gerente de manutenção', 'Gerente de segurança'],
    keyBenefits: [
      'O monitoramento térmico detecta falhas em rolamentos e elétricas precocemente',
      'Monitoramento 24/7 sobre trilho para caldeiras e transportadores',
      'Reduz o risco de entrada em espaço confinado para as equipes de inspeção',
      'A análise de tendências apoia o planejamento de manutenção preditiva',
    ],
  },
  'marine-offshore': {
    name: 'Marítimo e offshore',
    shortName: 'Marítimo',
    tagline: 'Inspeção para plataformas offshore e embarcações marítimas',
    challenge:
      'Plataformas offshore e embarcações marítimas apresentam ambientes confinados, corrosivos e perigosos, onde o acesso para inspeção é difícil e caro. O transporte de pessoal para locais offshore é caro, e as janelas climáticas limitam a frequência de inspeção.',
    description:
      'Robôs de inspeção à prova de explosão e elétricos reduzem a necessidade de pessoal acessar áreas offshore perigosas e confinadas. O monitoramento contínuo por um robô implantado reduz as necessidades de pessoal offshore e fornece consciência situacional em tempo real às equipes de operações em terra.',
    buyingCommittee: ['Gerente de instalação offshore', 'Gerente de HSE', 'Diretor de operações marítimas'],
    keyBenefits: [
      'Reduz a exposição do pessoal a espaços offshore confinados e perigosos',
      'Vídeo e dados de sensores em tempo real para os centros de operações em terra',
      'Construção resistente à corrosão para ambientes marinhos',
      'Menores custos de pessoal e logística offshore para inspeção de rotina',
    ],
  },
  'mining': {
    name: 'Mineração',
    shortName: 'Mineração',
    tagline: 'Inspeção segura de operações de mineração subterrâneas e de superfície',
    challenge:
      'Ambientes de mineração combinam atmosferas de poeira explosiva, espaços subterrâneos confinados e condições instáveis do terreno. A inspeção manual de túneis, frentes de lavra e sistemas transportadores expõe o pessoal a riscos de desabamento, gás e poeira inerentes ao ambiente operacional.',
    description:
      'Robôs com esteiras e quadrúpedes à prova de explosão navegam por túneis subterrâneos e áreas de mineração de superfície, fornecendo monitoramento visual, térmico e ambiental sem colocar os inspetores em risco. A patrulha contínua detecta movimentação de terreno, acúmulo de gás e superaquecimento de equipamentos.',
    buyingCommittee: ['Gerente de mina', 'Superintendente de segurança', 'Diretor de operações'],
    keyBenefits: [
      'À prova de explosão para atmosferas de poeira combustível',
      'Mobilidade com esteiras para terreno subterrâneo irregular e coberto de destroços',
      'Monitoramento de gás para metano e outros gases de mina',
      'Reduz a entrada de pessoal em áreas instáveis e confinadas',
    ],
  },
  'emergency-response': {
    name: 'Resposta a emergências',
    shortName: 'Emergências',
    tagline: 'Reconhecimento robótico para incidentes de incêndio e materiais perigosos',
    challenge:
      'Incidentes de incêndio e materiais perigosos exigem avaliação rápida da situação antes que as equipes humanas possam entrar com segurança. Os comandantes de incidentes precisam de informações em tempo real sobre a propagação do fogo, concentrações de gás, integridade estrutural e localização de vítimas — informações impossíveis de coletar com segurança de dentro da zona quente.',
    description:
      'O robô de reconhecimento de incêndio entra em cenas de incêndio e materiais perigosos antes das equipes humanas, transmitindo dados térmicos, visuais e de gás em tempo real para o comando do incidente. Isso permite decisões informadas sobre a implantação de equipes, zonas de evacuação e alocação de recursos — salvando vidas e reduzindo a exposição.',
    buyingCommittee: ['Chefe dos bombeiros', 'Comandante da equipe de produtos perigosos', 'Diretor de gestão de emergências'],
    keyBenefits: [
      'Consciência situacional em tempo real antes da entrada da equipe',
      'Imagem térmica para propagação do fogo e localização de vítimas',
      'Detecção de gás para avaliação de produtos perigosos e gestão de zonas',
      'Resistente ao calor e à prova de explosão para as cenas mais extremas',
    ],
  },
};
