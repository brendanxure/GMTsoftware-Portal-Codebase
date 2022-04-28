import React from 'react'
import './Home2.css'


function Home2() {
    return (
        <div className="container">
        <div className="home2">
            <div className='cur '>
    <h1 className="top-line">Cutting-Edge Curriculum</h1>
<p  style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>Being a great software engineer means not only being fluent with the latest frameworks and programming languages, but also having an evolved intuition for writing code that is efficient, secure and maintainable. The Fullstack curriculum is designed to help you build a strong theoretical core as well as master higher level technologies in software development for the web.</p>
<p style={{ lineHeight: "1.6rem", fontSize: "1rem" }} >The stack we teach is fullstack JavaScript. JavaScript is here in a big way and it is growing bigger every day. This surge in popularity is driven by the demands of today's internet users for real-time, interactive and dynamic applications, built in JavaScript. </p>
            </div>
<div className='react_img'><img src='images/4.4.png' width="60%" className='img1' alt="cur" /></div>
</div>



            <hr/>


            <div className="home_courses">
            <div className="homeee"> <img className="home_courses_img"  alt="code"  src="images/5.5.png"/>
            <h3>Computer Science</h3> 
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>We stand on the shoulders of giants - become fluent in the use of data structures, algorithms and run-time analysis. We'll also study best practices in software engineering: Object-Oriented Design, asynchronous programming and software design.</p></div>
            <div className="homeee"> <img className="home_courses_img"  alt="code"  src="images/frontend.png"/><h3>Front-end Development</h3>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>User expectations of Web and Mobile Applications have significantly increased in the last 10 years and the level of sophistication of front-end development has increased to match it. We'll study HTML5 and CSS and go beyond with modern technologies like React.</p>
            </div>
            <div className="homeee"> <img className="home_courses_img"  alt="code"  src="images/backend.png"/><h3>Back-end Development</h3> <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>Take your JavaScript skills to the backend with Node.js and the amazing ecosystem of libraries that have made JavaScript the leader in next-generation backend web engineering. Master the use of APIs to connect to vast amounts of user data.</p> </div>
            <div className="homeee">  <img  className="home_courses_img" alt="code"  src="images/server.png"/> <h3>Databases</h3> <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>Master data persistence by building your own SQL database engine, learning about new NoSQL databases like Redis and Mongo and how to integrate these into your applications.</p></div>
            <div className="homeee"> <img className="home_courses_img"  alt="code"  src="images/tools.png"/> <h3>Tools & best practices</h3> <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>Git, text editors, Test-Driven Development, virtual machines... know the state of the art tools that developers are using to increase the productivity of their work.Presentation Hierarchy Icon</p> </div>
            <div className="homeee">  <img  className="home_courses_img"  alt="code" src="images/algorithm.png"/> <h3>Master Series</h3> <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>We know that your learning journey doesn't end on the last day at Fullstack. That’s why we’ve created the Masters Series, a collection of workshops and lectures designed to deepen your understanding of key computer science concepts and industry best practices, giving you the tools and confidence you need to keep moving forward in your new career.</p> </div>
            </div>
        <hr/>
        </div>
    )
}

export default Home2
