import HeroSectionRight from "../components/HeroSection-right.jsx";

export default function AboutMe() {
  const heroDescription =
    "Hi, I'm Ximena, but you can also call me Peca! I have a degree in Agronomy and am a certified dog trainer.I live with Duna, who inspired me to become a professional dog trainer. My job is to work with dog owners and their dogs and give them the tools they need to improve their relationship.";

  return (
    <div>
      <main>
        <HeroSectionRight
          title="About me"
          description={heroDescription}
          heroImage="/about me hero 4 a 5.jpg"
          alt="Training resting with a dog"
        />
        {/* Other content */}
      </main>
    </div>
  );
}
