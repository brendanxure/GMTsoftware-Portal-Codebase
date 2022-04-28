import React, { useEffect, useState } from "react";
import axios from "axios";
import "./display.css";
import { RWebShare } from "react-web-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import TextTruncate from "react-text-truncate";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const UIUX2 = (props) => {
  const [category, setCategory] = useState([]);
  const history = useNavigate();

  const url = props.location.aboutProps;

  if (url === undefined) {
    history("/UI/UXblog");
  } else {
    const { name } = url;
    localStorage.setItem("category", JSON.stringify(name));
    const categoryUrl = () => {
      axios.get(name).then((res) => {
        let category = res.data;

        setCategory(category);
      });
    };
    categoryUrl();
  }

  return (
    <>
      <div className="container ">
        <div className="row display mt-3">
          <div
            className="card col-md-3 col-lg-3 m-3 p-2"
            style={{ width: "100%" }}
            key={category.pk}
          >
            <img src={category.Image} className="card-img-top" alt="UI/UX" />
            <div className="card-body">
              <h5 className="card-title text-center text-bold">
                {category.Title}
              </h5>
              <em>Date posted:{category.start_date}</em>
              <p className="card-text">{category.Blogdetails}</p>

              <div className="text-center">
                <RWebShare
                  data={{
                    text: `Share this post on social media`,
                    url: "https://gmtsoftware.tech/UI/UXblog",
                    title: `${category.Title}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <a className="t btn btn-dark btn-sm-center mx-3">
                    <span>Share 🔗</span> <br></br>
                    <span>
                      <FaTwitter size={15} />
                      <FaFacebook size={15} />
                      <FaLinkedin size={15} />
                    </span>
                  </a>
                </RWebShare>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UIUX2;
