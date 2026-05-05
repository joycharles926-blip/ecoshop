import './App.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from './components/Signup';
import Signin from './components/Signin';
import GetProducts from './components/Getproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MakePayment from './components/MakePayment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import AddProduct from './components/Addproduct';

function App() {
  return (
    <GoogleOAuthProvider clientId="882400013905-6im67kk4qulsrmhdqiecjih7oqhp4taf.apps.googleusercontent.com">

      <BrowserRouter>
        <div className="App">

          {/* Optional header */}
          <h1 style={{ textAlign: "center", margin: "20px 0" }} className="text-success font-weight-bold mb-4">
            Welcome to EcoShop
          </h1>
          <Navbar/>
          <Carousel/>
          <AddProduct/>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/" element={<GetProducts />} />
            <Route path="/make-payment" element={<MakePayment />} />
          </Routes>
          <Footer/>

        </div>
      </BrowserRouter>

    </GoogleOAuthProvider>
  );
}

export default App;
