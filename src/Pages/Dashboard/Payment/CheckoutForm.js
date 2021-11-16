import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ appoint }) => {
  const { price, patientName, _id } = appoint;
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientsecret] = useState();

  useEffect(() => {
    // fetch('https://fast-everglades-35128.herokuapp.com/create-payment-intent',{
    //     method:'post',
    //     headers:{
    //         'content-type':'application/json'
    //     },
    //     body:JSON.stringify({price})
    // })
    // .then(res=>res.json())
    axios
      .post(
        "https://fast-everglades-35128.herokuapp.com/create-payment-intent",
        { price }
      )
      .then((result) => setClientsecret(result.data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      setError("");
      console.log("[paymentMethod]", paymentMethod);
    }
    //payment intent

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user?.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("your payment is success");
      setProcessing(false);
      //save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `https://fast-everglades-35128.herokuapp.com/appointments/${_id}`;
      axios.put(url, payment).then((result) => console.log(result.data));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress></CircularProgress>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay
          </button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p>{success}</p>}
    </>
  );
};

export default CheckoutForm;
