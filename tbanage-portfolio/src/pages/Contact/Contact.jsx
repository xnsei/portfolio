import "./Contact.css";
import EarthCanvas from "../../models/Earth.jsx";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";
import {simpleFadeIn, simpleSlideInLeft} from "../../utils/motion.js";
import {color, useColorModeValue} from "@chakra-ui/react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_67h6hnf',
                'template_w95l14s',
                {
                    from_name: name,
                    to_name: "Tanmay Banage",
                    from_email: email,
                    to_email: "tanmaybanage@gmail.com",
                    message: content,
                },
                'hgSB8ytPrTPt0ColW'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you for your message! I will get back to you as soon as possible.");

                    setName("");
                    setEmail("");
                    setContent("");
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    const backgroundColor = useColorModeValue("#f0e7db", "#202023");
    const fontColor = useColorModeValue("#58585e", "#f0e7db");
    const designerThemeColor = useColorModeValue("#ff63c3", "#88ccca");

    const inputStyleConfig = {
        color: fontColor,
        backgroundColor: backgroundColor,
        borderRadius: '25px',
        border: `2px solid ${fontColor}`
    }

    const designerStyleConfig = {
        color: designerThemeColor,
    }

    return (
        <div className="contact_container">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={simpleSlideInLeft}
                className="form_container"
            >
                <p style={{color: fontColor}} className="form_greetings">Get in touch!</p>
                <span style={designerStyleConfig} className="label">Your Name</span>
                <input style={inputStyleConfig} className="input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="What's your name?" />
                <span style={designerStyleConfig} className="label">Your Email</span>
                <input style={inputStyleConfig} className="input" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="What's your email?" />
                <span style={designerStyleConfig} className="label">Your Message</span>
                <textarea style={inputStyleConfig} rows={7} className="input" name="content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="What you want to say?" />
                <button style={inputStyleConfig} onClick={handleSubmit} className="send_button">{loading ? 'Sending...' : 'Send'}</button>
            </motion.div>
            <motion.div
                nitial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={simpleFadeIn}
                className="earth_container"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default Contact
