import React from 'react'
import './Home2.css'

function Program() {
    const style = {
        backgroundColor: '#fff',
        color: '#000',
      }
    return (
        <div className="container">
        <div style={style}>
        <h2 className="top-line struc">Program Structure</h2>
        <div className="prog_struc" >
        <div className="pro"> <img className="home_courses_img" src="images/construction.png" alt="prog" /><h3>Fullstack Foundations</h3> 
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>Foundations is an intensive part-time course designed to help you master the core concepts of JavaScript before you get to campus. In Foundations, you'll be working on a targeted core curriculum with live instructors and real coding projects. You'll be prepared to hit the ground running when you come to campus.</p>
            
            </div>
            
            {/* </div> */}






            <div className="pro">
            <img className="home_courses_img" src="images/bank.png" alt="pro"/><h3>GMTsoftware</h3>
            <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>While the required on-campus Fullstack course runs from 9:30am to 6:30pm — many students stay much longer to attend talks and to work on projects. You'll truly be in an immersive environment - like moving to Beijing to learn Chinese. Much of your learning will happen through hands-on workshops and building projects. And our Masters Series will take you beyond software and mold you into a well-rounded engineer.
</p></div>
            
              <div className="pro"> <img className="home_courses_img" src="images/astronaut.png" alt="pro"/><h3>Career Success</h3> <p style={{ lineHeight: "1.6rem", fontSize: "1rem" }}>In the 2nd half of your semester, our Career Success team will begin matching your interests with employers — a process that will continue after graduation. With our dedicated training program on technical interviewing and becoming a star developer, we'll make sure you're ready!
</p></div>
        </div>
            
        {/* <div className="homee"> */}
           
 </div>
 </div>
    )
}

export default Program
