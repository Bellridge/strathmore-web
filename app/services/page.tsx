import type { Metadata } from "next";
import Layout from "../../Components/Layout/Layout";
import Services from "../../Containers/Services/Services";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Strathmore Energy's integrated core services: financial structuring and capital readiness, operational assurance and logistics mastery, and specialized technical, supply, and marine support for energy assets across Africa.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "What We Do | Strathmore Energy",
    description:
      "Strathmore Energy's integrated core services: financial structuring, operational assurance, and specialized technical, supply, and marine support.",
    url: "https://www.strathmoreservice.com/services",
  },
};

export default function ServicesPage() {
  return (
    <Layout>
      <Services />
    </Layout>
  );
}
