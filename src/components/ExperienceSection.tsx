import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Serbatic",
    role: "Software Development & Maintenance (Backend Focus)",
    period: "Jul 2024 – Presente",
    location: "Zamora",
    points: [
      "Construcción y optimización de servicios backend con Java Spring Boot, aplicando Arquitectura Limpia y patrones de diseño.",
      "Mejora de escalabilidad y mantenibilidad mediante refactorización, reduciendo deuda técnica.",
      "Soporte L2/L3, resolución de incidentes complejos y coordinación de despliegues.",
      "Colaboración con equipos de DevOps e Ingeniería para mejoras en aplicaciones corporativas.",
    ],
    tech: ["Java", "Spring Boot", "Microservicios", "REST APIs", "SQL"],
  },
  {
    company: "Serbatic",
    role: "Junior Software Developer",
    period: "Feb 2024 – Jun 2024",
    location: "Zamora",
    points: [
      "Lideré el desarrollo integral de una solución de e-commerce, desde concepción hasta despliegue.",
      "Backend seguro con Java Servlets y Spring Boot, aplicando Clean Code.",
      "Frontend moderno con React + TypeScript, useReducer, hooks personalizados y shadcn/ui.",
      "Diseño y optimización de Microservicios y APIs RESTful.",
    ],
    tech: ["Java", "Spring Boot", "React", "TypeScript", "SQL"],
  },
  {
    company: "Tymr",
    role: "Solar PV Maintenance Technician",
    period: "Jun 2022 – Feb 2023",
    location: "Zamora",
    points: [
      "Diagnósticos avanzados y resolución de problemas en sistemas electrónicos distribuidos.",
      "Instalación y configuración de seguidores solares y sistemas conectados a la red.",
      "Registro de datos y análisis de rendimiento para optimizar eficiencia.",
    ],
    tech: ["Diagnóstico", "Integración de sistemas", "Análisis de datos"],
  },
  {
    company: "Cobadu",
    role: "Industrial Installation Technician",
    period: "Jul 2021 – May 2022",
    location: "Zamora",
    points: [
      "Diseño e implementación de sistemas de automatización PLC/SCADA (SIMATIC S7).",
      "Desarrollo de sistemas de control en tiempo real para ventilación y refrigeración.",
      "Mantenimiento preventivo y correctivo en equipos críticos.",
    ],
    tech: ["PLC", "SCADA", "SIMATIC S7", "Control en tiempo real"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-primary font-mono text-lg block mb-1">{"// "}</span>
            Experiencia
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-[19px]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-mono text-sm flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="text-muted-foreground text-sm font-mono mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
