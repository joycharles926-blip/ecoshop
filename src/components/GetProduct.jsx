// components/GetProducts.jsx
import { useEffect, useState } from "react";

export default function GetProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/get_items_details")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="products-card-container">
      <h2>Get Products</h2>

      <div className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            
            <img
              src={`http://127.0.0.1:5000/static/images/${item[4]}`}
              alt="product"
            />

            <h3>{item[1]}</h3>
            <p>{item[2]}</p>
            <h4>KES {item[3]}</h4>

            <button className="btn btn-success w-100">
            Add to Cart
          </button>

          </div>
        ))}
      </div>
    </div>
  );
}