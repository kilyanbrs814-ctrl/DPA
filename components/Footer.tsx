import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10"
      style={{ background: "linear-gradient(180deg,transparent,rgba(8,6,20,.6))" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(167,139,250,.4),transparent)" }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/dpa-logo.png" alt="Logo DPA" width={96} height={30} className="h-auto w-24" />
            <span className="font-bold text-white">DigitalProjectAgency</span>
          </a>
          <div className="flex md:justify-center gap-6 text-sm flex-wrap">
            <a href="#top"      className="nav-link">Accueil</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#apropos"  className="nav-link">À propos</a>
            <a href="#contact"  className="nav-link">Contact</a>
          </div>
          <div className="md:text-right text-xs text-slate-500">
            <span className="mr-4">Mentions légales</span>
            <span>© 2025 DigitalProjectAgency</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
