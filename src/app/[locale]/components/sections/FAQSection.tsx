import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

interface IQuestions {
  question: string;
}

export default function FAQSection() {
  const t = useTranslations("FAQSection");
  const QUESTIONS = t.raw("questions") as IQuestions[];

  return (
    <div className="flex flex-col gap-12  md:h-[75vh]  w-11/12 mx-auto mb-28 ">
      <p className="font-semibold text-2xl">[05 FAQ]</p>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-2/5 flex justify-start items-start">
          <div className="w-full">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-7xl font-semibold leading-tight font-inter text-start">
              {t.rich("headline", {
                highlight: (chunks) => (
                  <span className="text-green-gradient">{chunks}</span>
                ),
              })}
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/5 flex flex-col gap-6">
          {QUESTIONS.map((question, index) => (
            <div
              className="flex justify-between items-center bg-[#F9F9F9] rounded-xl py-10 px-5"
              key={index}
            >
              <p className="text-xl md:text-2xl font-semibold pr-4">
                {question.question}
              </p>
              <Plus className="text-green-gradient h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
