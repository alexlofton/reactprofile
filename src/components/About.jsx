
import avatar from "../assets/headshot2.0.png"

function About(){
    return (
        <div>
        <h2></h2>
        <div className="about-me">
        <img src={avatar} className="avatar-style" />

        <p>My name is Alex Lofton, a Junior Software Engineer out of the University of Denver's Full Stack Web Development boot camp, specializing in backend technologies like React, JavaScript, Node.js, MongoDB, and SQL. My journey as a lifelong learner and data-driven individual fuels my passion for leveraging backend knowledge to create products that enhance people's lives.
        </p>
        
        <p>My foundation in customer service merges seamlessly with my dedication to crafting intuitive user interfaces. I firmly believe that with innovative solutions, organization, and teamwork, we can bring any idea to fruition. I'm eager to expand my expertise in databases and am committed to continuous learning to stay at the forefront of backend development.
        </p>

        </div>
        </div>
    )
}

export default About;