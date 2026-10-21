import Image from "next/image"

const footerLinks = [
  { href: "#top", label: "Accueil" },
  { href: "#services", label: "Nos services" },
  { href: "#methode", label: "Notre méthode" },
  { href: "#faq", label: "Questions fréquentes" },
  { href: "#apropos", label: "À propos" },
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-14 overflow-hidden border-t border-violet-400/20 bg-[#080713]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-72 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-violet-800/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-8 lg:px-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10 lg:gap-20">
          <div>
            <a
              href="#top"
              className="inline-flex items-center rounded-lg bg-white px-2.5 py-2"
              aria-label="Retour à l'accueil"
            >
              <Image src="/dpa-logo.png" alt="Logo DPA" width={96} height={30} className="h-auto w-24" />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Création de sites, identité visuelle et solutions digitales pour
              renforcer votre visibilité et fidéliser vos clients.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200">
                Création digitale
              </span>
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200">
                Visibilité en ligne
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Navigation</h2>
            <ul className="mt-6 space-y-3.5">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="inline-block text-sm text-slate-300 transition-colors hover:text-white focus-visible:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Contact</h2>
            <h3 className="mt-6 text-xl font-bold text-white">Un projet en tête ?</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Parlons de vos idées et trouvons ensemble la bonne solution pour votre activité.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-3 rounded-full border border-violet-400/40 bg-violet-600/20 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-violet-300 hover:bg-violet-600/30"
            >
              Démarrer un projet <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://wa.me/33753801415"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-fit text-sm text-slate-300 underline decoration-violet-500/50 underline-offset-4 transition-colors hover:text-violet-200"
            >
              Échanger sur WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DigitalProjectAgency. Tous droits réservés.</p>
          <p>Des idées aux projets qui prennent vie.</p>
        </div>
      </div>
    </footer>
  )
}
