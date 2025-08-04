interface CaseStudyHeaderProps {
  title: string;
  description: string;
}

export default function CaseStudyHeader({
  title,
  description,
}: CaseStudyHeaderProps) {
  const styledTitle = description.replace(
    /<highlight>(.*?)<\/highlight>/g,
    '<span class="font-semibold">$1</span>'
  );

  return (
    <div className="flex flex-col  justify-center gap-12 lg:gap-16 ">
      <h1 className="text-[50px] xl:text-[60px] leading-tight font-semibold text-center break-words text-green-gradient mb-10">
        {title}
      </h1>
      {/* <h1 className="font-bold text-3xl xl:text-[40px]  text-green-gradient">
        {title}
      </h1> */}
      <p
        className="text-lg lg:text-xl "
        dangerouslySetInnerHTML={{ __html: styledTitle }}
      />
    </div>
  );
}
