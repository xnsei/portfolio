import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";
import {projects} from "@/constants/index.js";
import {motion} from "framer-motion";
import {simpleFadeIn} from "@/utils/motion.js";

const Projects = () => {

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.8}}
            variants={simpleFadeIn}
            className="mx-auto max-w-screen-2xl w-4/5 my-20"
        >
            <p className="text-teal-500 mt-12 mb-8 text-xl font-medium">
                Some of the Projects I built
            </p>
            <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-24">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </motion.div>
    );
}

export default Projects
