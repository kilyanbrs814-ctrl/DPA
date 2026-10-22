import { HoverButton } from "@/components/ui/hover-button"

export default function Hero() {
  return (
    <section className="hero-mobile relative isolate flex items-center justify-center overflow-hidden px-0 pb-14 pt-32 sm:pt-40 md:pb-20 md:pt-44">
      <div aria-hidden="true" className="hero-aura pointer-events-none absolute left-1/2 top-24 h-[340px] w-[480px] -translate-x-1/2 rounded-full md:h-[480px] md:w-[850px]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 text-center sm:px-6">
        <div className="hero-eyebrow mx-auto mb-7 inline-flex max-w-full items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide sm:mb-9 sm:text-sm">
          <span className="hero-status-dot" aria-hidden="true"/>
          Votre partenaire en visibilité digitale
        </div>

        <h1 className="hero-heading mx-auto max-w-full font-black text-white">
          <span className="block">Digital</span>
          <span className="hero-heading-accent block pb-[0.15em]">Project Agency</span>
        </h1>

        <p className="mx-auto mt-4 max-w-[38rem] text-[15px] leading-[1.8] text-slate-300 sm:mt-6 sm:text-lg md:text-xl">
          Conception d&apos;image de marque et stratégie digitale pour tous les commerces et activités.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-10">
          <HoverButton href="#contact" className="mobile-primary-cta w-full sm:w-auto">
            Démarrer un projet <span aria-hidden="true">↗</span>
          </HoverButton>
          <p className="text-xs text-slate-400">Sans engagement · Réponse sous 24h</p>
        </div>

        <div className="hero-services mx-auto mt-10 grid max-w-[430px] grid-cols-3 gap-2 sm:mt-14">
          <span>Sites web</span>
          <span>Identité visuelle</span>
          <span>Visibilité</span>
        </div>
      </div>
    </section>
  )
}
