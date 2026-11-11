import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/profile";

const links = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Formación", href: "#formacion" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <nav aria-label="Principal" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="heading text-base">
          Smail Fahmi
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded border border-foreground px-3 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="-mr-2 p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base">
              {l.label}
            </a>
          ))}
          <a href={profile.cv} download className="mt-2 inline-flex items-center gap-2 py-3 text-base font-medium text-primary">
            <Download className="h-4 w-4" aria-hidden="true" />
            Descargar CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
