import Layout from "../Components/Layout/Layout";
import HomeHero from "../Containers/HomeHero/HomeHero";
import HomePageGetStarted from "../Containers/HomePageGetStarted/HomePageGetStarted";
import MissionSection from "../Containers/MissionSection/MissionSection";

export default function HomePage() {
  return (
    <Layout>
      <HomeHero />
      <MissionSection />
      <HomePageGetStarted />
    </Layout>
  );
}
