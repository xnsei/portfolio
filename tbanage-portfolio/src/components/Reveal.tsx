import {motion} from "framer-motion";

export default function Reveal({children, width = "fit-content", delay}: {
    children: JSX.Element,
    width?: "fit-content" | "100%",
    delay: number,
}) {

    const color = "#14b8a6";

    return (
        <div style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, delay: delay + 0.25}}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"},
                }}
                initial="hidden"
                animate="visible"
                transition={{duration: 0.5, ease: "easeIn", delay: delay}}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    zIndex: 20,
                    backgroundColor: color,
                }}
            >
            </motion.div>
        </div>
    );
};