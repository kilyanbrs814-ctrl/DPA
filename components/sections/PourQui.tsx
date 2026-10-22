const cards = [
  {
    icon: "🏢",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Petites et moyennes entreprises",
    desc: "Vous souhaitez gagner en visibilité et attirer de nouveaux clients pour développer votre activité. Un site internet professionnel permet de renforcer votre crédibilité et de générer plus d'opportunités.",
    objective: "Attirer plus de clients et faire grandir votre activité.",
    className: "levitate",
  },
  {
    icon: "🔨",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Commerçants et artisans",
    desc: "Vos clients recherchent des informations en ligne avant de choisir un professionnel près de chez eux. Un site clair et rassurant permet de donner confiance et d'inciter au passage à l'action.",
    objective: "Attirer plus de clients locaux et renforcer votre réputation.",
    className: "levitate-2",
  },
  {
    icon: "🛒",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "E-commerce et boutiques en ligne",
    desc: "Pour vendre en ligne, l'expérience utilisateur joue un rôle clé dans la décision d'achat. Une boutique fluide permet d'augmenter les conversions et les ventes. Un design optimisé améliore aussi la fidélisation.",
    objective: "Augmenter vos ventes en ligne et optimiser l'expérience client.",
    className: "levitate-3",
  },
  {
    icon: "💼",
    iconStyle: { background: "linear-gradient(180deg,#7936A3,#52236F)", color: "#fff" },
    title: "Tout autre commerce ou activité pro",
    desc: "Aujourd'hui, être présent en ligne est indispensable pour se faire connaître et se démarquer. Un site professionnel permet de valoriser votre activité. Il vous aide aussi à créer une présence durable.",
    objective: "Faire connaître votre activité et booster votre visibilité.",
    className: "levitate",
  },
]

export default function PourQui() {
  return (
    <section id="pourqui" className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="pill-badge mb-6" style={{ display: "inline-flex" }}>
            <span aria-hidden>🎯</span> Nos clients
          </span>
          <h2 className="font-black tracking-tight text-white text-[clamp(2.05rem,9vw,3.15rem)] leading-[1.12] md:text-[clamp(2.5rem,6vw,5rem)] md:leading-[1.05]">
            Pour{" "}
            <span className="text-purple" style={{ textShadow: "0 0 40px rgba(121,54,163,.66)" }}>
              qui
            </span>{" "}
            ?
          </h2>
          <p className="mt-6 text-slate-300/90 text-base md:text-lg leading-relaxed">
            Nous aidons toutes les entreprises à être visibles sur internet, attirer plus de clients et
            développer leur activité, quelle que soit leur taille ou leur secteur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <article key={card.title} className={`station-card mobile-audience-card ${card.className}`}>
              <div className="mb-4 flex items-center gap-3 md:block">
                <div className="icon-tile shrink-0 md:mb-5" style={card.iconStyle}>{card.icon}</div>
                <h3 className="text-white font-bold text-[17px] leading-snug md:text-lg">{card.title}</h3>
              </div>
              <p className="mt-3 text-slate-300/85 text-sm leading-relaxed">{card.desc}</p>
              <p className="mt-4 text-sm text-brand-light">
                <span className="text-amber-300">🎯</span>{" "}
                <span className="font-semibold">Objectif :</span> {card.objective}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
