import { useEffect, useState, useMemo } from "react";
import "../assets/elements.css";

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const LoadingElement = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const messages = [
    "Loading...",
    "Scrapping the internet...",
    "Almost there...",
  ];
  const loadingElementsSize = useMemo(() => randomRange(6, 12), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const randomWidths = useMemo(
    () =>
      Array.from(
        { length: loadingElementsSize },
        () => `${randomRange(70, 90)}%` // Random width between 70% and 90%
      ),
    [loadingElementsSize]
  );

  return (
    <>
      <div className="loader-container results-container">
        <div className="loading-element">
          {messages.map((message, index) => (
            <span
              key={index}
              className={`loading-text ${
                visibleIndex === index ? "visible" : "hidden"
              }`}
            >
              {message}
            </span>
          ))}
        </div>

        <div className="skeleton-container">
          {Array.from({ length: loadingElementsSize }, (_, index) => (
            <div className="product-card" key={index}>
              <div className="skeleton skeleton-image product-image"></div>
              <div className="product-details">
                <div className="skeleton skeleton-text product-title"></div>
                <div
                  className="skeleton skeleton-text product-title"
                  style={{
                    width: randomWidths[index], // Use the stable random width
                  }}
                ></div>

                <div className="skeleton skeleton-text product-website"></div>
                <div className="skeleton skeleton-text price-condition"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoadingElement;
