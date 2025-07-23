import HeroSection from "../components/HeroSection.jsx";

export default function Home() {
  const heroTitle = (
    <>
      Learn to <span className="text-[#D35B26]">connect</span> with your
      <br className="hidden sm:block" /> dog
    </>
  );

  const heroDescription =
    "Lorem ipsum dolor sit amet. Qui rerum eveniet vel rerum inventore sed consequatur corrupti non labore voluptatum.";

  const heroButtons = ["BOOK", "SERVICES"];

  return (
    <div>
      <main>
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          buttons={heroButtons}
        />
        {/* Other content */}
      </main>
    </div>
  );
}
