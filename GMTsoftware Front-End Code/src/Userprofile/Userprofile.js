import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "../Dashboard/Appbar";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "../Dashboard/ListItems";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CssBaseline } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Copyright } from "@mui/icons-material";
import axios from "axios";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useStateValue } from "../stateProvider/stateProvider";

function Userprofile() {
  const [{ user, userprofile }, dispatch] = useStateValue();
  console.log(userprofile);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const drawerWidth = 240;

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  // const history = useNavigate();

  const [data, setData] = useState(true);

  const [details, Setdetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNos: "",
    registered_Course: "",
    address: "",
  });
  console.log(details);

  const handleInputFirstName = (event) => {
    event.preventDefault();
    Setdetails({ ...details, firstName: event.target.value });
  };
  const handleInputLastName = (event) => {
    Setdetails({ ...details, lastName: event.target.value });
  };
  const handleInputPhoneNo = (event) => {
    Setdetails({ ...details, phoneNos: event.target.value });
  };
  const handleInputCourses = (event) => {
    Setdetails({ ...details, registered_Course: event.target.value });
  };

  const handleInputAddress = (event) => {
    Setdetails({ ...details, address: event.target.value });
  };
  const handleInputEmail = (event) => {
    Setdetails({ ...details, email: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://portal.gmtsoftware.tech/portaluser/profile/`, details)
      .then((res) => {
        console.log(res.data);
      });
    dispatch({
      type: "FILTER_CURRENTPROFILE",
      userprofile: user,
    });
  };

  axios
    .get(`https://portal.gmtsoftware.tech/portaluser/profile/`)
    .then((res) => {
      let profiles = res.data;
      setData(profiles.results);
    })
    .catch((err) => {
      console.log(err);
    });

  const handleProfile = () => {
    dispatch({
      type: "CURRENT_PROFILE",
      userprofile: data,
    });
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={6}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <div className="container">
                    <div className="img">
                      <img src="/students.png" alt="" className="rounded" />
                    </div>
                    <div>
                      <p className="p-4">First Name:</p>
                      <p className="p-4">Last Name:</p>
                      <p className="p-4">Email:</p>
                      <p className="p-4">Phone Nos:</p>
                      <p className="p-4">registered_Course:</p>
                      <p className="p-4">address:</p>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <div className="container">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
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
                          onSubmit={handleSubmit}
                        >
                          <div className="form-row">
                            <h3 className="text-center">
                              Fill In Your Details
                            </h3>
                            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                              <label for="validationServer01">First name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationServer01"
                                name="firstName"
                                placeholder="First name"
                                required
                                onChange={handleInputFirstName}
                                value={details.firstName}
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                              <label for="validationServerUsername">
                                Email
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="inputGroupPrepend3"
                                  >
                                    @
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  className="form-control "
                                  name="email"
                                  id="validationServerUsername"
                                  placeholder="Email"
                                  onChange={handleInputEmail}
                                  value={details.email}
                                  aria-describedby="inputGroupPrepend3"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please Provide a valid mail.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                              <label for="validationServer02">Last name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationServer02"
                                name="lastName"
                                placeholder="Last name"
                                required
                                onChange={handleInputLastName}
                                value={details.lastName}
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                              <label for="validationServerUsername">
                                Phone Nos
                              </label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span
                                    className="input-group-text"
                                    id="inputGroupPrepend3"
                                  >
                                    <AddIcCallIcon />
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  className="form-control "
                                  name="phoneNos"
                                  id="validationServerUsername"
                                  placeholder="Phone"
                                  aria-describedby="inputGroupPrepend3"
                                  required
                                  onChange={handleInputPhoneNo}
                                  value={details.phoneNos}
                                />
                                <div className="invalid-feedback">
                                  Please Provide a valid Phone.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                              <label for="validationServer">
                                registered_course
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="registered_Course"
                                id="validationServer03"
                                placeholder="Courses"
                                required
                                onChange={handleInputCourses}
                                value={details.registered_Course}
                              />
                              <div className="invalid-feedback">
                                Please provide your registered Course.
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-6 mb-3 mx-auto">
                              <label for="validationServer04">Address</label>
                              <input
                                type="text"
                                className="form-control "
                                name="address"
                                id="validationServer04"
                                placeholder="Address"
                                required
                                onChange={handleInputAddress}
                                value={details.address}
                              />
                              <div className="invalid-feedback">
                                Please provide a valid Address.
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
                              <label
                                className="form-check-label"
                                for="invalidCheck3"
                              >
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
                              onClick={handleProfile}
                            >
                              Submit form
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </Paper>
              </Grid>
              {/* Chart */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Userprofile;
