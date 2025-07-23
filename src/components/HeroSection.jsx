import React from "react";
import heroImage from "../assets/Peca before photoshop-12.jpg"; // your image

const HeroSection = ({ title, description, buttons }) => {
  return (
    <section className="bg-[#F6F6F6] py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-screen-xl flex flex-col lg:flex-row items-center gap-6">
        
        {/* IMAGE LEFT */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImage}
            alt="Dog and Human"
            className="w-full h-auto rounded-xl shadow-md object-contain"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D35B26] mb-4">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-[#A56945] mb-5 max-w-md mx-auto lg:mx-0">
            {description}
          </p>
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