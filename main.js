// ORM Lens — landing statica (nessun login/registrazione)

const translations = {
  it: {
    nav_home: 'Home',
    nav_problem: 'Problema',
    nav_solution: 'Soluzione',
    nav_pricing: 'Prezzi',
    nav_contact: 'Contatti',

    hero_eyebrow: 'MONITORAGGIO REPUTAZIONALE',
    hero_line1: 'Una',
    hero_word1: 'LENTE',
    hero_line2: 'sulla tua',
    hero_word2: 'REPUTAZIONE',
    hero_sub: 'Individuiamo, analizziamo e documentiamo tutto ciò che il web dice di te, prima che sia il web a raccontare la tua storia al posto tuo.',
    hero_cta: 'Scopri come funziona',
    hero_status: 'STATO: ATTIVO',

    problem_eyebrow: 'SEGNALE',
    problem_heading: 'ESPOSIZIONE',
    problem_body: 'Una sola informazione inesatta, un articolo pubblicato senza il giusto contesto: basta poco perché una reputazione costruita in anni di lavoro venga messa in discussione. Anche quando i fatti dimostrano la verità, il web ricorda il titolo che ha fatto rumore, non la smentita arrivata dopo. Per questo proteggere la propria reputazione online è una necessità.',

    solution_eyebrow: 'RISPOSTA',
    solution_heading: 'COSA FACCIAMO',
    solution_point1: 'Monitoriamo il tuo nome sul web',
    solution_point2: "Analizziamo ogni contenuto con l'intelligenza artificiale",
    solution_point3: 'Individuiamo profili diffamatori e il reale impatto reputazionale',

    pricing_eyebrow: 'PIANI',
    pricing_title: 'PREZZI',
    pricing_subtitle: 'Scegli il livello di sorveglianza adatto alla tua esposizione.',

    plan1_name: 'Report Singolo',
    plan1_desc: "Analisi puntuale su un singolo cliente, per una valutazione mirata dell'esposizione reputazionale online.",
    plan1_price: '499€',
    plan1_f1: 'Riassunto dei contenuti',
    plan1_f2: "Analisi dell'impatto reputazionale",
    plan1_f3: 'Pre-screening diffamatorio',

    plan2_badge: 'Più scelto',
    plan2_name: 'Licenza software',
    plan2_desc: 'Installa il software per avere totale controllo sul monitoraggio reputazionale dei tuoi clienti.',
    plan2_price: '€9999/anno',
    plan2_f1: 'Completo accesso al software',
    plan2_f2: 'Report senza limiti',
    plan2_f3: 'Continuo monitoraggio della reputazione',

    plan3_name: 'Custom',
    plan3_desc: 'Per esigenze che vanno oltre i piani standard: monitoraggi ad alta frequenza, più clienti, periodi prolungati o workflow personalizzati.',
    plan3_price: 'Su richiesta',
    plan3_f1: 'Frequenza dei report configurabile',
    plan3_f2: 'Gestione di più clienti o pratiche',
    plan3_f3: 'Servizio costruito sulle tue necessità',

    plan_cta: 'Richiedi info',

    contact_eyebrow: 'CONTATTI',
    contact_subtitle: 'Parliamone. La tua reputazione non aspetta.',
    contact_email_row_label: 'Email',
    contact_hours_label: 'Orari',
    contact_hours_value: 'Lun–Ven, 9:00–18:00',
    contact_response_label: 'Tempo di risposta',
    contact_response_value: 'Entro 24 ore lavorative',

    footer_copy: '© 2026 ORM Lens. Tutti i diritti riservati.'
  },
  en: {
    nav_home: 'Home',
    nav_problem: 'Problem',
    nav_solution: 'Solution',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',

    hero_eyebrow: 'REPUTATION MONITORING',
    hero_line1: 'A',
    hero_word1: 'LENS',
    hero_line2: 'on your',
    hero_word2: 'REPUTATION',
    hero_sub: 'We find, analyze and document everything the web says about you, before the web gets to tell your story for you.',
    hero_cta: 'See how it works',
    hero_status: 'STATUS: ACTIVE',

    problem_eyebrow: 'SIGNAL',
    problem_heading: 'EXPOSURE',
    problem_body: 'It only takes one inaccurate claim or a poorly informed article for a reputation built over a lifetime to be called into question. Even when the facts ultimately clear your name, the internet tends to remember the headline that spread first, not the truth that arrived later. That is why protecting your online reputation is essential.',

    solution_eyebrow: 'RESPONSE',
    solution_heading: 'WHAT WE DO',
    solution_point1: 'We monitor your name across the web',
    solution_point2: 'We analyze every piece of content with AI',
    solution_point3: 'We identify defamatory profiles and the real reputational impact',

    pricing_eyebrow: 'PLANS',
    pricing_title: 'PRICING',
    pricing_subtitle: 'Choose the level of surveillance that matches your exposure.',

    plan1_name: 'Single Report',
    plan1_desc: 'A one-time analysis for a single client, providing a targeted assessment of their online reputation exposure.',
    plan1_price: '€499',
    plan1_f1: 'Content summary',
    plan1_f2: 'Reputational impact analysis',
    plan1_f3: 'Defamation pre-screening',

    plan2_badge: 'Most Popular',
    plan2_name: 'Software license',
    plan2_desc: 'Download the software for total control over your client reputation monitoring.',
    plan2_price: '€9999/year',
    plan2_f1: 'Complete software access',
    plan2_f2: 'Unlimited reports',
    plan2_f3: 'Continuous reputation monitoring',

    plan3_name: 'Custom',
    plan3_desc: 'For needs that go beyond our standard plans: high-frequency monitoring, multiple clients, extended engagements, or customized workflows.',
    plan3_price: 'On Request',
    plan3_f1: 'Configurable reporting frequency',
    plan3_f2: 'Management of multiple clients or cases',
    plan3_f3: 'Service tailored to your needs',

    plan_cta: 'Request info',

    contact_eyebrow: 'CONTACT',
    contact_subtitle: 'Let’s talk. Your reputation can’t wait.',
    contact_email_row_label: 'Email',
    contact_hours_label: 'Hours',
    contact_hours_value: 'Mon–Fri, 9am–6pm',
    contact_response_label: 'Response time',
    contact_response_value: 'Within 24 business hours',

    footer_copy: '© 2026 ORM Lens. All rights reserved.'
  }
}

let lang = 'it'

function t(key) {
  return translations[lang][key] ?? key
}

/* ---------- Lingua IT / EN ---------- */
function applyLang() {
  document.documentElement.lang = lang
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n)
  })
  document.querySelectorAll('.lang_option').forEach((el) => {
    el.classList.toggle('is-active', el.dataset.lang === lang)
  })
}

document.getElementById('langSwitch').addEventListener('click', () => {
  lang = lang === 'it' ? 'en' : 'it'
  applyLang()
})

/* ---------- Navbar: sfondo allo scroll ---------- */
const navbar = document.getElementById('navbar')
function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 20)
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

/* ---------- Menu mobile (burger) ---------- */
const burger = document.getElementById('burger')
const navLinks = document.getElementById('navLinks')

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open')
  burger.classList.toggle('is-open', open)
  burger.setAttribute('aria-expanded', String(open))
})

navLinks.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('is-open')
    burger.classList.remove('is-open')
    burger.setAttribute('aria-expanded', 'false')
  })
})

/* ---------- Animazioni di comparsa ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.15 })

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item))