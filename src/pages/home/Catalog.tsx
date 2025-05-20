import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderInstance } from "keen-slider";
import { Star } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

// Category data for the filter buttons
const categories = [
  { name: "All", active: false },
  { name: "Lightning", active: false },
  { name: "Desk / Table", active: false },
  { name: "Sofa/Chair", active: false },
  { name: "Accesories", active: false },
];

// Product catalog data
const catalogProducts = [
  {
    name: "Hampton Classic",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: "1,189$",
    hasImage: true,
    imageSrc: "/image.png",
  },
  {
    name: "Frigade Puff",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: "989$",
    hasImage: true,
    imageSrc: "/image-2.png",
  },
  {
    name: "Ediston Revea",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: "895$",
    hasImage: true,
    imageSrc: "/rectangle-1190.svg",
  },
];
// Products Comparison
const comparisonproducts = [
  {
    id: 1,
    name: "Sofa SWLJK",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: 1412,
    featured: false,
    image: "/image.png",
  },
  {
    id: 2,
    name: "Sofa SWLJK",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: 1412,
    featured: false,
    image: "/image-2.png",
  },
  {
    id: 3,
    name: "Sofa SWLJK",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: 1412,
    featured: true,
    image: "/image.png",
  },
  {
    id: 4,
    name: "Sofa SWLJK",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: 1412,
    featured: true,
    image: "/living-room.png",
  },
  {
    id: 5,
    name: "Sofa SWLJK",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: 1412,
    featured: false,
    image: "/image.png",
  },
  {
    id: 6,
    name: "Sofa SWLJK",
    description: "3-seat sofa with chaise longue, Gunnared beige",
    price: 1412,
    featured: false,
    image: "/image.png",
  },
];

