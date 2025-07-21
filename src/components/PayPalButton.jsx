import { PayPalButtons } from "@paypal/react-paypal-js";

function PayPalButton() {
  return (
    <div>
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "pill", label: "paypal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "5.00", // Purchase amount
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        }}
      />
    </div>
  );
}

export default PayPalButton;
