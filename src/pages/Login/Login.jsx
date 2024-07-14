import React from "react";
import "./Login.scss";
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You do have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
