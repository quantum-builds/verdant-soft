import { StaticImageData } from "next/image";

export type FormField = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  validation?: z.ZodTypeAny;
  options?: { value: string; label: string }[]; // Added options for select fields
};

export interface ITechnology {
  image: StaticImageData;
  title: string;
}

export interface IUseCase {
  title: string;
  technologies: ITechnology[];
}

export interface NavOption {
  label: string;
  href?: string;
  hash?: string;
}

declare global {
  interface CalendlyApi {
    initPopupWidget(options: { url: string }): void;
  }

  interface Window {
    Calendly?: CalendlyApi;
  }
}
