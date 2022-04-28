import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import { FaLaptopCode, FaDownload } from "react-icons/fa";
import Pdf from "../document/Python Programming.pdf";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function Datascience() {
  useEffect(() => {
    document.title = "GMTsoftware | Data Science";
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
              <h1 className="text-white">
                Data Science Accelerator Course: Abuja
              </h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Create robust predictive models with statistics and Python
                programming. Build confidence and credibility to tackle complex
                machine learning problems on the job.
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
                src="https://railsware.com/blog/wp-content/uploads/2018/10/Python-for-Data-Science-facebook.png"
                alt="img"
                className="img-fluid shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="py-4 w-75" style={{ fontWeight: "1000" }}>
          Demand for data scientists has increased 663% in five years, and the
          call for machine learning skills is up 809%.
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Boost Your Professional Value With Versatile Skills</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              Thousands of companies need team members who can transform data
              sets into strategic forecasts. Meet that need. Learn to apply
              machine learning techniques to fuel predictive models like
              customer segmentation and recommendation engines.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4> Tap Into a Valuable Professional Network</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              If you’re someone who is obsessed with using technology to make
              the world a better or more interesting place, yet you never lose
              track of design, you’ll be right at home with the unorthodox
              individualists in our Data Science program.{" "}
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
              Join this 10-week, Data science course online or at Maitama in
              Abuja, Nigeria. Or, take part from the comfort of home — wherever
              you’re based — via our Remote classroom.
            </p>
          </div>
        </div>
      </div>
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
                Concentrate on the most important tools for data scientists on
                the job. GMT’s data science advisory board regularly curates the
                best practices and innovative teaching approaches of our entire
                expert network to emphasize real-world relevance and meet
                evolving employer demands. Its work ensures that students
                graduate ready to tackle the challenges they’ll face in the
                field.
              </p>
              <h4>
                <strong>Harness the Predictive Power of Data</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Tailored for students with quantitative or programming
                backgrounds, this course dives into the essentials of data
                science: Python programming, exploratory data analysis, data
                modeling, and machine learning. Get the hands-on experience you
                need to synthesize extremely large data sets, build predictive
                models, and tell a compelling story to stakeholders.
              </p>
              <h4>
                <strong>Get a Head Start With Self-Paced Prep Lessons</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Once you enrol, we equip you with online, self-paced preparatory
                lessons to set you up for success. Dive into essential Data
                Science concepts to gain a common vocabulary and start
                collaborating with classmates on day one.
              </p>
              {/* <div className="py-4 text-center">
                <a href={Pdf} className="btn btn-dark btn-sm-center">
                  Download Curriculum <br></br>
                  <span>
                    <FaDownload size={20} />
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center my-auto justify-self-end">
            <img
              src="./images/abayo.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <strong>Data Science</strong> <br /> "Tobi bakre"
            </p>
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <em>
                "The material we learned is relevant and meaningful. I learned a
                lot and will put much of what I learned into practice where I
                work. This course has given me the tools to be a more technical
                analytics leader in my organization.”
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
                Save #5,000 on the full #100,000 tuition by paying in full
                upfront.
              </p>

              <h4>#100,000</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Full tuition
              </p>
            </div>
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6">
              <h4>Installments</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                Divide tuition into two, three, or four easy payments.
              </p>
              <h4>60% upfront</h4>
              <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
                per installment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center pt-2">
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
          <summary>Why is a data science skill set relevant today?</summary>
          <p
            className="py-4"
            style={{ lineHeight: "1.6rem", fontSize: "14px" }}
          >
            Companies of all stripes use data science to take on today’s biggest
            challenges, tackling everything from public policy and robotics to
            dating and eCommerce. As a result, organizations are moving quickly
            to build robust in-house teams of data scientists and advanced
            analysts, and there’s not enough talent to go around. According to
            Burning Glass, “Data science and analytics skills are now widely in
            demand in decision-making roles, including managers across a range
            of industries. In fact, our data shows that more than 1.7 million
            job postings asked for data science skills in 2018.” Learning this
            future-proof skill set can help you enter the next stage of your
            career, whether that’s advancing in your current profession or
            exploring an exciting and lucrative field.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            What skills are assessed by the end of the programme?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            In order to earn a certificate, you will be evaluated based on your
            ability to: Perform exploratory data analysis with Python. Build and
            refine machine learning models to predict patterns from data sets.
            Communicate data-driven insights to technical and non-technical
            audiences alike. You will also need to: Attend all class sessions.
            Complete all homework assignments that lead up to the final project.
            Complete your final project and present it.
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
              Software engineers who want to apply their programming skills
              toward a new career.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Ultimately, this programme attracts a community of eager learners
              who have an interest in manipulating large data sets and
              forecasting to impact strategy and bottom lines.
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
          <summary>Are there any prerequisites</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            This is a fast-paced course with some prerequisites. Students should
            be comfortable with programming fundamentals, core Python syntax,
            and basic statistics. Upon enroling, you’ll complete a short
            onboarding task and, based on your results, may be advised to take
            an introductory Python workshop. You’ll also complete up to 12 hours
            of online preparatory lessons that will ensure you have the
            foundations to dive into rigorous coursework.
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
          <summary>Can I work full-time while enroled in this course?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Yes! All of our evening and 1-week courses are designed for busy
            professionals with full-time work commitments. Depending on your
            location, classes meet twice per week in the evenings or all day on
            Saturday. If you’re able to dedicate a full week to learning, we
            also have a full-time, accelerated 1-week option. Please keep in
            mind that our remote course is live online, which means that if you
            take the accelerated programme, you’ll be connected live with your
            instructor and classmates the whole day.
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
          <summary>
            What does student success look like for this course?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            While our Abuja campus is new, our evening and 1-week courses have
            an 91% completion rate and consistently earn an average 52 net
            promoter score.
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

export default Datascience;
