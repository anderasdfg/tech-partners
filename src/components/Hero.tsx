import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Hero() {
    return (
        <section className="relative h-screen" id="home">
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                        <MeshDistortMaterial
                            color="#00BFFF"
                            attach="material"
                            distort={0.5}
                            speed={2}
                            transparent={true}
                            opacity={0.3}
                        />
                    </Sphere>
                </Canvas>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                    Technology that evolves with you.
                </h1>
                <p className="text-lg md:text-xl text-green mb-8">
                    Digital solutions. Without limits. In the cloud. With AI. Tailored for you.
                </p>
                <button className="bg-green text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-blue transition-colors">
                    Explore without limits
                </button>
            </div>
        </section>
    );
} 