import {Link as ScrollLink} from 'react-scroll';
import {IoLogoGithub} from 'react-icons/io5';
import SlideDown from "@/components/SlideDown.tsx";

const Navbar = () => {
    const ScrollOffsets = [
        {id: 'home', offset: -70},
        {id: 'experience', offset: 0},
        {id: 'projects', offset: -30},
        {id: 'contact', offset: -360},
    ]

    return (
        <SlideDown delay={1.25}>
            <div className="sticky top-0 z-40 w-full bg-teal-600 flex justify-center">
                <div className="container grid grid-cols-1 h-14 max-w-screen-2xl items-center">
                    <div className="flex justify-center items-center">
                        <div className="md:mr-16 hidden lg:flex">
                            <span className="text-2xl font-medium text-white">Tanmay Banage</span>
                        </div>
                        <div className="list-none flex">
                            {ScrollOffsets.map((item, index) => {
                                const { id, offset } = item;
                                return (
                                    <li className="mr-4 sm:mr-8 md:mr-16 font-medium text-xl" key={index}>
                                        <ScrollLink
                                            activeClass="active"
                                            to={id}
                                            spy={true}
                                            smooth={true}
                                            offset={offset}
                                            duration={500}
                                            className="text-white hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out"
                                        >
                                            {id.charAt(0).toUpperCase() + id.slice(1)}
                                        </ScrollLink>
                                    </li>
                                );
                            })}
                        </div>
                        <div className="hidden md:flex">
                            <a
                                href="https://github.com/xnsei/portfolio/tree/main/tbanage-portfolio"
                                className="text-xl inline-flex items-center text-white hover:text-blue-800 cursor-pointer transition duration-300 ease-in-out"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoGithub className="mr-1" />
                                <span className="ml-1 font-medium">Source</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </SlideDown>
    );
};

export default Navbar;
