import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/product")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  console.log(data);

  return (
    <div className="controls">
      <h1>Product Details</h1>
      <button onClick={() => navigate("/addprod")}>Add Product</button>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount Price</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((e) => (
            <tr className="row">
              <td className="dataNm">{e.prodNm}</td>
              <td className="dataNm">{e.brand}</td>
              <td className="dataNm">{e.category}</td>
              <td className="dataNm">{e.price}</td>
              <td className="dataNm">{e.discountprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
