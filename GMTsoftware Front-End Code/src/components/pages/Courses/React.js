import React, { useEffect } from "react";
import { FaReact, FaDownload } from "react-icons/fa";
import Pdf from "../document/react.pdf";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Pricing.css";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function React1() {
  useEffect(() => {
    document.title = "GMTsoftware | React";
  }, []);
  return (
    <>
    <Navbar/>
      <div className="container-fluid bg-dark text-white">
        <div className="container py-5 header_one">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <p
                style={{
                  background: "rgb(149, 29, 29)",
                  color: "#fff",
                  display: "inline",
                }}
              >
                LEARN FROM THE INDUSTRY'S TOP TALENT
              </p>
              <h1 className="text-white">React JS Development Nanodegree</h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Expand your JavaScript programming skills, and boost your
                profile at work — and on the job market. Learn to build
                sophisticated, scalable web applications.
              </p>
              <div className="container my-4">
                <Link
                  to="/sign-up"
                  className="ml-3 btn btn-danger btn-md"
                  style={{
                    marginRight: "10px",
                    background: "rgb(149, 29, 29)",
                  }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img
                src="https://images.unsplash.com/photo-1532522953890-ccc87dfeb0b7?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="img"
                className="img-fluid shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="py-4 w-75" style={{ fontWeight: "1000" }}>
          According to Stack Overflow, JavaScript’s React is the library “most
          developers want to work with if they don’t already.”
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Gain In-Demand Skills in a Competitive Field</h4>{" "}
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              Start building maintainable JavaScript applications that can
              handle constantly changing data at scale. Expand your programming
              toolkit, and discover why both web developers and employers alike
              favor this robust JavaScript library.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4> Tap Into a Valuable Professional Network</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Form real connections that can change the course of your career.
              Meet practitioners and peers who can help you succeed through our
              global alumni network. Graduate with an industry-recognised
              GMTsoftware certificate, and join an exclusive community.
            </p>
          </div>
          {/* <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4'>
            <h4> Let Your Employer Foot the Bill</h4>
            <p style={{ lineHeight: '1.6rem', fontSize: '1rem' }}>
              More than 45% of our part-time students receive tuition
              reimbursement from their companies — you could, too. We can send
              you an employer sponsorship package to show your manager the
              advantages of learning with GA.
            </p>
          </div> */}
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-4">
            <h4>Learn on a Schedule Designed for Busy Professionals</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Join this 14-weeks React JS course online or at Maitama in Abuja,
              Nigeria. Or, take part from the comfort of home — wherever you’re
              based — via our Remote classroom.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='container m-5'>
        <img src='/images/comps.gif' alt='' srcset='' />
      </div> */}

      <div className="reactt_img shadow-lg">
        <div className="container">
          <div className="row d-flex flex-row-reverse mx-auto text-white">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-7 ">
              <h2
                className="display-2 font-weight-bolder pt-5"
                style={{ fontWeight: "bolder", color: "#fff" }}
              >
                Inside Our Best-in-Class Curriculum
              </h2>
              <h4 className="pt-5">
                <strong>Created With a Focus on Real-World Relevance</strong>
              </h4>
              <p
                className="py-2 font-weight-bold"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Facebook created React to build a dynamic platform that could
                adapt to continually changing data. To date, this JavaScript
                library fuels countless websites and applications across
                industries, including Instagram and Airbnb. Gain fluency in this
                simple-yet-flexible framework to increase your contributions at
                work and elevate your job market appeal.
              </p>
              <h4>
                <strong>
                  Learn to Handle Constantly Changing Data at Scale
                </strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Discover not only how to create JavaScript-powered React
                applications, but how and why they work. This course dives deep
                into the tools and techniques you need to create custom web
                applications. Explore the essentials, including components, JSX,
                props, and state, build multi-page apps with React Router, and
                incorporate functionality from third-party APIs. Then, host the
                result with Heroku.
              </p>
              <h4>
                <strong>Get a Head Start With Self-Paced Prep Lessons</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Once you enroll, we equip you with online, self-paced
                preparatory lessons to set you up for success. Dive into React
                fundamentals and JavaScript ES6, start building a custom
                application, and gain a common vocabulary to start collaborating
                with classmates on day one.
              </p>

              <div className="py-4 text-center">
                <a href={Pdf} className="btn btn-dark btn-sm-center">
                  Download Curriculum <br></br>
                  <span>
                    <FaDownload size={20} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center my-auto justify-self-end">
            <img
              src="./images/frz.png"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <strong>Software Engineering Immersive</strong> <br /> Ayodeji
              Felix Oladoyin
            </p>
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <em>
                “React is one of the most in-demand front-end web frameworks.
                Not only can it help you build faster and more robust websites —
                it’ll also make you a better developer.”
              </em>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white">
        <div className="container p-5">
          <h2 className="text-center">Flexible Financing Options</h2>
          <hr />
          <div className="row">
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6">
              <h4>Full Tuition</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Save #10, 000 on the full #85, 000 tuition by paying in full
                upfront.
              </p>

              <h4>#85, 000</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Full tuition
              </p>
            </div>
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6">
              <h4>Installments</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Divide tuition into two, or three easy payments.
              </p>
              <h4>#20, 000</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                per installment
              </p>
            </div>
          </div>
        </div>
      </div>

      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div className="pricing__section">
          <div className="pricing__wrapper text-center">
            <h2 className="py-3 text-center">Our React JS Course Prices</h2>
            <div className="pricing__container text-center">
              <Link
                to="/sign-up"
                className="pricing__container-card text-center"
              >
                <div className="pricing__container-cardInfo">
                  <div className="icon1">
                    <FaReact />
                  </div>
                  <h3>React JS Dev</h3>
                  <h4>Installments </h4>
                  <h3>60% installment</h3>
                  <ul className="pricing__container-features">
                    <li>8 weeks</li>
                    <li>Abuja, Nigeria</li>
                  </ul>
                  <h4>Total</h4>
                  <h3>#85,000</h3>
                  <p>8 weeks</p>
                  <Link to="/signup">
                    <button className="btn bg-dark text-white">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>

      <div className="container text-center py-5">
        <h5>Need advice? Our Admissions team is here to help.</h5>
        <button className="btn btn-dark mb-2">
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="mailto:greatmindsoftware@gmail.com"
          >
            Contact Admissions
          </a>
        </button>
      </div>

      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <details className="mt-5">
          <summary>Why are React development skills relevant today?</summary>
          <p
            className="py-4"
            style={{ lineHeight: "1.6rem", fontSize: "14px" }}
          >
            If you’re in search of programming skills to differentiate yourself
            within the front-end development crowd, React knowledge is the place
            to start. According to Stack Overflow’s annual developer survey,
            this JavaScript library is the one “most developers want to work
            with if they don’t already.” Employers are in search of talent that
            can leverage React’s ability to handle constantly changing data
            inputs. And there’s not enough talent on the market to meet this
            need.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            What are the professional backgrounds of React development students?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            GMTsoftware courses attract eager learners who are as passionate
            about growing their careers as you are. Their backgrounds span
            professions in design, product management, and many other fields.
            The GMTsoftware experience can create lasting friendships and
            collaborations that will support you throughout a lifetime of
            discovery.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            What practical skills can I expect to have after completing this
            course?
          </summary>
          Throughout this course, you’ll:
          <ul>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              {" "}
              Explore the essentials of programming with React, the JavaScript
              library, including components, JSX, props, and state.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Push your knowledge to the next level by learning not only how to
              create React applications, but how and why they work.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Build multi-page, interactive web applications using the popular
              React Router package.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Create a scalable, maintainable web application.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Call upon an application programming interface (API) in a React
              application.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Host a React application on Heroku, Netlify, and Git Hub to share
              with the world.
            </li>
          </ul>
        </details>
        <hr />
        <details>
          <summary>Will I earn a certificate?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Yes! Upon passing this course, you will receive a signed certificate
            of completion. Thousands of GMTsoftware alumni use their course
            certificate to demonstrate skills to employers and their LinkedIn
            networks. GMTsoftware’s technology training courses are
            well-regarded by many top employers, who contribute to our
            curriculum and use our programs to train their own teams.
          </p>
        </details>
        <hr />

        <details>
          <summary>Are there any prerequisites?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Incoming students should have a familiarity with HTML and the
            Document Object Model (DOM), along with a working knowledge of
            JavaScript programming and functions, objects, arrays, and classes.
            Our Admissions team can discuss your background and learning goals
            to advise if this course is a good fit for you.
          </p>
        </details>
        <hr />

        <details>
          <summary>
            Which format should I take this course in — on campus or online?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Which format should I take this course in — on campus or online?
            It’s up to you! Our Remote courses offer a learning experience that
            mirrors GMTsoftware’s on-campus offerings but allow you to learn
            from the comfort of home. If you don’t live near Maitama or live in
            Abuja, have a busy travel schedule, or just want to save yourself
            the commute, a Remote course could be a good option for you, if
            available in your market. You’ll still get access to the expert
            instruction, learning resources, and support network that
            GMTsoftware is known for. If you prefer to learn React alongside
            your peers and can make it to Maitama campus, our in-person courses
            allow you to take advantage of our beautiful classrooms and
            workspaces. Our Admissions team can advise you on the best format
            for your personal circumstances and learning style.
          </p>
        </details>
        <hr />

        <details>
          <summary>What is the remote experience at GMTsoftware?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Engage in live, online, project-based learning that’s designed to
            transform your career — from anywhere. Powered by Zoom, the major
            video conferencing tool, and the collaborative messaging platform
            Slack, our interactive classroom mirrors what you’ll encounter as
            part of the modern workforce. You’ll be able to not only share your
            screen and present your work to classmates but also collaborate in
            small groups via breakout rooms. Additionally, you can revisit
            recordings of class sessions in the future. Beyond class hours, get
            guidance, feedback, technical assistance, and more during frequent
            one-on-one check-ins and office hours.
          </p>
        </details>
        <hr />
        <details>
          <summary>Can I work full-time while enroled in this course?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Yes! All of our evening courses are designed for busy professionals
            with full-time work commitments. Depending on your location, classes
            meet twice per week in the evenings or all day on Saturday. If
            you’re able to dedicate a full week to learning, we also have a
            full-time. Please keep in mind that our remote course is live
            online, which means that if you take the accelerated programme,
            you’ll be connected live with your instructor and classmates the
            whole day. You’ll be expected to spend time working on homework and
            projects outside of class each week, but the workload is designed to
            be manageable with a full-time job. If you need to miss a session or
            two, we offer resources to help you catch up. We recommend you
            discuss any planned absences with your instructor.
          </p>
        </details>

        <hr />

        <details className="mb-5">
          <summary>In what language is this programme taught?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Our courses will be delivered in four ways:
          </p>
          <ul>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Fully in English{" "}
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              In Yoruba, with English materials{" "}
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              In Hausa, with English materials{" "}
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              In Igbo, with English materials{" "}
            </li>
          </ul>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Please check with the Admissions team to confirm which is true of
            your course of interest and what is relevant for your situation.
          </p>
        </details>
      </div>
      <Footer/>
    </>
  );
}

export default React1;
