import "../assets/elements.css";
import "../assets/product-card.css";
import InputProductCard from "./InputProductCard.js";
import ProductCard from "./ProductCard.js";
import LoadingText from "./LoadingText.js";

function isValidInput(inputProduct: any) {
  return inputProduct.imageUrl && inputProduct.imageUrl !== "NA";
}

function Results({ inputProduct, similarProducts, isLoading }: any) {
  if (isValidInput(inputProduct)) {
    similarProducts.sort((a: any, b: any) => {
      const aVal = a?.price?.extracted_value ?? 0;
      const bVal = b?.price?.extracted_value ?? 0;
      return aVal - bVal;
    });
    return (
      <>
        <div className="results-container !mt-3">
          {/* Display the input product */}
          {inputProduct && (
            <InputProductCard product={inputProduct} />
          )}

          <hr className="rounded" />

          {/* Display similar products */}
          {similarProducts && similarProducts.length > 0 && (
            <div className="similar-products">
              <h2>Similar Products</h2>
              <div className="flex flex-wrap  justify-center items-center gap-[42px] max-w-[full]">
                {similarProducts.map((product: any, i: any) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
          )}
          {isLoading !== "DONE" && <LoadingText />}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="results-container !mt-3">
        <h1>Invalid data, Please try again.</h1>
      </div>
    </>
  )

}

export default Results;
