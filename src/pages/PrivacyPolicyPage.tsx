import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { useLocale } from '@/i18n/useLocale';

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

const copy = {
  en: {
    eyebrow: 'Effective: September 1, 2026',
    title: 'Privacy Policy',
    subtitle: 'How Hazloc Robotics Inc. collects, uses, and protects your personal information.',
    sections: [
      {
        heading: 'Our Commitment to Your Privacy',
        paragraphs: [
          'Hazloc Robotics Inc. ("HRI", "we", "us", "our") aims to deliver superior service and products to our customers. Since you provide information about yourself when doing business with us, one of our highest priorities is protection of your personal information.',
          'HRI collects personal information in order to do business with you. Unless the reason we are collecting the information is related to the dealings we are having with you, we will inform you of the reason and obtain your consent. Personal information is information that identifies you as an individual and relates specifically to you, such as name, address, telephone number, email address, credit card or credit information. We may obtain this information from you, or from credit agencies and financial institutions.',
        ],
      },
      {
        heading: 'How the Information Is Used',
        paragraphs: ['We may use personal information for a number of different purposes, for example to:'],
        list: [
          'Fulfill requests for products, services or information;',
          'Process credit card payments and collect money owing;',
          'Provide customer service;',
          'Offer new products and services;',
          'Measure and improve the effectiveness of our website or our marketing activities; and',
          'Adapt our products and services to your preferences.',
        ],
      },
      {
        heading: 'Cookies and Similar Technologies',
        paragraphs: [
          'Our website uses cookies and similar tracking technologies to operate the site, remember your preferences, and measure and improve the effectiveness of our website and marketing activities. You can control or disable cookies through your browser settings; note that some parts of our website may not function properly if cookies are disabled. We do not use cookies to collect sensitive personal information.',
        ],
      },
      {
        heading: 'Disclosing Your Personal Information',
        paragraphs: [
          'For many of the purposes identified above, we may need to share your personal information with others, such as to process credit card payments. We will not share your personal information except as necessary for the purpose for which it is collected. We will never give out your e-mail address except for these purposes.',
          'If you make a purchase on-line, we route all transactions through SSL (Secure Socket Layer) encryption and process your credit card number only to secure your current payment. We do not retain your credit card number subsequent to the transaction at hand.',
        ],
      },
      {
        heading: 'Protecting Your Personal Information',
        paragraphs: ['In order to protect your personal information and right to privacy, we will:'],
        list: [
          'Not collect, use or disclose your personal information for any purpose other than those we identify to you.',
          'Keep your personal information only for as long as we need it to fulfill the stated purpose or as required by law.',
          'Safeguard your personal information to the best of our ability using appropriate technical and organizational security measures.',
          'Respond to any request you may make to access, correct, or delete the personal information we hold about you.',
          'Obtain the appropriate consent from you for the collection, use or disclosure of your personal information.',
          'Notify affected individuals and the applicable regulator without undue delay in the event of a confidentiality incident presenting a risk of serious injury, as required by applicable law.',
        ],
      },
      {
        heading: 'Consent',
        paragraphs: [
          'Consent will be implied where you provide the information as part of a transaction or dealings with HRI. We may also obtain your express consent, which may be in a consent or application form or by a check box or consent button on our website.',
          'We want you to know that you do have choices in this matter. You may refuse to allow us to collect, use or share your personal information, or you may withdraw a previously given consent at any time, subject to legal or contractual restrictions and reasonable notice.',
        ],
      },
      {
        heading: 'Your Rights and Access to Your Information',
        paragraphs: [
          'You may request in writing that HRI inform you of all personal information that it holds related to you. Subject to applicable law, you may also request that we correct inaccurate information, delete personal information we hold about you (right to erasure), or, where technically feasible, provide your personal information to you or to a third party in a structured, commonly used technical format (right to data portability). HRI will provide such information or give effect to such requests within the time limits required by law, other than information or requests that cannot be honoured for legal, security, or commercial proprietary reasons, or that are subject to solicitor-client or litigation privilege, or would result in the disclosure of personal information of others.',
          'HRI will endeavour to keep your personal information accurate and up-to-date based on information you provide. If you determine that any of your personal information is not accurate, please inform us and we will correct our records.',
        ],
      },
      {
        heading: 'Privacy Officer',
        paragraphs: [
          'The person in charge of the protection of personal information at Hazloc Robotics Inc., as required under applicable Quebec and Canadian privacy law, is the Compliance Manager identified below. Direct all privacy-related requests, questions, or complaints to that person using the contact information provided.',
        ],
      },
      {
        heading: 'Legal Compliance and Changes to Policy',
        paragraphs: [
          'This policy is subject to all privacy laws applicable to HRI, including Quebec\'s Act respecting the protection of personal information in the private sector and, where applicable, the federal Personal Information Protection and Electronic Documents Act (PIPEDA). If those laws impose a stricter or different level of privacy protection, HRI will comply. HRI may change this policy at any time, and the change is effective from the time it is posted on the HRI website.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Contact Information',
    contactIntro: 'For any inquiries with this policy, including questions, comments, or requests to exercise your privacy rights, please contact us:',
    contactAttention: 'Attention: Compliance Manager — Person in Charge of the Protection of Personal Information',
  },
  fr: {
    eyebrow: 'En vigueur : le 1er septembre 2026',
    title: 'Politique de confidentialité',
    subtitle: 'Comment Hazloc Robotics Inc. recueille, utilise et protège vos renseignements personnels.',
    sections: [
      {
        heading: 'Notre engagement envers votre vie privée',
        paragraphs: [
          'Hazloc Robotics Inc. (« HRI », « nous », « notre », « nos ») vise à offrir un service et des produits de qualité supérieure à ses clients. Puisque vous nous fournissez des renseignements vous concernant lorsque vous faites affaire avec nous, la protection de vos renseignements personnels est l\'une de nos plus grandes priorités.',
          'HRI recueille des renseignements personnels afin de faire affaire avec vous. À moins que la raison pour laquelle nous recueillons ces renseignements ne soit liée aux relations que nous entretenons avec vous, nous vous informerons de cette raison et obtiendrons votre consentement. Un renseignement personnel est un renseignement qui vous identifie en tant qu\'individu et qui vous concerne spécifiquement, comme votre nom, adresse, numéro de téléphone, adresse courriel ou renseignements de carte de crédit. Nous pouvons obtenir ces renseignements de vous, ou d\'agences de crédit et d\'institutions financières.',
        ],
      },
      {
        heading: 'Utilisation des renseignements',
        paragraphs: ['Nous pouvons utiliser les renseignements personnels à diverses fins, par exemple pour :'],
        list: [
          'Répondre aux demandes de produits, services ou renseignements;',
          'Traiter les paiements par carte de crédit et percevoir les sommes dues;',
          'Fournir le service à la clientèle;',
          'Offrir de nouveaux produits et services;',
          'Mesurer et améliorer l\'efficacité de notre site Web ou de nos activités de marketing; et',
          'Adapter nos produits et services à vos préférences.',
        ],
      },
      {
        heading: 'Témoins et technologies similaires',
        paragraphs: [
          'Notre site Web utilise des témoins (cookies) et des technologies de suivi similaires pour faire fonctionner le site, mémoriser vos préférences, et mesurer et améliorer l\'efficacité de notre site Web et de nos activités de marketing. Vous pouvez contrôler ou désactiver les témoins dans les paramètres de votre navigateur; notez que certaines parties de notre site Web pourraient ne pas fonctionner correctement si les témoins sont désactivés. Nous n\'utilisons pas les témoins pour recueillir des renseignements personnels sensibles.',
        ],
      },
      {
        heading: 'Divulgation de vos renseignements personnels',
        paragraphs: [
          'Pour plusieurs des fins mentionnées ci-dessus, nous pourrions devoir partager vos renseignements personnels avec des tiers, par exemple pour traiter les paiements par carte de crédit. Nous ne partagerons vos renseignements personnels que dans la mesure nécessaire à la fin pour laquelle ils ont été recueillis. Nous ne divulguerons jamais votre adresse courriel, sauf à ces fins.',
          'Si vous effectuez un achat en ligne, nous acheminons toutes les transactions par chiffrement SSL (Secure Socket Layer) et ne traitons votre numéro de carte de crédit que pour sécuriser votre paiement actuel. Nous ne conservons pas votre numéro de carte de crédit après la transaction en cause.',
        ],
      },
      {
        heading: 'Protection de vos renseignements personnels',
        paragraphs: ['Afin de protéger vos renseignements personnels et votre droit à la vie privée, nous nous engageons à :'],
        list: [
          'Ne pas recueillir, utiliser ou divulguer vos renseignements personnels à des fins autres que celles que nous vous indiquons.',
          'Conserver vos renseignements personnels seulement le temps nécessaire pour réaliser la fin déclarée ou tel qu\'exigé par la loi.',
          'Protéger vos renseignements personnels du mieux que nous pouvons à l\'aide de mesures de sécurité techniques et organisationnelles appropriées.',
          'Répondre à toute demande que vous pourriez formuler afin d\'accéder aux renseignements personnels que nous détenons à votre sujet, de les corriger ou de les supprimer.',
          'Obtenir votre consentement approprié pour la collecte, l\'utilisation ou la divulgation de vos renseignements personnels.',
          'Aviser sans délai injustifié les personnes touchées et l\'organisme de réglementation applicable en cas d\'incident de confidentialité présentant un risque de préjudice sérieux, tel qu\'exigé par la loi applicable.',
        ],
      },
      {
        heading: 'Consentement',
        paragraphs: [
          'Le consentement sera présumé lorsque vous nous fournissez des renseignements dans le cadre d\'une transaction ou de relations avec HRI. Nous pouvons également obtenir votre consentement exprès, qui peut être donné au moyen d\'un formulaire de consentement ou de demande, ou par une case à cocher ou un bouton de consentement sur notre site Web.',
          'Nous tenons à ce que vous sachiez que vous avez des choix à cet égard. Vous pouvez refuser de nous permettre de recueillir, d\'utiliser ou de partager vos renseignements personnels, ou retirer un consentement déjà donné en tout temps, sous réserve de restrictions légales ou contractuelles et d\'un préavis raisonnable.',
        ],
      },
      {
        heading: 'Vos droits et l\'accès à vos renseignements',
        paragraphs: [
          'Vous pouvez demander par écrit que HRI vous informe de tous les renseignements personnels qu\'elle détient à votre sujet. Sous réserve de la loi applicable, vous pouvez également demander que nous corrigions des renseignements inexacts, supprimions les renseignements personnels que nous détenons à votre sujet (droit à l\'effacement), ou, lorsque techniquement possible, que nous vous transmettions ou transmettions à un tiers vos renseignements personnels dans un format technique structuré et couramment utilisé (droit à la portabilité des données). HRI fournira ces renseignements ou donnera suite à ces demandes dans les délais requis par la loi, à l\'exception des renseignements ou demandes qui ne peuvent être honorés pour des raisons juridiques, de sécurité ou de propriété commerciale, qui sont assujettis au secret professionnel de l\'avocat ou au privilège relatif au litige, ou qui entraîneraient la divulgation de renseignements personnels d\'autrui.',
          'HRI s\'efforcera de maintenir vos renseignements personnels exacts et à jour selon les renseignements que vous nous fournissez. Si vous constatez qu\'un de vos renseignements personnels est inexact, veuillez nous en informer et nous corrigerons nos dossiers.',
        ],
      },
      {
        heading: 'Responsable de la protection des renseignements personnels',
        paragraphs: [
          'La personne responsable de la protection des renseignements personnels chez Hazloc Robotics Inc., tel qu\'exigé par les lois applicables du Québec et du Canada en matière de protection des renseignements personnels, est le responsable de la conformité identifié ci-dessous. Adressez toute demande, question ou plainte relative à la vie privée à cette personne, en utilisant les coordonnées fournies.',
        ],
      },
      {
        heading: 'Conformité juridique et modifications de la politique',
        paragraphs: [
          'Cette politique est assujettie à toutes les lois sur la protection des renseignements personnels applicables à HRI, y compris la Loi sur la protection des renseignements personnels dans le secteur privé du Québec et, le cas échéant, la Loi fédérale sur la protection des renseignements personnels et les documents électroniques (LPRPDE). Si ces lois imposent un niveau de protection de la vie privée plus strict ou différent, HRI s\'y conformera. HRI peut modifier cette politique en tout temps, et la modification prend effet dès sa publication sur le site Web de HRI.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Coordonnées',
    contactIntro: 'Pour toute question relative à cette politique, y compris des questions, commentaires ou demandes visant l\'exercice de vos droits en matière de vie privée, veuillez nous contacter :',
    contactAttention: 'À l\'attention de : Responsable de la conformité — Personne responsable de la protection des renseignements personnels',
  },
  es: {
    eyebrow: 'Vigente: 1 de septiembre de 2026',
    title: 'Política de privacidad',
    subtitle: 'Cómo Hazloc Robotics Inc. recopila, usa y protege su información personal.',
    sections: [
      {
        heading: 'Nuestro compromiso con su privacidad',
        paragraphs: [
          'Hazloc Robotics Inc. ("HRI", "nosotros", "nuestro") busca ofrecer un servicio y productos superiores a nuestros clientes. Dado que usted nos proporciona información sobre sí mismo al hacer negocios con nosotros, una de nuestras principales prioridades es la protección de su información personal.',
          'HRI recopila información personal para poder hacer negocios con usted. A menos que el motivo por el cual recopilamos la información esté relacionado con las relaciones que mantenemos con usted, le informaremos el motivo y obtendremos su consentimiento. La información personal es aquella que lo identifica como individuo y se relaciona específicamente con usted, como su nombre, dirección, número de teléfono, correo electrónico o información de tarjeta de crédito. Podemos obtener esta información de usted, o de agencias de crédito e instituciones financieras.',
        ],
      },
      {
        heading: 'Cómo se usa la información',
        paragraphs: ['Podemos usar la información personal para diversos fines, por ejemplo para:'],
        list: [
          'Atender solicitudes de productos, servicios o información;',
          'Procesar pagos con tarjeta de crédito y cobrar sumas adeudadas;',
          'Brindar servicio al cliente;',
          'Ofrecer nuevos productos y servicios;',
          'Medir y mejorar la efectividad de nuestro sitio web o nuestras actividades de marketing; y',
          'Adaptar nuestros productos y servicios a sus preferencias.',
        ],
      },
      {
        heading: 'Cookies y tecnologías similares',
        paragraphs: [
          'Nuestro sitio web utiliza cookies y tecnologías de seguimiento similares para operar el sitio, recordar sus preferencias, y medir y mejorar la efectividad de nuestro sitio web y actividades de marketing. Usted puede controlar o desactivar las cookies mediante la configuración de su navegador; tenga en cuenta que algunas partes de nuestro sitio web podrían no funcionar correctamente si las cookies están desactivadas. No usamos cookies para recopilar información personal sensible.',
        ],
      },
      {
        heading: 'Divulgación de su información personal',
        paragraphs: [
          'Para muchos de los fines identificados anteriormente, podríamos necesitar compartir su información personal con terceros, como para procesar pagos con tarjeta de crédito. No compartiremos su información personal excepto en la medida necesaria para el fin para el cual fue recopilada. Nunca proporcionaremos su dirección de correo electrónico salvo para estos fines.',
          'Si realiza una compra en línea, enrutamos todas las transacciones mediante cifrado SSL (Secure Socket Layer) y procesamos el número de su tarjeta de crédito únicamente para asegurar su pago actual. No conservamos el número de su tarjeta de crédito después de la transacción en cuestión.',
        ],
      },
      {
        heading: 'Protección de su información personal',
        paragraphs: ['Con el fin de proteger su información personal y su derecho a la privacidad, nos comprometemos a:'],
        list: [
          'No recopilar, usar ni divulgar su información personal para ningún propósito distinto de los que le indicamos.',
          'Conservar su información personal solo durante el tiempo necesario para cumplir el propósito declarado o según lo exija la ley.',
          'Salvaguardar su información personal en la mayor medida posible mediante medidas de seguridad técnicas y organizativas adecuadas.',
          'Responder a cualquier solicitud que usted formule para acceder, corregir o eliminar la información personal que tenemos sobre usted.',
          'Obtener su consentimiento apropiado para la recopilación, uso o divulgación de su información personal.',
          'Notificar sin demora injustificada a las personas afectadas y al regulador correspondiente en caso de un incidente de confidencialidad que presente un riesgo de daño grave, según lo exija la ley aplicable.',
        ],
      },
      {
        heading: 'Consentimiento',
        paragraphs: [
          'El consentimiento se presumirá cuando usted proporcione la información como parte de una transacción o relación con HRI. También podemos obtener su consentimiento expreso, que puede otorgarse mediante un formulario de consentimiento o solicitud, o mediante una casilla o botón de consentimiento en nuestro sitio web.',
          'Queremos que sepa que usted tiene opciones al respecto. Puede negarse a permitirnos recopilar, usar o compartir su información personal, o puede retirar un consentimiento previamente otorgado en cualquier momento, sujeto a restricciones legales o contractuales y a un aviso razonable.',
        ],
      },
      {
        heading: 'Sus derechos y acceso a su información',
        paragraphs: [
          'Usted puede solicitar por escrito que HRI le informe sobre toda la información personal que posee relacionada con usted. Sujeto a la ley aplicable, también puede solicitar que corrijamos información inexacta, eliminemos la información personal que tenemos sobre usted (derecho de supresión), o, cuando sea técnicamente posible, le proporcionemos a usted o a un tercero su información personal en un formato técnico estructurado y de uso común (derecho a la portabilidad de datos). HRI proporcionará dicha información o dará efecto a dichas solicitudes dentro de los plazos exigidos por la ley, salvo información o solicitudes que no puedan atenderse por razones legales, de seguridad o de propiedad comercial, que estén sujetas a privilegio profesional o de litigio, o que resulten en la divulgación de información personal de terceros.',
          'HRI procurará mantener su información personal exacta y actualizada con base en la información que usted proporcione. Si determina que alguna de su información personal no es correcta, infórmenos y corregiremos nuestros registros.',
        ],
      },
      {
        heading: 'Oficial de privacidad',
        paragraphs: [
          'La persona encargada de la protección de la información personal en Hazloc Robotics Inc., según lo exigido por la legislación aplicable de Quebec y Canadá en materia de privacidad, es el Gerente de Cumplimiento identificado a continuación. Dirija todas las solicitudes, preguntas o quejas relacionadas con la privacidad a esa persona, utilizando la información de contacto proporcionada.',
        ],
      },
      {
        heading: 'Cumplimiento legal y cambios a la política',
        paragraphs: [
          'Esta política está sujeta a todas las leyes de privacidad aplicables a HRI, incluida la Ley sobre la protección de la información personal en el sector privado de Quebec y, cuando corresponda, la Ley federal de protección de información personal y documentos electrónicos (PIPEDA). Si dichas leyes imponen un nivel de protección de privacidad más estricto o diferente, HRI cumplirá con ellas. HRI puede modificar esta política en cualquier momento, y el cambio entra en vigor desde el momento en que se publica en el sitio web de HRI.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Información de contacto',
    contactIntro: 'Para cualquier consulta relacionada con esta política, incluidas preguntas, comentarios o solicitudes para ejercer sus derechos de privacidad, contáctenos:',
    contactAttention: 'Atención: Gerente de Cumplimiento — Persona encargada de la protección de la información personal',
  },
  pt: {
    eyebrow: 'Em vigor: 1º de setembro de 2026',
    title: 'Política de Privacidade',
    subtitle: 'Como a Hazloc Robotics Inc. coleta, usa e protege suas informações pessoais.',
    sections: [
      {
        heading: 'Nosso compromisso com sua privacidade',
        paragraphs: [
          'A Hazloc Robotics Inc. ("HRI", "nós", "nosso") busca oferecer serviços e produtos superiores aos nossos clientes. Como você fornece informações sobre si mesmo ao fazer negócios conosco, uma de nossas maiores prioridades é a proteção de suas informações pessoais.',
          'A HRI coleta informações pessoais para fazer negócios com você. A menos que o motivo pelo qual estamos coletando as informações esteja relacionado às relações que mantemos com você, informaremos o motivo e obteremos seu consentimento. Informação pessoal é a informação que o identifica como indivíduo e se relaciona especificamente a você, como nome, endereço, número de telefone, endereço de e-mail ou informações de cartão de crédito. Podemos obter essas informações de você, ou de agências de crédito e instituições financeiras.',
        ],
      },
      {
        heading: 'Como as informações são usadas',
        paragraphs: ['Podemos usar informações pessoais para diversas finalidades, por exemplo, para:'],
        list: [
          'Atender solicitações de produtos, serviços ou informações;',
          'Processar pagamentos com cartão de crédito e cobrar valores devidos;',
          'Fornecer atendimento ao cliente;',
          'Oferecer novos produtos e serviços;',
          'Medir e melhorar a eficácia do nosso site ou de nossas atividades de marketing; e',
          'Adaptar nossos produtos e serviços às suas preferências.',
        ],
      },
      {
        heading: 'Cookies e tecnologias similares',
        paragraphs: [
          'Nosso site usa cookies e tecnologias de rastreamento similares para operar o site, lembrar suas preferências e medir e melhorar a eficácia do nosso site e atividades de marketing. Você pode controlar ou desativar os cookies nas configurações do seu navegador; observe que algumas partes do nosso site podem não funcionar corretamente se os cookies estiverem desativados. Não usamos cookies para coletar informações pessoais sensíveis.',
        ],
      },
      {
        heading: 'Divulgação de suas informações pessoais',
        paragraphs: [
          'Para muitas das finalidades identificadas acima, podemos precisar compartilhar suas informações pessoais com terceiros, como para processar pagamentos com cartão de crédito. Não compartilharemos suas informações pessoais exceto quando necessário para a finalidade para a qual foram coletadas. Nunca divulgaremos seu endereço de e-mail, exceto para essas finalidades.',
          'Se você fizer uma compra online, encaminhamos todas as transações por meio de criptografia SSL (Secure Socket Layer) e processamos o número do seu cartão de crédito apenas para garantir o pagamento atual. Não retemos o número do seu cartão de crédito após a transação em questão.',
        ],
      },
      {
        heading: 'Protegendo suas informações pessoais',
        paragraphs: ['Para proteger suas informações pessoais e seu direito à privacidade, nós nos comprometemos a:'],
        list: [
          'Não coletar, usar ou divulgar suas informações pessoais para qualquer finalidade diferente daquelas que indicamos a você.',
          'Manter suas informações pessoais apenas pelo tempo necessário para cumprir a finalidade declarada ou conforme exigido por lei.',
          'Proteger suas informações pessoais da melhor forma possível, usando medidas de segurança técnicas e organizacionais apropriadas.',
          'Responder a qualquer solicitação que você faça para acessar, corrigir ou excluir as informações pessoais que mantemos sobre você.',
          'Obter seu consentimento apropriado para a coleta, uso ou divulgação de suas informações pessoais.',
          'Notificar as pessoas afetadas e o regulador aplicável sem demora indevida em caso de incidente de confidencialidade que apresente risco de dano grave, conforme exigido pela lei aplicável.',
        ],
      },
      {
        heading: 'Consentimento',
        paragraphs: [
          'O consentimento será presumido quando você fornecer as informações como parte de uma transação ou relação com a HRI. Também podemos obter seu consentimento expresso, que pode ser dado por meio de um formulário de consentimento ou solicitação, ou por uma caixa de seleção ou botão de consentimento em nosso site.',
          'Queremos que você saiba que tem opções nessa questão. Você pode recusar-se a nos permitir coletar, usar ou compartilhar suas informações pessoais, ou pode retirar um consentimento previamente dado a qualquer momento, sujeito a restrições legais ou contratuais e aviso razoável.',
        ],
      },
      {
        heading: 'Seus direitos e acesso às suas informações',
        paragraphs: [
          'Você pode solicitar por escrito que a HRI informe todas as informações pessoais que ela mantém relacionadas a você. Sujeito à lei aplicável, você também pode solicitar que corrijamos informações imprecisas, excluamos informações pessoais que mantemos sobre você (direito ao apagamento) ou, quando tecnicamente viável, forneçamos suas informações pessoais a você ou a terceiros em um formato técnico estruturado e comumente usado (direito à portabilidade de dados). A HRI fornecerá tais informações ou atenderá a tais solicitações dentro dos prazos exigidos por lei, exceto informações ou solicitações que não possam ser atendidas por razões legais, de segurança ou de propriedade comercial, que estejam sujeitas a privilégio advogado-cliente ou de litígio, ou que resultem na divulgação de informações pessoais de terceiros.',
          'A HRI se esforçará para manter suas informações pessoais precisas e atualizadas com base nas informações que você fornecer. Se você constatar que alguma de suas informações pessoais não está correta, informe-nos e corrigiremos nossos registros.',
        ],
      },
      {
        heading: 'Responsável pela privacidade',
        paragraphs: [
          'A pessoa responsável pela proteção de informações pessoais na Hazloc Robotics Inc., conforme exigido pela legislação aplicável de privacidade de Quebec e do Canadá, é o Gerente de Conformidade identificado abaixo. Direcione todas as solicitações, dúvidas ou reclamações relacionadas à privacidade a essa pessoa, usando as informações de contato fornecidas.',
        ],
      },
      {
        heading: 'Conformidade legal e alterações à política',
        paragraphs: [
          'Esta política está sujeita a todas as leis de privacidade aplicáveis à HRI, incluindo a Lei de Proteção de Informações Pessoais no Setor Privado de Quebec e, quando aplicável, a Lei federal de Proteção de Informações Pessoais e Documentos Eletrônicos (PIPEDA). Se essas leis impuserem um nível de proteção de privacidade mais rigoroso ou diferente, a HRI cumprirá tal exigência. A HRI pode alterar esta política a qualquer momento, e a alteração entra em vigor a partir do momento em que é publicada no site da HRI.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Informações de contato',
    contactIntro: 'Para qualquer dúvida sobre esta política, incluindo perguntas, comentários ou solicitações para exercer seus direitos de privacidade, entre em contato conosco:',
    contactAttention: 'Atenção: Gerente de Conformidade — Pessoa responsável pela proteção de informações pessoais',
  },
};

export default function PrivacyPolicyPage() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="container-x max-w-3xl">
          <div className="space-y-10">
            {t.sections.map((section, i) => (
              <Reveal key={i} delay={Math.min(i * 40, 300)}>
                <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-ink-600 leading-relaxed">{p}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2 pl-1">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex gap-3 text-ink-600 leading-relaxed">
                          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal delay={340}>
              <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{t.contactTitle}</h2>
              <div className="mt-4 space-y-4">
                <p className="text-ink-600 leading-relaxed">{t.contactIntro}</p>
                <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6 text-sm text-ink-700 leading-relaxed">
                  <p className="font-semibold">{t.contactAttention}</p>
                  <p className="mt-3">
                    Hazloc Robotics Inc.<br />
                    4935 Ch Queen-Mary #202<br />
                    Montreal QC H3W 1X4<br />
                    Canada
                  </p>
                  <p className="mt-3">
                    Telephone: 514-250-6498 &nbsp;·&nbsp; Toll Free: <a href="tel:+18336575158" className="text-teal-600 hover:text-teal-700">1-833-657-5158</a>
                  </p>
                  <p className="mt-3">
                    Email: <a href="mailto:info@hazlocrobotics.com" className="text-teal-600 hover:text-teal-700">info@hazlocrobotics.com</a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
