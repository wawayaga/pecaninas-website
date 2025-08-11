import { InlineWidget } from "react-calendly";

const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

const BookingSection = () => {
  return (
    <section className="bg-[#F6F6F6] py-10 min-h-screen">
      <div className="container mx-auto px-4 max-w-screen-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1D3E8A] mb-6 text-center">
          Book a Session
        </h2>
        {/* Calendly inline booking form */}
        <InlineWidget url={calendlyUrl} />
      </div>
    </section>
  );
};

export default BookingSection;
