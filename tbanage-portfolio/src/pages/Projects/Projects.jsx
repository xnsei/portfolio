import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import './Projects.css';
import React from "react";
import {projects} from "../../constants/index.js";

const Projects = () => {
    return (
        <div className="projects-container">
            <p className="projects_greetings">Tech Stack I'm proficient with..</p>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects
