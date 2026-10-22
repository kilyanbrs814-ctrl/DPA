"use client"

import { useEffect, useState } from "react"
import { HoverButton } from "@/components/ui/hover-button"
import Image from "next/image"

const mobileLinks = [
  { href: "#top", label: "Accueil", num: "01" },
  { href: "#pourqui", label: "Nos clients", num: "02" },
  { href: "#services", label: "Nos services", num: "03" },
  { href: "#methode", label: "Notre méthode", num: "04" },
  { href: "#apropos", label: "À propos", num: "05" },
  { href: "#faq", label: "Questions fréquentes", num: "06" },
  { href: "#contact", label: "Contact", num: "07" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 30) }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const before = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)
    return () => {
      document.body.style.overflow = before
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`} aria-label="Navigation principale">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[72px] lg:px-10">
          <a href="#top" onClick={closeMobile} className="flex shrink-0 items-center" aria-label="DigitalProjectAgency — Accueil">
            <Image src="/dpa-logo-white-purple.svg" alt="Logo DPA blanc avec accent violet" width={386} height={119} className="h-auto w-[110px] sm:w-[124px]" priority />
          </a>

          <div className="hidden items-center gap-7 xl:flex">
            <a href="#top" className="nav-link">Accueil</a>
            <a href="#services" className="nav-link">Nos services</a>
            <a href="#apropos" className="nav-link">À propos de nous</a>
            <a href="#contact" className="nav-link">Nous contacter</a>
          </div>

          <HoverButton href="#contact" className="hidden xl:inline-flex">Démarrer un projet</HoverButton>

          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <a href="#contact" onClick={closeMobile} className="nav-quick-cta">
              Parlons-en <span aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              className={`mobile-menu${mobileOpen ? " is-open" : ""}`}
              onClick={() => setMobileOpen(open => !open)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div id="mobile-navigation" className={`mobile-nav${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
        <button type="button" className="mobile-nav-backdrop" onClick={closeMobile} aria-label="Fermer le menu" tabIndex={mobileOpen ? 0 : -1}/>
        <div className="mobile-nav-panel">
          <div className="mobile-nav-eyebrow"><span className="mobile-nav-dot" /> DIGITAL PROJECT AGENCY</div>
          <nav aria-label="Menu mobile" className="mobile-nav-links">
            {mobileLinks.map(link => (
              <a key={link.href} href={link.href} className="mobile-nav-link" onClick={closeMobile} tabIndex={mobileOpen ? 0 : -1}>
                <span className="mobile-nav-num">{link.num}</span>
                <span>{link.label}</span>
                <span aria-hidden="true" className="mobile-nav-arrow">↗</span>
              </a>
            ))}
          </nav>
          <div className="mobile-nav-footer">
            <a href="#contact" className="mobile-nav-cta" onClick={closeMobile} tabIndex={mobileOpen ? 0 : -1}>
              Démarrer un projet <span aria-hidden="true">↗</span>
            </a>
            <p>Un projet en tête ? Discutons-en.</p>
          </div>
        </div>
      </div>
    </>
  )
}
