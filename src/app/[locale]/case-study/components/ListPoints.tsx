interface ListPointsProps {
  title: string;
  challenges: string[];
}

export default function ListPoints({ title, challenges }: ListPointsProps) {
  return (
    <div className="flex flex-col gap-16">
      <div className="h-1 bg-green-gradient w-30"></div>

      <div className="flex flex-col gap-10">
        <h3 className="text-2xl lg:text-[28px] 2xl:text-[32px] 5xl:text-[40px] font-semibold text-green-gradient">
          {title}
        </h3>
        <div className="flex flex-col gap-6">
          <ul className="pl-2 lg:pl-6 space-y-5 text-lg xl:text-xl">
            {challenges.map((text, index) => (
              <li key={index} className="flex gap-4 lg:gap-8 items-start ">
                <span className="mt-2 w-3 h-3 min-w-[12px] rounded-full bg-green-gradient" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
