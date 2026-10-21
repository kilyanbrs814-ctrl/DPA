const services = [
  {
    icon: "🎨",
    iconStyle: { background: "linear-gradient(180deg,#ec4899,#9d174d)", color: "#fff" },
    title: "Création de logo",
    desc: "Un logo simple, moderne et adapté à votre activité, utilisable sur tous vos supports.",
    className: "levitate",
  },
  {
    icon: "💻",
    iconStyle: { background: "linear-gradient(180deg,#3b82f6,#1d4ed8)", color: "#fff" },
    title: "Création de site internet",
    desc: "Nous créons des sites internet modernes, rapides et adaptés à tous les écrans. Chaque site est conçu pour offrir une navigation claire et faciliter la prise de contact.",
    className: "levitate-2",
  },
  {
    icon: "🔧",
    iconStyle: { background: "linear-gradient(180deg,#10b981,#065f46)", color: "#fff" },
    title: "Maintenance du site",
    desc: "Sécurité, mises à jour et performance pour un site fiable et toujours disponible.",
    className: "levitate-3",
  },
  {
    icon: "📱",
    iconStyle: { background: "linear-gradient(180deg,#f97316,#9a3412)", color: "#fff" },
    title: "Posts pour réseaux sociaux",
    desc: "Des visuels professionnels et des publications sur mesure pour valoriser votre activité sur les réseaux sociaux.",
    className: "levitate-2",
  },
  {
    icon: "🔍",
    iconStyle: { background: "linear-gradient(180deg,#06b6d4,#155e75)", color: "#fff" },
    title: "SEO",
    desc: "Améliorez votre référencement sur Google et attirez du trafic qualifié vers votre site.",
    className: "levitate",
  },
  {
    icon: "💳",
    iconStyle: { background: "linear-gradient(180deg,#8b5cf6,#4c1d95)", color: "#fff" },
    title: "Carte de fidélité numérique",
    desc: "Fidélisez vos clients grâce à une carte numérique pratique, accessible depuis leur smartphone, sans carte papier.",
    className: "levitate-3",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill-badge mb-6" style={{ display: "inline-flex" }}>
            <span aria-hidden>🛠️</span> Services
          </span>
          <h2 className="font-black tracking-tight text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
            Des solutions{" "}
            <span className="text-purple" style={{ textShadow: "0 0 40px rgba(167,139,250,.5)" }}>
              complètes
            </span>
          </h2>
          <p className="mt-6 text-slate-300/90 text-base md:text-lg">
            Nous créons et améliorons votre présence en ligne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className={`station-card ${s.className}`}>
              <div className="icon-tile mb-5" style={s.iconStyle}>
                {s.icon}
              </div>
              <h3 className="text-white font-bold text-lg">{s.title}</h3>
              <p className="mt-3 text-slate-300/85 text-sm leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
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
