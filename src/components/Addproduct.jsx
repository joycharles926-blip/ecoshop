import { useState } from "react";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔐 get admin token from storage (after login)
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // 🚨 prevent non-admin access
    if (!token) {
      setMessage("Unauthorized: Please login as admin");
      setLoading(false);
      return;
    }

    const formData = new FormData();

    formData.append("item_name", e.target.item_name.value);
    formData.append("item_description", e.target.item_description.value);
    formData.append("item_cost", e.target.item_cost.value);

    const file = e.target.item_photo.files[0];

    if (!file) {
      setMessage("Please select an image");
      setLoading(false);
      return;
    }

    formData.append("item_photo", file);

    try {
      const res = await fetch(
        "http://joychatu.alwaysdata.net/api/add_product",
        {
          method: "POST",
          headers: {
            // 🔐 send admin token
            Authorization: token,
          },
          body: formData,
        }
      );

      const data = await res.json();
      console.log("SERVER RESPONSE:", data);

      if (!res.ok) {
        throw new Error(data.message || "Unauthorized or upload failed");
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
          name="item_name"
          placeholder="Product Name"
          required
        />

        <br /><br />

        <textarea
          className="w-100"
          name="item_description"
          placeholder="Product Description"
          required
        />

        <br /><br />

        <input
          type="number"
          name="item_cost"
          placeholder="Product Cost"
          required
        />

        <br /><br />

        <input
          type="file"
          name="item_photo"
          accept="image/*"
          required
        />

        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}