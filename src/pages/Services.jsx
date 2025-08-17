import HeroSection from "../components/HeroSection.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Services() {
  const heroButtons = ["Reservas"];
  const links = ["/Booking"];

  return (
    <div>
      <HeroSection
        title="Asesoría de educación canina personalizada e individualizada "
        description="La asesoría personalizada consta de una profunda evaluación de la personalidad, su rutina, la salud, las relaciones y las dificultades a resolver entre tutor/a y perro/a.
Una vez se analiza todo esto, se realiza una planificación y estimación del tiempo y número de sesiones necesarias para trabajar los problemas que dificultan la convivencia con tu perro."
        buttons={heroButtons}
        links={links}
        heroImage="/Services hero 4 a 5.jpg"
        alt="Entrenadora evaluando a un perro"
      />
      <div className="mt-8">
        <h2 className="ml-8 text-left text-5xl carlito-bold tracking-wider">Packs</h2>
      <ServiceCard />
      </div>
    </div>
  );
}
