import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Verdant Soft",
  description:
    "Verdant Soft is a technology solutions company empowering businesses through innovative software, digital transformation, and scalable web and mobile applications.",
  icons: { icon: "/verdant-white-logo.svg" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />

        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body className={`${inter.variable} antialiased inter`}>{children}</body>
    </html>
  );
}
