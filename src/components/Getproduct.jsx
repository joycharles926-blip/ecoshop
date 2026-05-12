import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetProducts = ({ cart, setCart }) => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = useState("");
  const [selectedColor, setSelectedColor] = useState("All");

  const productsPerPage = 20;
  const img_url = "http://joychatu.alwaysdata.net/static/images/";
  const navigate = useNavigate();

  const getproducts = async () => {
    setLoading("Please wait, we are retrieving the products");
    try {
      const response = await axios.get("http://joychatu.alwaysdata.net/api/get_product_details");
      setLoading("");
      setProducts(response.data);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // ✅ Auth check wrappers
  const handleAddToCart = (product) => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/signup", { state: { from: "/get-products", action: "add-to-cart", product } });
      return;
    }
    setCart([...cart, product]);
  };

  const handlePurchaseNow = (product) => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/signup", { state: { from: "/get-products", action: "purchase-now", product } });
      return;
    }
    navigate("/make-payment", { state: { product } });
  };

  // ✅ Filter by search and color
  const filteredProducts = currentProducts.filter((product) => {
    const matchesSearch =
      product.product_name.toLowerCase().includes(search.toLowerCase()) ||
      product.product_description.toLowerCase().includes(search.toLowerCase()) ||
      product.product_cost.toString().includes(search);

    const matchesColor =
      selectedColor === "All" ||
      (product.product_color &&
        product.product_color.toLowerCase() === selectedColor.toLowerCase());

    return matchesSearch && matchesColor;
  });

  return (
    <div className='row'>
      <br />
      <h2 className='text-success'>Available products</h2>

      {loading}
      {error}

      {/* Search Input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name, description or price..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Color Category / Sort */}
      <select
        className="form-control mb-4"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="All">Sort</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Green">Green</option>
        <option value="Yellow">Yellow</option>
        <option value="Pink">Pink</option>
        <option value="Purple">Purple</option>
        <option value="Orange">Orange</option>
        <option value="Brown">Brown</option>
      </select>

      {/* Products */}
      {filteredProducts.map((product) => (
        <div className='col-md-3 justify-content-center mb-4' key={product.id}>
          <div className='card shadow'>
            <img
              src={img_url + product.product_photo}
              alt=""
              className='product-photo'
            />

            <div className='card-body'>
              <h5 className='card-title text-center text-danger'>{product.product_name}</h5>

              <p className='card-text'>{product.product_description}</p>

              <p className='text-primary'>Color: {product.product_color || "N/A"}</p>

              <p className='card-text text-center text-warning font-weight-bold'>
                ${product.product_cost.toFixed(2)}
              </p>

              {/* Auth-protected buttons */}
              <button
                className='btn btn-success mt-2 w-100'
                onClick={() => handlePurchaseNow(product)}
              >
                Purchase now
              </button>

              <button
                className='btn btn-warning mt-2 w-100'
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination d-flex justify-content-center mt-3">
        <button
          className="btn btn-outline-secondary mx-1"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn mx-1 ${currentPage === i + 1 ? "btn-success" : "btn-outline-secondary"}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-secondary mx-1"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GetProducts;