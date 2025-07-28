const HeroSectionRight = ({ title, description, heroImage, alt }) => {
  return (
    <section className="bg-[#F6F6F6] pb-6 xl:pb-10">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <img
            src={heroImage}
            alt={alt}
            className="w-full max-w-md opacity-75 shadow-md object-contain"
          />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 p-5 md:p-10">
          <div className="text-right text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8843A] mb-4">
            <h1>{title}</h1>
          </div>
          <div>
            <p className="text-sm sm:text-base text-[#E8843A] text-right">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionRight;
