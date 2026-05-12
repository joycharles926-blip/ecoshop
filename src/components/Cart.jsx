import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate(); // added

  // remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // checkout function
  const handleCheckout = () => {
    // navigate to checkout page instead of alert
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
            >
              <div className="d-flex align-items-center justify-content-between">
                
                {/* Product Image */}
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginRight: "15px"
                  }}
                />

                {/* Product Details */}
                <div className="flex-grow-1">
                  <strong>{item.product_name}</strong>

                  <p className="mb-1 text-muted">
                    {item.product_description}
                  </p>

                  <span className="text-success fw-bold">
                    KSH {(item.product_cost * 130).toFixed(2)}
                  </span>
                </div>

                {/* Remove Button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button
          className="btn btn-success mt-3 w-100"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;