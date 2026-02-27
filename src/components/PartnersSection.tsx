import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const PartnersSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-14 h-14 rounded-full accent-light-bg flex items-center justify-center mx-auto mb-6">
            <Handshake size={26} className="text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Partner & Sponsor
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Crediamo nella collaborazione come motore di innovazione. 
            Il CFLM QR Ticket System è aperto a partnership tecnologiche 
            e sponsorizzazioni per eventi digitalizzati.
          </p>

          {/* Placeholder sponsor logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 bg-secondary rounded-lg flex items-center justify-center border border-border"
              >
                <span className="text-xs text-muted-foreground font-medium">Logo Partner {i}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Interessato a diventare partner? <a href="#contatti" className="text-accent hover:underline font-medium">Contattaci</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
