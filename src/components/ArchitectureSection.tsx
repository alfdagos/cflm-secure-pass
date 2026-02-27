import { motion } from "framer-motion";

const layers = [
  { label: "Controller", desc: "REST API endpoints" },
  { label: "Service Layer", desc: "Business logic" },
  { label: "Repository", desc: "Spring Data JPA" },
  { label: "Database", desc: "H2 / PostgreSQL" },
];

const features = [
  "Separazione delle responsabilità",
  "Pattern DTO per isolamento API",
  "Mapper dedicati",
  "Gestione centralizzata delle eccezioni",
  "Logging strutturato",
  "Transazioni garantite",
];

const ArchitectureSection = () => {
  return (
    <section id="architettura" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Architettura enterprise a livelli
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Progettato secondo best practice Spring Boot moderne con separazione netta delle responsabilità.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {layers.map((layer, i) => (
              <div key={layer.label} className="w-full max-w-xs">
                <div className="bg-card border border-border rounded-lg p-4 text-center card-shadow">
                  <p className="font-heading font-semibold text-foreground text-sm">{layer.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{layer.desc}</p>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-6 bg-border relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-r border-b border-border rotate-45 bg-background" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
