import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const navigate = useNavigate();
    const onLogin = useCallback(() => {
      navigate("/");
    }, [navigate]);

  return (
    <div className="login">
      <div className="login-form">
        <p className="heading">Please Register</p>
        <input type="text" className="input" placeholder="full name" />
        <input type="text" className="input" placeholder="email" />
        <input type="text" className="input" placeholder="password" />
        {/* <button className="register-button">Login</button> */}
        <div className="register-button">Register</div>
        <div className="register-button" onClick={onLogin}>Already a User?</div>
      </div>
    </div>
  );
}
