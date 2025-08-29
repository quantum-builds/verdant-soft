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

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
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

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        showToast("error", "File size must be less than 5MB");
        e.target.value = "";
        setResumeFile(null);
        setValue("resume", null as any, { shouldValidate: true });
        return;
      }

      setResumeFile(file);
      setValue("resume", file as File, { shouldValidate: true });
    }
  };

  const handleFormSubmit = async (data: FormData) => {
    try {
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
        onSubmit();
      } else {
        showToast("error", "Error sending resume. Please try again.");
      }
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
          <span
            className={`absolute left-6  text-gray-400 pointer-events-none text-lg ${
              errors[field.id]
                ? "top-[35%] -translate-y-1/2"
                : "top-[45%] -translate-y-1/2"
            }`}
          >
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
      className={cn("flex flex-col gap-8", className)}
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
                className={`relative text-md lg:text-lg font-semibold text-green-gradient ${
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
                width={20}
                height={20}
                className="w-6 h-6"
              />
            </div>
            {resumeFile && (
              <span className="text-[#0ACF83] text-base cursor-default whitespace-nowrap">
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
          <p className="text-gray-500 text-sm">
            Only PDF or Word files are allowed (Max size: 5MB).
          </p>
          {errors.resume && (
            <p className="text-sm text-red-500">
              {errors.resume.message as string}
            </p>
          )}
        </div>
      </div>

      <button
        className="w-fit cursor-pointer flex bg-footer-black text-white px-5 py-3 xl:px-9 xl:py-5 rounded-2xl items-center gap-3 transition-all duration-200 text-xl xl:text-2xl hover:bg-green-gradient btn-3"
        style={{ "--clr": "#16a34a" } as React.CSSProperties}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : submitButtonText}
      </button>
    </form>
  );
}
