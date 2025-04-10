import React, { useState } from 'react'
import "./signin.css"

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        console.log(email, password);
    }

    var auth={
        "email":email,
        "password":password
    }
    localStorage.setItem('auth', JSON.stringify(auth));

    var navigator=()=>{
        window.location.href="/dashboard";
    }

  return (
    <div className="container-fluid login-page d-flex p-0">
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center left-panel text-white">
        <h2 className="mb-4 brand-name">
          <span className="text-primary fw-bold">Book</span>
          <span className="text-white fw-bold">Let <span className='text-primary'>.</span></span>
          <div className="fs-6 ms-4">by Datacode</div>
        </h2>
        <h3 className="mb-4">Sign In To Get Inside</h3>
        <form className="w-75" onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control input-box" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input type="password" className="form-control input-box" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill" onSubmit={()=>navigator()}>
            Log In
          </button>
        </form>
      </div>
      <div className="col-md-6 right-panel d-none d-md-block">
        {/* <img src="signinBatman.png" alt="Black Batman Image" srcset="" /> */}
      </div>
    </div>
  )
}

export default Signin