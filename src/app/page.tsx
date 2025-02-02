import Navbar from "../components/navbar"
import HeroSection from "../components/hero-section"
import CustomerSection from "../components/customer-section"
import InnovationSection from "../components/innovation-section"
import TechnologySection from "../components/technology-section"
import SecuritySection from "../components/security-section"
import StatsSection from "../components/stats-section"
import PartnersSection from "../components/partners-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CustomerSection />
      <InnovationSection />
      <TechnologySection />
      <SecuritySection />
      <StatsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}