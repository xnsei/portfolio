import LostProgrammer from "../../models/LostProgrammer.jsx";
import "./Home.css";
import {Suspense} from "react";
import Loader from "../../components/Loader/Loader.jsx";
import {motion} from "framer-motion";
import {simpleFadeIn} from "../../utils/motion.js";

const Home = () => {
    return (
        <motion.div
            className="container"
        >
            <Suspense fallback={<Loader />}>
                <section className="lost_programmer">
                    <LostProgrammer />
                </section>
            </Suspense>
            <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={simpleFadeIn}
                className="About"
            >
                <section className="heading">
                    <p className="greetings">Hi, My Name is</p>
                    <h1>Tanmay Banage</h1>
                    <h2>I'm a full stack software engineer</h2>
                </section>
                <section className="description">
                    <p>I thrive on turning ideas into reality through code. With a strong foundation in full-stack development, I bring a creative and analytical approach to problem-solving. My journey in the world of software engineering has been marked by continuous learning and a drive to deliver impactful solutions.</p>
                </section>
            </motion.section>
        </motion.div>
    )
}

export default Home
