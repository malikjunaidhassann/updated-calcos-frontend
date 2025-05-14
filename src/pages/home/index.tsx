import Catalog from "./Catalog";
import Footer  from "../../components/Footer";
import HeroSection from "./HeroSection";
import TopCategories from "./TopCategories";
import Header from "../../components/Header";

const Home = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-w-[320px] mx-auto bg-black">
      <Header/>
      <HeroSection />
      <Catalog />
      <TopCategories />
      <Footer/>
    </main>
  );
};

export default Home;