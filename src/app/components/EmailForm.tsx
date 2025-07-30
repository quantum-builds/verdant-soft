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
          className="w-full bg-[#F4F4F5]  text-lg lg:text-xl font-medium px-3 py-6 xl:px-4 xl:py-8 focus:outline-none focus:ring-0 focus:border-transparent rounded-lg max-w-3xl placeholder:text-md lg:placeholder:text-lg"
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
          className="w-full bg-[#F4F4F5] text-lg lg:text-xl font-medium px-3 py-6 xl:px-4 xl:py-8  max-w-3xl focus:outline-none focus:ring-0 focus:border-transparent rounded-lg placeholder:text-md lg:placeholder:text-lg"
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
          className="w-full bg-[#F4F4F5] text-lg lg:text-xl font-medium px-3 py-6 xl:px-4 xl:py-8 rounded-lg focus:outline-none focus:ring-0 focus:border-transparent  max-w-3xl placeholder:text-md lg:placeholder:text-lg"
          rows={4}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full text-2xl font-semibold py-4 xl:py-6 bg-black rounded-lg overflow-hidden transition-colors max-w-3xl disabled:opacity-60 disabled:cursor-not-allowed group"
      >
        <span className="absolute inset-0 w-0 group-hover:w-full bg-green-gradient transition-all duration-300 ease-in-out z-0" />
        <span className="relative z-10 text-white">
          {isSubmitting ? "Submitting..." : "Submit"}
        </span>
      </button>
    </form>
  );
}
