import TechStackModel from "../../models/TechStackModel.jsx";
import {technologies} from "@/constants/index.js";

const Skills = () => {
    return (
        <div className="w-full mx-auto my-20 justify-center items-center">
            <p className="text-teal-500 text-xl font-medium">
                Tech Stack I use but not limited to
            </p>
            <div className="flex flex-wrap justify-center items-center">
                {technologies.map((skill) => (
                    <div key={skill.name} className="m-8 w-32 h-24 skill">
                        <TechStackModel icon={skill.icon}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
