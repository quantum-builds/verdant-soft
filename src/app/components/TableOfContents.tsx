interface TableOfContentsProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <aside className="hidden lg:block lg:w-3/12 xl:w-1/4 sticky top-28 h-fit p-4 rounded-lg bg-gray">
      <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3 text-green-gradient">
        Table of Contents
      </h3>
      <ul className="space-y-2 text-md md:text-lg xl:text-xl font-medium ml-2">
        {sections.map((section) => (
          <li key={section.id} className="flex items-center gap-2">
            <span className="text-green-gradient before:content-['•'] before:mr-2"></span>
            <a
              href={`#${section.id}`}
              className="text-green-gradient hover:underline"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
