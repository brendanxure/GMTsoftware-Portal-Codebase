import React from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import students from "../assets/students.png";

const Home = () => {
  return (
    <>
      <div className="flex-container container-md col-lg-12 col-md-12 col-sm-12 d-flex p-5">
        <div className="welcome-div col-lg-6 col-md-6 col-sm-6">
          <h1 className="welcome-heading">
            Welcome to <span className="nametag">GMTsoftware</span> Student
            Portal
          </h1>
          <p className="portal-tag">
            A multipurpose student portal formalized on better learning and
            interaction between tutors and students
          </p>
          <Link to="/login" className="login-btn">LOGIN <i className="fas fa-chevron-right"></i></Link>
          <p className="create-account">
            Don't have an account?
            <span> <Link to="/Signup" className="sign-up-link">SIGN UP</Link> here </span>
          </p>
        </div>

        <div className="bg-div col-lg-6 col-md-6 d-none d-lg-block">
          <img src={students} alt="students" />
        </div>
      </div>
    </>
  );
}

export default Home;