const Catalog = (): JSX.Element => {
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

  const [sliderRef, instanceRef] = useKeenSlider<
    HTMLDivElement,
    {},
    KeenSliderInstance
  >({
    loop: false,
    disabled: !isMobile, // Disable slider on desktop
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="w-full  bg-black py-14">
      <div className="flex flex-col items-center justify-center gap-14 px-5 md:px-20">
        <div className="flex flex-col items-center gap-16 w-full max-w-[1260px]">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className=" w-[70%] font-['Hanken_Grotesk',Helvetica] font-bold text-white text-xxl md:text-5xl text-center leading-tight">
              Discover Affordable Alternatives  Without Compromising Style
            </h2>

            <p className="font-['Inter',Helvetica] font-normal text-[#8f8f8f] text-x md:text-x text-center leading-relaxed">
              From high-end originals to budget-friendly lookalikes, explore
              furniture designed  to fit your taste and budget.
            </p>

            <div className="flex flex-wrap justify-center gap-4 w-full max-w-[1260px] py-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={`w-[100px] h-[38px] md:w-[140px] md:h-[44px] text-[10px] md:text-[18px] px-6 rounded-[10px] focus:bg-[#fe37a3] focus:text-white ${
                    category.name
                      ? "bg-neutral-100 text-[#0f0e0e]"
                      : " bg-[#fe37a3] text-white"
                  }`}
                >
                  <span className="font-['Inter',Helvetica] font-medium text-[10px] md:text-[15px] text-black">
                    {category.name}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {isMobile ? (
            <>
              <div
                ref={sliderRef}
                className="keen-slider w-[90%] max-w-3xl rounded-none"
              >
                {comparisonproducts.map((card, index) => (
                  <div
                    key={index}
                    className="keen-slider__slide flex flex-row justify-center gap-[40px]"
                  >
                    <Card className="bg-[#1e1e1e] rounded-none border-none w-[327px] p-0">
                      <CardContent className="flex flex-col p-0 items-center h-[450px]">
                        <div className="h-[450px] relative">
                          <img
                            className="w-full h-full flex-shrink-0 object-cover"
                            alt={card.name}
                            src={card.image}
                          />
                          <button className="absolute bottom-2.5 left-2.5 bg-white px-[14px] py-[12px] rounded-[10px] text-[16px] text-normal disable-ligatures font-medium ">
                            Veiw Details
                          </button>
                        </div>
                        <div className="flex flex-col w-full py-1 px-2">
                          <div className="flex flex-row items-center gap-[1px] w-fit">
                            <Star fill="green" />
                            <Star fill="green" />
                            <Star fill="green" />
                            <Star fill="green" />
                            <Star fill="green" />
                            <Star fill="green" />
                          </div>
                          <div className="flex flex-row w-full justify-between items-center">
                            <div className="flex flex-col ">
                              <span className="text-[30px] font-bold text-white">
                                {card.name}
                              </span>
                              <span className="text-[18px] text-[#BFBFBF] font-normal">
                                Price ${card.price}
                              </span>
                            </div>
                            <img
                              className="w-[64px] h-[64px] object-cover bg-white rounded-lg p-4"
                              alt="Shopping cart"
                              src="/material-symbols-shopping-cart.svg"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-[-30px] gap-2">
                {comparisonproducts.map((_, idx) => (
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
            <>
              <Carousel className="w-full max-w-[1076px]">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative w-[85%] h-[270px]">

                      <Card className="absolute w-[339px] h-[202px] top-[34px] left-[136px] bg-white rounded-[10.34px] border-[1.03px] border-solid">
                        <CardContent className="p-0">
                          <div className="flex">
                            <div className="flex flex-col w-36 items-start gap-[7.41px] pt-[9.26px] pb-[13.89px] px-[9.26px] m-2.5 bg-[#1e1e1e] rounded-[9.26px]">
                              <div className="w-[123.19px] h-[91.7px] rounded-[4.63px] bg-[#f9fafb]" />
                              <div className="w-[123.19px] gap-[5px_29.64px] flex flex-wrap items-end">
                                <div className="w-[82.04px] h-[13.89px] mt-[-0.93px] font-['DM_Sans',Helvetica] font-medium text-white text-[13px] tracking-[-0.52px]">
                                  Sofa SWLJK
                                </div>
                                <div className="w-[123.19px] text-white text-[7.4px] font-['Inter',Helvetica] font-normal">
                                  3-seat sofa with chaise longue, Gunnared beige
                                </div>
                                <div className="w-[76.88px] h-[16.67px] font-bold text-[white] text-[11.1px] font-['Inter',Helvetica]">
                                  Price 1,412$
                                </div>
                                <img
                                  className="w-[16.67px] h-[16.67px]"
                                  alt="Shopping cart"
                                  src="/material-symbols-shopping-cart.svg"
                                />
                              </div>
                            </div>

                            <div className="w-0.5 h-[102px] my-auto mx-2 bg-white rounded-[5.17px]" />

                            <div className="flex flex-col w-36 items-start gap-[7.41px] pt-[9.26px] pb-[13.89px] px-[9.26px] m-2.5 bg-[#1e1e1e] rounded-[9.26px]">
                              <div className="w-[123.19px] h-[91.7px] rounded-[4.63px] bg-[#f9fafb]" />
                              <div className="flex flex-wrap w-[123.19px] items-end gap-[5px_29.64px]">
                                <div className="w-[82.04px] h-[13.89px] mt-[-0.93px] font-['DM_Sans',Helvetica] text-white text-[13px] tracking-[-0.52px] leading-[0.1px] font-medium">
                                  Sofa SWLJK
                                </div>
                                <div className="w-[123.19px] font-['Inter',Helvetica] font-normal text-white text-[7.4px] tracking-[-0.07px] leading-[9.3px]">
                                  3-seat sofa with chaise longue, Gunnared beige
                                </div>
                                <div className="w-[76.88px] h-[16.67px] font-bold text-[#fe37a3] text-[11.1px] tracking-[-0.11px] leading-[0.1px] font-['Inter',Helvetica]">
                                  Price 19,898$
                                </div>
                                <img
                                  className="w-[16.67px] h-[16.67px]"
                                  alt="Shopping cart"
                                  src="/material-symbols-shopping-cart-4.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="absolute w-[339px] h-[202px] top-[34px] left-[591px] bg-white rounded-[10.34px] border-[1.03px] border-solid">
                        <CardContent className="p-0">
                          <div className="flex">
                            <div className="flex flex-col w-36 items-start gap-[7.41px] pt-[9.26px] pb-[13.89px] px-[9.26px] m-2.5 bg-[#1e1e1e] rounded-[9.26px]">
                              <div className="w-[123.19px] h-[91.7px] rounded-[4.63px] bg-[#f9fafb]" />
                              <div className="flex flex-wrap w-[123.19px] items-end gap-[5px_29.64px]">
                                <div className="w-[82.04px] h-[13.89px] mt-[-0.93px] font-['DM_Sans',Helvetica] text-white text-[13px] tracking-[-0.52px] leading-[0.1px] font-medium">
                                  Sofa SWLJK
                                </div>
                                <div className="w-[123.19px] font-['Inter',Helvetica] font-normal text-white text-[7.4px] tracking-[-0.07px] leading-[9.3px]">
                                  3-seat sofa with chaise longue, Gunnared beige
                                </div>
                                <div className="w-[76.88px] h-[16.67px] font-bold text-[#fe37a3] text-[11.1px] tracking-[-0.11px] leading-[0.1px] font-['Inter',Helvetica]">
                                  Price 19,898$
                                </div>
                                <img
                                  className="w-[16.67px] h-[16.67px]"
                                  alt="Shopping cart"
                                  src="/material-symbols-shopping-cart.svg"
                                />
                              </div>
                            </div>

                            <div className="w-0.5 h-[102px] my-auto mx-2 bg-white rounded-[5.17px]" />

                            <div className="flex flex-col w-36 items-start gap-[7.41px] pt-[9.26px] pb-[13.89px] px-[9.26px] m-2.5 bg-[#1e1e1e] rounded-[9.26px]">
                              <div className="w-[123.19px] h-[91.7px] rounded-[4.63px] bg-[#f9fafb]" />
                              {/* Changes to be applied Hanken_Grotesk */}
                              <div className="w-[123.19px] gap-[5px_29.64px] flex flex-wrap items-end">
                                <div className="w-[82.04px] h-[13.89px] mt-[-0.93px] font-['DM_Sans',Helvetica] font-medium text-white text-[13px] tracking-[-0.52px]">
                                  Sofa SWLJK
                                </div>
                                <div className="w-[123.19px] text-white text-[7.4px] font-['Inter',Helvetica] font-normal">
                                  3-seat sofa with chaise longue, Gunnared beige
                                </div>
                                <div className="w-[76.88px] h-[16.67px] font-bold text-[#fe37a3] text-[11.1px] font-['Inter',Helvetica]">
                                  Price 1,412$
                                </div>
                                <img
                                  className="w-[16.67px] h-[16.67px]"
                                  alt="Shopping cart"
                                  src="/material-symbols-shopping-cart.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="absolute w-[455px] h-[270px] top-0 left-[306px] bg-white rounded-[13.87px] border-[1.39px] border-solid border-[#1e1e1e]">
                        <CardContent className="p-0">
                          <div className="flex">
                            <div className="flex flex-col w-[193px] items-start gap-[9.94px] pt-[12.42px] pb-[18.64px] px-[12.42px] m-[13px] bg-[#1e1e1e] rounded-[12.42px]">
                              <div className="w-[165.24px] h-[123px] rounded-[6.21px] bg-[#f9fafb]" />
                              <div className="w-[165.24px] gap-[5px_39.76px] flex flex-wrap items-end">
                                <div className="w-[110.05px] h-[18.64px] mt-[-1.24px] font-['DM_Sans',Helvetica] font-medium text-white text-[17.4px] tracking-[-0.70px">
                                  Sofa SWLJK
                                </div>
                                <div className="w-[165.24px] text-white text-[9.9px] font-['Inter',Helvetica] font-normal">
                                  3-seat sofa with chaise longue, Gunnared beige
                                </div>
                                <div className="w-[103.12px] h-[22.36px] font-bold text-[white] text-[14.9px] font-['Inter',Helvetica]">
                                  Price 1,412$
                                </div>
                                <img
                                  className="w-[22.36px] h-[22.36px]"
                                  alt="Shopping cart"
                                  src="/material-symbols-shopping-cart.svg"
                                />
                              </div>
                            </div>

                            <div className="w-[3px] h-[137px] my-auto mx-4 bg-[#9c9c9c] rounded-[6.93px]" />

                            <div className="flex flex-col w-[193px] items-start gap-[9.94px] pt-[12.42px] pb-[18.64px] px-[12.42px] m-[13px] bg-[#1e1e1e] rounded-[12.42px]">
                              <div className="w-[165.24px] h-[123px] rounded-[6.21px] bg-[#f9fafb]" />
                              <div className="w-[165.24px] gap-[5px_39.76px] flex flex-wrap items-end">
                                <div className="w-[110.05px] h-[18.64px] mt-[-1.24px] font-['DM_Sans',Helvetica] font-medium text-white text-[17.4px] tracking-[-0.70px">
                                  Sofa SWLJK
                                </div>
                                <div className="w-[165.24px] text-white text-[9.9px] font-['Inter',Helvetica] font-normal">
                                  3-seat sofa with chaise longue, Gunnared beige
                                </div>
                                <div className="w-[103.12px] h-[22.36px] font-bold text-[#fe37a3] text-[14.9px] font-['Inter',Helvetica]">
                                  Price 1,412$
                                </div>
                                <img
                                  className="w-[22.36px] h-[22.36px]"
                                  alt="Shopping cart"
                                  src="/material-symbols-shopping-cart.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>

                <div className="flex items-center justify-center mt-6">
                  <CarouselPrevious className="static transform-none mx-2">
                    <img
                      className="w-6 h-6"
                      alt="Arrow left"
                      src="/arrow-left.svg"
                    />
                  </CarouselPrevious>

                  <div className="flex items-center gap-2.5 p-2">
                    <div className="w-4 h-4 bg-[#b7b7b7] rounded-lg" />
                    <div className="w-3 h-3 bg-carouselgray rounded-md opacity-50" />
                    <div className="w-3 h-3 bg-carouselgray rounded-md opacity-50" />
                    <div className="w-3 h-3 bg-carouselgray rounded-md opacity-50" />
                    <div className="w-3 h-3 bg-carouselgray rounded-md opacity-50" />
                  </div>

                  <CarouselNext className="static transform-none mx-2">
                    <img
                      className="w-6 h-6"
                      alt="Arrow right"
                      src="/arrow-right.svg"
                    />
                  </CarouselNext>
                </div>
              </Carousel>
            </>
          )}
        </div>

        {/* Product grid - repeated 4 times in the original */}
        {[0, 1, 2, 3].map((rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[43px] w-full  max-w-[1260px]`}
          >
            {catalogProducts.map((product, index) => (
              <Card
                key={`${rowIndex}-${index}`}
                className={`flex flex-col  items-start gap-5 pt-6 pl-6 pb-6 bg-white rounded-[25.7px] ${
                  rowIndex === 3
                    ? "md:bg-[linear-gradient(180deg,rgba(30,30,30,0)_50%,#1E1E1E_125%)]"
                    : ""
                }`}
              >
                <CardContent className="p-0  ">
                  {product.imageSrc ? (
                    <img
                      className="w-[90%] h-[180.4px] rounded-[12.85px]"
                      alt={product.name}
                      src={product.imageSrc}
                    />
                  ) : (
                    <div
                      className={`w-[90%] h-[180.4px] rounded-[12.85px] ${
                        product.hasImage ? "bg-[#d9d9d9]" : ""
                      }`}
                    />
                  )}

                  <div className="w-full flex flex-wrap items-end gap-5 mt-2">
                    <h3 className="w-full font-['Inter',Helvetica] font-semibold text-[#1f1f1f] text-1xl md:text-[22px] leading-tight">
                      {product.name}
                    </h3>

                    <p className=" font-['Inter',Helvetica]  text-[#979797] text-x md:text-[13.6px] w-[90%] leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex justify-between items-center w-full">
                      <span className="font-['Inter',Helvetica] font-bold text-[#fe37a3] text-xl md:text-[20.8px]">
                        Price {product.price}
                      </span>

                      <Button variant="ghost" className="p-0 h-auto">
                        <img
                          className="w-[36.25px] flex relative right-10"
                          alt="Shopping cart"
                          src="/material-symbols-shopping-cart-2.svg"
                        />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
