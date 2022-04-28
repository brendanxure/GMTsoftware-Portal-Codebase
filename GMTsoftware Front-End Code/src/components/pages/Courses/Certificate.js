import React, { useEffect, useState } from "react";
import CertificateBar from "./CertificateSearchBar";
import { FaDownload } from "react-icons/fa";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Certificate1({ searchValue }) {
  const [data2, setData] = useState([]);
  const [visible, setVisible] = useState("hidden");
  console.log(visible); //data2 is the data from the api
  let newData = [];
  useEffect(() => {
    const certificate_nos = () => {
      axios
        .get(`https://api.gmtsoftware.tech/certificate_list/`)
        .then((res) => {
          let data = res.data;
          setData(data);
        });
    };
    certificate_nos();
  }, []);
  useEffect(() => {
    if (searchValue.length > 7) {
      setVisible("visible");
    }
  }, [searchValue]);

  function appendObjTo(thatArray, newObj) {
    const frozenObj = Object.freeze(newObj);

    return Object.freeze([...thatArray, frozenObj]);
  }

  const newArray = appendObjTo(newData, data2);
  console.log(newArray);

  const filterData = ({ Certificate_nos }) => {
    if (Certificate_nos === searchValue) {
      return Certificate_nos.indexOf(Certificate_nos) !== -1;
    }
  };

  return (
    <>
      {newArray.map(
        (item) =>
          item.filter(filterData).map((cert) => (
            <>
              <div className="mx-auto col-lg-10 col-sm-10 col-md-10">
                <div
                  className="card mb-3 border rounded shadow"
                  style={{ visibility: visible }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={cert.image}
                        className="card-img p-2"
                        style={{ height: "100%" }}
                        alt={cert.id}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-sm-center">
                          {cert.Course}
                        </h5>
                        <p className="card-text text-sm-center">
                          <b>Name:</b>&nbsp;&nbsp; {cert.name} <br></br>
                          <b>Certificate Nos:</b>&nbsp;&nbsp;
                          {cert.Certificate_nos}
                          <br></br>
                          <b>Course Start-Date</b>&nbsp;&nbsp;
                          {cert.start_date}
                          <br></br>
                          <b>Course End-Date</b>&nbsp;&nbsp;
                          {cert.end_date}
                          <br></br>
                        </p>
                        <div className="text-center col-sm-6 col-md-8 col-lg-8 mx-auto">
                          <a
                            href={cert.image}
                            className="btn btn-dark btn-sm-center mx-3 mb-2"
                          >
                            <object
                              data={cert.image}
                              type="application/pdf"
                              width="100%"
                              height="100%"
                            >
                              View Certificate
                            </object>
                            <br></br>

                            <span>
                              <FaDownload size={20} />
                            </span>
                          </a>
                          <RWebShare
                            data={{
                              text: `check out my latest ${cert.Course} certificate :${cert.Certificate_nos}`,
                              url: `${cert.image}`,
                              title: `Certificate of ${cert.name}`,
                            }}
                            onClick={() => console.log("shared successfully!")}
                          >
                            <a className="btn btn-dark btn-sm-center mx-3">
                              <span>Share 🔗</span> <br></br>
                              <span>
                                <FaTwitter size={15} />
                                <FaFacebook size={15} />
                                <FaLinkedin size={15} />
                              </span>
                            </a>
                          </RWebShare>
                        </div>

                        <p className="card-text">
                          <small className="text-muted">
                            Devoted to changing lives through tech
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )) //   setData(item);
      )}
    </>
  );
}

function Certificate() {
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);

  // console.log(data);

  return (
    <div className="background">
      <CertificateBar onSearch={setSearchValue} value={searchValue} />
      <Certificate1 searchValue={searchValue} />
    </div>
  );
}

export default Certificate;
