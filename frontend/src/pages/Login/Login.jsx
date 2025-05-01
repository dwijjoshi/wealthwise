import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [isAuthTypeRegister, setIsAuthTypeRegister] = useState(true);
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const res = await axios.post(
        "http://localhost:8080/api/v1/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );

      if (res.data.success) {
        dispatch(saveUser(res.data.user));
        navigate("/dashboard");
      }
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(saveUser(res.data.user));
          navigate("/dashboard");
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="signup-form-container">
      <Toaster />
      <div className="signup-form-section">
        <div className="top-container px-4 pt-2">
          <div className="flex items-center mb-6 gap-x-2">
            <img className="h-[47px] w-[60px]" src="/logo.png" alt="" />
            <div className="font-semibold text-[20px]">
              <span className="text-[#0068FF]">WEALTH</span>
              <span className="text-[#11FF09]">WISE</span>
            </div>
            <div className="change-auth-container">
              {isAuthTypeRegister
                ? "Already have an account? "
                : "Don't have an account? "}
              <span onClick={handleAuthType} className="change-auth">
                {isAuthTypeRegister ? "Login" : "Register"}
              </span>
            </div>
          </div>
          <h3 className="header font-semibold text-xl pt-[-20px]">
            Welcome to the future of finance
          </h3>
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
        </form>
        <div className="flex justify-center">
          <ul className="flex flex-col justify-start items-start w-[60%] list-disc list-inside">
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>

        <div>
          <input type="checkbox" />
        </div>
      </div>
      <div className="image-section">
        <img className="register-image" src="register.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
