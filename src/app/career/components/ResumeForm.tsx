"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState, ChangeEvent, useEffect } from "react";
import { ResumeUploadIcon } from "@/assets";
import Image from "next/image";
import { FormField } from "@/common";
import { CustomDropdown } from "./CustomDropDown";
import { showToast } from "@/utils/defaultToastOption";

interface ResumeFormProps {
  onSubmit: () => void;
  className?: string;
  role?: string;
  fields: FormField[];
  submitButtonText?: string;
}

const resumeFileSchema = z
  .instanceof(File, { message: "Please upload your resume" })
  .refine(
    (file) =>
      [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type),
    { message: "Only PDF, DOC, or DOCX files are allowed" }
  );

export function ResumeForm({
  onSubmit,
  className,
  role,
  fields,
  submitButtonText = "Submit Application",
}: ResumeFormProps) {
  const baseSchema = z.object({
    resume: resumeFileSchema,
  });

  const formSchema = baseSchema.extend(
    fields.reduce((acc, field) => {
      if (field.validation) {
        acc[field.id] = field.validation;
      } else if (field.required) {
        acc[field.id] = z.string().min(1, `${field.label} is required`);
      } else {
        acc[field.id] = z.string().optional();
      }
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );

  type FormData = z.infer<typeof formSchema>;

  // Initialize state
  const initialFieldValues = fields.reduce((acc, field) => {
    // Set default value for experienceLevel if role matches
    if (field.id === "experienceLevel" && role) {
      const matchingOption = field.options?.find(
        (option) =>
          option.value.toLowerCase() === role.toLowerCase().replace(/\s+/g, "-")
      );
      acc[field.id] = matchingOption?.label || "";
    } else {
      acc[field.id] = "";
    }
    return acc;
  }, {} as Record<string, string>);

  const initialFocusedFields = fields.reduce((acc, field) => {
    acc[field.id] = false;
    return acc;
  }, {} as Record<string, boolean>);

  const [fieldValues, setFieldValues] = useState(initialFieldValues);
  const [focusedFields, setFocusedFields] = useState(initialFocusedFields);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: initialFieldValues, // Set default values including experienceLevel
  });

  // Set the initial value for experienceLevel when role changes
  useEffect(() => {
    if (role) {
      const experienceField = fields.find((f) => f.id === "experienceLevel");
      if (experienceField) {
        const matchingOption = experienceField.options?.find(
          (option) =>
            option.value.toLowerCase() ===
            role.toLowerCase().replace(/\s+/g, "-")
        );
        if (matchingOption) {
          setValue("experienceLevel", matchingOption.label);
          setFieldValues((prev) => ({
            ...prev,
            experienceLevel: matchingOption.label,
          }));
        }
      }
    }
  }, [role, fields, setValue]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    setValue("resume", file as File, { shouldValidate: true });
  };

  // const handleFormSubmit = async (data: FormData) => {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     const newRole = data.experienceLevel || role || "";
  //     onSubmit();
  //     console.log("Form submitted:", data);
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //   }
  // };

  const handleFormSubmit = async (data: FormData) => {
    try {
      console.log(data);
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("telephone", data.telephone);
      formData.append("experienceLevel", data.experienceLevel);
      formData.append("resume", data.resume);

      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        reset();
        showToast("success", "Email sent successfully");
      } else {
        throw new Error(result.error || "Unknown error");
      }
      onSubmit();
    } catch (error) {
      console.error("Error submitting form:", error);
      showToast("error", "Error sending resume. Please try again.");
    }
  };

  const renderField = (field: FormField) => {
    if (field.type === "select") {
      return (
        <CustomDropdown
          key={field.id}
          label={field.label}
          options={field.options || []}
          value={fieldValues[field.id]}
          onChange={(value) => {
            setValue(field.id as keyof FormData, value);
            setFieldValues((prev) => ({ ...prev, [field.id]: value }));
          }}
          required={field.required}
          error={errors[field.id]?.message as string}
        />
      );
    }

    return (
      <div className="relative space-y-2" key={field.id}>
        <div
          className={cn(
            "border-green-gradient h-[70px]",
            errors[field.id] && "error"
          )}
        >
          <Input
            id={field.id}
            type={field.type || "text"}
            {...register(field.id as keyof FormData, {
              onChange: (e) =>
                setFieldValues((prev) => ({
                  ...prev,
                  [field.id]: e.target.value,
                })),
            })}
            onFocus={() =>
              setFocusedFields((prev) => ({ ...prev, [field.id]: true }))
            }
            onBlur={() =>
              setFocusedFields((prev) => ({ ...prev, [field.id]: false }))
            }
            className="w-full h-full px-6 !text-xl focus:outline-none focus:ring-0 bg-transparent"
          />
        </div>

        {!fieldValues[field.id] && !focusedFields[field.id] && (
          <span className="absolute left-6 top-[45%] -translate-y-1/2 text-gray-400 pointer-events-none text-lg">
            {field.label}{" "}
            {field.required && <span className="text-red-500">*</span>}
          </span>
        )}
        {errors[field.id] && (
          <p className="text-sm text-red-500 mt-1">
            {errors[field.id]?.message as string}
          </p>
        )}
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={cn("space-y-8", className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-4">
        {fields.map((field) => renderField(field))}

        {/* Resume Upload Section */}
        <div className="flex flex-col justify-center gap-2">
          <div className="flex gap-5 items-center w-fit">
            <div
              className="flex gap-5 items-center w-fit cursor-pointer"
              onClick={() => {
                document.getElementById("resumeUpload")?.click();
              }}
            >
              <p
                className={`relative text-xl lg:text-2xl font-semibold text-green-gradient ${
                  !resumeFile
                    ? "after:content-[''] after:block after:w-full after:h-[2px] after:bg-green-gradient after:-mt-1"
                    : ""
                }`}
              >
                {resumeFile ? resumeFile.name : "Upload Resume"}
              </p>

              <Image
                src={ResumeUploadIcon}
                alt="resume-upload-icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            {resumeFile && (
              <span className="text-[#0ACF83] text-base cursor-default">
                ✓ Resume Submitted
              </span>
            )}
          </div>
          <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
          {errors.resume && (
            <p className="text-sm text-red-500">
              {errors.resume.message as string}
            </p>
          )}
        </div>
      </div>

      <button
        className="cursor-pointer flex bg-footer-black text-white px-4 py-2 xl:px-6 xl:py-3 rounded-lg items-center gap-3 transition-all duration-200 text-xl hover:bg-green-gradient btn-3"
        style={{ "--clr": "#16a34a" } as React.CSSProperties}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : submitButtonText}
        <span className="button__icon-wrapper">
          <svg
            width="10"
            className="button__icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            />
          </svg>
          <svg
            width="10"
            className="button__icon-svg button__icon-svg--copy"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            />
          </svg>
        </span>
      </button>
    </form>
  );
}
