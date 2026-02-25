/**
 * Localization & RTL Script
 * Handles language switching, RTL mode, and dynamic translation
 * Includes Google Translate detection via MutationObserver & AI
 */

// Current language tracker for auto-detection
let currentLanguage = 'en';
let translationObserver = null;

// Translation Dictionary
const translations = {
  en: {
    title: "Intel Sustainability Timeline — Template",
    sustainability: "Sustainability",
    subscribe: "Subscribe",
    learnMore: "Learn More",
    heroTitle: "Sustainability Through The Ages",
    heroDesc: "Explore Intel's journey through time. A visual timeline of key milestones and targets toward a more sustainable future.",
    featuresTitle: "Our Sustainability Pillars",
    
    // Features
    innovation: "Innovation",
    innovationDesc: "Driving technological advancement to create more efficient and sustainable solutions for tomorrow.",
    environment: "Environment",
    environmentDesc: "Committed to reducing our carbon footprint and protecting the planet for future generations.",
    community: "Community",
    communityDesc: "Empowering communities through education, jobs, and programs that make a real difference.",
    
    // Modal
    subscribeTitle: "Join Our Sustainability Newsletter",
    subscribeDesc: "Stay updated with the latest news and updates on our sustainability initiatives.",
    emailLabel: "Email Address",
    emailHelp: "We'll never share your email with anyone else.",
    fullNameLabel: "Full Name",
    agreeTerms: "I agree to receive updates about sustainability initiatives",
    submitBtn: "Subscribe Now",
    
    // Footer
    aboutIntel: "About Intel",
    footerAbout: "Intel is committed to delivering innovative computing solutions that drive sustainability and create positive impact globally.",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About",
    contact: "Contact",
    privacy: "Privacy Policy",
    followUs: "Follow Us",
    copyright: "© 2026 Intel Corporation. All rights reserved.",
    
    // Timeline Milestones
    milestone_1968_title: "Establishment",
    milestone_1968_desc: "Robert Noyce and Gordon Moore form a new company that would let them pursue innovation on their own terms.",
    milestone_1971_title: "World's First",
    milestone_1971_desc: "Intel introduces the world's first electronically programmable microprocessor, the 4004.",
    milestone_1978_title: "10-Year Anniversary",
    milestone_1978_desc: "Intel launches one landmark processor, the 8086 and initiates a new fellowship program to foster still more R&D",
    milestone_1979_title: "Fame & Fortune",
    milestone_1979_desc: "Intel makes its debut on the Fortune 500 list",
    milestone_1983_title: "Comeback",
    milestone_1983_desc: "Intel bounces back from the two-year recession by opening its largest fabrication facility up to that point, powering the landmark Compaq Portable computer and introducing new products that would lead revenues to exceed $1 billion for the first time in company history.",
    milestone_1986_title: "Hardship Again",
    milestone_1986_desc: "Intel faces the toughest economic year in its history as the semiconductor industry remains depressed. However, the company lays the groundwork for a more prosperous future, entering the market for ASICs and developing products with record-setting capabilities",
    milestone_1992_title: "The Biggest",
    milestone_1992_desc: "Intel is declared the biggest semiconductor manufacturer in the U.S., issued its first cash dividend to stockholders and increased its presence in retail outlets all in the same year.",
    milestone_1993_title: "Any Volunteers?",
    milestone_1993_desc: "Intel honored its 25th anniversary by launching its employee volunteer program, Intel Involved, which brought a new structure and permanence to employees' efforts to help their communities",
    milestone_1995_title: "Living on the Web",
    milestone_1995_desc: "Intel launches its first website to help customers learn more about the company and its products.",
    milestone_2005_title: "Another First",
    milestone_2005_desc: "Intel releases its first multicore processor, dramatically advancing the computing power available in a single package.",
    milestone_2006_title: "Brand New Look",
    milestone_2006_desc: "Intel adopts a new logo — the company's biggest branding change since 1969 — signifying the company's commitment to pushing the envelope of what was possible from technology.",
    milestone_2011_title: "Plus Ultra",
    milestone_2011_desc: "Intel forms a new Mobile Communications Group, introduces the first generation of Thunderbolt technology and potentially saves the PC with the Ultrabook.",
    milestone_2016_title: "Aerial Prowess",
    milestone_2016_desc: "Intel's launches its first commercially available drone, the Falcon 8+, which offers easy remote access to areas humans would have trouble reaching.",
    milestone_2020_title: "Pandemic Heroes",
    milestone_2020_desc: "Intel releases the 11th generation Intel Core processor — and emphasizes ways its existing products could help the millions of people suddenly working and learning from home during the pandemic."
  },
  
  ar: {
    title: "خط زمني لاستدامة Intel — قالب",
    sustainability: "الاستدامة",
    subscribe: "اشتراك",
    learnMore: "تعرف على المزيد",
    heroTitle: "الاستدامة عبر العصور",
    heroDesc: "استكشف رحلة Intel عبر الزمن. خط زمني مرئي للمعالم الرئيسية والأهداف نحو مستقبل أكثر استدامة.",
    featuresTitle: "أعمدة الاستدامة لدينا",
    
    // Features
    innovation: "الابتكار",
    innovationDesc: "دفع التطور التكنولوجي لإنشاء حلول أكثر كفاءة واستدامة للغد.",
    environment: "البيئة",
    environmentDesc: "ملتزمة بتقليل بصمتنا الكربونية وحماية الكوكب للأجيال القادمة.",
    community: "المجتمع",
    communityDesc: "تمكين المجتمعات من خلال التعليم والوظائف والبرامج التي تحدث فرقاً حقيقياً.",
    
    // Modal
    subscribeTitle: "انضم إلى نشرتنا الإخبارية للاستدامة",
    subscribeDesc: "ابقَ محدثاً بأحدث الأخبار والتحديثات حول مبادراتنا في مجال الاستدامة.",
    emailLabel: "عنوان البريد الإلكتروني",
    emailHelp: "لن نشارك بريدك الإلكتروني مع أي شخص آخر.",
    fullNameLabel: "الاسم الكامل",
    agreeTerms: "أوافق على تلقي التحديثات حول مبادرات الاستدامة",
    submitBtn: "اشترك الآن",
    
    // Footer
    aboutIntel: "حول Intel",
    footerAbout: "Intel ملتزمة بتقديم حلول الحوسبة المبتكرة التي تدفع الاستدامة وتخلق تأثيراً إيجابياً حول العالم.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    about: "حول",
    contact: "اتصل",
    privacy: "سياسة الخصوصية",
    followUs: "تابعنا",
    copyright: "© 2026 Intel Corporation. جميع الحقوق محفوظة.",
    
    // Timeline Milestones
    milestone_1968_title: "التأسيس",
    milestone_1968_desc: "يؤسس روبرت نويس وجوردون مور شركة جديدة تسمح لهما بمتابعة الابتكار بشروطهما الخاصة.",
    milestone_1971_title: "الأول في العالم",
    milestone_1971_desc: "تقدم Intel أول مجهز دقيق قابل للبرمجة إلكترونياً في العالم، وهو 4004.",
    milestone_1978_title: "الذكرى السنوية العاشرة",
    milestone_1978_desc: "تطلق Intel معالج 8086 الرائد وتطلق برنامج زمالة جديد لتعزيز المزيد من البحث والتطوير",
    milestone_1979_title: "الشهرة والثروة",
    milestone_1979_desc: "تدخل Intel قائمة Fortune 500",
    milestone_1983_title: "العودة",
    milestone_1983_desc: "تتعافى Intel من الركود الذي استمر سنتين بافتتاح أكبر منشأة تصنيع لها حتى تلك النقطة، مما يدعم كمبيوتر Compaq المحمول الفريد ويعرّف منتجات جديدة ستؤدي إلى تجاوز الإيرادات 1 مليار دولار لأول مرة في تاريخ الشركة.",
    milestone_1986_title: "الشدة مرة أخرى",
    milestone_1986_desc: "تواجه Intel أسوأ سنة اقتصادية في تاريخها حيث يبقى قطاع أشباه الموصلات مكبوتاً، لكن الشركة تضع الأساس لمستقبل أكثر ازدهاراً، وتدخل سوق ASICs وتطور منتجات بقدرات رائدة",
    milestone_1992_title: "الأكبر",
    milestone_1992_desc: "تُعلن Intel عن أنها أكبر صانع أشباه موصلات في الولايات المتحدة، وأصدرت أول توزيع نقدي للمساهمين وزيادة وجودها في المتاجر في نفس العام.",
    milestone_1993_title: "هل هناك متطوعون؟",
    milestone_1993_desc: "احتفلت Intel بالذكرى السنوية الخمسين لها بإطلاق برنامج التطوع للموظفين، Intel Involved، الذي أضفى هيكلاً وديمومة جديدة على جهود الموظفين في مساعدة مجتمعاتهم",
    milestone_1995_title: "العيش على الويب",
    milestone_1995_desc: "تطلق Intel موقعها الإلكتروني الأول لمساعدة العملاء على معرفة المزيد عن الشركة ومنتجاتها.",
    milestone_2005_title: "أول آخر",
    milestone_2005_desc: "تطلق Intel أول معالج متعدد النوى لها، مما يعزز بشكل كبير قوة الحوسبة المتاحة في حزمة واحدة.",
    milestone_2006_title: "مظهر جديد تماماً",
    milestone_2006_desc: "تعتمد Intel شعاراً جديداً - أكبر تغيير في العلامة التجارية للشركة منذ عام 1969 - يعكس التزام الشركة بدفع حدود ما يمكن تحقيقه من التكنولوجيا.",
    milestone_2011_title: "Plus Ultra",
    milestone_2011_desc: "تشكل Intel مجموعة الاتصالات المحمولة الجديدة، وتقدم الجيل الأول من تكنولوجيا Thunderbolt وتحتمل إنقاذ الكمبيوتر الشخصي مع Ultrabook.",
    milestone_2016_title: "براعة جوية",
    milestone_2016_desc: "تطلق Intel طائرتها بدون طيار الأولى التي تتمتع بتوفر تجاري، Falcon 8+، التي توفر وصولاً سهلاً عن بُعد إلى المناطق التي قد يواجه الإنسان صعوبة في الوصول إليها.",
    milestone_2020_title: "أبطال الجائحة",
    milestone_2020_desc: "تطلق Intel معالج Intel Core من الجيل الحادي عشر - وتؤكد الطرق التي يمكن لمنتجاتها الحالية أن تساعد ملايين الأشخاص الذين عملوا ودرسوا فجأة من المنزل أثناء الجائحة."
  },
  
  es: {
    title: "Cronología de Sostenibilidad de Intel — Plantilla",
    sustainability: "Sostenibilidad",
    subscribe: "Suscribirse",
    learnMore: "Más información",
    heroTitle: "Sostenibilidad a Través de los Tiempos",
    heroDesc: "Explora el viaje de Intel a través del tiempo. Una cronología visual de hitos clave y objetivos hacia un futuro más sostenible.",
    featuresTitle: "Nuestros Pilares de Sostenibilidad",
    
    // Features
    innovation: "Innovación",
    innovationDesc: "Impulsando el avance tecnológico para crear soluciones más eficientes y sostenibles para el mañana.",
    environment: "Ambiente",
    environmentDesc: "Comprometidos a reducir nuestra huella de carbono y proteger el planeta para futuras generaciones.",
    community: "Comunidad",
    communityDesc: "Empoderando comunidades a través de educación, empleos y programas que hacen una diferencia real.",
    
    // Modal
    subscribeTitle: "Únete a nuestro Boletín de Sostenibilidad",
    subscribeDesc: "Manténte actualizado con las últimas noticias y actualizaciones sobre nuestras iniciativas de sostenibilidad.",
    emailLabel: "Dirección de Correo Electrónico",
    emailHelp: "Nunca compartiremos tu correo electrónico con nadie más.",
    fullNameLabel: "Nombre Completo",
    agreeTerms: "Estoy de acuerdo en recibir actualizaciones sobre iniciativas de sostenibilidad",
    submitBtn: "Suscribirse Ahora",
    
    // Footer
    aboutIntel: "Acerca de Intel",
    footerAbout: "Intel se compromete a entregar soluciones de computación innovadoras que impulsen la sostenibilidad y creen un impacto positivo a nivel mundial.",
    quickLinks: "Enlaces Rápidos",
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Política de Privacidad",
    followUs: "Síguenos",
    copyright: "© 2026 Intel Corporation. Todos los derechos reservados.",
    
    // Timeline Milestones
    milestone_1968_title: "Establecimiento",
    milestone_1968_desc: "Robert Noyce y Gordon Moore forman una nueva empresa que les permitiría perseguir la innovación según sus propios términos.",
    milestone_1971_title: "Lo Primero del Mundo",
    milestone_1971_desc: "Intel introduce el primer microprocesador programable electrónicamente del mundo, el 4004.",
    milestone_1978_title: "Décimo Aniversario",
    milestone_1978_desc: "Intel lanza el procesador emblemático 8086 e inicia un nuevo programa de becas para fomentar más investigación y desarrollo",
    milestone_1979_title: "Fama y Fortuna",
    milestone_1979_desc: "Intel hace su debut en la lista Fortune 500",
    milestone_1983_title: "Regreso",
    milestone_1983_desc: "Intel se recupera de la recesión de dos años abriendo su mayor instalación de fabricación hasta ese momento, impulsando la computadora portátil Compaq histórica e introduciendo nuevos productos que llevarían los ingresos a superar los $1 mil millones por primera vez en la historia de la empresa.",
    milestone_1986_title: "Dificultad Nuevamente",
    milestone_1986_desc: "Intel enfrenta el año económico más difícil de su historia a medida que la industria de semiconductores permanece deprimida. Sin embargo, la empresa sienta las bases para un futuro más próspero, entrando en el mercado de ASIC y desarrollando productos con capacidades récord",
    milestone_1992_title: "El Más Grande",
    milestone_1992_desc: "Intel es declarado el fabricante de semiconductores más grande de los EE.UU., emitió su primer dividendo en efectivo a los accionistas e incrementó su presencia en las tiendas minoristas en el mismo año.",
    milestone_1993_title: "¿Hay Voluntarios?",
    milestone_1993_desc: "Intel honró su 25 aniversario lanzando su programa de voluntarios de empleados, Intel Involved, que aportó una nueva estructura y permanencia a los esfuerzos de los empleados para ayudar a sus comunidades",
    milestone_1995_title: "Viviendo en la Web",
    milestone_1995_desc: "Intel lanza su primer sitio web para ayudar a los clientes a aprender más sobre la empresa y sus productos.",
    milestone_2005_title: "Otro Primero",
    milestone_2005_desc: "Intel lanza su primer procesador de múltiples núcleos, mejorando dramáticamente la potencia informática disponible en un solo paquete.",
    milestone_2006_title: "Nuevo Aspecto",
    milestone_2006_desc: "Intel adopta un nuevo logotipo — el cambio de marca más grande de la empresa desde 1969 — significando el compromiso de la empresa de empujar los límites de lo que era posible con la tecnología.",
    milestone_2011_title: "Plus Ultra",
    milestone_2011_desc: "Intel forma un nuevo Grupo de Comunicaciones Móviles, introduce la primera generación de tecnología Thunderbolt y potencialmente salva la PC con Ultrabook.",
    milestone_2016_title: "Destreza Aérea",
    milestone_2016_desc: "Intel lanza su primer dron disponible comercialmente, el Falcon 8+, que ofrece fácil acceso remoto a áreas donde los humanos tendrían dificultades para llegar.",
    milestone_2020_title: "Héroes de la Pandemia",
    milestone_2020_desc: "Intel lanza el procesador Intel Core de 11ª generación — y enfatiza las formas en que sus productos existentes podrían ayudar a los millones de personas que trabajaban repentinamente y aprendían desde casa durante la pandemia."
  },
  
  fr: {
    title: "Chronologie de la Durabilité d'Intel — Modèle",
    sustainability: "Durabilité",
    subscribe: "S'abonner",
    learnMore: "En savoir plus",
    heroTitle: "La Durabilité à Travers les Âges",
    heroDesc: "Explorez le parcours d'Intel à travers le temps. Une chronologie visuelle des étapes clés et des objectifs vers un avenir plus durable.",
    featuresTitle: "Nos Piliers de Durabilité",
    
    // Features
    innovation: "Innovation",
    innovationDesc: "Stimuler l'avancement technologique pour créer des solutions plus efficaces et durables pour demain.",
    environment: "Environnement",
    environmentDesc: "Engagés à réduire notre empreinte carbone et à protéger la planète pour les générations futures.",
    community: "Communauté",
    communityDesc: "Responsabiliser les communautés par l'éducation, l'emploi et des programmes qui font une réelle différence.",
    
    // Modal
    subscribeTitle: "Rejoignez Notre Bulletin de Durabilité",
    subscribeDesc: "Restez informé des dernières nouvelles et mises à jour sur nos initiatives en matière de durabilité.",
    emailLabel: "Adresse E-mail",
    emailHelp: "Nous ne partagerons jamais votre email avec quelqu'un d'autre.",
    fullNameLabel: "Nom Complet",
    agreeTerms: "J'accepte de recevoir des mises à jour sur les initiatives de durabilité",
    submitBtn: "S'abonner Maintenant",
    
    // Footer
    aboutIntel: "À Propos d'Intel",
    footerAbout: "Intel s'engage à fournir des solutions informatiques innovantes qui favorisent la durabilité et créent un impact positif à l'échelle mondiale.",
    quickLinks: "Liens Rapides",
    home: "Accueil",
    about: "À Propos",
    contact: "Contact",
    privacy: "Politique de Confidentialité",
    followUs: "Suivez-nous",
    copyright: "© 2026 Intel Corporation. Tous droits réservés.",
    
    // Timeline Milestones
    milestone_1968_title: "Établissement",
    milestone_1968_desc: "Robert Noyce et Gordon Moore forment une nouvelle entreprise qui leur permettrait de poursuivre l'innovation selon leurs propres conditions.",
    milestone_1971_title: "Premier au Monde",
    milestone_1971_desc: "Intel introduit le premier microprocesseur programmable électroniquement au monde, le 4004.",
    milestone_1978_title: "Dixième Anniversaire",
    milestone_1978_desc: "Intel lance le processeur emblématique 8086 et crée un nouveau programme de bourses pour encourager davantage la recherche et développement",
    milestone_1979_title: "Célébrité et Fortune",
    milestone_1979_desc: "Intel fai ses débuts dans la liste Fortune 500",
    milestone_1983_title: "Retour",
    milestone_1983_desc: "Intel se redresse après la récession de deux ans en ouvrant son plus grand établissement de fabrication jusque-là, alimentant l'ordinateur portable Compaq historique et introduisant de nouveaux produits qui porteraient les revenus à dépasser $1 milliard pour la première fois dans l'histoire de l'entreprise.",
    milestone_1986_title: "Nouvelles Difficultés",
    milestone_1986_desc: "Intel connaît l'année économique la plus difficile de son histoire à mesure que l'industrie des semi-conducteurs reste déprimée. Cependant, l'entreprise jette les bases d'un avenir plus prospère, entrant sur le marché des ASIC et développant des produits aux capacités record",
    milestone_1992_title: "Le Plus Grand",
    milestone_1992_desc: "Intel est déclarée le plus grand fabricant de semi-conducteurs d'Amérique, a émis son premier dividende en espèces aux actionnaires et a augmenté sa présence dans les points de vente à la même année.",
    milestone_1993_title: "Y a-t-il des Volontaires?",
    milestone_1993_desc: "Intel a honoré son 25e anniversaire en lançant son programme de bénévolat des employés, Intel Involved, qui a apporté une nouvelle structure et une permanence aux efforts des employés pour aider leurs communautés",
    milestone_1995_title: "Vivre sur le Web",
    milestone_1995_desc: "Intel lance son premier site Web pour aider les clients à en savoir plus sur l'entreprise et ses produits.",
    milestone_2005_title: "Un Autre Premier",
    milestone_2005_desc: "Intel lance son premier processeur multicore, améliorant considérablement la puissance informatique disponible dans un seul package.",
    milestone_2006_title: "Nouveau Look",
    milestone_2006_desc: "Intel adopte un nouveau logo — le plus grand changement de marque de l'entreprise depuis 1969 — signifiant l'engagement de l'entreprise à repousser les limites de ce qui était possible avec la technologie.",
    milestone_2011_title: "Plus Ultra",
    milestone_2011_desc: "Intel forme un nouveau groupe de communications mobiles, introduit la première génération de la technologie Thunderbolt et sauve potentiellement le PC avec Ultrabook.",
    milestone_2016_title: "Prouesse Aérienne",
    milestone_2016_desc: "Intel lance son premier drone disponible commercialement, le Falcon 8+, qui offre un accès distant facile aux zones où les humains auraient du mal à se rendre.",
    milestone_2020_title: "Héros de la Pandémie",
    milestone_2020_desc: "Intel lance le processeur Intel Core de 11e génération — et met l'accent sur les façons dont ses produits existants pourraient aider les millions de personnes qui travaillaient et apprenaient soudainement de chez elles pendant la pandémie."
  }
};

