import { motion } from "framer-motion";
import { Shield, BarChart3, Puzzle, TrendingUp, Eye } from "lucide-react";

const items = [
  { icon: Shield, title: "Controllo accessi affidabile", desc: "Prevenzione duplicati e validazione in tempo reale dei biglietti" },
  { icon: BarChart3, title: "Tracciabilità strutturata", desc: "Gestione completa del ciclo di vita dei biglietti digitali" },
  { icon: Puzzle, title: "Architettura modulare", desc: "Pronta per integrazioni future e personalizzazioni specifiche" },
  { icon: TrendingUp, title: "Scalabilità garantita", desc: "Da eventi locali a manifestazioni di ampia portata" },
  { icon: Eye, title: "Trasparenza open source", desc: "Codice verificabile, auditabile e personalizzabile" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ValueSection = () => {
  return (
    <section id="valore" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Una soluzione digitale per eventi moderni e sicuri
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sistema progettato per ridurre errori operativi, migliorare la sicurezza 
            e digitalizzare i processi organizzativi.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="bg-card rounded-lg p-6 card-shadow hover:card-shadow-hover transition-shadow duration-300 border border-border"
            >
              <div className="w-10 h-10 rounded-md accent-light-bg flex items-center justify-center mb-4">
                <item.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
