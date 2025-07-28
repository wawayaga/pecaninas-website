import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [payerName, setPayerName] = useState("");

  return (
    <div
      style={{
        maxWidth: "400px",     
        width: "100%",         
        margin: "0 auto",      
        padding: "1rem",       
      }}
    >
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "pill",
          label: "donate",
        }}
        forceReRender={["5.00"]}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "5.00",
                  description: "Support donation",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            setPayerName(details.payer.name.given_name);
            setPaymentSuccess(true);
          });
        }}
      />

      {paymentSuccess && (
        <p style={{ marginTop: "1rem", textAlign: "center", color: "green" }}>
          Thank you, {payerName}, for your donation!
        </p>
      )}
    </div>
  );
}

export default PayPalButton;
