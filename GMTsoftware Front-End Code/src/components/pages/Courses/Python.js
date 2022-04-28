import React, { useEffect } from "react";
import { BsGraphUp } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GrSteps } from "react-icons/gr";
import Pdf from "../document/Python Programming.pdf";
import { FaDownload } from "react-icons/fa";
import { GiPowerLightning } from "react-icons/gi";
import { AiFillCode } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Pricing.css";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";
function Python() {
  useEffect(() => {
    document.title = "GMTsoftware | Python";
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
              <h1 className="text-white">Python Course: Abuja</h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Gain fluency in Python — the world's fastest-growing major
                programming language — and start leveraging its versatile
                capabilities to build web and data science applications.
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
                src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="img"
                className="img-fluid shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="py-4 w-75" style={{ fontWeight: "1000" }}>
          Python is the No. 1 fastest-growing major programming language with
          151% year-over-year growth.
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Unlock Opportunity in High-Growth Fields</h4>{" "}
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              The future is bright for programmers who know Python — it’s a
              baseline skill for competitive industries like analytics,
              artificial intelligence, cybersecurity, and data science. And,
              thanks to its intuitive, readable syntax, it’s also one of the
              easiest languages to learn on the market.
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
            <h4> Learn Python on a Schedule Designed for Busy Professionals</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Join this 11-weeks Python programming course online or at Central
              Business District (CBD) in Abuja, Nigeria. Or, take part from the
              comfort of home — wherever you’re based — via our Remote
              classroom.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='container  m-5'>
        <img src='/images/comps.gif' alt='' srcset='' />
      </div> */}

      <div className="py_img shadow-lg">
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
                <strong>Go from Zero to Fluent With Expert Guidance</strong>
              </h4>
              <p
                className="py-2 font-weight-bold"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Learn by doing with help from world-class practitioners who use
                Python every day. Instructors bring the latest techniques from
                the field straight to the classroom. Our curriculum emphasizes
                real-world relevance and offers plenty of opportunity for
                practice through code-alongs, labs, and projects that mirror
                on-the-job applications.
              </p>
              <h4>
                <strong>Discover Python’s Wide Range of Applications</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Designed for students with a variety of professional backgrounds
                and experience levels — including beginners — this course takes
                a deep dive into the fundamentals of Python and object-oriented
                programming. Explore Python’s powerful applications in the final
                unit, with either a data science or web development
                specialization as selected by students and instructors.
              </p>
              <h4>
                <strong>Get a Head Start With Pre-Course Prep Lessons</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Once you enroll, we equip you with online, self-paced
                preparatory lessons to set you up for success. Install your
                developer environment. Then, dive into essential Python
                programming concepts to gain a common vocabulary and start
                collaborating with classmates on day one.
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

      <div className="python_container" id="python">
        {/* WHY LEARN PYTHON */}
        <div className="learn_outer" style={{ background: "#fff" }}>
          <div className="learn">
            <div className="common" style={{ background: "#fff" }}>
              <div className="uses">
                <div className="uses_text">
                  <h2>COMMON USES OF PYTHON</h2>
                  <h4>Web & Software Development</h4>
                </div>
                <div className="uses_img">
                  <div className="scientific">
                    <img
                      className="uses_img_pic"
                      src="/images/uses_of_python1.jpg"
                      alt="scientific"
                    />
                    <h5 className="uses_details">scientific computation</h5>
                  </div>
                  <div className="automation">
                    <img
                      className="uses_img_pic"
                      src="/images/uses_of_python_2.jpg"
                      alt="automation"
                    />
                    <h5 className="uses_details">Process Automation</h5>
                  </div>
                  <div className="server">
                    <img
                      className="uses_img_pic"
                      src="/images/uses_of_python_3.jpg"
                      alt="server"
                    />
                    <h5 className="uses_details">Server–Side Scripting</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className=" row py-5 mx-auto">
                <div className=" col-md-4 col-lg-4 col-xl-4">
                  <BsGraphUp size={50} />
                  <h4 style={{ color: "#b82f24" }}>SALARY RANGE</h4>
                  <h4>$60K - $137K</h4>
                </div>
                <div className=" col-md-4 col-lg-4 col-xl-4">
                  {" "}
                  <GoGraph size={50} />
                  <h4 style={{ color: "#b82f24" }}>NATIONAL AVERAGE</h4>
                  <h4>$92,000</h4>
                </div>
                <div className=" col-md-4 col-lg-4 col-xl-4">
                  <GrSteps size={50} color="#fff" />
                  <h4 style={{ color: "#b82f24" }}>DIFFICULTY LEVEL</h4>
                  <h4>BEGINNER</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES OF PYTHON */}
        <div className="features">
          <div className="features_container">
            <h2 className="features_head">FEATURES OF PYTHON</h2>

            <div className="features_of_python">
              <div className="feature">
                <BiBookOpen size={50} />
                <h5>EASY TO LEARN</h5>
                <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                  Known for its simplicity and elegant syntax, Python is much
                  easier to read and write than other programming languages.
                </p>
              </div>

              <div className="feature">
                <FaDownload size={50} />
                <h5>FREE & OPEN-SOURCE</h5>
                <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                  Python is free to download and use commercially. You can even
                  edit the source code and contribute to its community.
                </p>
              </div>

              <div className="feature">
                <GiPowerLightning size={50} />
                <h5>HIGHLY VERSATILE</h5>
                <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                  Python is used in a diverse range of applications and fields
                  of study, which contributes to the growing demand for Python
                  developers.
                </p>
              </div>

              <div className="feature">
                <AiFillCode size={50} />
                <h5>FEWER LINES OF CODE</h5>
                <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                  Python is highly expressive and allows for greater
                  functionality. You’ll be amazed how much you can accomplish
                  with only 500 lines of code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* image */}

        <div className="python_graphic">
          <img
            className="img-fluid"
            src="/images/python_graphic_illustration.png"
            alt="python"
          />
        </div>

        {/* Our Approach To Python */}

        <div className="approach_container" style={{ background: "#ddd" }}>
          <div className="approach">
            <div className="approach_head">
              <h2>OUR APPROACH TO PYTHON</h2>
              <p
                style={{
                  lineHeight: "1.6rem",
                  fontSize: "1rem",
                  margin: "12px",
                }}
              >
                Here are the topics and technologies we teach to train you to
                become a Python developer.
              </p>
            </div>

            <div className="approach_details">
              <img src="/images/python_stack.png" alt="python logo" />
              <div className="tech_topics text-center">
                <h4>TECHNOLOGIES</h4>
                <h6>PYTHON . MySQL . Flask . Ajax APIs . Django</h6>
                <h4>TOPICS COVERED</h4>
                <h6 className="lastt">
                  OOP in Python • SQL Queries & ERD Diagrams • Web Security
                  Basics • CRUD Operations • MVC Framework & Design Patterns •
                  Application Deployment • Algorithms in Python • Test-driven
                  Development *Optional topics available
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center my-auto justify-self-end">
            <img
              src="https://randomuser.me/api/portraits/men/16.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <strong>System Test Engineer, NetCom</strong> <br /> "Finidi Bayo,
              Gusua Zamfara"
            </p>
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <em>
                “The approach that the instructor has taken during this course
                is what I have been looking for in every course that I have been
                in. GMTsoftware has finest teachers in the field of programming
                and development, and if all the other classes are structured the
                same way as the Python course I took, then there is a very high
                chance that I will come back for more.”
              </em>
            </p>
          </div>
        </div>
      </div>

      {/* <div>
          <img src='./images/py.jpg' className='img-fluid' alt='py' />
        </div> */}
      {/* 
      <div>
        <img
          className='python_head'
          src='/images/python_banner.jpg'
          alt='img'
        />
      </div> */}

      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div className="pricing__section">
          <div className="pricing__wrapper text-center">
            <h2 className="py-3 text-center">Our Python Courses Prices</h2>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon1">
                    <FaPython />
                  </div>
                  <h3>Python Dev</h3>
                  <h4>Installments </h4>
                  <h3>60% Upfront</h3>
                  <ul className="pricing__container-features">
                    <li>11 weeks</li>
                    <li>Abuja, Nigeria</li>
                  </ul>
                  <h4>Total</h4>
                  <h3>#100,000</h3>
                  <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                    11 weeks
                  </p>
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

      <div className="container-fluid bg-dark text-white">
        <div className="container p-5">
          <h2 className="text-center">Flexible Financing Options</h2>
          <hr />
          <div className="row">
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6">
              <h4>Full Tuition</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Save #5, 000 on the full #100, 000 tuition by paying in full
                upfront.
              </p>

              <h4>#100, 000</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Full tuition
              </p>
            </div>
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6">
              <h4>Installments</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Divide tuition into two, or three easy payments.
              </p>
              <h4>60% upfront payment</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                per installment
              </p>
            </div>
          </div>
        </div>
      </div>

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

      {/* PYTHON */}

      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <details className="mt-5">
          <summary>Why are Python programming skills relevant today?</summary>
          <p
            className="py-4"
            style={{ lineHeight: "1.6rem", fontSize: "14px" }}
          >
            The future is bright for programmers who know Python — it’s a
            baseline skill for high-growth industries like analytics, artificial
            intelligence, cybersecurity, and data science, which was recently
            named the No. 1 most promising job by LinkedIn. It’s also incredibly
            accessible. Thanks to its versatility and intuitive syntax, Python
            is one of the easiest programming languages to learn on the market —
            a good choice for beginners to the world of programming.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            What are the professional backgrounds of Python programming
            students?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Python Programming is our best entry-level course for professionals
            looking to gain a foundation in programming to kickstart a move into
            tech or data. You’ll find a diverse range of students in the
            classroom including: New programmers who want to get up and running
            quickly with an object-oriented language. Graduates of our Data
            Analytics course who enjoyed the programming aspects of Excel and
            SQL. Anyone considering further study in our Data Science or Data
            Science Immersive programs, which require a strong foundation in
            Python programming. Regardless of their backgrounds, this program
            attracts a community of eager learners who want to know how to code
            a prototype, make sense of documentation, and continue honing their
            Python skills independently.
          </p>
        </details>
        <hr />
        <details>
          <summary>What does my tuition cover?</summary>
          Here are just some of the benefits you can expect as a GMTsoftware
          student:
          <ul>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              {" "}
              40 hours of expert instruction from a Python practitioner, plus
              many more spent tackling homework, honing projects, and getting
              technical support in office hours.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Robust coursework, including expert-vetted lesson decks, project
              toolkits, and more. Refresh and refine your knowledge throughout
              your professional journey as needed.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              A web programming or data science specialization track, which your
              instructor will select based on class interest and local job
              market demand.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              A real-world project where you’ll develop a custom web or data
              application from scratch.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Individual feedback and guidance from instructors and TAs. Stay
              motivated and make the most of your experience with the help of
              GMTsoftware’s dedicated team.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Exclusive access to alumni discounts, networking events, and
              career workshops.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Individual feedback and guidance from instructors and TAs. Stay
              motivated and make the most of your experience with the help of
              GMTsoftware’s dedicated team.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Exclusive access to alumni discounts, networking events, and
              career workshops.
            </li>

            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              A GMTsoftware course certificate to showcase your new skill set on
              LinkedIn.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Connections with a professional network of instructors and peers
              that lasts well beyond the course. The global GMTsoftware
              community can help you navigate and succeed in the field.
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
            This is a beginner-friendly program with no prerequisites, although
            some students may have coded previously. First-time programmers will
            have access to pre-course preparatory lessons and additional
            resources to boost their confidence with key concepts and set up
            their developer environments. Our Admissions team can discuss your
            background and learning goals to advise if this course is a good fit
            for you.
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
            GMTsoftware is known for. If you prefer to learn Python alongside
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

        <details>
          <summary>What projects will I work on during the course?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            For your capstone project, you’ll apply what you’ve learned
            throughout the course to build a polished, portfolio-ready web or
            data application. Showcase your skills by creating a custom app that
            pulls in third-party data with Pandas or integrates functionality
            from APIs with Flask, depending on the focus of your cohort. We
            encourage you to tackle a problem that’s related to your work or a
            passion project you’ve been meaning to carve out time for.
            Throughout the course, you’ll also complete a number of smaller
            projects designed to reinforce what you’ve learned in each unit.
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

export default Python;
