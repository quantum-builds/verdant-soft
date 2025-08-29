interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-90">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-green-gradient mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
