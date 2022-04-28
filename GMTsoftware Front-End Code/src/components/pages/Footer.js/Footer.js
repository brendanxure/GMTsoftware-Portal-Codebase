import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="container-fluid bg-dark" style={{ color: "#fff" }}>
      <div className="container">
        {/* <section className='mx-auto'>
          <div>
            <p className='text-center  pt-4' style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              Subscribe  to receive the latest news and trends in the world of technology
        </p>
            <p className='text-center' style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
              You can unsubscribe at any time.
        </p>
          </div>
         
          <div className='w-50 mx-auto'>
            <form>
              <input
                className='form-control'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <div className="mx-auto w-25 d-flex justify-content-center">
                <button className="btn my-3 btn-danger" style={{ background:"rgb(149, 29, 29)"}}>Subscribe</button>
              </div>
            </form>
          </div>
        </section> */}

        <div className="container">
          <div className="footer-links row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
              <div className=" text-center justify-content-items">
                <h2>About Us</h2>
                <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>
                  We strive to provide the tech industry with the people it
                  needs, while providing life-changing opportunities to people
                  from all walks of life. We bring people together and we offer
                  more than just software development, we focus on clients
                  needs, go deep into requirements to suggest improvements, plan
                  our workflow to reduce the budget, and never miss the
                  deadlines.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4">
              <div className="text-center">
                <h2>Contact</h2>
                <div className="contact_us">
                  <ImLocation2 size={26} color="#fff" /> Address: 6th Floor,
                  Theodak Plaza, Opp National Hospital, Central Business
                  District, Abuja.
                </div>

                <div className="contact_us">
                  <MdPhoneIphone size={26} color="#fff" /> +2348160197959
                </div>
                <div className="contact_us">
                  <MdEmail size={26} color="#fff" /> greatmindsoftware@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container">
          <div className="row d-flex">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center mt-4">
              <Link to="/">
                <img
                  src="./lg.png"
                  className="img-fluid align-self"
                  alt="logo"
                  style={{ width: "40%" }}
                />
              </Link>
            </div>
            <small className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center mt-4 h5">
              GMTsoftware © 2022
            </small>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center my-4">
              <div className="d-flex justify-content-center align-items-center">
                <Link
                  className="m-2"
                  to={"//www.facebook.com/GmtsoftwareNG"}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook size={30} color="#fff" />
                </Link>
                <Link
                  className="m-2"
                  to={"//www.instagram.com/thegmtsoftware/"}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} color="#fff" />
                </Link>
                <Link
                  className="m-2"
                  to={"//"}
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube size={30} color="#fff" />
                </Link>
                <Link
                  className="m-2"
                  to={"//www.twitter.com/GMTsoftware"}
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter size={30} color="#fff" />
                </Link>
                <Link
                  className="social-icon-link"
                  to={
                    "//www.linkedin.com/company/greatmind-tech-and-software-solutions/"
                  }
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={30} color="#fff" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
