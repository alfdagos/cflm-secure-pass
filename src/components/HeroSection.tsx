import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GitBranch, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import partyHero from "@/assets/party-hero.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 -top-10 -bottom-10" style={{ y: bgY }}>
        <img src={partyHero} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 mb-6">
              <GitBranch size={14} />
              Open Source Project
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-800 text-primary-foreground leading-tight mb-4">
              CFLM QR Ticket System
            </h1>
            <p className="text-lg md:text-xl font-medium text-primary-foreground/85 mb-3">
              Piattaforma open source per la gestione sicura e strutturata degli accessi evento
            </p>
            <p className="text-base text-primary-foreground/65 max-w-2xl mb-8 leading-relaxed">
              Soluzione enterprise-ready sviluppata in Java 21 e Spring Boot 3 per la generazione, 
              validazione e gestione di biglietti digitali con QR Code, progettata per eventi culturali, 
              conferenze e organizzazioni strutturate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Richiedi informazioni
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="#architettura">
                <Layers size={16} className="mr-2" />
                Scopri l'architettura
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="https://github.com/alfdagos/CFLM_QRTicketSystem" target="_blank" rel="noopener noreferrer">
                <GitBranch size={16} className="mr-2" />
                Accedi al repository
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
