import { Header } from "@/components/layout/Header";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Services } from "@/components/sections/Services";
import { WhyVikvar } from "@/components/sections/WhyVikvar";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Expertise />
      <WhyVikvar />
      <ContactCTA />
    </main>
  );
}
