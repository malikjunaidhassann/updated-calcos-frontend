import { SearchIcon } from "lucide-react";
import { Card } from "../../components/ui/card";

const TopCategories = (): JSX.Element => {
  // Define category tiles data for easier mapping
  const categoryRows = [
    [
      { image: "/living-room.png", hasBorder: true , bgImage: true},
      { image: "/image.png", hasBorder: true, bgColor: "#d9d9d9", bgImage: true },
      { image: "/image-6.png", hasBorder: true, bgColor: "#d9d9d9", bgImage: true },
      { image: "/living-room.png", hasBorder: true, bgColor: "#d9d9d9", bgImage: true },
      { image: "/image-1.png", hasBorder: true, bgColor: "#d9d9d9", bgImage: true },
    ],
    [
      { image: "/living-room.png", hasBorder: true, bgImage: true },
      { image: "/image-1.png", hasBorder: true, bgColor: "#d9d9d9", bgImage: true },
      { image: "/image.png", hasBorder: true, bgColor: "#d9d9d9", bgImage: true },
      { image: "/image-2.png", hasBorder: true, bgColor: "#d9d9d9", bgImage: true },
      { image: "/image-6.png", hasBorder: true, bgColor: "#d9d9d9" , bgImage: true},
    ],
    [
      { image: "/image-1.png", hasBorder: true , bgImage: true},
      { image: "/image-1.png", hasBorder: true, bgColor: "", bgImage: true },
      { image: "/image-1.png", hasBorder: true, bgColor: "" , bgImage: true},
      { image: "/image-1.png", hasBorder: true, bgColor: "" , bgImage: true},
      { image: "/living-room-1.svg", hasBorder: true, bgImage: true },
    ],
    [
      { image: "living-room.png", hasBorder: true , bgImage: true},
      { image: "/image-1.png", hasBorder: true, bgColor: "" , bgImage: true},
      { image: "/image-1.png", hasBorder: true, bgColor: "", bgImage: true },
      { image: "/image-1.png", hasBorder: true, bgColor: "" , bgImage: true},
      { image: "living-room.png", hasBorder: true, bgColor: "" , bgImage: true},
    ],
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-8 md:gap-16 py-8 md:py-16 px-4 sm:px-6 md:px-8 w-full bg-[#1e1e1e]">
      <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-5 max-w-full md:max-w-[893px] mb-8">
          <h2 className="font-bold text-white text-[40x] md:text-[50px]  leading-tight md:leading-[76.8px] font-['Hanken_Grotesk',Helvetica] text-center md:text-left">
            Discover Products You&apos;ll Love
          </h2>
          <p className="text-[#8f8f8f] text-[12px] md:text-[18px] w-[99%]  leading-relaxed md:leading-[38.4px] font-['Inter',Helvetica] text-center md:text-left">
            Explore a curated selection of the latest products sourced from top
            picks by users.
          </p>
        </div>

        <div className="flex relative right-10 bottom-4 items-center gap-3.5 pl-6 md:pl-10 pr-4 md:pr-6  py-3 md:py-4 rounded-[20px] border-2 border-[#fe37a3] backdrop-blur-[50px] w-full md:w-auto">
          <span className="text-white text-lg md:text-1xl leading-[33.6px] font-['Inter',Helvetica] whitespace-nowrap">
            Paste URL or search
          </span>
          <SearchIcon className="w-5 md:w-[22.58px] h-5 md:h-[22.58px] text-white flex-shrink-0" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-10 w-full">
        {categoryRows.flat().map((tile, index) => (
          <div
            key={`tile-${index}`}
            className="relative aspect-square w-full"
          >
            {tile.bgImage ? (
              <div
                className={`w-full h-full rounded-md ${
                  tile.hasBorder ? "border border-solid border-[#bbbbbb]" : ""
                }`}
                style={{
                  backgroundImage: `url(${tile.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : (
              <Card
                className={`w-full h-full rounded-md ${
                  tile.bgColor ? `bg-[${tile.bgColor}]` : "bg-transparent"
                } ${
                  tile.hasBorder ? "border border-solid border-[#bbbbbb]" : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;