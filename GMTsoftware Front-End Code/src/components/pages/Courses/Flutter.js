import React, { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import Pdf1 from "../document/flutter.pdf";
import { FaDownload } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Pricing.css";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function Flutter() {
  useEffect(() => {
    document.title = "GMTsoftware | Android & iOS Dev";
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
              <h1 className="text-white">
                Android & iOS Development Nanodegree(Using
                Flutter/React-Native): Abuja
              </h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Learn to build applications for Android devices using
                flutter/React-Native.
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
                src="https://www.logolynx.com/images/logolynx/b5/b5299d83a8f3d9fb3e33a57336b05aec.png"
                alt="img"
                className="img-fluid shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="py-4 w-75" style={{ fontWeight: "1000" }}>
          This is one of our more demanding (and awesome) programs. Students
          should have some light coding experience or be sure to complete their
          pre-work before the android development course.
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Boost Your Professional Value With Versatile Skills</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              It’s not hard to spot the iOS students on the gmtsoftware
              campus—they have a swagger. They are as passionate as other
              developers, but it looks like they get out of the house more.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4> Tap Into a Valuable Professional Network</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              If you’re someone who is obsessed with using technology to make
              the world a better or more interesting place, yet you never lose
              track of design, you’ll be right at home with the unorthodox
              individualists in our Android program.{" "}
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
              Join this 14-week, evening Android development course online or at
              Central Business District in Abuja, Nigeria. Or, take part from
              the comfort of home — wherever you’re based — via our Remote
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
                Over 13 demanding weeks in our Android development bootcamp
                you’ll find out what it means to be an app developer. Using
                tools like Github and Xcode to collaborate, and languages like
                flutter and Swift to create, you’ll prepare for a career in
                tech. At the end of the course
              </p>
              <h4>
                <strong>Start Building Dynamic android development</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Some people are looking for their first real career-level job
                and others are looking to move ahead in the career they already
                have. The Android program is great for both. You’ll learn enough
                for many entry-level positions, or, for the more experienced, it
                will add a whole new dimension to what you’re able to do. (You
                could become the go-to and dev on your team.)
              </p>
              <h4>
                <strong>Get a Head Start With Self-Paced Prep Lessons</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Once you enrol, we equip you with online, self-paced preparatory
                lessons to set you up for success. Dive into essential android
                development concepts to gain a common vocabulary and start
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
              src="https://randomuser.me/api/portraits/men/34.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <strong>Android Developer</strong> <br /> "Silverstre huine"
            </p>
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <em>
                “As Android developer,GMTsoftware was essential to my career as
                it taught me relevant skills and produced experiences and
                project that directly has impact in me"
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
                Save #10, 000 on the full #150,000 tuition by paying in full
                upfront.
              </p>

              <h4>#140,000</h4>
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
              Our Android Development Course Prices
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
                  <h3>Android Dev</h3>
                  <h4>IN PERSON </h4>
                  <h3>#150,000</h3>
                  <ul className="pricing__container-features">
                    <li>13 weeks</li>
                    <li>Abuja, Nigeria</li>
                  </ul>
                  <h4>REMOTE</h4>
                  <h3>#140,000</h3>
                  <p>13 weeks</p>
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
          <summary>Why are Android development skills relevant today?</summary>
          <p
            className="py-4"
            style={{ lineHeight: "1.6rem", fontSize: "14px" }}
          >
            Literacy in web development basics is in demand across a range of
            industries, including design, marketing, and product development.
            These opportunities aren’t limited to those with formal computer
            science training — employers want skills, not degrees. Master the
            technical vocabulary you need to communicate confidently with web
            developers and technical stakeholders, and start applying your new
            skill set on the job immediately.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            What are the professional backgrounds of Android development
            students?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Build foundational technical skills amongst cross-functional team
            members to improve their communication and collaboration with
            technical stakeholders. An array of employees will benefit from this
            program, which explores technical vocabulary, flutter, and developer
            tools like Git.
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
              An introduction to programming with flutter and version control
              with Git/GitHub.
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
              app from scratch.
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
          <summary>
            Are there any prerequisites for this Android development course?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            This is a beginner-friendly programme with no prerequisites,
            although some students may have coded previously. First-time
            programmers will have access to pre-course preparatory lessons and
            additional resources to boost their confidence with key concepts.
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

        <hr />
        <details>
          <summary>
            How does this programme relate to GMTsoftware’s other web
            development courses?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Front-End Web Development is GMTsoftware’s most popular “starter
            course” for those who are curious about careers in tech or want to
            work more effectively with technical stakeholders. Graduates can go
            on to continue honing their skills in our evening and 1-week
            JavaScript Development course or commit to a career change with our
            Software Engineering Immersive programme.
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

export default Flutter;
