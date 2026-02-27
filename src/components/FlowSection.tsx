import { motion } from "framer-motion";
import { Ticket, QrCode, UserCheck, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Ticket, title: "Creazione biglietto digitale", step: "01" },
  { icon: QrCode, title: "Generazione QR Code univoco", step: "02" },
  { icon: UserCheck, title: "Accesso reception autenticato", step: "03" },
  { icon: ShieldCheck, title: "Validazione con prevenzione riutilizzo", step: "04" },
];

const FlowSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Processo di gestione accessi
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Riduzione errori manuali e maggiore controllo operativo.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {steps.map((s) => (
            <motion.div
              key={s.step}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative text-center"
            >
              <span className="text-5xl font-heading font-bold text-muted/80 absolute top-0 right-4 select-none">
                {s.step}
              </span>
              <div className="bg-card border border-border rounded-lg p-6 pt-10 card-shadow relative">
                <div className="w-12 h-12 rounded-full accent-light-bg flex items-center justify-center mx-auto mb-4">
                  <s.icon size={22} className="text-accent" />
                </div>
                <p className="font-heading font-semibold text-foreground text-sm">{s.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlowSection;
