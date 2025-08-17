import HeroSection from "../components/HeroSection.jsx";
import OnlineServiceCards from "../components/OnlineServiceCard.jsx";
import OnsiteServiceCards from "../components/OnsiteServiceCard.jsx";


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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 m-8 p-8">
          <div className="md:col-span-3 m-8">
            <h3 className="text-3xl text-left font-bold mb-5">Primero, la evaluación</h3>
            <p className="text-lg text-left my-4">Es necesario completar un formulario en línea que sirve para hacerse un panorama general de la situación. Con esa información, me hago una idea de cómo abordar la segunda parte de la evaluación,  en vivo (domicilio del binomio tutor-perro) por reunión vía Meet. Al final de la reunión te daré algunas pautas para mejorar el bienestar de tu perro.</p>
          </div>
          <div className="md:col-span-2 mx-5"><img src="../../public/Services sticker.png"></img></div>
          <div className="md:col-span-5 mx-8">
            <h3 className="text-3xl text-right font-bold mt-8 mb-5">... ajustes, ajustes y más ajustes</h3>
            <p className="text-lg text-right my-4">Continuamos en las próximas sesiones y durante el seguimiento viendo formas de ajustar la pauta a tu peludo. Todos los perros son distintos, y conocer los miedos, motivaciones y s sksksjds dksnd toma tiempo. Aunque ya al aplicar un par de cambios hace maravillas en nuestros compañeros de 4 patas, siempre vamos descubriendo más cosas en las que trabajar. De ti depende cuánto profundicemos. Sea como sea, tu perrito te lo agradecerá de por vida.</p>

          </div>
      </div>
      <div className="mt-8">
        <div className="md:ml-8"><h2 className="ml-8 pl-8 text-left text-5xl font-bold tracking-widest">Elige tu pack</h2></div>
      <OnsiteServiceCards />
      <OnlineServiceCards />
      </div>
    </div>
  );
}
