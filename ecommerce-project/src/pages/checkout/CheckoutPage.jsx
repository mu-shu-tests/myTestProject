import "./CheckoutPage.css";
import CheckoutHeader from "./CheckoutHeader";
import PaymentSummary from "./PaymentSummary";
import axios from "axios";
import { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";

function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        // console.log(response.data);
        setDeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      //console.log(response.data);
      setPaymentSummary(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOptions={deliveryOptions}
          cart={cart} />
        
         <PaymentSummary paymentSummary={paymentSummary} />
           
        </div>
      </div>
      
    </>
  );
}
export default CheckoutPage;
