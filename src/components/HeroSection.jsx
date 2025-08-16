import Button from "./Buttons.jsx"
const HeroSection = ({ title, description, buttons, links, heroImage, alt }) => {
  return (
    <section className="bg-[#F6F6F6] mb-6 xl:mb-10">
      <div className="grid grid-rows-2 md:grid-cols-3 md:grid-rows-1 flex lg:flex-row flex-col">
        <div className="">
          <img
            src={heroImage}
            alt={alt}
            className="opacity-75 object-contain md:h-full lg:h-auto"
          />
        </div>
        <div className="grid grid-rows-2 md:col-span-2 p-5 md:p-10">
          <h1 className="md:content-end content-center text-4xl lg:3xl lg:px-10 lg:pt-10 text-2xl text-left sm:text-3xl md:text-4xl font-bold text-[#E8843A] md:mb-4">
            {title}
          </h1>
          <div className="xl:px-[10px] lg:ms-10 content-center">
            <p className="text-left xl:text-right sm:text-base lg:text-xl text-[#E8843A] mb-5">
              {description}
            </p>
            <div className="flex flex-row gap-4 content-center md:justify-end justify-center">
              <Button buttons ={buttons} links = {links}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
