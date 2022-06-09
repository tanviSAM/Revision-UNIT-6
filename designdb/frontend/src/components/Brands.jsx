import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Brands() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/brand")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  console.log(data);

  return (
    <div className="controls">
      <button onClick={() => navigate("/addbrands")}>Add Brand</button>
      <table className="table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Registration. No.</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((e) => (
            <tr className="row">
              <td className="dataNm">{e.brandNm}</td>
              <td className="dataNm">{e.registrationNo}</td>
              <td className="dataNm">{e.type}</td>
              <td className="dataNm">{e.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Brands;
