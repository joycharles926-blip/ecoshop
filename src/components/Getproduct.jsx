import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetProduct() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (item) => {
    navigate(`/makepayment/${item.id}`);
  };

  return (
    <div className="product-container">
      <h2 className="text-center text-success" >Available Products</h2>

      {/* 🔥 MAP FUNCTION USED HERE */}
      <div className="product-grid">
        {items.map((items, index) => (
          <div key={index} className="product-card" onClick={() => handleClick(items)} style={{cursor:"pointer"}}>
            <h3 className="text-">{items.name}</h3>
            <p>{items.photo}</p>
             <p>{items.description}</p>
            <p>Ksh: ${items.price}</p>
           
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetProduct;