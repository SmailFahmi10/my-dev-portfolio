import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-14 border-t">
    <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-8 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24">
      <h2 id={`${id}-titulo`} className="heading text-2xl md:col-span-3 md:text-[1.75rem]">
        {title}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </div>
  </section>
);

export default Section;
