import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Addprod = () => {
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

    fetch("http://localhost:8080/product", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="user">Add Products Here</h1>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Product
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="prodNm"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Brand
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="brand"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Name Here"
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
              placeholder="Enter Age Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Price
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="price"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Email Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Discount Price
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="discountprice"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Email Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <input
          // onClick={() => navigate("/product")}
          className="submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
