import { HoverButton } from "@/components/ui/hover-button"

const differentiators = [
  "Processus structuré",
  "Suivi régulier",
  "Suivi des performances",
  "Amélioration continue",
]

export default function CTA() {
  return (
    <section
      className="relative py-12 md:py-16 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-[1000px] mx-auto px-5 sm:px-6 relative z-10 text-center mobile-cta-section">
        <div className="pill-badge mb-6 md:mb-9">
          <span>🚀</span>
          <span style={{ color: "#B877DA", fontWeight: 500 }}>Consultation gratuite</span>
        </div>

        <h2
          className="font-extrabold text-white mb-6 md:mb-8 mobile-cta-title"
          style={{ lineHeight: 1.1 }}
        >
          Prêt à dominer
          <br />
          <span
            style={{
              background: "linear-gradient(90deg,#B877DA,#7936A3,#B877DA)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            le digital ?
          </span>
        </h2>

        <p
          className="text-gray-300 max-w-[720px] mx-auto mb-8 md:mb-12 mobile-cta-description"
          
        >
          Un accompagnement clair et{" "}
          <strong className="text-white">personnalisé</strong> pour développer votre présence en ligne.
        </p>

        <div className="flex justify-center mobile-cta-action">
          <HoverButton href="#contact">Planifier un appel 📞</HoverButton>
        </div>

        <div
          className="mt-12 pt-8 md:mt-20 md:pt-12"
          style={{ borderTop: "1px solid #1f2937" }}
        >
          <p className="text-gray-400 text-lg mb-6 font-medium">Ce qui fait la différence :</p>
          <div className="mobile-differentiators grid grid-cols-2 gap-x-3 gap-y-4 text-left sm:flex sm:flex-wrap sm:justify-center sm:gap-8" style={{ opacity: 0.75 }}>
            {differentiators.map((d) => (
              <span key={d} className="flex items-center gap-2 text-white text-xs font-semibold sm:text-base sm:font-bold"><span aria-hidden="true" className="text-brand-light">✓</span>
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
