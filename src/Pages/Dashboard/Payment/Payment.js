import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51JvpkABU3D6PI3NFkuDC9rCpFVrWoPaUFtsrgfS546C9DH7OefGFFN8JVRQF6if1EZ4Nb225YfvVYpYdFYfIMihm00zlD1PIUY"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const [appoint, setappoint] = useState();
  useEffect(() => {
    fetch(
      `https://fast-everglades-35128.herokuapp.com/appointments/${appointmentId}`
    )
      .then((res) => res.json())
      .then((result) => setappoint(result));
  }, [appointmentId]);
  return (
    <>
      <div>
        <h2>
          Please pay for {appoint?.patientname} for {appoint?.serviceName}
        </h2>
        <p>pay ${appoint?.price}</p>
      </div>
      {appoint?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appoint={appoint} />
        </Elements>
      )}
    </>
  );
};

export default Payment;
