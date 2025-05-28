import "../assets/elements.css";

function PriceElement({ price }: any) {
  const {extracted_value, currency} = price

  return (
    <>
      <div className="bg-black rounded-[5px] px-2 py-1 flex items-center">
        {currency && <span className="pr-1">{currency}</span>}
        <span >{extracted_value}</span>
      </div>
    </>
  );
}

export default PriceElement;
