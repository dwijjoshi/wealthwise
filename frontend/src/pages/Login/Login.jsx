import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isAuthTypeRegister, setIsAuthTypeRegister] = useState(true);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleAuthType = () => {
    setIsAuthTypeRegister(!isAuthTypeRegister);
    setname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const nameChangeHandler = (e) => {
    setname(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const body = { name, email, password, confirmPassword };
    if (isAuthTypeRegister) {
      const res = await axios.post("http://localhost:8080/api/v1/register", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        navigate("/dashboard");
      }
    } else {
      const res = await axios.post("http://localhost:8080/api/v1/login", {
        email,
        password,
      });
      if (res.data.success) {
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form-section">
        <div className="top-container">
          <div className="logo">WEALTHWISE</div>
          <h3 className="header">Welcome to the future of finance</h3>
          <span>Register the account and walk to the financial freedom</span>
        </div>

        <form action="" className="form" onSubmit={formSubmitHandler}>
          {isAuthTypeRegister && (
            <input
              type="text"
              name="name"
              placeholder="User Name"
              onChange={nameChangeHandler}
            />
          )}
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={emailChangeHandler}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
          {isAuthTypeRegister && (
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={confirmPasswordChangeHandler}
            />
          )}
          <button type="submit">
            {isAuthTypeRegister ? "Register" : "Login"}
          </button>
          <p>
            Already have an account ?{" "}
            <span onClick={handleAuthType}>
              {isAuthTypeRegister ? "Login" : "Register"}
            </span>
          </p>
        </form>
      </div>
      <div className="image-section">
        <img className="register-image" src="register.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