// Feature content for modals
const featureContent = {
  innovation: {
    title: "Innovation & Technology",
    content: "Our commitment to innovation drives every decision at Intel. We invest in cutting-edge research and development to create technologies that not only advance business but also benefit society and the environment. From quantum computing to sustainable materials, we're building a better tomorrow."
  },
  environment: {
    title: "Environmental Commitment",
    content: "We're dedicated to achieving net-zero greenhouse gas emissions and water neutrality in our operations. Our efforts include renewable energy adoption, waste reduction programs, and sustainable manufacturing practices. Every Intel facility is working towards these critical environmental goals."
  },
  community: {
    title: "Community Impact",
    content: "Intel invests in communities where we operate through education programs, workforce development, and charitable initiatives. We believe that sustainable business success requires supporting the people and communities around us. Join us in making a positive impact globally."
  }
};

/**
 * Initialize language from browser settings or localStorage
 */
function initializeLanguage() {
  const savedLang = localStorage.getItem('preferredLanguage');
  const browserLang = navigator.language.split('-')[0];
  const defaultLang = 'en';
  
  // Choose language in order: saved preference > browser language > default
  let currentLang = defaultLang;
  
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else if (translations[browserLang]) {
    currentLang = browserLang;
  }
  
  switchLanguage(currentLang);
}

