
import avatar from "../assets/headshot.jpeg"

function About(){
    return (
        <div>
        <h2></h2>
        <div className="about-me">
        <img src={avatar} className="avatar-style" />
        <p>My name is Alex Lofton and I am a Junior Software Engineer who recently graduated from Univeristy of Denver and their Full Stack Web Development boot camp in April of 2024. I am a curious and life-long learner and data-driven individual looking to build products to improve people's quality of life.</p> 
        <p>Combining my experience in customer service and my passion for accessible and cohesive UI- I believe that through the process of creative problem solving, planning, and effective collaboration- anything can be built.</p>
        </div>
        </div>
    )
}

export default About;