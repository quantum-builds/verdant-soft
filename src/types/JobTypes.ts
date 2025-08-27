export enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  CONTRACT = "CONTRACT",
  INTERNSHIP = "INTERNSHIP",
}

interface CompanyInfo {
  name: string;
}

export interface Job {
  title: string;
  description: string;
  shareableLink: string;
  salary: string;
  type: JobType;
  company: CompanyInfo;
}