/**
 * Switch language and apply RTL if needed
 */
function switchLanguage(lang) {
  if (!translations[lang]) {
    console.warn(`Language ${lang} not supported`);
    return;
  }
  
  // Save preference
  localStorage.setItem('preferredLanguage', lang);
  
  // Update current language display
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  
  // Apply RTL for Arabic
  const isRTL = lang === 'ar';
  applyRTL(isRTL);
  
  // Translate all elements
  translatePage(lang);
  
  // Announce language change for accessibility
  announceLanguageChange(lang);
}

/**
 * Apply RTL styling and attributes
 */
function applyRTL(isRTL) {
  const html = document.getElementById('htmlRoot');
  const body = document.getElementById('bodyRoot');
  
  if (isRTL) {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    body.setAttribute('dir', 'rtl');
    document.documentElement.style.direction = 'rtl';
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    body.setAttribute('dir', 'ltr');
    document.documentElement.style.direction = 'ltr';
  }
}

/**
 * Translate all page content
 */
function translatePage(lang) {
  const dictionary = translations[lang];
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (dictionary[key]) {
      if (element.tagName === 'INPUT' && element.type === 'submit') {
        element.value = dictionary[key];
      } else if (element.tagName === 'INPUT' && element.placeholder) {
        element.placeholder = dictionary[key];
      } else if (element.tagName === 'TITLE') {
        element.textContent = dictionary[key];
      } else {
        element.textContent = dictionary[key];
      }
    }
  });
  
  // Update page title
  document.title = dictionary.title;
}

