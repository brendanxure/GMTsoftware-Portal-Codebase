import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Particle from "../component/Particles";
import "./Login.css";
import axiosInstance from "../utils/axios";
import { useStateValue } from "../stateProvider/stateProvider";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/pages/Footer.js/Footer";

const Login = () => {
  const history = useNavigate();
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const [{ user }, dispatch] = useStateValue();

  const [task, setTask] = useState();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`api/token/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access_token");
      })
      .then(() => {
        if (localStorage.getItem("access_token") != null) {
          dispatch({
            type: "FILTER_CURRENTUSER",
            EachUser: user,
          });
        } else {
          alert("please try and register");
        }
        history("/Dashboard");
      });
  };
  const handleLogin = () => {
    dispatch({
      type: "ADD_TO_DASHBOARD",
      user: formData.email,
      isLoggedIn: true,
      TaskList: task ? task : [],
    });
  };

  useEffect(() => {
    axios
      .get(`https://portal.gmtsoftware.tech/portaluser/EachTask/`)
      .then((res) => {
        let task = res.data;
        setTask(task);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [formData]);

  return (
    <>
      <Navbar />
      <Particle />
      <div className="card mx-auto mb-5 d-flex justify-content-center py-auto align-items-center Signin">
        <div className="card-body">
          <div className="card-title">Login</div>
          <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="user-email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div style={{ color: "red" }}>Email is case sensive</div>
              <div className="mb-3">
                <label for="user-password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                onClick={handleLogin}
                className="btn btn-primary form-control"
              >
                LOGIN
              </button>

              <p className="create-account">
                Don't have an account?
                <span>
                  {" "}
                  <Link to="/Signup" className="sign-up-link">
                    SIGN UP
                  </Link>
                  here
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
