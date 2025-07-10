"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data);
    // Here you’d call an API, etc.
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name*"
          {...register("name")}
          className="w-full bg-[#F4F4F5] text-xl font-medium px-4 py-8 rounded-lg max-w-3xl"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email*"
          {...register("email")}
          className="w-full bg-[#F4F4F5] text-xl font-medium px-4 py-8 rounded-lg max-w-3xl"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Message* (Tell us about your project)"
          {...register("message")}
          className="w-full bg-[#F4F4F5] text-xl font-medium px-4 py-8 rounded-lg max-w-3xl"
          rows={4}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-2xl font-semibold bg-black text-white py-6 rounded-lg hover:bg-gray-800 transition-colors max-w-3xl"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
