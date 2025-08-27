"use client";

import { Job } from "@/types/JobTypes";
import JobRoleCard from "./JobRoleCard";
import { useState, useEffect } from "react";
import { getJobTypeLabel } from "@/utils/jobUtils";
import { showToast } from "@/utils/defaultToastOption";

interface JobRoleSectionProps {
  jobs: Job[] | string;
}

export default function JobRoleSection({ jobs }: JobRoleSectionProps) {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (typeof jobs === "string") {
      showToast("error", jobs);
    }
  }, [jobs]);

  return (
    <div className="flex flex-col gap-20">
      <h3 className="text-green-gradient text-3xl lg:text-4xl 3xl:text-[40px] 5xl:text-[45px] text-center font-semibold">
        Find the Role that Best Fits You!
      </h3>

      {typeof jobs === "string" ? (
        <p className="text-center text-lg text-gray-500">
          {jobs || "No jobs available at the moment. Please check back later."}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 xl:gap-10">
          {jobs.map((job, index) => (
            <JobRoleCard
              key={index}
              role={job.title}
              type={getJobTypeLabel(job.type)}
              city="Lahore"
              link={job.shareableLink}
              html={job.description}
              showDescription={openCard === index}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
