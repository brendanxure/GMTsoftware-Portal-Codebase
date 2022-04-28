import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function Companies() {
  useEffect(() => {
    document.title = "GMTsoftware | Companies";
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid  bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img
                src="https://images.unsplash.com/photo-1610473199899-fc0ec6e204bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="work"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-12 col-md-6 bg-dark  col-lg-6 col-xl-6">
              <div className="container text-white">
                <h3 className="p-4">
                  Future-Proof Your Workforce With Transformative Solutions
                </h3>
                <p className="p-3">
                  Partner with GMTSOFTWARE — an enterprise leader trusted by
                  many companies — to upskill and reskill your teams with
                  digital mindsets, technical capabilities, and a growth culture
                  that drives business success.
                </p>
                <div className="container pb-4 text-center">
                  <Link
                    className="btn btn-normal btn-danger"
                    to="mailto:owolabiadebayo78@gmail.com"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-5 container-fluid"
        style={{
          position: "sticky",
          top: "40px",
          backgroundColor: "rgb(39, 38, 38)",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <p className="px-4">
                <a
                  href="#overview"
                  className="text-decoration-none text-white"
                  style={{ color: "black" }}
                >
                  Overview
                </a>
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              {" "}
              <p className="px-4 ">
                <a
                  href="#whygmt"
                  style={{ color: "black" }}
                  className="text-decoration-none text-white"
                >
                  Why GMTsoftware
                </a>
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              {" "}
              <p className="px-4">
                <a
                  href="#capability"
                  style={{ color: "white" }}
                  className="text-decoration-none"
                >
                  Capabilities
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4" id="overview">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-xs-12 col-md-12 col-xl-4">
            {" "}
            <div className="p-3" style={{ fontSize: 45, fontWeight: "1000" }}>
              <p
                style={{ fontSize: 35, lineHeight: "3rem", fontWeight: "1000" }}
              >
                Build agile teams that excel in a tech- and data-driven economy.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12 col-md-12 col-xl-4">
            <p>
              Get ahead in the race for top talent and deliver long-term
              business results with our individual and large-scale enterprise
              solutions. Upskill employees in existing roles, or reskill
              non-technical professionals for entirely new ones in technology,
              data, marketing, design, and product.
            </p>
            <p>
              GMTSOFTWARE cutting-edge curriculum boosts employee productivity,
              engagement, and collaboration. We empower teams of all sizes with
              digital expertise and mindsets that meet market demands
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 col-xs-12 col-md-12 col-xl-4">
            <p>
              Our unmatched scale fuels transformation at different companies.
              Train a team of 10 or 10,000 at your office, at our campus, or
              online.
            </p>
            <p>
              Join a vast network of experts and leaders from the smartest
              companies in the world. GMTSOFTWARE first-class instructors are
              practitioners with real-world experience at top companies.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-grey ">
        <div className="container">
          <div className="row ">
            <div className="py-3 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-xl-4">
              <div className="p-3">
                <h2 style={{ lineHeight: "2.5rem", fontSize: "35px" }}>
                  Technology Is Reshaping the Workplace — Is Your Team Prepared?
                </h2>
                <p
                  style={{
                    lineHeight: "1.6rem",
                    fontSize: "14px",
                    fontWeight: "lighter",
                  }}
                >
                  Over 80% of decision-makers in technology and engineering see
                  a mismatch between the skills workers have, and the skills
                  companies need to capitalize on emerging opportunities in
                  tech. Employers will need to develop informed, cost-effective
                  hiring and development strategies lest they fall behind.{" "}
                  <p>
                    <em>
                      <q style={{ lineHeight: "1.5rem", fontSize: "13px" }}>
                        Statistics source: Modis, Disruptive Shifts in Tech &
                        Engineering Hiring: Our Workplace Trends Survey
                      </q>
                      .
                    </em>
                  </p>
                </p>
              </div>
            </div>
            <div className="col-lg-8 py-5 col-md-12 col-sm-12 col-xs-12 col-xl-8">
              <img
                src="https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fGJsYWNrJTIwd29ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="work"
                className="rounded img-fluid w-100 bg-cover"
                style={{ backgroundSize: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 container" id="whygmt">
        <div className="row">
          <div className="py-4 col-lg-5 col-sm-12 order-md-12 col-md-12">
            <div className="container p-4 bg-dark text-white">
              <h2>Why Companies Choose GMTsoftware</h2>
            </div>
            <img
              src="https://images.unsplash.com/photo-1543281444-a655ccfbbc23?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              alt="img"
              srcset=""
            />
          </div>
          <div className="col-lg-7 col-md-12 order-12 order-md-1 col-sm-12">
            <div className="container">
              <h3>A Consultative Approach</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                We deploy a dedicated project team who will work with you to
                craft a tailored program that serves your specific talent needs
                and business objectives.
              </p>
            </div>
            <div className="container">
              <h3>Flexible Delivery Options</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Your team learns in a format that fits their goals and schedule.
                We employ a blended approach — including online, at your office,
                or at one of our campus — to create an impactful learning
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-5 container-fluid bg-dark text-center text-white"
        id="capability"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 py-5">
              <br />
              <h4>Unlock digital mindsets and leadership potential.</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "18px" }}>
                Benchmark individuals against industry standards with our
                assessment-led programs, and craft personalized experiences that
                sharpen or build new skills. Improve digital literacy in areas
                like Agile methodology, customer-centric strategies, and growth
                activation. Our On Demand and curated in-person and remote
                solutions. create a standard vocabulary across teams.
              </p>
            </div>
            <div className="col-12-sm col-lg-4 h-100 py-5">
              <img
                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt="kl"
                className="img-fluid"
              />
            </div>
            <div
              className="col-12-sm col-lg-4  py-5"
              style={{ backgroundColor: "#ddd", color: "black" }}
            >
              <div className="container ">
                <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                  <q>
                    As a company recognized for its marketing expertise, it was
                    key for us to accompany the deep transformation of marketing
                    in the digital era by offering our employees and candidates
                    the opportunity to benchmark themselves against the best
                    marketers worldwide.
                  </q>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-12 py-5">
                <br />
                <h4>
                  Reduce churn and transition existing talent into vital
                  technical roles.
                </h4>
                <p style={{ lineHeight: "1.6rem", fontSize: "18px" }}>
                  Build a diverse pipeline of skilled candidates by leveraging
                  our talent pipeline as a service (TPaaS) model. Reskill your
                  existing workforce into open roles, or cultivate new talent
                  through our innovative hiring and training TPaaS
                  solutions.reate a standard vocabulary across teams.
                </p>
              </div>
              <div className="col-12-sm col-lg-4 h-100 py-5">
                <img
                  src="https://images.pexels.com/photos/3767172/pexels-photo-3767172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="img"
                  srcset=""
                />
              </div>
              <div
                className="col-12-sm col-lg-4 py-5"
                style={{ backgroundColor: "#ddd", color: "black" }}
              >
                <div className="container">
                  <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                    <q>
                      We realized that our knowledge workers had to become more
                      proficient with technology…[and] that the envisioned
                      change required a multi-year, multi-disciplinary,
                      cross-functional effort involving HR and IT, as well as
                      our innovation and data science teams.
                    </q>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-12 py-5">
                <br />
                <h4>
                  Drive innovation and efficiencies with cutting-edge skills in
                  tech, data, marketing, and more
                </h4>
                <p style={{ lineHeight: "1.6rem", fontSize: "18px" }}>
                  Equip employees with the digital knowledge and skills to excel
                  in their career and tackle emerging business challenges. We’ll
                  power tailor-made, high-impact programs that help teams
                  leverage fast-changing technologies and deliver real business
                  value.
                </p>
              </div>
              <div className="col-12-sm col-lg-4 h-100 py-5">
                <img
                  src="https://images.unsplash.com/photo-1526253038957-bce54e05968e?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=600"
                  alt="img"
                />
              </div>
              <div
                className="col-12-sm col-lg-4 py-5"
                style={{ backgroundColor: "#ddd", color: "black" }}
              >
                <div className="container ">
                  <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                    <q>
                      This is completely unlike traditional training programs
                      where you go back to your everyday routine as soon as it’s
                      over. The participants build projects, putting their newly
                      acquired skills into action immediately...lean start-ups,
                      the Agile Method, capacity to work in a multi-disciplinary
                      context, presenting a project, and so on.
                    </q>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center py-5">
        <h5>Need advice? Our Admissions team is here to help.</h5>
        <button className="btn btn-dark mb-2">
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="mailto:contact@gmtsoftware.tech"
          >
            Contact Admissions
          </Link>
        </button>
      </div>
      <div className="container">
        <details className="m-4">
          <summary className="pt-3">Software Engineering?</summary>
          In order to earn a certificate, you will be evaluated based on your
          ability to:
          <ul>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Front-end and back-end development
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              HTML, CSS, and JavaScript
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Ruby on Rails, Python with Django, and Express with Node.js.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Build secure full-stack applications by leveraging common design
              and architectural patterns like model–view–controller (MVC) and
              Representational State Transfer (REST).
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Practise version control and collaborative software development
              with Git and GitHub.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Safely model and store data in SQL and NoSQL databases.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Consume and integrate third-party application programming
              interfaces (APIs) in an application.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Prepare for the world of work, compiling a professional-grade
              portfolio of solo and group projects.
            </li>
          </ul>
        </details>
      </div>
      <Footer />
    </>
  );
}

export default Companies;
