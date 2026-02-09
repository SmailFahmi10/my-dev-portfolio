import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "I.E.S Claudio Moyano",
    degree: "FPS Desarrollo de Aplicaciones Web (DAW)",
    period: "Sep 2022 – May 2024",
    details: "MySQL, Spring Boot, JavaScript, Git, HTML",
  },
  {
    school: "I.E.S Universidad Laboral",
    degree: "FPS Mecatrónica Industrial",
    period: "Sep 2019 – Jun 2021",
    details: "PLC, SIMATIC STEP 7",
  },
  {
    school: "I.E.S Poeta Claudio Rodríguez",
    degree: "Bachillerato, Ciencias Tecnológicas",
    period: "Sep 2017 – Jun 2019",
    details: "",
  },
];

const EducationSection = () => {
  return (
    <section id="educacion" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-primary font-mono text-lg block mb-1">{"// "}</span>
            Educación & Certificaciones
          </h2>
        </motion.div>

        <div className="grid gap-6 mb-10">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 flex gap-4 hover:border-glow transition-colors"
            >
              <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-primary font-mono text-sm">{edu.school}</p>
                <p className="text-muted-foreground text-sm mt-1">{edu.period}</p>
                {edu.details && (
                  <p className="text-muted-foreground text-sm mt-2 font-mono">{edu.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/20 rounded-lg p-6 flex gap-4 glow-green"
        >
          <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground">Medalla de Oro en Mecatrónica</h3>
            <p className="text-primary font-mono text-sm">CYLSkills</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
