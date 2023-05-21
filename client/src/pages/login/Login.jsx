import React from "react";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import post from "../../instance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const Url = process.env.REACT_APP_Url;
  const { loading, error, dispatch } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({
    username: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setLoginDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${Url}/Auth/login`, loginDetails);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.log(err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className="login-container">
      <h1 className="log-h1">LOGIN</h1>
      <div className="login-form">
        <input
          className="login-input"
          placeholder="Enter username"
          type="text"
          id="username"
          onChange={handleChange}
        />
        <input
          className="login-input"
          placeholder="Enter password"
          type="text"
          id="password"
          onChange={handleChange}
        />
        <button onClick={handleClick}>LOGIN</button>
        <div className="direct">
          New User?{" "}
          <NavLink to={"/register"}>
            <p> Register here</p>
          </NavLink>
        </div>
        <div className="direct1">
          Go to
          <NavLink to={"/"}>
            <p> Home</p>
          </NavLink>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default Login;
