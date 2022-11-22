import logo from "./logo.svg";
import "./App.css";
import "./sb-admin-2.min.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Launch from "./Launch";

import "./style.css"
import Topbar2 from "./Topbar2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartItems from "./CartItems";

import Products from "./Products";






function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <div className="row">
        <div className="col-lg-12">
          <Topbar2 />
        </div>
        <Routes>
          <Route path="/" element={<Launch/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/CartItems" element={<CartItems/>}/>
          </Routes>
        
       
        
        
        
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
