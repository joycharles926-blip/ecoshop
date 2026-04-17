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
      await fetch("http://127.0.0.1:5000/api/signup", {
        method: "POST",
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
      <h2 className="text-primary">Create Account</h2>
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
        <button type="submit" className="btn btn-primary w-100">
          {loading ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            "Sign Up"
          )}
        </button>
        
      </form>
      <br />
      <SocialLogin />
      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
  );
}
export default Signup;