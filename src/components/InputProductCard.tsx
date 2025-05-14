import "../assets/product-card.css";
import PriceElement from "./utilsElements";

function InputProductCard({ product }: any) {
  const { imageUrl, title, url, website, price, currency } = product;

  return (
    <>
      <div className="input-product-card">
        {imageUrl && <img src={imageUrl} alt={title} className="large-image" />}
        {website && (
          <div className="input-product-website">
            <h5>{website}</h5>
          </div>
        )}

        {title && (
          <div className="input-product-title">
            <h3>{title}</h3>
          </div>
        )}

        {(price || currency) && (
          <div className="price-link-wrapper">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <PriceElement price={price} currency={currency} />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default InputProductCard;
