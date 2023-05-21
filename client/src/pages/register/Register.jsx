import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import post from "../../instance";
import { NavLink } from "react-router-dom";
import "./register.css";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [active, setactive] = useState(false);
  const Url = process.env.REACT_APP_Url;
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handlechange = (e) => {
    setRegister((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const sendregister = async () => {
    if (
      register.email.length == 0 ||
      register.username.length == 0 ||
      register.password.length == 0
    ) {
      setactive(true);
    } else {
      try {
        const res = await axios.post(`${Url}/Auth/register`, register);

        navigate("/Login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="registerMain">
      <h1 className="log-h1">REGISTER</h1>
      <div className="register-container">
        <input
          type="text"
          placeholder="Enter Username"
          onChange={handlechange}
          id="username"
        />
        {active && register.username.length == 0 && (
          <label>Username cannot be empty</label>
        )}

        <input
          type="text"
          placeholder="Enter Password"
          onChange={handlechange}
          id="password"
        />
        {active && register.password.length == 0 && (
          <label>Password cannot be empty</label>
        )}

        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={handlechange}
          id="email"
        />
        {active && register.email.length == 0 && (
          <label>Email cannot be empty</label>
        )}
        <button onClick={sendregister}>REGISTER</button>
      </div>
      <div className="direct">
        Already registered ?{" "}
        <NavLink to={"/login"}>
          <p> Login here</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
