import Skills from "../../components/skills/Skills.jsx";
import {experiences} from "@/constants/index.js";
import {motion} from "framer-motion";
import {simpleFadeIn} from "@/utils/motion.js";

const ExperienceItem = ({jobTitle, company, companyURL, period, description}) => {

    return (
        <div className="experience-item">
            <a href={companyURL} target="_blank" rel="noopener noreferrer"
               className="company text-4xl mt-1 font-semibold">
                {company}
            </a>
            <h2 className="job-title mt-2 text-xl font-medium">
                {jobTitle}
            </h2>
            <p className="period my-1 text-lg font-normal" style={{color: "#999"}}>
                {period}
            </p>
            <ul className="mt-4 text-lg font-normal list-disc pl-4">
                {description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="mx-auto max-w-screen-2xl w-4/5 mt-64 lg:mt-24">
            <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={simpleFadeIn}
                className="child_container"
            >
                <p className="text-teal-500 mt-12 text-xl font-medium">
                    My professional experience includes..
                </p>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </motion.div>
            <Skills/>
        </div>
    );
};

export default Experience;
