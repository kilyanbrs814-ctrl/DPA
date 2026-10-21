"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Quels types d'entreprises accompagnez-vous ?",
    a: "Nous accompagnons les TPE, PME, artisans, commerçants et e-commerces de tous secteurs. Notre approche s'adapte à votre taille, vos objectifs et votre budget.",
  },
  {
    q: "Faites-vous seulement des sites internet ?",
    a: "Non. Nous proposons aussi la création de logo, l'identité de marque, le SEO, la gestion des réseaux sociaux, la publicité en ligne et la maintenance.",
  },
  {
    q: "Comment se déroule votre accompagnement ?",
    a: "En 4 étapes : analyse de vos objectifs, stratégie sur mesure, conception des supports, puis optimisation et suivi continus avec un reporting clair.",
  },
  {
    q: "Puis-je suivre l'évolution de mon site ?",
    a: "Oui, vous recevez un reporting régulier : trafic, conversions, classement SEO, performance des campagnes. Vous gardez la main et la visibilité à chaque instant.",
  },
  {
    q: "Et si je n'ai pas encore de projet concret ?",
    a: "Aucun problème. Nous échangeons gratuitement et sans engagement pour cadrer vos besoins, identifier les priorités et construire ensemble une feuille de route claire.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="relative py-32 md:py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-14">
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

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button className="faq-q w-full text-left" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
