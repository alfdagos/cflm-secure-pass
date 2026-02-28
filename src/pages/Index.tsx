import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ValueSection from "@/components/ValueSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import SecuritySection from "@/components/SecuritySection";
import QualitySection from "@/components/QualitySection";
import StackSection from "@/components/StackSection";
import FlowSection from "@/components/FlowSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <ValueSection />
      <ArchitectureSection />
      <SecuritySection />
      <QualitySection />
      <StackSection />
      <FlowSection />
      <OpenSourceSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
