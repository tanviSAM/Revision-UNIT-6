import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar_container">
      <Link to="/user">Home</Link>
      <Link to="/brand">Brand</Link>
      <Link to="/product">Product</Link>
    </div>
  );
}

export default Navbar;
