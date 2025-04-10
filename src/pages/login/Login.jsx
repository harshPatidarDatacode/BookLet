import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container-fluid login-page d-flex p-0">
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center left-panel text-white">
        <h2 className="mb-4 brand-name">
          <span className="text-primary fw-bold">Book</span>
          <span className="text-white fw-bold">Let.</span>
          <div className="fs-6 text-muted">by Datacode</div>
        </h2>
        <h3 className="mb-4">Login In To Get Inside</h3>
        <form className="w-75">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control input-box" />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control input-box" />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill">
            Log In
          </button>
        </form>
      </div>
      <div className="col-md-6 right-panel d-none d-md-block">
        <img src="loginBatman.png" alt="Batman Image" srcset="" />
      </div>
    </div>
  );
};

export default Login;
