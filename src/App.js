import './App.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProduct from './AddProduct';
import GetProducts from './components/Getproduct';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GoogleOAuthProvider clientId="882400013905-6im67kk4qulsrmhdqiecjih7oqhp4taf.apps.googleusercontent.com">

      <BrowserRouter>
        <div className="App">

          {/* Optional header */}
          <h1 style={{ textAlign: "center", margin: "20px 0" }}>
            Welcome to EcoShop
          </h1>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/get-product" element={<GetProducts />} />
          </Routes>

        </div>
      </BrowserRouter>

    </GoogleOAuthProvider>
  );
}

export default App;
