import HeroSection from "../components/HeroSection.jsx";

export default function Home() {
  const heroTitle = (
    <>
      Learn to connect with your
      <br className="hidden sm:block" /> dog
    </>
  );

  const heroDescription =
    "Lorem ipsum dolor sit amet. Qui rerum eveniet vel rerum inventore sed consequatur corrupti non labore voluptatum.";

  const heroButtons = ["Services", "Contact"];

  const heroImage = "/Home hero 4 a 5.jpg";

  return (
    <div>
      <HeroSection
        title={heroTitle}
        description={heroDescription}
        buttons={heroButtons}
        heroImage={heroImage}
        alt="Dogs paw touching human hand"
      />
    </div>
  );
}
