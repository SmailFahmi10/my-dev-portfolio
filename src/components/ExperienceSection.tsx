import Section from "@/components/Section";

interface Experience {
  company: string;
  role: string;
  project?: string;
  period: string;
  location?: string;
  points: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "Serbatic",
    role: "Backend software development",
    project: "Microservicios de integración de eventos, sector seguros",
    period: "Sep 2025 – hoy",
    points: [
      "Desarrollo microservicios Java y Spring Boot que consumen mensajería asíncrona (AMQP) para automatizar flujos de negocio críticos.",
      "Integro los servicios con sistemas core de negocio para generación documental y gestión de datos maestros.",
      "Diagnostico y resuelvo incidencias de conectividad en tiempo real en Kubernetes (Azure AKS).",
      "Optimizo consultas Oracle SQL para procesar grandes volúmenes de datos.",
      "Resuelvo problemas de estabilidad en Kubernetes (Helm, KEDA, nodos Spot) para mejorar la resiliencia en producción.",
      "Colaboro con los equipos DevOps en pipelines CI/CD y despliegues GitOps con ArgoCD.",
    ],
    tech: ["Java 21", "Spring Boot", "AMQP", "Oracle SQL", "Kubernetes (AKS)", "Helm", "KEDA", "ArgoCD"],
  },
  {
    company: "Serbatic",
    role: "Backend software development",
    project: "Soporte y mantenimiento Java, sector automoción",
    period: "Jul 2024 – Ago 2025",
    location: "Zamora",
    points: [
      "Desarrollo y mantenimiento de aplicaciones corporativas en Java y Spring Boot, reduciendo deuda técnica con refactorizaciones continuas.",
      "Resolución de incidencias L2/L3 en contacto directo con el cliente, mejorando tiempos de resolución y estabilidad.",
      "Análisis y corrección de datos en Oracle (SQL y PL/SQL) para resolver inconsistencias críticas en procesos de negocio.",
      "Evolutivos de extremo a extremo, backend y frontend con Angular o React, desde la toma de requisitos hasta el despliegue.",
      "Campañas digitales integradas con sistemas CRM para la captación de leads.",
      "Documentación técnica y funcional junto a los stakeholders, reduciendo retrabajos.",
    ],
    tech: ["Java", "Spring Boot", "Oracle SQL", "PL/SQL", "Angular", "React"],
  },
  {
    company: "Serbatic",
    role: "Junior backend developer",
    project: "Comercio electrónico full stack",
    period: "Feb 2024 – Jun 2024",
    location: "Zamora",
    points: [
      "Lideré el desarrollo integral de una solución de comercio electrónico, desde su concepción hasta su despliegue.",
      "Servicios backend seguros con Java Servlets y Spring Boot, aplicando Clean Code y buenas prácticas de SQL.",
      "Interfaces con React y TypeScript: useReducer, hooks personalizados, shadcn/ui y Tailwind CSS.",
      "Diseño y optimización de microservicios y APIs RESTful.",
      "Documentación técnica y apoyo en los despliegues para minimizar el tiempo de inactividad.",
    ],
    tech: ["Java", "Spring Boot", "Servlets", "React", "TypeScript", "SQL"],
  },
  {
    company: "Tymr",
    role: "Técnico de mantenimiento",
    period: "Jun 2022 – Feb 2023",
    location: "Zamora",
    points: ["Resolución de problemas en sistemas electrónicos distribuidos mediante diagnóstico avanzado."],
    tech: [],
  },
  {
    company: "Cobadu",
    role: "Técnico industrial",
    period: "Jul 2021 – May 2022",
    location: "Zamora",
    points: ["Diseño de lógica de sistemas y máquinas de estado mediante programación secuencial (PLC/SCADA)."],
    tech: [],
  },
  {
    company: "Audens Food",
    role: "Técnico en mantenimiento industrial",
    period: "Ene 2021 – Jun 2021",
    points: [],
    tech: [],
  },
];

const ExperienceSection = () => (
  <Section id="experiencia" title="Experiencia">
    <ol>
      {experiences.map((exp) => (
        <li
          key={`${exp.company}-${exp.period}`}
          className="grid gap-x-8 gap-y-3 border-b py-8 first:pt-0 last:border-b-0 last:pb-0 lg:grid-cols-[12rem_1fr]"
        >
          <p className="font-mono text-sm leading-6 text-muted-foreground">
            {exp.period}
            {exp.location && (
              <span className="lg:block"><span className="lg:hidden"> · </span>{exp.location}</span>
            )}
          </p>
          <div>
            <h3 className="text-xl font-semibold leading-6">{exp.role}</h3>
            <p className="mt-1 font-medium text-primary">{exp.company}</p>
            {exp.project && <p className="mt-1 text-sm text-muted-foreground">{exp.project}</p>}
            {exp.points.length > 0 && (
              <ul className="mt-4 max-w-[68ch] space-y-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {exp.points.map((point) => (
                  <li key={point} className="relative pl-5 before:absolute before:left-0 before:content-['–']">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {exp.tech.length > 0 && <p className="mt-4 font-mono text-xs leading-5">{exp.tech.join(" · ")}</p>}
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default ExperienceSection;
