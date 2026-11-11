/* WAVE FEST · Traducciones de la página principal (ES / GL / EN)
 * ----------------------------------------------------------------
 * Cómo funciona: la web está escrita en castellano. Este archivo busca cada
 * texto en castellano y lo sustituye por su versión en gallego o inglés.
 * Para añadir o corregir una traducción: busca la frase en castellano
 * (tal y como aparece en la web) y cambia el texto de la derecha:
 *   'Frase en castellano': ['Frase en galego', 'Sentence in English'],
 * Si una frase no está aquí, se queda en castellano.
 */
(function () {
  'use strict';

  var T = {
    // ---- Menú y botones
    'Saltar al contenido': ['Saltar ao contido', 'Skip to content'],
    'Cartel': ['Cartel', 'Line-up'],
    'Entradas': ['Entradas', 'Tickets'],
    'Ubicación': ['Localización', 'Location'],
    'Patrocinios': ['Patrocinios', 'Sponsors'],
    'Contacto': ['Contacto', 'Contact'],
    'Comprar entradas': ['Mercar entradas', 'Buy tickets'],
    'Ver cartel': ['Ver cartel', 'See line-up'],
    '+ Añadir al calendario': ['+ Engadir ao calendario', '+ Add to calendar'],

    // ---- Qué es WAVE FEST (sección de texto para Google)
    'El festival': ['O festival', 'The festival'],
    'Qué es WAVE FEST': ['Que é WAVE FEST', 'What is WAVE FEST'],
    'WAVE FEST es el festival de música urbana y electrónica de la Costa da Morte. La primera edición se celebra el sábado 31 de julio de 2027 en Corcubión (A Coruña), Galicia.': ['WAVE FEST é o festival de música urbana e electrónica da Costa da Morte. A primeira edición celébrase o sábado 31 de xullo de 2027 en Corcubión (A Coruña), Galicia.', 'WAVE FEST is the urban and electronic music festival of the Costa da Morte. The first edition takes place on Saturday 31 July 2027 in Corcubión (A Coruña), Galicia.'],
    'Música urbana en Galicia': ['Música urbana en Galicia', 'Urban music in Galicia'],
    'Rap, trap, reguetón y sesiones de DJ durante 11 horas seguidas, de 19:00 a 06:00, con 12 artistas en el cartel y una mayoría de talento gallego.': ['Rap, trap, reguetón e sesións de DJ durante 11 horas seguidas, das 19:00 ás 06:00, con 12 artistas no cartel e unha maioría de talento galego.', 'Rap, trap, reggaeton and DJ sets for 11 hours straight, from 19:00 to 06:00, with 12 artists on the line-up and mostly Galician talent.'],
    'En plena Costa da Morte': ['En plena Costa da Morte', 'Right on the Costa da Morte'],
    'Corcubión está a 3 km de Cee y a 13 km de Fisterra, a algo más de una hora de Santiago de Compostela y de A Coruña. Un festival de verano junto al mar.': ['Corcubión está a 3 km de Cee e a 13 km de Fisterra, a pouco máis dunha hora de Santiago de Compostela e da Coruña. Un festival de verán á beira do mar.', 'Corcubión is 3 km from Cee and 13 km from Fisterra, just over an hour from Santiago de Compostela and A Coruña. A summer festival by the sea.'],
    'Hasta 10.000 personas': ['Ata 10.000 persoas', 'Up to 10,000 people'],
    'Un único día al aire libre en el Campo de fútbol Novo Cubeleiro, con entradas General, Front Stage y VIP a la venta en Futura Tickets.': ['Un único día ao aire libre no Campo de fútbol Novo Cubeleiro, con entradas General, Front Stage e VIP á venda en Futura Tickets.', 'One single open-air day at the Novo Cubeleiro football ground, with General, Front Stage and VIP tickets on sale at Futura Tickets.'],
    'Galicia 2027 · Festival de música urbana y electrónica': ['Galicia 2027 · Festival de música urbana e electrónica', 'Galicia 2027 · Urban & electronic music festival'],
    'Qué hacer en la Costa da Morte': ['Que facer na Costa da Morte', 'Things to do on the Costa da Morte'],
    'Cómo llegar': ['Como chegar', 'Getting there'],
    'Artistas': ['Artistas', 'Artists'],
    'Festival Costa da Morte': ['Festival Costa da Morte', 'Costa da Morte festival'],
    '31 de julio en Galicia': ['31 de xullo en Galicia', '31 July in Galicia'],
    'Prensa': ['Prensa', 'Press'],
    // ---- Registro, tramos y compartir
    'Entérate antes que nadie': ['Entérate antes ca ninguén', 'Be the first to know'],
    'Deja tu email y te avisamos de los próximos artistas del cartel y de cada cambio de tramo de entradas, antes de que suban de precio.': ['Déixanos o teu email e avisámoste dos próximos artistas do cartel e de cada cambio de tramo de entradas, antes de que soban de prezo.', 'Leave your email and we will tell you about the next artists and every ticket tier change, before prices go up.'],
    'Avisadme': ['Avisádeme', 'Notify me'],
    'y declaro tener al menos 16 años.': ['e declaro ter polo menos 16 anos.', 'and confirm I am at least 16 years old.'],
    'Quiero recibir por email novedades, avisos de venta de entradas y promociones de WAVE FEST y sus patrocinadores. Puedo darme de baja cuando quiera.': ['Quero recibir por email novidades, avisos de venda de entradas e promocións de WAVE FEST e os seus patrocinadores. Podo darme de baixa cando queira.', 'I want to receive news, ticket sale alerts and promotions from WAVE FEST and its sponsors by email. I can unsubscribe at any time.'],
    'Información básica sobre protección de datos': ['Información básica sobre protección de datos', 'Basic data protection information'],
    'Tramo 1 · A la venta': ['Tramo 1 · Á venda', 'Tier 1 · On sale'],
    'El precio sube en el siguiente tramo. Compra ahora al mejor precio.': ['O prezo sobe no seguinte tramo. Merca agora ao mellor prezo.', 'Prices go up in the next tier. Buy now at the best price.'],
    'Precio tramo 1': ['Prezo tramo 1', 'Tier 1 price'],
    'Vente conmigo por WhatsApp': ['Vente comigo por WhatsApp', 'Invite friends on WhatsApp'],
    'Entradas para grupos': ['Entradas para grupos', 'Group tickets'],
    'Compártelo por WhatsApp': ['Compárteo por WhatsApp', 'Share on WhatsApp'],
    '¡Hecho! Te avisaremos antes que nadie.': ['Feito! Avisarémoste antes ca ninguén.', 'Done! You will be the first to know.'],
    'Este email ya estaba registrado: ya estás dentro.': ['Este email xa estaba rexistrado: xa estás dentro.', 'This email was already registered: you are in.'],
    '¡Hecho! Te hemos enviado un email de bienvenida (mira también en Promociones o Spam).': ['Feito! Enviámosche un email de benvida (mira tamén en Promocións ou Spam).', 'Done! We have sent you a welcome email (check Promotions or Spam too).'],
    'Escribe un email válido.': ['Escribe un email válido.', 'Please enter a valid email.'],
    'Tienes que aceptar el aviso de privacidad.': ['Tes que aceptar o aviso de privacidade.', 'You need to accept the privacy notice.'],
    'artistas por anunciar': ['artistas por anunciar', 'artists to be announced'],
    'Regístrate y entérate el primero →': ['Rexístrate e entérate o primeiro →', 'Sign up and be the first to know →'],
    'Logo de WAVE FEST Galicia': ['Logo de WAVE FEST Galicia', 'WAVE FEST Galicia logo'],

    // ---- Portada
    'Festival de música urbana': ['Festival de música urbana', 'Urban music festival'],
    'Faltan para el 31 de julio de 2027': ['Quedan para o 31 de xullo de 2027', 'Countdown to 31 July 2027'],
    'días': ['días', 'days'],
    'horas': ['horas', 'hours'],
    'seg': ['seg', 'sec'],
    '31 julio 2027': ['31 xullo 2027', '31 July 2027'],
    'Campo de fútbol Novo Cubeleiro ·': ['Campo de fútbol Novo Cubeleiro ·', 'Novo Cubeleiro football ground ·'],
    'Aforo': ['Aforo', 'Capacity'],
    '10.000': ['10.000', '10,000'],
    'personas': ['persoas', 'people'],
    'AFORO 10.000': ['AFORO 10.000', 'CAPACITY 10,000'],

    // ---- Cartel
    'Line up': ['Line up', 'Line-up'],
    'El cartel': ['O cartel', 'The line-up'],
    'Doce nombres van a hacer temblar Corcubión. La lista completa se revela por fases — de momento, que la imaginación caliente motores.':
      ['Doce nomes van facer tremer Corcubión. A lista completa revélase por fases — polo de agora, que a imaxinación vaia quentando motores.',
       'Twelve names are about to shake Corcubión. The full line-up is revealed in phases — for now, let your imagination warm up.'],
    'Confirmado': ['Confirmado', 'Confirmed'],
    'Por confirmar': ['Por confirmar', 'TBA'],
    'Censurado': ['Censurado', 'Censored'],
    'Artistas por confirmar. Los 12 nombres del cartel se irán completando por fases. Los anuncios se irán desbloqueando en redes y en esta misma página antes del 31 de julio de 2027.':
      ['Artistas por confirmar. Os 12 nomes do cartel irán completándose por fases. Os anuncios iranse desbloqueando nas redes e nesta mesma páxina antes do 31 de xullo de 2027.',
       'More artists to be announced. The 12 names on the line-up will be revealed in phases, on social media and on this page, before 31 July 2027.'],

    // ---- Entradas
    'Tres formas de vivir WAVE FEST, un único aforo limitado a 10.000 personas en plena Costa da Morte.':
      ['Tres xeitos de vivir o WAVE FEST, cun único aforo limitado a 10.000 persoas en plena Costa da Morte.',
       'Three ways to experience WAVE FEST, with a single capacity of 10,000 people on the Costa da Morte.'],
    'Aforo máximo anunciado:': ['Aforo máximo anunciado:', 'Maximum capacity:'],
    'Venta oficial:': ['Venda oficial:', 'Official sales:'],
    'Fecha única:': ['Data única:', 'One date only:'],
    'General': ['Xeral', 'General'],
    'IVA incluido · gastos de gestión no incluidos': ['IVE incluído · gastos de xestión non incluídos', 'VAT included · booking fees not included'],
    'La entrada base para vivir el festival de principio a fin. Solo tiene acceso a la zona general del recinto.':
      ['A entrada básica para vivir o festival de principio a fin. Só dá acceso á zona xeral do recinto.',
       'The standard ticket to enjoy the festival from start to finish. General area access only.'],
    'Acceso solo zona general': ['Acceso só á zona xeral', 'General area only'],
    'Zona preferente junto al escenario principal, más cerca del sonido y de los artistas, sin renunciar al ambiente general.':
      ['Zona preferente xunto ao escenario principal, máis preto do son e dos artistas, sen renunciar ao ambiente xeral.',
       'Priority area right by the main stage, closer to the sound and the artists, without missing the festival atmosphere.'],
    'Zona preferente escenario': ['Zona preferente escenario', 'Priority stage area'],
    'Área exclusiva con barra propia, mejores vistas y acceso más ágil al recinto durante toda la jornada.':
      ['Área exclusiva con barra propia, mellores vistas e acceso máis áxil ao recinto durante toda a xornada.',
       'Exclusive area with its own bar, better views and faster entry all night long.'],
    'Zona VIP + barra propia': ['Zona VIP + barra propia', 'VIP area + private bar'],
    '1 botella de alcohol': ['1 botella de alcohol', '1 bottle of spirits'],
    '12 refrescos': ['12 refrescos', '12 soft drinks'],
    'Incluido para 4 personas': ['Incluído para 4 persoas', 'For up to 4 people'],
    'Agotada': ['Esgotada', 'Sold out'],
    'Diferentes tandas de venta': ['Diferentes quendas de venda', 'Tiered pricing'],
    '· Los precios cambian por fases. No hay Early Bird.': ['· Os prezos cambian por fases. Non hai Early Bird.', '· Prices go up in phases. There is no early bird.'],
    'Taquilla: precio diferente.': ['Billeteira: prezo diferente.', 'Box office: different price.'],
    'Cambio de nombre: 15 €.': ['Cambio de nome: 15 €.', 'Name change: €15.'],
    'Reentrada: pulsera 5 € durante el mismo festival.': ['Reentrada: pulseira de 5 € durante o mesmo festival.', 'Re-entry: €5 wristband during the festival.'],
    'Venta oficial de entradas': ['Venda oficial de entradas', 'Official ticket sales'],
    'Venta oficial · Futura Tickets': ['Venda oficial · Futura Tickets', 'Official sales · Futura Tickets'],

    // ---- Ubicación y cómo llegar
    'Venue': ['Lugar', 'Venue'],
    'WAVE FEST se celebra en el Campo de fútbol Novo Cubeleiro, en Corcubión, en plena Costa da Morte.':
      ['O WAVE FEST celébrase no Campo de fútbol Novo Cubeleiro, en Corcubión, en plena Costa da Morte.',
       'WAVE FEST takes place at the Novo Cubeleiro football ground in Corcubión, on the Costa da Morte.'],
    'Dirección': ['Enderezo', 'Address'],
    'Corcubión, A Coruña — Galicia, España': ['Corcubión, A Coruña — Galicia, España', 'Corcubión, A Coruña — Galicia, Spain'],
    'Fecha y aforo': ['Data e aforo', 'Date and capacity'],
    '31 de julio de 2027': ['31 de xullo de 2027', '31 July 2027'],
    'Aforo limitado a 10.000 personas': ['Aforo limitado a 10.000 persoas', 'Limited to 10,000 people'],
    'Distancias': ['Distancias', 'Distances'],
    'En coche. Corcubión está a 3 km de Cee y a 13 km de Fisterra.': ['En coche. Corcubión está a 3 km de Cee e a 13 km de Fisterra.', 'By car. Corcubión is 3 km from Cee and 13 km from Fisterra.'],
    'Abrir en Google Maps': ['Abrir en Google Maps', 'Open in Google Maps'],
    'Abrir en Google Maps ↗': ['Abrir en Google Maps ↗', 'Open in Google Maps ↗'],
    'Preguntar por accesos': ['Preguntar polos accesos', 'Ask about access'],
    'Océano Atlántico': ['Océano Atlántico', 'Atlantic Ocean'],
    'Cómo llegar a WAVE FEST': ['Como chegar ao WAVE FEST', 'How to get to WAVE FEST'],
    'Esquema de situación: Corcubión, en la Costa da Morte, a unos 90 km de Santiago de Compostela y de A Coruña.':
      ['Esquema de situación: Corcubión, na Costa da Morte, a uns 90 km de Santiago de Compostela e da Coruña.',
       'Location sketch: Corcubión, on the Costa da Morte, about 90 km from Santiago de Compostela and A Coruña.'],
    'En coche': ['En coche', 'By car'],
    'Coche y aparcamiento': ['Coche e aparcadoiro', 'Car and parking'],
    'Desde Santiago son unos 90 km y desde A Coruña unos 100 km, siempre en dirección a Cee. Antes del festival publicaremos aquí las zonas de aparcamiento habilitadas. Compartir coche ahorra plazas y gasolina.':
      ['Desde Santiago son uns 90 km e desde A Coruña uns 100 km, sempre en dirección a Cee. Antes do festival publicaremos aquí as zonas de aparcadoiro habilitadas. Compartir coche aforra prazas e gasolina.',
       'It is about 90 km from Santiago and 100 km from A Coruña, heading towards Cee. We will publish the designated parking areas here before the festival. Car-sharing saves spaces and fuel.'],
    'Transporte público': ['Transporte público', 'Public transport'],
    'Autobús': ['Autobús', 'Bus'],
    'Monbus conecta Santiago de Compostela con la Costa da Morte (línea Santiago – Cee – Fisterra). Consulta horarios en':
      ['Monbus conecta Santiago de Compostela coa Costa da Morte (liña Santiago – Cee – Fisterra). Consulta os horarios en',
       'Monbus connects Santiago de Compostela with the Costa da Morte (Santiago – Cee – Fisterra line). Check timetables at'],
    '. Por la noche no hay autobuses regulares: si habilitamos buses especiales de ida y vuelta, lo anunciaremos aquí y en':
      ['. Pola noite non hai autobuses regulares: se habilitamos buses especiais de ida e volta, anunciarémolo aquí e en',
       '. There are no regular buses at night: if we run special shuttle buses, we will announce it here and on'],
    'A la salida': ['Á saída', 'Getting home'],
    'Hay taxis en Corcubión y en Cee. El festival termina a las 06:00 y la demanda a esa hora es muy alta: reserva tu taxi de vuelta con antelación o queda con alguien que no beba.':
      ['Hai taxis en Corcubión e en Cee. O festival remata ás 06:00 e a demanda a esa hora é moi alta: reserva o teu taxi de volta con antelación ou queda con alguén que non beba.',
       'There are taxis in Corcubión and Cee. The festival ends at 06:00 and demand is very high at that time: book your taxi home in advance or go with someone who is not drinking.'],
    'Dormir cerca': ['Durmir preto', 'Where to stay'],
    'Alojamiento': ['Aloxamento', 'Accommodation'],
    'Corcubión, Cee, Fisterra, Muxía y Carnota tienen hoteles, pensiones, casas rurales y campings. Es temporada alta: reserva cuanto antes.':
      ['Corcubión, Cee, Fisterra, Muxía e Carnota teñen hoteis, pensións, casas rurais e campings. É tempada alta: reserva canto antes.',
       'Corcubión, Cee, Fisterra, Muxía and Carnota have hotels, guesthouses, rural cottages and campsites. It is peak season: book as early as you can.'],

    // ---- Patrocinadores
    'Patrocinadores': ['Patrocinadores', 'Sponsors'],
    'WAVE FEST existe gracias a las marcas y negocios que se suben a la ola con nosotros. Estos son los que hacen posible el 31 de julio en Corcubión.':
      ['O WAVE FEST existe grazas ás marcas e negocios que se soben á onda connosco. Estes son os que fan posible o 31 de xullo en Corcubión.',
       'WAVE FEST exists thanks to the brands and businesses riding the wave with us. These are the ones making 31 July in Corcubión possible.'],
    'Patrocinador principal': ['Patrocinador principal', 'Main sponsor'],
    'Espacio disponible': ['Espazo dispoñible', 'Space available'],
    'Solicitar dossier': ['Solicitar dossier', 'Request our deck'],
    'Colaboradores': ['Colaboradores', 'Partners'],
    '¿Quieres patrocinar WAVE FEST?': ['Queres patrocinar o WAVE FEST?', 'Want to sponsor WAVE FEST?'],
    'Quedan espacios disponibles en todas las categorías. Escríbenos y te enviamos el dossier con audiencia, visibilidad y tarifas.':
      ['Quedan espazos dispoñibles en todas as categorías. Escríbenos e enviámosche o dossier con audiencia, visibilidade e tarifas.',
       'There are spaces available in every category. Get in touch and we will send you our deck with audience, visibility and rates.'],
    'Solicitar dossier de patrocinio': ['Solicitar dossier de patrocinio', 'Request sponsorship deck'],

    // ---- Preguntas frecuentes
    'Preguntas frecuentes': ['Preguntas frecuentes', 'Frequently asked questions'],
    'Todo lo que necesitas saber antes de venir. ¿No encuentras tu respuesta? Escríbenos.':
      ['Todo o que precisas saber antes de vir. Non atopas a túa resposta? Escríbenos.', 'Everything you need to know before you come. Can’t find your answer? Get in touch.'],
    '¿Cuándo y dónde es WAVE FEST?': ['Cando e onde é o WAVE FEST?', 'When and where is WAVE FEST?'],
    'El sábado 31 de julio de 2027 en el Campo de fútbol Novo Cubeleiro, en Corcubión (A Coruña), en plena Costa da Morte.':
      ['O sábado 31 de xullo de 2027 no Campo de fútbol Novo Cubeleiro, en Corcubión (A Coruña), en plena Costa da Morte.',
       'Saturday 31 July 2027 at the Novo Cubeleiro football ground in Corcubión (A Coruña), on the Costa da Morte.'],
    '¿A qué hora empieza y termina?': ['A que hora empeza e remata?', 'What time does it start and finish?'],
    'Las puertas abren a las 19:00 y el festival termina sobre las 06:00. Los horarios de cada artista se publicarán más adelante.':
      ['As portas ábrense ás 19:00 e o festival remata arredor das 06:00. Os horarios de cada artista publicaranse máis adiante.',
       'Doors open at 19:00 and the festival ends around 06:00. Set times will be announced later.'],
    '¿Cuál es la edad mínima?': ['Cal é a idade mínima?', 'What is the minimum age?'],
    '16 años. Los asistentes de 16 y 17 años deben traer la': ['16 anos. As persoas de 16 e 17 anos deben traer a', '16. Attendees aged 16 and 17 must bring the'],
    'autorización firmada': ['autorización asinada', 'signed consent form'],
    'por su padre, madre o tutor legal, llevarán una pulsera identificativa y no se les servirá alcohol. La zona VIP es solo para mayores de 18.':
      ['polo seu pai, nai ou titor legal, levarán unha pulseira identificativa e non se lles servirá alcohol. A zona VIP é só para maiores de 18 anos.',
       'from a parent or legal guardian (in Spanish). They will wear an ID wristband and will not be served alcohol. The VIP area is 18+ only.'],
    '¿Qué documento tengo que llevar?': ['Que documento teño que levar?', 'What ID do I need?'],
    'El DNI, el pasaporte o el carné de conducir original. Las entradas son nominativas: el nombre de la entrada tiene que coincidir con el del documento. Sin documento no se puede entrar.':
      ['O DNI, o pasaporte ou o carné de conducir orixinal. As entradas son nominativas: o nome da entrada ten que coincidir co do documento. Sen documento non se pode entrar.',
       'Your original national ID card, passport or driving licence. Tickets are personal: the name on the ticket must match your ID. No ID, no entry.'],
    '¿Qué tipos de entrada hay?': ['Que tipos de entrada hai?', 'What ticket types are there?'],
    'General (acceso al recinto), Front Stage (zona delantera, pegada al escenario) y VIP (zona exclusiva con barra propia, para grupos de hasta 4 personas). Los precios suben por tramos: cuanto antes compres, mejor precio.':
      ['Xeral (acceso ao recinto), Front Stage (zona dianteira, pegada ao escenario) e VIP (zona exclusiva con barra propia, para grupos de ata 4 persoas). Os prezos soben por quendas: canto antes merques, mellor prezo.',
       'General (festival grounds), Front Stage (front area, right by the stage) and VIP (exclusive area with its own bar, for groups of up to 4). Prices go up in tiers: the sooner you buy, the better the price.'],
    '¿Puedo cambiar el nombre de mi entrada?': ['Podo cambiar o nome da miña entrada?', 'Can I change the name on my ticket?'],
    'Sí. El cambio de titular cuesta 15 € y se hace a través de Futura Tickets. No compres entradas fuera de los canales oficiales: las copias o duplicados serán rechazados.':
      ['Si. O cambio de titular custa 15 € e faise a través de Futura Tickets. Non merques entradas fóra das canles oficiais: as copias ou duplicados serán rexeitados.',
       'Yes. A name change costs €15 and is done through Futura Tickets. Do not buy tickets outside official channels: copies or duplicates will be rejected.'],
    '¿Puedo salir y volver a entrar?': ['Podo saír e volver entrar?', 'Can I leave and come back in?'],
    'Sí, con la pulsera de reacceso, que cuesta 5 € y se consigue al salir en los puntos de control.':
      ['Si, coa pulseira de reacceso, que custa 5 € e se consegue ao saír nos puntos de control.',
       'Yes, with the re-entry wristband, which costs €5 and is available at the checkpoints when you leave.'],
    '¿Qué no puedo llevar?': ['Que non podo levar?', 'What can’t I bring?'],
    'Comida y bebida del exterior, envases de vidrio, latas, objetos punzantes, bengalas, pirotecnia, punteros láser, drones o cualquier objeto peligroso. Habrá controles en el acceso.':
      ['Comida e bebida do exterior, envases de vidro, latas, obxectos punzantes, bengalas, pirotecnia, punteiros láser, drons ou calquera obxecto perigoso. Haberá controis no acceso.',
       'Outside food and drink, glass, cans, sharp objects, flares, fireworks, laser pointers, drones or any dangerous item. There will be security checks at the entrance.'],
    '¿Se puede pagar con tarjeta dentro?': ['Pódese pagar con tarxeta dentro?', 'Can I pay by card inside?'],
    'Sí. Casi todas las barras aceptan tarjeta y habrá también un punto que solo acepta efectivo.':
      ['Si. Case todas as barras aceptan tarxeta e haberá tamén un punto que só acepta efectivo.',
       'Yes. Almost all bars take cards, and there will also be one cash-only point.'],
    '¿Habrá comida dentro?': ['Haberá comida dentro?', 'Will there be food?'],
    'Sí, habrá zona de comida con food trucks durante todo el festival.': ['Si, haberá zona de comida con food trucks durante todo o festival.', 'Yes, there will be a food area with food trucks throughout the festival.'],
    '¿Qué pasa si llueve?': ['Que pasa se chove?', 'What if it rains?'],
    'El festival es al aire libre y se celebra aunque llueva. Solo se suspendería si las condiciones pusieran en riesgo la seguridad del público; en ese caso avisaríamos en nuestros canales oficiales.':
      ['O festival é ao aire libre e celébrase aínda que chova. Só se suspendería se as condicións puxesen en risco a seguridade do público; nese caso avisariamos nas nosas canles oficiais.',
       'The festival is outdoors and goes ahead rain or shine. It would only be called off if conditions put people’s safety at risk; in that case we would announce it on our official channels.'],
    '¿Me devuelven el dinero si no puedo ir?': ['Devólvenme o diñeiro se non podo ir?', 'Can I get a refund if I can’t go?'],
    'Las entradas no se devuelven salvo que el festival se cancele o se aplace. Puedes hacer un cambio de titular para que vaya otra persona. Tienes todas las condiciones en':
      ['As entradas non se devolven salvo que o festival se cancele ou se aprace. Podes facer un cambio de titular para que vaia outra persoa. Tes todas as condicións en',
       'Tickets are non-refundable unless the festival is cancelled or postponed. You can transfer your ticket to someone else with a name change. Full conditions in'],
    'Cancelación y devoluciones': ['Cancelación e devolucións', 'Cancellations and refunds (in Spanish)'],
    '¿Es accesible para personas con movilidad reducida?': ['É accesible para persoas con mobilidade reducida?', 'Is it accessible for people with reduced mobility?'],
    'Sí. Habrá itinerarios y aseos adaptados. Si necesitas asistencia, escríbenos antes del festival a':
      ['Si. Haberá itinerarios e aseos adaptados. Se precisas asistencia, escríbenos antes do festival a',
       'Yes. There will be accessible routes and toilets. If you need assistance, email us before the festival at'],

    // ---- Contacto
    'Hablemos': ['Falemos', 'Let’s talk'],
    'Dudas sobre entradas, acreditaciones de prensa, propuestas de colaboración o accesibilidad: este es el canal directo con el equipo de WAVE FEST.':
      ['Dúbidas sobre entradas, acreditacións de prensa, propostas de colaboración ou accesibilidade: esta é a canle directa co equipo do WAVE FEST.',
       'Questions about tickets, press accreditation, partnerships or accessibility: this is the direct line to the WAVE FEST team.'],
    'Email': ['Correo', 'Email'],
    'Ubicación del evento': ['Localización do evento', 'Event location'],
    'Campo de fútbol Novo Cubeleiro, Corcubión': ['Campo de fútbol Novo Cubeleiro, Corcubión', 'Novo Cubeleiro football ground, Corcubión'],
    'Fecha': ['Data', 'Date'],
    'Todos los mensajes enviados desde este formulario llegan directamente a nuestro correo oficial. Respondemos en un plazo de 24–48h.':
      ['Todas as mensaxes enviadas desde este formulario chegan directamente ao noso correo oficial. Respondemos nun prazo de 24–48 h.',
       'All messages sent through this form go straight to our official inbox. We reply within 24–48 hours.'],
    'Nombre': ['Nome', 'Name'],
    'Motivo': ['Motivo', 'Subject'],
    'Selecciona una opción': ['Selecciona unha opción', 'Choose an option'],
    'Entradas / Tickets': ['Entradas / Tickets', 'Tickets'],
    'Prensa / Acreditaciones': ['Prensa / Acreditacións', 'Press / Accreditation'],
    'Colaboraciones / Patrocinio': ['Colaboracións / Patrocinio', 'Partnerships / Sponsorship'],
    'Accesibilidad': ['Accesibilidade', 'Accessibility'],
    'Otro': ['Outro', 'Other'],
    'Mensaje': ['Mensaxe', 'Message'],
    'He leído y acepto el': ['Lin e acepto o', 'I have read and accept the'],
    'aviso de privacidad': ['aviso de privacidade', 'privacy notice (in Spanish)'],
    '. Mis datos se utilizarán para gestionar y responder a esta consulta. Este consentimiento no implica suscripción a comunicaciones comerciales.':
      ['. Os meus datos utilizaranse para xestionar e responder a esta consulta. Este consentimento non implica subscrición a comunicacións comerciais.',
       '. My data will be used to handle and reply to this enquiry. This consent does not sign me up to marketing communications.'],
    'Al enviar aceptas que usemos estos datos únicamente para responder a tu consulta.':
      ['Ao enviar aceptas que usemos estes datos unicamente para responder á túa consulta.', 'By sending, you agree that we use this data only to reply to your enquiry.'],
    'Enviar mensaje': ['Enviar mensaxe', 'Send message'],
    'Enviando…': ['Enviando…', 'Sending…'],
    'Enviando tu mensaje…': ['Enviando a túa mensaxe…', 'Sending your message…'],
    '✓ Mensaje enviado. Te responderemos en 24–48h.': ['✓ Mensaxe enviada. Responderémosche en 24–48 h.', '✓ Message sent. We will reply within 24–48 hours.'],
    'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos a wavefestgalicia@gmail.com':
      ['Non se puido enviar a mensaxe. Téntao de novo ou escríbenos a wavefestgalicia@gmail.com', 'Your message could not be sent. Please try again or email us at wavefestgalicia@gmail.com'],
    'Tu nombre': ['O teu nome', 'Your name'],
    'Cuéntanos en qué podemos ayudarte…': ['Cóntanos en que podemos axudarte…', 'Tell us how we can help…'],

    // ---- Pie y botón fijo
    '31 julio 2027 · Corcubión': ['31 xullo 2027 · Corcubión', '31 July 2027 · Corcubión'],
    'Información legal y de atención al público': ['Información legal e de atención ao público', 'Legal information and customer service (in Spanish)'],
    'Información legal completa': ['Información legal completa', 'Full legal information'],
    'Aviso Legal': ['Aviso legal', 'Legal notice'],
    'Privacidad': ['Privacidade', 'Privacy'],
    'Condiciones de Compra': ['Condicións de compra', 'Terms of purchase'],
    'Reclamaciones': ['Reclamacións', 'Complaints'],

    // ---- Accesibilidad (textos ocultos para lectores de pantalla)
    'Principal': ['Principal', 'Main'],
    'Abrir menú': ['Abrir menú', 'Open menu'],
    'Cerrar menú': ['Pechar menú', 'Close menu'],
    'Abrir la ubicación de WAVE FEST en Google Maps': ['Abrir a localización do WAVE FEST en Google Maps', 'Open the WAVE FEST location in Google Maps'],
    'Idioma': ['Idioma', 'Language']
  };

  // Textos con partes variables
  var PATTERNS = [
    [/^Acceso (\d+)$/, ['Acceso $1', 'Access $1']],
    [/^Artista (\d+)$/, ['Artista $1', 'Artist $1']],
    [/^Instagram de (.+)$/, ['Instagram de $1', '$1 on Instagram']],
    [/^Tramo (\d+) · A la venta$/, ['Tramo $1 · Á venda', 'Tier $1 · On sale']],
    [/^Precio tramo (\d+)$/, ['Prezo tramo $1', 'Tier $1 price']],
    [/^\+(\d+)$/, ['+$1', '+$1']]
  ];

  var META = {
    title: ['WAVE FEST Galicia 2027 · Festival de música urbana e electrónica · Corcubión', 'WAVE FEST Galicia 2027 · Urban & electronic music festival · Corcubión, Spain'],
    description: ['WAVE FEST Galicia 2027: festival de música urbana e electrónica na Costa da Morte. 31 de xullo de 2027 en Corcubión, a carón de Cee e Fisterra. Entradas desde 16 €.',
                  'WAVE FEST Galicia 2027: urban and electronic music festival on the Costa da Morte, Spain. 31 July 2027 in Corcubión, next to Cee and Fisterra. Tickets from €16.']
  };

  var LANGS = ['es', 'gl', 'en'];
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var current = 'es';
  var applying = false;

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function tr(es) {
    if (current === 'es') return null;
    var i = current === 'gl' ? 0 : 1;
    var k = norm(es);
    if (T[k]) return T[k][i];
    for (var p = 0; p < PATTERNS.length; p++) {
      if (PATTERNS[p][0].test(k)) return k.replace(PATTERNS[p][0], PATTERNS[p][1][i]);
    }
    return null;
  }

  function doText(node) {
    var parent = node.parentElement;
    if (!parent || parent.closest('script,style,.lang-switch')) return;
    if (node.__es === undefined || (node.nodeValue !== node.__shown)) node.__es = node.nodeValue;
    var es = node.__es;
    if (!norm(es)) return;
    var t = tr(es);
    var out = t === null ? es : es.replace(es.trim(), function () { return t; });
    if (node.nodeValue !== out) node.nodeValue = out;
    node.__shown = out;
  }

  function doAttrs(el) {
    for (var a = 0; a < ATTRS.length; a++) {
      var name = ATTRS[a];
      if (!el.hasAttribute || !el.hasAttribute(name)) continue;
      var key = '__es_' + name, shownKey = '__shown_' + name;
      var val = el.getAttribute(name);
      if (el[key] === undefined || val !== el[shownKey]) el[key] = val;
      var t = tr(el[key]);
      var out = t === null ? el[key] : t;
      if (val !== out) el.setAttribute(name, out);
      el[shownKey] = out;
    }
  }

  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    if (root.closest && root.closest('script,style')) return;
    doAttrs(root);
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) doText(n); else doAttrs(n);
    }
  }

  function apply() {
    applying = true;
    document.documentElement.lang = current;
    walk(document.body);
    var i = current === 'gl' ? 0 : 1;
    if (!document.__esTitle) document.__esTitle = document.title;
    document.title = current === 'es' ? document.__esTitle : META.title[i];
    var md = document.querySelector('meta[name="description"]');
    if (md) {
      if (!md.__es) md.__es = md.getAttribute('content');
      md.setAttribute('content', current === 'es' ? md.__es : META.description[i]);
    }
    // SEO: cada idioma tiene su propia URL (?lang=gl / ?lang=en) y se declara como canónica
    var base = 'https://wavefest.es/';
    var canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute('href', current === 'es' ? base : base + '?lang=' + current);
    var ogu = document.querySelector('meta[property="og:url"]');
    if (ogu) ogu.setAttribute('content', current === 'es' ? base : base + '?lang=' + current);
    var ogl = document.querySelector('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', { es: 'es_ES', gl: 'gl_ES', en: 'en_GB' }[current]);
    // Enlaces a las páginas en gallego (gl/...) cuando la web está en gallego
    var sub = document.querySelectorAll('a[data-gl]');
    for (var k = 0; k < sub.length; k++) {
      if (!sub[k].hasAttribute('data-es')) sub[k].setAttribute('data-es', sub[k].getAttribute('href'));
      sub[k].setAttribute('href', sub[k].getAttribute(current === 'gl' ? 'data-gl' : 'data-es'));
    }
    var btns = document.querySelectorAll('.lang-switch button');
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute('aria-pressed', btns[b].getAttribute('data-lang') === current ? 'true' : 'false');
    }
    applying = false;
  }

  function setLang(l, save) {
    if (LANGS.indexOf(l) < 0) l = 'es';
    current = l;
    apply();
    if (save) {
      try { localStorage.setItem('wavefest_lang', l); } catch (e) {}
      try {
        var u = new URL(location.href);
        if (l === 'es') u.searchParams.delete('lang'); else u.searchParams.set('lang', l);
        history.replaceState(null, '', u.toString());
      } catch (e) {}
    }
  }

  function initial() {
    try {
      var q = new URL(location.href).searchParams.get('lang');
      if (q && LANGS.indexOf(q) >= 0) return q;
    } catch (e) {}
    try {
      var s = localStorage.getItem('wavefest_lang');
      if (s && LANGS.indexOf(s) >= 0) return s;
    } catch (e) {}
    // Buscadores y bots: siempre castellano en la URL principal (Googlebot navega en inglés)
    if (/bot|crawl|spider|slurp|lighthouse|facebookexternalhit|whatsapp|telegram|preview/i.test(navigator.userAgent || '')) return 'es';
    var n = (navigator.language || 'es').slice(0, 2).toLowerCase();
    if (n === 'gl') return 'gl';
    if (n === 'es' || n === 'ca' || n === 'eu' || n === 'pt') return 'es';
    return 'en';
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang-switch button');
    if (!b) return;
    e.preventDefault();
    setLang(b.getAttribute('data-lang'), true);
  });

  // Traducir también lo que se carga después (cartel, patrocinadores, precios, formulario)
  if ('MutationObserver' in window) {
    new MutationObserver(function (muts) {
      if (applying || current === 'es') return;
      applying = true;
      for (var m = 0; m < muts.length; m++) {
        var mu = muts[m];
        if (mu.type === 'childList') {
          for (var a = 0; a < mu.addedNodes.length; a++) walk(mu.addedNodes[a]);
        } else if (mu.type === 'characterData') {
          doText(mu.target);
        } else if (mu.type === 'attributes') {
          doAttrs(mu.target);
        }
      }
      applying = false;
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  setLang(initial(), false);
})();
