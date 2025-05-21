import "../assets/App.css";
import { useState } from "react";
function ExampleElement() {
  const VIDEO_ID = "dQw4w9WgXcQ"; // for example: https://www.youtube.com/watch?v=VIDEO_ID
  const TUTORIAL_VIDEO_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;

  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="example-element">
        <div className="video-tutorial">
          <img
            id="sticker"
            src="../sticky.png"
            alt="How it works"
            onClick={handleImageClick}
          />

          {showModal && (
            <div className="modal" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close" onClick={closeModal}>
                  <i className="fa-sharp fa-solid fa-xmark"></i>
                </span>
                <iframe
                  src={TUTORIAL_VIDEO_URL}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Tutorial Video"
                />
              </div>
            </div>
          )}
        </div>

        <div className="example-container">
          <div className="original">
            <p>Original</p>
            <p className="price">$1,250</p>
            <img src="../chair.png" alt="Original Chair"></img>
          </div>

          <div className="alternatives">
            <p>Alternatives from</p>
            <p className="price">$199</p>
            <div className="duplicated-imgs-container">
              <img
                className="mirror-1"
                src="../chair.png"
                alt="Alternative Chair"
              ></img>
              <img
                className="mirror-2"
                src="../chair.png"
                alt="Alternative Chair"
              ></img>
              <img
                className="mirror-3"
                src="../chair.png"
                alt="Alternative Chair"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function RecentElements() {
  const swapImages = (imgs: any, idx1: any, idx2: any) => {
    [imgs[idx1], imgs[idx2]] = [imgs[idx2], imgs[idx1]];
  };

  const imgs = [
    "https://images.hermanmiller.group/m/49595cf4c2cb1492/W-WS_ELO_5667_100077567.png",
    "https://images.hermanmiller.group/m/49595cf4c2cb1492/W-WS_ELO_5667_100077567.png",
    "https://images.hermanmiller.group/m/49595cf4c2cb1492/W-WS_ELO_5667_100077567.png",
    "https://images.hermanmiller.group/m/49595cf4c2cb1492/W-WS_ELO_5667_100077567.png",
    "https://images.hermanmiller.group/m/49595cf4c2cb1492/W-WS_ELO_5667_100077567.png",
    "https://pem4lrooq0rxqboa.public.blob.vercel-storage.com/grid/original-5fda6be8-fc39-4d45-a695-b2f0555a2a94.jpg",
    "https://pem4lrooq0rxqboa.public.blob.vercel-storage.com/grid/original-5fda6be8-fc39-4d45-a695-b2f0555a2a94.jpg",
    "https://pem4lrooq0rxqboa.public.blob.vercel-storage.com/grid/original-5fda6be8-fc39-4d45-a695-b2f0555a2a94.jpg",
    "https://pem4lrooq0rxqboa.public.blob.vercel-storage.com/grid/original-5fda6be8-fc39-4d45-a695-b2f0555a2a94.jpg",
  ];

  const getImages = (imgsLIMIT: any, imgs: any) => {
    const imgsElements = [];
    let lastIndex = imgs.length - 1;
    for (let i = 1; i <= Math.min(imgsLIMIT, imgs.length); i++, lastIndex--) {
      const idx = Math.floor(Math.random() * lastIndex);
      imgsElements.push(
        <div className="img-wrapper" key={i}>
          <img src={imgs[idx]} alt={`recent Image #${i}`} />
        </div>
      );
      swapImages(imgs, idx, lastIndex);
    }

    return imgsElements;
  };

  return (
    <>
      <div className="recent-elements">
        <h2>Stuff we&rsquo;re loving</h2>
        <div className="imgs-container">{getImages(10, imgs)}</div>
      </div>
    </>
  );
}

function IdleElement() {
  return (
    <>
      <div className="idle-element">
        <ExampleElement />
        <RecentElements />
      </div>
    </>
  );
}
export default IdleElement;

