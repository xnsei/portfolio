import Skills from "../../components/skills/Skills.jsx";
import "./Experience.css";
import {experiences} from "../../constants/index.js";


const ExperienceItem = ({ jobTitle, company, companyURL, period, description }) => (
    <div className="experience-item">
        <h2 onClick={() => window.open(companyURL)} className="company">{company}</h2>
        <h3 className="job-title">{jobTitle}</h3>
        <div className="period">{period}</div>
        <ul className="description">
            {description.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    </div>
);

const Experience = () => {
    return (
        <div className="experience_container">
            <div className="child_container">
                <p className="greetings">My professional experience includes..</p>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
            <Skills />
        </div>
    )
}

export default Experience
