import { services } from "../../Utilities/servicesData";
import HomePageGetStarted from "../HomePageGetStarted/HomePageGetStarted";
import ServiceBlock from "../ServiceBlock/ServiceBlock";
import HomeServicesHeader from "../HomeServicesHeader/HomeServicesHeader";
import ServicesHero from "../ServicesHero/ServicesHero";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <div className="container" id="services">
        <HomeServicesHeader />
        {services.map((service, index) => (
          <ServiceBlock
            key={service.title}
            eyebrow={index < 2 ? "Core service" : "Extended capabilities"}
            {...service}
          />
        ))}
      </div>
      <HomePageGetStarted />
    </>
  );
};

export default Services;