/**
 * Announce language change for screen readers
 */
function announceLanguageChange(lang) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'visually-hidden';
  announcement.textContent = `Language changed to ${lang === 'ar' ? 'Arabic' : lang === 'es' ? 'Spanish' : lang === 'fr' ? 'French' : 'English'}`;
  document.body.appendChild(announcement);
  
  setTimeout(() => announcement.remove(), 1000);
}

/**
 * Set feature content in modal
 */
function setFeatureContent(feature) {
  const content = featureContent[feature];
  if (content) {
    const modalBody = document.getElementById('featureContent');
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Get appropriate content (in real app, this would be translated)
    const isRTL = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    modalBody.innerHTML = `
      <div style="direction: ${isRTL}; text-align: ${isRTL === 'rtl' ? 'right' : 'left'};">
        <h3 class="fw-bold mb-3">${content.title}</h3>
        <p class="text-muted lh-lg">${content.content}</p>
        <button class="btn btn-primary mt-4" data-bs-dismiss="modal">Close</button>
      </div>
    `;
  }
}

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = document.getElementById('subscribeForm');
  const email = form.getElementById('email').value;
  const fullname = form.getElementById('fullname').value;
  
  // Validate form
  if (!email || !fullname) {
    alert('Please fill in all fields');
    return;
  }
  
  // Store subscription
  const subscription = {
    email,
    fullname,
    date: new Date().toISOString(),
    language: localStorage.getItem('preferredLanguage') || 'en'
  };
  
  // Save to localStorage
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
  subscriptions.push(subscription);
  localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  
  // Show success message
  alert('Thank you for subscribing! Check your email for confirmation.');
  
  // Close modal and reset form
  const modal = bootstrap.Modal.getInstance(document.getElementById('subscribeModal'));
  modal.hide();
  form.reset();
}

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  document.body.prepend(skipLink);
  
  // Add main landmark
  const main = document.querySelector('main');
  if (main) {
    main.id = 'main';
  }
  
  // Ensure all interactive elements are keyboard accessible
  document.querySelectorAll('.btn, a, [role="button"]').forEach(el => {
    if (!el.getAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
    }
  });
  
  // Add focus indicators
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
}

