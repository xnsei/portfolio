import React from 'react';
import './Skills.css';
import TechStackModel from "../../models/TechStackModel.jsx";
import {technologies} from "../../constants/index.js";

const Skills = () => {
    return (
        <div className="skills-container">
            <p className="greetings">Tech Stack I'm proficient with..</p>
            {technologies.map((skill) => {
                return (
                    <div className="skill" key={skill.name}>
                        <TechStackModel icon={skill.icon} />
                    </div>
                )
            })}
        </div>
    );
};

export default Skills;
