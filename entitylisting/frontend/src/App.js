import "./App.css";
import { Header } from "./components/Header";
// import Navbar from "./components/Navbar";
import Product from "./components/Products";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header />
      <Product />
    </div>
  );
}

export default App;
