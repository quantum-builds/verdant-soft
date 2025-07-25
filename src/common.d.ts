import { StaticImageData } from "next/image";

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
