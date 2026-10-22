import Image from "next/image"

const points = [
  "Support client disponible 7j/7",
  "Offre modulable et personnalisable",
  "Respect des délais",
  "Transparence et reporting",
  "Expertise multi-compétences",
  "Suivi et maintenance proactive",
  "Stratégie orientée résultats",
  "Communication simple et pédagogique",
]

const badges = [
  { ico: "⭐", label: "Qualité" },
  { ico: "🤝", label: "Confiance" },
  { ico: "⚡", label: "Efficacité" },
]

export default function Apropos() {
  return (
    <section id="apropos" className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="pill-badge mb-6" style={{ display: "inline-flex" }}>
            <span aria-hidden>👥</span> À propos
          </span>
          <h2 className="font-black tracking-tight text-white text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05]">
            Votre partenaire digital de{" "}
            <span className="text-purple">confiance</span>
          </h2>
          <p className="mt-6 text-slate-300/90 leading-relaxed">
            DigitalProjectAgency aide les entreprises, artisans et commerçants à être visibles sur
            internet. On crée votre site, votre logo et votre communication pour que vos clients vous
            trouvent facilement.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3.5 text-sm">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="check">✓</span>
                <span className="text-slate-200">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-brand/40 glow-purple">
            <Image
              src="https://cdn.shopify.com/s/files/1/1058/4378/6073/files/dpa-agence-a-propos.webp?v=1792608685"
              alt="Équipe de création digitale collaborant autour d’un ordinateur dans un espace de travail moderne."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {badges.map((b) => (
              <div key={b.label} className="badge-tile">
                <span className="ico">{b.ico}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
