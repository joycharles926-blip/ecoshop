import './App.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProduct from './AddProduct';
import GetProducts from './components/Getproduct';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MakePayment from './components/MakePayment';
import Navbar from './components/Navbar';

function App() {
  return (
    <GoogleOAuthProvider clientId="882400013905-naa0hhja6amsira7id2l2do42qn17vm2.apps.googleusercontent.com">

      <BrowserRouter>
        <div className="App">

          {/* Optional header */}
          <h1 style={{ textAlign: "center", margin: "20px 0" }} className="text-primary font-weight-bold mb-4">
            Welcome to EcoShop
          </h1>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/" element={<GetProducts />} />
            <Route path="/make-payment" element={<MakePayment />} />
          </Routes>
          <Navbar/>

        </div>
      </BrowserRouter>

    </GoogleOAuthProvider>
  );
}

export default App;
