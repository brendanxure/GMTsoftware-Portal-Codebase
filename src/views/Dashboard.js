import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import "./Dashboard.css";
import bg from "../assets/Group 49.svg";
import bg2 from "../assets/Group 48.svg";
import bg3 from "../assets/Group 47.svg";
import bg4 from "../assets/Icon material-book.svg";
import Badge from "@mui/icons-material/Badge";

function Dashboard() {
  return (
    <>
      <div className="row px-3 mb-5 mt-5 d-flex justify-content-around">
        <div className="col-md-4 fs-1 fw-bolder ">Welcome Joshua</div>

        <div className="col-md-4 text-center">
          <Badge badgeContent={4} color="primary" style={{ fontSize: 100 }}>
            <MailIcon color="action" style={{ fontSize: 50 }} />
          </Badge>
        </div>
      </div>
      <div className="card-container">
        <div className="row text-center">
          <div className="col-sm-6 pb-5 mx-5" style={{ width: "18rem" }}>
            <div className="card">
              <div className="card-body p-5">
                <img src={bg4} alt="" srcset="" />
                <h5 className="card-title" style={{ fontWeight: "800" }}>
                  Tasks
                </h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 pb-5 mx-5" style={{ width: "18rem" }}>
            <div className="card">
              <div className="card-body p-5">
                <img src={bg3} alt="" srcset="" />
                <h5 className="card-title" style={{ fontWeight: "800" }}>
                  Contact Tutor
                </h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-6 pt-5 mx-5"
            style={{ width: "286px", height: "280px" }}
          >
            <div className="card">
              <div className="card-body p-4">
                <img src={bg2} alt="" srcset="" />
                <h5 className="card-title" style={{ fontWeight: "800" }}>
                  Approved Tasks
                </h5>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6 pt-5 mx-5"
            style={{ width: "286px", height: "280px" }}
          >
            <div className="card">
              <div className="card-body p-5">
                <img src={bg} alt="img" srcset="" />
                <h5 className="card-title" style={{ fontWeight: "800" }}>
                  Reviews
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
