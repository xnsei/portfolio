import LostProgrammer from "../../models/LostProgrammer.jsx";
import Reveal from "@/components/Reveal.tsx";
import FadeIn from "@/components/FadeIn.tsx";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div
                    className="mx-auto order-2 lg:order-1 max-w-full w-4/5 flex flex-col justify-center"
                >
                    <FadeIn delay={0.25}>
                        <Reveal delay={0.75}>
                            <div className="flex flex-col items-start space-y-4">
                                <p className="text-teal-500 mt-12 mb-[-1rem] text-xl font-medium">
                                    Hi, My Name is
                                </p>
                                <h1 className="text-5xl font-extrabold">Tanmay Banage</h1>
                                <h2 className="text-lg font-normal ml-2">
                                    I'm a full stack software engineer
                                </h2>
                            </div>
                        </Reveal>
                    </FadeIn>
                    <FadeIn delay={1.75}>
                        <div className="text-justify mt-12 ml-3">
                            <p className="text-xl font-normal">
                                I'm a software engineer graduated from IIT Indore in 2021, committed to
                                excellence and continuous growth. My proven track record reflects
                                competence in crafting impactful software solutions. Embracing
                                challenges with enthusiasm, I contribute as a collaborative team player,
                                always fostering a humble approach to learning and innovation.
                            </p>
                        </div>
                    </FadeIn>
                </div>
                <div
                    className="m-4 order-1 lg:order-2 flex items-center justify-center h-40vh lg:h-70vh overflow-hidden">
                    <LostProgrammer/>
                </div>
            </div>
        </div>
    );
};

export default Home;
