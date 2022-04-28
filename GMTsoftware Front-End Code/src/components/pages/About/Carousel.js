import React from "react";

function ControlledCarousel() {
  return (
    <div>
      <div className="testimonial">
        <div className="container py-2">
          <div className="row text-center text-white">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-4">Our Team</h1>
              {/* <p className="lead mb-0">Using Bootstrap 4 grid and utilities, create a nice team page.</p>
                            <p className="lead">Snippet by<a href="https://bootstrapious.com/snippets" className="text-white">
                                <u>Bootstrapious</u></a>
                            </p> */}
            </div>
          </div>
        </div>
        {/* <!-- End --> */}

        <div className="container">
          <div className="row text-center">
            {/* 
                    <!-- Team item --> */}
            <div className="col-xl-6 col-sm-6 mb-3">
              <div className="bg-white rounded shadow-lg py-3 px-4">
                <img
                  src="./images/bayo.jpg"
                  alt="img"
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Adebayo Stephen Owolabi</h5>
                <span className="small text-uppercase text-muted">
                  Software Engineer
                </span>
                <h4
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.6rem",
                    fontSize: "1rem",
                    letterSpacing: "-.6px",
                  }}
                >
                  Adebayo is a Software Developer in Abuja. Adebayo has a
                  Bachelor's Degree in Electrical/Electronic. He spends most of
                  his time working with Javascript, CSS3, HTML5,
                  React,flutter,python(django) and he is passionate about
                  everything related to software development and a great
                  teacher. He will be introducing the the student to computer
                  science and further-more, He will be taking the front-end
                  development courses.
                </h4>
                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#facebook" className="social-link"><FaFacebookF size={30} color="#710100"/></a></li>
                                    <li className="list-inline-item"><a href="#twitter" className="social-link"><FaTwitter size={30} color="#710100"/></a></li>
                                    <li className="list-inline-item"><a href="#instagram" className="social-link"><FaInstagram size={30} color="#710100"/></a></li>
                                    <li className="list-inline-item"><a href="#linked" className="social-link"><FaLinkedin size={30} color="#710100"/></a></li>
                                </ul> */}
              </div>
            </div>

            {/* <!-- End --> */}

            {/* <!-- Team item --> */}
            <div className="col-xl-6 col-sm-6 mb-3">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="./images/frz.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ayodeji Felix Oladoyin</h5>
                <span className="small text-uppercase text-muted">
                  Software Developer
                </span>
                <h4
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.6rem",
                    fontSize: "1rem",
                    letterSpacing: "-.6px",
                  }}
                >
                  {" "}
                  Ayodeji is a MERN stack and Python Developer. Ayodeji has a
                  Bachelor'Degree in Geology. He was one of the mentors for the
                  Andela Google Africa Developer Scholarship (GADS) cohort 2020.
                  Lately, He focuses on React, Python and Server–Side using Node
                  js and Python.
                </h4>
              </div>
            </div>

            {/* <!-- Team item --> */}
            <div className="col-xl-6 col-sm-6 mb-3">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="./images/fm.jpg"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Femi Joseph</h5>
                <span className="small text-uppercase text-muted">
                  UI/UX Designer & Legal Adviser
                </span>
                <h4
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.6rem",
                    fontSize: "1rem",
                    letterSpacing: "-.6px",
                  }}
                >
                  {" "}
                  Femi is a tech advocate lawyer, he is a UI/UX designer and has
                  worked on multiple project. Femi has a LL'B in Law. Lately, He
                  focuses on building UI/UX using Figma Plus Figjam,
                  Flutterflow, Notion, Webflow, Adobe XD .
                </h4>
                {/* <h4 style={{fontWeight:"400", lineHeight: "1.6rem", fontSize: "1rem", letterSpacing:"-.6px"}}> Adebayo is a Software Developer in Maitama Abuja.Adebayo has a Bachelor'Degre in Electrical/Electronic. He spends most of his time working with Javascript, CSS3, and HTML5,React and he is passionate about everything related to software developemnt and a great teacher
           He will be introducing the student to computer science and further-more He will be taken the front-end development courses </h4> */}
                {/* <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><FaFacebookF size={30} color="#710100"/></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><FaTwitter size={30} color="#710100"/></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><FaInstagram size={30} color="#710100"/></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><FaLinkedin size={30} color="#710100"/></a></li>
                                </ul> */}
              </div>
            </div>
            {/* <!-- End --> */}

            {/* <!-- Team item --> */}
            <div className="col-xl-6 col-sm-6 mb-3">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="./images/favour.jpg"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ofodile Favour</h5>
                <span className="small text-uppercase text-muted">
                  UI/UX Designer/Digital Strategist
                </span>
              </div>
            </div>
            {/* <!-- Team item --> */}
            <div className="col-xl-6 col-sm-6 mb-3">
              <div className="bg-white rounded shadow-lg py-5 px-4">
                <img
                  src="./images/wole.jpg"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Dada Oluwole</h5>
                <span className="small text-uppercase text-muted">
                  Software Developer
                </span>
                <h4
                  style={{
                    fontWeight: "400",
                    lineHeight: "1.6rem",
                    fontSize: "1rem",
                    letterSpacing: "-.6px",
                  }}
                >
                  {" "}
                  Wole is a MERN stack . Ayodeji has a Bachelor'Degree in
                  Computer Science. He focuses on React, Python and Server–Side
                  using Node js and Python.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ControlledCarousel;
