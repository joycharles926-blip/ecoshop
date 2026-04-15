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
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };


  return (
    <div className="form-container">
      <h2>Create Account</h2>

      <form onSubmit={handleSignup}>
        <input name="username" placeholder="Username" required className="" />
        <br />
        <input name="email" placeholder="Email" required />
        <br />
        <input name="password" type="password" placeholder="Password" required />
        <br />
        <input name="phone" placeholder="Phone" required />
        <br />
        <button type="submit" className="btn btn-success w-100">
          {loading ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      <SocialLogin />
      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
  );
}
export default Signup;