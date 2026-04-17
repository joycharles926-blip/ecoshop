// Signin component
import { useState } from "react";
import SocialLogin from "../components/SocialLogin";
import { Link } from "react-router-dom";

 function Signin() {
  const [loading, setLoading] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    await fetch("http://127.0.0.1:5000/api/signin", {
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
      <h2 className="text-primary ">Sign In</h2>

      <form onSubmit={handleSignin}>
        <input name="email" placeholder="Enter your email" />
        <br /><br />
        <input name="password" type="password" placeholder="Enter your password" />
        <br /><br />
         <button className="btn btn-primary w-100">
          {loading ? (
            <i className="bi bi-arrow-repeat spin-icon"></i>
          ) : (
            "Sign In"
          )}
        </button>
        <br /><br />
      </form>

      {/* SOCIAL LOGIN HERE */}
      <SocialLogin />
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}
export default Signin;