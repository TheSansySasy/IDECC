import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const onRegister = useCallback(() => {
    navigate("/register");
  }, [navigate]);
  return (
    <div className="login">
      <div className="login-form">
        <p className="heading">Login</p>
        <input type="text" className="input" placeholder="email" />
        <input type="text" className="input" placeholder="password" />
        <div className="register-button">Login</div>
        <div className="register-button" onClick={onRegister}>New Here? Register</div>
      </div>
    </div>
  );
}
