import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div
        className="container-fluid py-2 fixed-top  sticky-top scrollspy text-white"
        style={{ background: "#272626" }}
      >
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-expand-md  navbar-dark">
            <Link to="/" className="text-decoration-none">
              <div className="h3 d-flex ">
                <span className="log2 align-self-center font-weight-bolder">
                  GMT
                </span>
                <span className="log align-self-center font-weight-bold">
                  software
                </span>
              </div>
            </Link>

            <button
              className="navbar-toggler collapsed border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <div className="close-icon py-1 text-white">x</div>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-white dropdown-toggle"
                    to="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Courses
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a href="/FrontEnd" className="dropdown-item">
                      FrontEnd Web Development
                    </a>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Digital-Marketing">
                      Digital Marketing
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/React">
                      React Development
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Data-science">
                      Data Science
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Python">
                      Python Programming
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Fullstack">
                      Software Engineering/Full Stack
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Flutter">
                      Hybrid Android & IOS Development
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/UXdesigner">
                      UX/UI design
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/curriculum">
                    Curriculum
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Companies">
                    For Companies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Certificate">
                    Verify Certificate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/sign-up">
                    Apply
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/About-Us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link text-white dropdown-toggle"
                    to="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link className="dropdown-item" to="/Blog">
                      All Blogs
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Fullstackblog">
                      MERN STACK / FullStack
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Pythonblog">
                      Python & Data Science blog
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/Flutterblog">
                      Flutter blog
                    </Link>
                    <div className="dropdown-divider"></div>

                    <Link className="dropdown-item" to="/UI/UXblog">
                      UX/UI design blog
                    </Link>
                    <div className="dropdown-divider"></div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/portal">
                    Student portal
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
