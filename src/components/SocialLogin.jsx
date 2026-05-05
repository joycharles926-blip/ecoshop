import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function SocialLogin() {

  const [loading, setLoading] = useState(false);

  const handleGoogleSuccess = async (response) => {
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/api/social-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          credential: response.credential
        })
      });

      const data = await res.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="social-box">

      <p className="text-muted">Or continue with</p>

      {/* GOOGLE LOGIN */}
      <div className="social-btn">
        {loading ? (
          <div className="spinner-border text-primary"></div>
        ) : (
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => console.log("Google Login Failed")}
          />
        )}
      </div>

    </div>
  );
}