import HeroSectionRight from "../components/HeroSection-right.jsx";
import ContentLeft from "../components/ContentLeft.jsx";

export default function AboutMe() {
  const heroDescription =
    "🐾  Ximena Alzugaray";
  const h2Content ="Hola!";
  const pContent ="Soy Ximena Alzugaray Franz, Licenciada en Agronomía y Educadora Canina Respetuosa. Desde pequeña, los perros me han fascinado e intrigado; de hecho, mis primeros recuerdos de infancia los tienen a ellos como protagonistas. A lo largo de mi vida, me he acompañado de ellos y los he cuidado. Gracias al paso de los años y mi madurez, la relación que tengo con ellos también ha evolucionado.Una crisis existencial me llevó a replantearme mi camino, esa crisis junto a la adopción de Duna fue lo que me impulsó a profesionalizarme como Educadora Canina profesional. Mi misión es ayudar a que los perros sean comprendidos. Actualmente, comparto y aprendo cada día con Duna, una perrita fascinante. Me siento muy afortunada de habernos encontrado."
  const src = "../../About me sticker.png";
  return (
    <div>
      <HeroSectionRight
        title="Sobre mí"
        description={heroDescription}
        heroImage="/about me hero 4 a 5.jpg"
        alt="Entrenadora descansando con perrito"
      />
      <ContentLeft h2Content={h2Content} pContent={pContent} src={src}/>
    </div>
  );
}
