import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import './Projects.css';
import React from "react";
import {projects} from "../../constants/index.js";
import {motion} from "framer-motion";
import {simpleFadeIn} from "../../utils/motion.js";
import {useColorModeValue} from "@chakra-ui/react";

const Projects = () => {
    const designerThemeColor = useColorModeValue("#ff63c3", "#88ccca");
    const designerStyleConfig = {
        color: designerThemeColor,
    }

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={simpleFadeIn}
            className="projects-container"
        >
            <p style={designerStyleConfig} className="projects_greetings">Some of the Projects I built</p>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </motion.div>
    );
}

export default Projects
