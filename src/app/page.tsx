import AosInitializer from "../components/Home/AOSInitializer";
import Services from "../components/Home/services";
import Gallery from "../components/Home/gallery";
import Explore from "../components/Home/explore";
import ScheduleATour from "../components/Home/schedule-a-tour";
import AboutAjaza from "@/components/Home/AboutAjaza";
import MainSection from "@/components/Home/MainHomeSection";

export default function Home() {

  return (
    <>
      <div>
        <AosInitializer />
        {/*Main section  */}
        <MainSection />
        {/* Our Property Services */}
        <Services />
        {/*Explore section  */}
        <Explore />
        {/* Gallery section */}
        <Gallery />
        {/* About Ajaza Section */}
        <AboutAjaza />
        {/* Schedule A Tour */}
        <ScheduleATour />
      </div>
    </>
  );
}
