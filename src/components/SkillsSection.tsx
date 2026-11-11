import Section from "@/components/Section";

const skills = [
  { group: "Backend", items: ["Java 21", "Spring Boot", "Spring Security", "JPA/Hibernate", "Microservicios", "APIs REST"] },
  { group: "Mensajería y eventos", items: ["ActiveMQ/AMQP", "Kafka"] },
  { group: "Datos", items: ["Oracle SQL y PL/SQL", "PostgreSQL"] },
  { group: "Plataforma", items: ["Docker", "Kubernetes (AKS, Helm, KEDA)", "ArgoCD", "Azure DevOps", "CI/CD", "Git"] },
  { group: "Frontend", items: ["React", "TypeScript", "Angular"] },
  { group: "Automatización industrial", items: ["PLC", "SCADA", "SIMATIC STEP 7"] },
  { group: "Idiomas", items: ["Español (nativo)", "Inglés (profesional)", "Árabe darija (profesional)"] },
];

const SkillsSection = () => (
  <Section id="habilidades" title="Habilidades">
    <dl className="border-t border-foreground">
      {skills.map((s) => (
        <div key={s.group} className="grid gap-x-8 gap-y-1 border-b py-4 sm:grid-cols-[14rem_1fr]">
          <dt className="font-semibold">{s.group}</dt>
          <dd className="leading-relaxed text-muted-foreground">{s.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default SkillsSection;
