import React, { useState } from "react";
import "./auth.scss";

import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../apis/auth.apis";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState(null);

  const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const USERNAME_REGEX = /^[a-zA-Z0-9_]*$/;

  const [registerInputs, setRegisterInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  });
  const registerErrors = {
    username: "Username is required",
    email: "Email is required",
    password: "Password is required",
    confirmPassword: "Confirm Password is required",
  };

  const handleRegisterInputs = (name, e) => {
    setRegisterInputs({ ...registerInputs, [name]: e.target.value });
  };

  const registerValidation = () => {
    if (!registerInputs.username) {
      setServerErrors(registerErrors.username);
      return false;
    }
    if (!registerInputs.email) {
      setServerErrors(registerErrors.email);
      return false;
    }
    if (!registerInputs.password) {
      setServerErrors(registerErrors.password);
      return false;
    }
    if (!registerInputs.confirmPassword) {
      setServerErrors(registerErrors.confirmPassword);
      return false;
    }
    if (registerInputs.password !== registerInputs.confirmPassword) {
      setServerErrors("Passwords do not match");
      return false;
    }
    if (registerInputs.username.length < 3) {
      setServerErrors("Username must be at least 3 characters long");
      return false;
    }
    if (registerInputs.password.length < 3) {
      setServerErrors("Password must be at least 3 characters long");
      return false;
    }
    if (!EMAIL_REGEX.test(registerInputs.email)) {
      setServerErrors("Invalid email");
      return false;
    }
    if (!USERNAME_REGEX.test(registerInputs.username)) {
      setServerErrors("Invalid username");
      return false;
    }

    setServerErrors("");
    return true;
  };

  const handleRegister = () => {
    const isValid = registerValidation();

    if (isValid) {
      setLoading(true);
      setServerErrors(null);

      registerUser(registerInputs)
        .then((res) => {
          console.log(res);

          setLoading(false);
          setRegisterInputs({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          navigate("/auth/login");
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
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Enter your username"
          value={registerInputs.username}
          onChange={(e) => handleRegisterInputs("username", e)}
          required
        />
        <input
          type="text"
          placeholder="Enter your email"
          value={registerInputs.email}
          onChange={(e) => handleRegisterInputs("email", e)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={registerInputs.password}
          onChange={(e) => handleRegisterInputs("password", e)}
          required
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={registerInputs.confirmPassword}
          onChange={(e) => handleRegisterInputs("confirmPassword", e)}
          required
        />

        <span>
          Already have an account?{" "}
          <Link to="/auth/login" className="authLink">
            Login
          </Link>
        </span>

        <div className="authError">
          {serverErrors && <span>{serverErrors}</span>}
        </div>

        <button typeof="submit" onClick={(e) => handleRegister(e)}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
