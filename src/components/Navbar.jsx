import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EcoShop</h2>

      <div className="nav-links">
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/">Get Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;