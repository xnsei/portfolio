import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";
import docker from "../assets/tech/docker.png";
import next from "../assets/tech/next.png";
import cpp from "../assets/tech/C++.png";
import scala from "../assets/tech/scala.png";
import sql from "../assets/tech/sql.png";
import LogFit from "../assets/projects/LogFit.png";
import DecentraMedia from "../assets/projects/DecentraMedia.png";
import ProjectSpotify from "../assets/projects/ProjectSpotify.png";


const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Next JS",
        icon: next,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Scala",
        icon: scala,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const projects = [
    {
        title: "LogFit",
        description: "Workouts & weight tracker app to help you achieve your fitness goals",
        img: LogFit,
        projectUrl: "https://logfit.vercel.app/",
        githubUrl: "https://github.com/xnsei/LogFit",
        techStack: ["React", "NodeJS", "MongoDB", "Typescript", "JWT", "socket.io"]
    },
    {
        title: "DecentraMedia",
        description: "Social Media platform built on the Ethereum blockchain",
        img: DecentraMedia,
        projectUrl: "",
        githubUrl: "https://github.com/xnsei/Decentralized-Social-Media",
        techStack: ["React", "Solidity", "Web3.js", "Truffle"]
    },
    {
        title: "Project Spotify",
        description: "Android app to share your favourite music with friends and closed ones",
        img: ProjectSpotify,
        projectUrl: "",
        githubUrl: "https://github.com/xnsei/Music-Sharing-and-Streaming-App",
        techStack: ["Android Studio", "Java", "Firebase"]
    },
];

const experiences = [
    {
        jobTitle: 'Full Stack Software Engineer',
        company: 'Agoda',
        companyURL: 'https://www.agoda.com/',
        period: 'Oct 2021 - Present',
        description: [
            'Contributed to the White Label team, Accessibility and the Hotels Ranking team.',
            'Onboarded new white-labels on Agoda.',
            'Enhanced accessibility of the Agoda mobile and desktop website.',
            'Worked on the Hotels Ranking team to improve the ranking of hotels on Agoda.',
            'Reduced the time taken to generate the ranking of hotels by 25%.',
            'Reduced testing time of deployment packages from 3 hrs to 20 mins by implementing load testing in CI/CD pipeline.',
        ]
    },
];

export {technologies, projects, experiences};