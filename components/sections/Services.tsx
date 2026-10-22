const services = [
  {
    icon: "🎨",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Création de logo",
    desc: "Un logo simple, moderne et adapté à votre activité, utilisable sur tous vos supports.",
    className: "levitate",
  },
  {
    icon: "💻",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Création de site internet",
    desc: "Nous créons des sites internet modernes, rapides et adaptés à tous les écrans. Chaque site est conçu pour offrir une navigation claire et faciliter la prise de contact.",
    className: "levitate-2",
  },
  {
    icon: "🔧",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Maintenance du site",
    desc: "Sécurité, mises à jour et performance pour un site fiable et toujours disponible.",
    className: "levitate-3",
  },
  {
    icon: "📱",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Posts pour réseaux sociaux",
    desc: "Des visuels professionnels et des publications sur mesure pour valoriser votre activité sur les réseaux sociaux.",
    className: "levitate-2",
  },
  {
    icon: "🔍",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "SEO",
    desc: "Améliorez votre référencement sur Google et attirez du trafic qualifié vers votre site.",
    className: "levitate",
  },
  {
    icon: "💳",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Carte de fidélité numérique",
    desc: "Fidélisez vos clients grâce à une carte numérique pratique, accessible depuis leur smartphone, sans carte papier.",
    className: "levitate-3",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="pill-badge mb-6" style={{ display: "inline-flex" }}>
            <span aria-hidden>🛠️</span> Services
          </span>
          <h2 className="font-black tracking-tight text-white text-[clamp(2.05rem,9vw,3.15rem)] leading-[1.12] md:text-[clamp(2.5rem,6vw,5rem)] md:leading-[1.05]">
            Des solutions{" "}
            <span className="text-purple" style={{ textShadow: "0 0 40px rgba(121,54,163,.66)" }}>
              complètes
            </span>
          </h2>
          <p className="mt-6 text-slate-300/90 text-base md:text-lg">
            Nous créons et améliorons votre présence en ligne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className={`station-card mobile-service-card ${s.className}`}>
              <div className="mb-4 flex items-center gap-3 md:block">
                <div className="icon-tile shrink-0 md:mb-5" style={s.iconStyle}>{s.icon}</div>
                <h3 className="text-white font-bold text-[17px] md:text-lg">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-300/85 text-sm leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="mobile-service-link mt-5 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-light hover:text-white transition-colors"
              >
                En savoir plus →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
