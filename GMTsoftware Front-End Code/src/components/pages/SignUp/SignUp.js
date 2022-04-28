import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_gmt";
const TEMPLATE_ID = "template_z3ss6rc";
const USER_ID = "user_NEe1gIIJCdLOHzqMzvF8V";

function SignUp() {
  useEffect(() => {
    document.title = "GMTsoftware | Apply";
  }, []);

  const history = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(true);

  const handleEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setData(false);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((res) => {
        if (res.status === 200) {
          history.push("./success");
        }
      })
      .catch((err) => history.push("./failure"));
    e.target.reset();
  };

  return (
    <div className="container mt-5">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {loading && <img src="./gmt.gif" alt="gmt" />}
      </div>

      {data && (
        <div
          className="form"
          style={{
            margin: "50px auto",
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <form
            className="border border-primary p-3 rounded mt-5"
            onSubmit={handleEmail}
          >
            <div className="form-row">
              <h3 className="text-center">Application Form</h3>
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServer01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer01"
                  name="fname"
                  placeholder="First name"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServer02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationServer02"
                  name="lname"
                  placeholder="Last name"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServerUsername">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      @
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control "
                    name="email"
                    id="validationServerUsername"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend3"
                    required
                  />
                  <div className="invalid-feedback">
                    Please Provide a valid mail.
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServerUsername">Phone Nos</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend3">
                      Phone Nos
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control "
                    name="phonenos"
                    id="validationServerUsername"
                    placeholder="Phone nos"
                    aria-describedby="inputGroupPrepend3"
                    required
                  />
                  <div className="invalid-feedback">
                    Please Provide a valid contact Number.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServer">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="validationServer03"
                  placeholder="City"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServer04">State</label>
                <input
                  type="text"
                  className="form-control "
                  name="state"
                  id="validationServer04"
                  placeholder="State"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServer05">
                  Coding Experience ? if yes provide the programming languages
                  you worked with.
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="experience"
                  id="validationServer05"
                  required
                />
                <div className="invalid-feedback">
                  if yes provide the programming languages you worked with.
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                <label for="validationServer05">
                  Where do you want to study ? Indicate Abuja or Remotely
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="study"
                  id="validationServer05"
                  placeholder="Abuja or Remotely"
                  required
                />
                <div className="invalid-feedback">
                  if yes provide the programming languages you worked with.
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value=""
                  id="invalidCheck3"
                  required
                />
                <label className="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="text-center m-2">
              <button
                className="btn  btn-rounded btn-sm"
                style={{
                  width: "150px",
                  background: "rgb(141, 18, 18)",
                  color: "#fff",
                }}
                type="submit"
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp;
