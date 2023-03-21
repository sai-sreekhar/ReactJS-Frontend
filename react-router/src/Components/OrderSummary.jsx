import React from "react";
import { useNavigate } from "react-router-dom";
function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order Confirmed!!</h1>
      <br />
      <button onClick={() => navigate(-1)}>Go Back to Home</button>
    </div>
  );
}

export default OrderSummary;
