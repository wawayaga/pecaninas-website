export default function ContentSM() {
  return (
    <section className="grid md:grid-cols-6 grid-col-1">
      <div className="md:col-start-2 md:col-span-2 order-last md:order-first flex flex-col my-10">
        <h2 className="font-bold mb-3 text-2xl text-center md:text-right">
          Who am I?
        </h2>
        <p className="px-4 md:px-0 text-sm md:text-base text-justify md:text-left">
          Hola soy Ximena, también me puedes decir Peca! Soy licenciada en
          Agronomía y Educadora Canina. Vivo con Duna, gracias a ella me he
          profesionalizado como educadora canina y actualmente mi trabajo es
          acompañar al binomio tutor/a-perro/A y entregarles las herramientas
          para mejorar la relación, tales como comprender comunicación canina,
          información científica actualizada,y ética
        </p>
      </div>
      <div className="md:col-start-4 md:col-span-2 flex flex-col">
        <img src="/WhoAmI.png"></img>
      </div>
    </section>
  );
}
