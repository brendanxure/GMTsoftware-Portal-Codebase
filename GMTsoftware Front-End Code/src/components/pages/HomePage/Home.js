import React, { useEffect } from "react";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Program from "./Program";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";
// import Video from "../../Video/video.mp4"; Video is not working

function Home() {
  useEffect(() => {
    document.title = "GMTsoftware | HomePage";
  }, []);
  return (
    <>
      <Navbar />
      <div className="main_container" style={{ marginTop: "0px" }}>
        <div className="">
          {/* <div className="overlay"></div> */}
          <header>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="./images/carousel1.jpg"
                    alt="First slide"
                  />
                  <div class="carousel-caption  d-md-block">
                    <h6>CODING BOOTCAMP</h6>
                    <i>
                      Jumpstart your career in tech with one of our courses in
                      Front-End Development, Python or Software Engineering,
                      Data Science, iOS App Development, Sofware QA, or UX
                      Design.
                    </i>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="./images/sadiqmuha1.png"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="./images/portal.png"
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="./images/carousel3.jpg"
                    alt="Fourth slide"
                  />
                </div>

                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="./images/carousel2.jpg"
                    alt="Fifth slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <center>
              <img src="./gmt.gif" alt="gmt" />
            </center>
            {/* <div className="jumbotro">
              <div className="container py-auto">
                <h2
                  className=" pt-5 text-center text-white"
                  style={{ fontSize: "48px" }}
                >
                  CODING BOOTCAMP
                </h2>
                <br />
                <mark
                  className=" py-1 text-center text-red "
                  style={{ fontSize: "1.0rem" }}
                >
                  Jumpstart your career in tech with one of our courses in
                  Front-End Development, Python or Software Engineering, Data
                  Science, iOS App Development, Sofware QA, or UX Design.
                </mark>
              </div>
              {/* <div className="row">
                <button
                  className="btn m-2 col-md-5 btn-block"
                  style={{ background: "#8D1212", color: "white" }}
                >
                  Apply Now
                </button>
                <button
                  className="btn m-2 col-md-5 btn-block bg-dark"
                  style={{ color: "white" }}
                >
                  Download Curriculum
                </button>
              </div> */}
            {/* </div>
             */}
          </header>
        </div>

        {/* second container */}

        <div className="container">
          <div className="row">
            <div
              className="shadow-lg individual col-sm-12 col-md my-4 col-lg col-xl py-3 bg-white card"
              style={{ marginRight: "10px" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#8D1212" }}>
                  FOR INDIVIDUALS
                </h5>
                <h6 className="card-title" style={{ color: "#8D1212" }}>
                  Training Model: Peer-to-Peer Training System
                </h6>
                <h6 className=" h2 card-subtitle mb-2 ">
                  Your career in coding starts here
                </h6>
                <p
                  className="card-text pb-5"
                  style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
                >
                  Our industry-leading 14-week coding bootcamps are designed to
                  help you become a work-ready software developer with
                  outstanding career prospects.You build real-world projects, we
                  assist you to build a career portfolio that we give you a
                  confidence to showcase your skills to your potential employer.
                </p>
                <Link to="/Fullstack">
                  <button
                    style={{ background: "#8D1212" }}
                    className="btn btn-danger mb-5"
                  >
                    View courses &#8250;
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="shadow-lg business col-sm-12 col-md col-lg col-xl py-5 bg-white card"
              style={{ marginLeft: "10px" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#8D1212" }}>
                  COMPANIES
                </h5>
                <h6 className=" h2 card-subtitle mb-2">
                  Hiring & developing people starts here
                </h6>
                <p
                  className="card-text pb-5"
                  style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
                >
                  Hire work-ready developers, upskill your existing developers
                  or reskill other valued people you’d like to train and retain.
                  Transform your workforce with intensive training, assessments,
                  and an exclusive hiring pipeline.
                </p>
                <Link to="/Companies" className="card-link">
                  {" "}
                  <button className="btn btn-warning text-light">
                    Get Started &#8250;
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* third */}

        <div className="container py-5">
          <div className="row">
            <div className="col-md-7 col-lg-7 col-xl-7">
              <img className="img-fluid" src="./images/class.jpg" alt="img" />
            </div>
            <div className=" col-md-5 col-lg-5 col-xl-5 d-none d-md-block icoo">
              <div className="row ">
                <img
                  className="col-md-7 col-lg-7 col-xl-7 img-fluid"
                  src="./images/third.jpg"
                  alt="img"
                />
                <img
                  className="col-md-5 col-lg-5 col-xl-5 img-fluid"
                  src="./images/fourth.jpg"
                  alt="img"
                />
                <img
                  className=" p-4 col-md-10 col-lg-10 col-xl-10 img-fluid"
                  src="./img/5.jpg"
                  style={{ zIndex: "1" }}
                  alt="img"
                />
              </div>
              <div className="ico"></div>
            </div>
          </div>
        </div>

        <div className="container north">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mb-1 col-xl-6">
              <h1
                className="display-4 py-2 font-weight-bold"
                style={{ fontWeight: "bolder", color: "#8D1212" }}
              >
                GMTsoftware isn’t a course choice, it’s a career decision.
              </h1>
              <p
                className="lead py-2 font-weight-bold"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                You don’t need any coding experience to get a place at
                GMTsoftware.
              </p>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                What you do need is an aptitude and passion for problem-solving
                and commitment to kick-start a fulfilling new career. If you can
                show these, our bootcamps will offer you the support and
                training you need to succeed.
              </p>
            </div>
          </div>
        </div>

        <div className="container north">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img src="images/cbd.jpg" alt="img" className="img-fluid"></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h1
                className="display-4 py-2 font-weight-bold"
                style={{ fontWeight: "bolder", color: "#8D1212" }}
              >
                Experience our coding bootcamp in Theodak Plaza, Central
                Business District, Abuja.
              </h1>
              <p
                className="lead font-weight-bold"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Abuja is becoming a major tech hub thanks to its very active
                startup community and the presence of leading centers for
                artificial intelligence research attracting top talent and
                investments.
              </p>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                {" "}
                The city is also recognized as one of the world’s most welcoming
                cities for tourists. It is distinguished by a unique
                multicultural openness which is a major component of Abuja's
                identity. Our coding bootcamp in Abuja is an amazing experience
                in an immersive coding school, offering not only a top-notch
                curriculum but an incredible human experience. We are proud to
                be part of Abuja's ecosystem since 2020 and to see our graduates
                now being key players in this amazing tech community's
                development.
              </p>
              <Link to="https://en.wikipedia.org/wiki/Abuja" target="_blank">
                <button
                  style={{ background: "#8D1212" }}
                  className="btn btn-danger mb-5"
                >
                  Read More &#8250;
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* End of main container */}
      </div>

      {/* We help to develop the developers your business needs. */}
      <div className="container py-5">
        <div className="row">
          <div className=" col-md-5 col-lg-5 col-xl-5 d-none d-md-block icoo">
            <div className="row ">
              <img
                style={{ transform: "rotate(30deg)", zIndex: "-1" }}
                className="col-md-7 col-lg-7 col-xl-7 img-thumbnail img-fluid"
                src="./images/seventh.jpg"
                alt="img"
              />
              <img
                className="col-md-5 col-lg-5 col-xl-5 img-fluid"
                src="./images/eight.jpg"
                alt="img"
              />
              <img
                className=" p-4 col-md-10 col-lg-10 col-xl-10 img-fluid"
                src="./images/front.jpg"
                style={{ zIndex: "-2" }}
                alt="img"
              />
            </div>

            {/* <div className="ico">

              <GoTriangleDown size={120} color="yellow" />
            </div> */}
          </div>
          <div className="col-md-7 col-lg-7 col-xl-7">
            <img className="img-fluid" src="./images/dashboard.jpg" alt="img" />
          </div>
        </div>
      </div>

      {/* We help to develop the developers your business needs. */}

      <div className="container">
        <div className="row d-flex flex-row-reverse mx-auto">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-7 ">
            <h1
              className="display-4 font-weight-bolder"
              style={{ fontWeight: "bolder", color: "#8D1212" }}
            >
              We help to develop the developers your business needs.
            </h1>
            <p
              className="lead py-2 font-weight-bold"
              style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
            >
              Need to seamlessly onboard skilled new software developers, or
              grow, upskill or reskill your existing team?
            </p>
            <p
              className="mb-5"
              style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
            >
              We we have the expertise, support and services that you need.
              We’re industry-led, with a curriculum that’s firmly focused on
              your business needs.
            </p>

            <Link to="/Fullstack">
              <button
                style={{ background: "#8D1212" }}
                className="btn btn-danger mb-5"
              >
                View courses &#8250;
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Home2 />
      <Program />
      <Home3 />

      {/* Carousel */}
      <div className="">
        <div
          className="container-fluid"
          style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
        ></div>
      </div>

      {/* Twitter */}
      <div className="container ">
        <div className="py-5">
          <Link
            className="twitter-timeline"
            data-width="1300"
            data-height="600"
            target="_blank"
            to="https://twitter.com/GMTsoftware?ref_src=twsrc%5Etfw"
            alt="img"
          >
            Tweets by GMTsoftware
          </Link>
          <br />
          <Link
            to="https://twitter.com/intent/tweet?button_hashtag=gmtsoftware&ref_src=twsrc%5Etfw"
            className="twitter-hashtag-button"
            data-size="large"
            data-related="oladoyinayodeji,Bayo4realZz"
            target="_blank"
            data-show-count="false"
            alt="img"
          >
            Tweet #gmtsoftware
          </Link>
          <br />

          <Link
            to="https://twitter.com/GMTSOFTWARE?ref_src=twsrc%5Etfw"
            target="_blank"
            data-size="large"
            className="twitter-follow-button"
            data-show-count="false"
          >
            Follow @GMTsoftware
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
