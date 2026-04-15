// Signin component
import { useState } from "react";
import SocialLogin from "../components/SocialLogin";
import { Link } from "react-router-dom";

 function Signin() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch("http://127.0.0.1:5000/api/signin", {
      method: "POST",
      body: formData
    });

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>

      <form onSubmit={handleLogin}>
        <input name="email" placeholder="Enter your email" />
        <input name="password" type="password" placeholder="Enter your password" />
         <button className="btn btn-primary w-100">
          {loading ? (
            <i className="bi bi-arrow-repeat spin-icon"></i>
          ) : (
            "Sign In"
          )}
        </button>
        <p>Forgot your password? <Link to="/reset-password">Reset it here</Link></p>
      </form>

      {/* SOCIAL LOGIN HERE */}
      <SocialLogin />
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}
export default Signin;