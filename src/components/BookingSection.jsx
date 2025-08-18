import { InlineWidget } from "react-calendly";

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

const BookingSection = () => {
  return (
    <section className="py-10 min-h-screen">
      <div className="container mx-auto px-4 max-w-screen-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Reserva tu cita
        </h2>
        {/* Calendly inline booking form */}
        <InlineWidget url={calendlyUrl} />
      </div>
    </section>
  );
};

export default BookingSection;
