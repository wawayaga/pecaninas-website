const ContentLeft = ({h2Content, pContent, src}) =>{
  return (
    <section className="grid md:grid-cols-6 grid-col-1">
      <div className="md:col-start-2 md:col-span-2 flex flex-col">
        <img src={src}></img>
      </div>
      <div className="md:col-start-4 md:col-span-2 order-first md:order-last flex flex-col my-10">
        <h2 className="font-bold mb-3 text-2xl text-center md:text-left">
          {h2Content}
        </h2>
        <p className="px-4 md:px-0 text-sm md:text-base text-justify md:text-left">
          {pContent}
        </p>
      </div>
    </section>
  );
}
export default ContentLeft;