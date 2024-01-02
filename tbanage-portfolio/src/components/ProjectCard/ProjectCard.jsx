const ProjectCard = ({project}) => {
    return (
        <div
            className="border-2 transition-transform duration-300 ease-in-out rounded-3xl cursor-pointer overflow-hidden hover:transform hover:-translate-y-2 hover:border-teal-500">
            <div className="">
                <img
                    src={project.img}
                    alt={project.title}
                    className="transition-transform hover:scale-105"
                />
            </div>
            <div className="text-center">
                <h3 className="text-2xl my-4 font-semibold">
                    {project.title}
                </h3>
                <p className="text-lg text-gray-400 mb-4">{project.description}</p>
                <div className="mx-auto my-4 project-links">
                    {project.projectUrl && (
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 rounded-xl mr-4 transition-transform duration-300 ease-in-out hover:transform hover:border-teal-500"
                        >
                            View Project
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border-2 rounded-xl mr-4 transition-transform duration-300 ease-in-out hover:transform hover:border-teal-500"
                        >
                            Github
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
