import { services } from "../../Pages/HomePage";
import HomePageGetStarted from "../HomePageGetStarted/HomePageGetStarted";
import HomePageHowItWorks from "../HomePageHowItWorks/HomePageHowItWorks";
import HomeServicesHeader from "../HomeServicesHeader/HomeServicesHeader";
import ServicesHero from "../ServicesHero/ServicesHero";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <div id="services">
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
      </div>
      <HomePageGetStarted />
    </>
  );
};

export default Services;
