import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono text-lg block mb-1">{"// "}</span>
            Contacto
          </h2>
          <p className="text-muted-foreground mb-12">
            ¿Tienes un proyecto interesante o una oportunidad? No dudes en contactarme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <a
            href="mailto:smailfahmi984@gmail.com"
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-glow transition-colors group"
          >
            <Mail className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Email</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">smailfahmi984@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+34676249297"
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-glow transition-colors group"
          >
            <Phone className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Teléfono</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">676 249 297</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/smailfahmicharnane"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 flex items-center gap-4 hover:border-glow transition-colors group"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">LinkedIn</p>
              <p className="text-sm text-foreground group-hover:text-primary transition-colors">/in/smailfahmicharnane</p>
            </div>
          </a>

          <div className="bg-card border border-border rounded-lg p-6 flex items-center gap-4">
            <MapPin className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-mono">Ubicación</p>
              <p className="text-sm text-foreground">Alicante, España</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
