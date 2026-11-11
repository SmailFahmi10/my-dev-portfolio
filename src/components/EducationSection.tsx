import Section from "@/components/Section";

const education = [
  {
    title: "FPS Desarrollo de Aplicaciones Web (DAW)",
    place: "I.E.S. Claudio Moyano · MySQL, Spring Boot, JavaScript, Git, HTML",
    period: "Sep 2022 – May 2024",
  },
  {
    title: "FPS Mecatrónica Industrial",
    place: "I.E.S. Universidad Laboral · PLC, SIMATIC STEP 7",
    period: "Sep 2019 – Jun 2021",
    award: "Medalla de oro en Mecatrónica, CYLSkills",
  },
  {
    title: "Bachillerato, Ciencias Tecnológicas",
    place: "I.E.S. Poeta Claudio Rodríguez",
    period: "Sep 2017 – Jun 2019",
  },
  {
    title: "Certificación profesional: Eléctrico y electrónico del vehículo",
    place: "TMVG0209",
    period: "Ene 2018 – Jul 2018",
  },
];

const EducationSection = () => (
  <Section id="formacion" title="Formación">
    <ul className="border-t border-foreground">
      {education.map((e) => (
        <li key={e.title} className="grid gap-x-8 gap-y-1 border-b py-5 lg:grid-cols-[12rem_1fr]">
          <p className="font-mono text-sm leading-6 text-muted-foreground">{e.period}</p>
          <div>
            <h3 className="font-semibold leading-6">{e.title}</h3>
            <p className="mt-0.5 text-muted-foreground">{e.place}</p>
            {e.award && (
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                {e.award}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  </Section>
);

export default EducationSection;
