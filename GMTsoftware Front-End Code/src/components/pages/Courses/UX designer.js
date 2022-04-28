import React, { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import Pdf1 from "../document/UI.pdf";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Pricing.css";
import { FaDownload } from "react-icons/fa";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function UXdesigner() {
  useEffect(() => {
    document.title = "GMTsoftware | UX designer";
  }, []);
  return (
    <>
      <Navbar />
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
              <h1 className="text-white">UI/UX Course: Abuja</h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Learn prototyping, information architecture, and visual design
                combined with agile methodologies, analytics, and accessibility.
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
                src="/images/uiux.jpg"
                alt="img"
                className="img-fluid shadow-lg"
                style={{ height: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="py-4 w-75" style={{ fontWeight: "1000" }}>
          The world is full of billions of people who every day interact with
          millions of lines of code in websites, applications, and software. The
          UX designer’s job is to stand between all that code and the human
          beings that have to use it. This is because they care about
          human-centered design
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Boost Your Professional Value With Versatile Skills</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              It takes more than style and a good eye to be a skilled UX
              Designer. Students who excel in the UX Design course and in this
              field are often:
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4> Tap Into a Valuable Professional Network</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Walk into any tech company, find the person who has super stylish
              glasses or who looks like they still listen to vinyl records, and
              there is a good chance you’ve located a UX Designer. They often
              look different because they are different.{" "}
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
            <h4> Choose a Format Designed for Your Busy Life</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              Join this 8-week, evening UI/UX course online or at central
              Business District in Abuja, Nigeria. Or, take part from the
              comfort of home — wherever you’re based — via our Remote
              classroom.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='container m-5'>
        <img src='/images/comps.gif' alt='jkkg' srcset='' />
      </div> */}

      <div className="front_img shadow-lg">
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
                The UX course is a 8-week program that prepares you for
                entry-level work in the field of UX Design. In the UX design
                bootcamp, you’ll learn about research, prototyping, information
                architecture, and how to design websites and applications.
              </p>
              <h4>
                <strong>
                  Start Building prototyping, information architecture, and
                  visual design
                </strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                If you’re just starting out, getting into an entry-level UX
                position can lead to a lot of happy years doing work that makes
                a difference to product users. If you’re already working in a
                career you enjoy—perhaps as a developer, product manager, or
                graphic designer—adding UX skills to your resume can open new
                doors and make you an even more valuable resource to a future
                company.
              </p>
              <h4>
                <strong>Get a Head Start With Self-Paced Prep Lessons</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Once you enrol, we equip you with online, self-paced preparatory
                lessons to set you up for success. Dive into essential visual
                design concepts to gain a common vocabulary and start
                collaborating with classmates on day one.
              </p>
            </div>
            <div className="py-4 text-center">
              <a href={Pdf1} className="btn btn-dark btn-sm-center">
                Download Curriculum <br></br>
                <span>
                  <FaDownload size={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center my-auto justify-self-end">
            <img
              src="./images/fm.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <strong>UI/UX</strong> <br /> "Mr Femi"
            </p>
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <em>
                “As UI/UX designer, Was essential to my career as it taught me
                relevant skills and produced experiences and project that
                directly has impact in me"
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
                Save #15, 000 on the full #100, 000 tuition by paying in full
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
                Divide tuition into two, three, or four easy payments.
              </p>
              <h4>60% upfront payment</h4>
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
            <h2 className="py-3 text-center">
              Our UI/UX Designer Course Prices
            </h2>
            <div className="pricing__container text-center">
              <Link
                to="/sign-up"
                className="pricing__container-card text-center"
              >
                <div className="pricing__container-cardInfo">
                  <div className="icon1">
                    <FaLaptopCode />
                  </div>
                  <h3>UI/UX Designer</h3>
                  <h4>IN PERSON </h4>
                  <h3>#100,000</h3>
                  <ul className="pricing__container-features">
                    <li>8 weeks</li>
                    <li>Abuja, Nigeria</li>
                  </ul>
                  <h4>REMOTE</h4>
                  <h3>#85,000</h3>
                  <p>8 weeks</p>
                  <Link to="/sign-up">
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

      <div className="container text-center pt-2">
        <h5>Need advice? Our Admissions team is here to help.</h5>
        <button className="btn btn-dark mb-2">
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="mailto:contact@gmtsoftware.tech"
          >
            Contact Admissions
          </a>
        </button>
      </div>

      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <details className="mt-5">
          <summary>Why are UI/UX skills relevant today?</summary>
          <p
            className="py-4"
            style={{ lineHeight: "1.6rem", fontSize: "14px" }}
          >
            Literacy in web development basics is in demand across a range of
            industries, including design, marketing, and product
            development.More software, apps, and websites running on more
            devices—from ultra-wide monitors to tiny watches—will mean more
            designing of interfaces, menus, navigation, and processes.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            What are the professional backgrounds of UI/UX students?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Build foundational technical skills amongst cross-functional team
            members to improve their communication and collaboration with
            technical stakeholders.you’ll learn about research, prototyping,
            information architecture, and how to design websites and
            applications.
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
              Build technical competencies amongst your non-technical audience
              and equip cross-functional teams to work confidently with
              technology stakeholders..
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              The technical vocabulary needed to communicate confidently with
              technical teams.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              An introduction to programming with Adobe Figma and version
              control with Git/GitHub.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              60 hours of expert instruction from a professional developer, plus
              many more spent tackling homework, honing projects, and getting
              technical support in office hours.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Robust coursework, including expert-vetted lesson decks, project
              toolkits, and more. Refresh and refine your knowledge throughout
              your professional journey as needed.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              A real-world project where you’ll build an interactive, android
              prototype app from scratch.
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
          <summary>Are there any prerequisites for this UI/UX course?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            This is a beginner-friendly programme with no prerequisites,
            although some students may have graphic design experience
            previously. First-time Visual Designer will have access to
            pre-course preparatory lessons and additional resources to boost
            their confidence with key concepts.
          </p>
          <ul>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Your own laptop (PC or Mac). It must be no more than five-years
              old and able to run the most recent operating system.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              If remote, a webcam, headphones, and good access to the internet
              are required.
            </li>
          </ul>
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
            GMTsoftware is known for. If you prefer to learn alongside your
            peers and can make it to Maitama campus, our in-person courses allow
            you to take advantage of our beautiful classrooms and workspaces.
            Our Admissions team can advise you on the best format for your
            personal circumstances and learning style.
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
            recordings of className sessions in the future. Beyond className
            hours, get guidance, feedback, technical assistance, and more during
            frequent one-on-one check-ins and office hours.
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
            projects outside of className each week, but the workload is
            designed to be manageable with a full-time job. If you need to miss
            a session or two, we offer resources to help you catch up. We
            recommend you discuss any planned absences with your instructor.
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
      <Footer />
    </>
  );
}

export default UXdesigner;
