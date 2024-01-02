import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

const Programmer = () => {
    const programmer = useGLTF("./lost_programmer/scene.gltf");
    return (
        <primitive object={programmer.scene} scale={25} position-y={0} rotation-y={0}/>
    );
};

const LostProgrammer = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <OrbitControls
                autoRotate={true}
                enableZoom={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            >
                <Programmer/>
            </OrbitControls>
        </Canvas>
    );
};

export default LostProgrammer;