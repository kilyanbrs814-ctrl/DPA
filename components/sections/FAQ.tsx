"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Quels types d'entreprises accompagnez-vous ?",
    a: "Nous accompagnons les TPE, PME, artisans, commerçants et e-commerces de tous secteurs. Notre approche s'adapte à votre taille, vos objectifs et votre budget.",
  },
  {
    q: "Faites-vous seulement des sites internet ?",
    a: "Non. Nous proposons aussi la création de logos, le SEO, la maintenance, des posts pour réseaux sociaux et des cartes de fidélité numériques.",
  },
  {
    q: "Comment se déroule votre accompagnement ?",
    a: "En 4 étapes : analyse de vos objectifs, stratégie sur mesure, conception des supports, puis optimisation et suivi avec une communication claire.",
  },
  {
    q: "Puis-je suivre l'évolution de mon site ?",
    a: "Oui, selon votre prestation, nous pouvons suivre les indicateurs utiles comme le trafic, les performances du site et la visibilité sur les moteurs de recherche.",
  },
  {
    q: "Et si je n'ai pas encore de projet concret ?",
    a: "Aucun problème. Nous échangeons gratuitement et sans engagement pour cadrer vos besoins, identifier les priorités et construire ensemble une feuille de route claire.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex((current) => (current === i ? null : i))
  }

  return (
    <section id="faq" className="relative py-12 md:py-16">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="pill-badge mb-6">
            <span aria-hidden="true">❓</span> FAQ
          </span>
          <h2 className="font-black tracking-tight text-white text-[clamp(2.5rem,6vw,5rem)] leading-[1.02]">
            Vos questions,{" "}
            <span className="text-purple" style={{ textShadow: "0 0 40px rgba(167,139,250,.5)" }}>
              nos réponses
            </span>
          </h2>
          <p className="mt-6 text-slate-300/90 max-w-2xl mx-auto">
            Vous voulez savoir comment nous aidons votre activité à être visible en ligne et à convertir
            vos visiteurs ? Voici les réponses aux questions les plus fréquentes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <article key={faq.q} className={`faq-item${isOpen ? " open" : ""}`}>
                <h3>
                  <button
                    id={`faq-question-${i}`}
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${i}`}
                  className="faq-a"
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-a-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
