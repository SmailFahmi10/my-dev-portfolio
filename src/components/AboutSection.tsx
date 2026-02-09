import { motion } from "framer-motion";

const skills = [
  { category: "Backend", items: ["Java", "Spring Boot", "Microservicios", "APIs RESTful", "SQL"] },
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { category: "DevOps & Tools", items: ["Git", "Clean Architecture", "Design Patterns", "SCADA/PLC"] },
  { category: "Idiomas", items: ["Español (Nativo)", "Inglés (Profesional)", "Árabe-Darija"] },
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary font-mono text-lg block mb-1">{"// "}</span>
            Sobre mí
          </h2>
          <p className="text-muted-foreground max-w-3xl mt-4 mb-12 leading-relaxed">
            Desarrollador Backend con experiencia construyendo microservicios escalables, APIs REST robustas
            y sistemas críticos en entornos corporativos. Mi background en mecatrónica me aporta una
            mentalidad analítica y capacidad para resolver problemas complejos. Trabajo con Arquitectura Limpia
            y patrones de diseño para crear software mantenible, seguro y de alto rendimiento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-colors"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 tracking-wide">
                {`{${group.category}}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
