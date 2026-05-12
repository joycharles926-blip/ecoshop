// Signin component
import { useState } from "react";
import { Link } from "react-router-dom";

 function Signin() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch("https://joychatu.alwaysdata.net/api/signin", {
      method: "POST",
      body: formData
    });
    // Clearing the form after successful login
    e.target.reset();
    alert("Signin successful!");


    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2 className="text-success">Sign In</h2>

      <form onSubmit={handleLogin}>
        <input name="email" placeholder="Enter your email" />
        <br /><br />
        <input name="password" type="password" placeholder="Enter your password" />
        <br /><br />
         <button className="btn btn-success w-100">
          {loading ? (
            <i className="bi bi-arrow-repeat spin-icon"></i>
          ) : (
            "Sign In"
          )}
        </button>
        <br /><br />
      </form>

      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}
export default Signin;