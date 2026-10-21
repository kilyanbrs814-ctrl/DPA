const differentiators = [
  "Processus structuré",
  "Suivi régulier",
  "Suivi des performances",
  "Amélioration continue",
]

export default function CTA() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-9"
          style={{
            border: "1px solid rgba(124,58,237,.3)",
            background: "rgba(124,58,237,.15)",
          }}
        >
          <span>🚀</span>
          <span style={{ color: "#c4b5fd", fontWeight: 500 }}>Consultation gratuite</span>
        </div>

        <h2
          className="font-extrabold text-white mb-8"
          style={{ fontSize: "clamp(42px,6vw,72px)", lineHeight: 1.1 }}
        >
          Prêt à dominer
          <br />
          <span
            style={{
              background: "linear-gradient(90deg,#a78bfa,#c084fc,#f472b6)",
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

        <div className="flex flex-wrap justify-center gap-4 cta-buttons">
          <a
            href="#contact"
            className="btn-shine"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 42px",
              background: "white",
              color: "#111827",
              borderRadius: 999,
              fontSize: 18,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 20px 40px rgba(255,255,255,.15)",
            }}
          >
            Planifier un appel 📞
          </a>

          <a
            href="#contact"
            className="glass-btn no-shine"
            style={{ padding: "18px 42px", fontSize: 18, fontWeight: 500 }}
          >
            Voir nos tarifs
          </a>
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