/**
 * Detect language from URL parameter
 */
function detectLanguageFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  if (langParam && translations[langParam]) {
    switchLanguage(langParam);
  }
}

/**
 * DOM Ready - Initialize everything
 */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initializeLanguage();
  initializeAccessibility();
  detectLanguageFromURL();
  
  // Handle form submission
  const subscribeForm = document.getElementById('subscribeForm');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Handle language dropdown
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.textContent.toLowerCase().split(' ')[0];
      // Map common language codes
      const langMap = {
        'english': 'en',
        'العربية': 'ar',
        'español': 'es',
        'français': 'fr'
      };
      // Try to find language code from parent dropdown
      const parent = this.closest('.dropdown-menu');
      const index = Array.from(parent.querySelectorAll('.dropdown-item')).indexOf(this);
      const langs = ['en', 'ar', 'es', 'fr'];
      if (langs[index]) {
        switchLanguage(langs[index]);
      }
    });
  });
  
  // Log initialization complete
  console.log('Intel Localization & Accessibility Script Initialized');
  console.log('Available languages:', Object.keys(translations).join(', '));
  
  // Initialize auto-detection for language changes
  initAutoLanguageDetection();
  initLanguageChangeMonitor();
  
  console.log('🚀 Auto-language detection & RTL sync activated');
  // Initialize attendance features (counts, progress, localStorage)
  if (typeof initializeAttendance === 'function') {
    initializeAttendance();
  }
});

