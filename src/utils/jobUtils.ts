import { JobType } from "@/types/JobTypes";

export function getJobTypeLabel(type: JobType): string {
  switch (type) {
    case JobType.FULL_TIME:
      return "Full Time";
    case JobType.PART_TIME:
      return "Part Time";
    case JobType.CONTRACT:
      return "Contract";
    case JobType.INTERNSHIP:
      return "Internship";
    default:
      return type;
  }
}
