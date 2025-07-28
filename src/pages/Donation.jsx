import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButton from "../components/PayPalButton";
import HeroSection from "../components/HeroSection";


export default function Donation() {
    return(
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "EUR",
      }}
    >
      <div className="App">
        <HeroSection
          title="Support Our Work"
          description="Your donation helps us continue building this project and offering value to the community."
          buttons={[]} 
          heroImage="/Sticker1.png"
          alt="Donate"
        />

        <div className="flex justify-center my-10">
          <PayPalButton />
        </div>
      </div>
    </PayPalScriptProvider>
  );
}