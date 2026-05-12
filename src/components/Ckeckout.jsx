import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.product_cost * 130, 0);

  const handleConfirmPayment = () => {
    alert("Payment confirmed! Thank you for your order.");
    navigate("/"); // redirect to home or products page
  };

  return (
    <div className="checkout-container container mt-4">
      <h2 className="checkout-title text-success mb-4">Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item checkout-item d-flex align-items-center justify-content-between"
              >
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  className="checkout-item-img"
                />

                <div className="checkout-item-details flex-grow-1">
                  <strong>{item.product_name}</strong>
                  <p className="mb-1 text-muted">{item.product_description}</p>
                  <span className="text-success fw-bold">
                    KSH {(item.product_cost * 130).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-total mb-3">
            <h5>
              Total: <span className="text-success">KSH {total.toFixed(2)}</span>
            </h5>
          </div>

          <button
            className="btn btn-success w-100 checkout-btn"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;