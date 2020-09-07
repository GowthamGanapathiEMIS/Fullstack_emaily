import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { handleToken } from "../actions";

const Payments = () => {
  const dispatch = useDispatch();
  return (
    <StripeCheckout
      name="Emaily"
      description="Add money to make a survey"
      amount={500}
      token={(token) => dispatch(handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;
