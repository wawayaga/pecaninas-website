import ContentRight from "../components/ContentRight.jsx";
import HeroSection from "../components/HeroSection.jsx";

export default function Home() {
  const heroButtons = ["Servicios", "Contacto"];
  const links = ["/Services", "/Contact"];
  const h2Content = "Quién soy?"
  const pContent = "Hola soy Ximena, también me puedes decir Peca! Soy licenciada enAgronomía y Educadora Canina. Vivo con Duna, gracias a ella me he profesionalizado como educadora canina y actualmente mi trabajo es acompañar al binomio tutor/a-perro/A y entregarles las herramientas para mejorar la relación, tales como comprender comunicación canina, información científica actualizada,y ética"

  return (
    <div>
      <HeroSection
        title="¿Quieres disfrutar la vida junto a tu perro?"
        description="Te ayudo a mejorar la convivencia con tu perro y su entorno"
        buttons={heroButtons}
        links ={links}
        heroImage="/Home hero 4 a 5.jpg"
        alt="Pata de perro tocando mano"
      />
      <ContentRight h2Content={h2Content} pContent={pContent}/>
    </div>
  );
}
