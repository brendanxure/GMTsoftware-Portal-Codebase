import Home from "./components/pages/HomePage/Home";
import Success from "./components/pages/Courses/success";
import Failure from "./components/pages/Courses/failure";
import Curriculum from "./components/pages/Curriculum/Curriculum";
import SignUp from "./components/pages/SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Webdev from "./components/pages/Webdev/Webdev";
import UXdesigner from "./components/pages/Courses/UX designer";
import About from "./components/pages/About/About";
import FrontEnd from "./components/pages/Courses/FrontEnd";
import Fullstack from "./components/pages/Courses/Fullstack";
import Python from "./components/pages/Courses/Python";
import React1 from "./components/pages/Courses/React";
import Flutter from "./components/pages/Courses/Flutter";
import Companies from "./components/pages/Courses/Companies";
import Datascience from "./components/pages/Courses/Datascience";
import Digital from "./components/pages/Courses/Digital";
import Certificate from "./components/pages/Courses/Certificate";
import Allcourses from "./components/Blog/Body/Allcourses";
import Python2 from "./components/Blog/Body/Python";
import Flutter2 from "./components/Blog/Body/Flutter";
import Mernstack from "./components/Blog/Body/Mernstack";
import UIUX from "./components/Blog/Body/UX";
import UIUX2 from "./components/Blog/Body/UXDetails";
import Pythondetails from "./components/Blog/Body/PythonDetails";
import Flutterdetails from "./components/Blog/Body/Flutterdetails";
import Fullstackblog from "./components/Blog/Body/Fullstackblog";
import Certificates from "./Certificate/certificate";
import Dashboard from "./Dashboard/Dashboard";
import Homes from "./homeportal/Home";
import Login from "./SignIn/Login";
import Signup from "./SignUp/Signup";
import Tasks from "./Task/Task";
import Userprofile from "./Userprofile/Userprofile";
import Home4 from "./components/pages/HomePage/Home4";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/Fullstack" element={<Fullstack />} />
          <Route path="/Python" element={<Python />} />
          <Route path="/FrontEnd" element={<FrontEnd />} />
          <Route path="/React" element={<React1 />} />
          <Route path="/Flutter" element={<Flutter />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/web-dev" element={<Webdev />} />
          <Route path="/UXdesigner" element={<UXdesigner />} />
          <Route path="/About-Us" element={<About />} />
          <Route path="/Companies" element={<Companies />} />
          <Route path="/Data-Science" element={<Datascience />} />
          <Route path="/Digital-Marketing" element={<Digital />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Blog" element={<Allcourses />} />
          <Route path="/Pythonblog" element={<Python2 />} />
          <Route path="/Flutterblog" element={<Flutter2 />} />
          <Route path="/UI/UXblog" element={<UIUX />} />
          <Route path="/fullstackblog" element={<Mernstack />} />
          <Route path={"/Pythondetails"} element={<Pythondetails />} />
          <Route path={"/Flutterdetails"} element={<Flutterdetails />} />
          <Route path={"/fullstackdetails"} element={<Fullstackblog />} />
          <Route path={"/UI/UXblogdetails"} element={<UIUX2 />} />
          <Route exact path="/portal" element={<Homes />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Profile" element={<Userprofile />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="./testimonials" element={<Home4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
