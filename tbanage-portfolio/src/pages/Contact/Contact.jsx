import "./Contact.css";
import EarthCanvas from "../../models/Earth.jsx";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";
import {simpleFadeIn, simpleSlideInLeft} from "../../utils/motion.js";

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

    return (
        <div className="contact_container">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={simpleSlideInLeft}
                className="form_container"
            >
                <p className="form_greetings">Get in touch!</p>
                <span className="label">Your Name</span>
                <input className="input" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="What's your name?" />
                <span className="label">Your Email</span>
                <input className="input" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="What's your email?" />
                <span className="label">Your Message</span>
                <textarea rows={7} className="input" name="content" value={content} onChange={(e) => setContent(e.target.value)} placeholder="What you want to say?" />
                <button onClick={handleSubmit} className="send_button">{loading ? 'Sending...' : 'Send'}</button>
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
