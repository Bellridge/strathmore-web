import Layout from "../Components/Layout/Layout";
import HomeHero from "../Containers/HomeHero/HomeHero";
import HomePageGetStarted from "../Containers/HomePageGetStarted/HomePageGetStarted";
import HomePageHowItWorks from "../Containers/HomePageHowItWorks/HomePageHowItWorks";
import HomePageWhyGiddaa from "../Containers/HomePageWhyGiddaa/HomePageWhyGiddaa";
import HomeServicesHeader from "../Containers/HomeServicesHeader/HomeServicesHeader";

export const services = [
  {
    title: "Financial Structuring & Capital Readiness",
    description:
      "We transform high-potential assets into funded ventures by providing strategic commercial support and financial architecture. Our role is to make your project investment-ready: we develop definitive documentation like the Competent Person's Report (CPR), advise on optimal financing structures (including RBL), and conduct integrated due diligence. This ensures that international financiers have absolute confidence in your asset's viability and accelerates your path to securing capital.",
    options: null,
  },
  {
    title: "Operational Assurance & Logistics Mastery",
    description:
      "We ensure the money raised is translated directly into uninterrupted field performance by treating every operational challenge as a strategic risk to be managed. This mastery involves deploying a systematic framework for risk mitigation, handling the end-to-end procurement and installation of critical assets, and overseeing all aspects of the supply chain to guarantee project continuity and safety.",
    options: null,
  },
  {
    title: "It Extends Further, We Also Offer",
    description:
      "We extend our assurance capabilities with comprehensive administrative, supply, and technical services necessary for safe, efficient field operations.",
    options: [
      {
        title: "Integrated Logistics & Marine Support",
        description:
          "We guarantee the compliant, reliable, and timely delivery of all materials, parts, and personnel across all terrains. This includes specialized land Haulage Support and essential Marine Support & Vessel Charter, providing secure vessels (e.g., security, crew, and tugboats) for reliable offshore and swamp logistics.",
      },
      {
        title: "Specialized Supply & Equipment",
        description:
          "We ensure continuous field operations through the reliable, timely provision of production and specialty chemicals (Supply of Chemicals & Consumables), alongside high-quality, certified protective gear (Personal Protective Equipment (PPE) & Safety Gear) to ensure personnel safety and regulatory compliance",
      },
      {
        title: "Technical Consulting Services",
        description:
          "We provide on-demand access to specialized expertise for short-term technical challenges, including reservoir studies, well test interpretation, and production optimization strategies.",
      },
    ],
  },
];

const HomePage = () => {
  return (
    <Layout>
      <HomeHero />
      <HomePageWhyGiddaa />
      <HomeServicesHeader />
      {services.map((data) => {
        return (
          <HomePageHowItWorks
            title={data?.title}
            description={data?.description}
            menu={data?.options}
            key={data?.title}
          />
        );
      })}
      <HomePageGetStarted />
    </Layout>
  );
};

export default HomePage;
