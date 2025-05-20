import { Card, CardContent } from "../../components/ui/card";

const VideoSection = (): JSX.Element => {
  return (
    <section className=" w-full">
      <div className="w-screem h-[261px] overflow-hidden md:h-[527px] flex justify-center items-center relative" style={{background:"lightgray url(/rectangle-4351.png) center / cover no-repeat",}}>
      <div className="absolute top-0 left-0 w-full h-full " style={{ background: "rgba(0, 0, 0, 0.41)",}}></div>
        <Card className="mt-[50px] md:mt-[100px] flex flex-col w-[127.752px] h-[101.275px] md:w-[193px] md:h-[153px] items-center px-0 py-[7.943px] bg-white rounded-[9px] border-[5px] border-solid border-[#bade3c] rotate-[-6.79deg] shadow-note-shadow">
          <CardContent className="flex md:w-[247px] items-start p-0">
            <div className="w-full md:w-full [font-family:'Atelier-Regular',Helvetica] font-normal text-[#4b4b4b] text-[21.182px] md:text-[32px] text-center tracking-[0] leading-[normal]">
              &quot;How <br />
              It Works&quot;
            </div>
          </CardContent>
          <img
            className="w-[31.772px] h-[51.561px] md:w-[48px] md:h-[48px] md:mb-[-3.67px] rotate-[6.79deg]"
            alt="Play circle"
            src="/play-circle.svg"
          />
        </Card>
      </div>

      <div className="flex w-full items-center justify-center py-[20px] px-[10px] md:py-[40px] md:px-[30px] bg-[#fe37a3]">
        <span className="font-['Inter',Helvetica] font-bold text-[14px] md:text-[29px] text-white text-center leading-normal">
          Your Satisfaction, Our Priority:<br className="block md:hidden" /> Transforming Your Living Spaces
        </span>
      </div>
    </section>
  );
};

export default VideoSection;
