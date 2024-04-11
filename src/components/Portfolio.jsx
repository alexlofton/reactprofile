import ProjectCard from "./ProjectCard";
import projects from "../assets/projects.json"

function Portfolio(){
    

    return (
        <>
        <h2>Portfolio</h2>
        <div className="card-map">
        {
            projects.map((project, index) => {
                return(
                    <div className="card-style"key={index}>
                        <ProjectCard 
                        title={project.title}
                        description={project.description}
                        github={project.github}
                        link={project.link}
                        image={project.image}
                        />
                    </div>
                )
            })
        }
    </div>
        </>
    )
}


export default Portfolio;