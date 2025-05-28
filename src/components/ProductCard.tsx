import "../assets/elements.css";
import "../assets/product-card.css";
// import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import PriceElement from "./utilsElements";

function ProductCard({ product }: any) {
  const { image, title, link, source,  price, source_icon, condition, in_stock, rating } = product;

  return (
    <>
      <a className="sm:w-[80%] md:w-[30%]" href={link} target="_blank" rel="noopener noreferrer">
        {/* <div className="product-card">
          <img src={imageUrl} alt={title} className="product-image" />
          <div className="product-details">
            <div className="product-title">
              <h3>{title}</h3>
            </div>

            <div className="product-website">
              <h5>{website}</h5>
            </div>

            <div className="price-condition">
              {price && (
                <PriceElement price={price} currency={currency} />
              )}
              {condition && <span className="condition">{condition}</span>}
              {inStock && <span className="condition">{inStock}</span>}
              {outOfStock && <span className="condition">{outOfStock}</span>}
            </div>
          </div>
        </div> */}
          <Card className={`flex flex-col max-w-[330px]   items-start gap-5 p-6 bg-white rounded-[25.7px]`} >
            <CardContent className="p-0">
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="w-[80%] h-[180.4px] rounded-[12.85px] object-contain  mx-auto"
                />
              ) : (
                <div className="w-[90%] h-[180.4px] bg-[#d9d9d9] rounded-[12.85px]" />
              )}

              <div className="w-full flex flex-wrap items-start gap-4 mt-4">
                {/* Title */}
                <h3 className="w-full font-['Inter',Helvetica] font-semibold text-[#1f1f1f] text-lg md:text-[22px] leading-tight">
                  {title}
                </h3>

                {/* Website */}
                <h5 className="text-[#979797] text-sm md:text-[13.6px] w-[90%] leading-relaxed flex gap-2">
                  <img src={source_icon} alt={source} className="w-[20px] h-[20px]" />
                  {source}
                </h5>

      <div className="flex justify-between items-center w-full px-2">
              {price?.value && (
                <PriceElement price={price} />
              )}
              {condition && <span className="condition">{condition}</span>}
              {in_stock && <span className="condition">in stock</span>}
              {typeof in_stock === "boolean" && !in_stock && <span className="condition">out of stock</span>}
              {rating && <span className="condition">Ratings: {rating}</span>}
            </div>

      {/* Condition & Stock
      <div className="text-sm text-gray-600 flex gap-3 flex-wrap">
        {condition && <span>{condition}</span>}
        {inStock && <span>In Stock</span>}
        {outOfStock && <span>Out of Stock</span>}
      </div> */}
    </div>
  </CardContent>
  </Card>
      </a>
    </>
  );
}

export default ProductCard;
