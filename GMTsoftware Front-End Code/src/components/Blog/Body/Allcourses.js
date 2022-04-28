import React from "react";
import TemporaryDrawer from "../navbar/Navbar";
import Flutter2 from "./Flutter";
import Datascience from "./UX";
import Mernstack from "./Mernstack";
import Python2 from "./Python";
import Navbar from "../../Navbar";
import Footer from "../../pages/Footer.js/Footer";

function Allcourses() {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%" }}>
        <TemporaryDrawer />
        <hr className="my-12" />
        <Datascience />
        <hr className="my-12" />
        <Mernstack />
        <hr className="my-12" />
        <Flutter2 />
        <hr className="my-12" />
        <Python2 />
      </div>
      <Footer />
    </>
  );
}

export default Allcourses;
