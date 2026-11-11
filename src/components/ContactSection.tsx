import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";

const channels = [
  { label: "Teléfono", value: profile.phoneLabel, href: `tel:${profile.phone}`, external: false },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { label: "CV en PDF", value: "Descargar", href: profile.cv, external: false, download: true },
];

const ContactSection = () => (
  <section id="contacto" aria-labelledby="contacto-titulo" className="on-ink scroll-mt-14 bg-foreground text-background">
    <div className="mx-auto max-w-6xl px-5 pb-10 pt-20 sm:px-8 md:pb-12 md:pt-28">
      <h2 id="contacto-titulo" className="heading text-2xl md:text-[1.75rem]">
        Contacto
      </h2>
      <p className="mt-4 max-w-[52ch] leading-relaxed text-background/70">
        Si tienes un proyecto o una vacante en la que crees que encajo, escríbeme.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="display mt-10 inline-block break-all text-[clamp(1.5rem,5.2vw,3.75rem)] underline decoration-signal-on-ink decoration-2 underline-offset-[0.18em] transition-colors hover:text-signal-on-ink"
      >
        {profile.email}
      </a>

      <ul className="mt-14 grid border border-background/25 sm:grid-cols-3">
        {channels.map((c) => (
          <li key={c.label} className="border-b border-background/25 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
            <a
              href={c.href}
              download={c.download}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-start justify-between gap-4 px-5 py-5"
            >
              <span>
                <span className="block font-mono text-xs text-background/60">{c.label}</span>
                <span className="mt-1 block font-medium transition-colors group-hover:text-signal-on-ink">{c.value}</span>
              </span>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-background/50 transition-colors group-hover:text-signal-on-ink" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ContactSection;
