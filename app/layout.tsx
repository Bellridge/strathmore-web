import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e1b2a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.strathmoreservice.com"),
  title: {
    default:
      "Strathmore Energy | Integrated Certainty. De-Risked Capital. Proven Execution.",
    template: "%s | Strathmore Energy",
  },
  description:
    "Strathmore Energy is a strategic advisory and execution firm redefining Africa's energy investment landscape. We integrate technical expertise, financial structuring, and operational excellence to de-risk capital and ensure project certainty from funding to First Oil.",
  keywords: [
    "Strathmore Energy",
    "oil and gas advisory",
    "energy investment Africa",
    "upstream development",
    "project financing",
    "de-risked capital",
    "energy infrastructure",
    "First Oil delivery",
    "integrated energy solutions",
    "Strathmore Africa",
  ],
  authors: [{ name: "Strathmore Energy Limited" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Strathmore Energy",
    title:
      "Strathmore Energy | Integrated Certainty. De-Risked Capital. Proven Execution.",
    description:
      "Architects of success for Africa's oil and gas assets. Strathmore Energy integrates technical, financial, and operational depth to deliver guaranteed project outcomes.",
    url: "https://www.strathmoreservice.com/",
    images: [
      {
        url: "https://res.cloudinary.com/dmbqk1irb/image/upload/v1762957244/logo_gtqztf.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@StrathmoreEnergy",
    title:
      "Strathmore Energy | Integrated Certainty. De-Risked Capital. Proven Execution.",
    description:
      "Delivering de-risked energy investments through integrated advisory, technical depth, and proven execution across Africa's energy sector.",
    images: [
      "https://res.cloudinary.com/dmbqk1irb/image/upload/v1762957244/logo_gtqztf.png",
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Strathmore Energy",
  url: "https://www.strathmoreservice.com",
  logo: "https://res.cloudinary.com/dmbqk1irb/image/upload/v1762957244/logo_gtqztf.png",
  description:
    "Strathmore Energy integrates financial, technical, and operational expertise to de-risk energy investments across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
