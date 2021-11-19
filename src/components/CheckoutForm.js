import React from "react";
import { CardElement, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <div>
      <form>

        <CardElement />
        <PaymentElement />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
