import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Pdf from "../document/fullstack.pdf";
import "./Services.css";
import { ImUserCheck } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaGithubSquare,
  FaReact,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import "./Pricing.css";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function Fullstack() {
  useEffect(() => {
    document.title = "GMTsoftware | Fullstack";
  }, []);
  return (
    <>
      <Navbar />
      <div className="courses_head d-flex align-items-center justify-content-center">
        <div className="container py-4">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <p
                style={{
                  background: "rgb(149, 29, 29)",
                  color: "#fff",
                  display: "inline",
                }}
              >
                LEARN FROM THE INDUSTRY'S TOP TALENT AT{" "}
                <mark style={{ background: "#000", padding: "0px" }}>
                  <span style={{ color: "#fff" }}>GMT</span>
                  <span style={{ color: "#f50a0a" }}>software</span>
                </mark>
              </p>
              <h1 className="text-white">FullStack Software Development</h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Your best course for career transformation in tech. This
                full-time online coding bootcamp features expert instruction,
                one-on-one career coaching, and connections to top employers to
                get you hired.
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
                src="/images/ui.jpg"
                alt="img"
                className="img-fluid shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="py-4 text-center" style={{ fontWeight: "1000" }}>
          Get hired, we’ve trained more grads in high-growth, high-pay tech
          careers than any other coding bootcamp.
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Launch a Fulfilling, Future-Proof Career</h4>{" "}
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              Become indispensable in our tech-driven world. Meet the global
              demand for problem-solvers with strong technical foundations and
              the agility to keep learning.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4> Open Doors With Industry Connections</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Tap into GMTsoftware’s growing global network of tech experts,
              instructors, hiring partners, and alumni, and equip yourself to
              succeed in a rapidly expanding field
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4> Build a Professional-Grade Portfolio</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Showcase your coding and collaboration skills to potential
              employers, creating full-stack web applications that leverage
              modern programming languages, frameworks, and tools.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 my-4">
            <h4> Get Personalized Job Support at Every Step</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              Build confidence with mock technical interviews and whiteboard
              challenges, get connected with top employers, and navigate your
              job search from end-to-end with a dedicated career coach.
            </p>
          </div>
        </div>
      </div>
      <div className="dev">
        <div>
          {" "}
          <h2>Would You Make a Good Software Engineer?</h2>
          <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
            A love of code and tech is a great start, but it takes a lot more to
            succeed in the world of software development. You can’t just take a
            web development course and call it good. Great programmers are also:
          </p>
        </div>
        <div>
          <ul className="dev_li">
            <li>
              {" "}
              <ImUserCheck size={40} color="#b82f24" /> Good at Time Management
            </li>
            <li>
              {" "}
              <ImUserCheck size={40} color="#b82f24" /> Patient and Positive
            </li>
            <li>
              {" "}
              <ImUserCheck size={40} color="#b82f24" /> Constantly Learning
            </li>
            <li>
              {" "}
              <ImUserCheck size={40} color="#b82f24" /> Lovers of Puzzles and
              Problem Solving
            </li>
            <li>
              <ImUserCheck size={40} color="#b82f24" /> Good Communicators
            </li>
            <li>
              {" "}
              <ImUserCheck size={40} color="#b82f24" /> Detail Oriented
            </li>
            <li>
              {" "}
              <ImUserCheck size={40} color="#b82f24" /> Habitual Experiementors
            </li>
          </ul>
        </div>
      </div>

      <div style={{ background: "#1c2237", color: "#fff" }}>
        <div className="dev">
          <div>
            <h2>
              What Is Taught in the GMTsoftware Software Engineering Immersive?
            </h2>
            <div className="deve">
              <h5>
                <FaHtml5 size={50} color="#b82f24" /> HTML
              </h5>
              <h5>
                {" "}
                <FaCss3Alt size={50} color="#b82f24" /> CSS
              </h5>
              <h5>
                <FaBootstrap size={50} color="#b82f24" /> BOOTSTRAP
              </h5>
              <h5>
                <IoLogoJavascript size={50} color="#b82f24" /> JAVASCRIPT
              </h5>
              <h5>
                <SiJquery size={50} color="#b82f24" /> jQUERY
              </h5>
              <h5>
                <FaGithubSquare size={50} color="#b82f24" /> GIT & GITHUB
              </h5>
              <h5>
                <FaReact size={50} color="#b82f24" /> REACT
              </h5>
              <h5>
                <FaNode size={50} color="#b82f24" /> NODE
              </h5>
            </div>
          </div>
          <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
            Our Full Stack course is a 13-week (full-time) program that prepares
            you for entry-level positions in web development and software
            engineering. You’ll cover HTML, CSS, Bootstrap, Materialize,
            Javascript, jQuery, React, Node, and more, utilizing git and github.
            Students will also be taught our career prep curriculum and have
            access to our wildly energetic and positive career support team.
            Either course has frequent homework and challenging assignments, and
            neither one is easy. However, they both provide a viable path to a
            new career in less than a year, which is the beauty of a software
            development bootcamp.
          </p>
        </div>
      </div>

      <div className="full_img shadow-lg">
        <div className="container">
          <div className="row d-flex flex-row-reverse mx-auto text-white">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-7 ">
              <h2
                className="display-2 font-weight-bolder pt-5"
                style={{ fontWeight: "bolder", color: "#fff" }}
              >
                Inside Our Award-Winning Curriculum
              </h2>
              <h4 className="pt-5">
                <strong>Made With — and for — Top Employers</strong>
              </h4>
              <p
                className="py-2 font-weight-bold"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Developed with guidance from our software engineering advisory
                board, our curriculum is primed for industry relevance. Learn
                the core skills to build full-stack web applications on the job:
                computer science fundamentals, collaboration tools, and the
                programming languages modern employers demand.
              </p>
              <h4>
                <strong>Gain a Well-Rounded Technical Foundation</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Hone fluency in multiple frameworks and stacks. Apply essential
                object-oriented programming concepts, and leverage JavaScript
                libraries like React. Incorporate functionality from third-party
                APIs and add complexity and nuance with Python, Django, and
                more.
              </p>
              <h4>
                <strong>Go Beyond “Full-Stack Development”</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Discover how to effectively communicate and collaborate with web
                development teams to carry out projects from concept to
                completion. Practice version control with Git and GitHub while
                executing software engineering projects in an Agile development
                workflow..
              </p>

              <div className="py-4 text-center">
                <a href={Pdf} className="btn btn-dark btn-sm-center ">
                  Download Curriculum
                  <br></br>
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
              src="https://randomuser.me/api/portraits/men/70.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <strong>Fullstack Developer</strong> <br /> "Freelancer - James
              Adejuwon"
            </p>
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <em>
                "GMTsoftware grads are quick learners, efficient
                problem-solvers, and dedicated web developers."
                {/* They have proven
                to be valuable additions to our team! */}
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
                Save #10,000 on the full #200, 000 tuition by paying in full
                upfront.
              </p>

              <h4>#200, 000</h4>
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
            <h2 className="py-3 text-center">Our Fullstack Course Prices</h2>
            <div className="pricing__container">
              <Link to="/sign-up" className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon1">
                    <BiCodeBlock />
                  </div>
                  <h3>Full-Stack Dev</h3>
                  <h4>Installments </h4>
                  <h3>60% upfront payment</h3>
                  <ul className="pricing__container-features">
                    <li>12 weeks</li>
                    <li>Abuja, Nigeria</li>
                  </ul>
                  <h4>Total Cost</h4>
                  <h3>#200,000</h3>
                  <p>12 weeks</p>
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
          <summary>Why is this coding bootcamp relevant today?</summary>
          <p
            className="py-4"
            style={{ lineHeight: "1.6rem", fontSize: "14px" }}
          >
            All companies — not just Silicon Valley giants — are evolving into
            tech companies, and demand is growing steadily for software
            engineers who can creatively solve problems and implement robust,
            sustainable solutions. In fact, Harvey Nash and KPMG found that 67%
            of the tech leaders they surveyed reported an inability to acquire
            the talent they need. Regardless of your professional background,
            there's ample opportunity to carve a fulfilling — and future-proof —
            career path.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            Are there any prerequisites for this coding bootcamp?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            This is a beginner-friendly program with no prerequisites, although
            many students have engaged in self-learning previously or have
            worked at tech startups or in tech-adjacent roles. Whether you’re
            new to the field or you’re looking to formalize your practice, our
            curriculum helps you gain fluency in the programming languages,
            frameworks, and libraries that modern employers demand and put them
            to work on the path to a new career in the field. Our Admissions
            team can discuss your background and learning goals to advise if
            this coding bootcamp is a good fit for you.
          </p>
        </details>
        <hr />
        <details>
          <summary>
            What skills are assessed by the end of the programme?
          </summary>
          In order to earn a certificate, you will be evaluated based on your
          ability to:
          <ul>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              {" "}
              Apply programming and computer science fundamentals, as well as
              software engineering best practices.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Create a front-end web application with modern JavaScript
              frameworks such as Angular or React.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Develop and deploy full-stack applications with in-demand
              technologies such as Ruby on Rails, Python with Django, and
              Express with Node.js.
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
        <hr />
        <details>
          <summary>Will I receive a certificate?</summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Upon passing this course, you will receive a Software Engineering
            Immersive certificate. To pass, you will need to:
          </p>
          <ul>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Attend all class sessions.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Complete all homework assignments.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Complete and present all projects.
            </li>
          </ul>
        </details>
        <hr />
        <details>
          <summary>
            What are the professional backgrounds of coding bootcamp students?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            SEI students come from all walks of life but share one common
            mission: They are passionate about launching a career in tech by
            gaining an in-demand, technical skill set. We see career-changers
            from diverse professional backgrounds, including sales, marketing,
            project management, finance, and many more. Most are aiming to
            secure jobs as software engineers or web developers, while others
            may be looking to combine past experience with a new skill set to
            enter more specialised roles.
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
            recordings of class sessions in the future. Beyond class hours, get
            guidance, feedback, technical assistance, and more during frequent
            one-on-one check-ins and office hours.
          </p>
        </details>
        <hr />

        <details>
          <summary>
            What projects will I work on during this coding bootcamp?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            For your capstone project, you’ll mimic a team-client interaction,
            collaborating to build and deploy a full-stack application that
            fulfills provided specs. The final result will integrate
            functionality from a third-party API. Throughout this Immersive,
            you’ll also compile a portfolio of solo and group projects designed
            to reinforce what you’ve learned in each unit. Gain hands-on
            experience building and deploying front-end and full-stack
            applications with a variety of languages and frameworks.
          </p>
        </details>
        <hr />

        <details>
          <summary>
            How does this coding bootcamp relate to GMTsoftware’s other tech
            courses?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Software Engineering Immersive is for learners who are committed to
            making a career change. Front-End Web Development offers a popular
            “starter” option for those who are curious about careers in tech or
            want to work more effectively with technical stakeholders.
            JavaScript Development offers a further deep dive into the world’s
            most popular programming language.
          </p>
        </details>
        <hr />

        <details>
          <summary>
            What are my financing options for this coding bootcamp?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            We offer a variety of different financing options, including
            instalment plans, income share agreements, and tuition discounts so
            you can focus on what counts — your education. Speak with our
            Admissions team to learn more and find the best fit for you and your
            finances.
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
      <Footer />
    </>
  );
}

export default Fullstack;
