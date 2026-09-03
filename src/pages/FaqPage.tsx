import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { useLocale } from '@/i18n/useLocale';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const copy = {
  en: {
    eyebrow: 'Support',
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to common questions about Hazloc Robotics, our product line, certification, purchasing, and data integration.',
    categories: [
      {
        category: 'General',
        items: [
          { q: 'Who is Hazloc Robotics Inc., and how does it relate to Sevnce Robotics?', a: 'Hazloc Robotics Inc. is a Canadian company and the North & Latin America commercial partner for Sevnce Robotics\' explosion-proof inspection robot line. Sevnce Robotics (founded 2010, Chongqing, China) designs, engineers, and manufactures the robots; Hazloc Robotics handles regional sales, compliance, and site support.' },
          { q: 'What regions does Hazloc Robotics Inc. serve?', a: 'North and Latin America directly. Sevnce\'s robots are deployed in 40+ countries globally, including active work in the Middle East and Southeast Asia.' },
        ],
      },
      {
        category: 'Products',
        items: [
          { q: 'How many robot models do you offer?', a: '15 robots across explosion-proof, electric, and security categories, plus a small line of accessory products (charging infrastructure and onboard compute modules).' },
          { q: 'What\'s the difference between "explosion-proof" and "electric" robots?', a: 'Explosion-proof (Ex-rated) robots are certified for hazardous locations where flammable gas or dust may be present. Electric robots are for general industrial/non-hazardous areas and don\'t carry that certification, so they are priced lower.' },
          { q: 'Is there fleet management software?', a: 'Yes — the Asset/Equipment Tracking Center, a cloud-or-on-premise software layer that unifies monitoring, scheduling, and compliance reporting across every robot in a fleet, with a REST API and SCADA/DCS connectors.' },
          { q: 'Can robots be custom-configured for our specific site?', a: 'Several models (e.g. SGLS-C3) are explicitly modular and built to integrate different sensor payloads. Contact us to discuss additional functional add-ins for your site.' },
        ],
      },
      {
        category: 'Certification',
        items: [
          { q: 'Are the robots certified for use in North America yet?', a: 'They hold IECEx and ATEX certification (internationally recognized). UL 6260 — the emerging North American standard — is on the roadmap, and CSA certification is in progress.' },
          { q: 'What does a rating like "Ex IIC T6 Gb" mean?', a: 'IIC is the gas group (IIC being the highest/most demanding, covering hydrogen), and T6 is the temperature class (max surface temp 85°C, the most conservative). Gb indicates the protection level.' },
          { q: 'Can I get documentation to verify certification claims?', a: 'Yes — the Certification page explicitly invites this, and our stated position is that certification documentation should be provided on request, not just a badge.' },
        ],
      },
      {
        category: 'Purchasing & Deployment',
        items: [
          { q: 'Do you sell or lease the robots?', a: 'Our business model is "sales + leasing," combining equipment leasing with O&M services and technical support.' },
          { q: 'What\'s the typical lead time from order to delivery?', a: 'A standard robot can typically be delivered to site within 30 days. A custom-configured robot can typically be delivered within 60 days.' },
          { q: 'Is there a minimum order quantity?', a: 'No — any order size is welcome.' },
          { q: 'What warranty do you offer?', a: 'Products carry a manufacturer\'s Limited Warranty covering 12 months from delivery for defects in materials and workmanship; extended warranty coverage is available for purchase. Full terms are set out in our Terms & Conditions.' },
          { q: 'Do you provide operator training?', a: 'Yes — every product ships with detailed operation manuals and training video clips, and remote training sessions are available free of charge. Onsite coaching is available on request.' },
          { q: 'What happens after I submit a demo request or use the Build configurator?', a: 'A specialist reviews the submission and reaches out within one business day to discuss fit, customization, and next steps — the same commitment stated on both the Contact and Build pages.' },
        ],
      },
      {
        category: 'Data & Integration',
        items: [
          { q: 'Where is inspection data stored?', a: 'The Asset Tracking Center supports either cloud or on-premise deployment, with configurable data retention up to 5 years.' },
          { q: 'Can it integrate with our existing plant systems?', a: 'Yes — REST API plus SCADA and DCS connectors are listed as standard integration points.' },
        ],
      },
    ] as FaqCategory[],
  },
  fr: {
    eyebrow: 'Assistance',
    title: 'Foire aux questions',
    subtitle: 'Réponses aux questions courantes sur Hazloc Robotics, notre gamme de produits, la certification, l\'achat et l\'intégration des données.',
    categories: [
      {
        category: 'Général',
        items: [
          { q: 'Qui est Hazloc Robotics Inc., et quel est son lien avec Sevnce Robotics?', a: 'Hazloc Robotics Inc. est une entreprise canadienne et le partenaire commercial pour l\'Amérique du Nord et l\'Amérique latine de la gamme de robots d\'inspection antidéflagrants de Sevnce Robotics. Sevnce Robotics (fondée en 2010, Chongqing, Chine) conçoit, développe et fabrique les robots; Hazloc Robotics gère les ventes régionales, la conformité et le soutien sur site.' },
          { q: 'Quelles régions Hazloc Robotics Inc. dessert-elle?', a: 'L\'Amérique du Nord et l\'Amérique latine directement. Les robots de Sevnce sont déployés dans plus de 40 pays à l\'échelle mondiale, y compris des activités actives au Moyen-Orient et en Asie du Sud-Est.' },
        ],
      },
      {
        category: 'Produits',
        items: [
          { q: 'Combien de modèles de robots proposez-vous?', a: '15 robots répartis dans les catégories antidéflagrant, électrique et sécurité, ainsi qu\'une petite gamme de produits accessoires (infrastructure de charge et modules de calcul embarqués).' },
          { q: 'Quelle est la différence entre les robots « antidéflagrants » et « électriques »?', a: 'Les robots antidéflagrants (certifiés Ex) sont certifiés pour les emplacements dangereux où des gaz ou poussières inflammables peuvent être présents. Les robots électriques sont destinés aux zones industrielles générales non dangereuses et ne portent pas cette certification, d\'où un prix inférieur.' },
          { q: 'Existe-t-il un logiciel de gestion de flotte?', a: 'Oui — l\'Asset/Equipment Tracking Center, une couche logicielle infonuagique ou sur site qui unifie la surveillance, la planification et les rapports de conformité pour chaque robot d\'une flotte, avec une API REST et des connecteurs SCADA/DCS.' },
          { q: 'Les robots peuvent-ils être configurés sur mesure pour notre site?', a: 'Plusieurs modèles (par ex. le SGLS-C3) sont explicitement modulaires et conçus pour intégrer différentes charges utiles de capteurs. Contactez-nous pour discuter des ajouts fonctionnels supplémentaires pour votre site.' },
        ],
      },
      {
        category: 'Certification',
        items: [
          { q: 'Les robots sont-ils déjà certifiés pour une utilisation en Amérique du Nord?', a: 'Ils détiennent les certifications IECEx et ATEX (reconnues internationalement). La norme UL 6260 — la norme nord-américaine émergente — est sur la feuille de route, et la certification CSA est en cours.' },
          { q: 'Que signifie une cote comme « Ex IIC T6 Gb »?', a: 'IIC est le groupe de gaz (IIC étant le plus élevé/exigeant, couvrant l\'hydrogène), et T6 est la classe de température (température de surface maximale de 85 °C, la plus prudente). Gb indique le niveau de protection.' },
          { q: 'Puis-je obtenir de la documentation pour vérifier les allégations de certification?', a: 'Oui — la page Certification invite explicitement à cette démarche, et notre position affirmée est que la documentation de certification doit être fournie sur demande, pas seulement un badge.' },
        ],
      },
      {
        category: 'Achat et déploiement',
        items: [
          { q: 'Vendez-vous ou louez-vous les robots?', a: 'Notre modèle d\'affaires est « vente + location », combinant la location d\'équipement avec des services d\'exploitation et de maintenance ainsi qu\'un soutien technique.' },
          { q: 'Quel est le délai de livraison habituel entre la commande et la livraison?', a: 'Un robot standard peut généralement être livré sur site dans un délai de 30 jours. Un robot configuré sur mesure peut généralement être livré dans un délai de 60 jours.' },
          { q: 'Y a-t-il une quantité minimale de commande?', a: 'Non — toute taille de commande est la bienvenue.' },
          { q: 'Quelle garantie offrez-vous?', a: 'Les produits sont couverts par une garantie limitée du fabricant de 12 mois à compter de la livraison pour les défauts de matériaux et de fabrication; une couverture de garantie prolongée est offerte à l\'achat. Les modalités complètes sont énoncées dans nos Conditions générales de vente.' },
          { q: 'Offrez-vous une formation aux opérateurs?', a: 'Oui — chaque produit est livré avec des manuels d\'utilisation détaillés et des vidéos de formation, et des séances de formation à distance sont offertes gratuitement. Un accompagnement sur site est disponible sur demande.' },
          { q: 'Que se passe-t-il après avoir soumis une demande de démo ou utilisé le configurateur Build?', a: 'Un spécialiste examine la soumission et vous contacte dans un jour ouvrable pour discuter de la pertinence, de la personnalisation et des prochaines étapes — le même engagement énoncé sur les pages Contact et Build.' },
        ],
      },
      {
        category: 'Données et intégration',
        items: [
          { q: 'Où les données d\'inspection sont-elles stockées?', a: 'L\'Asset Tracking Center prend en charge le déploiement infonuagique ou sur site, avec une conservation des données configurable jusqu\'à 5 ans.' },
          { q: 'Peut-il s\'intégrer à nos systèmes d\'usine existants?', a: 'Oui — une API REST ainsi que des connecteurs SCADA et DCS figurent parmi les points d\'intégration standards.' },
        ],
      },
    ] as FaqCategory[],
  },
  es: {
    eyebrow: 'Soporte',
    title: 'Preguntas frecuentes',
    subtitle: 'Respuestas a preguntas comunes sobre Hazloc Robotics, nuestra línea de productos, certificación, compra e integración de datos.',
    categories: [
      {
        category: 'General',
        items: [
          { q: '¿Quién es Hazloc Robotics Inc. y cómo se relaciona con Sevnce Robotics?', a: 'Hazloc Robotics Inc. es una empresa canadiense y el socio comercial para Norteamérica y Latinoamérica de la línea de robots de inspección antiexplosión de Sevnce Robotics. Sevnce Robotics (fundada en 2010, Chongqing, China) diseña, desarrolla y fabrica los robots; Hazloc Robotics gestiona las ventas regionales, el cumplimiento normativo y el soporte en sitio.' },
          { q: '¿A qué regiones sirve Hazloc Robotics Inc.?', a: 'Directamente a Norteamérica y Latinoamérica. Los robots de Sevnce están desplegados en más de 40 países a nivel mundial, incluyendo actividad en Medio Oriente y el sudeste asiático.' },
        ],
      },
      {
        category: 'Productos',
        items: [
          { q: '¿Cuántos modelos de robots ofrecen?', a: '15 robots en las categorías antiexplosión, eléctrico y seguridad, además de una pequeña línea de productos accesorios (infraestructura de carga y módulos de cómputo integrados).' },
          { q: '¿Cuál es la diferencia entre los robots "antiexplosión" y "eléctricos"?', a: 'Los robots antiexplosión (con clasificación Ex) están certificados para ubicaciones peligrosas donde puede haber gas o polvo inflamable. Los robots eléctricos son para áreas industriales generales no peligrosas y no cuentan con esa certificación, por lo que su precio es menor.' },
          { q: '¿Existe software de gestión de flota?', a: 'Sí — el Asset/Equipment Tracking Center, una capa de software en la nube o local que unifica el monitoreo, la programación y los informes de cumplimiento de cada robot de una flota, con una API REST y conectores SCADA/DCS.' },
          { q: '¿Los robots pueden configurarse a medida para nuestro sitio específico?', a: 'Varios modelos (por ejemplo, el SGLS-C3) son explícitamente modulares y están diseñados para integrar diferentes cargas útiles de sensores. Contáctenos para hablar sobre funciones adicionales para su sitio.' },
        ],
      },
      {
        category: 'Certificación',
        items: [
          { q: '¿Los robots ya están certificados para su uso en Norteamérica?', a: 'Cuentan con certificación IECEx y ATEX (reconocidas internacionalmente). La norma UL 6260 — el estándar norteamericano emergente — está en la hoja de ruta, y la certificación CSA está en progreso.' },
          { q: '¿Qué significa una clasificación como "Ex IIC T6 Gb"?', a: 'IIC es el grupo de gas (siendo IIC el más alto/exigente, que cubre el hidrógeno), y T6 es la clase de temperatura (temperatura superficial máxima de 85 °C, la más conservadora). Gb indica el nivel de protección.' },
          { q: '¿Puedo obtener documentación para verificar las afirmaciones de certificación?', a: 'Sí — la página de Certificación invita explícitamente a hacerlo, y nuestra postura declarada es que la documentación de certificación debe proporcionarse a solicitud, no solo una insignia.' },
        ],
      },
      {
        category: 'Compra e implementación',
        items: [
          { q: '¿Venden o arriendan los robots?', a: 'Nuestro modelo de negocio es "venta + arrendamiento", combinando el arrendamiento de equipos con servicios de operación y mantenimiento y soporte técnico.' },
          { q: '¿Cuál es el plazo de entrega típico desde el pedido hasta la entrega?', a: 'Un robot estándar generalmente puede entregarse en el sitio dentro de 30 días. Un robot configurado a medida generalmente puede entregarse dentro de 60 días.' },
          { q: '¿Existe una cantidad mínima de pedido?', a: 'No — cualquier tamaño de pedido es bienvenido.' },
          { q: '¿Qué garantía ofrecen?', a: 'Los productos cuentan con una Garantía Limitada del fabricante que cubre 12 meses desde la entrega por defectos de materiales y fabricación; hay cobertura de garantía extendida disponible para su compra. Los términos completos se establecen en nuestros Términos y Condiciones.' },
          { q: '¿Ofrecen capacitación para operadores?', a: 'Sí — cada producto se envía con manuales de operación detallados y videos de capacitación, y las sesiones de capacitación remota están disponibles sin costo. El acompañamiento en sitio está disponible a solicitud.' },
          { q: '¿Qué sucede después de enviar una solicitud de demostración o usar el configurador Build?', a: 'Un especialista revisa la solicitud y se pone en contacto dentro de un día hábil para hablar sobre la adecuación, la personalización y los próximos pasos — el mismo compromiso indicado en las páginas de Contacto y Build.' },
        ],
      },
      {
        category: 'Datos e integración',
        items: [
          { q: '¿Dónde se almacenan los datos de inspección?', a: 'El Asset Tracking Center admite implementación en la nube o local, con retención de datos configurable de hasta 5 años.' },
          { q: '¿Puede integrarse con nuestros sistemas de planta existentes?', a: 'Sí — una API REST además de conectores SCADA y DCS figuran como puntos de integración estándar.' },
        ],
      },
    ] as FaqCategory[],
  },
  pt: {
    eyebrow: 'Suporte',
    title: 'Perguntas frequentes',
    subtitle: 'Respostas para perguntas comuns sobre a Hazloc Robotics, nossa linha de produtos, certificação, compra e integração de dados.',
    categories: [
      {
        category: 'Geral',
        items: [
          { q: 'Quem é a Hazloc Robotics Inc. e qual sua relação com a Sevnce Robotics?', a: 'A Hazloc Robotics Inc. é uma empresa canadense e a parceira comercial para a América do Norte e América Latina da linha de robôs de inspeção à prova de explosão da Sevnce Robotics. A Sevnce Robotics (fundada em 2010, Chongqing, China) projeta, desenvolve e fabrica os robôs; a Hazloc Robotics cuida das vendas regionais, conformidade e suporte no local.' },
          { q: 'Quais regiões a Hazloc Robotics Inc. atende?', a: 'América do Norte e América Latina diretamente. Os robôs da Sevnce estão implantados em mais de 40 países em todo o mundo, incluindo atuação ativa no Oriente Médio e no Sudeste Asiático.' },
        ],
      },
      {
        category: 'Produtos',
        items: [
          { q: 'Quantos modelos de robôs vocês oferecem?', a: '15 robôs nas categorias à prova de explosão, elétrico e segurança, além de uma pequena linha de produtos acessórios (infraestrutura de carregamento e módulos de computação embarcados).' },
          { q: 'Qual é a diferença entre robôs "à prova de explosão" e "elétricos"?', a: 'Os robôs à prova de explosão (classificados Ex) são certificados para locais perigosos onde pode haver gás ou poeira inflamável. Os robôs elétricos são para áreas industriais gerais não perigosas e não possuem essa certificação, por isso têm preço mais baixo.' },
          { q: 'Existe software de gestão de frota?', a: 'Sim — o Asset/Equipment Tracking Center, uma camada de software em nuvem ou local que unifica monitoramento, agendamento e relatórios de conformidade em toda a frota, com API REST e conectores SCADA/DCS.' },
          { q: 'Os robôs podem ser configurados sob medida para nosso local específico?', a: 'Vários modelos (por exemplo, o SGLS-C3) são explicitamente modulares e projetados para integrar diferentes cargas de sensores. Entre em contato para discutir funcionalidades adicionais para o seu local.' },
        ],
      },
      {
        category: 'Certificação',
        items: [
          { q: 'Os robôs já são certificados para uso na América do Norte?', a: 'Eles possuem certificação IECEx e ATEX (reconhecidas internacionalmente). A norma UL 6260 — o padrão norte-americano emergente — está no roteiro, e a certificação CSA está em andamento.' },
          { q: 'O que significa uma classificação como "Ex IIC T6 Gb"?', a: 'IIC é o grupo de gás (sendo IIC o mais alto/exigente, cobrindo hidrogênio), e T6 é a classe de temperatura (temperatura máxima de superfície de 85 °C, a mais conservadora). Gb indica o nível de proteção.' },
          { q: 'Posso obter documentação para verificar as alegações de certificação?', a: 'Sim — a página de Certificação convida explicitamente a isso, e nossa posição declarada é que a documentação de certificação deve ser fornecida mediante solicitação, não apenas um selo.' },
        ],
      },
      {
        category: 'Compra e implantação',
        items: [
          { q: 'Vocês vendem ou alugam os robôs?', a: 'Nosso modelo de negócio é "venda + locação", combinando locação de equipamentos com serviços de operação e manutenção e suporte técnico.' },
          { q: 'Qual é o prazo de entrega típico do pedido até a entrega?', a: 'Um robô padrão normalmente pode ser entregue no local em até 30 dias. Um robô configurado sob medida normalmente pode ser entregue em até 60 dias.' },
          { q: 'Existe uma quantidade mínima de pedido?', a: 'Não — qualquer tamanho de pedido é bem-vindo.' },
          { q: 'Qual garantia vocês oferecem?', a: 'Os produtos possuem Garantia Limitada do fabricante cobrindo 12 meses a partir da entrega para defeitos de material e fabricação; cobertura de garantia estendida está disponível para compra. Os termos completos estão descritos em nossos Termos e Condições.' },
          { q: 'Vocês oferecem treinamento para operadores?', a: 'Sim — todo produto é enviado com manuais de operação detalhados e vídeos de treinamento, e sessões de treinamento remoto estão disponíveis gratuitamente. Orientação no local está disponível mediante solicitação.' },
          { q: 'O que acontece depois que eu envio uma solicitação de demonstração ou uso o configurador Build?', a: 'Um especialista analisa a solicitação e entra em contato dentro de um dia útil para discutir adequação, personalização e próximos passos — o mesmo compromisso declarado nas páginas de Contato e Build.' },
        ],
      },
      {
        category: 'Dados e integração',
        items: [
          { q: 'Onde os dados de inspeção são armazenados?', a: 'O Asset Tracking Center oferece suporte para implantação em nuvem ou local, com retenção de dados configurável de até 5 anos.' },
          { q: 'Ele pode se integrar aos nossos sistemas de planta existentes?', a: 'Sim — API REST e conectores SCADA e DCS estão listados como pontos de integração padrão.' },
        ],
      },
    ] as FaqCategory[],
  },
};

export default function FaqPage() {
  const locale = useLocale();
  const t = copy[locale];
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="container-x max-w-3xl">
          <div className="space-y-12">
            {t.categories.map((cat, ci) => (
              <Reveal key={cat.category} delay={ci * 60}>
                <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{cat.category}</h2>
                <div className="mt-4 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white overflow-hidden">
                  {cat.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    const isOpen = openKey === key;
                    return (
                      <div key={key}>
                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : key)}
                          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-ink-900">{item.q}</span>
                          <ChevronDown
                            size={18}
                            className={`flex-shrink-0 text-ink-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 text-ink-600 leading-relaxed">{item.a}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
