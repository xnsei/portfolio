import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="experience" spy={true} smooth={true} offset={0} duration={500}>
                        Experience
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-350} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar