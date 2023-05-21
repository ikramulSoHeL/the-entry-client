import React, { useState } from "react";
import "./auth.scss";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../apis/auth.apis";
import { saveStorage } from "../../utils/persistLocalStorage";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState(null);

  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });
  const loginErrors = {
    username: "Username is required",
    password: "Password is required",
  };

  const handleLoginInputs = (name, e) => {
    setLoginInputs({ ...loginInputs, [name]: e.target.value });
  };

  const loginValidation = () => {
    if (!loginInputs.username) {
      setServerErrors(loginErrors.username);
      return false;
    }
    if (!loginInputs.password) {
      setServerErrors(loginErrors.password);
      return false;
    }

    setServerErrors("");
    return true;
  };

  const handleLogin = () => {
    const isValid = loginValidation();

    if (isValid) {
      setLoading(true);
      setServerErrors(null);

      loginUser(loginInputs)
        .then((res) => {
          console.log(res);

          setLoading(false);
          setLoginInputs({ username: "", password: "" });
          saveStorage("user", res.data.data.user);
          saveStorage("accessToken", res.data.data.accessToken);
          saveStorage("refreshToken", res.data.data.refreshToken);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.response);

          setLoading(false);
          setServerErrors(err.response.data.message);
        });
    }
  };

  return (
    <div className="authContainer">
      <div className="formBlock">
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter your username"
          value={loginInputs.username}
          onChange={(e) => handleLoginInputs("username", e)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={loginInputs.password}
          onChange={(e) => handleLoginInputs("password", e)}
          required
        />

        <span>
          Don't have an account?{" "}
          <Link to="/auth/register" className="authLink">
            Register
          </Link>
        </span>

        <div className="authError">
          {serverErrors && <span>{serverErrors}</span>}
        </div>

        <button typeof="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
