"use client"

import { useState } from "react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      ;(e.target as HTMLFormElement).reset()
    }, 800)
  }

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left column */}
          <div>
            <span className="pill-badge mb-6" style={{ display: "inline-flex" }}>
              <span aria-hidden>💬</span> Contact
            </span>
            <h2 className="font-black tracking-tight text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
              Démarrons votre{" "}
              <span className="text-purple" style={{ textShadow: "0 0 40px rgba(167,139,250,.5)" }}>
                projet
              </span>
            </h2>
            <p className="mt-6 text-slate-300/90 leading-relaxed max-w-xl">
              Que vous ayez une idée, un projet en tête ou simplement envie de discuter de vos besoins,
              contactez-nous pour recevoir une proposition personnalisée et adaptée à vos objectifs.
            </p>

            <a
              href="https://wa.me/33753801415"
              className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold"
              style={{
                background: "linear-gradient(180deg,#22c55e,#15803d)",
                color: "#fff",
                boxShadow: "0 12px 30px -10px rgba(34,197,94,.6),0 0 40px rgba(34,197,94,.25)",
              }}
            >
              <span
                aria-hidden
                className="w-6 h-6 rounded-full bg-white/20 grid place-items-center text-sm"
              >
                📱
              </span>
              +33 7 53 80 14 15
            </a>

            <div className="glass mt-8 rounded-2xl p-5 max-w-md">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-3">
                  <span>⚡</span>
                  <span className="text-slate-200">Réponse rapide sous 24h</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🤝</span>
                  <span className="text-slate-200">Échange gratuit et sans engagement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🎯</span>
                  <span className="text-slate-200">Accompagnement personnalisé</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            className="glass-strong rounded-2xl p-7 md:p-8 glow-purple"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-bold" style={{ color: "#a78bfa" }}>
              Envoyez-nous un message
            </h3>
            <p className="text-slate-400 text-sm mt-1">Réponse sous 24h.</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="field-label" htmlFor="f-name">Nom complet</label>
                <input id="f-name" className="field" placeholder="John Doe" required />
              </div>
              <div>
                <label className="field-label" htmlFor="f-mail">Email</label>
                <input
                  id="f-mail"
                  type="email"
                  className="field"
                  placeholder="email@exemple.com"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="field-label" htmlFor="f-co">Entreprise</label>
              <input id="f-co" className="field" placeholder="Nom de l'entreprise" />
            </div>

            <div className="mt-4">
              <label className="field-label" htmlFor="f-msg">Message</label>
              <textarea
                id="f-msg"
                className="field"
                placeholder="Décrivez votre projet…"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || submitted}
              className="pill-cta w-full justify-center mt-6"
            >
              {loading
                ? "Envoi en cours…"
                : submitted
                ? "✓ Message envoyé !"
                : "Envoyer le message →"}
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm text-green-400 font-medium">
                ✓ Merci ! Nous vous répondons sous 24h.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
