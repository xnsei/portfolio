import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {

    return (
        <div className="App">
            <div className="sticky top-0">
                <Navbar/>
            </div>
            <div className="flex flex-col">
                <div id="home"><Home/></div>
                <div id="experience"><Experience/></div>
                <div id="projects"><Projects/></div>
                <div id="contact"><Contact/></div>
            </div>
        </div>
    )
}

export default App
