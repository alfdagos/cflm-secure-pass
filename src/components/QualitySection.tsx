import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "66", label: "Test automatici" },
  { value: "100%", label: "Success rate" },
  { value: "6+", label: "Aree coperte" },
];

const coverage = [
  "Controller, service, repository, DTO, model",
  "Test di validazione input",
  "Test di gestione eccezioni",
  "Test di integrazione",
];

const frameworks = ["JUnit 5", "Mockito", "AssertJ", "Spring Boot Test", "Spring Security Test"];

const QualitySection = () => {
  return (
    <section id="qualita" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Qualità verificata tramite testing automatizzato
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Il progetto adotta standard di sviluppo professionali orientati all'affidabilità 
            e alla manutenibilità nel tempo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-6 card-shadow"
            >
              <h3 className="font-heading font-semibold text-foreground mb-4">Copertura</h3>
              <ul className="space-y-2">
                {coverage.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6 card-shadow"
            >
              <h3 className="font-heading font-semibold text-foreground mb-4">Framework utilizzati</h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
