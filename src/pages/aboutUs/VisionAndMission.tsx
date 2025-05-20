import { Card, CardContent } from "../../components/ui/card";
import { useState, useEffect, /** useRef  */ } from "react";
import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";

const VisionAndMission = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add resize event listener
    window.addEventListener("resize", checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement, {}, KeenSliderInstance>({
    loop: false,
    disabled: !isMobile, // Disable slider on desktop
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Autoplay effect - only for mobile
  // useEffect(() => {
    
  //   if (!isMobile) return;
  //   const start = () => {
  //     if (timeout.current) clearTimeout(timeout.current);
  //     timeout.current = setTimeout(() => {
  //       instanceRef.current?.next();
  //     }, 3000);
  //   };
    
  //   start();
    
  //   instanceRef.current?.on("dragStarted", () => {
  //     if (timeout.current) clearTimeout(timeout.current);
  //   });
  //   instanceRef.current?.on("animationEnded", start);
  //   instanceRef.current?.on("updated", start);
    
  //   return () => {
  //     if (timeout.current) clearTimeout(timeout.current);
  //   };
  // }, [instanceRef, isMobile]);

  const missionCards = [
    {
      icon: "/hiking.png",
      iconAlt: "Hiking",
      title: "Creating Spaces That Inspire",
      description:
        "We aim to craft designs that elevate your home experience, combining modern trends with timeless quality.",
    },
    {
      icon: "/travel-explore.png",
      iconAlt: "Travel explore",
      title: "Affordable and Accessible",
      description:
        "Our aim is to make the world more accessible to you, providing opportunities to explore diverse cultures and breathtaking landscapes.",
    },
    {
      icon: "/check-circle.png",
      iconAlt: "Check circle",
      title: "Your Trusted Product Companion",
      description:
        "From selecting the right pieces to envisioning a cohesive home design, we're here every step of the way, making your dream home a reality.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[50px] py-20 bg-black w-full px-4 overflow-hidden">
      <header className="flex flex-col items-center gap-[5px] w-[374px] md:w-full">
        <h2 className="w-full font-bold md:text-[43px] text-white text-center font-['Inter',Helvetica] leading-normal md:text-4xl text-[20px]">
          Our Vision and Mission
        </h2>
        <p className="font-normal text-[sm] text-[#b7b7b7] text-center font-['Inter',Helvetica] leading-normal px-4">
          We ensure that you'll embark on a perfectly planned and safe vacation.
        </p>
      </header>

      {/* Mobile view (carousel) */}
      {isMobile ? (
        <>
          <div ref={sliderRef} className="keen-slider w-[90%] max-w-3xl">
            {missionCards.map((card, index) => (
              <div key={index} className="keen-slider__slide flex flex-row justify-center">
                <Card className="bg-white rounded-xl shadow-[0px_4px_4px_#4d4d4d0d] w-[300px] h-[230px] py-5">
                  <CardContent className="flex flex-col items-center gap-2.5 h-[214px]">
                    <img
                      className="w-[65px] h-[65px] flex-shrink-0"
                      alt={card.iconAlt}
                      src={card.icon}
                    />
                    <div className="flex w-full justify-center items-center">
                      <h3 className="w-full text-nowrap font-bold text-sm text-black text-center font-['Inter',Helvetica] leading-normal">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex justify-center self-stretch items-center">
                      <p className="font-light text-xs text-black text-center font-['Inter',Helvetica] leading-[18px]">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-1 gap-2">
            {missionCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                  currentSlide === idx ? "bg-[#fe37a3]" : "bg-white"
                }`}
              />
            ))}
          </div>
        </>
      ) : (
        /* Desktop view (static row) */
        <div className="flex flex-row justify-center gap-6 w-full max-w-6xl">
          {missionCards.map((card, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-[0px_4px_4px_#4d4d4d0d] w-[300px] h-[250px] py-5">
              <CardContent className="flex flex-col items-center gap-2.5 h-[214px]">
                <img
                  className="w-[65px] h-[65px] flex-shrink-0"
                  alt={card.iconAlt}
                  src={card.icon}
                />
                <div className="flex w-full justify-center items-center">
                  <h3 className="w-full text-nowrap font-bold text-sm text-black text-center font-['Inter',Helvetica] leading-normal">
                    {card.title}
                  </h3>
                </div>
                <div className="flex justify-center self-stretch items-center">
                  <p className="font-light text-xs text-black text-center font-['Inter',Helvetica] leading-[18px]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default VisionAndMission;