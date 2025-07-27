import HeroSection from "../components/HeroSection.jsx";

export default function Services() {
  const heroButtons = ["BOOK", "SERVICES"];

  return (
    <div>
      <main>
        <HeroSection
          title="Personalized dog training"
          description="Personalized counseling consists of an in-depth assessment of your personality, routine, health, relationships, and the issues that need to be resolved between you and your dog."
          buttons={heroButtons}
          heroImage="/Services hero 4 a 5.jpg"
          alt="Trainer training a dog"
        />
        {/* Other content */}
      </main>
    </div>
  );
}
