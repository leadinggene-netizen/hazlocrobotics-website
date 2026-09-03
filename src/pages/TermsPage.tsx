import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { useLocale } from '@/i18n/useLocale';

interface LegalSection {
  heading: string;
  paragraphs: string[];
}

const copy = {
  en: {
    eyebrow: 'Effective: September 1, 2026',
    title: 'Terms & Conditions of Sale',
    subtitle: 'Seller: Hazloc Robotics Inc. ("Hazloc Robotics", "Seller", "we", "us") · Buyer: Customer ("Buyer", "Customer", "you")',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        paragraphs: [
          'Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms & Conditions ("Terms"). These Terms apply to all orders and customers who use the Service. If you wish to purchase any product or service made available through the Service provided by Hazloc Robotics Inc., you may be asked to supply certain information relevant to your purchase, including without limitation your name, company name, contact details, and address.',
          'Products and services furnished by Seller are sold only on the terms and conditions set out in these Terms unless otherwise expressly agreed in writing between the parties.',
        ],
      },
      {
        heading: '2. Quotations and Orders',
        paragraphs: [
          'All quotations are subject to the terms and conditions stated herein, as well as any additional terms and conditions that may appear on the face of the quotation.',
          'Unless otherwise specified in writing, all quotations expire thirty (30) days after the date thereof, may be terminated earlier by notice from Seller, and constitute only solicitations for offers to purchase.',
          'Prices quoted are for Products only and do not include installation, technical data, proprietary rights of any kind, copyrights, or packaging, unless expressly agreed to in writing by Seller.',
          'Delivery dates quoted by Seller are estimates only and shall not, in any event, be construed as falling within the meaning of "time is of the essence."',
          'Due to fluctuations in raw materials and energy costs, prices may change without notice.',
        ],
      },
      {
        heading: '3. Returns and Cancellations',
        paragraphs: [
          'Seller is not obliged to accept the return of custom-made Products. Custom items are not eligible for return.',
          'If Seller agrees to accept the return of a Product, the return will be subject to a minimum thirty (30) percent restocking charge, or such other amount as Seller may approve in writing.',
          'Cancellation of an order by Customer is subject to a ten (10) percent administration fee. No refunds will be issued for products made on demand.',
          'Products may differ slightly in colour or minor detail from associated photos or marketing materials; this does not affect technical specifications and is not grounds for return.',
        ],
      },
      {
        heading: '4. Limited Warranty',
        paragraphs: [
          'Products are covered by a manufacturer\'s Limited Warranty of twelve (12) months from the date of delivery, covering defects in materials and workmanship under normal use and operating conditions. Extended warranty coverage may be available for purchase separately; contact us for current terms and pricing. Claims related to defective material will be filed directly with Sevnce, the manufacturer, in accordance with its warranty terms; Hazloc Robotics will contact the manufacturer and initiate the claim process on Customer\'s behalf.',
          'Hazloc Robotics\' sole obligation, and Customer\'s sole and exclusive remedy, under this Limited Warranty is, at Hazloc Robotics\' option, the repair or replacement of the defective part, or a refund of the purchase price as described below. A full refund will be issued, subject to Seller\'s inspection, for any defective item returned to Seller at Customer\'s expense and received within thirty (30) days of the return authorization, in its original packaging.',
          'EXCEPT FOR THE EXPRESS LIMITED WARRANTY STATED ABOVE, SELLER MAKES NO OTHER WARRANTIES, WHETHER WRITTEN OR ORAL, EXPRESS OR IMPLIED. HAZLOC ROBOTICS DISCLAIMS ALL OTHER EXPRESS OR IMPLIED WARRANTIES OF PERFORMANCE, MERCHANTABILITY, WORKMANSHIP, QUALITY, DURABILITY, SUITABILITY, OR NON-INFRINGEMENT, INCLUDING WITHOUT LIMITATION IN THOSE INSTANCES WHERE CHANGES, ALTERATIONS, OR MODIFICATIONS ARE MADE TO PRODUCTS AT THE REQUEST OR INSTRUCTION OF CUSTOMER. Customer agrees not to claim or commence suit against Hazloc Robotics based on any such disclaimed warranties or on the manufacturer\'s warranties. Hazloc Robotics is not obligated to provide testing certificates or licenses for products it sells beyond those provided by the original manufacturer.',
        ],
      },
      {
        heading: '5. Limitation of Liability',
        paragraphs: [
          'HAZLOC ROBOTICS IS NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OF PRODUCTS PURCHASED THROUGH OUR WEBSITE, INCLUDING WITHOUT LIMITATION LOSS OF DATA OR LOSS OF PROFIT, EVEN IF HAZLOC ROBOTICS WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
          'To the maximum extent permitted by law, Hazloc Robotics\' total aggregate liability arising out of or relating to any order shall not exceed the amount actually paid by Customer for the Product(s) giving rise to the claim. Claims must be submitted within three (3) days of delivery for shortages or faulty goods.',
        ],
      },
      {
        heading: '6. Shipping and Claims for Damaged or Short Shipments',
        paragraphs: [
          'Inspect your shipment and have your driver note any damages or losses before signing for your package.',
          'Customers must sign the carrier\'s delivery note for applicable shortages or damages at time of delivery, and notify Hazloc Robotics Inc. within five (5) business days after receipt of shipment.',
          'Specify the number of damaged or missing items when signing the carrier\'s delivery receipt.',
          'Hold all packages, including parcel shipments, to allow the carrier the option to inspect the damage.',
          'Any material purchased by Customer and packaged in boxes, cartons, or skids shipped by Hazloc Robotics is shipped at Buyer\'s risk, and Hazloc Robotics cannot be held liable for delay, breakage, or damage occurring during transportation.',
        ],
      },
      {
        heading: '7. Force Majeure',
        paragraphs: [
          'Hazloc Robotics shall not be liable for any delay in or failure to perform its obligations resulting from causes beyond its reasonable control, including but not limited to acts of God, natural disaster, war, terrorism, labour disputes, government action, customs delays, or shortages of raw materials, transportation, or energy.',
        ],
      },
      {
        heading: '8. Governing Law and Disputes',
        paragraphs: [
          'These Terms, and any order or purchase made through the Service, are governed by the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to conflict-of-law principles. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Montreal, Quebec.',
        ],
      },
      {
        heading: '9. Severability and Entire Agreement',
        paragraphs: [
          'If any provision of these Terms is held invalid or unenforceable by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect. These Terms, together with any written quotation or order confirmation issued by Seller, constitute the entire agreement between the parties with respect to the subject matter herein.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Contact',
    disclaimer: 'Although all information has been carefully checked for accuracy, errors and omissions occasionally occur and are therefore subject to correction. We regret any inconvenience.',
  },
  fr: {
    eyebrow: 'En vigueur : le 1er septembre 2026',
    title: 'Conditions générales de vente',
    subtitle: 'Vendeur : Hazloc Robotics Inc. (« Hazloc Robotics », « Vendeur », « nous ») · Acheteur : le client (« Acheteur », « Client », « vous »)',
    sections: [
      {
        heading: '1. Acceptation des conditions',
        paragraphs: [
          'Votre accès au Service et son utilisation sont conditionnels à votre acceptation et au respect des présentes Conditions générales (les « Conditions »). Ces Conditions s\'appliquent à toutes les commandes et à tous les clients qui utilisent le Service. Si vous souhaitez acheter un produit ou un service offert par l\'entremise du Service fourni par Hazloc Robotics Inc., il pourra vous être demandé de fournir certains renseignements relatifs à votre achat, notamment votre nom, le nom de votre entreprise, vos coordonnées et votre adresse.',
          'Les produits et services fournis par le Vendeur sont vendus uniquement selon les modalités énoncées dans les présentes Conditions, à moins d\'une entente écrite expresse contraire entre les parties.',
        ],
      },
      {
        heading: '2. Devis et commandes',
        paragraphs: [
          'Tous les devis sont assujettis aux modalités énoncées aux présentes, ainsi qu\'à toute condition supplémentaire pouvant figurer sur le devis lui-même.',
          'Sauf indication écrite contraire, tous les devis expirent trente (30) jours après leur date d\'émission, peuvent être résiliés plus tôt sur avis du Vendeur, et ne constituent que des sollicitations d\'offres d\'achat.',
          'Les prix indiqués ne couvrent que les Produits et n\'incluent pas l\'installation, les données techniques, les droits de propriété de quelque nature que ce soit, les droits d\'auteur ou l\'emballage, sauf entente écrite expresse du Vendeur.',
          'Les dates de livraison indiquées par le Vendeur ne sont que des estimations et ne sauraient en aucun cas être interprétées comme signifiant que « le délai est de rigueur ».',
          'En raison des fluctuations du coût des matières premières et de l\'énergie, les prix peuvent être modifiés sans préavis.',
        ],
      },
      {
        heading: '3. Retours et annulations',
        paragraphs: [
          'Le Vendeur n\'est pas tenu d\'accepter le retour de Produits fabriqués sur mesure. Les articles personnalisés ne sont pas admissibles au retour.',
          'Si le Vendeur accepte le retour d\'un Produit, ce retour sera assujetti à des frais de réapprovisionnement minimums de trente (30) pour cent, ou à tout autre montant que le Vendeur pourra approuver par écrit.',
          'L\'annulation d\'une commande par le Client est assujettie à des frais d\'administration de dix (10) pour cent. Aucun remboursement ne sera émis pour les produits fabriqués sur demande.',
          'Les produits peuvent différer légèrement, en couleur ou en détails mineurs, des photos ou du matériel promotionnel associés; cela n\'affecte pas les spécifications techniques et ne constitue pas un motif de retour.',
        ],
      },
      {
        heading: '4. Garantie limitée',
        paragraphs: [
          'Les Produits sont couverts par une garantie limitée du fabricant de douze (12) mois à compter de la date de livraison, couvrant les défauts de matériaux et de fabrication dans des conditions normales d\'utilisation et d\'exploitation. Une couverture de garantie prolongée peut être offerte séparément à l\'achat; contactez-nous pour connaître les modalités et prix en vigueur. Les réclamations liées à un matériau défectueux seront déposées directement auprès de Sevnce, le fabricant, conformément à ses modalités de garantie; Hazloc Robotics communiquera avec le fabricant et amorcera le processus de réclamation au nom du Client.',
          'La seule obligation de Hazloc Robotics, et le seul recours exclusif du Client, en vertu de la présente garantie limitée, est, au choix de Hazloc Robotics, la réparation ou le remplacement de la pièce défectueuse, ou un remboursement du prix d\'achat tel que décrit ci-dessous. Un remboursement complet sera émis, sous réserve d\'inspection par le Vendeur, pour tout article défectueux retourné au Vendeur aux frais du Client et reçu dans les trente (30) jours suivant l\'autorisation de retour, dans son emballage d\'origine.',
          'SAUF POUR LA GARANTIE LIMITÉE EXPRESSE ÉNONCÉE CI-DESSUS, LE VENDEUR NE DONNE AUCUNE AUTRE GARANTIE, ÉCRITE OU ORALE, EXPRESSE OU IMPLICITE. HAZLOC ROBOTICS REJETTE TOUTE AUTRE GARANTIE EXPRESSE OU IMPLICITE DE RENDEMENT, DE QUALITÉ MARCHANDE, DE FAÇON, DE QUALITÉ, DE DURABILITÉ, D\'ADÉQUATION OU DE NON-CONTREFAÇON, Y COMPRIS NOTAMMENT DANS LES CAS OÙ DES CHANGEMENTS, MODIFICATIONS OU ALTÉRATIONS SONT APPORTÉS AUX PRODUITS À LA DEMANDE OU SELON LES INSTRUCTIONS DU CLIENT. Le Client convient de ne pas intenter de poursuite contre Hazloc Robotics fondée sur ces garanties rejetées ou sur les garanties du fabricant. Hazloc Robotics n\'est pas tenue de fournir des certificats d\'essai ou des licences pour les produits qu\'elle vend, au-delà de ceux fournis par le fabricant d\'origine.',
        ],
      },
      {
        heading: '5. Limitation de responsabilité',
        paragraphs: [
          'HAZLOC ROBOTICS N\'EST PAS RESPONSABLE DES DOMMAGES INDIRECTS, ACCESSOIRES, SPÉCIAUX OU CONSÉCUTIFS DÉCOULANT DE L\'UTILISATION DE PRODUITS ACHETÉS SUR NOTRE SITE WEB, Y COMPRIS NOTAMMENT LA PERTE DE DONNÉES OU LA PERTE DE PROFITS, MÊME SI HAZLOC ROBOTICS A ÉTÉ AVISÉE DE LA POSSIBILITÉ DE TELS DOMMAGES.',
          'Dans toute la mesure permise par la loi, la responsabilité totale et cumulative de Hazloc Robotics découlant de toute commande, ou s\'y rapportant, ne dépassera pas le montant réellement payé par le Client pour le ou les Produits à l\'origine de la réclamation. Les réclamations relatives à des pénuries ou à des marchandises défectueuses doivent être soumises dans les trois (3) jours suivant la livraison.',
        ],
      },
      {
        heading: '6. Expédition et réclamations pour livraisons endommagées ou incomplètes',
        paragraphs: [
          'Inspectez votre envoi et demandez à votre livreur de noter tout dommage ou toute perte avant de signer la réception de votre colis.',
          'Les clients doivent signer le bordereau de livraison du transporteur en indiquant toute pénurie ou tout dommage applicable au moment de la livraison, et aviser Hazloc Robotics Inc. dans les cinq (5) jours ouvrables suivant la réception de l\'envoi.',
          'Précisez le nombre d\'articles endommagés ou manquants au moment de signer le bordereau de livraison du transporteur.',
          'Conservez tous les colis, y compris les envois par colis postal, afin de permettre au transporteur d\'inspecter les dommages s\'il le souhaite.',
          'Tout matériel acheté par le Client et emballé dans des boîtes, cartons ou palettes expédiés par Hazloc Robotics est expédié aux risques de l\'Acheteur, et Hazloc Robotics ne peut être tenue responsable de tout retard, bris ou dommage survenant pendant le transport.',
        ],
      },
      {
        heading: '7. Force majeure',
        paragraphs: [
          'Hazloc Robotics ne sera pas tenue responsable de tout retard ou manquement à ses obligations résultant de causes échappant à son contrôle raisonnable, y compris, sans s\'y limiter, les cas fortuits, catastrophes naturelles, guerres, actes de terrorisme, conflits de travail, mesures gouvernementales, retards douaniers ou pénuries de matières premières, de transport ou d\'énergie.',
        ],
      },
      {
        heading: '8. Droit applicable et règlement des différends',
        paragraphs: [
          'Les présentes Conditions, ainsi que toute commande ou tout achat effectué par l\'entremise du Service, sont régis par les lois de la province de Québec et les lois fédérales du Canada qui s\'y appliquent, sans égard aux principes de conflits de lois. Tout différend découlant des présentes Conditions ou s\'y rapportant sera soumis à la compétence exclusive des tribunaux situés à Montréal, au Québec.',
        ],
      },
      {
        heading: '9. Divisibilité et intégralité de l\'entente',
        paragraphs: [
          'Si une disposition des présentes Conditions est jugée invalide ou inapplicable par un tribunal compétent, cette disposition sera limitée ou supprimée dans la mesure minimale nécessaire, et les autres dispositions demeureront pleinement en vigueur. Les présentes Conditions, ainsi que tout devis écrit ou toute confirmation de commande émis par le Vendeur, constituent l\'entente intégrale entre les parties à l\'égard de l\'objet des présentes.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Contact',
    disclaimer: 'Bien que tous les renseignements aient été vérifiés avec soin, des erreurs ou omissions peuvent survenir à l\'occasion et demeurent sujettes à correction. Nous nous excusons pour tout inconvénient.',
  },
  es: {
    eyebrow: 'Vigente: 1 de septiembre de 2026',
    title: 'Términos y Condiciones de Venta',
    subtitle: 'Vendedor: Hazloc Robotics Inc. ("Hazloc Robotics", "Vendedor", "nosotros") · Comprador: el Cliente ("Comprador", "Cliente", "usted")',
    sections: [
      {
        heading: '1. Aceptación de los Términos',
        paragraphs: [
          'Su acceso y uso del Servicio están condicionados a su aceptación y cumplimiento de estos Términos y Condiciones ("Términos"). Estos Términos se aplican a todos los pedidos y clientes que utilicen el Servicio. Si desea comprar cualquier producto o servicio disponible a través del Servicio proporcionado por Hazloc Robotics Inc., se le podrá solicitar cierta información relevante para su compra, incluyendo, sin limitación, su nombre, nombre de la empresa, datos de contacto y dirección.',
          'Los productos y servicios proporcionados por el Vendedor se venden únicamente según los términos y condiciones establecidos en estos Términos, a menos que se acuerde expresamente por escrito lo contrario entre las partes.',
        ],
      },
      {
        heading: '2. Cotizaciones y pedidos',
        paragraphs: [
          'Todas las cotizaciones están sujetas a los términos y condiciones aquí establecidos, así como a cualquier término y condición adicional que pueda aparecer en la cotización misma.',
          'Salvo que se especifique lo contrario por escrito, todas las cotizaciones caducan treinta (30) días después de su fecha, pueden ser rescindidas antes por aviso del Vendedor, y constituyen únicamente solicitudes de ofertas de compra.',
          'Los precios cotizados corresponden únicamente a los Productos y no incluyen instalación, datos técnicos, derechos de propiedad de ningún tipo, derechos de autor ni embalaje, salvo acuerdo expreso por escrito del Vendedor.',
          'Las fechas de entrega indicadas por el Vendedor son solo estimaciones y en ningún caso se interpretarán como que "el tiempo es esencial".',
          'Debido a las fluctuaciones en los costos de materias primas y energía, los precios pueden cambiar sin previo aviso.',
        ],
      },
      {
        heading: '3. Devoluciones y cancelaciones',
        paragraphs: [
          'El Vendedor no está obligado a aceptar la devolución de Productos hechos a medida. Los artículos personalizados no son elegibles para devolución.',
          'Si el Vendedor acepta la devolución de un Producto, esta estará sujeta a un cargo mínimo de reabastecimiento del treinta (30) por ciento, o el monto que el Vendedor apruebe por escrito.',
          'La cancelación de un pedido por parte del Cliente está sujeta a una tarifa administrativa del diez (10) por ciento. No se emitirán reembolsos por productos fabricados bajo pedido.',
          'Los productos pueden diferir ligeramente en color o detalles menores respecto de las fotos o materiales de marketing asociados; esto no afecta las especificaciones técnicas y no constituye motivo de devolución.',
        ],
      },
      {
        heading: '4. Garantía limitada',
        paragraphs: [
          'Los productos están cubiertos por una Garantía Limitada del fabricante de doce (12) meses desde la fecha de entrega, que cubre defectos de materiales y fabricación bajo condiciones normales de uso y operación. Puede haber cobertura de garantía extendida disponible para compra por separado; contáctenos para conocer los términos y precios vigentes. Los reclamos relacionados con material defectuoso se presentarán directamente ante Sevnce, el fabricante, de acuerdo con sus términos de garantía; Hazloc Robotics contactará al fabricante e iniciará el proceso de reclamo en nombre del Cliente.',
          'La única obligación de Hazloc Robotics, y el único y exclusivo recurso del Cliente, bajo esta Garantía Limitada es, a opción de Hazloc Robotics, la reparación o reemplazo de la parte defectuosa, o un reembolso del precio de compra según se describe a continuación. Se emitirá un reembolso completo, sujeto a inspección del Vendedor, por cualquier artículo defectuoso devuelto al Vendedor a cargo del Cliente y recibido dentro de treinta (30) días posteriores a la autorización de devolución, en su empaque original.',
          'SALVO POR LA GARANTÍA LIMITADA EXPRESA ANTES ESTABLECIDA, EL VENDEDOR NO OTORGA NINGUNA OTRA GARANTÍA, ESCRITA U ORAL, EXPRESA O IMPLÍCITA. HAZLOC ROBOTICS RENUNCIA A CUALQUIER OTRA GARANTÍA EXPRESA O IMPLÍCITA DE RENDIMIENTO, COMERCIABILIDAD, MANO DE OBRA, CALIDAD, DURABILIDAD, IDONEIDAD O NO INFRACCIÓN, INCLUYENDO SIN LIMITACIÓN EN AQUELLOS CASOS EN QUE SE REALICEN CAMBIOS, ALTERACIONES O MODIFICACIONES A LOS PRODUCTOS A SOLICITUD O INSTRUCCIÓN DEL CLIENTE. El Cliente acuerda no reclamar ni iniciar demanda contra Hazloc Robotics con base en dichas garantías renunciadas o en las garantías del fabricante. Hazloc Robotics no está obligada a proporcionar certificados de prueba o licencias para los productos que vende más allá de los proporcionados por el fabricante original.',
        ],
      },
      {
        heading: '5. Limitación de responsabilidad',
        paragraphs: [
          'HAZLOC ROBOTICS NO SERÁ RESPONSABLE POR NINGÚN DAÑO INDIRECTO, INCIDENTAL, ESPECIAL O CONSECUENTE QUE SURJA DEL USO DE PRODUCTOS COMPRADOS A TRAVÉS DE NUESTRO SITIO WEB, INCLUYENDO SIN LIMITACIÓN LA PÉRDIDA DE DATOS O LA PÉRDIDA DE GANANCIAS, INCLUSO SI HAZLOC ROBOTICS FUE ADVERTIDA DE LA POSIBILIDAD DE TALES DAÑOS.',
          'En la máxima medida permitida por la ley, la responsabilidad total y acumulada de Hazloc Robotics derivada de o relacionada con cualquier pedido no excederá el monto efectivamente pagado por el Cliente por el o los Productos que originen el reclamo. Los reclamos por faltantes o mercancía defectuosa deben presentarse dentro de los tres (3) días posteriores a la entrega.',
        ],
      },
      {
        heading: '6. Envío y reclamos por envíos dañados o incompletos',
        paragraphs: [
          'Inspeccione su envío y pida a su transportista que anote cualquier daño o pérdida antes de firmar la recepción de su paquete.',
          'Los clientes deben firmar el comprobante de entrega del transportista indicando los faltantes o daños aplicables en el momento de la entrega, y notificar a Hazloc Robotics Inc. dentro de los cinco (5) días hábiles posteriores a la recepción del envío.',
          'Especifique el número de artículos dañados o faltantes al firmar el comprobante de entrega del transportista.',
          'Conserve todos los paquetes, incluidos los envíos de paquetería, para permitir que el transportista inspeccione el daño si así lo desea.',
          'Cualquier material comprado por el Cliente y embalado en cajas, cartones o plataformas enviado por Hazloc Robotics se envía por cuenta y riesgo del Comprador, y Hazloc Robotics no podrá ser considerada responsable por retrasos, roturas o daños ocurridos durante el transporte.',
        ],
      },
      {
        heading: '7. Fuerza mayor',
        paragraphs: [
          'Hazloc Robotics no será responsable por ningún retraso o incumplimiento de sus obligaciones que resulte de causas fuera de su control razonable, incluyendo, entre otras, actos de fuerza mayor, desastres naturales, guerra, terrorismo, conflictos laborales, medidas gubernamentales, retrasos aduaneros o escasez de materias primas, transporte o energía.',
        ],
      },
      {
        heading: '8. Ley aplicable y disputas',
        paragraphs: [
          'Estos Términos, y cualquier pedido o compra realizados a través del Servicio, se rigen por las leyes de la Provincia de Quebec y las leyes federales de Canadá aplicables en ella, sin considerar principios de conflicto de leyes. Cualquier disputa que surja de o esté relacionada con estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales ubicados en Montreal, Quebec.',
        ],
      },
      {
        heading: '9. Divisibilidad y acuerdo íntegro',
        paragraphs: [
          'Si alguna disposición de estos Términos es considerada inválida o inaplicable por un tribunal competente, dicha disposición se limitará o eliminará en la medida mínima necesaria, y las disposiciones restantes permanecerán en pleno vigor y efecto. Estos Términos, junto con cualquier cotización escrita o confirmación de pedido emitida por el Vendedor, constituyen el acuerdo íntegro entre las partes respecto del objeto aquí tratado.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Contacto',
    disclaimer: 'Aunque toda la información ha sido verificada cuidadosamente, ocasionalmente pueden ocurrir errores u omisiones, por lo que está sujeta a corrección. Lamentamos cualquier inconveniente.',
  },
  pt: {
    eyebrow: 'Em vigor: 1º de setembro de 2026',
    title: 'Termos e Condições de Venda',
    subtitle: 'Vendedor: Hazloc Robotics Inc. ("Hazloc Robotics", "Vendedor", "nós") · Comprador: o Cliente ("Comprador", "Cliente", "você")',
    sections: [
      {
        heading: '1. Aceitação dos Termos',
        paragraphs: [
          'Seu acesso e uso do Serviço estão condicionados à sua aceitação e cumprimento destes Termos e Condições ("Termos"). Estes Termos se aplicam a todos os pedidos e clientes que utilizam o Serviço. Se você desejar comprar qualquer produto ou serviço disponibilizado por meio do Serviço fornecido pela Hazloc Robotics Inc., poderá ser solicitado a fornecer certas informações relevantes para sua compra, incluindo, sem limitação, seu nome, nome da empresa, dados de contato e endereço.',
          'Os produtos e serviços fornecidos pelo Vendedor são vendidos somente de acordo com os termos e condições estabelecidos nestes Termos, salvo acordo expresso por escrito em contrário entre as partes.',
        ],
      },
      {
        heading: '2. Cotações e pedidos',
        paragraphs: [
          'Todas as cotações estão sujeitas aos termos e condições aqui estabelecidos, bem como a quaisquer termos e condições adicionais que possam constar na própria cotação.',
          'Salvo especificação por escrito em contrário, todas as cotações expiram trinta (30) dias após sua data, podem ser encerradas antecipadamente mediante aviso do Vendedor, e constituem apenas solicitações de ofertas de compra.',
          'Os preços cotados referem-se somente aos Produtos e não incluem instalação, dados técnicos, direitos de propriedade de qualquer natureza, direitos autorais ou embalagem, salvo acordo expresso por escrito do Vendedor.',
          'As datas de entrega indicadas pelo Vendedor são apenas estimativas e não deverão, em nenhuma hipótese, ser interpretadas como significando que "o prazo é essencial".',
          'Devido a flutuações nos custos de matérias-primas e energia, os preços podem mudar sem aviso prévio.',
        ],
      },
      {
        heading: '3. Devoluções e cancelamentos',
        paragraphs: [
          'O Vendedor não é obrigado a aceitar a devolução de Produtos feitos sob medida. Itens personalizados não são elegíveis para devolução.',
          'Se o Vendedor concordar em aceitar a devolução de um Produto, a devolução estará sujeita a uma taxa mínima de reabastecimento de trinta (30) por cento, ou outro valor que o Vendedor aprove por escrito.',
          'O cancelamento de um pedido pelo Cliente está sujeito a uma taxa administrativa de dez (10) por cento. Nenhum reembolso será emitido para produtos fabricados sob encomenda.',
          'Os produtos podem diferir ligeiramente em cor ou detalhes menores em relação às fotos ou materiais de marketing associados; isso não afeta as especificações técnicas e não constitui motivo para devolução.',
        ],
      },
      {
        heading: '4. Garantia Limitada',
        paragraphs: [
          'Os produtos são cobertos por uma Garantia Limitada do fabricante de doze (12) meses a partir da data de entrega, cobrindo defeitos de material e fabricação sob uso e condições normais de operação. Cobertura de garantia estendida pode estar disponível para compra separada; entre em contato para termos e preços atuais. Reclamações relacionadas a material defeituoso serão registradas diretamente junto à Sevnce, a fabricante, de acordo com seus termos de garantia; a Hazloc Robotics entrará em contato com a fabricante e iniciará o processo de reclamação em nome do Cliente.',
          'A única obrigação da Hazloc Robotics, e o único e exclusivo recurso do Cliente, sob esta Garantia Limitada é, a critério da Hazloc Robotics, o reparo ou substituição da peça defeituosa, ou um reembolso do preço de compra conforme descrito abaixo. Um reembolso integral será emitido, sujeito à inspeção do Vendedor, para qualquer item defeituoso devolvido ao Vendedor por conta do Cliente e recebido dentro de trinta (30) dias após a autorização de devolução, em sua embalagem original.',
          'EXCETO PELA GARANTIA LIMITADA EXPRESSA ACIMA DECLARADA, O VENDEDOR NÃO OFERECE QUAISQUER OUTRAS GARANTIAS, ESCRITAS OU ORAIS, EXPRESSAS OU IMPLÍCITAS. A HAZLOC ROBOTICS SE ISENTA DE QUAISQUER OUTRAS GARANTIAS EXPRESSAS OU IMPLÍCITAS DE DESEMPENHO, COMERCIALIZAÇÃO, MÃO DE OBRA, QUALIDADE, DURABILIDADE, ADEQUAÇÃO OU NÃO VIOLAÇÃO, INCLUINDO SEM LIMITAÇÃO NOS CASOS EM QUE ALTERAÇÕES OU MODIFICAÇÕES SEJAM FEITAS AOS PRODUTOS A PEDIDO OU INSTRUÇÃO DO CLIENTE. O Cliente concorda em não reclamar ou mover ação judicial contra a Hazloc Robotics com base em tais garantias isentas ou nas garantias do fabricante. A Hazloc Robotics não é obrigada a fornecer certificados de teste ou licenças para os produtos que vende além daqueles fornecidos pelo fabricante original.',
        ],
      },
      {
        heading: '5. Limitação de responsabilidade',
        paragraphs: [
          'A HAZLOC ROBOTICS NÃO SE RESPONSABILIZA POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS OU CONSEQUENCIAIS DECORRENTES DO USO DE PRODUTOS ADQUIRIDOS ATRAVÉS DE NOSSO SITE, INCLUINDO SEM LIMITAÇÃO PERDA DE DADOS OU PERDA DE LUCROS, MESMO QUE A HAZLOC ROBOTICS TENHA SIDO AVISADA DA POSSIBILIDADE DE TAIS DANOS.',
          'Na máxima extensão permitida por lei, a responsabilidade total agregada da Hazloc Robotics decorrente de ou relacionada a qualquer pedido não excederá o valor efetivamente pago pelo Cliente pelo(s) Produto(s) que originou(aram) a reclamação. Reclamações relativas a faltas ou mercadorias com defeito devem ser apresentadas dentro de três (3) dias após a entrega.',
        ],
      },
      {
        heading: '6. Envio e reclamações por remessas danificadas ou incompletas',
        paragraphs: [
          'Inspecione sua remessa e peça ao motorista que anote quaisquer danos ou perdas antes de assinar o recebimento do pacote.',
          'Os clientes devem assinar o comprovante de entrega da transportadora indicando faltas ou danos aplicáveis no momento da entrega, e notificar a Hazloc Robotics Inc. dentro de cinco (5) dias úteis após o recebimento da remessa.',
          'Especifique o número de itens danificados ou faltantes ao assinar o comprovante de entrega da transportadora.',
          'Retenha todos os pacotes, incluindo remessas de encomendas, para permitir que a transportadora tenha a opção de inspecionar o dano.',
          'Qualquer material adquirido pelo Cliente e embalado em caixas, papelões ou estrados enviados pela Hazloc Robotics é enviado por conta e risco do Comprador, e a Hazloc Robotics não pode ser responsabilizada por atrasos, quebras ou danos ocorridos durante o transporte.',
        ],
      },
      {
        heading: '7. Força maior',
        paragraphs: [
          'A Hazloc Robotics não será responsável por qualquer atraso ou falha no cumprimento de suas obrigações resultante de causas além de seu controle razoável, incluindo, sem limitação, atos fortuitos, desastres naturais, guerra, terrorismo, disputas trabalhistas, ação governamental, atrasos alfandegários ou escassez de matérias-primas, transporte ou energia.',
        ],
      },
      {
        heading: '8. Lei aplicável e disputas',
        paragraphs: [
          'Estes Termos, e qualquer pedido ou compra feitos através do Serviço, são regidos pelas leis da Província de Quebec e pelas leis federais do Canadá aplicáveis a ela, sem considerar princípios de conflito de leis. Qualquer disputa decorrente de ou relacionada a estes Termos estará sujeita à jurisdição exclusiva dos tribunais localizados em Montreal, Quebec.',
        ],
      },
      {
        heading: '9. Divisibilidade e acordo integral',
        paragraphs: [
          'Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal competente, essa disposição será limitada ou eliminada na medida mínima necessária, e as disposições remanescentes permanecerão em pleno vigor e efeito. Estes Termos, juntamente com qualquer cotação escrita ou confirmação de pedido emitida pelo Vendedor, constituem o acordo integral entre as partes com relação ao objeto aqui tratado.',
        ],
      },
    ] as LegalSection[],
    contactTitle: 'Contato',
    disclaimer: 'Embora todas as informações tenham sido cuidadosamente verificadas quanto à precisão, erros e omissões ocasionalmente ocorrem e estão, portanto, sujeitos a correção. Lamentamos qualquer inconveniente.',
  },
};

export default function TermsPage() {
  const locale = useLocale();
  const t = copy[locale];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <section className="py-16 lg:py-24">
        <div className="container-x max-w-3xl">
          <div className="space-y-10">
            {t.sections.map((section, i) => (
              <Reveal key={i} delay={Math.min(i * 30, 300)}>
                <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-ink-600 leading-relaxed">{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal delay={330}>
              <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{t.contactTitle}</h2>
              <div className="mt-4 rounded-2xl border border-ink-100 bg-ink-50 p-6 text-sm text-ink-700 leading-relaxed">
                <p>
                  Hazloc Robotics Inc. · 4935 Ch Queen-Mary #202 · Montreal QC H3W 1X4, Canada · Telephone: 514-250-6498 · Toll Free:{' '}
                  <a href="tel:+18336575158" className="text-teal-600 hover:text-teal-700">1-833-657-5158</a> · Email:{' '}
                  <a href="mailto:info@hazlocrobotics.com" className="text-teal-600 hover:text-teal-700">info@hazlocrobotics.com</a>
                </p>
              </div>
              <p className="mt-4 text-sm text-ink-500 leading-relaxed">{t.disclaimer}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
