import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ChevronDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest">
            {">"} hello_world<span className="animate-blink">_</span>
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Smail Fahmi{" "}
            <span className="text-gradient">Charnane</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Backend Developer especializado en{" "}
            <span className="text-primary font-medium">Java</span> &{" "}
            <span className="text-primary font-medium">Spring Boot</span>
            {" "}con experiencia fullstack en React + TypeScript
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-12">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              Alicante, España
            </span>
            <a href="mailto:smailfahmi984@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              smailfahmi984@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/smailfahmicharnane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 text-primary" />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium rounded-lg hover:brightness-110 transition-all glow-green"
            >
              Ver Experiencia
            </a>
            <a
              href="/cv-smail-fahmi.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-mono text-sm font-medium rounded-lg hover:bg-primary/10 transition-all"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground font-mono text-sm font-medium rounded-lg hover:text-primary hover:border-primary/30 transition-all"
            >
              Contactar
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
