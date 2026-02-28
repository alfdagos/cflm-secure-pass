import { motion } from "framer-motion";
import { Mail, GitBranch, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contatti" className="py-20 md:py-28 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Contatti
            </h2>
            <p className="text-muted-foreground">
              Per informazioni, collaborazioni o richieste tecniche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nome" className="bg-card" />
                <Input placeholder="Cognome" className="bg-card" />
              </div>
              <Input type="email" placeholder="Email" className="bg-card" />
              <Input placeholder="Organizzazione" className="bg-card" />
              <Textarea placeholder="Messaggio" rows={4} className="bg-card resize-none" />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Send size={16} className="mr-2" />
                Invia messaggio
              </Button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-lg p-6 card-shadow">
                <h3 className="font-heading font-semibold text-foreground mb-4">Informazioni</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">info@cflm.it</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GitBranch size={16} className="text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">github.com/alfdagos/qr-ticket-system</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 card-shadow">
                <h3 className="font-heading font-semibold text-foreground mb-3">Progetto CFLM</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Il Comitato promuove il gasamento musicale e artistico 
                  sul territorio, abbracciando l'innovazione digitale per migliorare 
                  l'esperienza dei propri eventi.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
