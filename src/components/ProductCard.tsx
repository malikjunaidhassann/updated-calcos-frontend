import "../assets/elements.css";
import "../assets/product-card.css";
import PriceElement from "./utilsElements";

function ProductCard({ product }: any) {
  const { imageUrl, title, url, website, price, currency, condition, inStock, outOfStock } = product;

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="product-card">
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
        </div>
      </a>
    </>
  );
}

export default ProductCard;
