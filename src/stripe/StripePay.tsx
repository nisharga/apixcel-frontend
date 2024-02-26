import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";
import InjectedCheckoutForm from "./InjectedCheckoutForm";

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_PUBLISH_KEY}`);   


const StripePay = () => {
  const [clientSecret, setClientSecret] = useState("");
   
    useEffect(() => {
      fetch("http://localhost:3000/api/payment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                "price": 5
        })
        })
        .then((response) => response.json())
        .then(data => {
          console.log("🚀 ~ useEffect ~ data:", data)
          setClientSecret(data?.data) 
        })
   
    }, [clientSecret])
         
         
  const appearance = {
    theme: 'stripe',
  };

  interface IProps{
    clientSecret: any;
    appearance: any;
  }

  const options:IProps = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <div className="">
           {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <InjectedCheckoutForm />
                </Elements>
            )}
      </div>
    </div>
  )
}

export default StripePay