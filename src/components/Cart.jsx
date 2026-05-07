import React from "react";

function Cart({ cart, setCart }) {
  // remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-success">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.product_name}</strong> - ${item.product_cost.toFixed(2)}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button className="btn btn-primary mt-3 w-100">
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
