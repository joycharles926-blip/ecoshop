import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GetProducts = ({ cart, setCart }) => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // ✅ adjust how many per page
  const img_url = "http://joychatu.alwaysdata.net/static/images/";
  const navigate = useNavigate();

  // Fetch products
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

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className='row'>
      <h2 className='text-success'>Available products</h2>
      {loading}
      {error}

      {/* ✅ Show only current page products */}
      {currentProducts.map((product) => (
        <div className='col-md-3 justify-content-center mb-4' key={product.id}>
          <div className='card shadow'>
            <img src={img_url + product.product_photo} alt="" className='product-photo' />
            <div className='card-body'>
              <h5 className='card-title text-center text-danger'>{product.product_name}</h5>
              <p className='card-text'>{product.product_description}</p>
              <p className='card-text text-center text-warning font-weight-bold'>
                ${product.product_cost.toFixed(2)}
              </p>
              <button className='btn btn-success mt-2 w-100' onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              <button className='btn btn-warning mt-2 w-100' onClick={() => navigate("/make-payment", { state: { product } })}>
                Purchase now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Pagination Controls */}
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

