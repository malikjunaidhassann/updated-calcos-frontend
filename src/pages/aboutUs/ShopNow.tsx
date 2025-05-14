import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";

const ShopNow = (): JSX.Element => {
  return (
    <section className="w-full flex  justify-center bg-black">
      <div className="flex flex-col justify-between md:flex-row items-center gap-8 p-8 md:p-20 md:w-[1740px]">
        <div className="flex flex-col items-center md:items-start gap-[22px] max-w-[593px] w-full">
          <h2 className=" text-white text-[24px] md:text-[44px] font-bold text-wrap  text-center md:text-left">
            Let&apos;s create your dream home today!
          </h2>

          <p className="font-paragraph-3 font-[number:var(--paragraph-3-font-weight)] text-[#b7b7b7] text-[length:var(--paragraph-3-font-size)] tracking-[var(--paragraph-3-letter-spacing)] leading-[var(--paragraph-3-line-height)] [font-style:var(--paragraph-3-font-style)] text-center md:text-left">
          Turn your vision into reality with Calcos. Whether it’s upgrading your living room, refreshing your workspace, or creating a cozy nook, we’ve got you covered. Explore stylish, functional, and affordable furniture designed to fit your lifestyle.
          </p>

          <Button className="bg-[#fe37a3] hover:bg-[#fe37a3]/90 rounded-xl px-5 py-2.5 [font-family:'Montserrat',Helvetica] font-bold text-white text-base md:w-auto">
            Shop Now
          </Button>
        </div>

        <div className="w-full md:w-[518.65px] h-[350px] flex flex-col justify-evenly">
          <Card className="flex self-end bg-white rounded-[15px] shadow-[0px_4px_8px_#30303026] md:w-auto w-[192.052px] p-[15px]">
            <CardContent className="p-0 md:p-5">
              <div className="flex items-center gap-[37px] w-full">
                <div className="flex flex-col items-start gap-[5px] flex-1">
                  <div className="flex justify-center gap-2.5 w-full items-center">
                    <span className="flex-1 [font-family:'Montserrat',Helvetica] font-semibold text-dark-black text-[12px]">
                      All the Findings
                    </span>
                  </div>

                  <div className="flex gap-2.5 w-full items-center">
                    <span className="[font-family:'Montserrat',Helvetica] font-light text-[#B9B9B9] text-[10px]">
                      15 people watching
                    </span>
                  </div>
                </div>

                <img
                  className="w-[26.64px] h-[26.64px] md:w-[37px] md:h-[37px]"
                  alt="Favorite"
                  src="/favorite.png"
                />
              </div>

              <div className="flex flex-col items-start gap-[5px]">
                <div className="flex items-center justify-center gap-2.5">
                  <div className="[font-family:'Montserrat',Helvetica] font-light text-dark-black text-xs">
                    <span className="text-[#fe37a3]">30%</span>
                    <span className="text-[#303030]"> Cheaper</span>
                  </div>
                </div>

                <div className="relative w-full md:w-[229px] h-2">
                  <Progress
                    value={30}
                    className="h-2 bg-soft-grey rounded-[10px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="w-[97px] h-[97px] flex justify-center items-center bg-[#fe37a3] rounded-xl">
            <img
              className="object-fill"
              alt="Sentiment very"
              src="/sentiment-very-satisfied.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow