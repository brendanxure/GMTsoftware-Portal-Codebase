import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container d-flex justify-content-center align-items-center">
        <form className="login-form">
          <div className="mb-3">
            <label for="user-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="userEmail"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label for="user-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              placeholder="Password"
            />
          </div>
          {/* <div
            className="mb-3 form-check d-flex  justify-content-around"
            style={{ width: 562 }}
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" for="remember-me">
              Remember me
            </label>

            <label class="form-check-label" for="exampleCheck1">
              Forgot your password?
            </label>
          </div> */}
          <button type="submit" class="btn btn-primary form-control">
            LOGIN
          </button>

          <p className="create-account">
            Don't have an account?
            <span>
              {" "}
              <Link to="/Signup" className="sign-up-link">
                SIGN UP
              </Link>{" "}
              here{" "}
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
