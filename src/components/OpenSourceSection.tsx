import { motion } from "framer-motion";
import { ArrowRight, Heart, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const roadmap = [
  "JWT per API REST",
  "Database utenti persistente",
  "Verifica email",
  "HTTPS obbligatorio",
  "2FA",
  "Rate limiting",
];

const OpenSourceSection = () => {
  return (
    <section id="opensource" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Un progetto aperto e sostenibile
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Il sistema è open source, favorendo trasparenza, verificabilità del codice 
              e possibilità di personalizzazione per esigenze specifiche di enti e organizzazioni.
            </p>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-lg p-6 md:p-8 card-shadow mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Possibili evoluzioni production-grade
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {roadmap.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Diventa partner tecnologico
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              <Heart size={16} className="mr-2" />
              Sostieni il progetto
            </Button>
            <Button size="lg" variant="outline">
              <Code2 size={16} className="mr-2" />
              Contribuisci allo sviluppo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
