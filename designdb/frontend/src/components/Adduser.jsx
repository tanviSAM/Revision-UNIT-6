import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Adduser = () => {
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

    fetch("http://localhost:8080/user", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="user">Add User Here</h1>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            First Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="firstname"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Last Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="lastname"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Contact
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="contact"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Age Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="datainp-label">
            Email
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="email"
              className="datainp"
              id="inputPassword"
              placeholder="Enter Email Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <input
          // onClick={() => navigate("/user")}
          className="submit"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
