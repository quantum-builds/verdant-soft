import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

export const metadata = {
  title: "Verdant Soft",
  description:
    "Verdant Soft is a technology solutions company empowering businesses through innovative software, digital transformation, and scalable web and mobile applications.",
  // manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    // apple: "/apple-touch-icon.png",
  },
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
      </head>

      <body className={`${inter.variable} antialiased inter zoom-out`}>
        {/* Calendly script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />

        {/* Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F88C2VW0VY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F88C2VW0VY');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