/**
 * Performance monitoring for accessibility
 */
window.addEventListener('load', function() {
  // Check that all images have alt text
  document.querySelectorAll('img').forEach(img => {
    if (!img.getAttribute('alt')) {
      console.warn('Image missing alt text:', img.src);
    }
  });
  
  // Check form labels
  document.querySelectorAll('input').forEach(input => {
    if (input.type !== 'hidden' && !input.getAttribute('aria-label') && !document.querySelector(`label[for="${input.id}"]`)) {
      console.warn('Input missing label:', input.id);
    }
  });
  
  console.log('Accessibility audit complete');
});

// Expose functions globally for onclick handlers
window.switchLanguage = switchLanguage;
window.setFeatureContent = setFeatureContent;

/**
 * Detect language changes automatically (Google Translate, etc.)
 * Uses MutationObserver to watch for DOM changes indicating language switch
 */
function initAutoLanguageDetection() {
  // 1. Listen for Google Translate events
  window.addEventListener('beforeunload', () => {
    const detectedLang = detectGoogleTranslate();
    if (detectedLang && detectedLang !== currentLanguage) {
      currentLanguage = detectedLang;
      localStorage.setItem('preferredLanguage', detectedLang);
    }
  });

  // 2. Use MutationObserver to detect DOM changes from Google Translate
  const observerConfig = {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['lang', 'dir', 'data-translated-lang']
  };

  translationObserver = new MutationObserver((mutations) => {
    // Check if Google Translate applied changes
    const langAttribute = document.documentElement.getAttribute('lang');
    const detectedLang = langAttribute ? langAttribute.split('-')[0] : null;
    
    if (detectedLang && detectedLang !== 'en' && detectedLang !== currentLanguage) {
      console.log(`🌐 Language change detected: ${detectedLang}`);
      currentLanguage = detectedLang;
      
      // Map common language codes
      const langMap = {
        'ar': 'ar', 'es': 'es', 'fr': 'fr', 'en': 'en',
        'zh': 'en', 'ja': 'en', 'de': 'en', 'it': 'en'
      };
      
      const targetLang = langMap[detectedLang] || 'en';
      
      if (translations[targetLang]) {
        console.log(`✅ Applying ${targetLang} translations`);
        applyRTL(targetLang === 'ar');
        translateTimeline(targetLang);
        announceLanguageChange(targetLang);
      }
    }
  });

  // Start observing
  translationObserver.observe(document.documentElement, observerConfig);
  console.log('✓ Auto-language detection enabled');
}

