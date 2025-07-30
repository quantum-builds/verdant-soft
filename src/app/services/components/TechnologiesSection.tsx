import { IUseCase } from "@/common";
import Image from "next/image";

interface ITechnologiesSectionProps {
  title: string;
  useCases: IUseCase[];
}
export default function TechnologiesSection({
  title,
  useCases,
}: ITechnologiesSectionProps) {
  const styledTitle = title.replace(
    /<highlight>(.*?)<\/highlight>/g,
    '<span class="text-green-gradient">$1</span>'
  );

  return (
    <section
      id="technologies"
      className="scroll-mt-36 min-h-[580px] md:min-h-[630px] lg:min-h-[590px] xl:min-h-[705px] 2xl:min-h-[690px]  4xl:min-h-[710px] 5xl:min-h-[750px] w-11/12 xl:w-10/12 mx-auto flex flex-col gap-10 xl:gap-20 mb-20 overflow-hidden text-black"
    >
      <p
        className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-3/5 2xl:w-8/12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-[54px] 4xl:text-6xl 5xl:text-7xl font-semibold"
        dangerouslySetInnerHTML={{ __html: styledTitle }}
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7 lg:gap-5 xl:gap-12">
        {useCases.map((useCase, index) => (
          // gap-2 md:gap-5 xl:gap-10
          <div key={index} className="flex flex-col  ">
            <p className="text-green-gradient text-xl md:text-2xl lg:text-[28px] xl:text-[32px] font-semibold min-h-[40px] md:min-h-[70px] lg:min-h-[90px] xl:min-h-[100px] 5xl:min-h-[70px]">
              {useCase.title}
            </p>
            <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 xl:gap-7">
              {useCase.technologies.map((technology, index) => (
                <div key={index} className="flex gap-2 md:gap-3 items-center">
                  <Image
                    src={technology.image}
                    alt={technology.title}
                    className="w-5 lg:w-7 xl:w-10 h-5 lg:h-7 xl:h-10"
                  />
                  <p className="text-base md:text-lg lg:text-2xl xl:text-[28px]">
                    {technology.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
