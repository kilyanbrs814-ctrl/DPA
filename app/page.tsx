import SpaceBg from "@/components/SpaceBg"
import BorderSpotlight from "@/components/BorderSpotlight"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Hero from "@/components/sections/Hero"
import PourQui from "@/components/sections/PourQui"
import Services from "@/components/sections/Services"
import Methode from "@/components/sections/Methode"
import FAQ from "@/components/sections/FAQ"
import Apropos from "@/components/sections/Apropos"
import CTA from "@/components/sections/CTA"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <SpaceBg />
      <BorderSpotlight />
      <Navbar />
      <main id="top">
        <Hero />
        <PourQui />
        <Services />
        <Methode />
        <FAQ />
        <Apropos />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}