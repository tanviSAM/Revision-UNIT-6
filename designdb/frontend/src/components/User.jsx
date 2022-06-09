import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/user")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  console.log(data);

  return (
    <div className="controls">
      <button onClick={() => navigate("/adduser")}>Add Users</button>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((e) => (
            <tr className="row">
              <td className="dataNm">{e.firstname}</td>
              <td className="dataNm">{e.lastname}</td>
              <td className="dataNm">{e.email}</td>
              <td className="dataNm">{e.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
