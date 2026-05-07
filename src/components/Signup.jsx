// components/Signup.jsx
import { useState } from "react";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router-dom";

function Signup() {
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      await fetch("https://joychatu.alwaysdata.net/api/signup", {
        method: "POST",
        headers: {Authorization: "12345ADMIN"},
        body: formData
      });
      // Clearing the form after successful signup
      e.target.reset();
      alert("Signup successful!");
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2 className="text-success">Sign Up</h2>
      <br />
      <form onSubmit={handleSignup}>
        <input name="username" placeholder="Enter your username" required className="" />
        <br /><br />
        <input name="email" placeholder="Enter your email" required />
        <br /><br />
        <input name="password" type="password" placeholder="Enter your password     " required />
        <br /><br />
        <input name="phone" placeholder="Enter your phone number" required />
        <br /><br />
        <button type="submit" className="btn btn-success w-100">
          {loading ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            "Sign Up"
          )}
        </button>
        
      </form>
      <br />
      <p>Already have an account? <Link to="/signin">Sign in</Link></p>
    </div>
  );
}
export default Signup;