// components/AddProduct.jsx
import { useState } from "react";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/add_product", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      console.log(data);

      // optional: reset form
      e.target.reset();

    } catch (error) {
      console.error("Error adding product:", error);
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>

      <form onSubmit={handleAddProduct} encType="multipart/form-data">
        
        <input
          type="text"
          name="item_name"
          placeholder="ItemName"
          required
        />

        <input
          type="file"
          name="item_photo"
          accept="image/*"
          required
        />

        <textarea
          name="item_description"
          placeholder="Item Description"
          required
        />

        <input
          type="number"
          name="item_cost"
          placeholder="Item Cost"
          required
        />

         <button className="btn btn-primary w-100">
          {loading ? (
            <i className="bi bi-arrow-repeat spin-icon"></i>
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </div>
  );
}