import "../assets/elements.css";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function PriceElement({ price, currency }: any) {
  try {
    price = priceFormatter.format(price.replace(/[\s\u00A0\u202F]/g, '').match(/[\d,.]+/)[0].replace(/,/g, ''));
  } catch (error) {
    console.error("Error formatting price:", error);
  }

  return (
    <>
      <div className="price-container">
        {currency && <span className="currency">{currency}</span>}
        <span className="price">{price}</span>
      </div>
    </>
  );
}

export default PriceElement;
