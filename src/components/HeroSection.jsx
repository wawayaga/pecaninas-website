const HeroSection = ({ title, description, buttons, heroImage, alt }) => {
  return (
    <section className="bg-[#F6F6F6] pb-8 sm:pb-10">
      <div className="container max-w-screen-xl flex flex-col lg:flex-row items-center gap-6">
        {/* IMAGE LEFT */}
        <div className="w-full lg:w-1/3">
          <img
            src={heroImage}
            alt={alt}
            className="w-full opacity-75 h-auto shadow-md object-contain"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="w-full lg:w-1/2 px-2">
          <div className="mb-5">
            <h1 className="text-2xl text-center xl:text-left sm:text-3xl md:text-4xl font-bold text-[#E8843A] mb-4">
              {title}
            </h1>
            <p className="text-sm text-left lg:text-right sm:text-base text-[#E8843A] max-w-md lg:mt-8 lg:ms-10">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {buttons.map((btnText, index) => (
              <button
                key={index}
                className="bg-[#1D3E8A] hover:bg-[#17316e] text-white font-semibold px-6 py-2 rounded-full"
              >
                {btnText}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
