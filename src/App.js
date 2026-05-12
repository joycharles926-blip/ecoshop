import Cart from './components/Cart';  // import Cart
import './App.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import '@fortawesome/fontawesome-free/css/all.min.css';


import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProduct from './components/Addproduct';
import GetProducts from './components/Getproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MakePayment from './components/MakePayment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import { useState } from 'react';
import Chatbot from './components/Chatbot';
import Checkout from './components/Ckeckout';
function App() {
  const [cart, setCart] = useState([]);

  return (
    <GoogleOAuthProvider clientId="your-client-id">
      <BrowserRouter>
        <div className="App">
          <h1 style={{ textAlign: "center", margin: "20px 0" }} className="text-success font-weight-bold mb-4">
            Welcome to EcoShop
          </h1>

          {/* Pass cart to Navbar */}
          <Navbar cart={cart} />

          <Carousel/>
          <Chatbot/>
          <Checkout/>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/" element={<GetProducts cart={cart} setCart={setCart} />} />
            <Route path="/make-payment" element={<MakePayment />} />

            {/* ✅ New Cart route */}
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
export default App;
