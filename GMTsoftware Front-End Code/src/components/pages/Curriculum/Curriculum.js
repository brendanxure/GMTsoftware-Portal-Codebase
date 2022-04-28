import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function Curriculum() {
  useEffect(() => {
    document.title = "GMTsoftware | Curriculum";
  }, []);
  return (
    <div className="">
      <div className="jumbotro">
        <div className="container py-auto">
          <h2
            className=" pt-5 text-center text-white"
            style={{ fontSize: "52px" }}
          >
            CODING BOOTCAMP
          </h2>
          <mark
            className=" py-1 text-center text-white bg-dark"
            style={{ fontSize: "1.5rem" }}
          >
            Check each courses to download curriculum.
          </mark>
        </div>

        {/* <div className="row">

          <button className="btn m-2 col-md-5 btn-block" style={{ background:"#8D1212", color:"white"}}>Apply Now</button>
            <button className="btn m-2 col-md-5 btn-block bg-dark" style={{ color: "white" }}>Download Curriculum</button>
            </div> */}
      </div>

      <div style={{ background: "#333333" }}>
        <div className="container py-4">
          <h1 className="text-white display-3">Curriculum</h1>
        </div>
      </div>

      <div className=" container" style={{}}>
        <h2 className="py-5">General overview</h2>

        <div className="row">
          <div className=" col-md-6 col-lg-4 col-xl-4">
            <h4>Cutting Edge</h4>
            <p className="" style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              GMTsoftware's immersive curriculum will expose you to the latest
              in modern software development for the Internet. Our curriculum is
              based on current technology trends and marketplace demand from
              industry leaders. We cultivate a passion for discovering and
              learning, a necessary quality in today’s rapidly changing
              programming landscape. After graduating Fullstack you’ll be an
              expert in the technologies we teach, and adaptive enough to pick
              up new ones as trends change over time.
            </p>
          </div>

          <div className=" col-md-6 col-lg-4 col-xl-4">
            {" "}
            <h3>Full-stack JavaScript</h3>
            <p className="" style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Our weapon of choice to teach software engineering is fullstack
              JavaScript - the most popular and widely supported language in the
              world. The future of the web is dynamic and real-time JavaScript
              applications. As users demand ever faster and more seamless user
              experiences, web applications built with heavy front-end
              JavaScript are required to cater to those demands. This trend
              makes expert JavaScript knowledge a high demand skill-set.
            </p>
          </div>
          <div className=" col-md-6 col-lg-4 col-xl-4">
            {" "}
            <h3>Deep Understanding</h3>{" "}
            <p className="" style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              We also strongly believe that you never master a tool until you've
              torn it apart and rebuilt it. We've built a curriculum that
              alternates using and building - by the end of the course you'll
              have built your own Terminal Shell, Database, Single Page Web
              Framework and CSS grid system. Don Knuth, a founder of the
              Computer Science field, said it most eloquently: "Your job here is
              not to be on top of things, it's to get to the bottom of things."
            </p>{" "}
          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <blockquote className="py-5 h6 text-center">
          <center>
            "Your job here is not to be on top of things, it's to get to the
            bottom of things."
            <p className="text-center py-3 h6 font-weight-bold">DONALD KNUTH</p>
          </center>
        </blockquote>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-7 col-lg-7 col-xl-7">
            <img className="img-fluid" src="./images/12.jpg" alt="img" />
          </div>
          <div className=" col-md-5 col-lg-5 col-xl-5 d-none d-md-block icoo">
            <div className="row ">
              <img
                className="col-md-7 col-lg-7 col-xl-7 img-fluid"
                src="./images/13.jpg"
                alt="img"
              />
              <img
                className="col-md-5 col-lg-5 col-xl-5 img-fluid"
                src="./images/16.jpg"
                alt="img"
              />
              <img
                className=" p-4 col-md-10 col-lg-10 col-xl-10 img-fluid"
                src="./images/15.jpg"
                style={{ zIndex: "1" }}
                alt="img"
              />
            </div>
            <div className="ico"></div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid computer py-5"
        style={{ background: "##F4F5F7" }}
      >
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-xl-8">
              <h1 className="">Computer Science</h1>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Being a great developer starts with being a great programmer. In
                Foundations and on-campus, we drill into core programming
                concepts to ensure your fluency in reading and writing code.
                Once you've solidified these areas, you're ready to move beyond
                the language to focus on front-end vs. back-end development,
                systems, frameworks and ultimately full-stack applications.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              <img
                src="images/4.4.png"
                className="img-fluid"
                width="50%"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid computer">
        <div className="container ">
          <div className="row py-5">
            <div className="col-md-4 col-lg-4 col-xl-4">
              {" "}
              <img src="images/data.png" alt="img" />
              <h3>Data Structures</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Data Structures are fundamental to CS as they allow developers
                to work with complex data, while balancing processing power and
                memory requirements. At GMTsoftware you will learn the inner
                wizardry of commonly used data structures like arrays, hash
                tables, lists, trees and heaps. Beyond learning how to use them,
                you'll also write them yourself.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              {" "}
              <img src="images/algorithms.png" alt="img" />
              <h3>Algorithms</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Understanding algorithms is an integral part of being a
                developer. At GMTsoftware, you'll not only learn to write the
                whole range of essential CS algorithms like sorting, searching,
                and encryption, but you'll also know which one to choose at the
                right time..
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              {" "}
              <img src="images/graph.png" alt="img" />
              <h3>Big-O Space & Time Analysis</h3>{" "}
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                The spirit of efficiency in CS stems from its early days and
                continues today. At GMTsoftware, you will learn to evaluate and
                optimize an algorithm for its efficiency in terms of both space
                and time using asymptotic time analysis.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h1>Front-end development</h1>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4">
            <img src="images/window.png" alt="img" />
            <h3>React & JavaScript MVC</h3>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              JavaScript is redefining what it means to be a modern web
              application. We'll start with using jQuery for simple page changes
              and move on to study design patterns of "Single Page Web
              Applications" using React and Redux.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4">
            {" "}
            <img src="images/html.png" alt="img" />
            <h3>HTML5</h3>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              HTML is the markup language that started it all and is still the
              backbone of web information. HTML5 adds new contextual tags,
              semantics and new capabilities to web browsers. While HTML is one
              of the easier languages to master, it's a critical part of the
              stack.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4">
            {" "}
            <img src="images/css3.png" alt="img" />
            <h3>CSS3</h3>{" "}
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              If HTML is the architect, CSS is the interior designer. Know how
              CSS decorates HTML and go beyond to create simple but effective
              designs for your projects. Use tools like SCSS along with
              Bootstrap to make your sites beautiful and responsive.
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-7 col-lg-7 col-xl-7">
            <img className="img-fluid" src="./images/10.jpg" alt="img" />
          </div>
          <div className=" col-md-5 col-lg-5 col-xl-5 d-none d-md-block icoo">
            <div className="row ">
              <img
                className="col-md-7 col-lg-7 col-xl-7 img-fluid"
                src="./images/17.jpg"
                alt="img"
              />
              <img
                className="col-md-5 col-lg-5 col-xl-5 img-fluid"
                src="./images/21.jpg"
                alt="img"
              />
              <img
                className=" p-4 col-md-10 col-lg-10 col-xl-10 img-fluid"
                src="./images/18.jpg"
                style={{ zIndex: "1" }}
                alt="img"
              />
            </div>
            <div className="ico"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid computer py-5">
        <div className="container">
          <h1>Back-end development</h1>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4">
              <img src="images/window.png" alt="img" />
              <h3>Node.js & Express</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                JavaScript is an incredibly flexible and popular language,
                quickly becoming the "lingua franca" of the web. Node.js, a
                platform built on Chrome's JavaScript runtime, allows Javascript
                to run server-side. This makes JavaScript the only programming
                language that runs in the front-end and back-end.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              {" "}
              <img src="images/html.png" alt="img" />
              <h3>Services & APIs</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                APIs allow us to connect to vast amounts of data and
                functionality. For example, we will learn about systems of
                authentication via OAuth and building payment systems using APIs
                by providers like Stripe and Balanced. Mastering APIs gives you
                the ability to harness the vast potential of external API
                services available on the web.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4">
              {" "}
              <img src="images/server.png" alt="img" /> <h3>Databases</h3>{" "}
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Master data persistence by building your own SQL database
                engine, learning about new NoSQL databases like Redis and Mongo
                and how to integrate these into your applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container py-5">
          <h1>Data</h1>
          <div className="row">
            <div className="col-md-4 col-xl-4 col-lg-4">
              <img src="images/window.png" alt="img" />
              <h3>SQLite & PostgreSQL</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                SQL is one of the most popular database languages in use today.
                Although NoSQL is on the rise, having a strong understanding of
                SQL is still a vital skill for any software developer. We'll
                learn the ins and outs of this relational database language so
                you can comfortably store and manage a web application's data
                with it.
              </p>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4">
              {" "}
              <img src="images/html.png" alt="img" />
              <h3>ORM Tools</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Understanding various database languages and knowing how to use
                them is important... But integrating with a database from a web
                application can be tedious, especially when building the more
                complex projects covered at GMTsoftware. We'll learn how to use
                JavaScript ORM tools to improve your programming productivity.
              </p>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4">
              <FaGithub size={100} />
              <h3>Git Version Control</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                If you've ever worked on a project where someone named a file
                "FINAL - Proposal - DY.doc", you know why Version Control is
                necessary. Go beyond just version control, learn how to use Git
                to effectively drive your workflow. You'll get hands-on
                experience using Git to collaborate with your fellow classmates
                during the project phase of the course.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <h3>TEXT EDITORS</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                VS code? Vim? Emacs? Sublime Text? Notepad++ ? We won't start a
                flame war here, but you'll be a text wrangling expert before the
                Immersive is over. Whatever editor you choose, we can show you
                the hidden corners where the experts hide their productivity
                secrets.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <h3>TEST-DRIVEN DEVELOPMENT</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                Testing code with code is a fundamental aspect of scalability
                and reliability. You'll learn where and why to test-drive your
                development. Then you'll learn popular testing frameworks and
                apply them to write tests for your own projects
              </p>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
              <h3>SHELL & SYSTEMS</h3>
              <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                If a monitor is a computer's face, then a Shell prompt is a
                window into its soul. Learn how to be comfortable in the Shell
                (Terminal, Console) and how to control machines using Shell
                Scripting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