/**
 * Detect if Google Translate has been applied
 */
function detectGoogleTranslate() {
  // Check for Google Translate attributes
  const html = document.documentElement;
  const lang = html.getAttribute('lang');
  const dir = html.getAttribute('dir');
  
  // Check for Google Translate classes
  const hasGoogleTranslate = html.classList.toString().includes('translated');
  
  // Check for Google Translate element
  const hasGoogleElement = !!document.querySelector('[aria-label*="Google Translate"]');
  
  if (hasGoogleTranslate || hasGoogleElement || lang) {
    return lang ? lang.split('-')[0] : null;
  }
  
  return null;
}

/**
 * Dynamically translate timeline content
 */
function translateTimeline(lang) {
  if (!translations[lang]) return;
  
  const dictionary = translations[lang];
  
  // Find all milestone articles
  document.querySelectorAll('.milestone').forEach((milestone, index) => {
    const year = milestone.querySelector('.milestone-year');
    const title = milestone.querySelector('.milestone-title');
    const details = milestone.querySelector('.details');
    
    if (year && title && details) {
      const yearValue = year.textContent.trim();
      const titleKey = `milestone_${yearValue}_title`;
      const descKey = `milestone_${yearValue}_desc`;
      
      // Apply translations
      if (dictionary[titleKey]) {
        title.textContent = dictionary[titleKey];
      }
      
      if (dictionary[descKey]) {
        details.textContent = dictionary[descKey];
      }
      
      // Update year element with lang attribute
      year.setAttribute('lang', lang);
      title.setAttribute('lang', lang);
      details.setAttribute('lang', lang);
    }
  });
  
  console.log(`📅 Timeline translated to ${lang}`);
}

/**
 * Language change monitor - continuous checking for external language changes
 */
function initLanguageChangeMonitor() {
  setInterval(() => {
    const htmlLang = document.documentElement.getAttribute('lang');
    const htmlDir = document.documentElement.getAttribute('dir');
    
    // Detect if language changed externally
    if (htmlLang && htmlLang !== currentLanguage) {
      const detectedLang = htmlLang.split('-')[0];
      
      if (translations[detectedLang]) {
        console.log(`🔄 External language change detected: ${detectedLang}`);
        currentLanguage = detectedLang;
        applyRTL(detectedLang === 'ar');
        translateTimeline(detectedLang);
      }
    }
    
    // Sync RTL with direction attribute
    if (htmlDir && ((htmlDir === 'rtl' && currentLanguage !== 'ar') || (htmlDir === 'ltr' && currentLanguage === 'ar'))) {
      console.log(`↔️ Syncing text direction for ${currentLanguage}`);
      applyRTL(currentLanguage === 'ar');
    }
  }, 2000);
}

/**
 * Enhanced RTL application with direction sync
 */
function applyRTL(isRTL, lang = 'ar') {
  const html = document.getElementById('htmlRoot') || document.documentElement;
  const body = document.getElementById('bodyRoot') || document.body;
  
  if (isRTL) {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', lang);
    body.setAttribute('dir', 'rtl');
    document.documentElement.style.direction = 'rtl';
    document.documentElement.style.textAlign = 'right';
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    body.setAttribute('dir', 'ltr');
    document.documentElement.style.direction = 'ltr';
    document.documentElement.style.textAlign = 'left';
  }
  
  // Trigger RTL-specific styles
  document.body.classList.toggle('rtl-mode', isRTL);
  console.log(`↔️ RTL mode: ${isRTL ? 'ON' : 'OFF'}`);
}

