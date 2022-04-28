import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import Navbar from "../../Navbar";
import Footer from "../Footer.js/Footer";

function Digital() {
  useEffect(() => {
    document.title = "GMTsoftware | Digital Marketing";
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
              <h1 className="text-white">Digital Marketing Immersive</h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Your best course for career transformation. This full-time
                digital marketing bootcamp features expert instruction,
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
                src="https://th.bing.com/th/id/Rca70c92fe833f9049d88cff144845f44?rik=X9NXky6uV9rdAw&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1987421%2fimages%2fo-DIGITAL-MARKETING-facebook.jpg&ehk=Ed2uRcV%2bNYs5dEOOinurBvYJW2nq8kDPyAmd1Ye1jKg%3d&risl=&pid=ImgRaw"
                alt="img"
                className="img-fluid shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="py-4 w-75" style={{ fontWeight: "1000" }}>
          More than half of all jobs in the top income quartile show significant
          demand for Digital Marketing skills.
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Boost Your Professional Value With Versatile Skills</h4>{" "}
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              Gain the tools to execute on creative and strategic thinking,
              developing customer-first marketing strategies that drive business
              results across industries and organisations.
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
            <h4> Choose a Format Designed for Your Busy Life</h4>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              {" "}
              Join this 14-week, evening Digitalcourse online or at Abuja,
              Nigeria. Or, take part from the comfort of home — wherever you’re
              based — via our Remote classroom.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="py-4 w-75" style={{ fontWeight: "1000" }}>
          Digital Marketing bootcamp entails.
        </h2>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Expert-Led Instruction That Gets You Job-Ready</h4>{" "}
            <p style={{ lineHeight: "1.0rem", fontSize: "1rem" }}>
              {" "}
              Become a true digital marketing practitioner. Gain fluency in the
              field and collaborate with leading professionals through lectures,
              hands-on exercises, and real-world client projects.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
            <h4>Exclusive Access to Leaders in Tech</h4>
            <p style={{ lineHeight: "1.0rem", fontSize: "1rem" }}>
              Get an insider’s look at the marketing industry. Engage with
              digital marketers and hiring managers through sessions like hiring
              panel discussions and guest speakers.
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
            <h4> Gain a Valuable Professional Network</h4>
            <p style={{ lineHeight: "1.0rem", fontSize: "1rem" }}>
              {" "}
              Transform and grow your career alongside motivated peers (and
              potential collaborators). The GMT community is a priceless
              resource — just ask our 80K+ alumni.
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
                <strong>Gain a Well-Rounded Digital Foundation</strong>
              </h4>
              <p
                className="py-2 font-weight-bold"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Navigate the vast landscape of digital marketing tools and
                techniques. Practise leveraging core digital channels including
                search marketing, SEO and content, and more to deliver on
                strategic goals. Then, measure, analyse, and optimise the
                performance of campaigns using Google Analytics and other
                fundamental tools.
              </p>
              <h4>
                <strong>Go Beyond Technical Fluency</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Our holistic programme prepares you to work cross-functionally
                with fellow marketers, stakeholders, clients, and real-world
                customers. Hone client management, teamwork, and presentation
                skills, and round out your toolkit with complementary concepts
                from web development and UX design.
              </p>
              <h4>
                <strong>Get a Head Start With Self-Paced Prep Lessons</strong>
              </h4>
              <p
                className="mb-5"
                style={{ lineHeight: "1.6rem", fontSize: "1rem" }}
              >
                Once you enrol, we equip you with online, self-paced preparatory
                lessons to set you up for success. Dive into essential Digital
                Marketing concepts to gain a common vocabulary and start
                collaborating with classmates on day one.
              </p>

              <div className="py-4 text-center">Request for syllabus</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 text-center my-auto justify-self-end">
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt=""
              width="100"
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <strong>Digital Marketer</strong> <br /> "Stephen ovie"
            </p>
            <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              <em>
                “I knew nothing about Digital Marketing and I had no idea where
                to begin.Our coaches work with you to tell the story of your
                professional background and individualise your path to a new
                career. Set goals and stay motivated from the first day of
                class!"
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
                Divide tuition into two, three, or four easy payments.
              </p>
              <h4>#20, 000</h4>
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
          <summary>
            Why is this digital marketing bootcamp relevant today?
          </summary>
          <p
            className="py-4"
            style={{ lineHeight: "1.6rem", fontSize: "14px" }}
          >
            According to a 2019 job market study by McKinley Partners, 94% of
            companies surveyed increased the size of their marketing teams in
            2018 — up from 73% the previous year — and the demand continues to
            grow. Because of their ability to distil customer insights from
            real-time data, companies increasingly need digital marketers to not
            only define marketing plans and strategies, but also help drive
            business and product innovation.
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
              Expert instruction in the skills you need to successfully
              transition into a digital marketing career.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Self-paced pre-work to explore digital marketing fundamentals and
              prepare to hit the ground running on day one of class.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Robust coursework, including expert-vetted lesson decks, project
              toolkits, and more. Refresh and refine your knowledge throughout
              your professional journey as needed.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              A professional-grade portfolio of projects to showcase new skills
              to potential employers and collaborators, including a real client
              campaign.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Robust coursework, including expert-vetted lesson decks, project
              toolkits, and more. Refresh and refine your knowledge throughout
              your professional journey as needed.
            </li>
            <li style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
              Individual feedback and guidance from instructors and TAs during
              office
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
            What practical skill sets can I expect to have by the end of this
            digital marketing bootcamp?
          </summary>
          <p style={{ lineHeight: "1.6rem", fontSize: "14px" }}>
            Use data to craft strong objective-driven strategies and optimise
            their performance. Navigate the vast landscape of digital marketing
            channels, tactics, and technologies to choose the right ones for
            your goals. Reach target audiences with tailored messaging that
            drives them through the conversion funnel. Solve real problems for
            businesses around acquiring, engaging, and retaining customers.
            Analyse consumer data to tell consistent brand stories and remove
            friction throughout the consumer journey. Gain proficiency with core
            digital marketing tactics including paid search, SEO, content
            marketing, email, paid and organic social media marketing,
            influencer marketing, and digital advertising (native, display, and
            video). Measure, analyse, and optimise the performance of campaigns
            using Google Analytics, Google Tag Manager, and A/B testing tools.
            Demonstrate skills that complement a digital marketer’s toolkit:
            coding basics, user experience design concepts like user research,
            data analytics, and communication and presentation skills.
          </p>
        </details>
        {/* <hr />
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
        </details> */}
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
      <Footer/>
    </>
  );
}

export default Digital;
