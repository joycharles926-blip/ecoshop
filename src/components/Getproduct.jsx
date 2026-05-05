import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetProduct() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Fetch products from Flask API
  useEffect(() => {
    fetch("https://joychatu.alwaysdata.net/api/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  // Navigate to payment page
  const handleClick = (item) => {
    navigate(`/makepayment/${item.id}`);
  };

  // 🛒 ADD TO CART FUNCTION
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-container">
      <h2 className="text-center text-primary">Available Products</h2>

      <div className="product-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="product-card"
            style={{ cursor: "pointer" }}
          >
            <h3 className="text-warning">{item.name}</h3>

            <p>{item.description}</p>

            {/* FIXED PRICE DISPLAY */}
            <p className="text-danger">KSh {item.price}</p>

            {/* If photo is a URL */}
            {item.photo && (
              <img
                src={item.photo}
                alt={item.name}
                style={{ width: "100px", height: "100px" }}
              />
            )}

            {/* BUTTONS */}
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => handleClick(item)}>
                💳 Buy Now
              </button>

              <button
                onClick={() => addToCart(item)}
                style={{ marginLeft: "10px" }}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetProduct;