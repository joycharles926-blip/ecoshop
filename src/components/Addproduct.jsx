import { useState } from "react";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();

    formData.append("product_name", e.target.product_name.value);
    formData.append("product_description", e.target.product_description.value);
    formData.append("product_cost", e.target.product_cost.value);

    const file = e.target.product_photo.files[0];

    if (!file) {
      setMessage("Please select an image");
      setLoading(false);
      return;
    }

    formData.append("product_photo", file);

    try {
      const res = await fetch(
        "https://joychatu.alwaysdata.net/api/add_product",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("SERVER RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data.message || "Upload failed");
      }

      setMessage(data.message || "Product added successfully");

      // reset form after success
      e.target.reset();

    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      setMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2 className="text-success">Add Product</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          required
        />

        <br /><br />

        <textarea
          className="w-100"
          name="product_description"
          placeholder="Product Description"
          required
        />

        <br /><br />

        <input
          type="file"
          name="product_photo"
          accept="image/*"
          required
        />
        <br /><br />

        <input
          type="number"
          name="product_cost"
          placeholder="Product Cost"
          required
        />

        <br /><br />

        
        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}