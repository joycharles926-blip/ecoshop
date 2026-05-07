import { Link } from "react-router-dom";

function Navbar({ cart = [] }) {   // default to empty array
  return (
    <nav className="navbar">
      <h2 className="logo">EcoShop</h2>

      <div className="nav-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/">Get Product</Link>

        {/* Cart Icon */}
        <Link to="/cart" className="btn btn-outline-primary position-relative ms-3">
          🛒
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

