import React, { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { GiCrystalize } from "react-icons/gi";
import ControlledCarousel from "./Carousel";

function About() {
  useEffect(() => {
    document.title = "GMTsoftware | About-Us";
  }, []);
  return (
    <>
      <div className="jumbotro">
        <div className="container py-auto">
          <h2
            className=" pt-5 text-center text-white"
            style={{ fontSize: "52px" }}
          >
            Immersive Experiences that changes Lives
          </h2>
          <mark
            className=" py-1 text-center text-white bg-dark"
            style={{ fontSize: "1.5rem" }}
          >
            About Gmtsoftware bootcamp Experience
          </mark>
        </div>
      </div>

      {/* <div className="row">

          <button className="btn m-2 col-md-5 btn-block" style={{ background:"#8D1212", color:"white"}}>Apply Now</button>
            <button className="btn m-2 col-md-5 btn-block bg-dark" style={{ color: "white" }}>Download Curriculum</button>
            </div> */}

      {/* 
        <div className="container py-5">
          <div className="row">
            <div className="card  mb-3 mr-2 col-lg-6 col-md-6 col-sm-12 ">
              <div className="card-header text-center">
                <h5 className="card-title">MISSION</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card text-white bg-secondary mb-3 col-lg-6 col-md-6 col-sm-12">
              <div className=" card-title text-center">
                <h5 className="card-title">VISION</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12 mt-4">
            <h1
              style={{
                fontWeight: "500",
                fontSize: "44px",
                lineHeight: "48px",
                letterSpacing: "-.6px",
              }}
            >
              About GMTsoftware
            </h1>
            <h4
              style={{
                fontWeight: "500",
                lineHeight: "1.6rem",
                fontSize: "1rem",
                letterSpacing: "-.6px",
                textJustify: "center",
              }}
            >
              {" "}
              GMTsoftware is a design and coding bootcamp founded in 2020 by
              professionals who had their lives dramatically changed by learning
              tech skills. GMTsoftware specializes in immersive, in-person, and
              online training bootcamps. The company is primarily focused on
              coding and softwares which are of relevant use to individuals and
              businesses.
            </h4>
          </div>
          <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12 mt-4">
            <img
              src="./images/carousel3.jpg"
              alt="img"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className="container py-5 text-center">
        <h1
          style={{
            fontWeight: "800",
            fontSize: "44px",
            lineHeight: "48px",
            letterSpacing: "-.6px",
          }}
        >
          In-Person Courses and Community
        </h1>
        <p
          className="text-center"
          style={{
            fontWeight: "300",
            lineHeight: "1.6rem",
            fontSize: "1rem",
            letterSpacing: "-.6px",
          }}
        >
          Our intense courses in Web Development, Python are hands-on,
          project-based, and are designed by educators with real-world industry
          knowledge. We offer challenging, focused training designed to equip
          students with the skills to start their journey toward a career in
          tech.
        </p>
      </div>
      <div className="container ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="text-center"
        >
          <div className="text-center">
            <FaLaptopCode size={50} color="#b82f24" />
            <p
              style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              className="text-center"
            >
              FRONT-END DEVELOPMENT
            </p>
          </div>
          <div className="text-center">
            <FaServer size={50} color="darkGreen" />
            <p
              style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              className="text-center"
            >
              BACK-END DEVELOPMENT
            </p>
          </div>
          <div className="text-center">
            <GiCrystalize size={50} color="darkBlue" />
            <p
              style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              className="text-center"
            >
              FULL-STACK DEVELOPMENT
            </p>
          </div>
        </div>
      </div>
      <div className="jumbotron text-center">
        <div className="container py-3 ">
          <div className="row py-2">
            <div className="col-lg-6 col-sm-12 col-xl-6 col-xs-12 py-5">
              <span>
                <h1
                  style={{
                    fontWeight: "800",
                    fontSize: "48px",
                    lineHeight: "32px",
                    letterSpacing: "-.6px",
                  }}
                >
                  50+
                </h1>
                Students Graduated
              </span>
            </div>

            <div className="col-lg-6 col-sm-12 col-xl-6 col-xs-12 py-5">
              <span>
                <h1
                  style={{
                    fontWeight: "800",
                    fontSize: "48px",
                    lineHeight: "32px",
                    letterSpacing: "-.6px",
                  }}
                >
                  4.8k+
                </h1>
                Average Course Report Rating
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1
        className="text-center"
        style={{
          fontWeight: "500",
          fontSize: "44px",
          lineHeight: "48px",
          letterSpacing: "-.6px",
        }}
      >
        About Our Team
      </h1>

      <ControlledCarousel />
      {/* <div className="container py-5">
         <div className="row">
         <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12 text-center pb-4 my-auto">
            <img src="./images/bayo.jpg" width="191" height="191" alt="img" style={{borderRadius:"75%"}}/>
        </div>
        <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12 text-center">
            <h1 style={{fontWeight:"700", fontSize:"28px", lineHeight:"24px", letterSpacing:"-.6px"}}>Owolabi Adebayo Stephen</h1>
        

        </div>
        
                </div>
                </div>   
                <div className="container py-5">
         <div className="row">
         <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12 my-auto text-center ">
            <img src="./images/frz.png" alt="img" />
        </div>
        <div className="col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12 mt-4 text-center">
            <h1 style={{fontWeight:"700", fontSize:"28px", lineHeight:"24px", letterSpacing:"-.6px"}}>Owolabi Adebayo Stephen</h1>
           <h4 style={{fontWeight:"500", fontSize:"22px", lineHeight:"32px", letterSpacing:"-.6px"}}> Adebayo is a Software Developer in Maitama Abuja. Adebayo has a Bachelor'Degre in Electrical/Electronic. He spends most of his time working with Javascript, CSS3, and HTML5,React and he is passionate about everything related to software developemnt and a great teacher
           He will be introducing the student to computer science and further-more He will be taken teh front-end development courses </h4>
           

        </div>
        
                </div>
                </div>    */}
    </>
  );
}

export default About;
