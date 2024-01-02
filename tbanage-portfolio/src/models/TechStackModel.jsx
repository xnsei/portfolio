import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import {simpleFadeIn} from "../utils/motion.js";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float enabled={true} speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 0.2]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const TechStackModel = ({ icon }) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={simpleFadeIn}
        >
            <Canvas
                frameloop='demand'
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
            >
                    <OrbitControls enableZoom={false} />
                    <Ball imgUrl={icon} />

                <Preload all />
            </Canvas>
        </motion.div>
    );
};

export default TechStackModel;