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
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <div className="pill-badge mb-9">
          <span>🚀</span>
          <span style={{ color: "#B877DA", fontWeight: 500 }}>Consultation gratuite</span>
        </div>

        <h2
          className="font-extrabold text-white mb-8"
          style={{ fontSize: "clamp(42px,6vw,72px)", lineHeight: 1.1 }}
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
          className="text-gray-400 max-w-[720px] mx-auto mb-12"
          style={{ fontSize: "clamp(18px,2.5vw,24px)" }}
        >
          Un accompagnement clair et{" "}
          <strong className="text-white">personnalisé</strong> pour développer votre présence en ligne.
        </p>

        <div className="flex justify-center">
          <HoverButton href="#contact">Planifier un appel 📞</HoverButton>
        </div>

        <div
          className="mt-20 pt-12"
          style={{ borderTop: "1px solid #1f2937" }}
        >
          <p className="text-gray-400 text-lg mb-6 font-medium">Ce qui fait la différence :</p>
          <div className="flex flex-wrap justify-center gap-8" style={{ opacity: 0.75 }}>
            {differentiators.map((d) => (
              <span key={d} className="text-white font-bold">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
