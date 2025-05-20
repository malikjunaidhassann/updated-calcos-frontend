import SearchBar from "../../components/SearchBar";
import { Card, CardContent } from "../../components/ui/card";

const HeroSection = (): JSX.Element => {
  return (
  <section className="flex flex-col w-full items-center [background:linear-gradient(180deg,rgba(227,227,227,0)_0%,rgba(30,30,30,0.99)_100%),url(..//hero.png)_50%_50%_/_cover] min-h-screen">

    <div className="flex flex-col w-full justify-center min-h-[calc(100vh-80px)] px-4 sm:px-8 md:px-20 items-center h-[789px]">
      <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto pt-14 md:pt-0">
        {/* Main Heading */}
        <h1 className="text-center md:text-left text-5xl md:text-7xl lg:text-9xl mb-4 md:mb-8 [font-family:'Felixe-Regular',Helvetica] font-normal text-white tracking-[0] leading-tight">
          calcos
        </h1>

        {/* Subheading */}
        <h2 className="text-center md:text-left text-2xl md:text-[20px] mb-8 md:mb-12 [font-family:'Inter',Helvetica] font-bold text-white tracking-[0] leading-[normal] max-w-[787px]">
          Find similar products for less
        </h2>

        {/* Search Bar */}
        <SearchBar />

        {/* How It Works Card */}
        <Card className="mt-[40px] md:mt-[60px] flex flex-col w-[80.004px] h-[62.936px] md:w-[170px] md:h-[135px] items-center px-0 py-1 bg-white rounded-[9px] border-[5px] border-solid border-[#bade3c] rotate-[-6.79deg] shadow-note-shadow">
          <CardContent className="flex md:w-[247px] items-start p-0">
            <div className="w-full md:w-full [font-family:'Atelier-Regular',Helvetica] font-normal text-[#4b4b4b] md:text-[23px] mt-3 text-center tracking-[0] leading-[normal]">
              &quot;How <br />
              It Works&quot;
            </div>
          </CardContent>
          <img
            className="w-[22.882px] h-[22.882px] md:w-[48px] md:h-[48px] md:mb-[-3.67px] rotate-[6.79deg]"
            alt="Play circle"
            src="/play-circle.svg"
          />
        </Card>
      </div>
    </div>
  </section>
)};

export default HeroSection;