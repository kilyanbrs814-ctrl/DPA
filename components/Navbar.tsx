"use client"

import { useEffect, useState } from "react"
import { HoverButton } from "@/components/ui/hover-button"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function closeMobile() {
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar pb-navbar-wrap${scrolled ? " scrolled" : ""}`}>
        <div
          className={`max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between pb-navbar${scrolled ? " scrolled" : ""}`}
        >
          <a href="#top" className="inline-flex shrink-0 items-center rounded-lg bg-white px-2.5 py-2" aria-label="DigitalProjectAgency — Accueil">
            <Image src="/dpa-logo.png" alt="Logo DPA" width={96} height={30} className="h-auto w-20 sm:w-24" priority />
          </a>

          <div className="hidden xl:flex items-center gap-7">
            <a href="#top"      className="nav-link">Accueil</a>
            <a href="#services" className="nav-link">Nos Services</a>
            <a href="#apropos"  className="nav-link">À propos de nous</a>
            <a href="#contact"  className="nav-link">Nous contacter</a>
          </div>

          <HoverButton href="#contact" className="hidden xl:inline-flex">Démarrer un projet</HoverButton>

          <button
            className="mobile-menu xl:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <a href="#top"      className="nav-link" onClick={closeMobile}>Accueil</a>
        <a href="#services" className="nav-link" onClick={closeMobile}>Nos Services</a>
        <a href="#apropos"  className="nav-link" onClick={closeMobile}>À propos</a>
        <a href="#contact"  className="nav-link" onClick={closeMobile}>Nous contacter</a>
        <a href="#contact"  className="pill-cta text-base mt-4" onClick={closeMobile}>
          Démarrer un projet ?
        </a>
      </div>
    </>
  )
}
