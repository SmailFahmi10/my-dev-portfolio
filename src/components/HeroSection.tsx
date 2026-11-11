import { ArrowRight, Download } from "lucide-react";
import CareerTrack from "@/components/CareerTrack";
import { profile } from "@/lib/profile";

// Cajetín, como el de un plano: los datos que identifican la "pieza".
const titleBlock = [
  { term: "Rol", value: "Java backend engineer" },
  { term: "Empresa", value: "Serbatic, desde 2024" },
  { term: "Sectores", value: "Seguros y automoción" },
  { term: "Stack", value: "Java 21, Spring Boot, Kafka y AMQP, Kubernetes (AKS), Oracle SQL" },
  { term: "Base", value: profile.location },
  { term: "Idiomas", value: "Español, inglés, árabe darija" },
];

const HeroSection = () => (
  <section id="inicio" className="relative scroll-mt-14">
    <div className="sheet-grid pointer-events-none absolute inset-0" aria-hidden="true" />

    <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-24">
      <h1 className="display text-[clamp(2.5rem,9.5vw,6.75rem)]">
        Smail Fahmi <span className="whitespace-nowrap">Charnane</span>
      </h1>

      <div className="mt-10 grid gap-x-8 gap-y-10 md:mt-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="max-w-[36ch] text-xl font-medium leading-snug md:text-2xl">
            Backend engineer en Java. Microservicios Spring Boot orientados a eventos, en producción sobre Kubernetes
            y Oracle.
          </p>
          <p className="mt-5 max-w-[58ch] leading-relaxed text-muted-foreground">
            Llevo más de dos años desarrollando microservicios para clientes de seguros y automoción: mensajería
            asíncrona, integración con sistemas core, consultas SQL sobre grandes volúmenes de datos e incidencias en
            producción. Antes de programar fui técnico de mecatrónica industrial. De ahí viene mi forma de
            diagnosticar problemas en sistemas que no pueden pararse.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
            >
              Escríbeme
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded border border-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Descargar CV
            </a>
          </div>
        </div>

        <dl className="self-start border border-foreground bg-card md:col-span-5">
          {titleBlock.map((row) => (
            <div key={row.term} className="grid grid-cols-[6.5rem_1fr] border-b border-foreground last:border-b-0">
              <dt className="border-r border-foreground px-3 py-2.5 font-mono text-xs leading-5 text-muted-foreground">
                {row.term}
              </dt>
              <dd className="px-3 py-2.5 text-sm font-medium leading-5">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16 md:mt-24">
        <CareerTrack />
      </div>
    </div>
  </section>
);

export default HeroSection;
