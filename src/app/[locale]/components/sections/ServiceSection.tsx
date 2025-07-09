import { useTranslations } from "next-intl";

interface Services {
  title: string;
  description: string;
}
export default function ServiceSection() {
  const t = useTranslations("ServicesSection");
  const services = t.raw("services") as Services[];
  return (
    <div className="h-[92vh] w-11/12 mx-auto flex flex-col mb-28 gap-12">
      <p className="font-semibold text-2xl">[01 Services]</p>
      <div className="flex flex-col gap-2">
        <p className="w-10/12 lg:w-2/3 text-2xl lg:text-4xl xl:text-7xl font-semibold">
          {t.rich("headline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </p>
        <p className="w-10/12 lg:w-2/3 text-2xl lg:text-4xl xl:text-7xl font-semibold">
          {t.rich("subheadline", {
            highlight: (chunks) => (
              <span className="text-green-gradient">{chunks}</span>
            ),
          })}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray w-full py-9 px-3 rounded-xl">
            <p className="text-4xl font-semibold">{service.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-black w-full py-9 px-3 rounded-xl flex justify-between">
        <p className="text-white text-4xl  font-semibold">{t("cta.text")}</p>
        <p className="text-white text-4xl  font-semibold">{t("cta.button")}</p>
      </div>
    </div>
  );
}
