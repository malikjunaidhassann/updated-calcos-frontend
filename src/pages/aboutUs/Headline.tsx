const Headline = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[370px] md:w-[1280px] mx-auto py-12 gap-4 font-normal">
      <h1 className="w-full text-[20px] md:text-[50px] text-center text-balance font-inter">
        <div className="font-bold text-white gap-0 flex flex-wrap justify-center">
          Our Journey, Your <br className="block md:hidden"/>Adventure:
          <br />
          <span className="font-bold text-[#fe37a3]">
            Discover the Story of Us
          </span>
        </div>
      </h1>

      <p className="text-white w-[92%] text-base text-center p-2 md:p-0 md:leading-[150%] font-inter font-[12px] md:font-[16px] max-w-screen mx-auto self-stretch">
        Our mission is to bring accessible, stylish, and high-quality furniture
        to everyone. With a passion for design and a commitment to innovation,
        we create spaces that inspire comfort and creativity.
      </p>
    </section>
  );
};

export default Headline;
