import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ShopNow  from "./ShopNow";
import Headline from "./Headline";
import VideoSection from "./VideoSection";
import VisionAndMission from "./VisionAndMission";

const index = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-col items-center w-full">
        <Header />
      <div className="mt-10 bg-black w-full">
        <Headline />
        <VideoSection />
        <VisionAndMission />
        <ShopNow />
      </div>
      <Footer/>
    </div>
  );
};

export default index;