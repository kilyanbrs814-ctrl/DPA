const cards = [
  {
    icon: "🏢",
    iconStyle: { background: "linear-gradient(180deg,#312e81,#1e1b4b)", color: "#a5b4fc" },
    title: "Petites et moyennes entreprises",
    desc: "Vous souhaitez gagner en visibilité et attirer de nouveaux clients pour développer votre activité. Un site internet professionnel permet de renforcer votre crédibilité et de générer plus d'opportunités.",
    objective: "Attirer plus de clients et faire grandir votre activité.",
    className: "levitate",
  },
  {
    icon: "🔨",
    iconStyle: { background: "linear-gradient(180deg,#7c3aed,#5b21b6)", color: "#fff" },
    title: "Commerçants et artisans",
    desc: "Vos clients recherchent des informations en ligne avant de choisir un professionnel près de chez eux. Un site clair et rassurant permet de donner confiance et d'inciter au passage à l'action.",
    objective: "Attirer plus de clients locaux et renforcer votre réputation.",
    className: "levitate-2",
  },
  {
    icon: "🛒",
    iconStyle: { background: "linear-gradient(180deg,#0c4a6e,#082f49)", color: "#7dd3fc" },
    title: "E-commerce et boutiques en ligne",
    desc: "Pour vendre en ligne, l'expérience utilisateur joue un rôle clé dans la décision d'achat. Une boutique fluide permet d'augmenter les conversions et les ventes. Un design optimisé améliore aussi la fidélisation.",
    objective: "Augmenter vos ventes en ligne et optimiser l'expérience client.",
    className: "levitate-3",
  },
  {
    icon: "💼",
    iconStyle: { background: "linear-gradient(180deg,#831843,#500724)", color: "#f9a8d4" },
    title: "Tout autre commerce ou activité pro",
    desc: "Aujourd'hui, être présent en ligne est indispensable pour se faire connaître et se démarquer. Un site professionnel permet de valoriser votre activité. Il vous aide aussi à créer une présence durable.",
    objective: "Faire connaître votre activité et booster votre visibilité.",
    className: "levitate",
  },
]

export default function PourQui() {
  return (
    <section id="pourqui" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="pill-badge mb-6" style={{ display: "inline-flex" }}>
            <span aria-hidden>🎯</span> Pour qui ?
          </span>
          <h2 className="font-black tracking-tight text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
            Pour{" "}
            <span className="text-purple" style={{ textShadow: "0 0 40px rgba(167,139,250,.5)" }}>
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
            <article key={card.title} className={`station-card ${card.className}`}>
              <div className="icon-tile mb-5" style={card.iconStyle}>
                {card.icon}
              </div>
              <h3 className="text-white font-bold text-lg leading-snug">{card.title}</h3>
              <p className="mt-3 text-slate-300/85 text-sm leading-relaxed">{card.desc}</p>
              <p className="mt-4 text-sm text-purple-200">
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