// --------------------------
// Attendance / Check-in Logic
// --------------------------
const ATTENDANCE_KEY = 'attendanceData';
const ATTENDANCE_GOAL = 50;

function initializeAttendance() {
  const form = document.getElementById('checkInForm');
  if (form) form.addEventListener('submit', handleCheckInSubmit);
  loadAttendanceFromStorage();
  updateUIFromData();
}

function loadAttendanceFromStorage() {
  const saved = localStorage.getItem(ATTENDANCE_KEY);
  if (saved) {
    try {
      window.attendanceData = JSON.parse(saved);
    } catch (e) {
      window.attendanceData = { total: 0, teams: { 'Water Wise': 0, 'Net Zero': 0, 'Renewables': 0 }, attendees: [] };
    }
  } else {
    window.attendanceData = { total: 0, teams: { 'Water Wise': 0, 'Net Zero': 0, 'Renewables': 0 }, attendees: [] };
  }
}

function saveAttendanceToStorage() {
  localStorage.setItem(ATTENDANCE_KEY, JSON.stringify(window.attendanceData));
}

function handleCheckInSubmit(e) {
  e.preventDefault();
  const nameEl = document.getElementById('attendeeName');
  const teamEl = document.getElementById('teamSelect');
  if (!nameEl || !teamEl) return;
  const name = nameEl.value.trim();
  const team = teamEl.value;
  if (!name) {
    alert('Please enter a name to check in.');
    return;
  }

  const data = window.attendanceData || { total: 0, teams: { 'Water Wise': 0, 'Net Zero': 0, 'Renewables': 0 }, attendees: [] };
  const entry = { name, team, time: new Date().toISOString() };
  data.attendees.push(entry);
  data.total = data.attendees.length;
  data.teams[team] = (data.teams[team] || 0) + 1;
  window.attendanceData = data;
  saveAttendanceToStorage();
  updateUIFromData();

  // reset form
  e.target.reset();
}

function updateUIFromData() {
  const data = window.attendanceData || { total: 0, teams: {}, attendees: [] };
  const totalEl = document.getElementById('totalCount');
  const waterEl = document.getElementById('waterCount');
  const netEl = document.getElementById('netCount');
  const renewEl = document.getElementById('renewCount');

  if (totalEl) totalEl.textContent = data.total || 0;
  if (waterEl) waterEl.textContent = data.teams['Water Wise'] || 0;
  if (netEl) netEl.textContent = data.teams['Net Zero'] || 0;
  if (renewEl) renewEl.textContent = data.teams['Renewables'] || 0;

  updateProgressBar();
  renderAttendeeList();
  showCelebrationIfNeeded();
}

function renderAttendeeList() {
  const ul = document.getElementById('attendeeList');
  if (!ul) return;
  ul.innerHTML = '';
  const data = window.attendanceData || { attendees: [] };
  // show newest first
  data.attendees.slice().reverse().forEach(att => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    const time = new Date(att.time);
    li.innerHTML = `<div><strong>${escapeHtml(att.name)}</strong> <small class="text-muted">(${escapeHtml(att.team)})</small></div><div class="small text-muted">${time.toLocaleTimeString()}</div>`;
    ul.appendChild(li);
  });
}

function updateProgressBar() {
  const total = (window.attendanceData && window.attendanceData.total) || 0;
  const percent = Math.min(100, Math.round((total / ATTENDANCE_GOAL) * 100));
  const bar = document.getElementById('progressBar');
  if (bar) {
    bar.style.width = percent + '%';
    bar.textContent = percent + '%';
  }
  const txt = document.getElementById('progressText');
  if (txt) txt.textContent = `${total} / ${ATTENDANCE_GOAL}`;
}

function showCelebrationIfNeeded() {
  const total = (window.attendanceData && window.attendanceData.total) || 0;
  const el = document.getElementById('celebration');
  if (!el) return;
  if (total >= ATTENDANCE_GOAL) {
    const winner = getWinningTeamName();
    el.classList.remove('d-none');
    el.innerHTML = `Goal reached! Congratulations to <strong>${escapeHtml(winner)}</strong>! 🎉`;
  } else {
    el.classList.add('d-none');
    el.innerHTML = '';
  }
}

function getWinningTeamName() {
  const teams = (window.attendanceData && window.attendanceData.teams) || {};
  const entries = Object.entries(teams);
  if (entries.length === 0) return '';
  entries.sort((a, b) => b[1] - a[1]);
  const max = entries[0][1];
  const winners = entries.filter(e => e[1] === max).map(e => e[0]);
  return winners.length === 1 ? winners[0] : winners.join(' & ');
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]+/g, function (s) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[s];
  });
}
