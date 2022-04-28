import React, { useEffect, useState } from "react";
import axios from "axios";

import "./display.css";
import { RWebShare } from "react-web-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
const Meanstack = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoryUrl = () => {
      axios
        .get(`https://gmtblog-api.herokuapp.com/Each_category/`)
        .then((res) => {
          let category = res.data;
          setCategory(category);
        });
    };
    categoryUrl();
  }, []);

  return (
    <>
      <div className="container ">
        <div className="row display mt-3">
          {category.results &&
            category.results
              .filter((item) => item.category === "Mernstack")
              .map((item) => (
                <div
                  className="card col-md-3 col-lg-3 m-3 p-2"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={item.Image}
                    className="card-img-top"
                    alt={item.pk}
                  />
                  <div className="card-body">
                    <h5 className="card-title  text-">{item.Title}</h5>
                    <p className="card-text">
                      <TextTruncate
                        line={4}
                        element="span"
                        truncateText="…"
                        text={item.Blogdetails}
                        textTruncateChild={
                          <Link
                            to={{
                              pathname: "/fullstackdetails",
                              aboutProps: {
                                name: `${item.url}`,
                              },
                            }}
                          >
                            read more
                          </Link>
                        }
                      />
                    </p>
                    <div className="text-center">
                      <RWebShare
                        data={{
                          text: `Share this post on social media`,
                          url: `${item.url}`,
                          title: `${item.Title}`,
                        }}
                        onClick={() => console.log("shared successfully!")}
                      >
                        <Link
                          to="#"
                          className=" btn btn-dark btn-sm-center mx-3"
                        >
                          <span>Share 🔗</span> <br></br>
                          <span>
                            <FaTwitter size={15} />
                            <FaFacebook size={15} />
                            <FaLinkedin size={15} />
                          </span>
                        </Link>
                      </RWebShare>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Meanstack;
