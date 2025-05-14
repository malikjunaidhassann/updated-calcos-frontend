import { useEffect, useState } from "react";
import "../assets/elements.css";


const LoadingText = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const messages = [
    "Loading...",
    "Scrapping the internet...",
    "Almost there...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);


  return (
    <>
      <div className="loader-container-text">
        <div className="loading-element-text">
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
      </div>
    </>
  );
};


export default LoadingText;
