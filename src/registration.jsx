import React, { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  // state
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handle input
  function handleChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
      }}
    >

      {/* NAVBAR */}
      <nav className="navbar navbar-light bg-white shadow-sm px-4 py-3">

        <div className="d-flex align-items-center">

          {/* LOGO */}
          <img
            src="src/assets/ChatGPT Image May 11, 2026, 11_39_39 AM.png"
            alt="logo"
            style={{
              width: "70px",
              marginRight: "10px",
            }}
          />

          {/* APP NAME */}
          <h3
            style={{
              margin: 0,
              color: "#2d2d8f",
              fontWeight: "bold",
            }}
          >
            Synap AI
          </h3>

        </div>

        {/* LOGIN BUTTON */}
        <Link to="/Login">
          <button className="btn btn-primary">
            Login
          </button>
        </Link>

      </nav>

      {/* REGISTRATION FORM */}
      <div className="d-flex justify-content-center align-items-center vh-100">

        <div
          className="card p-4 rounded-4 shadow"
          style={{ width: "350px" }}
        >

          <h3 className="text-center mb-3">
            Create Account
          </h3>

          <form>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              required
            />

            <button className="btn btn-primary w-100 mb-3">
              Register
            </button>

          </form>

          <p className="text-center mb-0">
            Already have an account?
            <Link to="/Login"> Login</Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Registration;