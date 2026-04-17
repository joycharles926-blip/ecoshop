// components/MakePayment.jsx
import { useState } from "react";

export default function MakePayment() {

  // ✅ state
  const [loading, setLoading] = useState(false);

  // ✅ handle payment
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    const phone = e.target.phone.value;
    const amount = e.target.amount.value;

    try {
      // 🔥 simulate API call (replace with real M-Pesa later)
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log("Payment made:", { phone, amount });

    } catch (error) {
      console.error("Payment error:", error);
    }

    setLoading(false);
  };

  // ✅ UI
  return (
    <div className="form-container">
      <h2>Make Payment</h2>

      <form onSubmit={handlePayment}>
        
        <input
          type="number"
          name="phone"
          placeholder="Phone (e.g. 2547XXXXXXXX)"
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount (KES)"
          required
        />

        <button type="submit" className="btn btn-primary w-100">
          Pay Now
        </button>
      </form>
    </div>
  );
}