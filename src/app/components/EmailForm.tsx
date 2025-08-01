"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef } from "react";
import toast from "react-hot-toast";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    trigger,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = async (
    e: React.KeyboardEvent,
    field: keyof ContactFormSchema
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const valid = await trigger(field);
      if (!valid) return;

      if (field === "name") {
        emailRef.current?.focus();
      } else if (field === "email") {
        messageRef.current?.focus();
      }
    }
  };

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        reset();
        nameRef.current?.focus();
        toast.success("Email sent successfully");
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error sending message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Name */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name*"
          {...register("name")}
          ref={(e) => {
            register("name").ref(e);
            nameRef.current = e;
          }}
          onKeyDown={(e) => handleKeyDown(e, "name")}
          className="w-full bg-[#F4F4F5]  text-lg lg:text-xl font-medium px-3 py-6 xl:px-4 xl:py-7 focus:outline-none focus:ring-0 focus:border-transparent rounded-lg max-w-5xl placeholder:text-md lg:placeholder:text-lg"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email*"
          {...register("email")}
          ref={(e) => {
            register("email").ref(e);
            emailRef.current = e;
          }}
          onKeyDown={(e) => handleKeyDown(e, "email")}
          className="w-full bg-[#F4F4F5] text-lg lg:text-xl font-medium px-3 py-6 xl:px-4 xl:py-7  max-w-5xl focus:outline-none focus:ring-0 focus:border-transparent rounded-lg placeholder:text-md lg:placeholder:text-lg"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-4">
        <textarea
          placeholder="Message* (Tell us about your project)"
          {...register("message")}
          ref={(e) => {
            register("message").ref(e);
            messageRef.current = e;
          }}
          onKeyDown={(e) => handleKeyDown(e, "message")}
          className="w-full bg-[#F4F4F5] text-lg lg:text-xl font-medium px-3 py-6 xl:px-4 xl:py-6 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent  max-w-5xl placeholder:text-md lg:placeholder:text-lg"
          rows={4}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full bg-footer-black text-white px-6 py-3 xl:px-7 xl:py-4 font-semibold rounded-lg items-center transition-all duration-200 text-xl hover:bg-green-gradient max-w-5xl disabled:opacity-60 disabled:cursor-not-allowed group flex justify-center gap-4 btn-3"
        style={{ "--clr": "#16a34a" } as React.CSSProperties}
      >
        {!isSubmitting && (
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
        )}
        <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
      </button>
    </form>
  );
}
