import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log("Login Data:", data);
    alert("Login clicked");
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

        {/* REGISTER BUTTON */}
        <Link to="/Registration">
          <button className="btn btn-primary">
            Register
          </button>
        </Link>

      </nav>

      {/* LOGIN FORM */}
      <div className="d-flex justify-content-center align-items-center vh-100">

        <div className="card p-4 rounded-4 shadow px-5 w-90">

          <h3 className="text-center mb-3">
            Login
          </h3>

          <form onSubmit={handleLogin}>

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
              className="form-control mb-2"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />

            <div className="text-end mb-3">
              <a href="#">Forgot Password?</a>
            </div>

            <button className="btn btn-primary w-100 mb-3">
              Login
            </button>

          </form>

          <p className="text-center mb-0">
            Don’t have an account?{" "}
            <Link to="/Registration">
              Register
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;