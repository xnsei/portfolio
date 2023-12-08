import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <div className="project-image-container">
            <img src={project.img} alt={project.title} className="project-image" />
        </div>
        <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
                {project.projectUrl && <a href={project.projectUrl} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>}
                {project.githubUrl && <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">Github</a>}
            </div>
        </div>
    </div>
);

export default ProjectCard;
