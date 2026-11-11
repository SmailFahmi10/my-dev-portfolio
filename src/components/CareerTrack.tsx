import type { CSSProperties } from "react";

// La trayectoria, dibujada como un esquema unifilar: de la planta industrial al software.
const stages = [
  { year: "2019", title: "Mecatrónica industrial", note: "FP superior y medalla de oro en CYLSkills", kind: "industria" },
  { year: "2021", title: "Mantenimiento y automatización industrial", note: "Audens Food y Cobadu (PLC y SCADA)", kind: "industria" },
  { year: "2022", title: "Mantenimiento técnico", note: "Tymr, mientras empiezo DAW", kind: "industria" },
  { year: "2024", title: "Junior backend developer", note: "Serbatic", kind: "software" },
  { year: "Hoy", title: "Java backend engineer", note: "Serbatic, microservicios orientados a eventos", kind: "software" },
] as const;

const CareerTrack = () => (
  <div>
    <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h2 className="font-mono text-sm text-muted-foreground">Recorrido</h2>
      <p className="flex items-center gap-5 font-mono text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="track-node !static" data-kind="industria" aria-hidden="true" />
          Industria
        </span>
        <span className="flex items-center gap-2">
          <span className="track-node !static" data-kind="software" aria-hidden="true" />
          Software
        </span>
      </p>
    </div>

    <ol className="track">
      {stages.map((s, i) => (
        <li key={s.year} className="track-stage" style={{ "--i": i } as CSSProperties}>
          <span className="track-node" data-kind={s.kind} aria-hidden="true" />
          <p className="font-mono text-sm text-muted-foreground">{s.year}</p>
          <p className="mt-1 font-semibold leading-snug">{s.title}</p>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">{s.note}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default CareerTrack;
