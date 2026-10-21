"use client"

import { useEffect, useState } from "react"
import { HoverButton } from "@/components/ui/hover-button"

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
          <a href="#top" className="flex items-center gap-3">
            <span className="dpa-mono">DPA</span>
            <span className="font-bold tracking-tight text-white">DigitalProjectAgency</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#top"      className="nav-link">Accueil</a>
            <a href="#services" className="nav-link">Nos Services</a>
            <a href="#apropos"  className="nav-link">À propos de nous</a>
            <a href="#contact"  className="nav-link">Nous contacter</a>
          </div>

          <a href="#contact" className="hidden md:inline-flex">
            <HoverButton>Démarrer un projet</HoverButton>
          </a>

          <button
            className="mobile-menu md:hidden"
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
