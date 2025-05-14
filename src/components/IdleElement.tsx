import "../assets/App.css";

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
        <RecentElements />
      </div>
    </>
  );
}
export default IdleElement;
