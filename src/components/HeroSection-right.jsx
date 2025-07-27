const HeroSectionRight = ({ title, description, heroImage, alt }) => {
  return (
    <section className="bg-[#F6F6F6] pb-8 sm:pb-10">
      <div className="container max-w-screen-xl flex flex-col lg:flex-row items-center gap-6">
        {/* TEXT LEFT */}
        <div className="w-full lg:w-1/2 ps-5 mb-5">
          <h1 className="text-2xl text-center lg:text-right sm:text-3xl md:text-4xl max-w-md font-bold text-[#E8843A] mb-4">
            {title}
          </h1>
          <p className="text-sm text-left lg:text-right sm:text-base text-[#E8843A] max-w-md lg:mt-8 lg:ms-10">
            {description}
          </p>
        </div>
        {/* IMAGE RIGHT */}
        <div className="w-full lg:w-1/3">
          <img
            src={heroImage}
            alt={alt}
            className="w-full opacity-75 h-auto shadow-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionRight;
