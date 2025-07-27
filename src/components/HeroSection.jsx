const HeroSection = ({ title, description, buttons, heroImage, alt }) => {
  return (
    <section className="bg-[#F6F6F6] pb-6 xl:pb-10">
      <div className="grid grid-rows-2 md:grid-cols-3 md:grid-rows-1 flex lg:flex-row flex-col">
        <div className="">
          <img
            src={heroImage}
            alt={alt}
            className="opacity-75 shadow-md object-contain"
          />
        </div>
        <div className="grid grid-rows-2 md:col-span-2 p-5 md:p-10">
          <h1 className="md:content-end content-center text-4xl lg:3xl lg:px-10 lg:pt-10 text-2xl text-left sm:text-3xl md:text-4xl font-bold text-[#E8843A] md:mb-4">
            {title}
          </h1>
          <div className="xl:px-[10px] lg:ms-10 content-center">
            <p className="text-sm text-left xl:text-right sm:text-base text-[#E8843A] mb-5">
              {description}
            </p>
            <div className="flex flex-row gap-4 content-center justify-end">
              {buttons.map((btnText, index) => (
                <button
                  key={index}
                  className="bg-[#224DBE] hover:bg-[#1464F6] w-1/2 md:w-1/4 text-white font-semibold px-6 py-2 rounded-full"
                >
                  {btnText}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
