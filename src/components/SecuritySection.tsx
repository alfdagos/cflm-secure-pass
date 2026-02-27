import { motion } from "framer-motion";
import { Lock, Users, ShieldCheck, Key, Database, AlertCircle, FileText } from "lucide-react";

const items = [
  { icon: Lock, label: "Autenticazione con Spring Security" },
  { icon: Users, label: "Role-Based Access Control (ADMIN, RECEPTION, USER)" },
  { icon: ShieldCheck, label: "Protezione CSRF" },
  { icon: Key, label: "Password hashing con BCrypt" },
  { icon: Database, label: "Protezione SQL Injection tramite JPA" },
  { icon: AlertCircle, label: "Gestione centralizzata errori HTTP" },
  { icon: FileText, label: "Logging degli accessi" },
];

const SecuritySection = () => {
  return (
    <section id="sicurezza" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Sicurezza applicativa e controllo accessi
          </h2>
          <p className="text-muted-foreground leading-relaxed italic">
            "La sicurezza è stata progettata fin dall'inizio come requisito strutturale, 
            non come componente accessoria."
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 card-shadow"
            >
              <item.icon size={18} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
