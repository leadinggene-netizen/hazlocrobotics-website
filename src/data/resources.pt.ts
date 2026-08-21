export interface ResourceTranslation {
  title: string;
  metaDescription: string;
  readTime: string;
  excerpt: string;
  body: { heading: string; paragraphs: string[] }[];
}

export const resourcesPt: Record<string, ResourceTranslation> = {
  'ul-6260-explainer': {
    title: 'O que é a UL 6260? Um guia de certificação para robôs em áreas classificadas',
    metaDescription:
      'A UL 6260 é a norma emergente para robôs em áreas classificadas. Este guia explica o que ela cobre, em que estágio se encontra e o que os compradores devem perguntar aos fornecedores hoje.',
    readTime: '8 min',
    excerpt:
      'A UL 6260 é a primeira norma projetada especificamente para robôs que operam em áreas classificadas. Aqui está o que ela cobre, em que estágio o processo de certificação se encontra hoje, e o que perguntar a um fornecedor antes de implantar.',
    body: [
      {
        heading: 'A resposta curta',
        paragraphs: [
          'A UL 6260 é uma norma em desenvolvimento pela UL Solutions que trata da segurança de robôs que operam em áreas classificadas (perigosas) — ambientes onde gases, vapores ou poeiras inflamáveis podem estar presentes. É a primeira norma projetada especificamente para robôs móveis nesses ambientes, em vez de uma norma industrial reaproveitada.',
          'Para os compradores, o ponto-chave é este: a UL 6260 está no roteiro, mas ainda não é uma certificação madura e amplamente emitida. Hoje, o caminho confiável para a implantação em áreas classificadas passa pelas certificações IECEx e ATEX, que são reconhecidas internacionalmente e bem estabelecidas. A UL 6260 se tornará a referência norte-americana, e a Hazloc Robotics está no roteiro para alcançá-la.',
        ],
      },
      {
        heading: 'Por que a UL 6260 é importante',
        paragraphs: [
          'Até agora, os robôs implantados em áreas classificadas dos EUA foram avaliados segundo um mosaico de normas que não foram projetadas para robôs móveis e autônomos. A UL 6260 preenche essa lacuna ao fornecer uma estrutura de avaliação unificada que considera as características únicas dos robôs — mobilidade, autonomia, sistemas de bateria e cargas úteis de sensores — no contexto de atmosferas explosivas.',
          'Para as equipes de HSE e conformidade, um robô certificado pela UL 6260 significa que a avaliação foi feita segundo uma norma que realmente entende o que é um robô e como ele se comporta em campo. Isso simplifica o argumento de segurança e reduz o ônus de provar equivalência a inspetores e seguradoras.',
        ],
      },
      {
        heading: 'Como se relaciona com IECEx e ATEX',
        paragraphs: [
          'IECEx e ATEX são os sistemas internacionais estabelecidos para certificar equipamentos destinados a atmosferas explosivas. A IECEx é o sistema global de avaliação de conformidade da IEC, enquanto a ATEX é a diretiva europeia. Ambos são amplamente aceitos e têm sido a base para certificar equipamentos industriais em áreas classificadas por décadas.',
          'Espera-se que a UL 6260 se baseie na fundação IECEx/ATEX, adicionando requisitos específicos da América do Norte alinhados com o sistema de classificação de áreas perigosas do National Electrical Code (NEC). Um robô que já possui certificação IECEx está bem posicionado no roteiro da UL 6260, já que grande parte do design de proteção contra explosões já foi avaliada.',
        ],
      },
      {
        heading: 'O que perguntar a um fornecedor hoje',
        paragraphs: [
          'Se você está avaliando hoje um robô para área classificada, faça estas perguntas:',
          '1. Qual certificação IECEx ou ATEX o robô possui, e para qual grupo de gás e classe de temperatura?',
          '2. Qual é o roteiro do fornecedor para as certificações UL 6260 e CSA?',
          '3. O fornecedor pode fornecer a documentação de certificação completa, não apenas um selo de marketing?',
          '4. O robô já foi implantado em ambientes com classificação de risco semelhante à sua?',
          '5. Qual é o processo do fornecedor para manter a certificação à medida que o produto evolui?',
          'A Hazloc Robotics publica seu status de certificação completo e seu roteiro em nossa página de Certificação e Conformidade. Acreditamos que a transparência sobre certificação é um requisito básico, não um diferencial.',
        ],
      },
      {
        heading: 'Conclusão',
        paragraphs: [
          'A UL 6260 se tornará a norma que compradores e equipes de conformidade norte-americanos buscarão ao avaliar robôs para áreas classificadas. Ela ainda não chegou lá, e qualquer fornecedor que afirme hoje ter uma certificação UL 6260 deveria ser solicitado a apresentar a documentação. Enquanto isso, IECEx e ATEX permanecem como as certificações confiáveis e reconhecidas internacionalmente — e a base sobre a qual a UL 6260 será construída.',
        ],
      },
    ],
  },
  'iecex-vs-nec-guide': {
    title: 'IECEx/ATEX vs. NEC Classe/Divisão: a classificação de áreas perigosas explicada',
    metaDescription:
      'Uma comparação em linguagem simples do sistema de zonas IECEx/ATEX e do sistema Classe/Divisão do NEC para compradores que avaliam robôs em áreas classificadas.',
    readTime: '10 min',
    excerpt:
      'Dois sistemas classificam áreas perigosas — o sistema de Zonas da IEC (IECEx/ATEX) e o sistema Classe/Divisão do NEC. Veja como eles se comparam, e o que isso significa para compradores de robôs na América do Norte.',
    body: [
      {
        heading: 'Dois sistemas, um mesmo objetivo',
        paragraphs: [
          'Tanto o sistema de Zonas IECEx/ATEX quanto o sistema Classe/Divisão do NEC existem para classificar ambientes onde materiais inflamáveis podem estar presentes, e para especificar o equipamento que pode operar neles com segurança. Eles abordam o mesmo problema com estruturas e terminologias diferentes, o que pode gerar confusão quando um comprador na América do Norte avalia equipamentos certificados sob o sistema da IEC.',
          'Compreender os fundamentos de ambos os sistemas é essencial para qualquer pessoa responsável por implantar equipamentos — incluindo robôs — em áreas classificadas.',
        ],
      },
      {
        heading: 'O sistema de Zonas IECEx/ATEX',
        paragraphs: [
          'Os sistemas IEC e ATEX classificam áreas perigosas em Zonas com base na frequência e duração da atmosfera explosiva:',
          'Zona 0: atmosfera explosiva presente continuamente ou por longos períodos.',
          'Zona 1: atmosfera explosiva com probabilidade de ocorrer ocasionalmente em operação normal.',
          'Zona 2: atmosfera explosiva com baixa probabilidade de ocorrer, e se ocorrer, apenas por curto período.',
          'Para ambientes com poeira, as Zonas 20, 21 e 22 seguem a mesma lógica. O equipamento é então certificado para a Zona apropriada, com um grupo de gás (I, IIA, IIB, IIC) e uma classe de temperatura (T1–T6) especificando a faixa de atmosferas explosivas para as quais é seguro.',
        ],
      },
      {
        heading: 'O sistema Classe/Divisão do NEC',
        paragraphs: [
          'O National Electrical Code (NEC, Artigo 500) usa um sistema de Classe e Divisão:',
          'Classe I: gases ou vapores inflamáveis.',
          'Classe II: poeiras combustíveis.',
          'Classe III: fibras ou partículas inflamáveis.',
          'Divisões: a Divisão 1 significa que o risco está presente durante a operação normal; a Divisão 2 significa que está presente apenas em condições anormais.',
          'Dentro da Classe I, os gases são agrupados (A, B, C, D) e o equipamento tem uma classe de temperatura (T1–T6). O mapeamento é semelhante em intenção ao sistema IEC, mas as categorias e a rotulagem diferem.',
        ],
      },
      {
        heading: 'Mapeamento aproximado entre sistemas',
        paragraphs: [
          'Embora não seja uma equivalência exata, o seguinte mapeamento aproximado ajuda a traduzir entre os dois:',
          'IEC Zona 0 ≈ NEC Classe I Divisão 1 (contínuo)',
          'IEC Zona 1 ≈ NEC Classe I Divisão 1 (ocasional)',
          'IEC Zona 2 ≈ NEC Classe I Divisão 2',
          'IEC Grupo de gás IIC ≈ NEC Grupo B (hidrogênio) e abaixo',
          'IEC Grupo de gás IIB ≈ NEC Grupo C',
          'IEC Grupo de gás IIA ≈ NEC Grupo D',
          'Este mapeamento é um ponto de partida, não um substituto para uma avaliação de engenharia adequada. A equipe de engenharia elétrica e conformidade do seu site deve fazer a determinação final.',
        ],
      },
      {
        heading: 'O que isso significa para compradores de robôs',
        paragraphs: [
          'Se você está na América do Norte e avaliando um robô certificado pela IECEx, a certificação é confiável e reconhecida internacionalmente — mas você precisa mapeá-la para a classificação NEC do seu site para confirmar a adequação. Um robô certificado Ex IIC T6 Gb (o grupo de gás e a classe de temperatura IEC mais altos) é amplamente adequado para os ambientes de Classe I mais exigentes.',
          'Peça ao fornecedor a documentação de certificação completa e trabalhe com sua equipe de conformidade para confirmar o mapeamento. A Hazloc Robotics fornece essa documentação e trabalha com as equipes de conformidade dos compradores para apoiar avaliações específicas de cada site.',
        ],
      },
    ],
  },
  'buyer-education-robot-inspection-roi': {
    title: 'Calculando o ROI da inspeção robótica: uma estrutura para líderes de HSE e operações',
    metaDescription:
      'Uma estrutura prática para calcular o retorno sobre o investimento de robôs de inspeção em áreas classificadas, com categorias de custo e áreas de benefício reais.',
    readTime: '7 min',
    excerpt:
      'Como construir um argumento de negócio confiável para robôs de inspeção em áreas classificadas — indo além de "é mais seguro" para uma redução de custos quantificada, economia de mão de obra e prevenção de incidentes.',
    body: [
      {
        heading: 'Por que o ROI importa',
        paragraphs: [
          'A segurança é o principal motor para a adoção de robôs de inspeção em áreas classificadas, mas a segurança sozinha raramente obtém aprovação orçamentária. Líderes de operações e finanças precisam de um argumento de negócio quantificado. A boa notícia é que a economia da inspeção robótica é favorável quando se considera o custo total da inspeção manual e o custo total dos incidentes que os robôs evitam.',
          'Este artigo fornece uma estrutura para construir esse argumento, organizada em categorias de custo e áreas de benefício que você pode preencher com os dados da sua própria instalação.',
        ],
      },
      {
        heading: 'Custo da inspeção manual (o que você gasta hoje)',
        paragraphs: [
          'Mão de obra direta: horas de inspetor, incluindo horas extras e adicionais de periculosidade para trabalho em área perigosa.',
          'Custos de suporte: testes de gás, licenças, pessoal de prontidão e equipes de entrada em espaço confinado.',
          'Tempo de inatividade: a inspeção frequentemente exige parada parcial ou redução de produção.',
          'Lacuna de frequência: a inspeção manual é limitada pelos horários de turno, o que significa que riscos entre inspeções passam despercebidos.',
          'Custos de incidentes: o custo médio de um único vazamento ou falha térmica não detectado — incluindo reparo, produção perdida, penalidades regulatórias e impacto no seguro — frequentemente excede o custo anual de uma frota de robôs.',
        ],
      },
      {
        heading: 'Áreas de benefício da inspeção robótica',
        paragraphs: [
          'Cobertura contínua: a patrulha 24/7 substitui a inspeção manual limitada por turnos, reduzindo a janela para riscos não detectados.',
          'Realocação de mão de obra: os inspetores passam da patrulha rotineira para o tratamento de exceções e análise — trabalho de maior valor.',
          'Detecção precoce: anomalias térmicas e de gás são detectadas antes de se tornarem incidentes, evitando paradas não planejadas e custos de reparo.',
          'Eficiência de conformidade: relatórios automatizados reduzem o tempo gasto na preparação de auditorias e submissões regulatórias.',
          'Exposição do pessoal: menos pessoas em áreas perigosas significa menor risco e prêmios de seguro mais baixos ao longo do tempo.',
        ],
      },
      {
        heading: 'Construindo seu argumento',
        paragraphs: [
          'Comece com uma instalação ou uma área de alto risco. Quantifique o custo anual da inspeção manual (todas as categorias acima), depois estime o custo anualizado de um incidente evitado. Compare isso com o custo anualizado de uma implantação de robôs (locação ou compra, software, manutenção e treinamento).',
          'Na maioria das implantações em ambientes perigosos que apoiamos, o ponto de equilíbrio é atingido em menos de 18 meses — e isso é antes de considerar o valor de redução de risco que mais importa para as equipes de HSE.',
        ],
      },
    ],
  },
};
