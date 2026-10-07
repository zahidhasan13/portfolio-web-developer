import AboutExperience from "@/components/AboutExperience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import SelectedWork from "@/components/SelectedWork";
import SkillsAndCapabilities from "@/components/SkillsAndCapabilities";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SelectedWork />
      <AboutExperience />
      <SkillsAndCapabilities />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}
