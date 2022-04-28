import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, "Username must be 4 characters or more")
        .max(8, "Username must be 8 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters or more")
        .max(16, "Password must be 16 characters or less")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="signup-container d-flex justify-content-center align-items-center">
        <div className="mx-auto">
          <h2 className="mt-5 text-center mx-auto reg">Create an account</h2>
          <p className="existing-user">
            Already have an account?
            <span>
              {" "}
              <Link to="/login" className="sign-up-link">
                SIGN In
              </Link>{" "}
            </span>
          </p>
          <form className="signup-form" onSubmit={formik.handleSubmit}>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
            </div>

            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control input"
                id="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control input"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirmation}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <button type="submit" class="btn btn-primary form-control">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
