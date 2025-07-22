import './App.css'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButton from "./components/PayPalButton";
import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  return (
     <>
      <Header />
      <div>
        <Router />
      </div>
    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "USD",
      }}
    >
      <div className="App">
        <h1>Test PayPal Payment</h1>
        <PayPalButton />
      </div>
    </PayPalScriptProvider>
    </>
  );
}

export default App;
