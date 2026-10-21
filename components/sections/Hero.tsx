import { HoverButton } from "@/components/ui/hover-button"

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        <h1 className="mx-auto font-black tracking-tight leading-[0.98] text-center text-[clamp(2.5rem,8vw,8rem)]">
          <span className="block text-white">Digital</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(180deg,#c4b5fd,#7c3aed)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 0 60px rgba(124,58,237,.45)",
            }}
          >
            Project Agency
          </span>
        </h1>

        <p className="mt-8 text-slate-300/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Conception d&apos;image de marque et stratégie digitale pour tous les commerces et activités.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a href="#contact">
            <HoverButton>Démarrer un projet</HoverButton>
          </a>
          <p className="text-xs text-slate-400">Sans engagement – Réponse sous 24h</p>
        </div>
      </div>
    </section>
  )
}
