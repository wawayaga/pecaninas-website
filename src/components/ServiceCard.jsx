import Button from "./Buttons.jsx";

const cards = [
  {
    title: "1x Pack",
    description: "Evaluación",
    price: "$9.99/mo",
    link: "/basic"
  },
  {
    title: "3x Pack",
    description: "3 Sesiones en tu casa. Seguimiento permanente.",
    price: "$29.99/mo",
    link: "/pro"
  },
  {
    title: "5x Pack",
    description: "5 Sesiones en tu casa. Seguimiento permanente.",
    price: "$99.99/mo",
    link: "/enterprise"
  }
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="grid grid-cols-1 bg-[#F6F6F6] border-solid border-[#E8843A] border rounded-2xl p-6 justify-items-between flex-col hover:shadow-md transition"
        >
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-gray-600 mb-4">{card.description}</p>
          <p className="text-2xl font-semibold mb-6">{card.price}</p>
          <div className="justify-items-center">
          <a
            href={card.link}
            className="bg-[#224DBE] hover:bg-[#1464F6] w-1/2 md:w-1/4 text-white carlito-bold px-6 py-2 rounded-full"
          >Comprar
          </a>
          </div>
        </div>
      ))}
    </div>
  );
};