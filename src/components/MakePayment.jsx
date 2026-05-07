import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const { product } = useLocation().state || {}
  const img_url = "http://joychatu.alwaysdata.net/static/images/"

  const submit = async (e) => {
    e.preventDefault()
    setMessage("Please wait as we process")

    const data = new FormData()
    data.append("phone", phone)
    data.append("amount", product.product_cost)

    try {
      await axios.post("http://joychatu.alwaysdata.net/api/mpesa_payment", data)
      setMessage("Please complete payment on your phone")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="container mt-4">
      <h1 className='text-success font-weight-bold mb-4 text-center'>Lipa na Mpesa</h1>

      {/* ✅ Everything inside one card */}
      <div className="card shadow" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <img
          src={img_url + product.product_photo}
          alt={product.product_name}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-danger">{product.product_name}</h5>
          <p className="card-text text-dark">{product.product_description}</p>
          <p className="card-text text-warning font-weight-bold">
            Cost: ${product.product_cost}
          </p>

          {/* ✅ Payment form inside card */}
          <form onSubmit={submit}>
            {message && <p className="text-info">{message}</p>}
            {error && <p className="text-danger">{error}</p>}

            <input
              type="tel"
              placeholder="Enter phone +254xxxx"
              className="form-control mb-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-success w-100">
              Make Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Makepayment

