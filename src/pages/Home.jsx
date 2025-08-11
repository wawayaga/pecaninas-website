import ContentSM from "../components/ContentSM.jsx";
import HeroSection from "../components/HeroSection.jsx";

export default function Home() {
  const heroButtons = ["Services", "Contact"];

  return (
    <div>
      <HeroSection
        title="Learn to connect with tour dog"
        description="Lorem ipsum dolor sit amet. Qui rerum eveniet vel rerum inventore sed consequatur corrupti non labore voluptatum."
        buttons={heroButtons}
        heroImage="/Home hero 4 a 5.jpg"
        alt="Dogs paw touching human hand"
      />
      <ContentSM />
    </div>
  );
}
