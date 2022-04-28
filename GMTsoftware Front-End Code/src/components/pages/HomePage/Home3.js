import React from 'react'


function Home3() {
    return (
        <div className="container">
        <hr/>
        <div className="prog_struc">
        <h2 className="top-line">What We Look For</h2>

        </div>
        <div className="homee">
            <div className="homeee"> <img  className="home_courses_img" src="images/heart.png" alt="what"/><h3>Passion for coding</h3> 
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>You've demonstrated your passion by beginning to learn on your own. You have the determination to become a developer whether you get into Fullstack or not.</p></div>
            <div className="homeee"> <img  className="home_courses_img" src="images/pedestal.png" alt="web" /><h3>Growth Mindset</h3>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>Whatever you've been working on so far, you've strived hard for excellence. You're focused on facilitating growth both personally and for others.</p>
            </div>
            <div className="homeee"> <img  className="home_courses_img" src="images/hello.png" alt="web" /><h3>"No asshole" rule*</h3> <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>We like to live by a no-asshole policy. We look for students who are considerate, helpful and work well with others.

<q>*Inspired by Robert I. Sutton.</q></p>
 </div>
            </div>
            </div>
    )
}

export default Home3
