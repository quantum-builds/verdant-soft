"use client";
import { FormField } from "@/common";
import * as z from "zod";
import { ResumeForm } from "../../components/ResumeForm";
import { useRouter } from "next/navigation";

const Fields: FormField[] = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    validation: z.string().min(1, "First name is required"),
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    validation: z.string().min(1, "Last name is required"),
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
    validation: z.string().email("Please enter a valid email address"),
  },
  {
    id: "telephone",
    label: "Telephone number",
    type: "tel",
    required: true,
    validation: z
      .string()
      .min(1, "Telephone number is required")
      .regex(/^\+?\d{9,15}$/, "Please enter a valid phone number"),
  },
  {
    id: "experienceLevel",
    label: "Experience Level",
    type: "select",
    required: true,
    validation: z.string().min(1, "Experience level is required"),
    options: [
      {
        value: "mid-level-devops-developer",
        label: "Mid-Level DevOps Developer",
      },
      {
        value: "business-development-manager",
        label: "Business development Manager",
      },
      { value: "mid-level-ui-ux-designer", label: "Mid-level UI/UX Designer" },
    ],
  },
];

interface ResumeFormWrapperProps {
  role: string;
}

export default function ResumeFormWrapper({ role }: ResumeFormWrapperProps) {
  const router = useRouter();
  return (
    <div className="flex-[70%] flex flex-col gap-8 w-11/12 sm:w-4/5 md:w-full">
      <h4 className="text-green-gradient text-2xl lg:text-3xl 3xl:text-4xl font-semibold">
        Enter your details
      </h4>
      <ResumeForm
        fields={Fields}
        role={role}
        onSubmit={() => router.push(`/career/resume-submitted/?ref=apply-now`)}
      />
    </div>
  );
}
