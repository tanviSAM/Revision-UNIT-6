import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Addbrands = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/brand", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="user">Add Brand Here</h1>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Brand Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="brandNm"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Brand Name"
              onChange={handlechange}
            />
          </div>
        </div>

         <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Registration.No.
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="registrationNo"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Regitration number"
              onChange={handlechange}
            />
          </div>
        </div> 

         <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Type
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="type"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Type"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Category
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="category"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Category"
              onChange={handlechange}
            />
          </div>
        </div> 

        <input
          // onClick={() => navigate("/brand")}
          className="submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
