import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Addbrands } from "./components/Addbrands";
import { Addprod } from "./components/Addprod";
import { Adduser } from "./components/Adduser";
import Brands from "./components/Brands";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/user" element={<User />}></Route>
        <Route path="/brand" element={<Brands />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/adduser" element={<Adduser />}></Route>
        <Route path="/addbrands" element={<Addbrands />}></Route>
        <Route path="/addprod" element={<Addprod />}></Route>
      </Routes>
    </div>
  );
}

export default App;
