import * as THREE from "three";
import { useEffect, useRef} from "react";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";

const LostProgrammer = () => {

    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(15, 15, 15);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        function addStar() {
            const starGeometry = new THREE.TorusGeometry(0.25, 0.08, 3, 8)
            const star = new THREE.Mesh(starGeometry, new THREE.MeshBasicMaterial({color: 0xffffff}));

            const [x, y, z] = Array(3).fill(1).map(() => THREE.MathUtils.randFloatSpread(100));
            star.position.set(x,y,z);
            scene.add(star)
        }

        Array(200).fill(1).map(addStar);

        const gltfLoader = new GLTFLoader();
        const easeOut = t => 1 - Math.pow(1 - t, 3);

        gltfLoader.load("/lost_programmer/scene.gltf", (gltf) => {
            const model = gltf.scene;
            scene.add(model);
            const duration = 180;
            let frameCount = 0;


            const frameHandler = () => {
                if (frameCount < duration) {
                    const progress = easeOut(frameCount / duration);
                    const scale = 2 + 6 * progress;
                    model.scale.set(scale, scale, scale);
                    model.rotation.x = Math.PI * 0.5 * progress;
                    model.rotation.y = Math.PI * 2 * progress;
                    model.rotation.z = Math.PI * 0.5 * progress;

                    frameCount++;
                    requestAnimationFrame(frameHandler);
                }
            };

            function moveCamera() {
                const t = document.body.getBoundingClientRect().top;
                camera.position.z = Math.max(t * -0.2, 15);
                camera.position.x = Math.max(t * -0.2, 15);
                camera.position.y = Math.max(t * -0.2, 15);
            }

            document.body.onscroll = moveCamera;

            frameHandler();
        });

        function animate() {
            requestAnimationFrame(animate)
            scene.rotation.x+= Math.PI * 0.0004;
            scene.rotation.y+= Math.PI * 0.0004;
            scene.rotation.z+= Math.PI * 0.0004;
            controls.zoomSpeed = 0.5;
            controls.update();
            renderer.render(scene, camera)
        }

        animate();

    }, []);

    return (
        <canvas ref={canvasRef}></canvas>
    )
}

export default LostProgrammer;