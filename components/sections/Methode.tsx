import Image from "next/image"

const steps = [
  {
    num: "1",
    title: "Analyse & objectifs",
    desc: "Nous commençons par comprendre votre activité, votre marché, vos forces et vos objectifs.",
    className: "levitate",
  },
  {
    num: "2",
    title: "Stratégie sur mesure",
    desc: "Nous construisons un plan d'action personnalisé, avec des actions concrètes et simples à mettre en place.",
    className: "levitate-2",
  },
  {
    num: "3",
    title: "Conception & design",
    desc: "Nous réalisons vos supports visuels et votre identité digitale (site, logo, réseaux) avec soin.",
    className: "levitate-3 featured",
  },
  {
    num: "4",
    title: "Optimisation & suivi",
    desc: "Nous suivons les résultats et optimisons régulièrement les actions (SEO, contenus, fidélisation) avec vous.",
    className: "levitate",
  },
]

export default function Methode() {
  return (
    <section id="methode" className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid gap-7 md:gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <span className="pill-badge mb-6" style={{ display: "inline-flex" }}>
              <span aria-hidden>🚀</span> Méthode
            </span>
            <h2 className="font-black tracking-tight text-white text-[clamp(2.05rem,8.4vw,3rem)] leading-[1.15] md:text-[clamp(2.25rem,4.5vw,4rem)] md:leading-[1.05]">
              Une façon de travailler{" "}
              <span className="text-purple">claire,</span>
              <br />
              <span className="text-purple">efficace et orientée résultats</span>
            </h2>
            <p className="mt-6 text-slate-300/90 leading-relaxed">
              Chaque étape est pensée pour vous aider à obtenir des résultats concrets, avec une
              communication transparente et un suivi régulier. Nous travaillons main dans la main avec
              vous, pour renforcer votre visibilité en ligne, attirer plus de clients et développer votre
              activité sereinement.
            </p>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-brand/40 glow-purple">
            <Image
              src="https://cdn.shopify.com/s/files/1/1058/4378/6073/files/dpa-agence-methode.webp?v=1792608678"
              alt="Équipe créative travaillant sur une stratégie digitale, autour de maquettes et d’un écran de présentation."
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative mt-11 md:mt-20">
          <div className="step-line hidden lg:block" />
          <div className="mobile-steps relative grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.num} className={`station-card mobile-step-card ${step.className}`}>
                <div className="step-num mb-5">{step.num}</div>
                <div className="mobile-step-content">
                  <h3 className="text-white font-bold">{step.title}</h3>
                  <p className="mt-3 text-slate-300/85 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
