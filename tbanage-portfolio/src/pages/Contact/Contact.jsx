import EarthCanvas from "../../models/Earth.jsx";
import {useState} from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";
import {simpleFadeIn, simpleSlideInLeft} from "@/utils/motion.js";

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
        <div className="mx-auto max-w-screen-2xl w-4/5 mt-64 lg:mt-24 my-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={simpleSlideInLeft}
                    className="flex flex-col order-2 lg:order-1"
                >
                    <p className="text-4xl font-bold mb-4">Get in touch!</p>
                    <span className="text-teal-500 text-xl ml-6 mb-2 font-medium">Your Name</span>
                    <input
                        className="border-2 border-white rounded-3xl bg-transparent px-4 py-2 mx-2 text-xl mb-4"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="What's your name?"
                    />
                    <span className="text-teal-500 text-xl ml-6 mb-2 font-medium">Your Email</span>
                    <input
                        className="border-2 border-white rounded-3xl bg-transparent px-4 py-2 mx-2 text-xl mb-4"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="What's your email?"
                    />
                    <span className="text-teal-500 text-xl ml-6 mb-2 font-medium">Your Message</span>
                    <textarea
                        rows={7}
                        className="border-2 border-white rounded-3xl bg-transparent px-4 py-2 mx-2 text-xl mb-4"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What you want to say?"
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-fit border-2 border-white rounded-3xl bg-transparent px-8 py-2 mx-2 text-xl mt-4 transition-transform duration-300 ease-in-out hover:transform hover:border-teal-500"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </motion.div>
                <motion.div
                    nitial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.8}}
                    variants={simpleFadeIn}
                    className="lg:ml-4 order-1 lg:order-2 h-96 lg:h-auto"
                >
                    <EarthCanvas/>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
